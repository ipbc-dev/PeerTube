(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{t94N:function(a,e,l){"use strict";l.r(e);var n=l("8Y7J");class i{}var o=l("pMnS"),t=l("1+T7"),d=l("iInd"),s=l("SVse"),u=l("s7LF"),r=l("ecRl"),p=l("QUbI"),m=l("3szM"),c=l("0C+C"),v=l("cKMx"),h=l("LTwV"),g=l("mOsc"),f=l("pyEO"),C=l("M9Zh"),b=l("kIzR"),M=l("fKnF"),V=l("ihI+"),F=l("lJxs"),I=l("eIep"),S=(l("ey9i"),l("M0ag")),N=l("UFc/"),_=(l("HUk+"),l("XRCn"));class k extends S.a{constructor(a,e,l,n,i,o,t,d){super(),this.formValidatorService=a,this.route=e,this.router=l,this.notifier=n,this.videoService=i,this.loadingBar=o,this.videoCaptionService=t,this.i18n=d,this.isUpdatingVideo=!1,this.userVideoChannels=[],this.schedulePublicationPossible=!1,this.videoCaptions=[],this.waitTranscodingEnabled=!0,this.updateDone=!1}ngOnInit(){this.buildForm({}),this.route.data.pipe(Object(F.a)(a=>a.videoData)).subscribe(({video:a,videoChannels:e,videoCaptions:l})=>{this.video=new N.a(a),this.userVideoChannels=e,this.videoCaptions=l,this.schedulePublicationPossible=this.video.privacy===_.m.PRIVATE,a.getFiles().length>1&&(this.waitTranscodingEnabled=!1),setTimeout(()=>this.hydrateFormFromVideo())},a=>{console.error(a),this.notifier.error(a.message)})}onUnload(a){const{text:e,canDeactivate:l}=this.canDeactivate();if(!l)return a.returnValue=e,e}canDeactivate(){if(!0===this.updateDone)return{canDeactivate:!0};const a=this.i18n("You have unsaved changes! If you leave, your changes will be lost.");for(const e of this.videoCaptions)if(e.action)return{canDeactivate:!1,text:a};return{canDeactivate:!1===this.formChanged,text:a}}checkForm(){return this.forceCheck(),this.form.valid}update(){!1!==this.checkForm()&&!0!==this.isUpdatingVideo&&(this.video.patch(this.form.value),this.loadingBar.start(),this.isUpdatingVideo=!0,this.videoService.updateVideo(this.video).pipe(Object(I.a)(()=>this.videoCaptionService.updateCaptions(this.video.id,this.videoCaptions))).subscribe(()=>{this.updateDone=!0,this.isUpdatingVideo=!1,this.loadingBar.complete(),this.notifier.success(this.i18n("Video updated.")),this.router.navigate(["/videos/watch",this.video.uuid])},a=>{this.loadingBar.complete(),this.isUpdatingVideo=!1,this.notifier.error(a.message),console.error(a)}))}hydrateFormFromVideo(){this.form.patchValue(this.video.toFormPatch());const a=[{url:"thumbnailUrl",name:"thumbnailfile"},{url:"previewUrl",name:"previewfile"}];for(const e of a)fetch(this.video[e.url]).then(a=>a.blob()).then(a=>{this.form.patchValue({[e.name]:a})})}}var T=l("TtxX"),D=l("GiVz"),O=n["\u0275crt"]({encapsulation:0,styles:[t.a],data:{}});function w(a){return n["\u0275vid"](0,[(a()(),n["\u0275eld"](0,0,null,null,22,"div",[["class","margin-content"]],null,null,null,null,null)),(a()(),n["\u0275eld"](1,0,null,null,6,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(a()(),n["\u0275eld"](2,0,null,null,1,"span",[["class","mr-1"]],null,null,null,null,null)),(a()(),n["\u0275ted"](-1,null,["Aktualizovat"])),(a()(),n["\u0275eld"](4,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(a,e,l){var i=!0;return"click"===e&&(i=!1!==n["\u0275nov"](a,5).onClick(l.button,l.ctrlKey,l.metaKey,l.shiftKey)&&i),i}),null,null)),n["\u0275did"](5,671744,null,0,d.s,[d.p,d.a,s.LocationStrategy],{routerLink:[0,"routerLink"]},null),n["\u0275pad"](6,2),(a()(),n["\u0275ted"](7,null,["",""])),(a()(),n["\u0275eld"](8,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(a,e,l){var i=!0;return"submit"===e&&(i=!1!==n["\u0275nov"](a,10).onSubmit(l)&&i),"reset"===e&&(i=!1!==n["\u0275nov"](a,10).onReset()&&i),i}),null,null)),n["\u0275did"](9,16384,null,0,u["\u0275angular_packages_forms_forms_z"],[],null,null),n["\u0275did"](10,540672,null,0,u.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),n["\u0275prd"](2048,null,u.ControlContainer,null,[u.FormGroupDirective]),n["\u0275did"](12,16384,null,0,u.NgControlStatusGroup,[[4,u.ControlContainer]],null,null),(a()(),n["\u0275eld"](13,0,null,null,1,"my-video-edit",[],null,null,null,r.b,r.a)),n["\u0275did"](14,245760,null,0,p.a,[m.a,c.a,v.a,h.a,d.a,d.p,g.a,f.a,C.a,n.NgZone],{form:[0,"form"],formErrors:[1,"formErrors"],validationMessages:[2,"validationMessages"],userVideoChannels:[3,"userVideoChannels"],schedulePublicationPossible:[4,"schedulePublicationPossible"],videoCaptions:[5,"videoCaptions"],waitTranscodingEnabled:[6,"waitTranscodingEnabled"]},null),(a()(),n["\u0275eld"](15,0,null,null,7,"div",[["class","submit-container"]],null,null,null,null,null)),(a()(),n["\u0275eld"](16,0,null,null,6,"div",[["class","submit-button"]],null,[[null,"click"]],(function(a,e,l){var n=!0;return"click"===e&&(n=!1!==a.component.update()&&n),n}),null,null)),n["\u0275prd"](512,null,s["\u0275NgClassImpl"],s["\u0275NgClassR2Impl"],[n.IterableDiffers,n.KeyValueDiffers,n.ElementRef,n.Renderer2]),n["\u0275did"](18,278528,null,0,s.NgClass,[s["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),n["\u0275pod"](19,{disabled:0}),(a()(),n["\u0275eld"](20,0,null,null,1,"my-global-icon",[["iconName","validate"]],null,null,null,b.b,b.a)),n["\u0275did"](21,114688,null,0,M.a,[n.ElementRef,V.a],{iconName:[0,"iconName"]},null),(a()(),n["\u0275eld"](22,0,null,null,0,"input",[["type","button"],["value","Aktualizovat"]],null,null,null,null,null))],(function(a,e){var l=e.component,n=a(e,6,0,"/videos/watch",l.video.uuid);a(e,5,0,n),a(e,10,0,l.form),a(e,14,0,l.form,l.formErrors,l.validationMessages,l.userVideoChannels,l.schedulePublicationPossible,l.videoCaptions,l.waitTranscodingEnabled);var i=a(e,19,0,!l.form.valid||!0===l.isUpdatingVideo);a(e,18,0,"submit-button",i),a(e,21,0,"validate")}),(function(a,e){var l=e.component;a(e,4,0,n["\u0275nov"](e,5).target,n["\u0275nov"](e,5).href),a(e,7,0,null==l.video?null:l.video.name),a(e,8,0,n["\u0275nov"](e,12).ngClassUntouched,n["\u0275nov"](e,12).ngClassTouched,n["\u0275nov"](e,12).ngClassPristine,n["\u0275nov"](e,12).ngClassDirty,n["\u0275nov"](e,12).ngClassValid,n["\u0275nov"](e,12).ngClassInvalid,n["\u0275nov"](e,12).ngClassPending)}))}function y(a){return n["\u0275vid"](0,[(a()(),n["\u0275eld"](0,0,null,null,1,"my-videos-update",[],null,[["window","beforeunload"]],(function(a,e,l){var i=!0;return"window:beforeunload"===e&&(i=!1!==n["\u0275nov"](a,1).onUnload(l)&&i),i}),w,O)),n["\u0275did"](1,114688,null,0,k,[m.a,d.a,d.p,g.a,h.a,T.c,v.a,D.a],null,null)],(function(a,e){a(e,1,0)}),null)}var R=n["\u0275ccf"]("my-videos-update",k,y,{},{},[]),P=l("9AJC"),E=l("CLta"),A=l("IheW"),L=l("9IV+"),U=l("G0yt"),j=l("Huiz"),B=l("nvTd"),x=l("upD4"),z=l("6RP5"),K=l("HvDw"),X=l("vQJr"),Z=l("l/z6"),G=l("wQE2"),J=l("biPt"),H=l("mTdg"),Y=l("VNja"),Q=l("mpCX"),q=l("hD3C"),W=l("F4xN"),$=l("Qmuk"),aa=l("yXFd"),ea=l("wpFD"),la=l("/7bI"),na=l("JtBY"),ia=l("D/X6"),oa=l("cvwr"),ta=l("tSwB"),da=l("RtUV"),sa=l("W3Gj"),ua=l("AD+P"),ra=l("hlYB"),pa=l("I88b"),ma=l("GvuC"),ca=l("V+Hg"),va=l("45hh"),ha=l("WZ9d"),ga=l("fR23"),fa=l("1MVc"),Ca=l("Vurf"),ba=l("mpAo"),Ma=l("c6Lk"),Va=l("j8ES"),Fa=l("cp0P");class Ia{constructor(a,e,l){this.videoService=a,this.videoChannelService=e,this.videoCaptionService=l}resolve(a){return this.videoService.getVideo({videoId:a.params.uuid}).pipe(Object(I.a)(a=>Object(Fa.a)([this.videoService.loadCompleteDescription(a.descriptionPath).pipe(Object(F.a)(e=>Object.assign(a,{description:e}))),this.videoChannelService.listAccountVideoChannels(a.account).pipe(Object(F.a)(a=>a.data),Object(F.a)(a=>a.map(a=>({id:a.id,label:a.displayName,support:a.support})))),this.videoCaptionService.listCaptions(a.id).pipe(Object(F.a)(a=>a.data))])),Object(F.a)(([a,e,l])=>({video:a,videoChannels:e,videoCaptions:l})))}}var Sa=l("fftR"),Na=l("37nT"),_a=l("Phsq");class ka{}var Ta=l("mB+Y"),Da=l("VSng"),Oa=l("7LN8"),wa=l("KB/w"),ya=l("IbkX"),Ra=l("Fa87"),Pa=l("oz/p"),Ea=l("VQoA"),Aa=l("IP0z"),La=l("/HVE"),Ua=l("hOhj"),ja=l("g4HV"),Ba=l("No4M"),xa=l("PCNd"),za=l("pYoP"),Ka=l("0dEx");l.d(e,"VideoUpdateModuleNgFactory",(function(){return Xa}));var Xa=n["\u0275cmf"](i,[],(function(a){return n["\u0275mod"]([n["\u0275mpd"](512,n.ComponentFactoryResolver,n["\u0275CodegenComponentFactoryResolver"],[[8,[o.a,R,P.g,P.h,P.e,P.f]],[3,n.ComponentFactoryResolver],n.NgModuleRef]),n["\u0275mpd"](4608,s.NgLocalization,s.NgLocaleLocalization,[n.LOCALE_ID,[2,s["\u0275angular_packages_common_common_a"]]]),n["\u0275mpd"](4608,u.FormBuilder,u.FormBuilder,[]),n["\u0275mpd"](4608,u["\u0275angular_packages_forms_forms_o"],u["\u0275angular_packages_forms_forms_o"],[]),n["\u0275mpd"](4608,E.h,E.h,[]),n["\u0275mpd"](4608,A.m,A.s,[s.DOCUMENT,n.PLATFORM_ID,A.q]),n["\u0275mpd"](4608,A.t,A.t,[A.m,A.r]),n["\u0275mpd"](5120,A.a,(function(a,e){return[a,new L.a(e)]}),[A.t,n.Injector]),n["\u0275mpd"](4608,A.p,A.p,[]),n["\u0275mpd"](6144,A.n,null,[A.p]),n["\u0275mpd"](4608,A.l,A.l,[A.n]),n["\u0275mpd"](6144,A.b,null,[A.l]),n["\u0275mpd"](4608,A.g,A.o,[A.b,n.Injector]),n["\u0275mpd"](4608,A.c,A.c,[A.g]),n["\u0275mpd"](4608,U.A,U.A,[n.ComponentFactoryResolver,n.Injector,U.yb,U.B]),n["\u0275mpd"](4608,D.a,D.a,[n.TRANSLATIONS_FORMAT,n.TRANSLATIONS,n.LOCALE_ID,[2,D.b]]),n["\u0275mpd"](4608,j.a,j.a,[d.p,D.a]),n["\u0275mpd"](4608,B.a,B.a,[]),n["\u0275mpd"](4608,x.a,x.a,[A.c,B.a,j.a]),n["\u0275mpd"](4608,z.a,z.a,[A.c,B.a,j.a]),n["\u0275mpd"](4608,K.a,K.a,[A.c,B.a,j.a]),n["\u0275mpd"](4608,X.a,X.a,[A.c,j.a,B.a,D.a]),n["\u0275mpd"](4608,h.a,h.a,[A.c,j.a,B.a,f.a,D.a]),n["\u0275mpd"](4608,Z.a,Z.a,[A.c,j.a]),n["\u0275mpd"](4608,G.a,G.a,[A.c,B.a,j.a]),n["\u0275mpd"](4608,J.a,J.a,[A.c,f.a,j.a,B.a,n.NgZone]),n["\u0275mpd"](4608,v.a,v.a,[A.c,f.a,j.a]),n["\u0275mpd"](4608,H.a,H.a,[A.c,B.a,j.a,f.a]),n["\u0275mpd"](4608,Y.a,Y.a,[A.c,j.a,B.a,n.NgZone]),n["\u0275mpd"](4608,m.a,m.a,[u.FormBuilder]),n["\u0275mpd"](4608,Q.a,Q.a,[D.a]),n["\u0275mpd"](4608,q.a,q.a,[D.a]),n["\u0275mpd"](4608,W.a,W.a,[D.a]),n["\u0275mpd"](4608,$.a,$.a,[D.a]),n["\u0275mpd"](4608,aa.a,aa.a,[D.a]),n["\u0275mpd"](4608,ea.a,ea.a,[D.a]),n["\u0275mpd"](4608,la.a,la.a,[D.a]),n["\u0275mpd"](4608,na.a,na.a,[D.a]),n["\u0275mpd"](4608,c.a,c.a,[D.a]),n["\u0275mpd"](4608,ia.a,ia.a,[D.a]),n["\u0275mpd"](4608,oa.a,oa.a,[D.a]),n["\u0275mpd"](4608,ta.a,ta.a,[A.c,j.a,h.a,f.a]),n["\u0275mpd"](4608,da.a,da.a,[D.a]),n["\u0275mpd"](4608,sa.a,sa.a,[D.a]),n["\u0275mpd"](4608,ua.a,ua.a,[D.a]),n["\u0275mpd"](4608,ra.a,ra.a,[A.c,j.a,B.a]),n["\u0275mpd"](4608,pa.a,pa.a,[A.c,j.a,B.a,h.a]),n["\u0275mpd"](4608,ma.a,ma.a,[]),n["\u0275mpd"](4608,ca.a,ca.a,[ma.a]),n["\u0275mpd"](4608,va.a,va.a,[ca.a]),n["\u0275mpd"](4608,ha.a,ha.a,[A.c,B.a,j.a,va.a,f.a]),n["\u0275mpd"](4608,C.a,C.a,[D.a]),n["\u0275mpd"](4608,ga.a,ga.a,[]),n["\u0275mpd"](4608,fa.a,fa.a,[Ca.a,A.c,j.a,B.a,ba.a]),n["\u0275mpd"](4608,Ma.a,Ma.a,[A.c,B.a,j.a]),n["\u0275mpd"](4608,Va.a,Va.a,[A.c,B.a,j.a]),n["\u0275mpd"](4608,Ia,Ia,[h.a,G.a,v.a]),n["\u0275mpd"](4608,Sa.a,Sa.a,[Na.a,D.a]),n["\u0275mpd"](1073742336,d.t,d.t,[[2,d.z],[2,d.p]]),n["\u0275mpd"](1073742336,ka,ka,[]),n["\u0275mpd"](1073742336,s.CommonModule,s.CommonModule,[]),n["\u0275mpd"](1073742336,u["\u0275angular_packages_forms_forms_d"],u["\u0275angular_packages_forms_forms_d"],[]),n["\u0275mpd"](1073742336,u.ReactiveFormsModule,u.ReactiveFormsModule,[]),n["\u0275mpd"](1073742336,u.FormsModule,u.FormsModule,[]),n["\u0275mpd"](1073742336,Ta.e,Ta.e,[]),n["\u0275mpd"](1073742336,E.f,E.f,[]),n["\u0275mpd"](1073742336,Da.ButtonModule,Da.ButtonModule,[]),n["\u0275mpd"](1073742336,Oa.SharedModule,Oa.SharedModule,[]),n["\u0275mpd"](1073742336,wa.CalendarModule,wa.CalendarModule,[]),n["\u0275mpd"](1073742336,A.e,A.e,[]),n["\u0275mpd"](1073742336,A.d,A.d,[]),n["\u0275mpd"](1073742336,U.x,U.x,[]),n["\u0275mpd"](1073742336,U.C,U.C,[]),n["\u0275mpd"](1073742336,U.N,U.N,[]),n["\u0275mpd"](1073742336,U.Z,U.Z,[]),n["\u0275mpd"](1073742336,U.kb,U.kb,[]),n["\u0275mpd"](1073742336,U.m,U.m,[]),n["\u0275mpd"](1073742336,ya.b,ya.b,[]),n["\u0275mpd"](1073742336,Ra.InputTextModule,Ra.InputTextModule,[]),n["\u0275mpd"](1073742336,Pa.InputMaskModule,Pa.InputMaskModule,[]),n["\u0275mpd"](1073742336,Ea.b,Ea.b,[]),n["\u0275mpd"](1073742336,Ea.h,Ea.h,[]),n["\u0275mpd"](1073742336,Ea.e,Ea.e,[]),n["\u0275mpd"](1073742336,Ea.c,Ea.c,[]),n["\u0275mpd"](1073742336,Ea.f,Ea.f,[]),n["\u0275mpd"](1073742336,Ea.d,Ea.d,[]),n["\u0275mpd"](1073742336,Ea.g,Ea.g,[]),n["\u0275mpd"](1073742336,Aa.a,Aa.a,[]),n["\u0275mpd"](1073742336,La.b,La.b,[]),n["\u0275mpd"](1073742336,Ua.ScrollingModule,Ua.ScrollingModule,[]),n["\u0275mpd"](1073742336,ja.TooltipModule,ja.TooltipModule,[]),n["\u0275mpd"](1073742336,Ba.MultiSelectModule,Ba.MultiSelectModule,[]),n["\u0275mpd"](1073742336,xa.a,xa.a,[]),n["\u0275mpd"](1073742336,za.a,za.a,[]),n["\u0275mpd"](1073742336,i,i,[]),n["\u0275mpd"](1024,d.n,(function(){return[[{path:"",component:k,canActivate:[_a.a,Ka.a],canDeactivate:[Sa.a],resolve:{videoData:Ia}}]]}),[]),n["\u0275mpd"](256,n.LOCALE_ID,"cs-CZ",[]),n["\u0275mpd"](256,u.COMPOSITION_BUFFER_MODE,!1,[]),n["\u0275mpd"](256,A.q,"XSRF-TOKEN",[]),n["\u0275mpd"](256,A.r,"X-XSRF-TOKEN",[]),n["\u0275mpd"](256,n.TRANSLATIONS_FORMAT,"xlf",[])])}))}}]);