(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{lN7K:function(n,l,e){"use strict";e.r(l);var i=e("8Y7J");class t{}var a=e("pMnS"),u=e("fwT9"),o=e("B/uj"),r=e("iInd"),d=e("SVse"),s=(e("ey9i"),e("M0ag"));class c{constructor(n,l,e,i,t,a){this.userService=n,this.authService=l,this.notifier=e,this.router=i,this.route=t,this.i18n=a,this.success=!1,this.failed=!1,this.isPendingEmail=!1}ngOnInit(){const n=this.route.snapshot.queryParams;this.userId=n.userId,this.verificationString=n.verificationString,this.isPendingEmail="true"===n.isPendingEmail,this.userId&&this.verificationString?this.verifyEmail():this.notifier.error(this.i18n("Unable to find user id or verification string."))}verifyEmail(){this.userService.verifyEmail(this.userId,this.verificationString,this.isPendingEmail).subscribe(()=>{this.authService.isLoggedIn()&&this.authService.refreshUserInformation(),this.success=!0},n=>{this.failed=!0,this.notifier.error(n.message)})}}var m=e("vQJr"),p=e("Vurf"),g=e("mOsc"),f=e("GiVz"),v=i["\u0275crt"]({encapsulation:2,styles:[],data:{}});function h(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"my-signup-success",[["message","Your email has been verified and you may now login."]],null,null,null,u.b,u.a)),i["\u0275did"](1,49152,null,0,o.a,[],{message:[0,"message"]},null)],(function(n,l){n(l,1,0,"Your email has been verified and you may now login.")}),null)}function C(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"div",[["class","alert alert-success"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,[" Email updated. "]))],null,null)}function y(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,6,"div",[],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["An error occurred."])),(n()(),i["\u0275eld"](3,0,null,null,3,"a",[["routerLink","/verify-account/ask-send-email"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==i["\u0275nov"](n,4).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&t),t}),null,null)),i["\u0275did"](4,671744,null,0,r.s,[r.p,r.a,d.LocationStrategy],{queryParams:[0,"queryParams"],routerLink:[1,"routerLink"]},null),i["\u0275pod"](5,{isPendingEmail:0}),(n()(),i["\u0275ted"](-1,null,["Richiedi una nuova email di verifica"]))],(function(n,l){var e=n(l,5,0,l.component.isPendingEmail);n(l,4,0,e,"/verify-account/ask-send-email")}),(function(n,l){n(l,3,0,i["\u0275nov"](l,4).target,i["\u0275nov"](l,4).href)}))}function b(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,8,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,1,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,[" Verifica la conferma indirizzo email "])),(n()(),i["\u0275and"](16777216,null,null,1,null,h)),i["\u0275did"](4,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,null,1,null,C)),i["\u0275did"](6,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275and"](16777216,null,null,1,null,y)),i["\u0275did"](8,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,4,0,!e.isPendingEmail&&e.success),n(l,6,0,e.isPendingEmail&&e.success),n(l,8,0,e.failed)}),null)}function _(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"my-verify-account-email",[],null,null,null,b,v)),i["\u0275did"](1,114688,null,0,c,[m.a,p.a,g.a,r.p,r.a,f.a],null,null)],(function(n,l){n(l,1,0)}),null)}var M=i["\u0275ccf"]("my-verify-account-email",c,_,{},{},[]),P=e("s7LF"),I=(e("cPqw"),e("3szM")),O=e("Qmuk");class S extends s.a{constructor(n,l,e,i,t,a,u){super(),this.formValidatorService=n,this.userValidatorsService=l,this.userService=e,this.serverService=i,this.notifier=t,this.redirectService=a,this.i18n=u}get requiresEmailVerification(){return this.serverConfig.signup.requiresEmailVerification}ngOnInit(){this.serverConfig=this.serverService.getTmpConfig(),this.serverService.getConfig().subscribe(n=>this.serverConfig=n),this.buildForm({"verify-email-email":this.userValidatorsService.USER_EMAIL})}askSendVerifyEmail(){const n=this.form.value["verify-email-email"];this.userService.askSendVerifyEmail(n).subscribe(()=>{const l=this.i18n("An email with verification link will be sent to {{email}}.",{email:n});this.notifier.success(l),this.redirectService.redirectToHomepage()},n=>{this.notifier.error(n.message)})}}var E=e("pyEO"),N=e("dubb"),R=i["\u0275crt"]({encapsulation:0,styles:[['input[_ngcontent-%COMP%]:not([type=submit]){height:30px;width:340px;background:var(--inputColor);border:1px solid #c6c6c6;border-radius:3px;padding-left:15px;padding-right:15px;font-size:15px;display:block}input[_ngcontent-%COMP%]:not([type=submit])::-webkit-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::-moz-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::-ms-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::placeholder{color:var(--inputPlaceholderColor)}@media screen and (max-width:340px){input[_ngcontent-%COMP%]:not([type=submit]){width:100%}}input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer;outline:0}input[type=submit][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}input[type=submit][_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}input[type=submit].disabled[_ngcontent-%COMP%], input[type=submit][disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[fill="#000000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[fill="#000000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[fill="#000000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[fill="#000000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[fill="#000000"]{fill:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[stroke="#000000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[stroke="#000000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[stroke="#000000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[stroke="#000000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[stroke="#000000"]{stroke:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg stop[stop-color="#000000"]{stop-color:#fff}']],data:{}});function k(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"div",[["class","form-error"]],null,null,null,null,null)),(n()(),i["\u0275ted"](1,null,[" "," "]))],null,(function(n,l){n(l,1,0,l.component.formErrors["verify-email-email"])}))}function V(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,21,"form",[["novalidate",""],["role","form"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,l,e){var t=!0,a=n.component;return"submit"===l&&(t=!1!==i["\u0275nov"](n,2).onSubmit(e)&&t),"reset"===l&&(t=!1!==i["\u0275nov"](n,2).onReset()&&t),"ngSubmit"===l&&(t=!1!==a.askSendVerifyEmail()&&t),t}),null,null)),i["\u0275did"](1,16384,null,0,P["\u0275angular_packages_forms_forms_z"],[],null,null),i["\u0275did"](2,540672,null,0,P.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),i["\u0275prd"](2048,null,P.ControlContainer,null,[P.FormGroupDirective]),i["\u0275did"](4,16384,null,0,P.NgControlStatusGroup,[[4,P.ControlContainer]],null,null),(n()(),i["\u0275eld"](5,0,null,null,15,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),i["\u0275eld"](6,0,null,null,1,"label",[["for","verify-email-email"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Email"])),(n()(),i["\u0275eld"](8,0,null,null,10,"input",[["formControlName","verify-email-email"],["id","verify-email-email"],["placeholder","Indirizzo email"],["required",""],["type","email"]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,e){var t=!0;return"input"===l&&(t=!1!==i["\u0275nov"](n,12)._handleInput(e.target.value)&&t),"blur"===l&&(t=!1!==i["\u0275nov"](n,12).onTouched()&&t),"compositionstart"===l&&(t=!1!==i["\u0275nov"](n,12)._compositionStart()&&t),"compositionend"===l&&(t=!1!==i["\u0275nov"](n,12)._compositionEnd(e.target.value)&&t),t}),null,null)),i["\u0275prd"](512,null,d["\u0275NgClassImpl"],d["\u0275NgClassR2Impl"],[i.IterableDiffers,i.KeyValueDiffers,i.ElementRef,i.Renderer2]),i["\u0275did"](10,278528,null,0,d.NgClass,[d["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),i["\u0275pod"](11,{"input-error":0}),i["\u0275did"](12,16384,null,0,P.DefaultValueAccessor,[i.Renderer2,i.ElementRef,[2,P.COMPOSITION_BUFFER_MODE]],null,null),i["\u0275did"](13,16384,null,0,P.RequiredValidator,[],{required:[0,"required"]},null),i["\u0275prd"](1024,null,P.NG_VALIDATORS,(function(n){return[n]}),[P.RequiredValidator]),i["\u0275prd"](1024,null,P.NG_VALUE_ACCESSOR,(function(n){return[n]}),[P.DefaultValueAccessor]),i["\u0275did"](16,671744,null,0,P.FormControlName,[[3,P.ControlContainer],[6,P.NG_VALIDATORS],[8,null],[6,P.NG_VALUE_ACCESSOR],[2,P["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),i["\u0275prd"](2048,null,P.NgControl,null,[P.FormControlName]),i["\u0275did"](18,16384,null,0,P.NgControlStatus,[[4,P.NgControl]],null,null),(n()(),i["\u0275and"](16777216,null,null,1,null,k)),i["\u0275did"](20,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),i["\u0275eld"](21,0,null,null,0,"input",[["type","submit"],["value","Spedisci email di verifica"]],[[8,"disabled",0]],null,null,null,null))],(function(n,l){var e=l.component;n(l,2,0,e.form);var i=n(l,11,0,e.formErrors["verify-email-email"]);n(l,10,0,i),n(l,13,0,""),n(l,16,0,"verify-email-email"),n(l,20,0,e.formErrors["verify-email-email"])}),(function(n,l){var e=l.component;n(l,0,0,i["\u0275nov"](l,4).ngClassUntouched,i["\u0275nov"](l,4).ngClassTouched,i["\u0275nov"](l,4).ngClassPristine,i["\u0275nov"](l,4).ngClassDirty,i["\u0275nov"](l,4).ngClassValid,i["\u0275nov"](l,4).ngClassInvalid,i["\u0275nov"](l,4).ngClassPending),n(l,8,0,i["\u0275nov"](l,13).required?"":null,i["\u0275nov"](l,18).ngClassUntouched,i["\u0275nov"](l,18).ngClassTouched,i["\u0275nov"](l,18).ngClassPristine,i["\u0275nov"](l,18).ngClassDirty,i["\u0275nov"](l,18).ngClassValid,i["\u0275nov"](l,18).ngClassInvalid,i["\u0275nov"](l,18).ngClassPending),n(l,21,0,!e.form.valid)}))}function A(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,["Questa istanza non richiede la verifica dell'email"]))],null,null)}function T(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,5,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),i["\u0275eld"](1,0,null,null,1,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),i["\u0275ted"](-1,null,[" Richiedi email per verificare l'account "])),(n()(),i["\u0275and"](16777216,null,null,1,null,V)),i["\u0275did"](4,16384,null,0,d.NgIf,[i.ViewContainerRef,i.TemplateRef],{ngIf:[0,"ngIf"],ngIfElse:[1,"ngIfElse"]},null),(n()(),i["\u0275and"](0,[["emailVerificationNotRequired",2]],null,0,null,A))],(function(n,l){n(l,4,0,l.component.requiresEmailVerification,i["\u0275nov"](l,5))}),null)}function w(n){return i["\u0275vid"](0,[(n()(),i["\u0275eld"](0,0,null,null,1,"my-verify-account-ask-send-email",[],null,null,null,T,R)),i["\u0275did"](1,114688,null,0,S,[I.a,O.a,m.a,E.a,g.a,N.a,f.a],null,null)],(function(n,l){n(l,1,0)}),null)}var F=i["\u0275ccf"]("my-verify-account-ask-send-email",S,w,{},{},[]),L=e("9AJC"),x=e("IheW"),D=e("9IV+"),q=e("G0yt"),z=e("Huiz"),G=e("nvTd"),U=e("upD4"),B=e("6RP5"),j=e("HvDw"),K=e("LTwV"),X=e("l/z6"),H=e("wQE2"),J=e("biPt"),Z=e("cKMx"),Q=e("mTdg"),Y=e("VNja"),W=e("mpCX"),$=e("hD3C"),nn=e("F4xN"),ln=e("yXFd"),en=e("wpFD"),tn=e("/7bI"),an=e("JtBY"),un=e("0C+C"),on=e("D/X6"),rn=e("cvwr"),dn=e("tSwB"),sn=e("RtUV"),cn=e("W3Gj"),mn=e("AD+P"),pn=e("hlYB"),gn=e("I88b"),fn=e("GvuC"),vn=e("V+Hg"),hn=e("45hh"),Cn=e("WZ9d"),yn=e("M9Zh"),bn=e("fR23"),_n=e("1MVc"),Mn=e("mpAo"),Pn=e("c6Lk"),In=e("j8ES"),On=e("Phsq");const Sn={meta:{title:"Verify account email"}},En={meta:{title:"Verify account ask send email"}};class Nn{}var Rn=e("IbkX"),kn=e("7LN8"),Vn=e("Fa87"),An=e("oz/p"),Tn=e("VQoA"),wn=e("IP0z"),Fn=e("/HVE"),Ln=e("hOhj"),xn=e("g4HV"),Dn=e("No4M"),qn=e("PCNd"),zn=e("xXAv");e.d(l,"VerifyAccountModuleNgFactory",(function(){return Gn}));var Gn=i["\u0275cmf"](t,[],(function(n){return i["\u0275mod"]([i["\u0275mpd"](512,i.ComponentFactoryResolver,i["\u0275CodegenComponentFactoryResolver"],[[8,[a.a,M,F,L.g,L.h,L.e,L.f]],[3,i.ComponentFactoryResolver],i.NgModuleRef]),i["\u0275mpd"](4608,d.NgLocalization,d.NgLocaleLocalization,[i.LOCALE_ID,[2,d["\u0275angular_packages_common_common_a"]]]),i["\u0275mpd"](4608,P["\u0275angular_packages_forms_forms_o"],P["\u0275angular_packages_forms_forms_o"],[]),i["\u0275mpd"](4608,P.FormBuilder,P.FormBuilder,[]),i["\u0275mpd"](4608,x.m,x.s,[d.DOCUMENT,i.PLATFORM_ID,x.q]),i["\u0275mpd"](4608,x.t,x.t,[x.m,x.r]),i["\u0275mpd"](5120,x.a,(function(n,l){return[n,new D.a(l)]}),[x.t,i.Injector]),i["\u0275mpd"](4608,x.p,x.p,[]),i["\u0275mpd"](6144,x.n,null,[x.p]),i["\u0275mpd"](4608,x.l,x.l,[x.n]),i["\u0275mpd"](6144,x.b,null,[x.l]),i["\u0275mpd"](4608,x.g,x.o,[x.b,i.Injector]),i["\u0275mpd"](4608,x.c,x.c,[x.g]),i["\u0275mpd"](4608,q.A,q.A,[i.ComponentFactoryResolver,i.Injector,q.yb,q.B]),i["\u0275mpd"](4608,f.a,f.a,[i.TRANSLATIONS_FORMAT,i.TRANSLATIONS,i.LOCALE_ID,[2,f.b]]),i["\u0275mpd"](4608,z.a,z.a,[r.p,f.a]),i["\u0275mpd"](4608,G.a,G.a,[]),i["\u0275mpd"](4608,U.a,U.a,[x.c,G.a,z.a]),i["\u0275mpd"](4608,B.a,B.a,[x.c,G.a,z.a]),i["\u0275mpd"](4608,j.a,j.a,[x.c,G.a,z.a]),i["\u0275mpd"](4608,m.a,m.a,[x.c,z.a,G.a,f.a]),i["\u0275mpd"](4608,K.a,K.a,[x.c,z.a,G.a,E.a,f.a]),i["\u0275mpd"](4608,X.a,X.a,[x.c,z.a]),i["\u0275mpd"](4608,H.a,H.a,[x.c,G.a,z.a]),i["\u0275mpd"](4608,J.a,J.a,[x.c,E.a,z.a,G.a,i.NgZone]),i["\u0275mpd"](4608,Z.a,Z.a,[x.c,E.a,z.a]),i["\u0275mpd"](4608,Q.a,Q.a,[x.c,G.a,z.a,E.a]),i["\u0275mpd"](4608,Y.a,Y.a,[x.c,z.a,G.a,i.NgZone]),i["\u0275mpd"](4608,I.a,I.a,[P.FormBuilder]),i["\u0275mpd"](4608,W.a,W.a,[f.a]),i["\u0275mpd"](4608,$.a,$.a,[f.a]),i["\u0275mpd"](4608,nn.a,nn.a,[f.a]),i["\u0275mpd"](4608,O.a,O.a,[f.a]),i["\u0275mpd"](4608,ln.a,ln.a,[f.a]),i["\u0275mpd"](4608,en.a,en.a,[f.a]),i["\u0275mpd"](4608,tn.a,tn.a,[f.a]),i["\u0275mpd"](4608,an.a,an.a,[f.a]),i["\u0275mpd"](4608,un.a,un.a,[f.a]),i["\u0275mpd"](4608,on.a,on.a,[f.a]),i["\u0275mpd"](4608,rn.a,rn.a,[f.a]),i["\u0275mpd"](4608,dn.a,dn.a,[x.c,z.a,K.a,E.a]),i["\u0275mpd"](4608,sn.a,sn.a,[f.a]),i["\u0275mpd"](4608,cn.a,cn.a,[f.a]),i["\u0275mpd"](4608,mn.a,mn.a,[f.a]),i["\u0275mpd"](4608,pn.a,pn.a,[x.c,z.a,G.a]),i["\u0275mpd"](4608,gn.a,gn.a,[x.c,z.a,G.a,K.a]),i["\u0275mpd"](4608,fn.a,fn.a,[]),i["\u0275mpd"](4608,vn.a,vn.a,[fn.a]),i["\u0275mpd"](4608,hn.a,hn.a,[vn.a]),i["\u0275mpd"](4608,Cn.a,Cn.a,[x.c,G.a,z.a,hn.a,E.a]),i["\u0275mpd"](4608,yn.a,yn.a,[f.a]),i["\u0275mpd"](4608,bn.a,bn.a,[]),i["\u0275mpd"](4608,_n.a,_n.a,[p.a,x.c,z.a,G.a,Mn.a]),i["\u0275mpd"](4608,Pn.a,Pn.a,[x.c,G.a,z.a]),i["\u0275mpd"](4608,In.a,In.a,[x.c,G.a,z.a]),i["\u0275mpd"](1073742336,r.t,r.t,[[2,r.z],[2,r.p]]),i["\u0275mpd"](1073742336,Nn,Nn,[]),i["\u0275mpd"](1073742336,d.CommonModule,d.CommonModule,[]),i["\u0275mpd"](1073742336,P["\u0275angular_packages_forms_forms_d"],P["\u0275angular_packages_forms_forms_d"],[]),i["\u0275mpd"](1073742336,P.FormsModule,P.FormsModule,[]),i["\u0275mpd"](1073742336,P.ReactiveFormsModule,P.ReactiveFormsModule,[]),i["\u0275mpd"](1073742336,x.e,x.e,[]),i["\u0275mpd"](1073742336,x.d,x.d,[]),i["\u0275mpd"](1073742336,q.x,q.x,[]),i["\u0275mpd"](1073742336,q.C,q.C,[]),i["\u0275mpd"](1073742336,q.N,q.N,[]),i["\u0275mpd"](1073742336,q.Z,q.Z,[]),i["\u0275mpd"](1073742336,q.kb,q.kb,[]),i["\u0275mpd"](1073742336,q.m,q.m,[]),i["\u0275mpd"](1073742336,Rn.b,Rn.b,[]),i["\u0275mpd"](1073742336,kn.SharedModule,kn.SharedModule,[]),i["\u0275mpd"](1073742336,Vn.InputTextModule,Vn.InputTextModule,[]),i["\u0275mpd"](1073742336,An.InputMaskModule,An.InputMaskModule,[]),i["\u0275mpd"](1073742336,Tn.b,Tn.b,[]),i["\u0275mpd"](1073742336,Tn.h,Tn.h,[]),i["\u0275mpd"](1073742336,Tn.e,Tn.e,[]),i["\u0275mpd"](1073742336,Tn.c,Tn.c,[]),i["\u0275mpd"](1073742336,Tn.f,Tn.f,[]),i["\u0275mpd"](1073742336,Tn.d,Tn.d,[]),i["\u0275mpd"](1073742336,Tn.g,Tn.g,[]),i["\u0275mpd"](1073742336,wn.a,wn.a,[]),i["\u0275mpd"](1073742336,Fn.b,Fn.b,[]),i["\u0275mpd"](1073742336,Ln.ScrollingModule,Ln.ScrollingModule,[]),i["\u0275mpd"](1073742336,xn.TooltipModule,xn.TooltipModule,[]),i["\u0275mpd"](1073742336,Dn.MultiSelectModule,Dn.MultiSelectModule,[]),i["\u0275mpd"](1073742336,qn.a,qn.a,[]),i["\u0275mpd"](1073742336,zn.a,zn.a,[]),i["\u0275mpd"](1073742336,t,t,[]),i["\u0275mpd"](1024,r.n,(function(){return[[{path:"",canActivateChild:[On.a],children:[{path:"email",component:c,data:Sn},{path:"ask-send-email",component:S,data:En}]}]]}),[]),i["\u0275mpd"](256,i.LOCALE_ID,"it-IT",[]),i["\u0275mpd"](256,x.q,"XSRF-TOKEN",[]),i["\u0275mpd"](256,x.r,"X-XSRF-TOKEN",[]),i["\u0275mpd"](256,i.TRANSLATIONS_FORMAT,"xlf",[])])}))}}]);