import { Component, OnInit, Input, OnDestroy } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Notifier, ServerService, RestExtractor, User, UserService } from '@app/core'
import { environment } from '../../../../environments/environment'
import { FormValidatorService, FormReactive } from '@app/shared/shared-forms'
import { forkJoin, Subject, Subscription } from 'rxjs'
import { SelectItem } from 'primeng/api'
import { first, catchError } from 'rxjs/operators'
import { NSFWPolicyType } from '@shared/models/videos/nsfw-policy.type'
import { forEach, now } from 'lodash-es'
import { BytesPipe } from '@app/shared/shared-main/angular'

@Component({
  selector: 'my-account-storage-settings',
  templateUrl: './my-account-storage-settings.component.html',
  styleUrls: ['./my-account-storage-settings.component.scss']
})
export class MyAccountStorageSettingsComponent extends FormReactive implements OnInit, OnDestroy {
  static GET_PREMIUM_STORAGE_API_URL = environment.apiUrl + '/api/v1/premium-storage/'
  @Input() user: User = null
  @Input() reactiveUpdate = false
  @Input() notifyOnUpdate = true
  @Input() userInformationLoaded: Subject<any>
  // @Input() userQuotaObject: Object

  languageItems: SelectItem[] = []
  defaultNSFWPolicy: NSFWPolicyType
  formValuesWatcher: Subscription
  configCopy: any
  havePremium: boolean
  userHavePremium: boolean
  userPremiumPlan: any
  dropdownSelectedPlan: number
  storagePlans: any
  chosenPlan: any = null
  // private notifier: Notifier
  private bytesPipe: BytesPipe

  constructor (
    protected formValidatorService: FormValidatorService,
    private authHttp: HttpClient,
    private restExtractor: RestExtractor,
    // private authService: AuthService,
    private notifier: Notifier,
    // private userService: UserService,
    private serverService: ServerService
  ) {
    super()
    this.bytesPipe = new BytesPipe()
    this.updateDetails = this.updateDetails.bind(this)
  }

  ngOnInit () {
    this.buildForm({
      storagePlan: null
    })
    this.startSubscriptions()
  }

  ngOnDestroy () {
    this.formValuesWatcher?.unsubscribe()
    if (document.body) document.body.removeEventListener('PurchaseSuccess', this.updateDetails)
  }

  startSubscriptions () {
    let oldForm: any
    forkJoin([
      this.getPlans(),
      this.getMyPlan(),
      this.serverService.getVideoLanguages(),
      this.serverService.getConfig(),
      this.userInformationLoaded.pipe(first())
    ]).subscribe(([ plans, myPlan, languages, config ]) => {
      // console.log('ICEICE plans', plans)
      // console.log('ICEICE myPlan', myPlan)
      /* Check User storage plan */
      if (myPlan['success'] && myPlan['data'].length > 0) {
        this.userHavePremium = true
        this.userPremiumPlan = myPlan['data'][myPlan['data'].length - 1]
        if (plans['success']) {
          plans['plans'].forEach((plan: any) => {
            if (plan.id == this.userPremiumPlan.planId) {
              this.chosenPlan = plan
            }
          })
        }
      } else {
        this.userHavePremium = false
        this.userPremiumPlan = {}
        this.userPremiumPlan.planId = -1
      }
      this.dropdownSelectedPlan = this.userPremiumPlan
      /* Check instance premium storage plans and disable the ones lower than user actual plan */
      if (plans['success'] && plans['plans'].length > 0) {
        this.havePremium = true
        this.storagePlans = plans['plans']
        // console.log('ICEICE storagePlans: ', this.storagePlans)
      } else {
        this.havePremium = false
      }
      this.languageItems = [ { label: $localize`Unknown language`, value: '_unknown' } ]
      this.languageItems = this.languageItems
                               .concat(languages.map(l => ({ label: l.label, value: l.id })))

      const videoLanguages = this.user.videoLanguages
        ? this.user.videoLanguages
        : this.languageItems.map(l => l.value)

      // this.defaultNSFWPolicy = config.instance.defaultNSFWPolicy
      this.configCopy = config
      /* Update form values after check userData */
      this.form.patchValue({
        storagePlan: this.userPremiumPlan.planId
      })

      if (this.reactiveUpdate) {
        oldForm = { ...this.form.value }
        this.formValuesWatcher = this.form.valueChanges.subscribe((formValue: any) => {
          const updatedKey = Object.keys(formValue).find(k => formValue[k] !== oldForm[k])
          oldForm = { ...this.form.value }
          // this.updateDetails([updatedKey])
        })
      }
    })
    this.subscribeToPremiumStorageEvent()
  }

  subscribeToPremiumStorageEvent () {
    if (document.body) {
      // console.log('ICEICE triggering subscribeToPremiumStorageEvent')
      document.body.removeEventListener('PurchaseSuccess', this.updateDetails)
      document.body.addEventListener('PurchaseSuccess', this.updateDetails)
    } else {
      setTimeout(() => {
        this.subscribeToPremiumStorageEvent()
      }, 200)
    }
  }

  getPlans () {
    return this.authHttp.get(MyAccountStorageSettingsComponent.GET_PREMIUM_STORAGE_API_URL + 'plans')
               .pipe(catchError(res => this.restExtractor.handleError(res)))
  }

  getMyPlan () {
    return this.authHttp.get(MyAccountStorageSettingsComponent.GET_PREMIUM_STORAGE_API_URL + 'get-user-active-payment')
               .pipe(catchError(res => this.restExtractor.handleError(res)))
  }

  getTubePayId () {
    return this.chosenPlan.tubePayId
  }

  havePremiumStorage () {
    return this.havePremium
  }

  userHavePremiumStorage () {
    return this.userHavePremium
  }

  premiumStoragePlanChange (ev: any) {
    const chosenPlanId: number = this.form.value['storagePlan']
    // console.log('ICEICE chosenPlanId is: ', chosenPlanId)
    if (chosenPlanId > -1) {
      this.storagePlans.forEach((plan: any) => {
        if (plan.id == chosenPlanId) {
          this.chosenPlan = plan
        }
      })
    } else {
      this.chosenPlan = null
    }
    // console.log('After premiumStoragePlanChange chosenPlan is: ', this.chosenPlan)
  }

  getChosenPlanPrice () {
    return parseFloat(this.chosenPlan.priceTube).toFixed(2)
  }

  getUserPremiumPlanId () {
    return this.userPremiumPlan ? this.userPremiumPlan.planId : -1
  }

  isOptionDisabled (optionId: number) {
    return optionId < this.getUserPremiumPlanId() ? 'disabled' : ''
  }

  isUpgradeDisabled () {
    return parseInt(this.form.value['storagePlan'], 10) === -1
  }

  getButtonValue () {
    return this.form.value['storagePlan'] <= this.getUserPremiumPlanId() ? 'Extend' : 'Upgrade'
  }

  getHRBytes (num: any) {
    return this.bytesPipe.transform(parseInt(num, 10), 0)
  }

  getFormattedDate (date: any) {
    const aux = new Date(date)
    return aux.toLocaleDateString()
  }

  updateDetails (paymentInfo: any) {
    let confirmedData = true
    let chosenPlanDuration: any
    let chosenPlanPrice: any
    let chosenPlanTubePayId: any
    let chosenPlanId: any

    // console.log('ICEICE paymentInfo is: ', paymentInfo)
    this.storagePlans.forEach((plan: any) => {
      // console.log('Comparing {', plan.tubePayId , '} with {', paymentInfo.detail.product.id, '}')
      if (plan.tubePayId == paymentInfo.detail.product.id) {
        // console.log('ICEICE comparison accepted')
        chosenPlanDuration = plan.duration
        chosenPlanPrice = plan.priceTube
        chosenPlanTubePayId = plan.tubePayId
        chosenPlanId = plan.id
      }
    })
    /* Check if user wants to extend more than a year (not allowed) */
    // tslint:disable-next-line: max-line-length
    // if (this.userHavePremium && this.userPremiumPlan.planId === chosenPlanId && (Date.parse(this.userPremiumPlan.dateTo) + parseInt(chosenPlanDuration, 10) > Date.now() + 31556955999)) {
    //   this.notifier.error('You can not extend your plan more than 1 year')
    //   confirmedData = false
    // }
    if (chosenPlanDuration === undefined || chosenPlanPrice === undefined || chosenPlanId <= -1) {
      this.notifier.error('Something went wrong')
      confirmedData = false
    }

    /* tubePay && security */
    const paymentConfirmed = paymentInfo.detail.res.reportResponse.success
    const payment_tx = paymentInfo.detail.res.reportResponse.tx_res.tx_hash
    // console.log('ICEICE PaymentConfirmed & confirmedData are: ', paymentConfirmed, confirmedData)
    if (paymentConfirmed && confirmedData) {
      const postBody = {
        planId: chosenPlanId,
        duration: chosenPlanDuration,
        priceTube: chosenPlanPrice,
        tubePayId: chosenPlanTubePayId,
        payment_tx: payment_tx
      }
      // console.log('ICEICE going to call paymentPost with body: ', postBody)
      const postResponse = this.paymentPost(postBody)
      .subscribe(
        resp => {
          // console.log('ICEICE paymentPost response is: ', resp)
          if (resp['success'] && resp['data'] && resp['data'].active === true) {
            this.startSubscriptions()
            const event = new Event('premiumStorageAddedSuccessfully')
            document.body.dispatchEvent(event)
          }
        },
          err => {
            this.notifier.error(err.message)
            console.error(err.message)
          }
        )
      // console.log('ICEICE postResponse is: ', postResponse)
    } else {
      this.notifier.error('Something went wrong after the payment response')
    }
  }

  paymentPost (body: any) {
    return this.authHttp.post(MyAccountStorageSettingsComponent.GET_PREMIUM_STORAGE_API_URL + 'plan-payment', body)
    .pipe(catchError(res => this.restExtractor.handleError(res)))
  }

  // getDefaultVideoLanguageLabel () {
  //   return this.i18n('No language')
  // }

  // getSelectedVideoLanguageLabel () {
  //   return this.i18n('{{\'{0} languages selected')
  // }

}
