"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[960],{6713:function(e,r,n){n.d(r,{Cb:function(){return c},Fb:function(){return v},IQ:function(){return o},Jh:function(){return l},UF:function(){return s},WY:function(){return f}});var t=n(5861),a=n(4687),i=n.n(a),u=n(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/",u.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92"};var c=function(){var e=(0,t.Z)(i().mark((function e(r,n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/trending/movie/day",{params:{page:r,language:n}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),s=function(){var e=(0,t.Z)(i().mark((function e(r,n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(r),{params:{language:n}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,t.Z)(i().mark((function e(r,n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(r,"/credits"),{params:{language:n}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,t.Z)(i().mark((function e(r,n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(r,"/reviews"),{params:{language:n}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),f=function(){var e=(0,t.Z)(i().mark((function e(r,n){var t,a;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/movie/".concat(r,"/videos"),{params:{language:n}});case 2:return t=e.sent,a=t.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}(),v=function(){var e=(0,t.Z)(i().mark((function e(r,n,t){var a,c;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,u.Z)("3/search/movie",{params:{page:n,query:"".concat(r),language:t}});case 2:return a=e.sent,c=a.data,e.abrupt("return",c);case 5:case"end":return e.stop()}}),e)})));return function(r,n,t){return e.apply(this,arguments)}}()},2960:function(e,r,n){n.r(r),n.d(r,{default:function(){return y}});var t,a=n(5861),i=n(9439),u=n(168),c=n(4687),s=n.n(c),o=n(2791),l=n(6710),f=n.n(l),v=n(7689),p={MoreTrailersNot:"Trailer_MoreTrailersNot__-G5PT",container:"Trailer_container__YQhfz",DivMoreTrailes:"Trailer_DivMoreTrailes__VM3he",ButtonTrailes:"Trailer_ButtonTrailes__hkduq",DivButtonTrailes:"Trailer_DivButtonTrailes__tUZOB",DivPlayerName:"Trailer_DivPlayerName__Dg3Wl",h5:"Trailer_h5__CHP0J",DivPlayer1:"Trailer_DivPlayer1__7yMRX",h5_Title:"Trailer_h5_Title__3Wm0B",DivPlayer:"Trailer_DivPlayer__6K-E9"},h=n(5216),d=n(6713),m=n(184),_=(0,h.ZP)(f())(t||(t=(0,u.Z)(["\n  margin: 0 auto 10px auto;\n\n  max-width: 100%;\n\n  height: auto;\n"]))),y=function(){var e=(0,v.UO)().movieId,r=(0,o.useState)([]),n=(0,i.Z)(r,2),t=n[0],u=n[1],c=(0,o.useState)(null),l=(0,i.Z)(c,2),f=l[0],h=l[1],y=(0,o.useState)(localStorage.getItem("selectedLanguage")||"en-US"),g=(0,i.Z)(y,1)[0];(0,o.useEffect)((function(){localStorage.setItem("selectedLanguage",g);var r=function(){var r=(0,a.Z)(s().mark((function r(n){var t,a;return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,d.WY)(e,n);case 3:t=r.sent,(a=t.results).length>0&&u(a),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(0),console.error("Error fetching videos:",r.t0);case 11:case"end":return r.stop()}}),r,null,[[0,8]])})));return function(e){return r.apply(this,arguments)}}();r(g)}),[e,g]);var x=function(e){return e.includes("Official")||e.includes("Trailer")||e.includes("trailer")||e.includes("official")||e.includes("\u0442\u0440\u0435\u0439\u043b\u0435\u0440")||e.includes("\u0422\u0440\u0435\u0439\u043b\u0435\u0440")};return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("div",{children:t.map((function(e){return(0,m.jsx)("div",{className:p.DivPlayer1,children:x(e.name)&&(0,m.jsxs)("div",{className:p.DivPlayer,children:[(0,m.jsxs)("h5",{className:p.h5,children:[e.name," (",new Date(e.published_at).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),")"]}),(0,m.jsx)(_,{url:"https://www.youtube.com/watch?v=".concat(e.key),controls:!0})]})},e.key)}))}),(0,m.jsxs)("div",{className:p.DivMoreTrailes,children:[t.map((function(e){return(0,m.jsx)("div",{children:!x(e.name)&&(0,m.jsxs)("div",{className:p.DivPlayerName,children:[(0,m.jsxs)("div",{className:p.DivButtonTrailes,children:[(0,m.jsx)("button",{className:p.ButtonTrailes,onClick:function(){return r=e.key,void h(r);var r},children:"Play Video"}),(0,m.jsxs)("h5",{className:p.h5_Title,children:[e.name," (",new Date(e.published_at).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),")"]})]}),f===e.key&&(0,m.jsx)(_,{className:p.Player,url:"https://www.youtube.com/watch?v=".concat(e.key),controls:!0})]})},e.key)})),0===t.length&&(0,m.jsx)("h4",{children:" We don't have any more trailers for this movie."})]})]})}}}]);
//# sourceMappingURL=960.922e7d89.chunk.js.map