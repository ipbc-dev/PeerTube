(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{eijS:function(e,n,t){"use strict";t.r(n),t.d(n,"ResetPasswordModule",function(){return S});var r=t("sWvm"),o=t("xMQD"),i=t("tyNb"),a=t("Phsq"),s=t("ey9i"),c=t("3Pt+");const l={VALIDATORS:[c.w.required],MESSAGES:{required:"Confirma\xE7\xE3o da senha \xE9 necess\xE1ria."}};var u=t("nnN+"),d=t("fXoL"),m=t("RM9B"),p=t("ofXK");function g(e,n){if(1&e&&(d.Vb(0,"div",13),d.Uc(1),d.Ub()),2&e){const e=d.nc();d.Cb(1),d.Wc(" ",e.formErrors.password," ")}}function b(e,n){if(1&e&&(d.Vb(0,"div",13),d.Uc(1),d.Ub()),2&e){const e=d.nc();d.Cb(1),d.Wc(" ",e.formErrors["password-confirm"]," ")}}const f=function(e){return{"input-error":e}},h=[{path:"",component:(()=>{class e extends r.a{constructor(e,n,t,r,o){super(),this.formValidatorService=e,this.userService=n,this.notifier=t,this.router=r,this.route=o}ngOnInit(){this.buildForm({password:u.i,"password-confirm":l}),this.userId=this.route.snapshot.queryParams.userId,this.verificationString=this.route.snapshot.queryParams.verificationString,this.userId&&this.verificationString||(this.notifier.error("N\xE3o foi poss\xEDvel localizar o id de usu\xE1rio ou string de verifica\xE7\xE3o."),this.router.navigate(["/"]))}resetPassword(){this.userService.resetPassword(this.userId,this.verificationString,this.form.value.password).subscribe(()=>{this.notifier.success("Sua senha foi redefinida com sucesso!"),this.router.navigate(["/login"])},e=>this.notifier.error(e.message))}isConfirmedPasswordValid(){const e=this.form.value;return e.password===e["password-confirm"]}}return e.\u0275fac=function(n){return new(n||e)(d.Pb(r.b),d.Pb(s.D),d.Pb(s.m),d.Pb(i.h),d.Pb(i.a))},e.\u0275cmp=d.Jb({type:e,selectors:[["my-login"]],features:[d.zb],decls:15,vars:10,consts:function(){let e,n,t,r,o,i;return e="\n    Redefinir minha senha\n  ",n="Senha",t="Senha",r="Confirme a senha",o="Senha confirmada",i="Redefinir minha senha",[[1,"margin-content"],[1,"title-page","title-page-single"],e,["role","form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","password"],n,["formControlName","password","inputId","password","placeholder",t,"autocomplete","new-password",3,"ngClass"],["class","form-error",4,"ngIf"],["for","password-confirm"],r,["formControlName","password-confirm","inputId","password-confirm","placeholder",o,"autocomplete","new-password",3,"ngClass"],["type","submit","value",i,3,"disabled"],[1,"form-error"]]},template:function(e,n){1&e&&(d.Vb(0,"div",0),d.Vb(1,"div",1),d.Zb(2,2),d.Ub(),d.Vb(3,"form",3),d.jc("ngSubmit",function(){return n.resetPassword()}),d.Vb(4,"div",4),d.Vb(5,"label",5),d.Zb(6,6),d.Ub(),d.Qb(7,"my-input-toggle-hidden",7),d.Sc(8,g,2,1,"div",8),d.Ub(),d.Vb(9,"div",4),d.Vb(10,"label",9),d.Zb(11,10),d.Ub(),d.Qb(12,"my-input-toggle-hidden",11),d.Sc(13,b,2,1,"div",8),d.Ub(),d.Qb(14,"input",12),d.Ub(),d.Ub()),2&e&&(d.Cb(3),d.uc("formGroup",n.form),d.Cb(4),d.uc("ngClass",d.yc(6,f,n.formErrors.password)),d.Cb(1),d.uc("ngIf",n.formErrors.password),d.Cb(4),d.uc("ngClass",d.yc(8,f,n.formErrors["password-confirm"])),d.Cb(1),d.uc("ngIf",n.formErrors["password-confirm"]),d.Cb(1),d.uc("disabled",!n.form.valid||!n.isConfirmedPasswordValid()))},directives:[c.y,c.n,c.h,m.a,c.m,c.f,p.l,p.n],styles:['input[_ngcontent-%COMP%]:not([type=submit]){display:inline-block;height:30px;width:340px;color:var(--inputForegroundColor);background-color:var(--inputBackgroundColor);border:1px solid #c6c6c6;border-radius:3px;padding-left:15px;padding-right:15px;font-size:15px;display:block}input[_ngcontent-%COMP%]:not([type=submit])::-moz-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])[readonly]{opacity:.7}@media screen and (max-width:340px){input[_ngcontent-%COMP%]:not([type=submit]){width:100%}}input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer}input[type=submit].focus-visible[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem var(--mainColorLightest)}input[type=submit][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}input[type=submit][_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}input[type=submit].disabled[_ngcontent-%COMP%], input[type=submit][disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .feather, input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .material{color:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[fill="#000"]{fill:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[stroke="#000"]{stroke:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg stop[stop-color="#000"]{stop-color:#fff}']}),e})(),canActivate:[a.a],data:{meta:{title:"Reset password"}}}];let w=(()=>{class e{}return e.\u0275mod=d.Nb({type:e}),e.\u0275inj=d.Mb({factory:function(n){return new(n||e)},imports:[[i.l.forChild(h)],i.l]}),e})(),S=(()=>{class e{}return e.\u0275mod=d.Nb({type:e}),e.\u0275inj=d.Mb({factory:function(n){return new(n||e)},providers:[],imports:[[w,o.h,r.c]]}),e})()},"nnN+":function(e,n,t){"use strict";t.d(n,"l",function(){return o}),t.d(n,"b",function(){return i}),t.d(n,"f",function(){return a}),t.d(n,"g",function(){return s}),t.d(n,"i",function(){return c}),t.d(n,"h",function(){return l}),t.d(n,"c",function(){return u}),t.d(n,"n",function(){return d}),t.d(n,"m",function(){return m}),t.d(n,"j",function(){return p}),t.d(n,"e",function(){return g}),t.d(n,"d",function(){return b}),t.d(n,"k",function(){return f}),t.d(n,"a",function(){return h});var r=t("3Pt+");const o={VALIDATORS:[r.w.required,r.w.minLength(1),r.w.maxLength(50),r.w.pattern(/^[a-z0-9][a-z0-9._]*$/)],MESSAGES:{required:"Nome de usu\xE1rio \xE9 necess\xE1rio.",minlength:"O nome de usu\xE1rio deve ter ao menos 1 caractere.",maxlength:"O nome de usu\xE1rio n\xE3o pode ter mais que 50 caracteres.",pattern:"O nome de usu\xE1rio deve ser alfanum\xE9rico e em caixa baixa; pontos finais e underlines s\xE3o permitidos."}},i={VALIDATORS:[r.w.required,r.w.minLength(1),r.w.maxLength(50),r.w.pattern(/^[a-z0-9][a-z0-9._]*$/)],MESSAGES:{required:"Channel name is required.",minlength:"Channel name must be at least 1 character long.",maxlength:"Channel name cannot be more than 50 characters long.",pattern:"Channel name should be lowercase, and can contain only alphanumeric characters, dots and underscores."}},a={VALIDATORS:[r.w.required,r.w.email],MESSAGES:{required:"E-mail \xE9 necess\xE1rio.",email:"E-mail deve ser v\xE1lido."}},s={VALIDATORS:[r.w.required],MESSAGES:{required:"Senha \xE9 necess\xE1ria."}},c={VALIDATORS:[r.w.required,r.w.minLength(6),r.w.maxLength(255)],MESSAGES:{required:"Senha \xE9 necess\xE1ria.",minlength:"Senha deve ter pelo menos 6 caracteres.",maxlength:"Senha n\xE3o pode ter mais que 255 caracteres."}},l={VALIDATORS:[r.w.minLength(6),r.w.maxLength(255)],MESSAGES:{minlength:"Senha deve ter pelo menos 6 caracteres.",maxlength:"Senha n\xE3o pode ter mais que 255 caracteres."}},u={VALIDATORS:[],MESSAGES:{matchPassword:"A nova senha e a senha confirmada n\xE3o s\xE3o iguais."}},d={VALIDATORS:[r.w.required,r.w.min(-1)],MESSAGES:{required:"Quota de v\xEDdeo \xE9 necess\xE1ria.",min:"Quota deve ser maior que -1."}},m={VALIDATORS:[r.w.required,r.w.min(-1)],MESSAGES:{required:"Limite de upload di\xE1rio \xE9 obrigat\xF3rio.",min:"Limite de upload di\xE1rio deve ser maior que -1."}},p={VALIDATORS:[r.w.required],MESSAGES:{required:"Papel de usu\xE1rio \xE9 necess\xE1rio."}},g=function(e){const n={VALIDATORS:[r.w.minLength(1),r.w.maxLength(120)],MESSAGES:{required:"Nome de exibi\xE7\xE3o \xE9 necess\xE1rio.",minlength:"O nome de exibi\xE7\xE3o deve ter no m\xEDnimo 1 caractere.",maxlength:"O nome de exibi\xE7\xE3o n\xE3o pode ter mais que 50 caracteres."}};return n.VALIDATORS.push(r.w.required),n}(),b={VALIDATORS:[r.w.minLength(3),r.w.maxLength(1e3)],MESSAGES:{minlength:"A descri\xE7\xE3o deve ter pelo menos 3 caracteres.",maxlength:"A descri\xE7\xE3o n\xE3o pode ter mais que 1000 caracteres."}},f={VALIDATORS:[r.w.requiredTrue],MESSAGES:{required:"Voc\xEA precisa concordar com os termos da inst\xE2ncia para se registrar."}},h={VALIDATORS:[r.w.minLength(3),r.w.maxLength(250)],MESSAGES:{minlength:"O motivo do banimento deve ter pelo menos 3 caracteres.",maxlength:"O motivo do banimento n\xE3o pode ter mais que 250 caracteres."}}}}]);