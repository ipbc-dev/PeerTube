var $localize=Object.assign(void 0===$localize?{}:$localize,{locale:"it"});
"use strict";(function(global){global.ng=global.ng||{};global.ng.common=global.ng.common||{};global.ng.common.locales=global.ng.common.locales||{};var u=undefined;function plural(n){var i=Math.floor(Math.abs(n)),v=n.toString().replace(/^[^.]*\.?/,"").length;if(i===1&&v===0)return 1;return 5}global.ng.common.locales["it"]=["it",[["m.","p."],["AM","PM"],u],u,[["D","L","M","M","G","V","S"],["dom","lun","mar","mer","gio","ven","sab"],["domenica","luned\xEC","marted\xEC","mercoled\xEC","gioved\xEC","venerd\xEC","sabato"],["dom","lun","mar","mer","gio","ven","sab"]],u,[["G","F","M","A","M","G","L","A","S","O","N","D"],["gen","feb","mar","apr","mag","giu","lug","ago","set","ott","nov","dic"],["gennaio","febbraio","marzo","aprile","maggio","giugno","luglio","agosto","settembre","ottobre","novembre","dicembre"]],u,[["aC","dC"],["a.C.","d.C."],["avanti Cristo","dopo Cristo"]],1,[6,0],["dd/MM/yy","d MMM y","d MMMM y","EEEE d MMMM y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",u,"{1} {0}",u],[",",".",";","%","+","-","E","\xD7","\u2030","\u221E","NaN",":"],["#,##0.###","#,##0%","#,##0.00\xA0\xA4","#E0"],"EUR","\u20AC","euro",{"BRL":[u,"R$"],"BYN":[u,"Br"],"EGP":[u,"\xA3E"],"HKD":[u,"$"],"JPY":[u,"\xA5"],"KRW":[u,"\u20A9"],"MXN":[u,"$"],"NOK":[u,"NKr"],"THB":["\u0E3F"],"TWD":[u,"NT$"],"USD":[u,"$"]},"ltr",plural,[[["mezzanotte","mezzogiorno","di mattina","di pomeriggio","di sera","di notte"],u,["mezzanotte","mezzogiorno","di mattina","del pomeriggio","di sera","di notte"]],[["mezzanotte","mezzogiorno","mattina","pomeriggio","sera","notte"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","18:00"],["18:00","24:00"],["00:00","06:00"]]]]})(typeof globalThis!=="undefined"&&globalThis||typeof global!=="undefined"&&global||typeof window!=="undefined"&&window);;