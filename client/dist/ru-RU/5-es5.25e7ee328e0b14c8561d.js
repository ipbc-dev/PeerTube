var __extends=this&&this.__extends||function(){var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,e){n.__proto__=e}||function(n,e){for(var t in e)e.hasOwnProperty(t)&&(n[t]=e[t])})(e,t)};return function(e,t){function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}}(),__generator=this&&this.__generator||function(n,e){var t,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=e.call(n,u)}catch(s){o=[6,s],r=0}finally{t=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"1qlQ":function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t("mrSG"),i=t("8Y7J"),o=(t("ey9i"),t("3szM"),t("rCE/"));t("OwH3");var u=function(n){function e(e,t,r,o,u,s){var l=this;return(l=n.call(this)||this).formValidatorService=e,l.modalService=t,l.notifier=r,l.userService=o,l.userValidatorsService=u,l.i18n=s,l.userBanned=new i.EventEmitter,l}return __extends(e,n),e.prototype.ngOnInit=function(){this.buildForm({reason:this.userValidatorsService.USER_BAN_REASON})},e.prototype.openModal=function(n){this.usersToBan=n,this.openedModal=this.modalService.open(this.modal)},e.prototype.hide=function(){this.usersToBan=void 0,this.openedModal.close()},e.prototype.banUser=function(){return Object(r.a)(this,void 0,void 0,(function(){var n=this;return __generator(this,(function(e){return this.userService.banUsers(this.usersToBan,this.form.value.reason||void 0).subscribe((function(){var e=Array.isArray(n.usersToBan)?n.i18n("{{num}} users banned.",{num:n.usersToBan.length}):n.i18n("User {{username}} banned.",{username:n.usersToBan.username});n.notifier.success(e),n.userBanned.emit(n.usersToBan),n.hide()}),(function(e){return n.notifier.error(e.message)})),[2]}))}))},e}(o.a)},GGhi:function(n,e,t){"use strict";var r=t("8Y7J"),i=t("kIzR"),o=t("fKnF"),u=t("ihI+"),s=t("s7LF"),l=t("SVse");t("1qlQ"),t("3szM"),t("G0yt"),t("mOsc"),t("vQJr"),t("Qmuk"),t("GiVz"),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return h}));var a=r["\u0275crt"]({encapsulation:0,styles:[["textarea[_ngcontent-%COMP%]{display:inline-block;width:100%;background:var(--inputColor);border:1px solid #c6c6c6;border-radius:3px;height:60px;padding:5px 15px;font-size:15px}textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{color:var(--inputPlaceholderColor)}textarea[_ngcontent-%COMP%]::-moz-placeholder{color:var(--inputPlaceholderColor)}textarea[_ngcontent-%COMP%]::-ms-input-placeholder{color:var(--inputPlaceholderColor)}textarea[_ngcontent-%COMP%]::placeholder{color:var(--inputPlaceholderColor)}@media screen and (max-width:100%){textarea[_ngcontent-%COMP%]{width:100%}}"]],data:{}});function c(n){return r["\u0275vid"](0,[(n()(),r["\u0275eld"](0,0,null,null,1,"div",[["class","form-error"]],null,null,null,null,null)),(n()(),r["\u0275ted"](1,null,[" "," "]))],null,(function(n,e){n(e,1,0,e.component.formErrors.reason)}))}function d(n){return r["\u0275vid"](0,[(n()(),r["\u0275eld"](0,0,null,null,4,"div",[["class","modal-header"]],null,null,null,null,null)),(n()(),r["\u0275eld"](1,0,null,null,1,"h4",[["class","modal-title"]],null,null,null,null,null)),(n()(),r["\u0275ted"](-1,null,["\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043e"])),(n()(),r["\u0275eld"](3,0,null,null,1,"my-global-icon",[["aria-label","Close"],["iconName","cross"],["role","button"]],null,[[null,"click"]],(function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.hide()&&r),r}),i.b,i.a)),r["\u0275did"](4,114688,null,0,o.a,[r.ElementRef,u.a],{iconName:[0,"iconName"]},null),(n()(),r["\u0275eld"](5,0,null,null,24,"div",[["class","modal-body"]],null,null,null,null,null)),(n()(),r["\u0275eld"](6,0,null,null,23,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(n,e,t){var i=!0,o=n.component;return"submit"===e&&(i=!1!==r["\u0275nov"](n,8).onSubmit(t)&&i),"reset"===e&&(i=!1!==r["\u0275nov"](n,8).onReset()&&i),"ngSubmit"===e&&(i=!1!==o.banUser()&&i),i}),null,null)),r["\u0275did"](7,16384,null,0,s["\u0275angular_packages_forms_forms_z"],[],null,null),r["\u0275did"](8,540672,null,0,s.FormGroupDirective,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),r["\u0275prd"](2048,null,s.ControlContainer,null,[s.FormGroupDirective]),r["\u0275did"](10,16384,null,0,s.NgControlStatusGroup,[[4,s.ControlContainer]],null,null),(n()(),r["\u0275eld"](11,0,null,null,12,"div",[["class","form-group"]],null,null,null,null,null)),(n()(),r["\u0275eld"](12,0,null,null,9,"textarea",[["formControlName","reason"],["placeholder","\u041f\u0440\u0438\u0447\u0438\u043d\u0430..."]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,e,t){var i=!0;return"input"===e&&(i=!1!==r["\u0275nov"](n,16)._handleInput(t.target.value)&&i),"blur"===e&&(i=!1!==r["\u0275nov"](n,16).onTouched()&&i),"compositionstart"===e&&(i=!1!==r["\u0275nov"](n,16)._compositionStart()&&i),"compositionend"===e&&(i=!1!==r["\u0275nov"](n,16)._compositionEnd(t.target.value)&&i),i}),null,null)),r["\u0275prd"](512,null,l["\u0275NgClassImpl"],l["\u0275NgClassR2Impl"],[r.IterableDiffers,r.KeyValueDiffers,r.ElementRef,r.Renderer2]),r["\u0275did"](14,278528,null,0,l.NgClass,[l["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),r["\u0275pod"](15,{"input-error":0}),r["\u0275did"](16,16384,null,0,s.DefaultValueAccessor,[r.Renderer2,r.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),r["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,(function(n){return[n]}),[s.DefaultValueAccessor]),r["\u0275did"](18,671744,null,0,s.FormControlName,[[3,s.ControlContainer],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR],[2,s["\u0275angular_packages_forms_forms_q"]]],{name:[0,"name"]},null),r["\u0275prd"](2048,null,s.NgControl,null,[s.FormControlName]),r["\u0275did"](20,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),(n()(),r["\u0275ted"](-1,null,["        "])),(n()(),r["\u0275and"](16777216,null,null,1,null,c)),r["\u0275did"](23,16384,null,0,l.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),r["\u0275eld"](24,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),r["\u0275ted"](-1,null,[" \u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f. "])),(n()(),r["\u0275eld"](26,0,null,null,3,"div",[["class","form-group inputs"]],null,null,null,null,null)),(n()(),r["\u0275eld"](27,0,null,null,1,"span",[["class","action-button action-button-cancel"]],null,[[null,"click"]],(function(n,e,t){var r=!0;return"click"===e&&(r=!1!==n.component.hide()&&r),r}),null,null)),(n()(),r["\u0275ted"](-1,null,["\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"])),(n()(),r["\u0275eld"](29,0,null,null,0,"input",[["class","action-button-submit"],["type","submit"],["value","\u0417\u0430\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u044d\u0442\u043e\u0433\u043e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"]],[[8,"disabled",0]],null,null,null,null))],(function(n,e){var t=e.component;n(e,4,0,"cross"),n(e,8,0,t.form);var r=n(e,15,0,t.formErrors.reason);n(e,14,0,r),n(e,18,0,"reason"),n(e,23,0,t.formErrors.reason)}),(function(n,e){var t=e.component;n(e,6,0,r["\u0275nov"](e,10).ngClassUntouched,r["\u0275nov"](e,10).ngClassTouched,r["\u0275nov"](e,10).ngClassPristine,r["\u0275nov"](e,10).ngClassDirty,r["\u0275nov"](e,10).ngClassValid,r["\u0275nov"](e,10).ngClassInvalid,r["\u0275nov"](e,10).ngClassPending),n(e,12,0,r["\u0275nov"](e,20).ngClassUntouched,r["\u0275nov"](e,20).ngClassTouched,r["\u0275nov"](e,20).ngClassPristine,r["\u0275nov"](e,20).ngClassDirty,r["\u0275nov"](e,20).ngClassValid,r["\u0275nov"](e,20).ngClassInvalid,r["\u0275nov"](e,20).ngClassPending),n(e,29,0,!t.form.valid)}))}function h(n){return r["\u0275vid"](0,[r["\u0275qud"](402653184,1,{modal:0}),(n()(),r["\u0275and"](0,[[1,2],["modal",2]],null,0,null,d))],null,null)}},KdfM:function(n,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return b}));var r=t("8Y7J"),i=t("GGhi"),o=t("1qlQ"),u=t("3szM"),s=t("G0yt"),l=t("mOsc"),a=t("vQJr"),c=t("Qmuk"),d=t("GiVz"),h=t("oEwo"),f=t("eEm8"),m=t("SVse"),p=(t("lKr9"),t("Vurf"),t("37nT"),t("pyEO"),t("hlYB"),r["\u0275crt"]({encapsulation:2,styles:[],data:{}}));function v(n){return r["\u0275vid"](0,[(n()(),r["\u0275eld"](0,0,null,null,5,null,null,null,null,null,null,null)),(n()(),r["\u0275eld"](1,0,null,null,1,"my-user-ban-modal",[],null,[[null,"userBanned"]],(function(n,e,t){var r=!0;return"userBanned"===e&&(r=!1!==n.component.onUserBanned()&&r),r}),i.b,i.a)),r["\u0275did"](2,114688,[[1,4],["userBanModal",4]],0,o.a,[u.a,s.A,l.a,a.a,c.a,d.a],null,{userBanned:"userBanned"}),(n()(),r["\u0275eld"](3,0,null,null,2,"my-action-dropdown",[],null,null,null,h.b,h.a)),r["\u0275did"](4,49152,null,0,f.a,[],{actions:[0,"actions"],entry:[1,"entry"],placement:[2,"placement"],buttonSize:[3,"buttonSize"],label:[4,"label"]},null),r["\u0275pod"](5,{user:0,account:1})],(function(n,e){var t=e.component;n(e,2,0);var r=t.userActions,i=n(e,5,0,t.user,t.account);n(e,4,0,r,i,t.placement,t.buttonSize,t.label)}),null)}function b(n){return r["\u0275vid"](0,[r["\u0275qud"](671088640,1,{userBanModal:0}),(n()(),r["\u0275and"](16777216,null,null,1,null,v)),r["\u0275did"](2,16384,null,0,m.NgIf,[r.ViewContainerRef,r.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){n(e,2,0,0!==e.component.userActions.length)}),null)}},lKr9:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var r=t("mrSG"),i=t("8Y7J"),o=(t("1qlQ"),t("OwH3"),t("ey9i"),t("MpoC"));t("joIj"),t("gNPL");var u=function(){function n(n,e,t,r,o,u,s){this.authService=n,this.notifier=e,this.confirmService=t,this.serverService=r,this.userService=o,this.blocklistService=u,this.i18n=s,this.buttonSize="normal",this.placement="left",this.userChanged=new i.EventEmitter,this.userDeleted=new i.EventEmitter,this.userActions=[]}return Object.defineProperty(n.prototype,"requiresEmailVerification",{get:function(){return this.serverConfig.signup.requiresEmailVerification},enumerable:!0,configurable:!0}),n.prototype.ngOnInit=function(){var n=this;this.serverConfig=this.serverService.getTmpConfig(),this.serverService.getConfig().subscribe((function(e){return n.serverConfig=e}))},n.prototype.ngOnChanges=function(){this.buildActions()},n.prototype.openBanUserModal=function(n){"root"!==n.username?this.userBanModal.openModal(n):this.notifier.error(this.i18n("You cannot ban root."))},n.prototype.onUserBanned=function(){this.userChanged.emit()},n.prototype.unbanUser=function(n){return Object(r.a)(this,void 0,void 0,(function(){var e,t,r=this;return __generator(this,(function(i){switch(i.label){case 0:return e=this.i18n("Do you really want to unban {{username}}?",{username:n.username}),t=!1,[4,this.confirmService.confirm(e,this.i18n("Unban"))];case 1:return t!==i.sent()&&this.userService.unbanUsers(n).subscribe((function(){r.notifier.success(r.i18n("User {{username}} unbanned.",{username:n.username})),r.userChanged.emit()}),(function(n){return r.notifier.error(n.message)})),[2]}}))}))},n.prototype.removeUser=function(n){return Object(r.a)(this,void 0,void 0,(function(){var e,t,r=this;return __generator(this,(function(i){switch(i.label){case 0:return"root"===n.username?[2,void this.notifier.error(this.i18n("You cannot delete root."))]:(e=this.i18n("If you remove this user, you will not be able to create another with the same username!"),t=!1,[4,this.confirmService.confirm(e,this.i18n("Delete"))]);case 1:return t!==i.sent()&&this.userService.removeUser(n).subscribe((function(){r.notifier.success(r.i18n("User {{username}} deleted.",{username:n.username})),r.userDeleted.emit()}),(function(n){return r.notifier.error(n.message)})),[2]}}))}))},n.prototype.setEmailAsVerified=function(n){var e=this;this.userService.updateUser(n.id,{emailVerified:!0}).subscribe((function(){e.notifier.success(e.i18n("User {{username}} email set as verified",{username:n.username})),e.userChanged.emit()}),(function(n){return e.notifier.error(n.message)}))},n.prototype.blockAccountByUser=function(n){var e=this;this.blocklistService.blockAccountByUser(n).subscribe((function(){e.notifier.success(e.i18n("Account {{nameWithHost}} muted.",{nameWithHost:n.nameWithHost})),e.account.mutedByUser=!0,e.userChanged.emit()}),(function(n){return e.notifier.error(n.message)}))},n.prototype.unblockAccountByUser=function(n){var e=this;this.blocklistService.unblockAccountByUser(n).subscribe((function(){e.notifier.success(e.i18n("Account {{nameWithHost}} unmuted.",{nameWithHost:n.nameWithHost})),e.account.mutedByUser=!1,e.userChanged.emit()}),(function(n){return e.notifier.error(n.message)}))},n.prototype.blockServerByUser=function(n){var e=this;this.blocklistService.blockServerByUser(n).subscribe((function(){e.notifier.success(e.i18n("Instance {{host}} muted.",{host:n})),e.account.mutedServerByUser=!0,e.userChanged.emit()}),(function(n){return e.notifier.error(n.message)}))},n.prototype.unblockServerByUser=function(n){var e=this;this.blocklistService.unblockServerByUser(n).subscribe((function(){e.notifier.success(e.i18n("Instance {{host}} unmuted.",{host:n})),e.account.mutedServerByUser=!1,e.userChanged.emit()}),(function(n){return e.notifier.error(n.message)}))},n.prototype.blockAccountByInstance=function(n){var e=this;this.blocklistService.blockAccountByInstance(n).subscribe((function(){e.notifier.success(e.i18n("Account {{nameWithHost}} muted by the instance.",{nameWithHost:n.nameWithHost})),e.account.mutedByInstance=!0,e.userChanged.emit()}),(function(n){return e.notifier.error(n.message)}))},n.prototype.unblockAccountByInstance=function(n){var e=this;this.blocklistService.unblockAccountByInstance(n).subscribe((function(){e.notifier.success(e.i18n("Account {{nameWithHost}} unmuted by the instance.",{nameWithHost:n.nameWithHost})),e.account.mutedByInstance=!1,e.userChanged.emit()}),(function(n){return e.notifier.error(n.message)}))},n.prototype.blockServerByInstance=function(n){var e=this;this.blocklistService.blockServerByInstance(n).subscribe((function(){e.notifier.success(e.i18n("Instance {{host}} muted by the instance.",{host:n})),e.account.mutedServerByInstance=!0,e.userChanged.emit()}),(function(n){return e.notifier.error(n.message)}))},n.prototype.unblockServerByInstance=function(n){var e=this;this.blocklistService.unblockServerByInstance(n).subscribe((function(){e.notifier.success(e.i18n("Instance {{host}} unmuted by the instance.",{host:n})),e.account.mutedServerByInstance=!1,e.userChanged.emit()}),(function(n){return e.notifier.error(n.message)}))},n.prototype.getRouterUserEditLink=function(n){return["/admin","users","update",n.id]},n.prototype.buildActions=function(){var n=this;if(this.userActions=[],this.authService.isLoggedIn()){var e=this.authService.getUser();if(this.user&&e.id===this.user.id)return;if(this.user&&e.hasRight(o.d.MANAGE_USERS)&&e.canManage(this.user)&&this.userActions.push([{label:this.i18n("Edit user"),description:this.i18n("Change quota, role, and more."),linkBuilder:function(e){var t=e.user;return n.getRouterUserEditLink(t)}},{label:this.i18n("Delete user"),description:this.i18n("Videos will be deleted, comments will be tombstoned."),handler:function(e){var t=e.user;return n.removeUser(t)}},{label:this.i18n("Ban"),description:this.i18n("User won't be able to login anymore, but videos and comments will be kept as is."),handler:function(e){var t=e.user;return n.openBanUserModal(t)},isDisplayed:function(n){return!n.user.blocked}},{label:this.i18n("Unban user"),description:this.i18n("Allow the user to login and create videos/comments again"),handler:function(e){var t=e.user;return n.unbanUser(t)},isDisplayed:function(n){return n.user.blocked}},{label:this.i18n("Set Email as Verified"),handler:function(e){var t=e.user;return n.setEmailAsVerified(t)},isDisplayed:function(e){var t=e.user;return n.requiresEmailVerification&&!t.blocked&&!1===t.emailVerified}}]),this.account){this.userActions.push([{label:this.i18n("Mute this account"),description:this.i18n("Hide any content from that user for you."),isDisplayed:function(n){return!1===n.account.mutedByUser},handler:function(e){var t=e.account;return n.blockAccountByUser(t)}},{label:this.i18n("Unmute this account"),description:this.i18n("Show back content from that user for you."),isDisplayed:function(n){return!0===n.account.mutedByUser},handler:function(e){var t=e.account;return n.unblockAccountByUser(t)}},{label:this.i18n("Mute the instance"),description:this.i18n("Hide any content from that instance for you."),isDisplayed:function(n){var e=n.account;return!e.userId&&!1===e.mutedServerByInstance},handler:function(e){var t=e.account;return n.blockServerByUser(t.host)}},{label:this.i18n("Unmute the instance"),description:this.i18n("Show back content from that instance for you."),isDisplayed:function(n){var e=n.account;return!e.userId&&!0===e.mutedServerByInstance},handler:function(e){var t=e.account;return n.unblockServerByUser(t.host)}}]);var t=[];e.hasRight(o.d.MANAGE_ACCOUNTS_BLOCKLIST)&&(t=t.concat([{label:this.i18n("Mute this account by your instance"),description:this.i18n("Hide any content from that user for you, your instance and its users."),isDisplayed:function(n){return!1===n.account.mutedByInstance},handler:function(e){var t=e.account;return n.blockAccountByInstance(t)}},{label:this.i18n("Unmute this account by your instance"),description:this.i18n("Show back content from that user for you, your instance and its users."),isDisplayed:function(n){return!0===n.account.mutedByInstance},handler:function(e){var t=e.account;return n.unblockAccountByInstance(t)}}])),e.hasRight(o.d.MANAGE_SERVERS_BLOCKLIST)&&(t=t.concat([{label:this.i18n("Mute the instance by your instance"),description:this.i18n("Hide any content from that instance for you, your instance and its users."),isDisplayed:function(n){var e=n.account;return!e.userId&&!1===e.mutedServerByInstance},handler:function(e){var t=e.account;return n.blockServerByInstance(t.host)}},{label:this.i18n("Unmute the instance by your instance"),description:this.i18n("Show back content from that instance for you, your instance and its users."),isDisplayed:function(n){var e=n.account;return!e.userId&&!0===e.mutedServerByInstance},handler:function(e){var t=e.account;return n.unblockServerByInstance(t.host)}}])),0!==t.length&&this.userActions.push(t)}}},n}()}}]);