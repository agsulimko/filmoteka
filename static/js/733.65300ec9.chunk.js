"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[733],{6713:function(e,n,r){r.d(n,{Cb:function(){return s},Fb:function(){return p},IQ:function(){return i},Jh:function(){return f},UF:function(){return o}});var t=r(5861),a=r(4687),u=r.n(a),c=r(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/",c.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92",language:"en-US"};var s=function(){var e=(0,t.Z)(u().mark((function e(n,r,t){var a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/trending/movie/day",{params:{page:n,limit:r}});case 2:return a=e.sent,s=a.data,console.log("getAllMoviesTrending=",s),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(n),{});case 2:return r=e.sent,t=r.data,console.log("getMoviesTrending=",t),e.abrupt("return",t);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),i=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(n,"/credits"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(u().mark((function e(n){var r,t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(n,"/reviews"));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,t.Z)(u().mark((function e(n,r,t){var a,s;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/search/movie",{params:{page:r,limit:t,query:"".concat(n)}});case 2:return a=e.sent,s=a.data,console.log("getAllMovies=>>",s),e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(n,r,t){return e.apply(this,arguments)}}()},733:function(e,n,r){r.r(n),r.d(n,{default:function(){return d}});var t=r(3433),a=r(5861),u=r(9439),c=r(4687),s=r.n(c),o=r(2791),i=r(6713),f=r(7689),p="Reviews_ReviewsNot__-quJB",v="Reviews_container__gfHkj",l=r(184),d=function(){var e=(0,f.UO)().movieId,n=(0,o.useState)([]),r=(0,u.Z)(n,2),c=r[0],d=r[1],h=function(){var n=(0,a.Z)(s().mark((function n(){var r,a;return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,i.Jh)(e);case 3:r=n.sent,a=r.results,d((function(e){return(0,t.Z)(a)})),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.log(n.t0.message);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(){return n.apply(this,arguments)}}();return(0,o.useEffect)((function(){h()}),[]),c.length?(0,l.jsx)("div",{className:v,children:c.map((function(e,n){return(0,l.jsxs)("div",{children:[(0,l.jsx)("p",{children:"Author: ".concat(e.author,".")}),(0,l.jsx)("p",{children:e.content})]},n)}))}):(0,l.jsx)("div",{children:(0,l.jsx)("p",{className:p,children:"We don't have any reviews for this movie."})})}}}]);
//# sourceMappingURL=733.65300ec9.chunk.js.map