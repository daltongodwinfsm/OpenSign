"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[9588],{44545:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>x,contentTitle:()=>u,default:()=>g,frontMatter:()=>h,metadata:()=>j,toc:()=>b});var l=a(85893),o=a(11151),n=a(58219),t=(a(62316),a(51039)),i=a.n(t),r=(a(82723),a(9487)),d=(a(41429),a(5397)),c=a(4667),m=a(9472),p=a(85162);const h={id:"get-webhook",title:"Get Webhook",description:"The Get Webhook API allow you to get webhook url",sidebar_label:"Get Webhook",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VV1r2zAU/SvafVrBidO1Y2DGWBmllJZ1kJY9pKEoyo2tRZY0SU4agv/7uLKdOCkdY4y92M79PlfnKFsIPPeQTeA7zgpjljBNYI5eOGmDNBoyuC+QXWFgbQC7+HbNuFJmzTamYsGwHANbt87KKUjAWHSc0q/nkEGOoSuegENvjfboIdvCu9GIXof9xpUQ6P2iUmxXBxIQRgfUgeK5tUqK6Eh/eEraghcFlpy+wsYiZGBmP1AESMA6KhNk07KbZB/og5M6hwTwmZdWkakIwfosTTemcoMW2qBy6nMbMhSmhLpOIMgQE6RWUuNTB+7p3Wj09AHqmmLOR+cvQT54dEybwBam0vM3/w4fOmfc79Ed9/4dEBq+g/H+JYxrveJKziMn7s0S9f9F0m8fmvY06nOpKE/zsoEUg6IfDqD27Q1Ij6JyMmwgm2zhecCtHDT+bDKtpwmUGArTcpoG5qGADNL1jt4e3Qqdj/mkhT2XfOC51PmAWzs0FrWXuVZ85olLKbcyXZ0CtehGGNOamk0cDLLbB7fyBjeQdDj7UQlIOp4C+Rxd3InUCxOTW/R3FvVY5jrubnUKL1UvPZM+uudGVCXqEM+RLYxjR9lsxj3OmdEsFBidZD8bnjJvUchFS4Ehe9SPemxKZJVHEriSeumzRz1gk7vFQgrJFd0zXgacvu02t16vX2zsJOZcyVBUM+bQmn14Ho1xrf2s3Y8TSCCgK/3dYoxuJUWn+FdapTE4bYnNRSQ2llzS6bamz8dJRDQlBWqPPSpeXH27ZWfDESQ9cvzByOnt9ZfLr+NLqkr0ao7odDgajshkjQ8l171Gvfv6+GS3e33+zdXeki/gc0it4jJKKoLZtnKYwHr/V1IYH8i03RJFHpyqazL/rNCRyKYJrLiTfEacnEzrpKMs6WeJG9qZEGhJbCuuqob3R3fKgTCvLu8hAV7RJH2pLKNU2g+q3rn0plf7UEPNAPSsk1cSPtLKbnDzaRfeeF5NaPF10bS/aV3XvwDvGZSI",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},u=void 0,j={id:"API-docs/get-webhook",title:"Get Webhook",description:"The Get Webhook API allow you to get webhook url",source:"@site/docs/API-docs/get-webhook.api.mdx",sourceDirName:"API-docs",slug:"/API-docs/get-webhook",permalink:"/docs/API-docs/get-webhook",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"get-webhook",title:"Get Webhook",description:"The Get Webhook API allow you to get webhook url",sidebar_label:"Get Webhook",hide_title:!0,hide_table_of_contents:!0,api:"eJy9VV1r2zAU/SvafVrBidO1Y2DGWBmllJZ1kJY9pKEoyo2tRZY0SU4agv/7uLKdOCkdY4y92M79PlfnKFsIPPeQTeA7zgpjljBNYI5eOGmDNBoyuC+QXWFgbQC7+HbNuFJmzTamYsGwHANbt87KKUjAWHSc0q/nkEGOoSuegENvjfboIdvCu9GIXof9xpUQ6P2iUmxXBxIQRgfUgeK5tUqK6Eh/eEraghcFlpy+wsYiZGBmP1AESMA6KhNk07KbZB/og5M6hwTwmZdWkakIwfosTTemcoMW2qBy6nMbMhSmhLpOIMgQE6RWUuNTB+7p3Wj09AHqmmLOR+cvQT54dEybwBam0vM3/w4fOmfc79Ed9/4dEBq+g/H+JYxrveJKziMn7s0S9f9F0m8fmvY06nOpKE/zsoEUg6IfDqD27Q1Ij6JyMmwgm2zhecCtHDT+bDKtpwmUGArTcpoG5qGADNL1jt4e3Qqdj/mkhT2XfOC51PmAWzs0FrWXuVZ85olLKbcyXZ0CtehGGNOamk0cDLLbB7fyBjeQdDj7UQlIOp4C+Rxd3InUCxOTW/R3FvVY5jrubnUKL1UvPZM+uudGVCXqEM+RLYxjR9lsxj3OmdEsFBidZD8bnjJvUchFS4Ehe9SPemxKZJVHEriSeumzRz1gk7vFQgrJFd0zXgacvu02t16vX2zsJOZcyVBUM+bQmn14Ho1xrf2s3Y8TSCCgK/3dYoxuJUWn+FdapTE4bYnNRSQ2llzS6bamz8dJRDQlBWqPPSpeXH27ZWfDESQ9cvzByOnt9ZfLr+NLqkr0ao7odDgajshkjQ8l171Gvfv6+GS3e33+zdXeki/gc0it4jJKKoLZtnKYwHr/V1IYH8i03RJFHpyqazL/rNCRyKYJrLiTfEacnEzrpKMs6WeJG9qZEGhJbCuuqob3R3fKgTCvLu8hAV7RJH2pLKNU2g+q3rn0plf7UEPNAPSsk1cSPtLKbnDzaRfeeF5NaPF10bS/aV3XvwDvGZSI",sidebar_class_name:"get api-method",info_path:"docs/API-docs/opensign-api-v-1",custom_edit_url:null},sidebar:"apiSidebar",previous:{title:"Get Template list",permalink:"/docs/API-docs/gettemplatelist"},next:{title:"Save or Update Webhook",permalink:"/docs/API-docs/save-update-webhook"}},x={},b=[{value:"Request",id:"request",level:2}];function f(e){const s={h2:"h2",p:"p",...(0,o.a)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("h1",{className:"openapi__heading",children:(0,l.jsx)(s.p,{children:"Get Webhook"})}),"\n",(0,l.jsx)(i(),{method:"get",path:"/webhook"}),"\n",(0,l.jsx)(s.p,{children:"The Get Webhook API allow you to get webhook url"}),"\n",(0,l.jsx)(s.h2,{id:"request",children:"Request"}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsxs)(n.Z,{children:[(0,l.jsxs)(p.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Successful operation"})}),(0,l.jsx)("div",{children:(0,l.jsx)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(p.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(p.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(c.Z,{collapsible:!1,name:"Webhook",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"https://your-webhook-url@example.com"}})})]})}),(0,l.jsx)(p.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(d.Z,{responseExample:'{\n  "Webhook": "https://your-webhook-url@example.com"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(p.default,{label:"404",value:"404",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"User not found!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(p.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(p.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"User not found!"}})})]})}),(0,l.jsx)(p.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(d.Z,{responseExample:'{\n  "error": "User not found!"\n}',language:"json"})})]})})})})]}),(0,l.jsxs)(p.default,{label:"405",value:"405",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"Invalid API Token!"})}),(0,l.jsx)("div",{children:(0,l.jsx)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(p.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(m.default,{className:"openapi-tabs__schema",children:[(0,l.jsx)(p.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(c.Z,{collapsible:!1,name:"error",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Invalid API token!"}})})]})}),(0,l.jsx)(p.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(d.Z,{responseExample:'{\n  "error": "Invalid API token!"\n}',language:"json"})})]})})})})]})]})})})]})}function g(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(f,{...e})}):f(e)}}}]);