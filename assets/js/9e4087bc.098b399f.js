"use strict";(self.webpackChunkmy_docusaurus_website=self.webpackChunkmy_docusaurus_website||[]).push([[711],{9331:(e,s,r)=>{r.r(s),r.d(s,{default:()=>m});r(6540);var t=r(8774),a=r(1312),i=r(1213),n=r(6266),c=r(781),l=r(1107),d=r(4848);function h(e){let{year:s,posts:r}=e;const a=(0,n.i)({day:"numeric",month:"long",timeZone:"UTC"});return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(l.A,{as:"h3",id:s,children:s}),(0,d.jsx)("ul",{children:r.map((e=>{return(0,d.jsx)("li",{children:(0,d.jsxs)(t.A,{to:e.metadata.permalink,children:[(s=e.metadata.date,a.format(new Date(s)))," - ",e.metadata.title]})},e.metadata.date);var s}))})]})}function o(e){let{years:s}=e;return(0,d.jsx)("section",{className:"margin-vert--lg",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:s.map(((e,s)=>(0,d.jsx)("div",{className:"col col--4 margin-vert--lg",children:(0,d.jsx)(h,{...e})},s)))})})})}function m(e){let{archive:s}=e;const r=(0,a.T)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),t=(0,a.T)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),n=function(e){const s=e.reduce(((e,s)=>{const r=s.metadata.date.split("-")[0],t=e.get(r)??[];return e.set(r,[s,...t])}),new Map);return Array.from(s,(e=>{let[s,r]=e;return{year:s,posts:r}}))}(s.blogPosts);return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.be,{title:r,description:t}),(0,d.jsxs)(c.A,{children:[(0,d.jsx)("header",{className:"hero hero--primary",children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(l.A,{as:"h1",className:"hero__title",children:r}),(0,d.jsx)("p",{className:"hero__subtitle",children:t})]})}),(0,d.jsx)("main",{children:n.length>0&&(0,d.jsx)(o,{years:n})})]})]})}}}]);