function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _createSuper(e){var t=_isNativeReflectConstruct();return function(){var n,i=_getPrototypeOf(e);if(t){var r=_getPrototypeOf(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return _possibleConstructorReturn(this,n)}}function _possibleConstructorReturn(e,t){return!t||"object"!=typeof t&&"function"!=typeof t?_assertThisInitialized(e):t}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _templateObject9(){var e=_taggedTemplateLiteral([":\u241fa08080316e052053fd20647731a6de826dc8072f\u241f8610022770999239699:This instance does not require email verification."]);return _templateObject9=function(){return e},e}function _templateObject8(){var e=_taggedTemplateLiteral([":\u241feb539ec6941044e284f237f5b40d6a0159afe7af\u241f4027779086550572813:Send verification email"]);return _templateObject8=function(){return e},e}function _templateObject7(){var e=_taggedTemplateLiteral([":\u241f69b6ac577a19acc39fc0c22342092f327fff2529\u241f3967269098753656610:Email address"]);return _templateObject7=function(){return e},e}function _templateObject6(){var e=_taggedTemplateLiteral([":\u241f244aae9346da82b0922506c2d2581373a15641cc\u241f4768749765465246664:Email"]);return _templateObject6=function(){return e},e}function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f2d02841904de7f5f60e2618670ac1059f3abec97\u241f5521840549580560145: Request email for account verification "]);return _templateObject5=function(){return e},e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241fae3cb52bf2dee3101ee654812b5d16e8665a9453\u241f8390073108781420493:Request new verification email."]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f61fd1cffcb763cbfd5829071723cf9b647174bd9\u241f5321335688371682440:An error occurred."]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fb734a13448d714b0f68f49353607364ac3571c12\u241f102404687224085173: Email updated. "]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241f09a69cde5889927629e2ac9dc63a71b88252b530\u241f4040472919168727715: Verify account email confirmation "]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{mWEW:function(e,t,n){"use strict";n.r(t),n.d(t,"VerifyAccountModule",(function(){return X}));var i,r,c,o,a=n("xXAv"),l=n("tyNb"),s=n("Phsq"),u=n("ey9i"),f=n("fXoL"),p=n("7FIj"),m=n("ofXK"),d=n("B/uj");function g(e,t){1&e&&f.Yb(0,"my-signup-success",5)}function b(e,t){1&e&&(f.dc(0,"div",6),f.hc(1,r),f.cc())}i="\n    \u30A2\u30AB\u30A6\u30F3\u30C8\u306E\u30E1\u30FC\u30EB\u78BA\u8A8D\u3092\u691C\u8A3C\n  ",r="\n    Email updated.\n  ",c="An error occurred.",o="\u65B0\u3057\u3044\u767B\u9332\u78BA\u8A8D\u30E1\u30FC\u30EB\u3092\u8981\u6C42";var v=function(e){return{isPendingEmail:e}};function y(e,t){if(1&e&&(f.dc(0,"div"),f.dc(1,"span"),f.hc(2,c),f.cc(),f.dc(3,"a",7),f.hc(4,o),f.cc(),f.cc()),2&e){var n=f.wc();f.Jb(3),f.Dc("queryParams",f.Hc(1,v,n.isPendingEmail))}}var _,h,O,C=((_=function(){function e(t,n,i,r,c){_classCallCheck(this,e),this.userService=t,this.authService=n,this.notifier=i,this.route=r,this.i18n=c,this.success=!1,this.failed=!1,this.isPendingEmail=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this.route.snapshot.queryParams;this.userId=e.userId,this.verificationString=e.verificationString,this.isPendingEmail="true"===e.isPendingEmail,this.userId&&this.verificationString?this.verifyEmail():this.notifier.error(this.i18n("Unable to find user id or verification string."))}},{key:"verifyEmail",value:function(){var e=this;this.userService.verifyEmail(this.userId,this.verificationString,this.isPendingEmail).subscribe((function(){e.authService.isLoggedIn()&&e.authService.refreshUserInformation(),e.success=!0}),(function(t){e.failed=!0,e.notifier.error(t.message)}))}}]),e}()).\u0275fac=function(e){return new(e||_)(f.Xb(u.z),f.Xb(u.a),f.Xb(u.k),f.Xb(l.a),f.Xb(p.a))},_.\u0275cmp=f.Rb({type:_,selectors:[["my-verify-account-email"]],decls:6,vars:3,consts:[[1,"margin-content"],[1,"title-page","title-page-single"],["message","Your email has been verified and you may now login.",4,"ngIf"],["class","alert alert-success",4,"ngIf"],[4,"ngIf"],["message","Your email has been verified and you may now login."],[1,"alert","alert-success"],["routerLink","/verify-account/ask-send-email",3,"queryParams"]],template:function(e,t){1&e&&(f.dc(0,"div",0),f.dc(1,"div",1),f.hc(2,i),f.cc(),f.bd(3,g,1,0,"my-signup-success",2),f.bd(4,b,2,0,"div",3),f.bd(5,y,5,3,"div",4),f.cc()),2&e&&(f.Jb(3),f.Dc("ngIf",!t.isPendingEmail&&t.success),f.Jb(1),f.Dc("ngIf",t.isPendingEmail&&t.success),f.Jb(1),f.Dc("ngIf",t.failed))},directives:[m.u,d.a,l.k],encapsulation:2}),_),P=n("sWvm"),j=n("3Pt+");h="\n    \u30A2\u30AB\u30A6\u30F3\u30C8\u78BA\u8A8D\u306E\u305F\u3081\u306B\u30E1\u30FC\u30EB\u3092\u30EA\u30AF\u30A8\u30B9\u30C8\u3059\u308B\n  ",O="\u30E1\u30FC\u30EB";var M=["placeholder","\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9"],k=["value","\u78BA\u8A8D\u30E1\u30FC\u30EB\u3092\u9001\u4FE1"];function w(e,t){if(1&e&&(f.dc(0,"div",10),f.dd(1),f.cc()),2&e){var n=f.wc(2);f.Jb(1),f.fd(" ",n.formErrors["verify-email-email"]," ")}}var E,S=function(e){return{"input-error":e}};function I(e,t){if(1&e){var n=f.ec();f.dc(0,"form",4),f.sc("ngSubmit",(function(){return f.Sc(n),f.wc().askSendVerifyEmail()})),f.dc(1,"div",5),f.dc(2,"label",6),f.hc(3,O),f.cc(),f.dc(4,"input",7),f.jc(5,M),f.cc(),f.bd(6,w,2,1,"div",8),f.cc(),f.dc(7,"input",9),f.jc(8,k),f.cc(),f.cc()}if(2&e){var i=f.wc();f.Dc("formGroup",i.form),f.Jb(4),f.Dc("ngClass",f.Hc(4,S,i.formErrors["verify-email-email"])),f.Jb(2),f.Dc("ngIf",i.formErrors["verify-email-email"]),f.Jb(1),f.Dc("disabled",!i.form.valid)}}function x(e,t){1&e&&(f.dc(0,"div"),f.hc(1,E),f.cc())}E="\u3053\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u78BA\u8A8D\u3092\u5FC5\u8981\u3068\u3057\u307E\u305B\u3093\u3002";var z,T,R,V=[{path:"",canActivateChild:[s.a],children:[{path:"email",component:C,data:{meta:{title:"Verify account email"}}},{path:"ask-send-email",component:(z=function(e){_inherits(n,e);var t=_createSuper(n);function n(e,i,r,c,o,a,l){var s;return _classCallCheck(this,n),(s=t.call(this)).formValidatorService=e,s.userValidatorsService=i,s.userService=r,s.serverService=c,s.notifier=o,s.redirectService=a,s.i18n=l,s}return _createClass(n,[{key:"ngOnInit",value:function(){var e=this;this.serverConfig=this.serverService.getTmpConfig(),this.serverService.getConfig().subscribe((function(t){return e.serverConfig=t})),this.buildForm({"verify-email-email":this.userValidatorsService.USER_EMAIL})}},{key:"askSendVerifyEmail",value:function(){var e=this,t=this.form.value["verify-email-email"];this.userService.askSendVerifyEmail(t).subscribe((function(){var n=e.i18n("An email with verification link will be sent to {{email}}.",{email:t});e.notifier.success(n),e.redirectService.redirectToHomepage()}),(function(t){e.notifier.error(t.message)}))}},{key:"requiresEmailVerification",get:function(){return this.serverConfig.signup.requiresEmailVerification}}]),n}(P.c),z.\u0275fac=function(e){return new(e||z)(f.Xb(P.d),f.Xb(P.i),f.Xb(u.z),f.Xb(u.s),f.Xb(u.k),f.Xb(u.m),f.Xb(p.a))},z.\u0275cmp=f.Rb({type:z,selectors:[["my-verify-account-ask-send-email"]],features:[f.Gb],decls:6,vars:2,consts:[[1,"margin-content"],[1,"title-page","title-page-single"],["role","form",3,"formGroup","ngSubmit",4,"ngIf","ngIfElse"],["emailVerificationNotRequired",""],["role","form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","verify-email-email"],["type","email","id","verify-email-email","required","","formControlName","verify-email-email",1,"form-control",3,"ngClass",6,"placeholder"],["class","form-error",4,"ngIf"],["type","submit",3,"disabled",6,"value"],[1,"form-error"]],template:function(e,t){if(1&e&&(f.dc(0,"div",0),f.dc(1,"div",1),f.hc(2,h),f.cc(),f.bd(3,I,9,6,"form",2),f.bd(4,x,2,0,"ng-template",null,3,f.cd),f.cc()),2&e){var n=f.Qc(5);f.Jb(3),f.Dc("ngIf",t.requiresEmailVerification)("ngIfElse",n)}},directives:[m.u,j.J,j.u,j.m,j.d,j.E,j.t,j.k,m.r],styles:['input[_ngcontent-%COMP%]:not([type=submit]){display:inline-block;height:30px;width:340px;color:var(--inputForegroundColor);background-color:var(--inputBackgroundColor);border:1px solid #c6c6c6;border-radius:3px;padding-left:15px;padding-right:15px;font-size:15px;display:block}input[_ngcontent-%COMP%]:not([type=submit])::-moz-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::-ms-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])[readonly]{opacity:.7}@media screen and (max-width:340px){input[_ngcontent-%COMP%]:not([type=submit]){width:100%}}input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer}input[type=submit].focus-visible[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem var(--mainColorLightest)}input[type=submit][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}input[type=submit][_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}input[type=submit].disabled[_ngcontent-%COMP%], input[type=submit][disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .feather, input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .material{color:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[fill="#000"]{fill:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[stroke="#000"]{stroke:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg stop[stop-color="#000"]{stop-color:#fff}']}),z),data:{meta:{title:"Verify account ask send email"}}}]}],L=((R=function e(){_classCallCheck(this,e)}).\u0275mod=f.Vb({type:R}),R.\u0275inj=f.Ub({factory:function(e){return new(e||R)},imports:[[l.l.forChild(V)],l.l]}),R),X=((T=function e(){_classCallCheck(this,e)}).\u0275mod=f.Vb({type:T}),T.\u0275inj=f.Ub({factory:function(e){return new(e||T)},providers:[],imports:[[L,a.a]]}),T)}}]);