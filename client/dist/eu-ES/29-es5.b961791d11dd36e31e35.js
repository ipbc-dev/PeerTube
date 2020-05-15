var __extends=this&&this.__extends||function(){var n=function(a,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var e in a)a.hasOwnProperty(e)&&(n[e]=a[e])})(a,e)};return function(a,e){function o(){this.constructor=a}n(a,e),a.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}}();(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{t94N:function(n,a,e){"use strict";e.r(a);var o=e("8Y7J"),l=function(){},t=e("pMnS"),i=e("1+T7"),d=e("iInd"),u=e("SVse"),r=e("s7LF"),p=e("ecRl"),s=e("QUbI"),c=e("3szM"),m=e("0C+C"),v=e("cKMx"),f=e("LTwV"),h=e("mOsc"),g=e("pyEO"),b=e("M9Zh"),C=e("kIzR"),_=e("fKnF"),M=e("ihI+"),y=e("lJxs"),V=e("eIep"),F=(e("ey9i"),e("M0ag")),I=e("UFc/"),S=(e("HUk+"),e("XRCn")),N=function(n){function a(a,e,o,l,t,i,d,u){var r=this;return(r=n.call(this)||this).formValidatorService=a,r.route=e,r.router=o,r.notifier=l,r.videoService=t,r.loadingBar=i,r.videoCaptionService=d,r.i18n=u,r.isUpdatingVideo=!1,r.userVideoChannels=[],r.schedulePublicationPossible=!1,r.videoCaptions=[],r.waitTranscodingEnabled=!0,r.updateDone=!1,r}return __extends(a,n),a.prototype.ngOnInit=function(){var n=this;this.buildForm({}),this.route.data.pipe(Object(y.a)((function(n){return n.videoData}))).subscribe((function(a){var e=a.video,o=a.videoChannels,l=a.videoCaptions;n.video=new I.a(e),n.userVideoChannels=o,n.videoCaptions=l,n.schedulePublicationPossible=n.video.privacy===S.m.PRIVATE,e.getFiles().length>1&&(n.waitTranscodingEnabled=!1),setTimeout((function(){return n.hydrateFormFromVideo()}))}),(function(a){console.error(a),n.notifier.error(a.message)}))},a.prototype.onUnload=function(n){var a=this.canDeactivate(),e=a.text;if(!a.canDeactivate)return n.returnValue=e,e},a.prototype.canDeactivate=function(){if(!0===this.updateDone)return{canDeactivate:!0};for(var n=this.i18n("You have unsaved changes! If you leave, your changes will be lost."),a=0,e=this.videoCaptions;a<e.length;a++){if(e[a].action)return{canDeactivate:!1,text:n}}return{canDeactivate:!1===this.formChanged,text:n}},a.prototype.checkForm=function(){return this.forceCheck(),this.form.valid},a.prototype.update=function(){var n=this;!1!==this.checkForm()&&!0!==this.isUpdatingVideo&&(this.video.patch(this.form.value),this.loadingBar.start(),this.isUpdatingVideo=!0,this.videoService.updateVideo(this.video).pipe(Object(V.a)((function(){return n.videoCaptionService.updateCaptions(n.video.id,n.videoCaptions)}))).subscribe((function(){n.updateDone=!0,n.isUpdatingVideo=!1,n.loadingBar.complete(),n.notifier.success(n.i18n("Video updated.")),n.router.navigate(["/videos/watch",n.video.uuid])}),(function(a){n.loadingBar.complete(),n.isUpdatingVideo=!1,n.notifier.error(a.message),console.error(a)})))},a.prototype.hydrateFormFromVideo=function(){var n=this;this.form.patchValue(this.video.toFormPatch());for(var a=function(a){fetch(e.video[a.url]).then((function(n){return n.blob()})).then((function(e){var o;n.form.patchValue(((o={})[a.name]=e,o))}))},e=this,o=0,l=[{url:"thumbnailUrl",name:"thumbnailfile"},{url:"previewUrl",name:"previewfile"}];o<l.length;o++){a(l[o])}},a}(F.a),O=e("TtxX"),w=e("GiVz"),T=o["\u0275crt"]({encapsulation:0,styles:[i.a],data:{}});function D(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,22,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),o["\u0275eld"](1,0,null,null,6,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),o["\u0275eld"](2,0,null,null,1,"span",[["class","mr-1"]],null,null,null,null,null)),(n()(),o["\u0275ted"](-1,null,["Eguneratu"])),(n()(),o["\u0275eld"](4,0,null,null,3,"a",[],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,a,e){var l=!0;return"click"===a&&(l=!1!==o["\u0275nov"](n,5).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&l),l}),null,null)),o["\u0275did"](5,671744,null,0,d.s,[d.p,d.a,u.LocationStrategy],{routerLink:[0,"routerLink"]},null),o["\u0275pad"](6,2),(n()(),o["\u0275ted"](7,null,["",""])),(n()(),o["\u0275eld"](8,0,null,null,14,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(n,a,e){var l=!0;return"submit"===a&&(l=!1!==o["\u0275nov"](n,10).onSubmit(e)&&l),"reset"===a&&(l=!1!==o["\u0275nov"](n,10).onReset()&&l),l}),null,null)),o["\u0275did"](9,16384,null,0,r["\u0275angular_packages_forms_forms_z"],[],null,null),o["\u0275did"](10,540672,null,0,r.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},null),o["\u0275prd"](2048,null,r.ControlContainer,null,[r.FormGroupDirective]),o["\u0275did"](12,16384,null,0,r.NgControlStatusGroup,[[4,r.ControlContainer]],null,null),(n()(),o["\u0275eld"](13,0,null,null,1,"my-video-edit",[],null,null,null,p.b,p.a)),o["\u0275did"](14,245760,null,0,s.a,[c.a,m.a,v.a,f.a,d.a,d.p,h.a,g.a,b.a,o.NgZone],{form:[0,"form"],formErrors:[1,"formErrors"],validationMessages:[2,"validationMessages"],userVideoChannels:[3,"userVideoChannels"],schedulePublicationPossible:[4,"schedulePublicationPossible"],videoCaptions:[5,"videoCaptions"],waitTranscodingEnabled:[6,"waitTranscodingEnabled"]},null),(n()(),o["\u0275eld"](15,0,null,null,7,"div",[["class","submit-container"]],null,null,null,null,null)),(n()(),o["\u0275eld"](16,0,null,null,6,"div",[["class","submit-button"]],null,[[null,"click"]],(function(n,a,e){var o=!0;return"click"===a&&(o=!1!==n.component.update()&&o),o}),null,null)),o["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[o.IterableDiffers,o.KeyValueDiffers,o.ElementRef,o.Renderer2]),o["\u0275did"](18,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),o["\u0275pod"](19,{disabled:0}),(n()(),o["\u0275eld"](20,0,null,null,1,"my-global-icon",[["iconName","validate"]],null,null,null,C.b,C.a)),o["\u0275did"](21,114688,null,0,_.a,[o.ElementRef,M.a],{iconName:[0,"iconName"]},null),(n()(),o["\u0275eld"](22,0,null,null,0,"input",[["type","button"],["value","Eguneratu"]],null,null,null,null,null))],(function(n,a){var e=a.component,o=n(a,6,0,"/videos/watch",e.video.uuid);n(a,5,0,o),n(a,10,0,e.form),n(a,14,0,e.form,e.formErrors,e.validationMessages,e.userVideoChannels,e.schedulePublicationPossible,e.videoCaptions,e.waitTranscodingEnabled);var l=n(a,19,0,!e.form.valid||!0===e.isUpdatingVideo);n(a,18,0,"submit-button",l),n(a,21,0,"validate")}),(function(n,a){var e=a.component;n(a,4,0,o["\u0275nov"](a,5).target,o["\u0275nov"](a,5).href),n(a,7,0,null==e.video?null:e.video.name),n(a,8,0,o["\u0275nov"](a,12).ngClassUntouched,o["\u0275nov"](a,12).ngClassTouched,o["\u0275nov"](a,12).ngClassPristine,o["\u0275nov"](a,12).ngClassDirty,o["\u0275nov"](a,12).ngClassValid,o["\u0275nov"](a,12).ngClassInvalid,o["\u0275nov"](a,12).ngClassPending)}))}var k=o["\u0275ccf"]("my-videos-update",N,(function(n){return o["\u0275vid"](0,[(n()(),o["\u0275eld"](0,0,null,null,1,"my-videos-update",[],null,[["window","beforeunload"]],(function(n,a,e){var l=!0;return"window:beforeunload"===a&&(l=!1!==o["\u0275nov"](n,1).onUnload(e)&&l),l}),D,T)),o["\u0275did"](1,114688,null,0,N,[c.a,d.a,d.p,h.a,f.a,O.c,v.a,w.a],null,null)],(function(n,a){n(a,1,0)}),null)}),{},{},[]),R=e("9AJC"),E=e("CLta"),P=e("IheW"),A=e("9IV+"),L=e("G0yt"),j=e("Huiz"),U=e("nvTd"),x=e("upD4"),B=e("6RP5"),z=e("HvDw"),K=e("vQJr"),X=e("l/z6"),G=e("wQE2"),J=e("biPt"),Z=e("mTdg"),H=e("VNja"),Y=e("mpCX"),Q=e("hD3C"),q=e("F4xN"),W=e("Qmuk"),$=e("yXFd"),nn=e("wpFD"),an=e("/7bI"),en=e("JtBY"),on=e("D/X6"),ln=e("cvwr"),tn=e("tSwB"),dn=e("RtUV"),un=e("W3Gj"),rn=e("AD+P"),pn=e("hlYB"),sn=e("I88b"),cn=e("GvuC"),mn=e("V+Hg"),vn=e("45hh"),fn=e("WZ9d"),hn=e("fR23"),gn=e("1MVc"),bn=e("Vurf"),Cn=e("mpAo"),_n=e("c6Lk"),Mn=e("j8ES"),yn=e("cp0P"),Vn=function(){function n(n,a,e){this.videoService=n,this.videoChannelService=a,this.videoCaptionService=e}return n.prototype.resolve=function(n){var a=this;return this.videoService.getVideo({videoId:n.params.uuid}).pipe(Object(V.a)((function(n){return Object(yn.a)([a.videoService.loadCompleteDescription(n.descriptionPath).pipe(Object(y.a)((function(a){return Object.assign(n,{description:a})}))),a.videoChannelService.listAccountVideoChannels(n.account).pipe(Object(y.a)((function(n){return n.data})),Object(y.a)((function(n){return n.map((function(n){return{id:n.id,label:n.displayName,support:n.support}}))}))),a.videoCaptionService.listCaptions(n.id).pipe(Object(y.a)((function(n){return n.data})))])})),Object(y.a)((function(n){return{video:n[0],videoChannels:n[1],videoCaptions:n[2]}})))},n}(),Fn=e("fftR"),In=e("37nT"),Sn=e("Phsq"),Nn=function(){},On=e("mB+Y"),wn=e("VSng"),Tn=e("7LN8"),Dn=e("KB/w"),kn=e("IbkX"),Rn=e("Fa87"),En=e("oz/p"),Pn=e("VQoA"),An=e("IP0z"),Ln=e("/HVE"),jn=e("hOhj"),Un=e("g4HV"),xn=e("No4M"),Bn=e("PCNd"),zn=e("pYoP"),Kn=e("0dEx");e.d(a,"VideoUpdateModuleNgFactory",(function(){return Xn}));var Xn=o["\u0275cmf"](l,[],(function(n){return o["\u0275mod"]([o["\u0275mpd"](512,o.ComponentFactoryResolver,o["\u0275CodegenComponentFactoryResolver"],[[8,[t.a,k,R.g,R.h,R.e,R.f]],[3,o.ComponentFactoryResolver],o.NgModuleRef]),o["\u0275mpd"](4608,u.NgLocalization,u.NgLocaleLocalization,[o.LOCALE_ID,[2,u["\u0275angular_packages_common_common_a"]]]),o["\u0275mpd"](4608,r.FormBuilder,r.FormBuilder,[]),o["\u0275mpd"](4608,r["\u0275angular_packages_forms_forms_o"],r["\u0275angular_packages_forms_forms_o"],[]),o["\u0275mpd"](4608,E.h,E.h,[]),o["\u0275mpd"](4608,P.m,P.s,[u.DOCUMENT,o.PLATFORM_ID,P.q]),o["\u0275mpd"](4608,P.t,P.t,[P.m,P.r]),o["\u0275mpd"](5120,P.a,(function(n,a){return[n,new A.a(a)]}),[P.t,o.Injector]),o["\u0275mpd"](4608,P.p,P.p,[]),o["\u0275mpd"](6144,P.n,null,[P.p]),o["\u0275mpd"](4608,P.l,P.l,[P.n]),o["\u0275mpd"](6144,P.b,null,[P.l]),o["\u0275mpd"](4608,P.g,P.o,[P.b,o.Injector]),o["\u0275mpd"](4608,P.c,P.c,[P.g]),o["\u0275mpd"](4608,L.A,L.A,[o.ComponentFactoryResolver,o.Injector,L.yb,L.B]),o["\u0275mpd"](4608,w.a,w.a,[o.TRANSLATIONS_FORMAT,o.TRANSLATIONS,o.LOCALE_ID,[2,w.b]]),o["\u0275mpd"](4608,j.a,j.a,[d.p,w.a]),o["\u0275mpd"](4608,U.a,U.a,[]),o["\u0275mpd"](4608,x.a,x.a,[P.c,U.a,j.a]),o["\u0275mpd"](4608,B.a,B.a,[P.c,U.a,j.a]),o["\u0275mpd"](4608,z.a,z.a,[P.c,U.a,j.a]),o["\u0275mpd"](4608,K.a,K.a,[P.c,j.a,U.a,w.a]),o["\u0275mpd"](4608,f.a,f.a,[P.c,j.a,U.a,g.a,w.a]),o["\u0275mpd"](4608,X.a,X.a,[P.c,j.a]),o["\u0275mpd"](4608,G.a,G.a,[P.c,U.a,j.a]),o["\u0275mpd"](4608,J.a,J.a,[P.c,g.a,j.a,U.a,o.NgZone]),o["\u0275mpd"](4608,v.a,v.a,[P.c,g.a,j.a]),o["\u0275mpd"](4608,Z.a,Z.a,[P.c,U.a,j.a,g.a]),o["\u0275mpd"](4608,H.a,H.a,[P.c,j.a,U.a,o.NgZone]),o["\u0275mpd"](4608,c.a,c.a,[r.FormBuilder]),o["\u0275mpd"](4608,Y.a,Y.a,[w.a]),o["\u0275mpd"](4608,Q.a,Q.a,[w.a]),o["\u0275mpd"](4608,q.a,q.a,[w.a]),o["\u0275mpd"](4608,W.a,W.a,[w.a]),o["\u0275mpd"](4608,$.a,$.a,[w.a]),o["\u0275mpd"](4608,nn.a,nn.a,[w.a]),o["\u0275mpd"](4608,an.a,an.a,[w.a]),o["\u0275mpd"](4608,en.a,en.a,[w.a]),o["\u0275mpd"](4608,m.a,m.a,[w.a]),o["\u0275mpd"](4608,on.a,on.a,[w.a]),o["\u0275mpd"](4608,ln.a,ln.a,[w.a]),o["\u0275mpd"](4608,tn.a,tn.a,[P.c,j.a,f.a,g.a]),o["\u0275mpd"](4608,dn.a,dn.a,[w.a]),o["\u0275mpd"](4608,un.a,un.a,[w.a]),o["\u0275mpd"](4608,rn.a,rn.a,[w.a]),o["\u0275mpd"](4608,pn.a,pn.a,[P.c,j.a,U.a]),o["\u0275mpd"](4608,sn.a,sn.a,[P.c,j.a,U.a,f.a]),o["\u0275mpd"](4608,cn.a,cn.a,[]),o["\u0275mpd"](4608,mn.a,mn.a,[cn.a]),o["\u0275mpd"](4608,vn.a,vn.a,[mn.a]),o["\u0275mpd"](4608,fn.a,fn.a,[P.c,U.a,j.a,vn.a,g.a]),o["\u0275mpd"](4608,b.a,b.a,[w.a]),o["\u0275mpd"](4608,hn.a,hn.a,[]),o["\u0275mpd"](4608,gn.a,gn.a,[bn.a,P.c,j.a,U.a,Cn.a]),o["\u0275mpd"](4608,_n.a,_n.a,[P.c,U.a,j.a]),o["\u0275mpd"](4608,Mn.a,Mn.a,[P.c,U.a,j.a]),o["\u0275mpd"](4608,Vn,Vn,[f.a,G.a,v.a]),o["\u0275mpd"](4608,Fn.a,Fn.a,[In.a,w.a]),o["\u0275mpd"](1073742336,d.t,d.t,[[2,d.z],[2,d.p]]),o["\u0275mpd"](1073742336,Nn,Nn,[]),o["\u0275mpd"](1073742336,u.CommonModule,u.CommonModule,[]),o["\u0275mpd"](1073742336,r["\u0275angular_packages_forms_forms_d"],r["\u0275angular_packages_forms_forms_d"],[]),o["\u0275mpd"](1073742336,r.ReactiveFormsModule,r.ReactiveFormsModule,[]),o["\u0275mpd"](1073742336,r.FormsModule,r.FormsModule,[]),o["\u0275mpd"](1073742336,On.e,On.e,[]),o["\u0275mpd"](1073742336,E.f,E.f,[]),o["\u0275mpd"](1073742336,wn.ButtonModule,wn.ButtonModule,[]),o["\u0275mpd"](1073742336,Tn.SharedModule,Tn.SharedModule,[]),o["\u0275mpd"](1073742336,Dn.CalendarModule,Dn.CalendarModule,[]),o["\u0275mpd"](1073742336,P.e,P.e,[]),o["\u0275mpd"](1073742336,P.d,P.d,[]),o["\u0275mpd"](1073742336,L.x,L.x,[]),o["\u0275mpd"](1073742336,L.C,L.C,[]),o["\u0275mpd"](1073742336,L.N,L.N,[]),o["\u0275mpd"](1073742336,L.Z,L.Z,[]),o["\u0275mpd"](1073742336,L.kb,L.kb,[]),o["\u0275mpd"](1073742336,L.m,L.m,[]),o["\u0275mpd"](1073742336,kn.b,kn.b,[]),o["\u0275mpd"](1073742336,Rn.InputTextModule,Rn.InputTextModule,[]),o["\u0275mpd"](1073742336,En.InputMaskModule,En.InputMaskModule,[]),o["\u0275mpd"](1073742336,Pn.b,Pn.b,[]),o["\u0275mpd"](1073742336,Pn.h,Pn.h,[]),o["\u0275mpd"](1073742336,Pn.e,Pn.e,[]),o["\u0275mpd"](1073742336,Pn.c,Pn.c,[]),o["\u0275mpd"](1073742336,Pn.f,Pn.f,[]),o["\u0275mpd"](1073742336,Pn.d,Pn.d,[]),o["\u0275mpd"](1073742336,Pn.g,Pn.g,[]),o["\u0275mpd"](1073742336,An.a,An.a,[]),o["\u0275mpd"](1073742336,Ln.b,Ln.b,[]),o["\u0275mpd"](1073742336,jn.ScrollingModule,jn.ScrollingModule,[]),o["\u0275mpd"](1073742336,Un.TooltipModule,Un.TooltipModule,[]),o["\u0275mpd"](1073742336,xn.MultiSelectModule,xn.MultiSelectModule,[]),o["\u0275mpd"](1073742336,Bn.a,Bn.a,[]),o["\u0275mpd"](1073742336,zn.a,zn.a,[]),o["\u0275mpd"](1073742336,l,l,[]),o["\u0275mpd"](1024,d.n,(function(){return[[{path:"",component:N,canActivate:[Sn.a,Kn.a],canDeactivate:[Fn.a],resolve:{videoData:Vn}}]]}),[]),o["\u0275mpd"](256,o.LOCALE_ID,"eu-ES",[]),o["\u0275mpd"](256,r.COMPOSITION_BUFFER_MODE,!1,[]),o["\u0275mpd"](256,P.q,"XSRF-TOKEN",[]),o["\u0275mpd"](256,P.r,"X-XSRF-TOKEN",[]),o["\u0275mpd"](256,o.TRANSLATIONS_FORMAT,"xlf",[])])}))}}]);