var __extends=this&&this.__extends||function(){var n=function(l,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,l){n.__proto__=l}||function(n,l){for(var e in l)l.hasOwnProperty(e)&&(n[e]=l[e])})(l,e)};return function(l,e){function t(){this.constructor=l}n(l,e),l.prototype=null===e?Object.create(e):(t.prototype=e.prototype,new t)}}(),__generator=this&&this.__generator||function(n,l){var e,t,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(e)throw new TypeError("Generator is already executing.");for(;u;)try{if(e=1,t&&(o=2&i[0]?t.return:i[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,i[1])).done)return o;switch(t=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,t=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(o=(o=u.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=l.call(n,u)}catch(a){i=[6,a],t=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{IOkP:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),o=function(){},i=e("pMnS"),u=e("iInd"),a=e("SVse"),r=e("IbkX"),c=e("x19x"),d=e("jxlV"),s=e("Vurf"),p=e("mOsc"),m=e("VNja"),f=e("GiVz"),g=e("LTwV"),v=e("wQE2"),h=(e("M0ag"),e("lJxs")),b=e("/uUt"),C=e("eIep"),y=e("JIr8"),O=(e("ey9i"),e("yccp")),M=function(){function n(n,l,e,t,o,i,u){this.i18n=n,this.route=l,this.notifier=e,this.authService=t,this.videoChannelService=o,this.restExtractor=i,this.hotkeysService=u,this.isChannelManageable=!1}return n.prototype.ngOnInit=function(){var n=this;this.routeSub=this.route.params.pipe(Object(h.a)((function(n){return n.videoChannelName})),Object(b.a)(),Object(C.a)((function(l){return n.videoChannelService.getVideoChannel(l)})),Object(y.a)((function(l){return n.restExtractor.redirectTo404IfNotFound(l,[400,404])}))).subscribe((function(l){n.videoChannel=l,n.authService.isLoggedIn()&&n.authService.userInformationLoaded.subscribe((function(){var l=n.videoChannel.ownerAccount.userId;n.isChannelManageable=l&&l===n.authService.getUser().id}))})),this.hotkeys=[new O.Hotkey("S",(function(l){return n.subscribeButton.subscribed?n.subscribeButton.unsubscribe():n.subscribeButton.subscribe(),!1}),void 0,this.i18n("Subscribe to the account"))],this.isUserLoggedIn()&&this.hotkeysService.add(this.hotkeys)},n.prototype.ngOnDestroy=function(){this.routeSub&&this.routeSub.unsubscribe(),this.isUserLoggedIn()&&this.hotkeysService.remove(this.hotkeys)},n.prototype.isUserLoggedIn=function(){return this.authService.isLoggedIn()},Object.defineProperty(n.prototype,"isManageable",{get:function(){return!!this.isUserLoggedIn()&&this.videoChannel.ownerAccount.userId===this.authService.getUser().id},enumerable:!0,configurable:!0}),n.prototype.activateCopiedMessage=function(){this.notifier.success(this.i18n("Username copied"))},n}(),k=e("Huiz"),_=e("oVTH"),P=t["\u0275crt"]({encapsulation:0,styles:[[".sub-menu[_ngcontent-%COMP%]{height:-webkit-max-content;height:-moz-max-content;height:max-content;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-align:start;align-items:flex-start}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]{display:-webkit-box;display:flex;margin-top:20px;margin-bottom:20px}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;border-radius:50%;width:80px;height:80px;min-width:80px;min-height:80px;margin-right:20px}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-names[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-names[_ngcontent-%COMP%]   .actor-display-name[_ngcontent-%COMP%]{font-size:23px;font-weight:700}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-names[_ngcontent-%COMP%]   .actor-name[_ngcontent-%COMP%]{margin-left:7px;position:relative;top:3px;font-size:14px;color:#777272}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-followers[_ngcontent-%COMP%]{font-size:15px}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]{display:inline-table;font-size:13px;margin-top:4px;color:var(--mainForegroundColor)}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]:active, .sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]:focus, .sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]:hover{text-decoration:none!important;outline:0!important}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{opacity:.8}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]   .actor-owner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{-o-object-fit:cover;object-fit:cover;border-radius:50%;width:18px;height:18px;min-width:18px;min-height:18px;margin-left:7px;position:relative;top:-2px}.sub-menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]{margin-top:0;margin-bottom:10px}.sub-menu[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{margin-top:0;margin-bottom:0;text-transform:uppercase;font-weight:600}.sub-menu[_ngcontent-%COMP%]   .actor[_ngcontent-%COMP%], .sub-menu[_ngcontent-%COMP%]   .actor-info[_ngcontent-%COMP%]{width:100%}.sub-menu[_ngcontent-%COMP%]   .actor-name[_ngcontent-%COMP%]{-webkit-box-flex:1;flex-grow:1}.sub-menu[_ngcontent-%COMP%]   .actor-name[_ngcontent-%COMP%]   .copy-button[_ngcontent-%COMP%]{border:none;padding:5px;margin-top:-2px}.right-buttons[_ngcontent-%COMP%]{display:-webkit-box;display:flex;height:-webkit-max-content;height:-moz-max-content;height:max-content;margin-left:auto;margin-top:20px}.right-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:inline-block;border:1px solid;font-weight:600;font-size:15px;height:30px;border-radius:3px;text-align:center;padding:0 17px 0 13px;cursor:pointer;outline:0;line-height:1.8}.right-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:active, .right-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus, .right-buttons[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:none!important;outline:0!important}.right-buttons[_ngcontent-%COMP%]   my-subscribe-button[_ngcontent-%COMP%]{height:-webkit-min-content;height:-moz-min-content;height:min-content}"]],data:{}});function x(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"a",[["class","btn btn-outline-tertiary mr-2"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o}),null,null)),t["\u0275did"](1,671744,null,0,u.s,[u.p,u.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](2,2),(n()(),t["\u0275ted"](-1,null,["Manage"]))],(function(n,l){var e=n(l,2,0,"/my-account/video-channels/update",l.component.videoChannel.nameWithHost);n(l,1,0,e)}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).target,t["\u0275nov"](l,1).href)}))}function w(n){return t["\u0275vid"](0,[(n()(),t["\u0275ted"](-1,null,["1 subscriber"]))],null,null)}function I(n){return t["\u0275vid"](0,[(n()(),t["\u0275ted"](0,null,[""," subscribers"]))],null,(function(n,l){n(l,0,0,l.component.videoChannel.followersCount)}))}function S(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,53,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,49,"div",[["class","sub-menu"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,29,"div",[["class","actor"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,0,"img",[["alt","Avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](4,0,null,null,27,"div",[["class","actor-info"]],null,null,null,null,null)),(n()(),t["\u0275eld"](5,0,null,null,13,"div",[["class","actor-names"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,1,"div",[["class","actor-display-name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](7,null,["",""])),(n()(),t["\u0275eld"](8,0,null,null,4,"div",[["class","actor-name"]],null,null,null,null,null)),(n()(),t["\u0275ted"](9,null,[""," "])),(n()(),t["\u0275eld"](10,0,null,null,2,"button",[["class","btn btn-outline-secondary btn-sm copy-button"],["ngxClipboard",""]],null,[[null,"click"]],(function(n,l,e){var o=!0,i=n.component;return"click"===l&&(o=!1!==t["\u0275nov"](n,11).onClick(e.target)&&o),"click"===l&&(o=!1!==i.activateCopiedMessage()&&o),o}),null,null)),t["\u0275did"](11,212992,null,0,r.a,[r.c],{targetElm:[0,"targetElm"],cbContent:[1,"cbContent"]},null),(n()(),t["\u0275eld"](12,0,null,null,0,"span",[["class","glyphicon glyphicon-copy"]],null,null,null,null,null)),(n()(),t["\u0275eld"](13,0,null,null,5,"div",[["class","right-buttons"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,x)),t["\u0275did"](15,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](16,0,null,null,2,"my-subscribe-button",[],null,null,null,c.b,c.a)),t["\u0275did"](17,638976,[[1,4],["subscribeButton",4]],0,d.a,[s.a,u.p,p.a,m.a,f.a,g.a],{videoChannels:[0,"videoChannels"]},null),t["\u0275pad"](18,1),(n()(),t["\u0275eld"](19,0,null,null,6,"div",[["class","actor-followers"]],null,null,null,null,null)),(n()(),t["\u0275eld"](20,0,null,null,5,null,null,null,null,null,null,null)),t["\u0275did"](21,16384,null,0,a.NgPlural,[a.NgLocalization],{ngPlural:[0,"ngPlural"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,w)),t["\u0275did"](23,16384,null,0,a.NgPluralCase,[[8,"=1"],t.TemplateRef,t.ViewContainerRef,a.NgPlural],null,null),(n()(),t["\u0275and"](16777216,null,null,1,null,I)),t["\u0275did"](25,16384,null,0,a.NgPluralCase,[[8,"other"],t.TemplateRef,t.ViewContainerRef,a.NgPlural],null,null),(n()(),t["\u0275eld"](26,0,null,null,5,"a",[["class","actor-owner"],["title","Zum Kanal des Besitzers"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,27).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o}),null,null)),t["\u0275did"](27,671744,null,0,u.s,[u.p,u.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275pad"](28,2),(n()(),t["\u0275eld"](29,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](30,null,["Erstellt von ",""])),(n()(),t["\u0275eld"](31,0,null,null,0,"img",[["alt","Owner account avatar"]],[[8,"src",4]],null,null,null,null)),(n()(),t["\u0275eld"](32,0,null,null,18,"div",[["class","links"]],null,null,null,null,null)),(n()(),t["\u0275eld"](33,0,null,null,5,"a",[["class","title-page"],["routerLink","videos"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,34).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o}),null,null)),t["\u0275did"](34,671744,[[3,4]],0,u.s,[u.p,u.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](35,1720320,null,2,u.r,[u.p,t.ElementRef,t.Renderer2,[2,u.q],[2,u.s]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,2,{links:1}),t["\u0275qud"](603979776,3,{linksWithHrefs:1}),(n()(),t["\u0275ted"](-1,null,["Videos"])),(n()(),t["\u0275eld"](39,0,null,null,5,"a",[["class","title-page"],["routerLink","video-playlists"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,40).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o}),null,null)),t["\u0275did"](40,671744,[[5,4]],0,u.s,[u.p,u.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](41,1720320,null,2,u.r,[u.p,t.ElementRef,t.Renderer2,[2,u.q],[2,u.s]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,4,{links:1}),t["\u0275qud"](603979776,5,{linksWithHrefs:1}),(n()(),t["\u0275ted"](-1,null,["Video-Abspiellisten"])),(n()(),t["\u0275eld"](45,0,null,null,5,"a",[["class","title-page"],["routerLink","about"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,46).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o}),null,null)),t["\u0275did"](46,671744,[[7,4]],0,u.s,[u.p,u.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](47,1720320,null,2,u.r,[u.p,t.ElementRef,t.Renderer2,[2,u.q],[2,u.s]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,6,{links:1}),t["\u0275qud"](603979776,7,{linksWithHrefs:1}),(n()(),t["\u0275ted"](-1,null,["Info"])),(n()(),t["\u0275eld"](51,0,null,null,2,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](52,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),t["\u0275did"](53,212992,null,0,u.u,[u.b,t.ViewContainerRef,t.ComponentFactoryResolver,[8,null],t.ChangeDetectorRef],null,null)],(function(n,l){var e=l.component;n(l,11,0,"",e.videoChannel.nameWithHost),n(l,15,0,e.isChannelManageable);var t=n(l,18,0,e.videoChannel);n(l,17,0,t),n(l,21,0,e.videoChannel.followersCount);var o=n(l,28,0,"/accounts",e.videoChannel.ownerBy);n(l,27,0,o),n(l,34,0,"videos"),n(l,35,0,"active"),n(l,40,0,"video-playlists"),n(l,41,0,"active"),n(l,46,0,"about"),n(l,47,0,"active"),n(l,53,0)}),(function(n,l){var e=l.component;n(l,3,0,e.videoChannel.avatarUrl),n(l,7,0,e.videoChannel.displayName),n(l,9,0,e.videoChannel.nameWithHost),n(l,26,0,t["\u0275nov"](l,27).target,t["\u0275nov"](l,27).href),n(l,30,0,e.videoChannel.ownerBy),n(l,31,0,e.videoChannel.ownerAvatarUrl),n(l,33,0,t["\u0275nov"](l,34).target,t["\u0275nov"](l,34).href),n(l,39,0,t["\u0275nov"](l,40).target,t["\u0275nov"](l,40).href),n(l,45,0,t["\u0275nov"](l,46).target,t["\u0275nov"](l,46).href)}))}function L(n){return t["\u0275vid"](0,[t["\u0275qud"](671088640,1,{subscribeButton:0}),(n()(),t["\u0275and"](16777216,null,null,1,null,S)),t["\u0275did"](2,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.component.videoChannel)}),null)}var R=t["\u0275ccf"]("ng-component",M,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"ng-component",[],null,null,null,L,P)),t["\u0275did"](1,245760,null,0,M,[f.a,u.a,p.a,s.a,v.a,k.a,_.HotkeysService],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),T=e("heyd"),N=e("WMch"),V=e("MGin"),A=e("G0yt"),F=e("kIzR"),D=e("fKnF"),B=e("ihI+"),E=e("8qHF"),j=e("s7LF"),H=e("ybWZ"),K=e("DKkR"),z=e("4SI2"),q=e("fR23"),U=e("pyEO"),W=e("biPt"),G=e("F3OD"),Z=e("HB7e"),$=(e("Rtfg"),e("KwVR"),e("c7xs")),J=e("SxV6"),X=e("vkgz"),Q=function(n){function l(l,e,t,o,i,u,a,r,c,d){var s=this;return(s=n.call(this)||this).i18n=l,s.router=e,s.serverService=t,s.route=o,s.authService=i,s.notifier=u,s.confirmService=a,s.screenService=r,s.videoChannelService=c,s.videoService=d,s.loadOnInit=!1,s.titlePage=s.i18n("Published videos"),s}return __extends(l,n),l.prototype.ngOnInit=function(){var l=this;n.prototype.ngOnInit.call(this),this.videoChannelSub=this.videoChannelService.videoChannelLoaded.pipe(Object(J.a)()).subscribe((function(n){l.videoChannel=n,l.reloadVideos(),l.generateSyndicationList()}))},l.prototype.ngOnDestroy=function(){this.videoChannelSub&&this.videoChannelSub.unsubscribe(),n.prototype.ngOnDestroy.call(this)},l.prototype.getVideosObservable=function(n){var l=this,e=Object(Z.e)(this.pagination,{currentPage:n});return this.videoService.getVideoChannelVideos(this.videoChannel,e,this.sort).pipe(Object(X.a)((function(n){var e=n.total;l.titlePage=l.i18n("{total, plural, =1 {Published 1 video} other {Published "+e+" videos}}",{total:e})})))},l.prototype.generateSyndicationList=function(){this.syndicationItems=this.videoService.getVideoChannelFeedUrls(this.videoChannel.id)},l}($.a),Y=e("37nT"),nn=t["\u0275crt"]({encapsulation:0,styles:[T.a,[".title-page-single[_ngcontent-%COMP%]{margin-top:0}"]],data:{}});function ln(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-feed",[],null,null,null,N.b,N.a)),t["\u0275did"](1,49152,null,0,V.a,[],{syndicationItems:[0,"syndicationItems"]},null)],(function(n,l){n(l,1,0,l.component.syndicationItems)}),null)}function en(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,5,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,16777216,null,null,2,"div",[["container","body"],["placement","bottom"]],null,null,null,null,null)),t["\u0275did"](2,212992,null,0,A.ib,[t.ElementRef,t.Renderer2,t.Injector,t.ComponentFactoryResolver,t.ViewContainerRef,A.jb,t.NgZone,a.DOCUMENT,t.ChangeDetectorRef,t.ApplicationRef],{placement:[0,"placement"],container:[1,"container"],ngbTooltip:[2,"ngbTooltip"]},null),(n()(),t["\u0275ted"](3,null,[" "," "])),(n()(),t["\u0275and"](16777216,null,null,1,null,ln)),t["\u0275did"](5,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){var e=l.component;n(l,2,0,"bottom","body",e.titleTooltip),n(l,5,0,e.titlePage)}),(function(n,l){n(l,3,0,l.component.titlePage)}))}function tn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,9,"a",[["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],(function(n,l,e){var o=!0;return"click"===l&&(o=!1!==t["\u0275nov"](n,1).onClick(e.button,e.ctrlKey,e.metaKey,e.shiftKey)&&o),o}),null,null)),t["\u0275did"](1,671744,[[2,4]],0,u.s,[u.p,u.a,a.LocationStrategy],{routerLink:[0,"routerLink"]},null),t["\u0275did"](2,1720320,null,2,u.r,[u.p,t.ElementRef,t.Renderer2,[2,u.q],[2,u.s]],{routerLinkActive:[0,"routerLinkActive"]},null),t["\u0275qud"](603979776,1,{links:1}),t["\u0275qud"](603979776,2,{linksWithHrefs:1}),(n()(),t["\u0275eld"](5,0,null,null,4,"button",[["class","btn"]],null,null,null,null,null)),(n()(),t["\u0275eld"](6,0,null,null,1,"my-global-icon",[],null,null,null,F.b,F.a)),t["\u0275did"](7,114688,null,0,D.a,[t.ElementRef,B.a],{iconName:[0,"iconName"]},null),(n()(),t["\u0275eld"](8,0,null,null,1,"span",[],null,null,null,null,null)),(n()(),t["\u0275ted"](9,null,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit.routerLink),n(l,2,0,"active"),n(l,7,0,l.context.$implicit.iconName)}),(function(n,l){n(l,0,0,t["\u0275nov"](l,1).target,t["\u0275nov"](l,1).href),n(l,9,0,l.context.$implicit.label)}))}function on(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","action-block"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,tn)),t["\u0275did"](2,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){n(l,2,0,l.component.actions)}),null)}function un(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,"div",[["class","moderation-block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,3,"my-peertube-checkbox",[["inputName","display-unlisted-private"],["labelText","Private und nicht gelisteten Videos aufzeigen"]],null,[[null,"change"]],(function(n,l,e){var t=!0;return"change"===l&&(t=!1!==n.component.toggleModerationDisplay()&&t),t}),E.b,E.a)),t["\u0275prd"](5120,null,j.NG_VALUE_ACCESSOR,(function(n){return[n]}),[H.a]),t["\u0275did"](3,1097728,null,1,H.a,[t.ChangeDetectorRef],{inputName:[0,"inputName"],labelText:[1,"labelText"]},null),t["\u0275qud"](603979776,3,{templates:1})],(function(n,l){n(l,3,0,"display-unlisted-private","Private und nicht gelisteten Videos aufzeigen")}),null)}function an(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","no-results"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Keine Ergebnisse."]))],null,null)}function rn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","date-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" "," "]))],null,(function(n,l){n(l,1,0,l.component.getCurrentGroupedDateLabel(l.parent.context.$implicit))}))}function cn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,4,null,null,null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,rn)),t["\u0275did"](2,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](3,0,null,null,1,"my-video-miniature",[],null,[[null,"videoBlacklisted"],[null,"videoRemoved"]],(function(n,l,e){var t=!0,o=n.component;return"videoBlacklisted"===l&&(t=!1!==o.removeVideoFromArray(n.context.$implicit)&&t),"videoRemoved"===l&&(t=!1!==o.removeVideoFromArray(n.context.$implicit)&&t),t}),K.b,K.a)),t["\u0275did"](4,114688,null,0,z.a,[q.a,U.a,f.a,s.a,W.a,t.ChangeDetectorRef,t.LOCALE_ID],{user:[0,"user"],video:[1,"video"],ownerDisplayType:[2,"ownerDisplayType"],displayOptions:[3,"displayOptions"],displayVideoActions:[4,"displayVideoActions"]},{videoBlacklisted:"videoBlacklisted",videoRemoved:"videoRemoved"})],(function(n,l){var e=l.component;n(l,2,0,e.getCurrentGroupedDateLabel(l.context.$implicit)),n(l,4,0,e.user,l.context.$implicit,e.ownerDisplayType,e.displayOptions,e.displayVideoActions)}),null)}function dn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,13,"div",[["class","margin-content"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,"div",[["class","videos-header"]],null,null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,en)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,on)),t["\u0275did"](5,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,un)),t["\u0275did"](7,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275and"](16777216,null,null,1,null,an)),t["\u0275did"](9,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](10,0,null,null,3,"div",[["class","videos"],["myInfiniteScroller",""]],null,[[null,"nearOfBottom"]],(function(n,l,e){var t=!0;return"nearOfBottom"===l&&(t=!1!==n.component.onNearOfBottom()&&t),t}),null,null)),t["\u0275did"](11,2310144,null,0,G.a,[t.ElementRef],{autoInit:[0,"autoInit"],dataObservable:[1,"dataObservable"]},{nearOfBottom:"nearOfBottom"}),(n()(),t["\u0275and"](16777216,null,null,1,null,cn)),t["\u0275did"](13,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"],ngForTrackBy:[1,"ngForTrackBy"]},null)],(function(n,l){var e=l.component;n(l,3,0,e.titlePage),n(l,5,0,e.actions.length>0),n(l,7,0,e.displayModerationBlock),n(l,9,0,e.hasDoneFirstQuery&&0===e.videos.length),n(l,11,0,!0,e.onDataSubject.asObservable()),n(l,13,0,e.videos,e.videoById)}),null)}var sn=t["\u0275ccf"]("my-video-channel-videos",Q,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-video-channel-videos",[],null,null,null,dn,nn)),t["\u0275did"](1,245760,null,0,Q,[f.a,u.p,U.a,u.a,s.a,p.a,Y.a,q.a,v.a,g.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),pn=e("7BWw"),mn=e("gcFA"),fn=e("XNiG"),gn=e("6dmf"),vn=function(){function n(n,l,e,t){this.notifier=n,this.confirmService=l,this.videoPlaylistService=e,this.videoChannelService=t,this.videoPlaylists=[],this.pagination={currentPage:1,itemsPerPage:20,totalItems:null},this.onDataSubject=new fn.a}return n.prototype.ngOnInit=function(){var n=this;this.videoChannelSub=this.videoChannelService.videoChannelLoaded.subscribe((function(l){n.videoChannel=l,n.loadVideoPlaylists()}))},n.prototype.ngOnDestroy=function(){this.videoChannelSub&&this.videoChannelSub.unsubscribe()},n.prototype.onNearOfBottom=function(){Object(gn.a)(this.pagination)&&(this.pagination.currentPage+=1,this.loadVideoPlaylists())},n.prototype.loadVideoPlaylists=function(){var n=this;this.videoPlaylistService.listChannelPlaylists(this.videoChannel,this.pagination).subscribe((function(l){n.videoPlaylists=n.videoPlaylists.concat(l.data),n.pagination.totalItems=l.total,n.onDataSubject.next(l.data)}))},n}(),hn=t["\u0275crt"]({encapsulation:0,styles:[[".video-playlist[_ngcontent-%COMP%]{display:-webkit-box;display:flex;flex-wrap:wrap;-webkit-box-pack:center;justify-content:center}.video-playlist[_ngcontent-%COMP%]   .playlist-miniature-container[_ngcontent-%COMP%]{margin-right:15px;margin-bottom:30px}"]],data:{}});function bn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","no-results"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Dieser Kanal enth\xe4lt keine Abspiellisten."]))],null,null)}function Cn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,2,"div",[["class","playlist-miniature-container"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"my-video-playlist-miniature",[],null,null,null,pn.b,pn.a)),t["\u0275did"](2,49152,null,0,mn.a,[],{playlist:[0,"playlist"],toManage:[1,"toManage"]},null)],(function(n,l){n(l,2,0,l.context.$implicit,!1)}),null)}function yn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"div",[["class","title-page title-page-single"]],null,null,null,null,null)),(n()(),t["\u0275ted"](1,null,[" Erstellte "," Abspiellisten\n"])),(n()(),t["\u0275and"](16777216,null,null,1,null,bn)),t["\u0275did"](3,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](4,0,null,null,3,"div",[["class","video-playlist"],["myInfiniteScroller",""]],null,[[null,"nearOfBottom"]],(function(n,l,e){var t=!0;return"nearOfBottom"===l&&(t=!1!==n.component.onNearOfBottom()&&t),t}),null,null)),t["\u0275did"](5,2310144,null,0,G.a,[t.ElementRef],{dataObservable:[0,"dataObservable"]},{nearOfBottom:"nearOfBottom"}),(n()(),t["\u0275and"](16777216,null,null,1,null,Cn)),t["\u0275did"](7,278528,null,0,a.NgForOf,[t.ViewContainerRef,t.TemplateRef,t.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,3,0,0===e.pagination.totalItems),n(l,5,0,e.onDataSubject.asObservable()),n(l,7,0,e.videoPlaylists)}),(function(n,l){n(l,1,0,l.component.pagination.totalItems)}))}var On=t["\u0275ccf"]("my-video-channel-playlists",vn,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-video-channel-playlists",[],null,null,null,yn,hn)),t["\u0275did"](1,245760,null,0,vn,[p.a,Y.a,W.a,v.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),Mn=e("mrSG");e("V8il");var kn=function(){function n(n,l,e){this.i18n=n,this.videoChannelService=l,this.markdownService=e,this.descriptionHTML="",this.supportHTML=""}return n.prototype.ngOnInit=function(){var n=this;this.videoChannelSub=this.videoChannelService.videoChannelLoaded.subscribe((function(l){return Object(Mn.a)(n,void 0,void 0,(function(){var n,e;return __generator(this,(function(t){switch(t.label){case 0:return this.videoChannel=l,n=this,[4,this.markdownService.textMarkdownToHTML(this.videoChannel.description)];case 1:return n.descriptionHTML=t.sent(),e=this,[4,this.markdownService.enhancedMarkdownToHTML(this.videoChannel.support)];case 2:return e.supportHTML=t.sent(),[2]}}))}))}))},n.prototype.ngOnDestroy=function(){this.videoChannelSub&&this.videoChannelSub.unsubscribe()},n.prototype.getVideoChannelDescription=function(){return this.descriptionHTML?this.descriptionHTML:this.i18n("No description")},n}(),_n=e("45hh"),Pn=t["\u0275crt"]({encapsulation:0,styles:[[".block[_ngcontent-%COMP%]{margin-bottom:40px}.block[_ngcontent-%COMP%]   .small-title[_ngcontent-%COMP%]{text-transform:uppercase;color:var(--mainColor);font-weight:700;font-size:13px;margin-bottom:20px}"]],data:{}});function xn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,3,"div",[["class","block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,1,"div",[["class","small-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Unterst\xfctze diesen Kanal"])),(n()(),t["\u0275eld"](3,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,l){n(l,3,0,l.component.supportHTML)}))}function wn(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,14,"div",[["class","row"]],null,null,null,null,null)),(n()(),t["\u0275eld"](1,0,null,null,6,"div",[["class","description col-md-6 col-sm-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](2,0,null,null,3,"div",[["class","block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](3,0,null,null,1,"div",[["class","small-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Beschreibung"])),(n()(),t["\u0275eld"](5,0,null,null,0,"div",[["class","content"]],[[8,"innerHTML",1]],null,null,null,null)),(n()(),t["\u0275and"](16777216,null,null,1,null,xn)),t["\u0275did"](7,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),t["\u0275eld"](8,0,null,null,6,"div",[["class","stats col-md-6 col-sm-12"]],null,null,null,null,null)),(n()(),t["\u0275eld"](9,0,null,null,5,"div",[["class","block"]],null,null,null,null,null)),(n()(),t["\u0275eld"](10,0,null,null,1,"div",[["class","small-title"]],null,null,null,null,null)),(n()(),t["\u0275ted"](-1,null,["Statistiken"])),(n()(),t["\u0275eld"](12,0,null,null,2,"div",[["class","content"]],null,null,null,null,null)),(n()(),t["\u0275ted"](13,null,["Erstellt am ",""])),t["\u0275ppd"](14,1)],(function(n,l){n(l,7,0,l.component.supportHTML)}),(function(n,l){var e=l.component;n(l,5,0,e.getVideoChannelDescription());var o=t["\u0275unv"](l,13,0,n(l,14,0,t["\u0275nov"](l.parent,0),e.videoChannel.createdAt));n(l,13,0,o)}))}function In(n){return t["\u0275vid"](0,[t["\u0275pid"](0,a.DatePipe,[t.LOCALE_ID]),(n()(),t["\u0275and"](16777216,null,null,1,null,wn)),t["\u0275did"](2,16384,null,0,a.NgIf,[t.ViewContainerRef,t.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,2,0,l.component.videoChannel)}),null)}var Sn=t["\u0275ccf"]("my-video-channel-about",kn,(function(n){return t["\u0275vid"](0,[(n()(),t["\u0275eld"](0,0,null,null,1,"my-video-channel-about",[],null,null,null,In,Pn)),t["\u0275did"](1,245760,null,0,kn,[f.a,v.a,_n.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),Ln=e("9AJC"),Rn=e("IheW"),Tn=e("9IV+"),Nn=e("nvTd"),Vn=e("upD4"),An=e("6RP5"),Fn=e("HvDw"),Dn=e("vQJr"),Bn=e("l/z6"),En=e("cKMx"),jn=e("mTdg"),Hn=e("3szM"),Kn=e("mpCX"),zn=e("hD3C"),qn=e("F4xN"),Un=e("Qmuk"),Wn=e("yXFd"),Gn=e("wpFD"),Zn=e("/7bI"),$n=e("JtBY"),Jn=e("0C+C"),Xn=e("D/X6"),Qn=e("cvwr"),Yn=e("tSwB"),nl=e("RtUV"),ll=e("W3Gj"),el=e("AD+P"),tl=e("hlYB"),ol=e("I88b"),il=e("GvuC"),ul=e("V+Hg"),al=e("WZ9d"),rl=e("M9Zh"),cl=e("1MVc"),dl=e("mpAo"),sl=e("c6Lk"),pl=e("j8ES"),ml=e("Phsq"),fl={meta:{title:"Video channel videos"},reuse:{enabled:!0,key:"video-channel-videos-list"}},gl={meta:{title:"Video channel playlists"}},vl={meta:{title:"About video channel"}},hl=function(){},bl=e("7LN8"),Cl=e("Fa87"),yl=e("oz/p"),Ol=e("VQoA"),Ml=e("IP0z"),kl=e("/HVE"),_l=e("hOhj"),Pl=e("g4HV"),xl=e("No4M"),wl=e("PCNd");e.d(l,"VideoChannelsModuleNgFactory",(function(){return Il}));var Il=t["\u0275cmf"](o,[],(function(n){return t["\u0275mod"]([t["\u0275mpd"](512,t.ComponentFactoryResolver,t["\u0275CodegenComponentFactoryResolver"],[[8,[i.a,R,sn,On,Sn,Ln.g,Ln.h,Ln.e,Ln.f]],[3,t.ComponentFactoryResolver],t.NgModuleRef]),t["\u0275mpd"](4608,a.NgLocalization,a.NgLocaleLocalization,[t.LOCALE_ID,[2,a["\u0275angular_packages_common_common_a"]]]),t["\u0275mpd"](4608,j["\u0275angular_packages_forms_forms_o"],j["\u0275angular_packages_forms_forms_o"],[]),t["\u0275mpd"](4608,j.FormBuilder,j.FormBuilder,[]),t["\u0275mpd"](4608,Rn.m,Rn.s,[a.DOCUMENT,t.PLATFORM_ID,Rn.q]),t["\u0275mpd"](4608,Rn.t,Rn.t,[Rn.m,Rn.r]),t["\u0275mpd"](5120,Rn.a,(function(n,l){return[n,new Tn.a(l)]}),[Rn.t,t.Injector]),t["\u0275mpd"](4608,Rn.p,Rn.p,[]),t["\u0275mpd"](6144,Rn.n,null,[Rn.p]),t["\u0275mpd"](4608,Rn.l,Rn.l,[Rn.n]),t["\u0275mpd"](6144,Rn.b,null,[Rn.l]),t["\u0275mpd"](4608,Rn.g,Rn.o,[Rn.b,t.Injector]),t["\u0275mpd"](4608,Rn.c,Rn.c,[Rn.g]),t["\u0275mpd"](4608,A.A,A.A,[t.ComponentFactoryResolver,t.Injector,A.yb,A.B]),t["\u0275mpd"](4608,f.a,f.a,[t.TRANSLATIONS_FORMAT,t.TRANSLATIONS,t.LOCALE_ID,[2,f.b]]),t["\u0275mpd"](4608,k.a,k.a,[u.p,f.a]),t["\u0275mpd"](4608,Nn.a,Nn.a,[]),t["\u0275mpd"](4608,Vn.a,Vn.a,[Rn.c,Nn.a,k.a]),t["\u0275mpd"](4608,An.a,An.a,[Rn.c,Nn.a,k.a]),t["\u0275mpd"](4608,Fn.a,Fn.a,[Rn.c,Nn.a,k.a]),t["\u0275mpd"](4608,Dn.a,Dn.a,[Rn.c,k.a,Nn.a,f.a]),t["\u0275mpd"](4608,g.a,g.a,[Rn.c,k.a,Nn.a,U.a,f.a]),t["\u0275mpd"](4608,Bn.a,Bn.a,[Rn.c,k.a]),t["\u0275mpd"](4608,v.a,v.a,[Rn.c,Nn.a,k.a]),t["\u0275mpd"](4608,W.a,W.a,[Rn.c,U.a,k.a,Nn.a,t.NgZone]),t["\u0275mpd"](4608,En.a,En.a,[Rn.c,U.a,k.a]),t["\u0275mpd"](4608,jn.a,jn.a,[Rn.c,Nn.a,k.a,U.a]),t["\u0275mpd"](4608,m.a,m.a,[Rn.c,k.a,Nn.a,t.NgZone]),t["\u0275mpd"](4608,Hn.a,Hn.a,[j.FormBuilder]),t["\u0275mpd"](4608,Kn.a,Kn.a,[f.a]),t["\u0275mpd"](4608,zn.a,zn.a,[f.a]),t["\u0275mpd"](4608,qn.a,qn.a,[f.a]),t["\u0275mpd"](4608,Un.a,Un.a,[f.a]),t["\u0275mpd"](4608,Wn.a,Wn.a,[f.a]),t["\u0275mpd"](4608,Gn.a,Gn.a,[f.a]),t["\u0275mpd"](4608,Zn.a,Zn.a,[f.a]),t["\u0275mpd"](4608,$n.a,$n.a,[f.a]),t["\u0275mpd"](4608,Jn.a,Jn.a,[f.a]),t["\u0275mpd"](4608,Xn.a,Xn.a,[f.a]),t["\u0275mpd"](4608,Qn.a,Qn.a,[f.a]),t["\u0275mpd"](4608,Yn.a,Yn.a,[Rn.c,k.a,g.a,U.a]),t["\u0275mpd"](4608,nl.a,nl.a,[f.a]),t["\u0275mpd"](4608,ll.a,ll.a,[f.a]),t["\u0275mpd"](4608,el.a,el.a,[f.a]),t["\u0275mpd"](4608,tl.a,tl.a,[Rn.c,k.a,Nn.a]),t["\u0275mpd"](4608,ol.a,ol.a,[Rn.c,k.a,Nn.a,g.a]),t["\u0275mpd"](4608,il.a,il.a,[]),t["\u0275mpd"](4608,ul.a,ul.a,[il.a]),t["\u0275mpd"](4608,_n.a,_n.a,[ul.a]),t["\u0275mpd"](4608,al.a,al.a,[Rn.c,Nn.a,k.a,_n.a,U.a]),t["\u0275mpd"](4608,rl.a,rl.a,[f.a]),t["\u0275mpd"](4608,q.a,q.a,[]),t["\u0275mpd"](4608,cl.a,cl.a,[s.a,Rn.c,k.a,Nn.a,dl.a]),t["\u0275mpd"](4608,sl.a,sl.a,[Rn.c,Nn.a,k.a]),t["\u0275mpd"](4608,pl.a,pl.a,[Rn.c,Nn.a,k.a]),t["\u0275mpd"](1073742336,u.t,u.t,[[2,u.z],[2,u.p]]),t["\u0275mpd"](1073742336,hl,hl,[]),t["\u0275mpd"](1073742336,a.CommonModule,a.CommonModule,[]),t["\u0275mpd"](1073742336,j["\u0275angular_packages_forms_forms_d"],j["\u0275angular_packages_forms_forms_d"],[]),t["\u0275mpd"](1073742336,j.FormsModule,j.FormsModule,[]),t["\u0275mpd"](1073742336,j.ReactiveFormsModule,j.ReactiveFormsModule,[]),t["\u0275mpd"](1073742336,Rn.e,Rn.e,[]),t["\u0275mpd"](1073742336,Rn.d,Rn.d,[]),t["\u0275mpd"](1073742336,A.x,A.x,[]),t["\u0275mpd"](1073742336,A.C,A.C,[]),t["\u0275mpd"](1073742336,A.N,A.N,[]),t["\u0275mpd"](1073742336,A.Z,A.Z,[]),t["\u0275mpd"](1073742336,A.kb,A.kb,[]),t["\u0275mpd"](1073742336,A.m,A.m,[]),t["\u0275mpd"](1073742336,r.b,r.b,[]),t["\u0275mpd"](1073742336,bl.SharedModule,bl.SharedModule,[]),t["\u0275mpd"](1073742336,Cl.InputTextModule,Cl.InputTextModule,[]),t["\u0275mpd"](1073742336,yl.InputMaskModule,yl.InputMaskModule,[]),t["\u0275mpd"](1073742336,Ol.b,Ol.b,[]),t["\u0275mpd"](1073742336,Ol.h,Ol.h,[]),t["\u0275mpd"](1073742336,Ol.e,Ol.e,[]),t["\u0275mpd"](1073742336,Ol.c,Ol.c,[]),t["\u0275mpd"](1073742336,Ol.f,Ol.f,[]),t["\u0275mpd"](1073742336,Ol.d,Ol.d,[]),t["\u0275mpd"](1073742336,Ol.g,Ol.g,[]),t["\u0275mpd"](1073742336,Ml.a,Ml.a,[]),t["\u0275mpd"](1073742336,kl.b,kl.b,[]),t["\u0275mpd"](1073742336,_l.ScrollingModule,_l.ScrollingModule,[]),t["\u0275mpd"](1073742336,Pl.TooltipModule,Pl.TooltipModule,[]),t["\u0275mpd"](1073742336,xl.MultiSelectModule,xl.MultiSelectModule,[]),t["\u0275mpd"](1073742336,wl.a,wl.a,[]),t["\u0275mpd"](1073742336,o,o,[]),t["\u0275mpd"](1024,u.n,(function(){return[[{path:":videoChannelName",component:M,canActivateChild:[ml.a],children:[{path:"",redirectTo:"videos",pathMatch:"full"},{path:"videos",component:Q,data:fl},{path:"video-playlists",component:vn,data:gl},{path:"about",component:kn,data:vl}]}]]}),[]),t["\u0275mpd"](256,t.LOCALE_ID,"de-DE",[]),t["\u0275mpd"](256,Rn.q,"XSRF-TOKEN",[]),t["\u0275mpd"](256,Rn.r,"X-XSRF-TOKEN",[]),t["\u0275mpd"](256,t.TRANSLATIONS_FORMAT,"xlf",[])])}))}}]);