webpackJsonp([0],{"0LAd":function(e,t){},"7wmc":function(e,t){},IeIS:function(e,t){},MFXk:function(e,t){},NHnr:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("7+uW"),a={data:function(){return{classObject:{burger:!0,st1:!1,st2:!1,hover:!1}}},methods:{hoverOn:function(){this.classObject.hover=!0},hoverOff:function(){this.classObject.hover=!1},toggleStage:function(){var e=this;this.classObject.st2&&(this.classObject.st2=!1),this.classObject.hover=!this.classObject.hover,this.classObject.st1=!this.classObject.st1,this.$emit("changeNav"),this.classObject.st1&&setTimeout(function(){e.classObject.st2=!e.classObject.st2},1e3)}}},o={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{class:this.classObject,attrs:{id:"hamburger"},on:{mouseenter:this.hoverOn,mouseleave:this.hoverOff,click:this.toggleStage}},[t("i"),this._v(" "),t("i"),this._v(" "),t("i")])},staticRenderFns:[]};var s={components:{hamburger:i("VU/8")(a,o,!1,function(e){i("cQvP")},"data-v-2ca7c004",null).exports},data:function(){return{navClassObject:{shrunk:!1,mobile:!1},mobileShow:!1,navbar:[{name:"Home",link:"/",hover:!1},{name:"About",link:"about",hover:!1},{name:"Services",link:"services",hover:!1},{name:"Contact",link:"contact",hover:!1},{name:"Login",link:"login",hover:!1}]}},methods:{shrunk:function(){this.navClassObject.shrunk=!0},expand:function(){this.navClassObject.shrunk=!1},mobile:function(){this.navClassObject.mobile=!this.navClassObject.mobile},changeNav:function(){this.mobileShow=!this.mobileShow}},created:function(){var e=this;window.addEventListener("scroll",function(){window.innerWidth>750&&(window.scrollY>100?e.shrunk():e.expand())}),window.innerWidth<1050?(e.navClassObject.mobile=!0,e.mobileShow=!1):(e.navClassObject.mobile=!1,e.mobileShow=!0),window.addEventListener("resize",function(){window.innerWidth<1050?(e.navClassObject.mobile=!0,e.mobileShow=!1):(e.navClassObject.mobile=!1,e.mobileShow=!0)})}},r={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("nav",{staticClass:"nav",class:e.navClassObject},[i("div",{staticClass:"navbar"},[i("div",{staticClass:"logo"},[e._v("\n        ROSSMAN\n      ")]),e._v(" "),i("ul",{class:[e.mobileShow?"mobileShow":"mobileHide"]},e._l(e.navbar,function(t,n){return i("li",{key:n},[i("router-link",{attrs:{to:t.link}},[e._v(e._s(t.name))])],1)}))]),e._v(" "),e.navClassObject.mobile?i("div",{staticClass:"hamburger"},[i("hamburger",{on:{changeNav:e.changeNav}})],1):e._e()])])},staticRenderFns:[]};var l={components:{navbar:i("VU/8")(s,r,!1,function(e){i("7wmc")},"data-v-5ae387fd",null).exports}},u={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("navbar"),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var c=i("VU/8")(l,u,!1,function(e){i("IeIS")},null,null).exports,m=i("/ocq"),d={data:function(){return{properties:[{name:"Burns Villas",image:"prop1.jpg",imageAlt:"",info:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",active:!1},{name:"Orchid House",image:"prop2.jpg",imageAlt:"Photo by Benji Mellish from Pexels",info:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",active:!1},{name:"Light Mansion",image:"prop3.jpg",imageAlt:"Photo by Sarah Jane from Pexels",info:"Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",active:!1},{name:"Little House",image:"prop4.jpg",imageAlt:"",info:"Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",active:!1}]}},methods:{bookApp:function(){var e=document.querySelector(".modalContent");e.innerHTML="<h4>Your appointment has been booked. Thank You</h4>",e.classList.add("flex")}}},v={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"container"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("div",{staticClass:"properties"},e._l(e.properties,function(t,n){return i("div",{key:n,staticClass:"item"},[i("img",{attrs:{src:"static/images/"+t.image}}),e._v(" "),i("div",{staticClass:"itemInfo"},[e._v("\n          "+e._s(t.info)+e._s(t.active)+"\n        ")]),e._v(" "),i("button",{on:{click:function(e){t.active=!0}}},[e._v("Book appointment")]),e._v(" "),i("transition",{attrs:{name:"bookModal"}},[t.active?i("div",{staticClass:"bookApp"},[i("p",{staticClass:"close",on:{click:function(e){t.active=!1}}},[e._v("Close")]),e._v(" "),i("div",{staticClass:"modalContent"},[i("h3",[e._v("Property: "+e._s(t.name))]),e._v(" "),i("form",{on:{submit:function(t){return t.preventDefault(),e.bookApp(t)}}},[i("input",{attrs:{type:"text",name:"",value:"",placeholder:"Your name"}}),e._v(" "),i("input",{attrs:{type:"text",name:"",value:"",placeholder:"Your telephone number"}}),e._v(" "),i("input",{attrs:{type:"text",name:"",value:"",placeholder:"Your email"}}),e._v(" "),i("textarea",{attrs:{name:"name",placeholder:"Additional information"}}),e._v(" "),i("button",{attrs:{type:"submit"}},[e._v("Book appointment")])])])]):e._e()])],1)}))])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{staticClass:"titleBK"},[this._v("Our "),t("span",[this._v("Properties")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"info"},[t("p",[this._v("\n        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n      ")])])}]};var p={components:{Properties:i("VU/8")(d,v,!1,function(e){i("liHu")},"data-v-784244b5",null).exports},data:function(){return{revs:[{name:"Alan",image:"image",review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{name:"Paul",image:"image",review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."},{name:"Ingrid",image:"image",review:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}]}}},h={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"banner"},[i("h1",[e._v("FIND YOUR DREAM HOME")]),e._v(" "),i("router-link",{attrs:{to:"about"}},[i("button",[e._v("\n        View More\n      ")])])],1),e._v(" "),i("div",{staticClass:"container"},[i("Properties")],1),e._v(" "),e._m(0),e._v(" "),i("div",{staticClass:"container"},[i("div",{staticClass:"customerRev"},[e._m(1),e._v(" "),i("div",{staticClass:"sliderContainer"},[i("ul",e._l(e.revs,function(t,n){return i("li",{key:n},[i("img",{attrs:{src:t.image,alt:"Reviewer image"}}),e._v(" "),i("p",[e._v("\n              "+e._s(t.review)+"\n            ")]),e._v(" "),i("h4",[e._v("\n              "+e._s(t.name)+"\n            ")])])}))])])])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"info_space"},[t("div",{staticClass:"container"},[t("h2",{staticClass:"titleWT"},[this._v("Lorem "),t("span",[this._v("Ipsum")])]),this._v(" "),t("h1",[this._v("Excellent Experience")]),this._v(" "),t("p",[this._v("\n        Ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{staticClass:"titleBK"},[this._v("Customer "),t("span",[this._v("Reviews")])])}]};var f=i("VU/8")(p,h,!1,function(e){i("0LAd")},"data-v-0fe579eb",null).exports,b={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("div",{staticClass:"banner"},[t("h1",[this._v("About Us")])]),this._v(" "),t("div",{staticClass:"container"},[this._v("\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\n  ")])])}]};var _=i("VU/8")({},b,!1,function(e){i("MFXk")},"data-v-1fb4c558",null).exports,g={render:function(){var e=this.$createElement;return(this._self._c||e)("div",[this._v("\n  Book appointment\n")])},staticRenderFns:[]};var C=i("VU/8")({},g,!1,function(e){i("PfGz")},"data-v-0300324f",null).exports;n.a.use(m.a);var x=new m.a({mode:"history",routes:[{path:"/",name:"home",component:f},{path:"/about",name:"about",component:_},{path:"/appointment",name:"appointment",component:C}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:x,components:{App:c},template:"<App/>"})},PfGz:function(e,t){},cQvP:function(e,t){},liHu:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.b14e4ee885d2ddfc595b.js.map