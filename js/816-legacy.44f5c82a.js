"use strict";(self["webpackChunkndesign"]=self["webpackChunkndesign"]||[]).push([[816],{5816:function(e,t,n){n.r(t),n.d(t,{default:function(){return c}});var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"admin-panel-container"},[n("h1",[e._v("Admin Panel Container!")])])}],r=(n(7941),{data:function(){return{}},methods:{auth:function(e,t){var n=this;this.$http.post("/auth",{username:e,password:t}).then((function(e){e.data[0]||n.$router.push("/404")}))}},mounted:function(){var e=Object.assign({},JSON.parse(localStorage.getItem("userInfo")));console.log(e),0==Object.keys(e).length&&(console.log("here"),this.$router.push("/404")),console.log(e),this.auth(e.username,e.password)}}),o=r,u=n(1001),i=(0,u.Z)(o,s,a,!1,null,"a4175450",null),c=i.exports}}]);
//# sourceMappingURL=816-legacy.44f5c82a.js.map