(function(e){function t(t){for(var r,i,l=t[0],s=t[1],c=t[2],f=0,p=[];f<l.length;f++)i=l[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);u&&u(t);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,l=1;l<n.length;l++){var s=n[l];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1075:function(e,t,n){"use strict";n("958e")},"177f":function(e,t,n){"use strict";n("7a55")},3092:function(e,t,n){e.exports=n.p+"img/bmwcar.cbe19108.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),e._v(" | "),n("router-link",{attrs:{to:"/list"}},[e._v("Cars")])],1),n("router-view")],1)},a=[],i=(n("034f"),n("2877")),l={},s=Object(i["a"])(l,o,a,!1,null,null,null),c=s.exports,u=n("8c4f"),f=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Välkommen till min app!"}})],1)},p=[],d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("h1",[e._v(e._s(e.msg))])])},m=[],v={name:"HelloWorld",props:{msg:String}},g=v,h=(n("1075"),Object(i["a"])(g,d,m,!1,null,"7d381216",null)),b=h.exports,_={name:"Home",components:{HelloWorld:b}},y=_,w=Object(i["a"])(y,f,p,!1,null,null,null),j=w.exports,k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"about"},[n("h1",[e._v("My name is Elias Ekman and this is an about page")]),n("mycomp",{attrs:{info:"Tell me what u like about vuejs",msg:"Please be kind and answer below"}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],attrs:{id:"input",type:"text",placeholder:"Write here"},domProps:{value:e.value},on:{input:function(t){t.target.composing||(e.value=t.target.value)}}}),n("p",[e._v(e._s(e.value))])],1)},O=[],x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.msg))]),n("h3",[e._v(e._s(e.info))])])},C=[],S={name:"myComponent",props:{msg:String,info:String}},M=S,E=Object(i["a"])(M,x,C,!1,null,null,null),P=E.exports,$={name:"About",components:{mycomp:P},data:function(){return{value:""}},computed:{foo:function(){return this.value}},methods:{onClick:function(){}}},A=$,H=Object(i["a"])(A,k,O,!1,null,null,null),N=H.exports,T=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"list"},[n("img",{staticClass:"carImg",attrs:{alt:"carImg",src:e.image}}),n("h1",[e._v("Randomize a car for you to get")]),e.cars?n("dl",[e._l(e.cars,(function(t){return[n("ul",{key:t.Mfr_ID},[n("li",[e._v(e._s(t.Mfr_Name))])])]}))],2):n("p",[e._v("Getting Car...")]),n("b-button",{attrs:{id:"button",variant:"primary"},on:{click:e.getCar}},[e._v(" Click here to get a car ")])],1)},W=[],I=n("bc3a"),z=n.n(I),F=n("3092"),J=n.n(F),R={name:"fetch",created:function(){var e=this;z.a.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmanufacturers?format=json").then((function(t){e.cars=t.data.Results})).catch((function(t){e.errors.push(t)}))},data:function(){return{cars:null,styleObject:{color:"grey",fontSize:"20px"},image:J.a}},props:{},methods:{getCar:function(){var e=Math.ceil(20*Math.random());alert(this.cars[e].Mfr_CommonName)}}},V=R,q=(n("177f"),Object(i["a"])(V,T,W,!1,null,"02e59948",null)),B=q.exports;r["default"].use(u["a"]);var D=[{path:"/",name:"Home",component:j},{path:"/about",name:"About",component:N},{path:"/list",name:"List",component:B}],G=new u["a"]({routes:D}),L=G,K=n("2f62");r["default"].use(K["a"]);var Q=new K["a"].Store({state:{},mutations:{},actions:{},modules:{}}),U=n("9483");Object(U["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var X=n("1e18");n("2dd8"),n("f9e3");r["default"].use(X["a"]),r["default"].config.productionTip=!1,new r["default"]({router:L,store:Q,render:function(e){return e(c)}}).$mount("#app")},"7a55":function(e,t,n){},"85ec":function(e,t,n){},"958e":function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.cd286a32.png"}});
//# sourceMappingURL=app.9297d9d6.js.map