"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[496],{6713:function(e,t,r){r.d(t,{Fb:function(){return d},IQ:function(){return u},Jh:function(){return o},UF:function(){return i},WY:function(){return l}});var n=r(5861),a=r(4687),s=r.n(a),c=r(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/",c.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92"};var i=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(t),{params:{language:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(t,"/credits"),{params:{language:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(t,"/reviews"),{params:{language:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t,r){var n,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(t,"/videos"),{params:{language:r}});case 2:return n=e.sent,a=n.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(s().mark((function e(t,r,n){var a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/search/movie",{params:{page:r,query:"".concat(t),language:n}});case 2:return a=e.sent,i=a.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t,r,n){return e.apply(this,arguments)}}()},5496:function(e,t,r){r.r(t),r.d(t,{default:function(){return D}});var n=r(3433),a=r(5861),s=r(9439),c=r(4687),i=r.n(c),u=r(2791),o=r(7689),l=r(1087),d=r(4420),p=r(6351),v=r(6713),f="MoviesDetails_divGoBack__NYjGe",h="MoviesDetails_GoBack__rXay-",m="MoviesDetails_button_GoBack__ZGhpn",x="MoviesDetails_divDetails__MRggn",g="MoviesDetails_movieDetailsText__mvE7P",_="MoviesDetails_listCast__8uDxb",b="MoviesDetails_img__qPO0V",j="MoviesDetails_title__sF6b5",w="MoviesDetails_svgGoBack__5+2ob",Z=r(7344);var k=r.p+"static/media/sprite.6664253bba6a57891f27ac02965fbc91.svg",y=r(184),D=function(){var e,t=(0,o.TH)(),r=(0,d.v9)(p.NH),c=(0,u.useRef)(null!==(e=t.state&&t.state.from)&&void 0!==e?e:"/movies"),D=(0,o.UO)().movieId,M=(0,u.useState)(null),N=(0,s.Z)(M,2),S=N[0],U=N[1],L=(0,u.useState)(null),G=(0,s.Z)(L,2),F=G[0],B=G[1],C=(0,u.useState)(null),E=(0,s.Z)(C,2),I=E[0],J=E[1],O=(0,u.useState)(null),R=(0,s.Z)(O,2),A=R[0],H=R[1],T=(0,u.useState)(null),q=(0,s.Z)(T,2),P=q[0],Y=q[1],Q=(0,u.useState)([]),V=(0,s.Z)(Q,2),W=V[0],X=V[1],z=(0,u.useState)(""),K=(0,s.Z)(z,2),$=K[0],ee=K[1],te=(0,o.bx)().selectedLanguage,re=function(){var e=(0,a.Z)(i().mark((function e(t){var r,a,c,u,o,l,d,p,f,h,m,x,g,_;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.UF)(D,t);case 3:r=e.sent,a=r.poster_path,c=r.title,u=r.overview,o=r.release_date,l=r.vote_average,d=r.genres,U(c),p=o.split("-"),f=(0,s.Z)(p,3),h=f[0],m=f[1],x=f[2],g=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(m,10)-1],_="".concat(x," ").concat(g," ").concat(h),J(_),B(a),H(u),Y(Math.round(10*l)),X((function(e){return(0,n.Z)(d)})),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),ee($.message);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){localStorage.setItem("selectedLanguage",te),re(te);var e=function(e){};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[D,te]),(0,y.jsxs)("div",{className:f,children:[(0,y.jsx)(l.rU,{className:h,to:c.current,children:(0,y.jsxs)("button",{className:m,type:"button",children:[(0,y.jsx)("span",{children:(0,y.jsx)("svg",{className:w,children:(0,y.jsx)("use",{href:"".concat(k,"#icon-arrow-left-gray")})})}),"Go back"]})}),(0,y.jsx)("div",{className:x,children:(0,y.jsxs)("div",{className:g,children:[" ",(0,y.jsx)("img",{className:b,src:"https://image.tmdb.org/t/p/w500/".concat(F),alt:S,"data-reactid":".1.1.0.0.1.0.0.0"},"movie-poster"),(0,y.jsx)("h2",{children:"".concat(S)}),(0,y.jsx)("h4",{children:I}),(0,y.jsxs)("p",{children:["User Score:"," ".concat(P,"%")]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)(y.Fragment,{children:A}),(0,y.jsx)("h3",{children:"Genres"}),W.map((function(e,t){return(0,y.jsxs)("p",{children:[e.name," "]},t)}))]})}),(0,y.jsxs)("div",{children:[(0,y.jsx)("p",{className:j,children:"Additional information"}),(0,y.jsxs)("ul",{className:_,children:[(0,y.jsx)("li",{children:(0,y.jsx)(l.rU,{to:"trailer",state:{selectedLanguage:te},children:"Trailer"})}),(0,y.jsx)("li",{children:(0,y.jsx)(l.rU,{to:"cast",state:{selectedLanguage:te},children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(l.rU,{to:"reviews",state:{selectedLanguage:te},children:"Reviews"})}),(0,y.jsx)("li",{children:(0,y.jsx)(l.rU,{to:"homepage",children:"Home page"})})]}),(0,y.jsx)(u.Suspense,{fallback:(0,y.jsx)("div",{children:(0,Z.Z)()}),children:(0,y.jsx)(o.j3,{context:{selectedLanguage:te}})})]}),r&&(0,y.jsx)("div",{children:(0,Z.Z)()})]})}}}]);
//# sourceMappingURL=496.e0de2fd0.chunk.js.map