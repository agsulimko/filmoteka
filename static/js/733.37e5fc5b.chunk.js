"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{6713:function(e,n,r){r.d(n,{Cb:function(){return s},Fb:function(){return v},IQ:function(){return i},Jh:function(){return p},UF:function(){return o},WY:function(){return f}});var t=r(5861),a=r(4687),u=r.n(a),c=r(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/",c.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92"};var s=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/trending/movie/day",{params:{page:n,language:r}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(n),{params:{language:r}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(n,"/credits"),{params:{language:r}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(n,"/reviews"),{params:{language:r}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n,r){var t,a;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(n,"/videos"),{params:{language:r}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,r){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(u().mark((function e(n,r,t){var a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/search/movie",{params:{page:r,query:"".concat(n),language:t}});case 2:return a=e.sent,s=a.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}()},733:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var t=r(3433),a=r(5861),u=r(9439),c=r(4687),s=r.n(c),o=r(2791),i=r(6713),p=r(7689),f="Reviews_ReviewsNot__-quJB",v="Reviews_container__gfHkj",l=r(184),d=function(){var e=(0,p.UO)().movieId,n=(0,o.useState)(localStorage.getItem("selectedLanguage")||"en-US"),r=(0,u.Z)(n,1)[0],c=(0,o.useState)([]),d=(0,u.Z)(c,2),h=d[0],m=d[1],g=function(){var n=(0,a.Z)(s().mark((function n(r){var a,u;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Jh)(e,r);case 3:a=n.sent,u=a.results,m((function(e){return(0,t.Z)(u)})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){g(r)}),[r]),h.length?(0,l.jsx)("div",{className:v,children:h.map((function(e,n){return(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Author: ".concat(e.author,".")}),(0,l.jsx)("p",{children:e.content})]},n)}))}):(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:f,children:"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=733.37e5fc5b.chunk.js.map