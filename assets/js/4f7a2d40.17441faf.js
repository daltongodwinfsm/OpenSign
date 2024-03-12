"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[339],{47955:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>a});var s=t(85893),i=t(11151);const o={},c=void 0,r={id:"self-host/cloud-storage/s3",title:"s3",description:"You can create an AWS S3 bucket to store your uploaded documents using OpenSign\u2122",source:"@site/docs/self-host/cloud-storage/s3.md",sourceDirName:"self-host/cloud-storage",slug:"/self-host/cloud-storage/s3",permalink:"/docs/self-host/cloud-storage/s3",draft:!1,unlisted:!1,editUrl:"https://github.com/opensignlabs/opensign/tree/feat-docs/docs/docs/self-host/cloud-storage/s3.md",tags:[],version:"current",frontMatter:{},sidebar:"selfhostSidebar",previous:{title:"Digital Ocean",permalink:"/docs/self-host/One-click-Install/DigitalOcean"}},l={},a=[{value:"You can create an AWS S3 bucket to store your uploaded documents using OpenSign\u2122",id:"you-can-create-an-aws-s3-bucket-to-store-your-uploaded-documents-using-opensign",level:2},{value:"AWS S3 -",id:"aws-s3--",level:3}];function d(e){const n={a:"a",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"you-can-create-an-aws-s3-bucket-to-store-your-uploaded-documents-using-opensign",children:"You can create an AWS S3 bucket to store your uploaded documents using OpenSign\u2122"}),"\n",(0,s.jsx)(n.h3,{id:"aws-s3--",children:"AWS S3 -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Step 1 : Create a S3 bucket","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Login to ",(0,s.jsx)(n.a,{href:"https://aws.amazon.com/console/",children:"AWS console"})]}),"\n",(0,s.jsx)(n.li,{children:"Navigate to S3 under services"}),"\n",(0,s.jsx)(n.li,{children:'Hit "Create Bucket" button on upper right corner'}),"\n",(0,s.jsx)(n.li,{children:'Remove the check from "block all public access" checkbox(we need this in order to provide access to not-logged in users after OTP verification)'}),"\n",(0,s.jsx)(n.li,{children:"Set bucket versioning and tags as per your requirements"}),"\n",(0,s.jsx)(n.li,{children:'Hit "Create bucket" button'}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Step 2 : Create IAM user and provide access to AWS bucket","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Search for "IAM" on the search bar in AWS console'}),"\n",(0,s.jsx)(n.li,{children:"On IAM dashboard, click the number of users(count) under IAM resources table"}),"\n",(0,s.jsx)(n.li,{children:'Hit "create user" button on the upper right corner of the page'}),"\n",(0,s.jsx)(n.li,{children:"Enter the user name & click next"}),"\n",(0,s.jsx)(n.li,{children:"Click create policy, search for S3 and provide the Read, Write & list permissions"}),"\n",(0,s.jsx)(n.li,{children:'Click next and click "Create user"'}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"Step 3 : Generate Credentials"}),"\n",(0,s.jsx)(n.li,{children:"Go to IAM/Users in AWS console"}),"\n",(0,s.jsx)(n.li,{children:"Hit the hyperlink for the user created in the previous step"}),"\n",(0,s.jsx)(n.li,{children:'Click the "Security credentials" tab'}),"\n",(0,s.jsx)(n.li,{children:'Scroll down to "Access keys" and hit "Create access key"'}),"\n",(0,s.jsx)(n.li,{children:'In the next step select "Application running outside AWS"'}),"\n",(0,s.jsx)(n.li,{children:'Add a description tag if needed & hit "Create access key"'}),"\n",(0,s.jsx)(n.li,{children:'In the next step you will see "Access key" and "Secret Access key". Copy both the values.'}),"\n",(0,s.jsx)(n.li,{children:'Set the value of "Access key" to "DO_ACCESS_KEY_ID" environment variable'}),"\n",(0,s.jsx)(n.li,{children:'Set the value of "Secret Access key" to "DO_SECRET_ACCESS_KEY" environment variable'}),"\n",(0,s.jsxs)(n.li,{children:["Step 3 : Copy bucket credentials","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Visit "Amazon S3 -> Buckets" in aws console'}),"\n",(0,s.jsx)(n.li,{children:"Click the bucket created in previous steps & visit the properties tab"}),"\n",(0,s.jsx)(n.li,{children:'Under "Bucket overview" you will find the value of AWS region(for ex. ap-south-1). Set that value to env variable "DO_REGION"'}),"\n",(0,s.jsx)(n.li,{children:'You can create the value for "DO_ENDPOINT" env variable by appending the region value to amazonaws.com (for ex. s3.ap-south-1.amazonaws.com)'}),"\n",(0,s.jsxs)(n.li,{children:['You can create the value for "DO_BASEURL" by adding the bucketname in front of the endpoint value(for ex. ',(0,s.jsx)(n.a,{href:"https://bucketname.s3.ap-south-1.amazonaws.com",children:"https://bucketname.s3.ap-south-1.amazonaws.com"}),")"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Visit below link if you face any issues while following the above instructions -"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://repost.aws/knowledge-center/create-access-key",children:"https://repost.aws/knowledge-center/create-access-key"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var s=t(67294);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);