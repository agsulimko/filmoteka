"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{7530:function(e,t,a){a.r(t),a.d(t,{default:function(){return x}});var i=a(9439),n=a(2791),s=a(7689),o=a(1087),r={inputLabel:"Movies_inputLabel__doosp",divForm:"Movies_divForm__YQVdd",box:"Movies_box__hd5an",listMovies:"Movies_listMovies__lbxuM",divGoBack:"Movies_divGoBack__3khB4",home:"Movies_home__7CsFj",home_div:"Movies_home_div__Apmeb",pagination:"Movies_pagination__0Ilwr",span_pagination:"Movies_span_pagination__s8LSs",selectedLanguage:"Movies_selectedLanguage__QPyZY",button:"Movies_button__q3Y5z"},l=a(5380),c=a(697),d=a(5313),u=a(3495),p=a(4420),m=a(1245),g=a(6351),v=a(7344),_=a(5218),h=a(184),x=function(){var e,t=(0,s.TH)(),a=(0,p.I0)(),x=(0,p.v9)(g.Fo)||[],f=(0,p.v9)(g.P2)||[],b=(0,p.v9)(g.eA),j=(0,p.v9)(g.NH),k=(0,n.useState)(1),M=(0,i.Z)(k,2),w=M[0],y=M[1],N=(0,n.useState)(""),C=(0,i.Z)(N,2),Z=C[0],L=C[1],q=(0,o.lr)(),I=(0,i.Z)(q,2),S=I[0],F=I[1],P=null!==(e=S.get("query"))&&void 0!==e?e:"",z=(0,s.bx)(),B=z.selectedLanguage,A=z.theme;(0,n.useEffect)((function(){y(1),a((0,m.lt)({page:1,language:B}))}),[a,B]),(0,n.useEffect)((function(){a(P?(0,m.ss)({query:P,page:w,language:B}):(0,m.lt)({page:w,language:B}))}),[a,w,B,P]);return(0,h.jsxs)("div",{className:r.divGoBack,children:[(0,h.jsx)("div",{className:r.divForm,children:(0,h.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),!Z)return F({query:""}),void _.Am.error("Enter your request",{autoClose:5e3,position:"top-center",style:{marginTop:"130px",background:"theme-dark"===A?"#333":"#efede8",color:"theme-dark"===A?"#fff":"#000",zIndex:99999999}});y(1),F({query:Z})},children:[(0,h.jsxs)(c.Z,{className:r.box,sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 0",gap:"5px"},children:[(0,h.jsx)(l.Z,{className:r.input,type:"text",name:"title",size:"small",sx:{m:1,width:"35ch",margin:0,borderRadius:"4px"},style:{backgroundColor:"#7e7575",color:"white"},InputLabelProps:{style:{zIndex:1e5},className:r.inputLabel},onChange:function(e){var t=e.target.value.trim().toLowerCase();L(t)},value:Z,id:"input-with-sx",label:"Search movies",variant:"outlined"}),(0,h.jsx)(u.Z,{className:"custom-button",type:"submit",variant:"outlined",sx:{padding:"6px 127px","@media screen and (min-width: 768px)":{padding:"6px"}},children:"Search"})]}),(0,h.jsx)(d.Z,{spacing:2,direction:"row"})]})}),(0,h.jsx)("ul",{className:r.listMovies,children:(P?x:f).map((function(e,a){return(0,h.jsxs)("li",{children:[j&&(0,h.jsx)(v.Z,{}),(0,h.jsx)(o.rU,{to:"/".concat(e.id),state:{from:t},children:(0,h.jsxs)("div",{className:r.home_div,children:[(0,h.jsx)("img",{className:"center-block img-responsive",width:"150px",height:"100%",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title},"movie-poster"),"".concat(e.title," (").concat(e.release_date.slice(0,4),")")]})})]},a)}))}),(0,h.jsxs)("div",{className:r.pagination,children:[(0,h.jsx)("button",{onClick:function(){y((function(e){return e-1})),a((0,m.lt)({page:2*(w-1),language:B}))},disabled:1===w,children:"Previous"}),(0,h.jsxs)("span",{className:r.span_pagination,children:["Page ",w," of ",b]}),(0,h.jsx)("button",{onClick:function(){y((function(e){return e+1})),a((0,m.lt)({page:2*w,language:B}))},disabled:w===b,children:"Next"})]}),j&&(0,h.jsx)(v.Z,{})]})}}}]);
//# sourceMappingURL=530.8c338ba9.chunk.js.map