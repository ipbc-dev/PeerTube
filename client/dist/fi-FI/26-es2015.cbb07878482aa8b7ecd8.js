(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{eijS:function(t,o,n){"use strict";n.r(o),n.d(o,"ResetPasswordModule",(function(){return O}));var e,r,i=n("sWvm"),s=n("xMQD"),c=n("tyNb"),a=n("Phsq"),d=n("ey9i"),l=n("fXoL"),p=n("7FIj"),u=n("3Pt+"),f=n("ofXK");e="\n    Alusta salasanani\n  ",r="Salasana";const g=["placeholder","Salasana"];var b;b="Vahvista salasana";const m=["placeholder","Vahvistettu salasana"],h=["value","Nollaa salasanani"];function y(t,o){if(1&t&&(l.dc(0,"div",10),l.dd(1),l.cc()),2&t){const t=l.wc();l.Jb(1),l.fd(" ",t.formErrors.password," ")}}function C(t,o){if(1&t&&(l.dc(0,"div",10),l.dd(1),l.cc()),2&t){const t=l.wc();l.Jb(1),l.fd(" ",t.formErrors["password-confirm"]," ")}}const P=function(t){return{"input-error":t}},v=[{path:"",component:(()=>{class t extends i.c{constructor(t,o,n,e,r,i,s,c){super(),this.formValidatorService=t,this.resetPasswordValidatorsService=o,this.userValidatorsService=n,this.userService=e,this.notifier=r,this.router=i,this.route=s,this.i18n=c}ngOnInit(){this.buildForm({password:this.userValidatorsService.USER_PASSWORD,"password-confirm":this.resetPasswordValidatorsService.RESET_PASSWORD_CONFIRM}),this.userId=this.route.snapshot.queryParams.userId,this.verificationString=this.route.snapshot.queryParams.verificationString,this.userId&&this.verificationString||(this.notifier.error(this.i18n("Unable to find user id or verification string.")),this.router.navigate(["/"]))}resetPassword(){this.userService.resetPassword(this.userId,this.verificationString,this.form.value.password).subscribe(()=>{this.notifier.success(this.i18n("Your password has been successfully reset!")),this.router.navigate(["/login"])},t=>this.notifier.error(t.message))}isConfirmedPasswordValid(){const t=this.form.value;return t.password===t["password-confirm"]}}return t.\u0275fac=function(o){return new(o||t)(l.Xb(i.d),l.Xb(i.g),l.Xb(i.i),l.Xb(d.z),l.Xb(d.k),l.Xb(c.h),l.Xb(c.a),l.Xb(p.a))},t.\u0275cmp=l.Rb({type:t,selectors:[["my-login"]],features:[l.Gb],decls:18,vars:10,consts:[[1,"margin-content"],[1,"title-page","title-page-single"],["role","form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","password"],["type","password","name","password","id","password","required","","autocomplete","new-password","formControlName","password",3,"ngClass",6,"placeholder"],["class","form-error",4,"ngIf"],["for","password-confirm"],["type","password","name","password-confirm","id","password-confirm","required","","autocomplete","new-password","formControlName","password-confirm",3,"ngClass",6,"placeholder"],["type","submit",3,"disabled",6,"value"],[1,"form-error"]],template:function(t,o){1&t&&(l.dc(0,"div",0),l.dc(1,"div",1),l.hc(2,e),l.cc(),l.dc(3,"form",2),l.sc("ngSubmit",(function(){return o.resetPassword()})),l.dc(4,"div",3),l.dc(5,"label",4),l.hc(6,r),l.cc(),l.dc(7,"input",5),l.jc(8,g),l.cc(),l.bd(9,y,2,1,"div",6),l.cc(),l.dc(10,"div",3),l.dc(11,"label",7),l.hc(12,b),l.cc(),l.dc(13,"input",8),l.jc(14,m),l.cc(),l.bd(15,C,2,1,"div",6),l.cc(),l.dc(16,"input",9),l.jc(17,h),l.cc(),l.cc(),l.cc()),2&t&&(l.Jb(3),l.Dc("formGroup",o.form),l.Jb(4),l.Dc("ngClass",l.Hc(6,P,o.formErrors.password)),l.Jb(2),l.Dc("ngIf",o.formErrors.password),l.Jb(4),l.Dc("ngClass",l.Hc(8,P,o.formErrors["password-confirm"])),l.Jb(2),l.Dc("ngIf",o.formErrors["password-confirm"]),l.Jb(1),l.Dc("disabled",!o.form.valid||!o.isConfirmedPasswordValid()))},directives:[u.J,u.u,u.m,u.d,u.E,u.t,u.k,f.r,f.u],styles:['input[_ngcontent-%COMP%]:not([type=submit]){display:inline-block;height:30px;width:340px;color:var(--inputForegroundColor);background-color:var(--inputBackgroundColor);border:1px solid #c6c6c6;border-radius:3px;padding-left:15px;padding-right:15px;font-size:15px;display:block}input[_ngcontent-%COMP%]:not([type=submit])::-moz-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::-ms-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])[readonly]{opacity:.7}@media screen and (max-width:340px){input[_ngcontent-%COMP%]:not([type=submit]){width:100%}}input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer}input[type=submit].focus-visible[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem var(--mainColorLightest)}input[type=submit][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}input[type=submit][_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}input[type=submit].disabled[_ngcontent-%COMP%], input[type=submit][disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .feather, input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .material{color:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[fill="#000"]{fill:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[stroke="#000"]{stroke:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg stop[stop-color="#000"]{stop-color:#fff}']}),t})(),canActivate:[a.a],data:{meta:{title:"Reset password"}}}];let w=(()=>{class t{}return t.\u0275mod=l.Vb({type:t}),t.\u0275inj=l.Ub({factory:function(o){return new(o||t)},imports:[[c.l.forChild(v)],c.l]}),t})(),O=(()=>{class t{}return t.\u0275mod=l.Vb({type:t}),t.\u0275inj=l.Ub({factory:function(o){return new(o||t)},providers:[],imports:[[w,s.g,i.h]]}),t})()}}]);