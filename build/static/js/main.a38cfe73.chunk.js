(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},38:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(27),s=n.n(a),r=n(15),l=(n(38),n(12),n(28)),o=n(29),i=n(33),u=n(32),j=n(3),b=n(7),h=n(65),p=n(4),O=Object(p.a)(),d=n(10),m=n.n(d),x=n(1);var f=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(b.a)(s,2),l=r[0],o=r[1],i=Object(c.useState)(""),u=Object(b.a)(i,2),j=u[0],p=u[1];return Object(x.jsx)("div",{className:"homie",children:Object(x.jsxs)("div",{className:"Home",children:[Object(x.jsx)("h1",{children:"WELCOME!"}),Object(x.jsx)("h2",{children:"Login"}),Object(x.jsxs)("div",{className:"form",children:[Object(x.jsx)("label",{className:"labell",children:"USERNAME:"}),Object(x.jsx)("input",{type:"text",name:"username",onChange:function(e){a(e.target.value)}}),Object(x.jsx)("label",{className:"labell",children:"PASSWORD:"}),Object(x.jsx)("input",{type:"text",name:"password",onChange:function(e){o(e.target.value)}}),Object(x.jsx)("button",{variant:"btn btn-success",target:"_blank",onClick:function(){m.a.post("https://crud-url-shortner.herokuapp.com/api/login",{user_name:n,password:l}).then((function(e){e.data.message?p(e.data.message):O.push("/url")}))},children:"LOGIN"}),Object(x.jsxs)("h4",{className:"labell",children:["NEW USER :",Object(x.jsx)(h.a,{target:"_blank",onClick:function(){return O.push("/register")},children:"Register"})," Here "]})]}),Object(x.jsx)("h1",{children:j})]})})};var g=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(b.a)(s,2),l=r[0],o=r[1],i=Object(c.useState)(""),u=Object(b.a)(i,2),j=u[0],h=u[1],p=Object(c.useRef)(null),O=document.querySelector("#output-short-link"),d=document.querySelector(".output");Object(c.useEffect)((function(){if(l){var e=setTimeout((function(){o("")}),3e3);return function(){clearTimeout(e)}}}),[l]);var f=function e(t){h(""),fetch("https://crud-url-shortner.herokuapp.com/url/",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({longUrl:n})}).then((function(e){if(200===e.status)return e.json();throw new Error("Api not responding")})).then((function(t){O.innerText=t.shortUrl,O.href=t.shortUrl,d.style.display="block",h(t),console.log(e)})).catch((function(e){console.error("Api not responding!!")}))};return Object(x.jsxs)("main",{className:"mainn",children:[Object(x.jsx)("header",{className:"header",children:Object(x.jsx)("h2",{children:"Create Short URL"})}),Object(x.jsx)("section",{className:"App",children:Object(x.jsxs)("div",{className:"form",children:[Object(x.jsx)("h2",{className:"labell",children:"Paste your long URL here:"}),Object(x.jsx)("p",{className:"error-message",children:l}),Object(x.jsx)("div",{className:"input",children:Object(x.jsx)("form",{onSubmit:function(e){e.preventDefault(),n?f({long_url:n}):o("Please Enter a link")},children:Object(x.jsxs)("div",{className:"form-control",children:[Object(x.jsx)("input",{type:"text",placeholder:"long url",value:n,onChange:function(e){return a(e.target.value)}}),Object(x.jsx)("button",{type:"submit",id:"create-short-url",children:"Shorten"})]})})}),Object(x.jsxs)("div",{className:"output",id:"output-div",children:[Object(x.jsx)("p",{className:"labell",children:"Short URL:"}),Object(x.jsx)("div",{className:"form-control",id:"output-short-link",children:Object(x.jsx)("input",{type:"text",name:"short-url",value:j,ref:p,onChange:function(e){h(e.target.value)},readOnly:!0})}),Object(x.jsx)("button",{type:"button",onClick:function(){j&&navigator.clipboard.writeText(j),m.a.post("https://crud-url-shortner.herokuapp.com/api/create-short-url",{longUrl:n,shortenedUrl:j})},children:"Copy"})]})]})})]})};var v=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),r=Object(b.a)(s,2),l=r[0],o=r[1],i=Object(c.useState)(""),u=Object(b.a)(i,2),j=u[0],h=u[1],p=Object(c.useState)(""),d=Object(b.a)(p,2),f=d[0],g=d[1];return Object(x.jsx)("div",{className:"regie",children:Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)("h1",{children:"REGISTER "}),Object(x.jsxs)("div",{className:"form1",children:[Object(x.jsx)("label",{className:"labell",children:"USERNAME:"}),Object(x.jsx)("input",{type:"text",name:"user_name",onChange:function(e){a(e.target.value)}}),Object(x.jsx)("label",{className:"labell",children:"NAME:"}),Object(x.jsx)("input",{type:"text",name:"name",onChange:function(e){o(e.target.value)}}),Object(x.jsx)("label",{className:"labell",children:"EMAIL:"}),Object(x.jsx)("input",{type:"email",name:"user_email",onChange:function(e){h(e.target.value)}}),Object(x.jsx)("label",{className:"labell",children:"PASSWORD:"}),Object(x.jsx)("input",{type:"text",name:"password",onChange:function(e){g(e.target.value)}}),Object(x.jsx)("button",{target:"_blank",onClick:function(){alert("successful!"),m.a.post("https://crud-url-shortner.herokuapp.com/api/insert",{user_name:n,name:l,password:f,user_email:j}).then((function(e){alert("successful")})),O.push("/")},children:"SUBMIT"})]})]})})},N=function(e){Object(i.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(x.jsx)(j.b,{history:O,children:Object(x.jsxs)(j.c,{children:[Object(x.jsx)(j.a,{path:"/",exact:!0,component:f}),Object(x.jsx)(j.a,{path:"/url",exact:!0,component:g}),Object(x.jsx)(j.a,{path:"/register",component:v})]})})}}]),n}(c.Component);var S=function(){return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(N,{})})};s.a.render(Object(x.jsx)(r.a,{children:Object(x.jsx)(S,{})}),document.getElementById("root"))}},[[63,1,2]]]);
//# sourceMappingURL=main.a38cfe73.chunk.js.map