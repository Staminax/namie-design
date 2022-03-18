(function(){"use strict";var t={1529:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("TopHeader"),n("v-main",[n("router-view")],1),n("AppFooter")],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("v-app-bar",{attrs:{elevation:"4",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!0}}}),r("v-spacer"),r("img",{staticStyle:{cursor:"pointer"},attrs:{src:n(4427),alt:""},on:{click:function(e){return t.$router.push("/")}}}),r("v-spacer")],1),r("v-navigation-drawer",{attrs:{app:"",temporary:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{attrs:{nav:""}},[r("v-list-item-group",{model:{value:t.group,callback:function(e){t.group=e},expression:"group"}},[r("v-list-item",[r("v-list-item-title",{on:{click:function(e){t.$router.push("/"),t.drawer=!1}}},[t._v("Home")])],1),r("v-list-item",[r("router-link",{attrs:{to:"/portfolio"}},[r("v-list-item-title",[t._v("Portfolio / Creations")])],1)],1),r("v-list-item",[r("router-link",{attrs:{to:"/collaborations"}},[r("v-list-item-title",[t._v("Collaborations")])],1)],1),r("v-list-item",[r("v-list-item-title",{on:{click:function(e){return t.scrollToAboutMe()}}},[t._v("About Me")])],1)],1)],1)],1)],1)},u=[],s={data:function(){return{drawer:!1,group:null}},methods:{scrollToAboutMe:function(){this.drawer=!1,"/"!==this.$route.path?(this.$router.push("/"),setTimeout((function(){document.getElementById("aboutMeSection").scrollIntoView({behavior:"smooth"})}),300)):document.getElementById("aboutMeSection").scrollIntoView({behavior:"smooth"})}}},c=s,l=n(1001),f=n(3453),m=n.n(f),d=n(426),p=n(5206),v=n(6816),A=n(7620),h=n(7874),g=n(8034),b=n(3526),w=n(9762),y=(0,l.Z)(c,a,u,!1,null,"87769774",null),k=y.exports;m()(y,{VAppBar:d.Z,VAppBarNavIcon:p.Z,VList:v.Z,VListItem:A.Z,VListItemGroup:h.Z,VListItemTitle:g.V9,VNavigationDrawer:b.Z,VSpacer:w.Z});var C=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-footer",{attrs:{dark:"",padless:""}},[r("v-card",{staticClass:"white--text text-center",attrs:{flat:"",tile:"",color:"#1b212c"}},[r("v-card-text",[r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""},on:{click:function(e){return t.sendToUrl("https://www.linkedin.com/in/fernanda-namie-nakamura-37931b1b8/")}}},[r("v-icon",{attrs:{size:"36px"}},[t._v("mdi-linkedin")])],1),r("v-btn",{staticClass:"mx-4 white--text",attrs:{icon:""},on:{click:function(e){return t.sendToUrl("https://www.instagram.com/in_the_village13/")}}},[r("v-icon",{attrs:{size:"36px"}},[t._v("mdi-instagram")])],1)],1),r("v-card-text",{staticClass:"white--text pt-0"},[t._v(" Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. ")]),r("v-divider"),r("v-avatar",{staticClass:"elevation-12 mb-2 mt-4",staticStyle:{cursor:"pointer"},attrs:{size:"64"},on:{click:function(e){return t.sendToUrl("https://www.linkedin.com/in/gustavo-bastelli-7732841b0/")}}},[r("v-img",{attrs:{src:n(659)}})],1),r("v-card-text",{staticClass:"white--text"},[t._v(" "+t._s((new Date).getFullYear())+" — "),r("strong",[t._v("designed by "),r("a",{attrs:{id:"eternytx",href:"https://www.instagram.com/eternytx/",target:"_blank"}},[t._v("eternytx")]),r("span",[t._v(" ❤️ ")])])])],1)],1)},x=[],Z={data:function(){return{}},methods:{sendToUrl:function(t){window.open(t,"_blank")}}},B=Z,V=n(6370),O=n(680),D=n(3237),T=n(7118),I=n(1418),E=n(899),M=n(6428),F=n(2829),P=(0,l.Z)(B,C,x,!1,null,"58959e17",null),S=P.exports;m()(P,{VAvatar:V.Z,VBtn:O.Z,VCard:D.Z,VCardText:T.ZB,VDivider:I.Z,VFooter:E.Z,VIcon:M.Z,VImg:F.Z});var j={components:{TopHeader:k,AppFooter:S}},H=j,_=n(7524),N=n(7877),z=(0,l.Z)(H,o,i,!1,null,null,null),L=z.exports;m()(z,{VApp:_.Z,VMain:N.Z});var U=n(858);r.Z.use(U.Z);var Y=new U.Z({}),K=(n(1539),n(8783),n(3948),n(8345));r.Z.use(K.Z);var R=[{path:"/",name:"Home",component:function(){return n.e(568).then(n.bind(n,1568))}},{path:"/contact-me",name:"Contact Me",component:function(){return Promise.all([n.e(347),n.e(601)]).then(n.bind(n,601))}},{path:"/portfolio",name:"Portfolio",component:function(){return Promise.all([n.e(607),n.e(588)]).then(n.bind(n,1392))}},{path:"/collaborations",name:"Collaborations",component:function(){return Promise.all([n.e(607),n.e(365)]).then(n.bind(n,1414))}},{path:"/private/access",name:"unnamed-route",component:function(){return Promise.all([n.e(347),n.e(206)]).then(n.bind(n,3206))}}],X=new K.Z({routes:R}),J=X;r.Z.config.productionTip=!1,new r.Z({vuetify:Y,router:J,render:function(t){return t(L)}}).$mount("#app")},659:function(t,e,n){t.exports=n.p+"img/eternytx.1949e628.jpg"},4427:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADU0lEQVRYCb1YS27bMBCV7QI+QFftBRokaDdBb9FVgAA2fJggd7FhAz5KUXTVtL1AsuoBvLDVN4SeIFNDySaHDESQnBnOzJuPqHhSVeN/y+XyZjqd/h6XHJeYTCY36/X672q1+gPpTxhnD/lnxIHNdIDXsmaz2aLdJC5Op5PTBUd3miryNZ5GuwhAXdeP2uEYGhx3uo7H4147T77G02ijAFA+dzh4i2H13KF8brfb7S8ofMHwH8f3iaH9KACUz2PocCydGUW095oO8jWeTxsFcI0yX3loD8ddUCzKaBBAhvIhJlcmFmU0CCBH+RABM4tsJJXROyrUZhh50Ohd2mazmXT3aNC6uw+tca+I7mcpI6yffDkAkzJ79un+PpiBpnw++wes9gjOF4BNfhsFAeQsHwYBICTKFaIdXUZBAFROYzlmOO4ASBlp+snXeKSpAJrysby8aM+fk99GKoAS5UMkzDSiHVVGKgAqpZGcMxxPKqMegILlw7gklVHvHkD5PCADVN7O/vu+ZXiLkBxembUn2m5hT+6EF2Rjj/VTy2gWoEmW1DuhlwEIu+/15myRCY47mzFvox4AePweo/TjbM7n838Bw46v8TQA3zXBnDRkwNk8HA5fNTvka7xeD6CEfuLAN184VMN+zYfkfH3dvdiUPfrvHmtZng38m/njjNDZ9DIABS4aHZkSS2cTtu81YwjoVQCCwppyC1rHwXQAu93uFU69YZR6XvEzy9tisfgIgx8w/MfxfSL3vRJqGMWywOhjvjr64qsKAMqKAWCDSgOLQ/4g36dzrwLAhVIMAIMV08ACQgUAZcUBwBm7EirYyK5BYxsYoCs1A8LAyJ4Flg/mqOjDxzAAKM0OgA0a28CDAEo0MoOEnrPPAJRmzwABIJL2AAo0cnIDA3jV+xoVYmdIFnpfph1+FfP1KecZfczR0Rc9Q28h+cFJAIic+bBoYHFqEEDORkbkXXDQa/kyAOXOiCC1HgQAvfkAZGxkkwYG+PBFJsxmmGeB0cecFH3xb7AHRABGzAFYNbD4NwogRyMzKOix/BmAEfMMEAAimB9AhkY2a2AE4KImFjmzLDD6mJOjL46N9oAIwZgZAMsGFt8uAmDZyAwGeqtcBmDMLAMEgOiZAPgPQpCNV/PmCUQAAAAASUVORK5CYII="}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(l=0;l<t.length;l++){r=t[l][0],o=t[l][1],i=t[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[s])}))?r.splice(s--,1):(u=!1,i<a&&(a=i));if(u){t.splice(l--,1);var c=o();void 0!==c&&(e=c)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{206:"8a568d88",347:"a2981dd0",365:"122d7aa3",568:"115c8128",588:"901142d0",601:"ba7b2e48",607:"3af76b99"}[t]+".js"}}(),function(){n.miniCssF=function(t){return"css/"+t+"."+{206:"99caaf86",347:"ca74e1c2",365:"46116c24",568:"0423c824",588:"2214d1e3",601:"b0e40b22"}[t]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="creations:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var f=c[l];if(f.getAttribute("src")==r||f.getAttribute("data-webpack")==e+i){u=f;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[o];var m=function(e,n){u.onerror=u.onload=null,clearTimeout(d);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},d=setTimeout(m.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=m.bind(null,u.onerror),u.onload=m.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/namie-design/"}(),function(){var t=function(t,e,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var i=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var a=i&&("load"===i.type?"missing":i.type),u=i&&i.target&&i.target.href||e,s=new Error("Loading CSS chunk "+t+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=a,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=i,o.href=e,document.head.appendChild(o),o},e=function(t,e){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===t||i===e))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===t||i===e)return o}},r=function(r){return new Promise((function(o,i){var a=n.miniCssF(r),u=n.p+a;if(e(a,u))return o();t(r,u,o,i)}))},o={143:0};n.f.miniCss=function(t,e){var n={206:1,347:1,365:1,568:1,588:1,601:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),u=new Error,s=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,s,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],s=r[2],c=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(s)var l=s(n)}for(e&&e(r);c<a.length;c++)i=a[c],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(l)},r=self["webpackChunkcreations"]=self["webpackChunkcreations"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1529)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.14a430e7.js.map