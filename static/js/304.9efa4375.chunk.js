"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{6713:function(e,t,n){n.d(t,{Cb:function(){return u},Fb:function(){return f},IQ:function(){return i},Jh:function(){return p},UF:function(){return o}});var r=n(5861),a=n(4687),c=n.n(a),s=n(5294);s.Z.defaults.baseURL="https://api.themoviedb.org/",s.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92",language:"en-US"};var u=function(){var e=(0,r.Z)(c().mark((function e(t,n,r){var a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/trending/movie/day",{params:{page:t,limit:n}});case 2:return a=e.sent,u=a.data,console.log("getAllMoviesTrending=",u),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t),{});case 2:return n=e.sent,r=n.data,console.log("getMoviesTrending=",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t,"/credits"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(t){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t,"/reviews"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(t,n,r){var a,u;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/search/movie",{params:{page:n,limit:r,query:"".concat(t)}});case 2:return a=e.sent,u=a.data,console.log("getAllMovies=>>",u),e.abrupt("return",u);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},6304:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var r=n(5861),a=n(9439),c=n(4687),s=n.n(c),u=n(2791),o=n(6713),i=n(7689),p=n(1087),f="Home_homeMovies__WfhNE",l="Home_home__uEIM2",d="Home_home_div__fc6iF",v="Home_pagination__e2Qaa",m="Home_span_pagination__pgU+v",h=n(184),g=function(){var e=(0,i.TH)(),t=(0,u.useState)([]),n=(0,a.Z)(t,2),c=n[0],g=n[1],x=(0,u.useState)(1),_=(0,a.Z)(x,2),b=_[0],w=_[1],k=(0,u.useState)(1),Z=(0,a.Z)(k,2),j=Z[0],y=Z[1],N=function(){var e=(0,r.Z)(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Cb)(t);case 3:n=e.sent,r=n.results,a=n.total_pages,g(r),y(a),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}();(0,u.useEffect)((function(){N(b)}),[b]);return(0,h.jsxs)("div",{className:f,children:[(0,h.jsx)("h1",{children:"Trending today"}),(0,h.jsx)("div",{className:l,children:c.map((function(t,n){return(0,h.jsx)(p.rU,{to:"".concat(t.id),state:{from:e},children:(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("img",{className:"center-block img-responsive",width:"150px",height:"100%",src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title,"data-reactid":".1.1.0.0.1.0.0.0"},"movie-poster"),"".concat(t.title," (").concat(t.release_date.slice(0,4),")")]})},n)}))}),(0,h.jsxs)("div",{className:v,children:[(0,h.jsx)("button",{onClick:function(){w((function(e){return e-1}))},disabled:1===b,children:"Previous"}),(0,h.jsxs)("span",{className:m,children:["Page ",b," of ",j]}),(0,h.jsx)("button",{onClick:function(){w((function(e){return e+1}))},disabled:b===j,children:"Next"})]})]})}}}]);
//# sourceMappingURL=304.9efa4375.chunk.js.map