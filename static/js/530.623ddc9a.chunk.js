"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{7530:function(e,t,n){n.r(t),n.d(t,{default:function(){return j}});var i=n(3433),s=n(5861),a=n(9439),o=n(4687),r=n.n(o),c=n(2791),l=n(6713),u=n(7689),d=n(1087),v={divForm:"Movies_divForm__YQVdd",box:"Movies_box__hd5an",listMovies:"Movies_listMovies__lbxuM",divGoBack:"Movies_divGoBack__3khB4",home:"Movies_home__7CsFj",home_div:"Movies_home_div__Apmeb","theme-light":"Movies_theme-light__qMBFh",input:"Movies_input__N3yRL",pagination:"Movies_pagination__0Ilwr",span_pagination:"Movies_span_pagination__s8LSs",selectedLanguage:"Movies_selectedLanguage__QPyZY"},p=n(1163),h=n(697),m=n(5313),_=n(3495),g=n(4420),x=n(6351),f=n(7344),b=n(184),j=function(){var e,t=(0,u.TH)(),n=(0,g.v9)(x.NH),o=(0,c.useState)(1),j=(0,a.Z)(o,2),w=j[0],k=j[1],M=(0,c.useState)(1),N=(0,a.Z)(M,2),Z=N[0],y=N[1],C=(0,c.useState)([]),L=(0,a.Z)(C,2),S=L[0],F=L[1],B=(0,c.useState)(""),q=(0,a.Z)(B,2),E=q[0],G=q[1],I=(0,d.lr)(),P=(0,a.Z)(I,2),H=P[0],Q=P[1],Y=null!==(e=H.get("query"))&&void 0!==e?e:"",z=(0,u.bx)().selectedLanguage,A=function(){var e=(0,s.Z)(r().mark((function e(t,n){var s,a,o;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Fb)(Y,t,n);case 3:s=e.sent,a=s.results,o=s.total_pages,F((function(e){return(0,i.Z)(a)})),y(o),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.message);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t,n){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){localStorage.setItem("selectedLanguage",z),A(w,z);var e=function(e){};return window.addEventListener("storage",e),function(){window.removeEventListener("storage",e)}}),[w,z]);return(0,b.jsxs)("div",{className:v.divGoBack,children:[(0,b.jsx)("div",{className:v.divForm,children:(0,b.jsxs)("form",{onSubmit:function(e){e.preventDefault(),E?(A(),G("")):alert("Enter your request")},children:[(0,b.jsxs)(h.Z,{className:v.box,sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 2px",gap:"5px"},children:[(0,b.jsx)(p.Z,{className:v.input,type:"text",name:"title",size:"small",sx:{m:1,width:"35ch",margin:0},style:{backgroundColor:"#7e7575",color:"white"},onChange:function(e){var t=e.target.value.trim().toLowerCase();t?(Q({query:t}),G(t)):(Q({}),G(""))},value:Y||"",id:"input-with-sx",label:"Search movies",variant:"outlined"}),(0,b.jsx)(_.Z,{className:v.button,type:"submit",variant:"outlined",style:{padding:"6.5px"},children:"Search"})]}),(0,b.jsx)(m.Z,{spacing:2,direction:"row"})]})}),(0,b.jsx)("ul",{className:v.listMovies,children:S.map((function(e,n){return(0,b.jsx)("li",{children:(0,b.jsx)(d.rU,{to:"/".concat(e.id),state:{from:t},children:(0,b.jsxs)("div",{className:v.home_div,children:[(0,b.jsx)("img",{className:"center-block img-responsive",width:"150px",height:"100%",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title,"data-reactid":".1.1.0.0.1.0.0.0"},"movie-poster"),"".concat(e.title," (").concat(e.release_date.slice(0,4),")")]})})},n)}))}),(0,b.jsxs)("div",{className:v.pagination,children:[(0,b.jsx)("button",{onClick:function(){k((function(e){return e-1}))},disabled:1===w,children:"Previous"}),(0,b.jsxs)("span",{className:v.span_pagination,children:["Page ",w," of ",Z]}),(0,b.jsx)("button",{onClick:function(){k((function(e){return e+1}))},disabled:w===Z,children:"Next"})]}),n&&(0,b.jsx)("div",{children:(0,f.Z)()})]})}}}]);
//# sourceMappingURL=530.623ddc9a.chunk.js.map