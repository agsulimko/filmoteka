"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[530],{7530:function(e,a,t){t.r(a),t.d(a,{default:function(){return x}});var i=t(9439),n=t(2791),s=t(7689),o=t(1087),l={inputLabel:"Movies_inputLabel__doosp",divForm:"Movies_divForm__YQVdd",box:"Movies_box__hd5an",listMovies:"Movies_listMovies__lbxuM",divGoBack:"Movies_divGoBack__3khB4",home:"Movies_home__7CsFj",home_div:"Movies_home_div__Apmeb",pagination:"Movies_pagination__0Ilwr",span_pagination:"Movies_span_pagination__s8LSs",selectedLanguage:"Movies_selectedLanguage__QPyZY",button:"Movies_button__q3Y5z"},r=t(1163),c=t(697),u=t(5313),d=t(3495),p=t(4420),g=t(1245),v=t(6351),_=t(7344),m=t(184),x=function(){var e,a=(0,s.TH)(),t=(0,p.I0)(),x=(0,p.v9)(v.Fo)||[],h=(0,p.v9)(v.P2)||[],f=(0,p.v9)(v.eA),b=(0,p.v9)(v.NH),j=(0,n.useState)(1),M=(0,i.Z)(j,2),k=M[0],w=M[1],y=(0,n.useState)(""),N=(0,i.Z)(y,2),Z=N[0],C=N[1],L=(0,o.lr)(),q=(0,i.Z)(L,2),S=q[0],F=q[1],I=null!==(e=S.get("query"))&&void 0!==e?e:"",P=(0,s.bx)().selectedLanguage;(0,n.useEffect)((function(){w(1),t((0,g.lt)({page:1,language:P}))}),[t,P]),(0,n.useEffect)((function(){!function(e){var a=e.query,i=e.page,n=e.language;t((0,g.ss)({query:a,page:i,language:n}))}({query:I,page:k,language:P})}),[t,k,P,I]);return(0,m.jsxs)("div",{className:l.divGoBack,children:[(0,m.jsx)("div",{className:l.divForm,children:(0,m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),Z?(w(1),F({query:Z})):alert("Enter your request")},children:[(0,m.jsxs)(c.Z,{className:l.box,sx:{display:"flex",alignItems:"center",justifyContent:"center",padding:"10px 0",gap:"5px"},children:[(0,m.jsx)(r.Z,{className:l.input,type:"text",name:"title",size:"small",sx:{m:1,width:"35ch",margin:0,borderRadius:"4px","& fieldset":{border:"none"}},style:{backgroundColor:"#7e7575",color:"white"},InputLabelProps:{style:{zIndex:1e5},className:l.inputLabel},onChange:function(e){var a=e.target.value.trim().toLowerCase();C(a)},value:Z,id:"input-with-sx",label:"Search movies",variant:"outlined"}),(0,m.jsx)(d.Z,{type:"submit",variant:"outlined",sx:{padding:"6px 127px","@media screen and (min-width: 768px)":{padding:"6px"}},children:"Search"})]}),(0,m.jsx)(u.Z,{spacing:2,direction:"row"})]})}),(0,m.jsx)("ul",{className:l.listMovies,children:(I?x:h).map((function(e,t){return(0,m.jsxs)("li",{children:[b&&(0,m.jsx)(_.Z,{}),(0,m.jsx)(o.rU,{to:"/".concat(e.id),state:{from:a},children:(0,m.jsxs)("div",{className:l.home_div,children:[(0,m.jsx)("img",{className:"center-block img-responsive",width:"150px",height:"100%",src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title},"movie-poster"),"".concat(e.title," (").concat(e.release_date.slice(0,4),")")]})})]},t)}))}),(0,m.jsxs)("div",{className:l.pagination,children:[(0,m.jsx)("button",{onClick:function(){w((function(e){return e-1})),t((0,g.lt)({page:2*(k-1),language:P}))},disabled:1===k,children:"Previous"}),(0,m.jsxs)("span",{className:l.span_pagination,children:["Page ",k," of ",f]}),(0,m.jsx)("button",{onClick:function(){w((function(e){return e+1})),t((0,g.lt)({page:2*k,language:P}))},disabled:k===f,children:"Next"})]}),b&&(0,m.jsx)(_.Z,{})]})}}}]);
//# sourceMappingURL=530.a4cf62c1.chunk.js.map