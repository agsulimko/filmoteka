"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{7530:function(e,t,a){a.r(t),a.d(t,{default:function(){return N}});var i=a(9439),n=a(2791),s=a(7689),r=a(1087),o="Movies_inputLabel__doosp",l="Movies_divForm__YQVdd",c="Movies_listMovies__lbxuM",d="Movies_divGoBack__3khB4",u="Movies_home_div__Apmeb",p="Movies_pagination__0Ilwr",m="Movies_span_pagination__s8LSs",g=a(5380),x=a(697),h=a(5313),v=a(3495),f=a(4420),_=a(1245),b=a(6351),j=a(7344),k=a(5218),w=a(184),N=function(){var e,t=(0,s.TH)(),a=(0,f.I0)(),N=(0,f.v9)(b.Fo)||[],y=(0,f.v9)(b.P2)||[],C=(0,f.v9)(b.eA),M=(0,f.v9)(b.NH),L=(0,n.useState)(1),S=(0,i.Z)(L,2),Z=S[0],q=S[1],I=(0,n.useState)(""),P=(0,i.Z)(I,2),A=P[0],E=P[1],R=(0,r.lr)(),B=(0,i.Z)(R,2),F=B[0],H=B[1],T=null!==(e=F.get("query"))&&void 0!==e?e:"",z=(0,s.bx)().selectedLanguage;(0,n.useEffect)((function(){q(1),a((0,_.lt)({page:1,language:z}))}),[a,z]),(0,n.useEffect)((function(){a(T?(0,_.ss)({query:T,page:Z,language:z}):(0,_.lt)({page:Z,language:z}))}),[a,Z,z,T]);return(0,w.jsxs)("div",{className:d,children:[(0,w.jsx)("div",{className:l,children:(0,w.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=localStorage.getItem("theme");if(!A)return H({query:""}),void k.Am.error("Enter your request",{autoClose:5e3,position:"top-center",style:{marginTop:"130px",background:"theme-dark"===t?"#333":"#efede8",color:"theme-dark"===t?"#fff":"#000"}});q(1),H({query:A})},children:[(0,w.jsxs)(x.Z,{className:"box",sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 1.5px",gap:"5px","@media screen and (min-width: 768px)":{paddingLeft:"168px",paddingRight:"168px"},"@media screen and (min-width: 1440px)":{paddingLeft:"498px",paddingRight:"498px"}},children:[(0,w.jsx)(g.Z,{className:"input",type:"text",name:"title",size:"small",sx:{m:1,width:"35ch",margin:0,borderRadius:"4px"},style:{backgroundColor:"#7e7575",color:"white"},InputLabelProps:{className:o},onChange:function(e){var t=e.target.value.trim().toLowerCase();E(t)},value:A,id:"input-with-sx",label:"Search movies",variant:"outlined"}),(0,w.jsx)(v.Z,{className:"custom-button",type:"submit",variant:"outlined",sx:{padding:"6px 125px","@media screen and (min-width: 768px)":{padding:"6px"}},children:"Search"})]}),(0,w.jsx)(h.Z,{spacing:2,direction:"row"})]})}),(0,w.jsx)("ul",{className:c,children:(T?N:y).map((function(e,a){return(0,w.jsxs)("li",{children:[M&&(0,w.jsx)(j.a,{}),(0,w.jsx)(r.rU,{to:"/".concat(e.id),state:{from:t},children:(0,w.jsxs)("div",{className:u,children:[(0,w.jsx)("img",{className:"center-block img-responsive",width:"150px",height:"100%",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title},"movie-poster"),"".concat(e.title," (").concat(e.release_date.slice(0,4),")")]})})]},a)}))}),(0,w.jsxs)("div",{className:p,children:[(0,w.jsx)("button",{onClick:function(){q((function(e){return e-1})),a((0,_.lt)({page:2*(Z-1),language:z}))},disabled:1===Z,children:"Previous"}),(0,w.jsxs)("span",{className:m,children:["Page ",Z," of ",C]}),(0,w.jsx)("button",{onClick:function(){q((function(e){return e+1})),a((0,_.lt)({page:2*Z,language:z}))},disabled:Z===C,children:"Next"})]}),M&&(0,w.jsx)(j.a,{})]})}}}]);
//# sourceMappingURL=530.50332ddb.chunk.js.map