"use strict";(self["webpackChunkcreations"]=self["webpackChunkcreations"]||[]).push([[952],{4952:function(t,e,i){i.r(e),i.d(e,{default:function(){return H}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"my-portfolio-container"},[i("h1",[t._v("PORTFOLIO / MY CREATIONS")]),i("div",{staticClass:"portfolio-container"},t._l(t.posts,(function(t,e){return i("div",{key:"post"+e,staticClass:"posts"},[i("PostCard",{attrs:{post:t}})],1)})),0),i("div",{staticClass:"py-8"})])},s=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{attrs:{"max-width":"550","max-height":"600"}},[i("v-carousel",{attrs:{cycle:t.post.images.length>1,"hide-delimiter-background":"","hide-delimiters":"","show-arrows":t.post.images.length>1},model:{value:t.carouselModel,callback:function(e){t.carouselModel=e},expression:"carouselModel"}},t._l(t.post.images,(function(t,e){return i("v-carousel-item",{key:"postN"+e,attrs:{src:t}})})),1),i("v-card-title",[t._v(t._s(t.post.title))]),i("v-card-text",[i("div",[t._v(" "+t._s(t.post.description)+" ")])])],1)},r=[],a={props:{post:{type:Object,default:Object,required:!0}},data:function(){return{carouselModel:0}}},l=a,u=i(1001),c=i(3453),h=i.n(c),d=i(3237),p=i(7118),m=i(4367),v=(i(9653),i(2222),i(9826),i(1539),i(4553),i(5500)),g=i(680),f=g.Z,w=i(172),T=i(4333),y=T.y.extend({name:"v-window",directives:{Touch:v.Z},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return(0,m.Z)((0,m.Z)({},T.y.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=this.internalReverse?!this.isReverse:this.isReverse,i=e?"-reverse":"";return"v-window-".concat(t).concat(i,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genDefaultSlot:function(){return this.$slots.default},genContainer:function(){var t=[this.genDefaultSlot()];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,i){var n,s,o,r=this,a={click:function(t){t.stopPropagation(),r.changedByDelimiters=!0,i()}},l={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},u=null!=(n=null==(s=(o=this.$scopedSlots)[t])?void 0:s.call(o,{on:a,attrs:l}))?n:[this.$createElement(f,{props:{icon:!0},attrs:l,on:a},[this.$createElement(w.Z,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},u)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"===typeof e){var i=this.genIcon("prev",e,this.prev);i&&t.push(i)}var n=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&n&&"string"===typeof n){var s=this.genIcon("next",n,this.next);s&&t.push(s)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length,i=this.items[e];return i.disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length,i=this.items[e];return i.disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var i=this.items.length,n=i-1;return i<=2?t<e:t===n&&0===e||(0!==t||e!==n)&&t<e}},render:function(t){var e=this,i={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};i.directives.push({name:"touch",value:n})}return t("div",i,[this.genContainer()])}}),C=i(8159),x=T.y.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return T.y.options.computed.classes.call(this)}},methods:{genData:T.y.options.methods.genData}}),I=i(4589),b=i(1824),$=y.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},provide:function(){return{parentTheme:this.theme}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return(0,m.Z)((0,m.Z)({},y.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&(0,b.fK)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:y.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,i=[],n=0;n<e;n++){var s=this.$createElement(f,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",n+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[n],n)}},[this.$createElement(w.Z,{props:{size:18}},this.delimiterIcon)]);i.push(s)}return this.$createElement(x,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},i)},genProgress:function(){return this.$createElement(C.Z,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=y.options.render.call(this,t);return e.data.style="height: ".concat((0,I.kb)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),B=i(8625),N=i(7352),P=i(3325),_=(0,P.Z)(B.Z,(0,N.d)("windowGroup","v-window-item","v-window")),E=_.extend().extend().extend({name:"v-window-item",directives:{Touch:v.Z},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?"undefined"!==typeof this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:"undefined"!==typeof this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=(0,I.kb)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=(0,I.kb)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}}),D=i(2829),j=i(6505),A=(0,P.Z)(E,j.Z),S=A.extend().extend({name:"v-carousel-item",inject:{parentTheme:{default:{isDark:!1}}},provide:function(){return{theme:this.parentTheme}},inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(D.Z,{staticClass:"v-carousel__item",props:(0,m.Z)((0,m.Z)({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},(0,I.z9)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,i=t.data;return i.staticClass="v-window-item",i.directives.push({name:"show",value:this.isActive}),this.$createElement(e,i,this.genDefaultSlot())}}}),V=(0,u.Z)(l,o,r,!1,null,"eff12138",null),k=V.exports;h()(V,{VCard:d.Z,VCardText:p.ZB,VCardTitle:p.EB,VCarousel:$,VCarouselItem:S});var Z={components:{PostCard:k},data:function(){return{posts:[{images:["https://i.imgur.com/Tr2ySsl.jpg","https://i.imgur.com/DYJvFu8.jpg"],title:"Untitled Post",description:"No description available."},{images:["https://i.imgur.com/fElFVrd.jpg","https://i.imgur.com/SOUpEVV.jpg"],title:"Untitled Post N. 2",description:"No description available."},{images:["https://i.imgur.com/3LWLV5t.jpg"],title:"Untitled Post N. 3",description:"No description available."},{images:["https://i.imgur.com/x1iUv78.jpg"],title:"Untitled Post N. 4",description:"No description available."},{images:["https://i.imgur.com/I4r4Yo4.jpg"],title:"Untitled Post N. 5",description:"No description available."},{images:["https://i.imgur.com/gcocLAz.jpg"],title:"Untitled Post N. 6",description:"No description available."},{images:["https://i.imgur.com/E8B9IB1.jpg"],title:"Untitled Post N. 7",description:"No description available."},{images:["https://i.imgur.com/nA1RU0n.jpg"],title:"Untitled Post N. 8",description:"No description available."},{images:["https://i.imgur.com/h2sLn3j.jpg","https://i.imgur.com/2E0EaFp.jpg","https://i.imgur.com/pPbdSgc.jpg","https://i.imgur.com/QUoD7Ia.jpg"],title:"Untitled Post N. 9",description:"No description available."},{images:["https://i.imgur.com/juYsqmD.jpg"],title:"Untitled Post N. 10",description:"No description available."},{images:["https://i.imgur.com/geYQA0r.jpg","https://i.imgur.com/EOUoCaC.jpg","https://i.imgur.com/cp771dk.jpg"],title:"Untitled Post N. 11",description:"No description available."}]}}},U=Z,G=(0,u.Z)(U,n,s,!1,null,"1f0d5b76",null),H=G.exports}}]);
//# sourceMappingURL=952-legacy.be74faf9.js.map