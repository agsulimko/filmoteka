"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[496],{6713:function(e,t,n){n.d(t,{Fb:function(){return d},IQ:function(){return u},Jh:function(){return o},UF:function(){return i},WY:function(){return l}});var r=n(5861),a=n(4687),s=n.n(a),c=n(5294);c.Z.defaults.baseURL="https://api.themoviedb.org/",c.Z.defaults.params={api_key:"0649efc971b913d6bfebf656f94b5c92"};var i=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(t),{params:{language:n}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(t,"/credits"),{params:{language:n}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(t,"/reviews"),{params:{language:n}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(s().mark((function e(t,n){var r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/movie/".concat(t,"/videos"),{params:{language:n}});case 2:return r=e.sent,a=r.data,e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),d=function(){var e=(0,r.Z)(s().mark((function e(t,n,r){var a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,c.Z)("3/search/movie",{params:{page:n,query:"".concat(t),language:r}});case 2:return a=e.sent,i=a.data,e.abrupt("return",i);case 5:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()},5496:function(e,t,n){n.r(t),n.d(t,{default:function(){return S}});var r=n(3433),a=n(5861),s=n(9439),c=n(4687),i=n.n(c),u=n(2791),o=n(7689),l=n(1087),d=n(4420),v=n(6351),p=n(6713),h="MoviesDetails_divGoBack__NYjGe",f="MoviesDetails_GoBack__rXay-",m="MoviesDetails_button_GoBack__ZGhpn",x="MoviesDetails_divDetails__MRggn",g="MoviesDetails_movieDetailsText__mvE7P",j="MoviesDetails_listCast__8uDxb",_="MoviesDetails_img__qPO0V",b="MoviesDetails_title__sF6b5",w="MoviesDetails_selectedLanguage__LnzK+",Z="MoviesDetails_svgGoBack__5+2ob",k=n(7344);var y=n.p+"static/media/sprite.6664253bba6a57891f27ac02965fbc91.svg",D=n(184),S=function(){var e,t=(0,o.TH)(),n=(0,d.v9)(v.NH),c=(0,u.useRef)(null!==(e=t.state&&t.state.from)&&void 0!==e?e:"/movies"),S=(0,o.UO)().movieId,U=(0,u.useState)(localStorage.getItem("selectedLanguage")||"en-US"),M=(0,s.Z)(U,2),N=M[0],L=M[1],G=(0,u.useState)(null),E=(0,s.Z)(G,2),F=E[0],R=E[1],A=(0,u.useState)(null),C=(0,s.Z)(A,2),I=C[0],B=C[1],J=(0,u.useState)(null),O=(0,s.Z)(J,2),H=O[0],T=O[1],q=(0,u.useState)(null),P=(0,s.Z)(q,2),V=P[0],Y=P[1],z=(0,u.useState)(null),K=(0,s.Z)(z,2),Q=K[0],W=K[1],X=(0,u.useState)([]),$=(0,s.Z)(X,2),ee=$[0],te=$[1],ne=(0,u.useState)(""),re=(0,s.Z)(ne,2),ae=re[0],se=re[1],ce=function(){var e=(0,a.Z)(i().mark((function e(t){var n,a,c,u,o,l,d,v,h,f,m,x,g,j;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.UF)(S,t);case 3:n=e.sent,a=n.poster_path,c=n.title,u=n.overview,o=n.release_date,l=n.vote_average,d=n.genres,R(c),v=o.split("-"),h=(0,s.Z)(v,3),f=h[0],m=h[1],x=h[2],g=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(m,10)-1],j="".concat(x," ").concat(g," ").concat(f),T(j),B(a),Y(u),W(Math.round(10*l)),te((function(e){return(0,r.Z)(d)})),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(0),se(ae.message);case 25:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(t){return e.apply(this,arguments)}}();return(0,u.useEffect)((function(){localStorage.setItem("selectedLanguage",N),ce(N);var e=function(e){"selectedLanguage"===e.key&&L(e.newValue)};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[S,N]),(0,D.jsxs)("div",{className:h,children:[(0,D.jsxs)("select",{className:w,value:N,onChange:function(e){return L(e.target.value)},children:[(0,D.jsx)("option",{value:"en-US",children:"En"}),(0,D.jsx)("option",{value:"de-DE",children:"De"}),(0,D.jsx)("option",{value:"uk-UA",children:"Uk"}),(0,D.jsx)("option",{value:"ru-RU",children:"Ru"}),(0,D.jsx)("option",{value:"ar-SA",children:"\u0627\u0644\u0639\u0631\u0628\u064a\u0629"})]}),(0,D.jsx)(l.rU,{className:f,to:c.current,children:(0,D.jsxs)("button",{className:m,type:"button",children:[(0,D.jsx)("span",{children:(0,D.jsx)("svg",{className:Z,children:(0,D.jsx)("use",{href:"".concat(y,"#icon-arrow-left-gray")})})}),"Go back"]})}),(0,D.jsx)("div",{className:x,children:(0,D.jsxs)("div",{className:g,children:[" ",(0,D.jsx)("img",{className:_,width:"250px",src:"https://image.tmdb.org/t/p/w500/".concat(I),alt:F,"data-reactid":".1.1.0.0.1.0.0.0"},"movie-poster"),(0,D.jsx)("h2",{children:"".concat(F)}),(0,D.jsx)("h4",{children:H}),(0,D.jsxs)("p",{children:["User Score:"," ".concat(Q,"%")]}),(0,D.jsx)("h3",{children:"Overview"}),(0,D.jsx)(D.Fragment,{children:V}),(0,D.jsx)("h3",{children:"Genres"}),ee.map((function(e,t){return(0,D.jsxs)("p",{children:[e.name," "]},t)}))]})}),(0,D.jsxs)("div",{children:[(0,D.jsx)("p",{className:b,children:"Additional information"}),(0,D.jsxs)("ul",{className:j,children:[(0,D.jsx)("li",{children:(0,D.jsx)(l.rU,{to:"trailer",state:{selectedLanguage:N},children:"Trailer"})}),(0,D.jsx)("li",{children:(0,D.jsx)(l.rU,{to:"cast",state:{selectedLanguage:N},children:"Cast"})}),(0,D.jsx)("li",{children:(0,D.jsx)(l.rU,{to:"reviews",state:{selectedLanguage:N},children:"Reviews"})}),(0,D.jsx)("li",{children:(0,D.jsx)(l.rU,{to:"homepage",children:"Home page"})})]}),(0,D.jsx)(u.Suspense,{fallback:(0,D.jsx)("div",{children:(0,k.Z)()}),children:(0,D.jsx)(o.j3,{context:{selectedLanguage:N}})})]}),n&&(0,D.jsx)("div",{children:(0,k.Z)()})]})}}}]);
//# sourceMappingURL=496.c1ff6e3a.chunk.js.map