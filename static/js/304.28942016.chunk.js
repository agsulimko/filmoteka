"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{6713:function(e,t,r){r.d(t,{Cb:function(){return u},Fb:function(){return f},IQ:function(){return i},Jh:function(){return p},UF:function(){return o}});var n=r(5861),a=r(4687),c=r.n(a),s=r(5294);s.Z.defaults.baseURL="https://api.themoviedb.org/",s.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92",language:"en-US"};var u=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/trending/movie/day",{});case 2:return t=e.sent,r=t.data,console.log("getAllMoviesTrending=",r),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t),{});case 2:return r=e.sent,n=r.data,console.log("getMoviesTrending=",n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t,"/credits"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/movie/".concat(t,"/reviews"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)("3/search/movie",{params:{query:"".concat(t)}});case 2:return r=e.sent,n=r.data,console.log("getAllMovies=>>",n),e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},6304:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(3433),a=r(5861),c=r(9439),s=r(4687),u=r.n(s),o=r(2791),i=r(6713),p=r(7689),f=r(1087),l="Home_homeMovies__WfhNE",v="Home_home__uEIM2",d="Home_home_div__fc6iF",h=r(184),m=function(){var e=(0,p.TH)(),t=(0,o.useState)([]),r=(0,c.Z)(t,2),s=r[0],m=r[1],x=function(){var e=(0,a.Z)(u().mark((function e(){var t,r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,i.Cb)();case 3:t=e.sent,r=t.results,m((function(e){return(0,n.Z)(r)})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){x()}),[]),(0,h.jsxs)("div",{className:l,children:[(0,h.jsx)("h1",{children:"Trending today"}),(0,h.jsx)("div",{className:v,children:s.map((function(t,r){return(0,h.jsx)(f.rU,{to:"".concat(t.id),state:{from:e},children:(0,h.jsxs)("div",{className:d,children:[(0,h.jsx)("img",{className:"center-block img-responsive",width:"150px",height:"100%",src:"https://image.tmdb.org/t/p/w500/".concat(t.poster_path),alt:t.title,"data-reactid":".1.1.0.0.1.0.0.0"},"movie-poster"),"".concat(t.title," (").concat(t.release_date.slice(0,4),")")]})},r)}))}),(0,h.jsx)("script",{src:"script.js"})]})}}}]);
//# sourceMappingURL=304.28942016.chunk.js.map