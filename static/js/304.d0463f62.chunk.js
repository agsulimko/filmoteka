"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[304],{6713:function(e,n,t){t.d(n,{Cb:function(){return s},Fb:function(){return f},IQ:function(){return i},Jh:function(){return p},UF:function(){return o},WY:function(){return l}});var r=t(5861),a=t(4687),c=t.n(a),u=t(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/",u.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92"};var s=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/trending/movie/day",{params:{page:n,language:t}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(n),{params:{language:t}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),i=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(n,"/credits"),{params:{language:t}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(n,"/reviews"),{params:{language:t}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(n,"/videos"),{params:{language:t}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n,t,r){var a,s;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/search/movie",{params:{page:t,query:"".concat(n),language:r}});case 2:return a=e.sent,s=a.data,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})));return function(n,t,r){return e.apply(this,arguments)}}()},6304:function(e,n,t){t.r(n),t.d(n,{default:function(){return x}});var r=t(5861),a=t(9439),c=t(4687),u=t.n(c),s=t(2791),o=t(6713),i=t(7689),p=t(1087),l="Home_homeMovies__WfhNE",f="Home_home__uEIM2",d="Home_home_div__fc6iF",v="Home_pagination__e2Qaa",m="Home_span_pagination__pgU+v",h="Home_selectedLanguage__3B7bq",g=t(184),x=function(){var e=(0,i.TH)(),n=(0,s.useState)([]),t=(0,a.Z)(n,2),c=t[0],x=t[1],_=(0,s.useState)(1),w=(0,a.Z)(_,2),b=w[0],k=w[1],Z=(0,s.useState)(1),j=(0,a.Z)(Z,2),y=j[0],N=j[1],U=(0,s.useState)(localStorage.getItem("selectedLanguage")||"en-US"),S=(0,a.Z)(U,2),C=S[0],E=S[1],H=function(){var e=(0,r.Z)(u().mark((function e(n,t){var r,a,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,o.Cb)(n,t);case 3:r=e.sent,a=r.results,c=r.total_pages,x(a),N(c),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(n,t){return e.apply(this,arguments)}}();(0,s.useEffect)((function(){localStorage.setItem("selectedLanguage",C),H(b,C);var e=function(e){"selectedLanguage"===e.key&&E(e.newValue)};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[C]);return(0,g.jsxs)("div",{className:l,children:[(0,g.jsx)("section",{className:h,children:(0,g.jsxs)("select",{value:C,onChange:function(e){return E(e.target.value)},children:[(0,g.jsx)("option",{value:"en-US",children:"En"}),(0,g.jsx)("option",{value:"de-DE",children:"De"}),(0,g.jsx)("option",{value:"uk-UA",children:"Uk"}),(0,g.jsx)("option",{value:"ru-RU",children:"Ru"})]})}),(0,g.jsx)("h1",{children:"Trending today"}),(0,g.jsx)("div",{className:f,children:c.map((function(n,t){return(0,g.jsx)(p.rU,{to:"".concat(n.id),state:{from:e},children:(0,g.jsxs)("div",{className:d,children:[(0,g.jsx)("img",{className:"center-block img-responsive",width:"150px",height:"100%",src:"https://image.tmdb.org/t/p/w500/".concat(n.poster_path),alt:n.title,"data-reactid":".1.1.0.0.1.0.0.0"},"movie-poster"),"".concat(n.title," (").concat(n.release_date.slice(0,4),")")]})},t)}))}),(0,g.jsxs)("div",{className:v,children:[(0,g.jsx)("button",{onClick:function(){k((function(e){return e-1}))},disabled:1===b,children:"Previous"}),(0,g.jsxs)("span",{className:m,children:["Page ",b," of ",y]}),(0,g.jsx)("button",{onClick:function(){k((function(e){return e+1}))},disabled:b===y,children:"Next"})]})]})}}}]);
//# sourceMappingURL=304.d0463f62.chunk.js.map