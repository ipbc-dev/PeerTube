(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{eijS:function(e,n,t){"use strict";t.r(n),t.d(n,"ResetPasswordModule",(function(){return y}));var r=t("sWvm"),o=t("xMQD"),i=t("tyNb"),a=t("Phsq"),s=t("ey9i"),c=t("3Pt+");const l={VALIDATORS:[c.G.required],MESSAGES:{required:"L\xF6senordet m\xE5ste bekr\xE4ftas."}};var u=t("nnN+"),d=t("fXoL"),m=t("ofXK");function p(e,n){if(1&e&&(d.Wb(0,"div",16),d.Vc(1),d.Vb()),2&e){const e=d.oc();d.Db(1),d.Xc(" ",e.formErrors.password," ")}}function g(e,n){if(1&e&&(d.Wb(0,"div",16),d.Vc(1),d.Vb()),2&e){const e=d.oc();d.Db(1),d.Xc(" ",e.formErrors["password-confirm"]," ")}}const b=function(e){return{"input-error":e}},f=[{path:"",component:(()=>{class e extends r.a{constructor(e,n,t,r,o){super(),this.formValidatorService=e,this.userService=n,this.notifier=t,this.router=r,this.route=o}ngOnInit(){this.buildForm({password:u.h,"password-confirm":l}),this.userId=this.route.snapshot.queryParams.userId,this.verificationString=this.route.snapshot.queryParams.verificationString,this.userId&&this.verificationString||(this.notifier.error("Kan inte hitta anv\xE4ndar-id eller verifikationsstr\xE4ng."),this.router.navigate(["/"]))}resetPassword(){this.userService.resetPassword(this.userId,this.verificationString,this.form.value.password).subscribe(()=>{this.notifier.success("Ditt l\xF6senord har \xE5terst\xE4llts!"),this.router.navigate(["/login"])},e=>this.notifier.error(e.message))}isConfirmedPasswordValid(){const e=this.form.value;return e.password===e["password-confirm"]}}return e.\u0275fac=function(n){return new(n||e)(d.Qb(r.b),d.Qb(s.UserService),d.Qb(s.Notifier),d.Qb(i.h),d.Qb(i.a))},e.\u0275cmp=d.Kb({type:e,selectors:[["my-login"]],features:[d.Ab],decls:18,vars:10,consts:function(){return[[1,"margin-content"],[1,"title-page","title-page-single"],"\n    \xC5terst\xE4ll mitt l\xF6senord\n  ",["role","form",3,"formGroup","ngSubmit"],[1,"form-group"],["for","password"],"L\xF6senord",["type","password","name","password","id","password","required","","autocomplete","new-password","formControlName","password",3,"ngClass",6,"placeholder"],["placeholder","L\xF6senord"],["class","form-error",4,"ngIf"],["for","password-confirm"],"Bekr\xE4fta l\xF6senord",["type","password","name","password-confirm","id","password-confirm","required","","autocomplete","new-password","formControlName","password-confirm",3,"ngClass",6,"placeholder"],["placeholder","Bekr\xE4ftat l\xF6senord"],["type","submit",3,"disabled",6,"value"],["value","\xC5terst\xE4ll mitt l\xF6senord"],[1,"form-error"]]},template:function(e,n){1&e&&(d.Wb(0,"div",0),d.Wb(1,"div",1),d.ac(2,2),d.Vb(),d.Wb(3,"form",3),d.kc("ngSubmit",(function(){return n.resetPassword()})),d.Wb(4,"div",4),d.Wb(5,"label",5),d.ac(6,6),d.Vb(),d.Wb(7,"input",7),d.cc(8,8),d.Vb(),d.Tc(9,p,2,1,"div",9),d.Vb(),d.Wb(10,"div",4),d.Wb(11,"label",10),d.ac(12,11),d.Vb(),d.Wb(13,"input",12),d.cc(14,13),d.Vb(),d.Tc(15,g,2,1,"div",9),d.Vb(),d.Wb(16,"input",14),d.cc(17,15),d.Vb(),d.Vb(),d.Vb()),2&e&&(d.Db(3),d.vc("formGroup",n.form),d.Db(4),d.vc("ngClass",d.zc(6,b,n.formErrors.password)),d.Db(2),d.vc("ngIf",n.formErrors.password),d.Db(4),d.vc("ngClass",d.zc(8,b,n.formErrors["password-confirm"])),d.Db(2),d.vc("ngIf",n.formErrors["password-confirm"]),d.Db(1),d.vc("disabled",!n.form.valid||!n.isConfirmedPasswordValid()))},directives:[c.I,c.t,c.l,c.c,c.D,c.s,c.j,m.r,m.u],styles:['input[_ngcontent-%COMP%]:not([type=submit]){display:inline-block;height:30px;width:340px;color:var(--inputForegroundColor);background-color:var(--inputBackgroundColor);border:1px solid #c6c6c6;border-radius:3px;padding-left:15px;padding-right:15px;font-size:15px;display:block}input[_ngcontent-%COMP%]:not([type=submit])::-moz-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::-ms-input-placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])::placeholder{color:var(--inputPlaceholderColor)}input[_ngcontent-%COMP%]:not([type=submit])[readonly]{opacity:.7}@media screen and (max-width:340px){input[_ngcontent-%COMP%]:not([type=submit]){width:100%}}input[type=submit][_ngcontent-%COMP%]{border:none;font-weight:600;font-size:15px;height:30px;line-height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer}input[type=submit].focus-visible[_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .2rem var(--mainColorLightest)}input[type=submit][_ngcontent-%COMP%], input[type=submit][_ngcontent-%COMP%]:active, input[type=submit][_ngcontent-%COMP%]:focus{color:#fff;background-color:var(--mainColor)}input[type=submit][_ngcontent-%COMP%]:hover{color:#fff;background-color:var(--mainHoverColor)}input[type=submit].disabled[_ngcontent-%COMP%], input[type=submit][disabled][_ngcontent-%COMP%]{cursor:default;color:#fff;background-color:#c6c6c6}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .feather, input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     .material{color:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[fill="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[fill="#000"]{fill:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg circle[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg g[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg path[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg polygon[stroke="#000"], input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg rect[stroke="#000"]{stroke:#fff}input[type=submit][_ngcontent-%COMP%]   my-global-icon[_ngcontent-%COMP%]     svg stop[stop-color="#000"]{stop-color:#fff}']}),e})(),canActivate:[a.a],data:{meta:{title:"Reset password"}}}];let h=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(n){return new(n||e)},imports:[[i.l.forChild(f)],i.l]}),e})(),y=(()=>{class e{}return e.\u0275mod=d.Ob({type:e}),e.\u0275inj=d.Nb({factory:function(n){return new(n||e)},providers:[],imports:[[h,o.SharedMainModule,r.c]]}),e})()},"nnN+":function(e,n,t){"use strict";t.d(n,"k",(function(){return o})),t.d(n,"b",(function(){return i})),t.d(n,"f",(function(){return a})),t.d(n,"h",(function(){return s})),t.d(n,"g",(function(){return c})),t.d(n,"c",(function(){return l})),t.d(n,"m",(function(){return u})),t.d(n,"l",(function(){return d})),t.d(n,"i",(function(){return m})),t.d(n,"e",(function(){return p})),t.d(n,"d",(function(){return g})),t.d(n,"j",(function(){return b})),t.d(n,"a",(function(){return f}));var r=t("3Pt+");const o={VALIDATORS:[r.G.required,r.G.minLength(1),r.G.maxLength(50),r.G.pattern(/^[a-z0-9][a-z0-9._]*$/)],MESSAGES:{required:"Anv\xE4ndarnamn m\xE5ste fyllas i.",minlength:"Anv\xE4ndarnamnet m\xE5ste inneh\xE5lla minst ett tecken.",maxlength:"Anv\xE4ndarnamnet f\xE5r inte vara mer \xE4n 50 tecken l\xE5ngt.",pattern:"Anv\xE4ndarnamnet f\xE5r inneh\xE5lla gemener, siffror, punkter samt understreck."}},i={VALIDATORS:[r.G.required,r.G.minLength(1),r.G.maxLength(50),r.G.pattern(/^[a-z0-9][a-z0-9._]*$/)],MESSAGES:{required:"Kanalens namn m\xE5ste uppges.",minlength:"Kanalens namn m\xE5ste inneh\xE5lla minste ett tecken.",maxlength:"Kanalens namn f\xE5r inte vara mer \xE4n 50 tecken l\xE5ngt.",pattern:"Kanalens namn f\xE5r inneh\xE5lla gemener, siffror, punkter samt understreck."}},a={VALIDATORS:[r.G.required,r.G.email],MESSAGES:{required:"E-postadress m\xE5ste uppges.",email:"E-postadressen m\xE5ste vara giltig."}},s={VALIDATORS:[r.G.required,r.G.minLength(6),r.G.maxLength(255)],MESSAGES:{required:"L\xF6senord m\xE5ste fyllas i.",minlength:"L\xF6senordet m\xE5ste inneh\xE5lla minst sex tecken.",maxlength:"L\xF6senordet f\xE5r inte vara mer \xE4n 255 tecken l\xE5ngt."}},c={VALIDATORS:[r.G.minLength(6),r.G.maxLength(255)],MESSAGES:{minlength:"L\xF6senordet m\xE5ste inneh\xE5lla minst sex tecken.",maxlength:"L\xF6senordet f\xE5r inte vara mer \xE4n 255 tecken l\xE5ngt."}},l={VALIDATORS:[],MESSAGES:{matchPassword:"Det nya l\xF6senordet och det bekr\xE4ftade l\xF6senordet st\xE4mmer inte \xF6verens."}},u={VALIDATORS:[r.G.required,r.G.min(-1)],MESSAGES:{required:"Videokvot m\xE5ste anges.",min:"Kvot m\xE5ste vara st\xF6rre \xE4n \u22121."}},d={VALIDATORS:[r.G.required,r.G.min(-1)],MESSAGES:{required:"Daglig uppladdningsgr\xE4ns m\xE5ste anges.",min:"Daglig uppladdningsgr\xE4ns m\xE5ste vara h\xF6gre \xE4n \u22121."}},m={VALIDATORS:[r.G.required],MESSAGES:{required:"Anv\xE4ndarroll kr\xE4vs."}},p=function(e){const n={VALIDATORS:[r.G.minLength(1),r.G.maxLength(120)],MESSAGES:{required:"Visningsnamn kr\xE4vs.",minlength:"Visningsnamnet m\xE5ste inneh\xE5lla minst ett tecken.",maxlength:"Visningsnamnet f\xE5r inte vara mer \xE4n 50 tecken l\xE5ngt."}};return n.VALIDATORS.push(r.G.required),n}(),g={VALIDATORS:[r.G.minLength(3),r.G.maxLength(1e3)],MESSAGES:{minlength:"Beskrivningen m\xE5ste inneh\xE5lla minst tre tecken.",maxlength:"Beskrivningen f\xE5r inte vara mer \xE4n 1000 tecken l\xE5ng."}},b={VALIDATORS:[r.G.requiredTrue],MESSAGES:{required:"Du m\xE5ste godk\xE4nna instansens villkor f\xF6r att registrera dig p\xE5 den."}},f={VALIDATORS:[r.G.minLength(3),r.G.maxLength(250)],MESSAGES:{minlength:"Blockeringsanledningen m\xE5ste inneh\xE5lla minst tre tecken.",maxlength:"Blockeringsanledningen f\xE5r inte vara mer \xE4n 250 tecken l\xE5ng."}}}}]);