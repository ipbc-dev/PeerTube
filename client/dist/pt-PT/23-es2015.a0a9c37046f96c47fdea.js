(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4aiV":function(e,t,n){"use strict";n.r(t),n.d(t,"LoginModule",(function(){return oe}));var o=n("sWvm"),r=n("P8w3"),c=n("xMQD"),i=n("tyNb"),a=n("Phsq"),s=n("mrSG"),l=n("ey9i"),d=n("ihI+"),u=n("IEtR"),g=n("AytR"),f=n("fXoL"),b=n("1kSV"),p=n("7FIj"),h=n("ofXK"),m=n("3Pt+"),v=n("UkmY");const P=["usernameInput"],w=["forgotPasswordModal"];var C,y,x;function M(e,t){1&e&&(f.dc(0,"div",5),f.nc(1,y),f.Yb(2,"a",6),f.kc(),f.cc())}C="\n    Iniciar sess\xE3o\n  ",y="Desculpe mas houve um problema com o processo de login externo. Please " + "\ufffd#2\ufffd" + "contacte um administrador" + "\ufffd/#2\ufffd" + ". ",x="Utilizador";const k=["placeholder","Nome de utilizador ou endere\xE7o de correio eletr\xF3nico"];var O;O="Palavra-passe";const _=["placeholder","Palavra-passe"],E=["title","Clique aqui para redefinir a sua senha"],I=["value","Iniciar sess\xE3o"];var S,A,$,D,L;function z(e,t){1&e&&(f.dc(0,"div",22),f.dc(1,"h6",23),f.hc(2,S),f.cc(),f.dc(3,"div"),f.nc(4,A),f.Yb(5,"br"),f.Yb(6,"a",24),f.kc(),f.cc(),f.cc())}function J(e,t){1&e&&(f.dc(0,"span"),f.dc(1,"a",25),f.hc(2,$),f.cc(),f.cc())}function F(e,t){if(1&e&&(f.dc(0,"div",5),f.dd(1),f.bd(2,J,3,0,"span",3),f.cc()),2&e){const e=f.wc(2);f.Jb(1),f.fd("",e.error," "),f.Jb(1),f.Dc("ngIf","User email is not verified."===e.error)}}function j(e,t){1&e&&(f.dc(0,"a",26),f.hc(1,D),f.cc())}function R(e,t){if(1&e&&(f.dc(0,"div",27),f.dd(1),f.cc()),2&e){const e=f.wc(2);f.Jb(1),f.fd(" ",e.formErrors.username," ")}}function T(e,t){if(1&e&&(f.dc(0,"div",27),f.dd(1),f.cc()),2&e){const e=f.wc(2);f.Jb(1),f.fd(" ",e.formErrors.password," ")}}function N(e,t){if(1&e&&(f.dc(0,"a",31),f.dd(1),f.cc()),2&e){const e=t.$implicit,n=f.wc(3);f.Dc("href",n.getAuthHref(e),f.Uc),f.Jb(1),f.fd(" ",e.authDisplayName," ")}}function X(e,t){if(1&e&&(f.dc(0,"div",28),f.dc(1,"div",29),f.hc(2,L),f.cc(),f.dc(3,"div"),f.bd(4,N,2,2,"a",30),f.cc(),f.cc()),2&e){const e=f.wc(2);f.Jb(4),f.Dc("ngForOf",e.getExternalLogins())}}S="Se est\xE1 \xE0 procura de uma conta\u2026",A="Esta inst\xE2ncia n\xE3o est\xE1 a aceitar registro de utlizadores de momento, mas pode encontrar uma inst\xE2ncia que oferece a possibilidade de registro e poder\xE1 fazer o carregamento de seus v\xEDdeos a\xED. " + "\ufffd#5\ufffd\ufffd/#5\ufffd" + " Encontre a sua, entre m\xFAltiplas inst\xE2ncias, em " + "\ufffd#6\ufffd" + "https://joinpeertube.org/instances" + "\ufffd/#6\ufffd" + ". ",$="Solicitar nova mensagem de verifica\xE7\xE3o.",D="ou crie uma conta",L="Or sign in with";const q=function(e){return{"input-error":e}};function U(e,t){if(1&e){const e=f.ec();f.bc(0),f.bd(1,z,7,0,"div",7),f.bd(2,F,3,2,"div",2),f.dc(3,"div",8),f.dc(4,"form",9),f.sc("ngSubmit",(function(){return f.Sc(e),f.wc().login()})),f.dc(5,"div",10),f.dc(6,"div"),f.dc(7,"label",11),f.hc(8,x),f.cc(),f.dc(9,"input",12,13),f.jc(11,k),f.cc(),f.bd(12,j,2,0,"a",14),f.cc(),f.bd(13,R,2,1,"div",15),f.cc(),f.dc(14,"div",10),f.dc(15,"label",16),f.hc(16,O),f.cc(),f.dc(17,"div"),f.dc(18,"input",17),f.jc(19,_),f.cc(),f.dc(20,"a",18),f.jc(21,E),f.sc("click",(function(){return f.Sc(e),f.wc().openForgotPasswordModal()})),f.dd(22,"I forgot my password"),f.cc(),f.cc(),f.bd(23,T,2,1,"div",15),f.cc(),f.dc(24,"input",19),f.jc(25,I),f.cc(),f.cc(),f.bd(26,X,5,1,"div",20),f.cc(),f.dc(27,"a",21),f.sc("click",(function(t){return f.Sc(e),f.wc().social_login(t,"facebook")})),f.dd(28,"Login with Facebook"),f.cc(),f.dd(29,"\xa0 "),f.dc(30,"a",21),f.sc("click",(function(t){return f.Sc(e),f.wc().social_login(t,"google")})),f.dd(31,"Login with Google"),f.cc(),f.dd(32,"\xa0 "),f.dc(33,"a",21),f.sc("click",(function(t){return f.Sc(e),f.wc().social_login(t,"twitter")})),f.dd(34,"Login with Twitter"),f.cc(),f.ac()}if(2&e){const e=f.wc();f.Jb(1),f.Dc("ngIf",!1===e.signupAllowed),f.Jb(1),f.Dc("ngIf",e.error),f.Jb(2),f.Dc("formGroup",e.form),f.Jb(5),f.Dc("ngClass",f.Hc(10,q,e.formErrors.username)),f.Jb(3),f.Dc("ngIf",!0===e.signupAllowed),f.Jb(1),f.Dc("ngIf",e.formErrors.username),f.Jb(5),f.Dc("ngClass",f.Hc(12,q,e.formErrors.password)),f.Jb(5),f.Dc("ngIf",e.formErrors.password),f.Jb(1),f.Dc("disabled",!e.form.valid),f.Jb(2),f.Dc("ngIf",0!==e.getExternalLogins().length)}}var V,W;V="Esqueceu-se da sua palavra-passe",W="Correio eletr\xF3nico";const G=["placeholder","Endere\xE7o de correio eletr\xF3nico"],Y=["value","Cancelar"],K=["value","Enviar-me uma mensagem para redefinir a minha palavra-passe"];var H;function B(e,t){1&e&&(f.dc(0,"div",5),f.hc(1,H),f.cc())}function Q(e,t){if(1&e){const e=f.ec();f.dc(0,"div",32),f.dc(1,"h4",33),f.hc(2,V),f.cc(),f.dc(3,"my-global-icon",34),f.sc("click",(function(){return f.Sc(e),f.wc().hideForgotPasswordModal()})),f.cc(),f.cc(),f.dc(4,"div",35),f.bd(5,B,2,0,"div",2),f.dc(6,"div",36),f.dc(7,"label",37),f.hc(8,W),f.cc(),f.dc(9,"input",38,39),f.jc(11,G),f.sc("ngModelChange",(function(t){return f.Sc(e),f.wc().forgotPasswordEmail=t})),f.cc(),f.cc(),f.cc(),f.dc(12,"div",40),f.dc(13,"input",41),f.jc(14,Y),f.sc("click",(function(){return f.Sc(e),f.wc().hideForgotPasswordModal()}))("key.enter",(function(){return f.Sc(e),f.wc().hideForgotPasswordModal()})),f.cc(),f.dc(15,"input",42),f.jc(16,K),f.sc("click",(function(){return f.Sc(e),f.wc().askResetPassword()})),f.cc(),f.cc()}if(2&e){const e=f.Qc(10),t=f.wc();f.Jb(5),f.Dc("ngIf",t.isEmailDisabled()),f.Jb(1),f.Dc("hidden",t.isEmailDisabled()),f.Jb(3),f.Dc("ngModel",t.forgotPasswordEmail),f.Jb(6),f.Dc("disabled",!e.validity.valid)}}H=" We are sorry, you cannot recover your password because your instance administrator did not configure the BitTube email system. ";let Z=(()=>{class e extends o.c{constructor(e,t,n,o,r,c,i,a,s,l){super(),this.formValidatorService=e,this.route=t,this.modalService=n,this.loginValidatorsService=o,this.authService=r,this.userService=c,this.redirectService=i,this.notifier=a,this.hooks=s,this.i18n=l,this.error=null,this.forgotPasswordEmail="",this.isAuthenticatedWithExternalAuth=!1,this.externalAuthError=!1,this.externalLogins=[]}get signupAllowed(){return!0===this.serverConfig.signup.allowed}isEmailDisabled(){return!1===this.serverConfig.email.enabled}ngOnInit(){const e=this.route.snapshot;this.serverConfig=e.data.serverConfig,e.queryParams.externalAuthToken?this.loadExternalAuthToken(e.queryParams.username,e.queryParams.externalAuthToken):e.queryParams.externalAuthError?this.externalAuthError=!0:this.buildForm({username:this.loginValidatorsService.LOGIN_USERNAME,password:this.loginValidatorsService.LOGIN_PASSWORD})}ngAfterViewInit(){this.usernameInput&&this.usernameInput.nativeElement.focus(),this.hooks.runAction("action:login.init","login")}getExternalLogins(){return this.serverConfig.plugin.registeredExternalAuths}getAuthHref(e){return g.a.apiUrl+`/plugins/${e.name}/${e.version}/auth/${e.authName}`}social_login(e,t){e.preventDefault();let n=null;switch(t){case"facebook":n=new u.b.auth.FacebookAuthProvider;break;case"google":n=new u.b.auth.GoogleAuthProvider;break;case"twitter":n=new u.b.auth.TwitterAuthProvider}u.a.signInWithPopup(n).then(e=>Object(s.a)(this,void 0,void 0,(function*(){const t=e.user.email,n=yield Object(u.c)();this.authService.login(t,n).subscribe(()=>this.redirectService.redirectToPreviousRoute(),e=>{this.error=-1!==e.message.indexOf("credentials are invalid")?this.i18n("Incorrect username or password."):-1!==e.message.indexOf("blocked")?this.i18n("You account is blocked."):e.message})})),e=>this.error=e.message)}login(){this.error=null;const{username:e,password:t}=this.form.value;this.authService.login(e,t).subscribe(()=>(-1!==e.indexOf("@")&&u.a.signInWithEmailAndPassword(e,t).catch(e=>console.error(e)),this.redirectService.redirectToPreviousRoute()),e=>this.handleError(e))}askResetPassword(){this.userService.askResetPassword(this.forgotPasswordEmail).subscribe(()=>{const e=this.i18n("An email with the reset password instructions will be sent to {{email}}. The link will expire within 1 hour.",{email:this.forgotPasswordEmail});this.notifier.success(e),this.hideForgotPasswordModal()},e=>this.notifier.error(e.message))}openForgotPasswordModal(){this.openedForgotPasswordModal=this.modalService.open(this.forgotPasswordModal)}hideForgotPasswordModal(){this.openedForgotPasswordModal.close()}loadExternalAuthToken(e,t){this.isAuthenticatedWithExternalAuth=!0,this.authService.login(e,null,t).subscribe(()=>this.redirectService.redirectToPreviousRoute(),e=>{this.handleError(e),this.isAuthenticatedWithExternalAuth=!1})}handleError(e){this.error=-1!==e.message.indexOf("credentials are invalid")?this.i18n("Incorrect username or password."):-1!==e.message.indexOf("blocked")?this.i18n("Your account is blocked."):e.message}}return e.\u0275fac=function(t){return new(t||e)(f.Xb(o.d),f.Xb(i.a),f.Xb(b.k),f.Xb(o.f),f.Xb(l.a),f.Xb(l.z),f.Xb(l.m),f.Xb(l.k),f.Xb(d.a),f.Xb(p.a))},e.\u0275cmp=f.Rb({type:e,selectors:[["my-login"]],viewQuery:function(e,t){var n;1&e&&(f.hd(P,!0),f.Yc(w,!0)),2&e&&(f.Pc(n=f.tc())&&(t.usernameInput=n.first),f.Pc(n=f.tc())&&(t.forgotPasswordModal=n.first))},features:[f.Gb],decls:7,vars:2,consts:[[1,"margin-content"],[1,"title-page","title-page-single"],["class","alert alert-danger",4,"ngIf"],[4,"ngIf"],["forgotPasswordModal",""],[1,"alert","alert-danger"],["routerLink","/about"],["class","looking-for-account alert alert-info","role","alert",4,"ngIf"],[1,"login-form-and-externals"],["role","form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","username"],["type","text","id","username","required","","tabindex","1","formControlName","username",1,"form-control",3,"ngClass",6,"placeholder"],["usernameInput",""],["routerLink","/signup","class","create-an-account",4,"ngIf"],["class","form-error",4,"ngIf"],["for","password"],["type","password","name","password","id","password","required","","tabindex","2","autocomplete","current-password","formControlName","password",1,"form-control",3,"ngClass",6,"placeholder"],[1,"forgot-password-button",3,"click",6,"title"],["type","submit",3,"disabled",6,"value"],["class","external-login-blocks",4,"ngIf"],["href","#",3,"click"],["role","alert",1,"looking-for-account","alert","alert-info"],[1,"alert-heading"],["href","https://joinpeertube.org/instances","target","_blank","rel","noopener noreferrer",1,"alert-link"],["routerLink","/verify-account/ask-send-email"],["routerLink","/signup",1,"create-an-account"],[1,"form-error"],[1,"external-login-blocks"],[1,"block-title"],["class","external-login-block","role","button",3,"href",4,"ngFor","ngForOf"],["role","button",1,"external-login-block",3,"href"],[1,"modal-header"],[1,"modal-title"],["iconName","cross","aria-label","Close","role","button",3,"click"],[1,"modal-body"],[1,"form-group",3,"hidden"],["for","forgot-password-email"],["type","email","id","forgot-password-email","required","",3,"ngModel","ngModelChange",6,"placeholder"],["forgotPasswordEmailInput",""],[1,"modal-footer","inputs"],["type","button","role","button",1,"action-button","action-button-cancel",3,"click","key.enter",6,"value"],["type","submit",1,"action-button-submit",3,"disabled","click",6,"value"]],template:function(e,t){1&e&&(f.dc(0,"div",0),f.dc(1,"div",1),f.hc(2,C),f.cc(),f.bd(3,M,3,0,"div",2),f.bd(4,U,35,14,"ng-container",3),f.cc(),f.bd(5,Q,17,4,"ng-template",null,4,f.cd)),2&e&&(f.Jb(3),f.Dc("ngIf",t.externalAuthError),f.Jb(1),f.Dc("ngIf",!t.externalAuthError&&!t.isAuthenticatedWithExternalAuth))},directives:[h.u,i.k,m.J,m.u,m.m,m.d,m.E,m.t,m.k,h.r,h.t,v.a,m.w],styles:['label[_ngcontent-%COMP%]{display:block}input[_ngcontent-%COMP%]:not([type=submit]){height:30px;width:340px;color:var(--inputForegroundColor);background-color:var(--inputBackgroundColor);border:1px solid #c6c6c6;border-radius:3px;padding-left:15px;padding-right:15px;font-size:15px;display:inline-block;margin-right:5px}input[_ngcontent-%COMP%]:not([type=submit])::-moz-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::-ms-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])[readonly]{opacity:.7}@media screen and (max-width:340px){input[_ngcontent-%COMP%]:not([type=submit]){width:100%}}input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer}input[type=submit].focus-visible[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem var(--mainColorLightest)}input[type=submit][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}input[type=submit][_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}input[type=submit].disabled[_ngcontent-%COMP%], input[type=submit][disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .feather, input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .material{color:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[fill="#000"]{fill:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[stroke="#000"]{stroke:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg stop[stop-color="#000"]{stop-color:#fff}.create-an-account[_ngcontent-%COMP%], .forgot-password-button[_ngcontent-%COMP%]{color:var(--mainForegroundColor);cursor:pointer;transition:opacity cubic-bezier(.39,.575,.565,1)}.create-an-account[_ngcontent-%COMP%]:hover, .forgot-password-button[_ngcontent-%COMP%]:hover{text-decoration:none!important;opacity:.7!important}.login-form-and-externals[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;font-size:15px}.login-form-and-externals[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:0 50px 20px 0}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]{min-width:200px}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .block-title[_ngcontent-%COMP%]{font-weight:600}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]{cursor:pointer;border:1px solid #d1d7e0;border-radius:5px;color:var(--mainForegroundColor);margin:10px 10px 0 0;display:flex;justify-content:center;align-items:center;min-height:35px;min-width:100px}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]:active, .login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]:focus, .login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]:hover{text-decoration:none!important;outline:none!important}.login-form-and-externals[_ngcontent-%COMP%]   .external-login-blocks[_ngcontent-%COMP%]   .external-login-block[_ngcontent-%COMP%]:hover{background-color:rgba(209,215,224,.5)}']}),e})();var ee=n("trhE");const te=[{path:"",component:Z,canActivate:[a.a],data:{meta:{title:"Login"}},resolve:{serverConfig:ee.a}}];let ne=(()=>{class e{}return e.\u0275mod=f.Vb({type:e}),e.\u0275inj=f.Ub({factory:function(t){return new(t||e)},imports:[[i.l.forChild(te)],i.l]}),e})(),oe=(()=>{class e{}return e.\u0275mod=f.Vb({type:e}),e.\u0275inj=f.Ub({factory:function(t){return new(t||e)},providers:[],imports:[[ne,c.g,o.h,r.a]]}),e})()}}]);