(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[0],{21:function(e,n,t){"use strict";var c=t(0),i=t(1),a=t(16),l=t(3),s=t(12),r=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}),j=r.NODE_ENV,o=r.REACT_APP_GA_TRACKING_ID;"production"===j&&s.a.initialize(o);var b=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){"production"===j&&(s.a.set({page:e}),s.a.pageview(e))}),[e]),null},u=t(5),h=t(23),d=[{index:!0,label:"Jacky Zheng",path:"/"},{label:"About",path:"/about"},{label:"Resume",path:"/resume"},{label:"Projects",path:"/projects"},{label:"Stats",path:"/stats"},{label:"Contact",path:"/contact"}],O=Object(i.lazy)((function(){return t.e(5).then(t.t.bind(null,171,7))})),m=function(){var e=Object(i.useState)(!1),n=Object(h.a)(e,2),t=n[0],a=n[1];return Object(c.jsxs)("div",{className:"hamburger-container",children:[Object(c.jsx)("nav",{className:"main",id:"hambuger-nav",children:Object(c.jsx)("ul",{children:t?Object(c.jsx)("li",{className:"menu close-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2715"})}):Object(c.jsx)("li",{className:"menu open-menu",children:Object(c.jsx)("div",{onClick:function(){return a(!t)},className:"menu-hover",children:"\u2630"})})})}),Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(c.Fragment,{}),children:Object(c.jsx)(O,{right:!0,isOpen:t,children:Object(c.jsx)("ul",{className:"hamburger-ul",children:d.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,onClick:function(){return a(!t)},children:Object(c.jsx)("h3",{className:e.index&&"index-li",children:e.label})})},e.label)}))})})})]})},x=function(){return Object(c.jsxs)("header",{id:"header",children:[Object(c.jsx)("h1",{className:"index-link",children:d.filter((function(e){return e.index})).map((function(e){return Object(c.jsx)(u.b,{to:e.path,children:e.label},e.label)}))}),Object(c.jsx)("nav",{className:"links",children:Object(c.jsx)("ul",{children:d.filter((function(e){return!e.index})).map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)(u.b,{to:e.path,children:e.label})},e.label)}))})}),Object(c.jsx)(m,{})]})},p=t(25),f=function(){return Object(c.jsxs)("section",{id:"sidebar",children:[Object(c.jsxs)("section",{id:"intro",children:[Object(c.jsx)(u.b,{to:"/",className:"logo",children:Object(c.jsx)("img",{src:"".concat("","/images/me.jpeg"),alt:""})}),Object(c.jsxs)("header",{children:[Object(c.jsx)("h2",{children:"Jacky Zheng"}),Object(c.jsx)("p",{children:Object(c.jsx)("a",{href:"mailto:jackyzheng@yahoo.com",children:"jackyzheng@yahoo.com"})})]})]}),Object(c.jsxs)("section",{className:"blurb",children:[Object(c.jsx)("h2",{children:"About"}),Object(c.jsxs)("p",{children:["Hi, I'm Jacky. I geek out on innovative technologies, global trends, and new inspirations. I am currently a senior at ",Object(c.jsx)("a",{href:"https://purdue.edu/",children:"Purdue University "})," studying Computer Science with a minor in Economics."]}),Object(c.jsx)("ul",{className:"actions",children:Object(c.jsx)("li",{children:window.location.pathname.includes("/resume")?Object(c.jsx)(u.b,{to:"/about",className:"button",children:"About Me"}):Object(c.jsx)(u.b,{to:"/resume",className:"button",children:"Learn More"})})})]}),Object(c.jsxs)("section",{id:"footer",children:[Object(c.jsx)(p.a,{}),Object(c.jsxs)("p",{className:"copyright",children:["\xa9 2022 Jacky Zheng ",Object(c.jsx)(u.b,{to:"/",children:"jacky-zheng.com"}),"."]})]})]})},g=function(){var e=Object(l.f)().pathname;return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},k=function(e){return Object(c.jsxs)(a.b,{children:[Object(c.jsx)(b,{}),Object(c.jsx)(g,{}),Object(c.jsxs)(a.a,{titleTemplate:"%s | Jacky Zheng",defaultTitle:"Jacky Zheng",defer:!1,children:[e.title&&Object(c.jsx)("title",{children:e.title}),Object(c.jsx)("meta",{name:"description",content:e.description})]}),Object(c.jsxs)("div",{id:"wrapper",children:[Object(c.jsx)(x,{}),Object(c.jsx)("div",{id:"main",children:e.children}),e.fullPage?null:Object(c.jsx)(f,{})]})]})};k.defaultProps={children:null,fullPage:!1,title:null,description:"Jacky Zheng's personal website."};n.a=k},25:function(e,n,t){"use strict";var c=t(0),i=(t(1),t(29)),a=t(30),l=t(31),s=t(32),r=t(33),j=t(34),o=[{link:"https://github.com/zheng416",label:"Github",icon:a.faGithub},{link:"https://facebook.com/jacky.zheng.14/",label:"Facebook",icon:l.faFacebookF},{link:"https://www.instagram.com/_jackyzheng/",label:"Instagram",icon:s.faInstagram},{link:"https://www.linkedin.com/in/jackyzheng99",label:"LinkedIn",icon:r.faLinkedinIn},{link:"mailto:jackyzheng@yahoo.com",label:"Email",icon:j.faEnvelope}];n.a=function(){return Object(c.jsx)("ul",{className:"icons",children:o.map((function(e){return Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:e.link,children:Object(c.jsx)(i.a,{icon:e.icon})})},e.label)}))})}},47:function(e,n,t){},48:function(e,n,t){"use strict";t.r(n);var c=t(0),i=t(1),a=t.n(i),l=t(15),s=t(5),r=t(3),j=t(21),o=(t(47),Object(i.lazy)((function(){return Promise.all([t.e(2),t.e(8)]).then(t.bind(null,167))}))),b=Object(i.lazy)((function(){return t.e(9).then(t.bind(null,168))})),u=Object(i.lazy)((function(){return t.e(10).then(t.bind(null,169))})),h=Object(i.lazy)((function(){return t.e(11).then(t.bind(null,170))})),d=Object(i.lazy)((function(){return t.e(7).then(t.bind(null,174))})),O=Object(i.lazy)((function(){return t.e(6).then(t.bind(null,172))})),m=Object(i.lazy)((function(){return Promise.all([t.e(4),t.e(12)]).then(t.bind(null,173))})),x=function(){return Object(c.jsx)(s.a,{basename:"",children:Object(c.jsx)(i.Suspense,{fallback:Object(c.jsx)(j.a,{}),children:Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{exact:!0,path:"/",component:u}),Object(c.jsx)(r.a,{path:"/about",component:o}),Object(c.jsx)(r.a,{path:"/projects",component:d}),Object(c.jsx)(r.a,{path:"/stats",component:m}),Object(c.jsx)(r.a,{path:"/contact",component:b}),Object(c.jsx)(r.a,{path:"/resume",component:O}),Object(c.jsx)(r.a,{component:h,status:404})]})})})},p=function(){return Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(x,{})})},f=document.getElementById("root");f.hasChildNodes()?Object(l.hydrate)(Object(c.jsx)(p,{}),f):Object(l.render)(Object(c.jsx)(p,{}),f)}},[[48,1,3]]]);
//# sourceMappingURL=main.e667a5ea.chunk.js.map