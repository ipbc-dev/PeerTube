var __generator=this&&this.__generator||function(n,e){var t,l,r,i,u={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,l&&(r=2&i[0]?l.return:i[0]?l.throw||((r=l.return)&&r.call(l),0):l.next)&&!(r=r.call(l,i[1])).done)return r;switch(l=0,r&&(i=[2&i[0],r.value]),i[0]){case 0:case 1:r=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,l=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(!(r=(r=u.trys).length>0&&r[r.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!r||i[1]>r[0]&&i[1]<r[3])){u.label=i[1];break}if(6===i[0]&&u.label<r[1]){u.label=r[1],r=i;break}if(r&&u.label<r[2]){u.label=r[2],u.ops.push(i);break}r[2]&&u.ops.pop(),u.trys.pop();continue}i=e.call(n,u)}catch(o){i=[6,o],l=0}finally{t=r=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}};(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/1FC":function(n,e,t){"use strict";var l=Array.isArray;e.a=l},"3UD+":function(n,e){n.exports=function(n){if(!n.webpackPolyfill){var e=Object.create(n);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},"5iG2":function(n,e,t){"use strict";e.a=function(n,e,t){var l=-1,r=n.length;e<0&&(e=-e>r?0:r+e),(t=t>r?r:t)<0&&(t+=r),r=e>t?0:t-e>>>0,e>>>=0;for(var i=Array(r);++l<r;)i[l]=n[l+e];return i}},EUcb:function(n,e,t){"use strict";e.a=function(n){return null!=n&&"object"==typeof n}},G8aS:function(n,e,t){"use strict";var l=t("8M4i"),r=t("EUcb");e.a=function(n){return"symbol"==typeof n||Object(r.a)(n)&&"[object Symbol]"==Object(l.a)(n)}},LFf6:function(n,e,t){"use strict";var l=t("ylTp"),r=t("twO/"),i=t("/1FC"),u=t("G8aS"),o=l.a?l.a.prototype:void 0,a=o?o.toString:void 0;e.a=function n(e){if("string"==typeof e)return e;if(Object(i.a)(e))return Object(r.a)(e,n)+"";if(Object(u.a)(e))return a?a.call(e):"";var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},SiRs:function(n,e,t){"use strict";var l=t("IzLi"),r=t("G8aS"),i=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt;e.a=function(n){if("number"==typeof n)return n;if(Object(r.a)(n))return NaN;if(Object(l.a)(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=Object(l.a)(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var t=o.test(n);return t||a.test(n)?c(n.slice(2),t?2:8):u.test(n)?NaN:+n}},ed90:function(n,e,t){"use strict";var l=t("mrSG"),r=t("Kj3r"),i=t("/uUt"),u=t("XNiG"),o=t("LFf6"),a=t("5iG2"),c=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]"),s=function(n){return c.test(n)},f=t("IzLi"),d=t("8M4i"),p=t("EUcb"),g=t("ovuK"),h=t("xutz"),v=h.a&&h.a.isRegExp,b=v?Object(g.a)(v):function(n){return Object(p.a)(n)&&"[object RegExp]"==Object(d.a)(n)},m="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",y="\\ud83c[\\udffb-\\udfff]",x="[^\\ud800-\\udfff]",w="(?:\\ud83c[\\udde6-\\uddff]){2}",C="[\\ud800-\\udbff][\\udc00-\\udfff]",O="(?:"+m+"|"+y+")?",M="[\\ufe0e\\ufe0f]?"+O+"(?:\\u200d(?:"+[x,w,C].join("|")+")[\\ufe0e\\ufe0f]?"+O+")*",j="(?:"+[x+m+"?",m,w,C,"[\\ud800-\\udfff]"].join("|")+")",S=RegExp(y+"(?="+y+")|"+j+M,"g"),P="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",R="[^\\ud800-\\udfff]",_="(?:\\ud83c[\\udde6-\\uddff]){2}",k="[\\ud800-\\udbff][\\udc00-\\udfff]",T="(?:"+P+"|\\ud83c[\\udffb-\\udfff])?",I="[\\ufe0e\\ufe0f]?"+T+"(?:\\u200d(?:"+[R,_,k].join("|")+")[\\ufe0e\\ufe0f]?"+T+")*",N="(?:"+[R+P+"?",P,_,k,"[\\ud800-\\udfff]"].join("|")+")",E=RegExp("\\ud83c[\\udffb-\\udfff](?=\\ud83c[\\udffb-\\udfff])|"+N+I,"g"),V=t("SiRs"),L=t("efZk"),D=/\w*$/,A=function(n,e){var t=30,l="...";if(Object(f.a)(e)){var r="separator"in e?e.separator:r;t="length"in e?function(n){var e=function(n){return n?(n=Object(V.a)(n))===1/0||n===-1/0?17976931348623157e292*(n<0?-1:1):n==n?n:0:0===n?n:0}(n),t=e%1;return e==e?t?e-t:e:0}(e.length):t,l="omission"in e?Object(o.a)(e.omission):l}var i=(n=Object(L.a)(n)).length;if(s(n)){var u=function(n){return s(n)?function(n){return n.match(E)||[]}(n):function(n){return n.split("")}(n)}(n);i=u.length}if(t>=i)return n;var c=t-function(n){return s(n)?function(n){for(var e=S.lastIndex=0;S.test(n);)++e;return e}(n):null==(e=n)?void 0:e.length;var e}(l);if(c<1)return l;var d=u?function(n,e,t){var l=n.length;return(t=void 0===t?l:t)>=l?n:Object(a.a)(n,0,t)}(u,0,c).join(""):n.slice(0,c);if(void 0===r)return d+l;if(u&&(c+=d.length-c),b(r)){if(n.slice(c).search(r)){var p,g=d;for(r.global||(r=RegExp(r.source,Object(L.a)(D.exec(r))+"g")),r.lastIndex=0;p=r.exec(g);)var h=p.index;d=d.slice(0,void 0===h?c:h)}}else if(n.indexOf(Object(o.a)(r),c)!=c){var v=d.lastIndexOf(r);v>-1&&(d=d.slice(0,v))}return d+l};t("fR23"),t("V8il"),t.d(e,"a",(function(){return H}));var H=function(){function n(n,e){this.screenService=n,this.markdownService=e,this.content="",this.classes=[],this.textareaWidth="100%",this.textareaHeight="150px",this.previewColumn=!1,this.markdownType="text",this.markdownVideo=!1,this.name="description",this.textareaMarginRight="0",this.flexDirection="column",this.truncatedPreviewHTML="",this.previewHTML="",this.contentChanged=new u.a,this.propagateChange=function(n){}}return n.prototype.ngOnInit=function(){var n=this;this.contentChanged.pipe(Object(r.a)(150),Object(i.a)()).subscribe((function(){return n.updatePreviews()})),this.contentChanged.next(this.content),this.previewColumn&&(this.flexDirection="row",this.textareaMarginRight="15px")},n.prototype.writeValue=function(n){this.content=n,this.contentChanged.next(this.content)},n.prototype.registerOnChange=function(n){this.propagateChange=n},n.prototype.registerOnTouched=function(){},n.prototype.onModelChange=function(){this.propagateChange(this.content),this.contentChanged.next(this.content)},n.prototype.arePreviewsDisplayed=function(){return!1===this.screenService.isInSmallView()},n.prototype.updatePreviews=function(){return Object(l.a)(this,void 0,void 0,(function(){var n,e;return __generator(this,(function(t){switch(t.label){case 0:return null!=this.content?(n=this,[4,this.markdownRender(A(this.content,{length:this.truncate}))]):[3,3];case 1:return n.truncatedPreviewHTML=t.sent(),e=this,[4,this.markdownRender(this.content)];case 2:e.previewHTML=t.sent(),t.label=3;case 3:return[2]}}))}))},n.prototype.markdownRender=function(n){return Object(l.a)(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(l){switch(l.label){case 0:return"text"!==this.markdownType?[3,2]:[4,this.markdownService.textMarkdownToHTML(n)];case 1:return t=l.sent(),[3,4];case 2:return[4,this.markdownService.enhancedMarkdownToHTML(n)];case 3:t=l.sent(),l.label=4;case 4:return e=t,[2,this.markdownVideo?this.markdownService.processVideoTimestamps(e):e]}}))}))},n}()},efZk:function(n,e,t){"use strict";var l=t("LFf6");e.a=function(n){return null==n?"":Object(l.a)(n)}},ovuK:function(n,e,t){"use strict";e.a=function(n){return function(e){return n(e)}}},"twO/":function(n,e,t){"use strict";e.a=function(n,e){for(var t=-1,l=null==n?0:n.length,r=Array(l);++t<l;)r[t]=e(n[t],t,n);return r}},uAlo:function(n,e,t){"use strict";var l=t("8Y7J"),r=t("G0yt"),i=t("9AJC"),u=t("SVse"),o=t("s7LF");t("ed90"),t("fR23"),t("45hh"),t.d(e,"a",(function(){return a})),t.d(e,"b",(function(){return p}));var a=l["\u0275crt"]({encapsulation:0,styles:[[".root[_ngcontent-%COMP%]{display:-webkit-box;display:flex}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{display:inline-block;width:100%;background:var(--inputColor);border:1px solid #c6c6c6;border-radius:3px;height:150px;padding:5px 15px;font-size:15px;margin-bottom:15px}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-webkit-input-placeholder{color:var(--inputPlaceholderColor)}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-moz-placeholder{color:var(--inputPlaceholderColor)}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::-ms-input-placeholder{color:var(--inputPlaceholderColor)}.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder{color:var(--inputPlaceholderColor)}@media screen and (max-width:100%){.root[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:100%}}.root[_ngcontent-%COMP%]   .previews[_ngcontent-%COMP%]{max-height:150px;overflow-y:auto;-webkit-box-flex:1;flex-grow:1}.root[_ngcontent-%COMP%]     .nav-link{display:-webkit-box!important;display:flex!important;-webkit-box-align:center;align-items:center;height:30px!important;padding:0 15px!important}.root[_ngcontent-%COMP%]     .tab-content{min-height:75px;padding:15px;font-size:15px;word-wrap:break-word}"]],data:{}});function c(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,e){n(e,0,0,e.component.truncatedPreviewHTML)}))}function s(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,5,"ngb-tab",[["title","\u0423\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u043e\u0436\u043a\u0430"]],null,null,null,null,null)),l["\u0275did"](1,2113536,[[1,4]],2,r.U,[],{title:[0,"title"]},null),l["\u0275qud"](603979776,2,{titleTpls:1}),l["\u0275qud"](603979776,3,{contentTpls:1}),(n()(),l["\u0275and"](0,null,null,1,null,c)),l["\u0275did"](5,16384,[[3,4]],0,r.V,[l.TemplateRef],null,null)],(function(n,e){n(e,1,0,"\u0423\u043a\u043e\u0440\u043e\u0447\u0435\u043d\u043d\u0430\u044f \u043e\u0431\u043b\u043e\u0436\u043a\u0430")}),null)}function f(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,0,"div",[],[[8,"innerHTML",1]],null,null,null,null))],null,(function(n,e){n(e,0,0,e.component.previewHTML)}))}function d(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,10,"ngb-tabset",[["class","previews"],["type","pills"]],null,null,null,i.d,i.b)),l["\u0275did"](1,2146304,null,1,r.X,[r.Y],{type:[0,"type"]},null),l["\u0275qud"](603979776,1,{tabs:1}),(n()(),l["\u0275and"](16777216,null,null,1,null,s)),l["\u0275did"](4,16384,null,0,u.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),l["\u0275eld"](5,0,null,null,5,"ngb-tab",[["title","\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440"]],null,null,null,null,null)),l["\u0275did"](6,2113536,[[1,4]],2,r.U,[],{title:[0,"title"]},null),l["\u0275qud"](603979776,4,{titleTpls:1}),l["\u0275qud"](603979776,5,{contentTpls:1}),(n()(),l["\u0275and"](0,null,null,1,null,f)),l["\u0275did"](10,16384,[[5,4]],0,r.V,[l.TemplateRef],null,null)],(function(n,e){var t=e.component;n(e,1,0,"pills"),n(e,4,0,void 0!==t.truncate),n(e,6,0,"\u041f\u0440\u0435\u0434\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440")}),null)}function p(n){return l["\u0275vid"](0,[(n()(),l["\u0275eld"](0,0,null,null,17,"div",[["class","root"]],null,null,null,null,null)),l["\u0275prd"](512,null,u["\u0275NgStyleImpl"],u["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](2,278528,null,0,u.NgStyle,[u["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),l["\u0275pod"](3,{"flex-direction":0}),(n()(),l["\u0275eld"](4,0,null,null,11,"textarea",[],[[8,"id",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,e,t){var r=!0,i=n.component;return"input"===e&&(r=!1!==l["\u0275nov"](n,10)._handleInput(t.target.value)&&r),"blur"===e&&(r=!1!==l["\u0275nov"](n,10).onTouched()&&r),"compositionstart"===e&&(r=!1!==l["\u0275nov"](n,10)._compositionStart()&&r),"compositionend"===e&&(r=!1!==l["\u0275nov"](n,10)._compositionEnd(t.target.value)&&r),"ngModelChange"===e&&(r=!1!==(i.content=t)&&r),"ngModelChange"===e&&(r=!1!==i.onModelChange()&&r),r}),null,null)),l["\u0275prd"](512,null,u["\u0275NgClassImpl"],u["\u0275NgClassR2Impl"],[l.IterableDiffers,l.KeyValueDiffers,l.ElementRef,l.Renderer2]),l["\u0275did"](6,278528,null,0,u.NgClass,[u["\u0275NgClassImpl"]],{ngClass:[0,"ngClass"]},null),l["\u0275prd"](512,null,u["\u0275NgStyleImpl"],u["\u0275NgStyleR2Impl"],[l.ElementRef,l.KeyValueDiffers,l.Renderer2]),l["\u0275did"](8,278528,null,0,u.NgStyle,[u["\u0275NgStyleImpl"]],{ngStyle:[0,"ngStyle"]},null),l["\u0275pod"](9,{width:0,height:1,"margin-right":2}),l["\u0275did"](10,16384,null,0,o.DefaultValueAccessor,[l.Renderer2,l.ElementRef,[2,o.COMPOSITION_BUFFER_MODE]],null,null),l["\u0275prd"](1024,null,o.NG_VALUE_ACCESSOR,(function(n){return[n]}),[o.DefaultValueAccessor]),l["\u0275did"](12,671744,null,0,o.NgModel,[[8,null],[8,null],[8,null],[6,o.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),l["\u0275prd"](2048,null,o.NgControl,null,[o.NgModel]),l["\u0275did"](14,16384,null,0,o.NgControlStatus,[[4,o.NgControl]],null,null),(n()(),l["\u0275ted"](-1,null,["  "])),(n()(),l["\u0275and"](16777216,null,null,1,null,d)),l["\u0275did"](17,16384,null,0,u.NgIf,[l.ViewContainerRef,l.TemplateRef],{ngIf:[0,"ngIf"]},null)],(function(n,e){var t=e.component,l=n(e,3,0,t.flexDirection);n(e,2,0,l),n(e,6,0,t.classes);var r=n(e,9,0,t.textareaWidth,t.textareaHeight,t.textareaMarginRight);n(e,8,0,r),n(e,12,0,t.name,t.content),n(e,17,0,t.arePreviewsDisplayed())}),(function(n,e){n(e,4,0,e.component.name,l["\u0275nov"](e,14).ngClassUntouched,l["\u0275nov"](e,14).ngClassTouched,l["\u0275nov"](e,14).ngClassPristine,l["\u0275nov"](e,14).ngClassDirty,l["\u0275nov"](e,14).ngClassValid,l["\u0275nov"](e,14).ngClassInvalid,l["\u0275nov"](e,14).ngClassPending)}))}},xutz:function(n,e,t){"use strict";(function(n){var l=t("XqMk"),r="object"==typeof exports&&exports&&!exports.nodeType&&exports,i=r&&"object"==typeof n&&n&&!n.nodeType&&n,u=i&&i.exports===r&&l.a.process,o=function(){try{return i&&i.require&&i.require("util").types||u&&u.binding&&u.binding("util")}catch(n){}}();e.a=o}).call(this,t("3UD+")(n))}}]);