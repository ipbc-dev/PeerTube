(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{eijS:function(e,n,t){"use strict";t.r(n),t.d(n,"ResetPasswordModule",(function(){return y}));var r=t("sWvm"),o=t("xMQD"),i=t("tyNb"),a=t("Phsq"),s=t("ey9i"),c=t("3Pt+");const l={VALIDATORS:[c.G.required],MESSAGES:{required:"\u064A\u062C\u0628 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0629."}};var u=t("nnN+"),d=t("fXoL"),m=t("ofXK");function p(e,n){if(1&e&&(d.Wb(0,"div",16),d.Vc(1),d.Vb()),2&e){const e=d.oc();d.Db(1),d.Xc(" ",e.formErrors.password," ")}}function g(e,n){if(1&e&&(d.Wb(0,"div",16),d.Vc(1),d.Vb()),2&e){const e=d.oc();d.Db(1),d.Xc(" ",e.formErrors["password-confirm"]," ")}}const b=function(e){return{"input-error":e}},f=[{path:"",component:(()=>{class e extends r.a{constructor(e,n,t,r,o){super(),this.formValidatorService=e,this.userService=n,this.notifier=t,this.router=r,this.route=o}ngOnInit(){this.buildForm({password:u.h,"password-confirm":l}),this.userId=this.route.snapshot.queryParams.userId,this.verificationString=this.route.snapshot.queryParams.verificationString,this.userId&&this.verificationString||(this.notifier.error("\u062A\u0639\u0630\u0631 \u0627\u0644\u0639\u062B\u0648\u0631 \u0639\u0644\u0649 \u0645\u0639\u0631\u0641 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0623\u0648 \u0633\u0644\u0633\u0644\u0629 \u0627\u0644\u062A\u062D\u0642\u0642."),this.router.navigate(["/"]))}resetPassword(){this.userService.resetPassword(this.userId,this.verificationString,this.form.value.password).subscribe(()=>{this.notifier.success("\u0644\u0642\u062F \u062A\u0645 \u0625\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u062A\u0643 \u0627\u0644\u0633\u0631\u064A\u0629 \u0628\u0646\u062C\u0627\u062D!"),this.router.navigate(["/login"])},e=>this.notifier.error(e.message))}isConfirmedPasswordValid(){const e=this.form.value;return e.password===e["password-confirm"]}}return e.\u0275fac=function(n){return new(n||e)(d.Qb(r.b),d.Qb(s.UserService),d.Qb(s.Notifier),d.Qb(i.h),d.Qb(i.a))},e.\u0275cmp=d.Kb({type:e,selectors:[["my-login"]],features:[d.Ab],decls:18,vars:10,consts:function(){return[[1,"margin-content"],[1,"title-page","title-page-single"],"\u0623\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631",["role","form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","password"],"\u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0629",["type","password","name","password","id","password","required","","autocomplete","new-password","formControlName","password",3,"ngClass",6,"placeholder"],["placeholder","\u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0629"],["class","form-error",4,"ngIf"],["for","password-confirm"],"\u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0629",["type","password","name","password-confirm","id","password-confirm","required","","autocomplete","new-password","formControlName","password-confirm",3,"ngClass",6,"placeholder"],["placeholder","\u062A\u0645 \u062A\u0623\u0643\u064A\u062F \u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0629"],["type","submit",3,"disabled",6,"value"],["value","\u0623\u0639\u0627\u062F\u0629 \u062A\u0639\u064A\u064A\u0646 \u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631"],[1,"form-error"]]},template:function(e,n){1&e&&(d.Wb(0,"div",0),d.Wb(1,"div",1),d.ac(2,2),d.Vb(),d.Wb(3,"form",3),d.kc("ngSubmit",(function(){return n.resetPassword()})),d.Wb(4,"div",4),d.Wb(5,"label",5),d.ac(6,6),d.Vb(),d.Wb(7,"input",7),d.cc(8,8),d.Vb(),d.Tc(9,p,2,1,"div",9),d.Vb(),d.Wb(10,"div",4),d.Wb(11,"label",10),d.ac(12,11),d.Vb(),d.Wb(13,"input",12),d.cc(14,13),d.Vb(),d.Tc(15,g,2,1,"div",9),d.Vb(),d.Wb(16,"input",14),d.cc(17,15),d.Vb(),d.Vb(),d.Vb()),2&e&&(d.Db(3),d.vc("formGroup",n.form),d.Db(4),d.vc("ngClass",d.zc(6,b,n.formErrors.password)),d.Db(2),d.vc("ngIf",n.formErrors.password),d.Db(4),d.vc("ngClass",d.zc(8,b,n.formErrors["password-confirm"])),d.Db(2),d.vc("ngIf",n.formErrors["password-confirm"]),d.Db(1),d.vc("disabled",!n.form.valid||!n.isConfirmedPasswordValid()))},directives:[c.I,c.t,c.l,c.c,c.D,c.s,c.j,m.r,m.u],styles:['input[_ngcontent-%COMP%]:not([type=submit]){display:inline-block;height:30px;width:340px;color:var(--inputForegroundColor);background-color:var(--inputBackgroundColor);border:1px solid #c6c6c6;border-radius:3px;padding-left:15px;padding-right:15px;font-size:15px;display:block}input[_ngcontent-%COMP%]:not([type=submit])::-moz-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::-ms-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])[readonly]{opacity:.7}@media screen and (max-width:340px){input[_ngcontent-%COMP%]:not([type=submit]){width:100%}}input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer}input[type=submit].focus-visible[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem var(--mainColorLightest)}input[type=submit][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}input[type=submit][_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}input[type=submit].disabled[_ngcontent-%COMP%], input[type=submit][disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .feather, input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .material{color:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[fill="#000"]{fill:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[stroke="#000"]{stroke:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg stop[stop-color="#000"]{stop-color:#fff}']}),e})(),canActivate:[a.a],data:{meta:{title:"Reset password"}}}];let h=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(n){return new(n||e)},imports:[[i.l.forChild(f)],i.l]}),e})(),y=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(n){return new(n||e)},providers:[],imports:[[h,o.SharedMainModule,r.c]]}),e})()},"nnN+":function(e,n,t){"use strict";t.d(n,"k",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"f",(function(){return a})),t.d(n,"h",(function(){return s})),t.d(n,"g",(function(){return c})),t.d(n,"c",(function(){return l})),t.d(n,"m",(function(){return u})),t.d(n,"l",(function(){return d})),t.d(n,"i",(function(){return m})),t.d(n,"e",(function(){return p})),t.d(n,"d",(function(){return g})),t.d(n,"j",(function(){return b})),t.d(n,"a",(function(){return f}));var r=t("3Pt+");const o={VALIDATORS:[r.G.required,r.G.minLength(1),r.G.maxLength(50),r.G.pattern(/^[a-z0-9][a-z0-9._]*$/)],MESSAGES:{required:"\u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628.",minlength:"\u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0643\u0648\u0646 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0646 \u062D\u0631\u0641 \u0648\u0627\u062D\u062F \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.",maxlength:"\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0632\u064A\u062F \u0637\u0648\u0644 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0639\u0646 50 \u062D\u0631\u0641\u064B\u0627.",pattern:"\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0627\u0633\u0645 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0635\u063A\u064A\u0631\u064B\u0627 \u0623\u0628\u062C\u062F\u064A\u064B\u0627 \u0631\u0642\u0645\u064A\u064B\u0627 ; \u064A\u0633\u0645\u062D \u0628\u0627\u0644\u0646\u0642\u0627\u0637 \u0648\u0627\u0644\u0634\u0631\u0637\u0627\u062A \u0627\u0644\u0633\u0641\u0644\u064A\u0629."}},i={VALIDATORS:[r.G.required,r.G.minLength(1),r.G.maxLength(50),r.G.pattern(/^[a-z0-9][a-z0-9._]*$/)],MESSAGES:{required:"Channel name is required.",minlength:"Channel name must be at least 1 character long.",maxlength:"Channel name cannot be more than 50 characters long.",pattern:"Channel name should be lowercase alphanumeric; dots and underscores are allowed."}},a={VALIDATORS:[r.G.required,r.G.email],MESSAGES:{required:"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0645\u0637\u0644\u0648\u0628.",email:"\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0625\u0644\u0643\u062A\u0631\u0648\u0646\u064A \u0639\u0646\u0648\u0627\u0646\u064B\u0627 \u0635\u0627\u0644\u062D\u064B\u0627."}},s={VALIDATORS:[r.G.required,r.G.minLength(6),r.G.maxLength(255)],MESSAGES:{required:"\u0627\u0644\u0643\u0644\u0645\u0629 \u0627\u0644\u0633\u0631\u064A\u0629 \u0645\u0637\u0644\u0648\u0628\u0629.",minlength:"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A \u064A\u062C\u0628 \u0627\u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 6 \u0627\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0627\u0642\u0644.",maxlength:"\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0632\u064A\u062F \u0637\u0648\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0639\u0646 255 \u062D\u0631\u0641\u064B\u0627."}},c={VALIDATORS:[r.G.minLength(6),r.G.maxLength(255)],MESSAGES:{minlength:"\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0633\u0631\u064A \u064A\u062C\u0628 \u0627\u0644\u0627 \u064A\u0642\u0644 \u0639\u0646 6 \u0627\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0627\u0642\u0644.",maxlength:"\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0632\u064A\u062F \u0637\u0648\u0644 \u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0639\u0646 255 \u062D\u0631\u0641\u064B\u0627."}},l={VALIDATORS:[],MESSAGES:{matchPassword:"\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u062C\u062F\u064A\u062F\u0629 \u0648\u0643\u0644\u0645\u0629 \u0627\u0644\u0645\u0631\u0648\u0631 \u0627\u0644\u0645\u0624\u0643\u062F\u0629 \u063A\u064A\u0631 \u0645\u062A\u0637\u0627\u0628\u0642\u0629."}},u={VALIDATORS:[r.G.required,r.G.min(-1)],MESSAGES:{required:"\u0645\u0637\u0644\u0648\u0628 \u062D\u0635\u0629 \u0627\u0644\u0641\u064A\u062F\u064A\u0648.",min:"\u064A\u062C\u0628 \u0623\u0646 \u062A\u0643\u0648\u0646 \u0627\u0644\u062D\u0635\u0629 \u0623\u0643\u0628\u0631 \u0645\u0646 -1."}},d={VALIDATORS:[r.G.required,r.G.min(-1)],MESSAGES:{required:"\u0645\u0637\u0644\u0648\u0628 \u062D\u062F \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u064A\u0648\u0645\u064A.",min:"\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u062D\u062F \u0627\u0644\u062A\u062D\u0645\u064A\u0644 \u0627\u0644\u064A\u0648\u0645\u064A \u0623\u0643\u0628\u0631 \u0645\u0646 -1."}},m={VALIDATORS:[r.G.required],MESSAGES:{required:"\u062F\u0648\u0631 \u0627\u0644\u0645\u0633\u062A\u062E\u062F\u0645 \u0645\u0637\u0644\u0648\u0628."}},p=function(e){const n={VALIDATORS:[r.G.minLength(1),r.G.maxLength(120)],MESSAGES:{required:"\u0639\u0631\u0636 \u0627\u0644\u0627\u0633\u0645 \u0644\u0627\u0632\u0645.",minlength:"\u064A\u062C\u0628 \u0623\u0644\u0627 \u064A\u0642\u0644 \u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0636 \u0639\u0646 \u062D\u0631\u0641 \u0648\u0627\u062D\u062F.",maxlength:"\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0632\u064A\u062F \u0627\u0633\u0645 \u0627\u0644\u0639\u0631\u0636 \u0639\u0646 50 \u062D\u0631\u0641\u064B\u0627."}};return n.VALIDATORS.push(r.G.required),n}(),g={VALIDATORS:[r.G.minLength(3),r.G.maxLength(1e3)],MESSAGES:{minlength:"\u0637\u0648\u0644 \u0627\u0644\u0648\u0635\u0641 \u064A\u062C\u0628 \u0623\u0646 \u064A\u062A\u0639\u062F\u0649 3\u062D\u0631\u0648\u0641.",maxlength:"\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0632\u064A\u062F \u0627\u0644\u0648\u0635\u0641 \u0639\u0646 1000 \u062D\u0631\u0641."}},b={VALIDATORS:[r.G.requiredTrue],MESSAGES:{required:"\u064A\u062C\u0628 \u0639\u0644\u064A\u0643 \u0642\u0628\u0648\u0644 \u0634\u0631\u0648\u0637 \u0645\u0646\u0635\u0629 \u0627\u0644\u062E\u0627\u062F\u0645 \u0642\u0628\u0644 \u0623\u0646 \u062A\u0646\u0634\u0626 \u062D\u0633\u0627\u0628\u064B\u0627 \u0639\u0644\u064A\u0647."}},f={VALIDATORS:[r.G.minLength(3),r.G.maxLength(250)],MESSAGES:{minlength:"\u064A\u062C\u0628 \u0623\u0646 \u064A\u0643\u0648\u0646 \u0633\u0628\u0628 \u0627\u0644\u062D\u0638\u0631 3 \u0623\u062D\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644.",maxlength:"\u0644\u0627 \u064A\u0645\u0643\u0646 \u0623\u0646 \u064A\u0632\u064A\u062F \u0633\u0628\u0628 \u0627\u0644\u062D\u0638\u0631 \u0639\u0646 250 \u062D\u0631\u0641\u064B\u0627."}}}}]);