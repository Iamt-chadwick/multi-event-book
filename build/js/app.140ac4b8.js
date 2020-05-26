(function(t){function e(e){for(var a,i,o=e[0],c=e[1],l=e[2],d=0,m=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&m.push(s[i][0]),s[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},s={app:0},r=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"43c8":function(t,e,n){},"4c32":function(t,e,n){"use strict";var a=n("43c8"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[n("keep-alive",{attrs:{exclude:"checkout"}},[n("router-view",{key:t.$route.fullPath})],1)],1)},r=[],i={name:"App"},o=i,c=(n("034f"),n("2877")),l=Object(c["a"])(o,s,r,!1,null,null,null),u=l.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container max-width-adaptive-md margin-bottom-lg"},[t.isLoading?t._e():n("events-list",{attrs:{events:t.computedEvents},scopedSlots:t._u([{key:"default",fn:function(e){return n("li",{staticClass:"stack-cards__item bg radius-lg shadow-md js-stack-cards__item",attrs:{"data-theme":"default"}},[n("div",{staticClass:"grid"},[n("div",{staticClass:"col-6 flex items-center height-100%"},[n("div",{staticClass:"text-component padding-md"},[n("h2",[t._v(t._s(e.name))]),n("p",{staticClass:"display@xs"},[t._v("Address: "+t._s(e.address))]),n("p",{staticClass:"display@xs"},[t._v("Event Prices:")]),t._l(e.event_kinds,(function(e){return n("div",{key:e.id},[n("ul",[n("li",[t._v(t._s(e.name)+" for ₦ "+t._s(parseFloat(e.price).toFixed(2)))])])])})),n("br"),n("p",[n("router-link",{staticClass:"btn btn--accent",attrs:{to:{name:"event",params:{code:e.code}}}},[t._v("Attend Event")])],1)],2)]),n("div",{staticClass:"col-6 height-100%"},[n("img",{staticClass:"block width-100% height-100% object-cover",attrs:{src:e.image},on:{error:t.myDefaultImage}})])])])}}],null,!1,1172296340)})],1),t._m(0)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container max-width-adaptive-sm"},[n("div",{staticClass:"text-component line-height-lg v-space-md"},[n("p")])])}],p=(n("fb6a"),n("96cf"),n("1da1")),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"even--list"},t._l(t.events,(function(e){return n("p",t._b({key:e.id},"p",{event:e},!1),[t._t("default",null,null,e),n("br"),n("br")],2)})),0)},h=[],g={name:"events-list",props:{events:{type:Array,required:!0}}},_=g,b=Object(c["a"])(_,f,h,!1,null,null,null),y=b.exports,k=(n("d3b7"),n("bc3a")),w=n.n(k),x="https://multi-event-tutorial.herokuapp.com/api",C="FLWPUBK_TEST-ef3f5d76636c8933f6f6a358ca27ca62-X";w.a.defaults.baseURL=x;var j=w.a.create({API_URL:x,headers:{}});j.interceptors.response.use(null,(function(t){var e="/error";switch(t.response.status){case 401:e="/login";break;case 404:e="/404";break}return ct.push(e),Promise.reject(t)}));var E=j,P="/events",O={get:function(){return E.get("".concat(P))},getEvent:function(t){return E.get("".concat(P,"/").concat(t))},getTicket:function(t){return E.get("".concat(P,"/type/").concat(t))},processPayment:function(t){return E.post("".concat(P,"/payment"),t)},verifyPayment:function(t){return E.post("".concat(P,"/payment/verify"),t)}},R={events:O},T={get:function(t){return R[t]}},L=T.get("events"),S={name:"Home",components:{EventsList:y},data:function(){return{isLoading:!1,events:[]}},created:function(){this.getEvents()},methods:{getEvents:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,L.get();case 3:e=t.sent,n=e.data,this.isLoading=!1,this.events=n.data;case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),myDefaultImage:function(t){t.target.src="assets/img/img-1.jpg"}},computed:{computedEvents:function(){return this.events.slice(0,10)}}},D=S,I=(n("6c99"),Object(c["a"])(D,m,v,!1,null,"339ed076",null)),$=I.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-component text-center"},[n("p",[n("small",[n("router-link",{attrs:{to:"/"}},[t._v("Go home")])],1)])]),n("div",{staticClass:"container max-width-adaptive-md margin-bottom-lg"},[this.isLoading?n("div",[n("li",{staticClass:"stack-cards__item bg radius-lg shadow-md js-stack-cards__item",attrs:{"data-theme":"default"}})]):n("div",[n("li",{staticClass:"stack-cards__item bg radius-lg shadow-md js-stack-cards__item",attrs:{"data-theme":"default"}},[n("div",{staticClass:"grid"},[n("div",{staticClass:"col-6 flex items-center height-100%"},[n("div",{staticClass:"text-component padding-md "},[n("h2",[t._v(t._s(t.event.name))]),n("p",{staticClass:"display@xs"},[t._v("Address: "+t._s(t.event.address))]),n("p",{staticClass:"display@xs"},[t._v("Date: "+t._s(t.event.date))]),t.hasTicket?n("div",[n("p",{staticClass:"display@xs"},[t._v("Select ticket type ")]),n("div",[n("ul",[n("v-select",{attrs:{label:"name",options:t.event.event_kinds},on:{input:t.setSelected}})],1)]),n("br"),n("br")]):n("div",[t._v(" We're sorry. There are no ticket(s) available for this event yet. "),n("br"),n("br"),n("p",[n("router-link",{staticClass:"btn btn--accent",attrs:{to:"/"}},[t._v("Back to Events")])],1)])])]),n("div",{staticClass:"col-6 height-100%"},[n("img",{staticClass:"block lazy width-100% height-100% object-cover",attrs:{src:t.event.image},on:{error:t.myDefaultImage}})])])])])]),t._m(0)])},A=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container max-width-adaptive-sm"},[n("div",{staticClass:"text-component line-height-lg v-space-md"},[n("p")])])}],G=(n("6dfc"),T.get("events")),F={name:"event",data:function(){return{isLoading:!1,event:[],options:[]}},created:function(){this.getEvent()},methods:{getEvent:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.isLoading=!0,t.next=3,G.getEvent(this.$route.params.code.toLowerCase());case 3:e=t.sent,n=e.data,this.isLoading=!1,console.log(this.isLoading),this.event=n.data;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),myDefaultImage:function(t){t.target.src="assets/img/img-1.jpg"},setSelected:function(t){console.log(t.id),localStorage.setItem("event_id",t.id),ct.push("/checkout")}},computed:{computedEvents:function(){return this.event.slice(0,10)},hasTicket:function(){return this.event.event_kinds.length}}},U=F,B=(n("4c32"),Object(c["a"])(U,N,A,!1,null,"0b412d01",null)),M=B.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.event_details.active?n("div",{staticClass:"container max-width-adaptive-md margin-bottom-lg"},[n("center",[t.isLoading?n("p",[n("center",[n("small",[t._v("Loading......")])])],1):n("p",[n("small",[n("router-link",{attrs:{to:{name:"event",params:{code:t.event_details.code}}}},[t._v("Go back")])],1)])]),t.success?n("b-alert",{attrs:{variant:"success",show:""}},[t._v("Payment was completed successfully")]):t._e(),t.failed?n("b-alert",{attrs:{variant:"warning",show:""}},[t._v(t._s(this.error?this.error:"Something went wrong with this payment, please try again or send an email to hello@tonidev.net"))]):t._e(),t.show&&!t.startPayment?n("b-form",{on:{submit:[t.onSubmit,function(t){t.stopPropagation(),t.preventDefault()}],reset:t.onReset}},[n("b-form-group",{attrs:{id:"input-group-1",label:"Email address:","label-for":"input-1",description:"We'll never share your email with anyone else."}},[n("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Enter email"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Your Name:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",state:t.validation,required:"",placeholder:"Enter name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}}),n("b-form-invalid-feedback",{attrs:{state:t.validation}},[t._v("Your name must be 4-30 characters long.")]),n("b-form-valid-feedback",{attrs:{state:t.validation}},[t._v("You've got a cute name :(")])],1),n("h4",[t._v("Details of Payment")]),n("p",[t._v(" Title of Event : "+t._s(t.event_details.event_name)+" "),n("br"),t._v(" Amount: NGN "+t._s(t.event_details.price)+".00 "),n("br"),t._v(" Date: "+t._s(t.event_details.date)+" ")]),n("b-button",{attrs:{disabled:t.clicked,type:"submit",variant:"primary"}},[t._v(t._s(this.clicked?"Processsing ..... ":"Buy Ticket.."))]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[t._v("Reset")])],1):t._e(),n("center",[t.startPayment?n("div",[n("h4",[t._v("Details of Payment")]),n("p",[t._v(" Title of Event : "+t._s(t.event_details.event_name)+" "),n("br"),t._v(" Amount: NGN "+t._s(t.event_details.price)+".00 "),n("br"),t._v(" Date: "+t._s(t.event_details.date)+" ")]),t.paymentComplete?n("div",[n("a",{staticClass:"downloadButton",attrs:{href:t.buttonUrl,target:"blank"}},[t._v(" Download Receipt/Ticket ")])]):n("div",[n("Rave",{attrs:{email:t.payment.email,amount:t.payment.amount,reference:t.payment.reference,"rave-key":t.raveKey,callback:t.callback,close:t.close,metadata:t.meta,customerFirstname:t.form.name,paymentOptions:"card,barter,account,ussd",hostedPayemt:"1",customTitle:"Golang Test",currency:"NGN",country:"NG"}})],1)]):t._e()])],1):n("small",[n("center",[n("router-link",{attrs:{to:"/"}},[t._v("Go home")]),n("br"),t._v("This event does not exist or this ticket kind is sold out "),n("br")],1)],1)])},J=[],K=(n("b0c0"),n("ce91")),W=n.n(K),Y=T.get("events"),z=C,H={name:"checkout",components:{Rave:W.a},data:function(){return{raveKey:z,isLoading:!1,failed:!1,buttonUrl:"",error:"",success:!1,paymentComplete:!1,event_details:[],payment:[],meta:[{ticket:parseInt(localStorage.getItem("event_id"))}],form:{email:"",name:"",event_id:parseInt(localStorage.getItem("event_id"))},button:{text:"Buy Ticket"},clicked:!1,show:!0,startPayment:!1}},created:function(){this.getTicket()},methods:{getTicket:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){var e,n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.isLoading=!0,e=localStorage.getItem("event_id"),!e||!parseInt(e,10)){t.next=9;break}return t.next=5,Y.getTicket(e);case 5:n=t.sent,a=n.data,this.isLoading=!1,this.event_details=a.data;case 9:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSubmit:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.preventDefault(),this.clicked=!this.clicked,n=JSON.stringify(this.form),t.next=5,Y.processPayment(n);case 5:if(a=t.sent,s=a.data,this.failed=!1,200!=!s.status){t.next=13;break}return this.failed=!0,this.error=s.message,this.clicked=!1,t.abrupt("return");case 13:this.payment=s.data,this.clicked=!1,this.startPayment=!0;case 16:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),callback:function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(e){var n,a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e,a=e.tx.txRef,t.next=4,Y.verifyPayment({txref:a});case 4:s=t.sent,200==!s.data.status?this.failed=!0:("00"==n.tx.chargeResponseCode||"0"==n.tx.chargeResponseCode?(this.paymentComplete=!0,this.buttonUrl=s.data.data,this.success=!0,window.close()):(this.failed=!0,console.log("Faileddd!!!")),window.close()),window.close();case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),close:function(){console.log("Payment closed")},onReset:function(t){var e=this;t.preventDefault(),this.form.email="",this.form.name="",this.show=!1,this.$nextTick((function(){e.show=!0}))},myDefaultImage:function(t){t.target.src="assets/img/img-1.jpg"}},computed:{computedEvents:function(){return this.event_details},validation:function(){return this.form.name.length>4&&this.form.name.length<30}}},X=H,Q=(n("d1a8"),Object(c["a"])(X,q,J,!1,null,null,null)),V=Q.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._v(" 404 ")])},tt=[],et={name:"PageNotFound"},nt=et,at=Object(c["a"])(nt,Z,tt,!1,null,null,null),st=at.exports,rt=n("4a7a"),it=n.n(rt),ot=n("5f5b");n("f9e3"),n("2dd8");a["default"].component("v-select",it.a),a["default"].use(d["a"]),a["default"].use(ot["a"]);var ct=new d["a"]({routes:[{path:"/",name:"home",component:$},{path:"/event/:code",name:"event",component:M},{path:"/checkout",name:"checkout",component:V},{path:"*",component:st}]});a["default"].config.productionTip=!1,new a["default"]({el:"#app",router:ct,render:function(t){return t(u)}})},"6c99":function(t,e,n){"use strict";var a=n("f544"),s=n.n(a);s.a},"85ec":function(t,e,n){},d1a8:function(t,e,n){"use strict";var a=n("ebbd"),s=n.n(a);s.a},ebbd:function(t,e,n){},f544:function(t,e,n){}});
//# sourceMappingURL=app.140ac4b8.js.map