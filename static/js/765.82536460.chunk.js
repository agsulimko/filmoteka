"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{6713:function(t,A,e){e.d(A,{Fb:function(){return o},IQ:function(){return s},Jh:function(){return p},UF:function(){return c},WY:function(){return i}});var r=e(5861),n=e(4687),a=e.n(n),u=e(5294);u.Z.defaults.baseURL="https://api.themoviedb.org/",u.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92"};var c=function(){var t=(0,r.Z)(a().mark((function t(A,e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("3/movie/".concat(A),{params:{language:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(A,e){return t.apply(this,arguments)}}(),s=function(){var t=(0,r.Z)(a().mark((function t(A,e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("3/movie/".concat(A,"/credits"),{params:{language:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(A,e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(a().mark((function t(A,e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("3/movie/".concat(A,"/reviews"),{params:{language:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(A,e){return t.apply(this,arguments)}}(),i=function(){var t=(0,r.Z)(a().mark((function t(A,e){var r,n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("3/movie/".concat(A,"/videos"),{params:{language:e}});case 2:return r=t.sent,n=r.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(A,e){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(a().mark((function t(A,e,r){var n,c;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)("3/search/movie",{params:{page:e,query:"".concat(A),language:r}});case 2:return n=t.sent,c=n.data,t.abrupt("return",c);case 5:case"end":return t.stop()}}),t)})));return function(A,e,r){return t.apply(this,arguments)}}()},8765:function(t,A,e){e.r(A),e.d(A,{default:function(){return b}});var r=e(3433),n=e(5861),a=e(9439),u=e(4687),c=e.n(u),s=e(2791),p=e(6713),i=e(7689),o="Cast_divCast__qO2oy",m="Cast_cardCast__gpxKx",f="Cast_text__WPJ4q",d=e(184),b=function(){var t=(0,i.UO)().movieId,A=(0,s.useState)([]),e=(0,a.Z)(A,2),u=e[0],b=e[1],v=(0,i.bx)().selectedLanguage,l=function(){var A=(0,n.Z)(c().mark((function A(e){var n,a;return c().wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.prev=0,A.next=3,(0,p.IQ)(t,e);case 3:n=A.sent,a=n.cast,b((function(t){return(0,r.Z)(a)})),A.next=11;break;case 8:A.prev=8,A.t0=A.catch(0),console.log(A.t0.message);case 11:case"end":return A.stop()}}),A,null,[[0,8]])})));return function(t){return A.apply(this,arguments)}}();return(0,s.useEffect)((function(){localStorage.setItem("selectedLanguage",v),l(v)}),[v]),(0,d.jsx)("div",{className:o,children:u.map((function(t,A){return t?(0,d.jsxs)("div",{className:m,children:[(0,d.jsx)("img",{className:"center-block img-responsive",width:"150px",src:t.profile_path?"https://image.tmdb.org/t/p/w500/".concat(t.profile_path):"data:image/jpeg;base64,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",alt:t.name}),(0,d.jsx)("p",{className:f,children:t.name}),(0,d.jsx)("p",{className:f,children:"Character: ".concat(t.character)})]},A):null}))})}}}]);
//# sourceMappingURL=765.82536460.chunk.js.map