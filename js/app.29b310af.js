(function(t){function e(e){for(var r,i,c=e[0],u=e[1],l=e[2],f=0,p=[];f<c.length;f++)i=c[f],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);s&&s(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,c=1;c<n.length;c++){var u=n[c];0!==a[u]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/deezweb/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var s=u;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"10f4":function(t,e,n){"use strict";var r=n("8597"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("router-view")],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar"},[n("div",{staticClass:"container"},[n("router-link",{attrs:{to:"/"}},[t._v("Accueil")]),n("router-link",{attrs:{to:"/search"}},[t._v("Rechercher une musique")]),n("router-link",{attrs:{to:"/favo"}},[t._v("Vos favoris")])],1)])},c=[],u={name:"Navbar"},l=u,s=(n("10f4"),n("2877")),f=Object(s["a"])(l,i,c,!1,null,"45d19ccb",null),p=f.exports,v={name:"app",components:{Navbar:p}},d=v,m=(n("034f"),Object(s["a"])(d,a,o,!1,null,null,null)),h=m.exports,b=n("8c4f"),_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container centered"},[n("h1",[t._v("Bienvenue sur l'intranet")]),n("hr")])}],y={name:"Home",components:{},data:function(){return{collaborateurs:null,collaborateur:null}},methods:{}},w=y,x=Object(s["a"])(w,_,g,!1,null,"52ea9cb7",null),O=x.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container centered"},[n("h1",[t._v("Recherchez votre son")]),n("hr"),n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{placeholder:"Titre de la chanson",type:"text",name:"title",id:"title"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("select",{directives:[{name:"model",rawName:"v-model",value:t.searchBy,expression:"searchBy"}],attrs:{name:"filterBy",id:"filters"},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.searchBy=e.target.multiple?n:n[0]}}},[n("option",{attrs:{disabled:"",value:"select"}},[t._v("Filtrez par...")]),n("option",{attrs:{value:"artist"}},[t._v("Artiste")]),n("option",{attrs:{value:"album"}},[t._v("Album")])]),n("input",{attrs:{type:"button",value:"Submit"}})]),t._l(t.songs,function(e){return n("div",{staticClass:"song-card"},[n("img",{attrs:{src:e.album.cover,alt:e.album.title}}),n("div",{staticClass:"info"},[n("p",[t._v("Titre : "+t._s(e.title))]),n("p",[t._v("Album : "+t._s(e.album.title))]),n("p",[t._v("Artiste : "+t._s(e.artist.name))])]),n("audio",{attrs:{src:e.preview,controls:""}})])})],2)},B=[],$=n("bc3a"),k=n.n($),C="https://cors-anywhere.herokuapp.com/",E="https://api.deezer.com/",P=k.a.create({baseURL:"".concat(C).concat(E)}),S={fetchBy:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10;return P.get("/search",{params:{q:t,order:e,limit:n}}).then(function(t){var e=t.data;return e}).catch(function(t){return console.log(t)})}},A={name:"Search",data:function(){return{title:"",searchBy:"artist",songs:null}},methods:{submit:function(){var t=this;S.fetchBy(this.title,this.filter).then(function(e){t.songs=e.data,console.log(t.songs)})}}},N=A,T=(n("6ee1"),Object(s["a"])(N,j,B,!1,null,"76ca8d5e",null)),z=T.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},R=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container centered"},[n("h1",[t._v("Liste de vos favoris")]),n("hr")])}],q={name:"Favo",components:{},data:function(){return{collaborateurs:null,collaborateur:null}},methods:{}},F=q,J=Object(s["a"])(F,M,R,!1,null,"5d0368bc",null),L=J.exports;r["a"].use(b["a"]);var D=new b["a"]({routes:[{name:"home",path:"/",component:O},{name:"search",path:"/search",component:z},{name:"favo",path:"/favo",component:L}]});r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(h)},router:D}).$mount("#app")},"64a9":function(t,e,n){},"6ee1":function(t,e,n){"use strict";var r=n("98a2"),a=n.n(r);a.a},8597:function(t,e,n){},"98a2":function(t,e,n){}});
//# sourceMappingURL=app.29b310af.js.map