(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{"4aiV":function(e,o,t){"use strict";t.r(o),t.d(o,"LoginModule",(function(){return F}));var n=t("sWvm"),r=t("P8w3"),i=t("xMQD"),c=t("tyNb"),a=t("Phsq"),s=t("mrSG"),l=t("AytR"),d=t("ey9i"),u=t("ihI+"),b=t("3Pt+");const g={VALIDATORS:[b.G.required],MESSAGES:{required:"U\u017Eivatelsk\xE9 jm\xE9no je vy\u017Eadov\xE1no."}},f={VALIDATORS:[b.G.required],MESSAGES:{required:"Heslo je vy\u017Eadov\xE1no."}};var p=t("IEtR"),m=t("fXoL"),h=t("1kSV"),v=t("ofXK"),P=t("UkmY");const C=["usernameInput"],y=["forgotPasswordModal"];function w(e,o){1&e&&(m.Wb(0,"div",6),m.gc(1,7),m.Rb(2,"a",8),m.dc(),m.Vb())}function M(e,o){1&e&&(m.Wb(0,"div",30),m.Wb(1,"h6",31),m.ac(2,32),m.Vb(),m.Wb(3,"div"),m.gc(4,33),m.Rb(5,"br"),m.Rb(6,"a",34),m.dc(),m.Vb(),m.Vb())}function k(e,o){1&e&&(m.Wb(0,"span"),m.Wb(1,"a",35),m.ac(2,36),m.Vb(),m.Vb())}function x(e,o){if(1&e&&(m.Wb(0,"div",6),m.Vc(1),m.Tc(2,k,3,0,"span",4),m.Vb()),2&e){const e=m.oc(2);m.Db(1),m.Xc("",e.error," "),m.Db(1),m.vc("ngIf","User email is not verified."===e.error)}}function O(e,o){1&e&&(m.Wb(0,"a",37),m.ac(1,38),m.Vb())}function _(e,o){if(1&e&&(m.Wb(0,"div",39),m.Vc(1),m.Vb()),2&e){const e=m.oc(2);m.Db(1),m.Xc(" ",e.formErrors.username," ")}}function V(e,o){if(1&e&&(m.Wb(0,"div",39),m.Vc(1),m.Vb()),2&e){const e=m.oc(2);m.Db(1),m.Xc(" ",e.formErrors.password," ")}}function W(e,o){if(1&e&&(m.Wb(0,"a",44),m.Vc(1),m.Vb()),2&e){const e=o.$implicit,t=m.oc(3);m.vc("href",t.getAuthHref(e),m.Mc),m.Db(1),m.Xc(" ",e.authDisplayName," ")}}function E(e,o){if(1&e&&(m.Wb(0,"div",40),m.Wb(1,"div",41),m.ac(2,42),m.Vb(),m.Wb(3,"div"),m.Tc(4,W,2,2,"a",43),m.Vb(),m.Vb()),2&e){const e=m.oc(2);m.Db(4),m.vc("ngForOf",e.getExternalLogins())}}const A=function(e){return{"input-error":e}};function I(e,o){if(1&e){const e=m.Xb();m.Ub(0),m.Tc(1,M,7,0,"div",9),m.Tc(2,x,3,2,"div",3),m.Wb(3,"div",10),m.Wb(4,"form",11),m.kc("ngSubmit",(function(){return m.Kc(e),m.oc().login()})),m.Wb(5,"div",12),m.Wb(6,"div"),m.Wb(7,"label",13),m.ac(8,14),m.Vb(),m.Wb(9,"input",15,16),m.cc(11,17),m.Vb(),m.Tc(12,O,2,0,"a",18),m.Vb(),m.Tc(13,_,2,1,"div",19),m.Vb(),m.Wb(14,"div",12),m.Wb(15,"label",20),m.ac(16,21),m.Vb(),m.Wb(17,"div"),m.Wb(18,"input",22),m.cc(19,23),m.Vb(),m.Wb(20,"a",24),m.cc(21,25),m.kc("click",(function(){return m.Kc(e),m.oc().openForgotPasswordModal()})),m.Vc(22,"I forgot my password"),m.Vb(),m.Vb(),m.Tc(23,V,2,1,"div",19),m.Vb(),m.Wb(24,"input",26),m.cc(25,27),m.Vb(),m.Vb(),m.Tc(26,E,5,1,"div",28),m.Vb(),m.Wb(27,"a",29),m.kc("click",(function(o){return m.Kc(e),m.oc().social_login(o,"facebook")})),m.Vc(28,"Login with Facebook"),m.Vb(),m.Vc(29,"\xa0 "),m.Wb(30,"a",29),m.kc("click",(function(o){return m.Kc(e),m.oc().social_login(o,"google")})),m.Vc(31,"Login with Google"),m.Vb(),m.Vc(32,"\xa0 "),m.Wb(33,"a",29),m.kc("click",(function(o){return m.Kc(e),m.oc().social_login(o,"twitter")})),m.Vc(34,"Login with Twitter"),m.Vb(),m.Tb()}if(2&e){const e=m.oc();m.Db(1),m.vc("ngIf",!1===e.signupAllowed),m.Db(1),m.vc("ngIf",e.error),m.Db(2),m.vc("formGroup",e.form),m.Db(5),m.vc("ngClass",m.zc(10,A,e.formErrors.username)),m.Db(3),m.vc("ngIf",!0===e.signupAllowed),m.Db(1),m.vc("ngIf",e.formErrors.username),m.Db(5),m.vc("ngClass",m.zc(12,A,e.formErrors.password)),m.Db(5),m.vc("ngIf",e.formErrors.password),m.Db(1),m.vc("disabled",!e.form.valid),m.Db(2),m.vc("ngIf",0!==e.getExternalLogins().length)}}function $(e,o){1&e&&(m.Wb(0,"div",6),m.ac(1,61),m.Vb())}function S(e,o){if(1&e){const e=m.Xb();m.Wb(0,"div",45),m.Wb(1,"h4",46),m.ac(2,47),m.Vb(),m.Wb(3,"my-global-icon",48),m.kc("click",(function(){return m.Kc(e),m.oc().hideForgotPasswordModal()})),m.Vb(),m.Vb(),m.Wb(4,"div",49),m.Tc(5,$,2,0,"div",3),m.Wb(6,"div",50),m.Wb(7,"label",51),m.ac(8,52),m.Vb(),m.Wb(9,"input",53,54),m.cc(11,55),m.kc("ngModelChange",(function(o){return m.Kc(e),m.oc().forgotPasswordEmail=o})),m.Vb(),m.Vb(),m.Vb(),m.Wb(12,"div",56),m.Wb(13,"input",57),m.cc(14,58),m.kc("click",(function(){return m.Kc(e),m.oc().hideForgotPasswordModal()}))("key.enter",(function(){return m.Kc(e),m.oc().hideForgotPasswordModal()})),m.Vb(),m.Wb(15,"input",59),m.cc(16,60),m.kc("click",(function(){return m.Kc(e),m.oc().askResetPassword()})),m.Vb(),m.Vb()}if(2&e){const e=m.Ic(10),o=m.oc();m.Db(5),m.vc("ngIf",o.isEmailDisabled()),m.Db(1),m.vc("hidden",o.isEmailDisabled()),m.Db(3),m.vc("ngModel",o.forgotPasswordEmail),m.Db(6),m.vc("disabled",!e.validity.valid)}}let z=(()=>{class e extends n.a{constructor(e,o,t,n,r,i,c,a){super(),this.formValidatorService=e,this.route=o,this.modalService=t,this.authService=n,this.userService=r,this.redirectService=i,this.notifier=c,this.hooks=a,this.error=null,this.forgotPasswordEmail="",this.isAuthenticatedWithExternalAuth=!1,this.externalAuthError=!1,this.externalLogins=[]}get signupAllowed(){return!0===this.serverConfig.signup.allowed}isEmailDisabled(){return!1===this.serverConfig.email.enabled}ngOnInit(){const e=this.route.snapshot;this.serverConfig=e.data.serverConfig,e.queryParams.externalAuthToken?this.loadExternalAuthToken(e.queryParams.username,e.queryParams.externalAuthToken):e.queryParams.externalAuthError?this.externalAuthError=!0:this.buildForm({username:g,password:f})}ngAfterViewInit(){this.usernameInput&&this.usernameInput.nativeElement.focus(),this.hooks.runAction("action:login.init","login")}getExternalLogins(){return this.serverConfig.plugin.registeredExternalAuths}getAuthHref(e){return l.a.apiUrl+`/plugins/${e.name}/${e.version}/auth/${e.authName}`}social_login(e,o){e.preventDefault();let t=null;switch(o){case"facebook":t=new p.b.auth.FacebookAuthProvider;break;case"google":t=new p.b.auth.GoogleAuthProvider;break;case"twitter":t=new p.b.auth.TwitterAuthProvider}p.a.signInWithPopup(t).then(e=>Object(s.a)(this,void 0,void 0,(function*(){const o=e.user.email,t=yield Object(p.c)();this.authService.login(o,t).subscribe(()=>this.redirectService.redirectToPreviousRoute(),e=>{this.error=-1!==e.message.indexOf("credentials are invalid")?"Incorrect username or password.":-1!==e.message.indexOf("blocked")?"You account is blocked.":e.message})})),e=>this.error=e.message)}login(){this.error=null;const{username:e,password:o}=this.form.value;this.authService.login(e,o).subscribe(()=>(-1!==e.indexOf("@")&&p.a.signInWithEmailAndPassword(e,o).catch(e=>console.error(e)),this.redirectService.redirectToPreviousRoute()),e=>this.handleError(e))}askResetPassword(){this.userService.askResetPassword(this.forgotPasswordEmail).subscribe(()=>{const e="An email with the reset password instructions will be sent to " + this.forgotPasswordEmail + ".\nThe link will expire within 1 hour.";this.notifier.success(e),this.hideForgotPasswordModal()},e=>this.notifier.error(e.message))}openForgotPasswordModal(){this.openedForgotPasswordModal=this.modalService.open(this.forgotPasswordModal)}hideForgotPasswordModal(){this.openedForgotPasswordModal.close()}loadExternalAuthToken(e,o){this.isAuthenticatedWithExternalAuth=!0,this.authService.login(e,null,o).subscribe(()=>this.redirectService.redirectToPreviousRoute(),e=>{this.handleError(e),this.isAuthenticatedWithExternalAuth=!1})}handleError(e){this.error=-1!==e.message.indexOf("credentials are invalid")?"Incorrect username or password.":-1!==e.message.indexOf("blocked")?"Your account is blocked.":e.message}}return e.\u0275fac=function(o){return new(o||e)(m.Qb(n.b),m.Qb(c.a),m.Qb(h.k),m.Qb(d.AuthService),m.Qb(d.UserService),m.Qb(d.RedirectService),m.Qb(d.Notifier),m.Qb(u.a))},e.\u0275cmp=m.Kb({type:e,selectors:[["my-login"]],viewQuery:function(e,o){var t;1&e&&(m.Zc(C,!0),m.Qc(y,!0)),2&e&&(m.Hc(t=m.lc())&&(o.usernameInput=t.first),m.Hc(t=m.lc())&&(o.forgotPasswordModal=t.first))},features:[m.Ab],decls:7,vars:2,consts:function(){return[[1,"margin-content"],[1,"title-page","title-page-single"],"\n    P\u0159ihl\xE1sit\n  ",["class","alert alert-danger",4,"ngIf"],[4,"ngIf"],["forgotPasswordModal",""],[1,"alert","alert-danger"],"\n    Sorry but there was an issue with the external login process. Please \n          " + "\ufffd#2\ufffd" + "contact an administrator\n          " + "\ufffd/#2\ufffd" + ".\n  \n        ",["routerLink","/about"],["class","looking-for-account alert alert-info","role","alert",4,"ngIf"],[1,"login-form-and-externals"],["role","form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],"User",["type","text","id","username","required","","tabindex","1","formControlName","username",1,"form-control",3,"ngClass",6,"placeholder"],["usernameInput",""],["placeholder","U\u017Eivatelsk\xE9 jm\xE9no nebo e-mail"],["routerLink","/signup","class","create-an-account",4,"ngIf"],["class","form-error",4,"ngIf"],["for","password"],"Heslo",["type","password","name","password","id","password","required","","tabindex","2","autocomplete","current-password","formControlName","password",1,"form-control",3,"ngClass",6,"placeholder"],["placeholder","Heslo"],[1,"forgot-password-button",3,"click",6,"title"],["title","Click here to reset your password"],["type","submit",3,"disabled",6,"value"],["value","Login"],["class","external-login-blocks",4,"ngIf"],["href","#",3,"click"],["role","alert",1,"looking-for-account","alert","alert-info"],[1,"alert-heading"],"\n        If you are looking for an account\u2026\n      ","\n        Currently this instance doesn't allow for user registration, but you can find an instance\n        that gives you the possibility to sign up for an account and upload your videos there.\n\n        \n          " + "\ufffd#5\ufffd\ufffd/#5\ufffd" + "\n\n        Find yours among multiple instances at \n          " + "\ufffd#6\ufffd" + "https://joinpeertube.org/instances\n          " + "\ufffd/#6\ufffd" + ".\n      \n        ",["href","https://joinpeertube.org/instances","target","_blank","rel","noopener noreferrer",1,"alert-link"],["routerLink","/verify-account/ask-send-email"],"Vy\u017E\xE1dat nov\xFD ov\u011B\u0159ovac\xED e-mail.",["routerLink","/signup",1,"create-an-account"],"\n              or create an account\n            ",[1,"form-error"],[1,"external-login-blocks"],[1,"block-title"],"Or sign in with",["class","external-login-block","role","button",3,"href",4,"ngFor","ngForOf"],["role","button",1,"external-login-block",3,"href"],[1,"modal-header"],[1,"modal-title"],"Zapomenut\xE9 heslo",["iconName","cross","aria-label","Close","role","button",3,"click"],[1,"modal-body"],[1,"form-group",3,"hidden"],["for","forgot-password-email"],"E-mail",["type","email","id","forgot-password-email","required","",3,"ngModel","ngModelChange",6,"placeholder"],["forgotPasswordEmailInput",""],["placeholder","E-mailov\xE1 adresa"],[1,"modal-footer","inputs"],["type","button","role","button",1,"action-button","action-button-cancel",3,"click","key.enter",6,"value"],["value","Cancel"],["type","submit",1,"action-button-submit",3,"disabled","click",6,"value"],["value","Poslat e-mail pro resetov\xE1n\xED hesla"]," We are sorry, you cannot recover your password because your instance administrator did not configure the BitTube email system. "]},template:function(e,o){1&e&&(m.Wb(0,"div",0),m.Wb(1,"div",1),m.ac(2,2),m.Vb(),m.Tc(3,w,3,0,"div",3),m.Tc(4,I,35,14,"ng-container",4),m.Vb(),m.Tc(5,S,17,4,"ng-template",null,5,m.Uc)),2&e&&(m.Db(3),m.vc("ngIf",o.externalAuthError),m.Db(1),m.vc("ngIf",!o.externalAuthError&&!o.isAuthenticatedWithExternalAuth))},directives:[v.u,c.k,b.I,b.t,b.l,b.c,b.D,b.s,b.j,v.r,v.t,P.a,b.v],styles:['label[_ngcontent-%COMP%]{display:block}input[_ngcontent-%COMP%]:not([type=submit]){height:30px;width:340px;color:var(--inputForegroundColor);background-color:var(--inputBackgroundColor);border:1px solid #c6c6c6;border-radius:3px;padding-left:15px;padding-right:15px;font-size:15px;display:inline-block;margin-right:5px}input[_ngcontent-%COMP%]:not([type=submit])::-moz-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::-ms-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])[readonly]{opacity:.7}@media screen and (max-width:340px){input[_ngcontent-%COMP%]:not([type=submit]){width:100%}}input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer}input[type=submit].focus-visible[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem var(--mainColorLightest)}input[type=submit][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}input[type=submit][_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}input[type=submit].disabled[_ngcontent-%COMP%], input[type=submit][disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .feather, input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .material{color:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[fill="#000"]{fill:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[stroke="#000"]{stroke:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg stop[stop-color="#000"]{stop-color:#fff}.create-an-account[_ngcontent-%COMP%], .forgot-password-button[_ngcontent-%COMP%]{color:var(--mainForegroundColor);cursor:pointer;transition:opacity cubic-bezier(.39,.575,.565,1)}.create-an-account[_ngcontent-%COMP%]:hover, .forgot-password-button[_ngcontent-%COMP%]:hover{text-decoration:none!important;opacity:.7!important}.login-form-and-externals[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;font-size:15px}.login-form-and-externals[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:0 50px 20px 0}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]{min-width:200px}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{font-weight:600}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]{cursor:pointer;border:1px solid #d1d7e0;border-radius:5px;color:var(--mainForegroundColor);margin:10px 10px 0 0;display:flex;justify-content:center;align-items:center;min-height:35px;min-width:100px}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]:active, .login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]:focus, .login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]:hover{text-decoration:none!important;outline:none!important}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]:hover{background-color:rgba(209,215,224,.5)}']}),e})();var D=t("trhE");const T=[{path:"",component:z,canActivate:[a.a],data:{meta:{title:"Login"}},resolve:{serverConfig:D.a}}];let L=(()=>{class e{}return e.\u0275mod=m.Ob({type:e}),e.\u0275inj=m.Nb({factory:function(o){return new(o||e)},imports:[[c.l.forChild(T)],c.l]}),e})(),F=(()=>{class e{}return e.\u0275mod=m.Ob({type:e}),e.\u0275inj=m.Nb({factory:function(o){return new(o||e)},providers:[],imports:[[L,i.SharedMainModule,n.c,r.a]]}),e})()}}]);