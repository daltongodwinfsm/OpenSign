"use strict";(self.webpackChunkOpenSign_Docs=self.webpackChunkOpenSign_Docs||[]).push([[8781],{44907:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=t(85893),o=t(11151);const i={title:"Self-host OpenSign\u2122 with Docker on Linux/MacOS/Windows"},r=void 0,c={id:"self-host/docker/run-locally",title:"Self-host OpenSign\u2122 with Docker on Linux/MacOS/Windows",description:"Steps to run OpenSign\u2122 with docker on Linux/MacOS/Windows:",source:"@site/docs/self-host/docker/run-locally.md",sourceDirName:"self-host/docker",slug:"/self-host/docker/run-locally",permalink:"/docs/self-host/docker/run-locally",draft:!1,unlisted:!1,editUrl:"https://github.com/opensignlabs/opensign/tree/feat-docs/docs/docs/self-host/docker/run-locally.md",tags:[],version:"current",frontMatter:{title:"Self-host OpenSign\u2122 with Docker on Linux/MacOS/Windows"},sidebar:"selfhostSidebar",previous:{title:"Docker",permalink:"/docs/category/docker"},next:{title:"OpenSign\u2122 Self-Hosted 'Upgrade Deployment' Guide Using Docker on Linux, macOS, or Windows",permalink:"/docs/self-host/docker/upgrade-deployment"}},d={},l=[{value:"Steps to run OpenSign\u2122 with docker on Linux/MacOS/Windows:",id:"steps-to-run-opensign-with-docker-on-linuxmacoswindows",level:2},{value:"Step 1. Download and Install Docker:",id:"step-1-download-and-install-docker",level:3},{value:"Step 2. Open the terminal and execute the below commands as per your operating system.",id:"step-2-open-the-terminal-and-execute-the-below-commands-as-per-your-operating-system",level:3},{value:"Running on a custom domain",id:"running-on-a-custom-domain",level:3},{value:"Running locally",id:"running-locally",level:3},{value:"Information About ENV variables which are used to setup OpenSign\u2122 with Docker on Localhost",id:"information-about-env-variables-which-are-used-to-setup-opensign-with-docker-on-localhost",level:2}];function a(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"steps-to-run-opensign-with-docker-on-linuxmacoswindows",children:"Steps to run OpenSign\u2122 with docker on Linux/MacOS/Windows:"}),"\n",(0,s.jsxs)(n.h3,{id:"step-1-download-and-install-docker",children:["Step 1. Download and Install ",(0,s.jsx)(n.a,{href:"https://www.docker.com/products/docker-desktop/",children:"Docker"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Follow the official Docker installation guide based on your operating system."}),"\n",(0,s.jsx)(n.p,{children:"Create a Docker Hub account if you don't already have one."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Important:"})," Don't forget to verify your Docker Hub account via the email verification link. If you skip this step, the deployment might fail due to unauthorized access errors when pulling Docker images."]}),"\n",(0,s.jsx)(n.h3,{id:"step-2-open-the-terminal-and-execute-the-below-commands-as-per-your-operating-system",children:"Step 2. Open the terminal and execute the below commands as per your operating system."}),"\n",(0,s.jsx)(n.p,{children:"Make sure Docker is running in the background before proceeding."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," The commands below should only be used when installing OpenSign for the first time. You may loose your settings as this will overwrite .env & caddy files."]}),"\n",(0,s.jsx)(n.h3,{id:"running-on-a-custom-domain",children:"Running on a custom domain"}),"\n",(0,s.jsx)(n.p,{children:"Command for linux/MacOS"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"export HOST_URL=https://opensign.yourdomain.com && curl --remote-name-all https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/.env.local_dev && mv .env.local_dev .env.prod && docker compose up --force-recreate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Command for Windows (",(0,s.jsx)(n.strong,{children:"Powershell"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'$env:HOST_URL="https://opensign.yourdomain.com"; Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml -OutFile docker-compose.yml; Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile -OutFile Caddyfile; Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/.env.local_dev -OutFile .env.local_dev; Rename-Item -Path .env.local_dev -NewName .env.prod; docker compose up --force-recreate\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Command for Windows (",(0,s.jsx)(n.strong,{children:"CMD/Terminal"}),")"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"set HOST_URL=https://opensign.yourdomain.com && curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml && curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile && curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/.env.local_dev && rename .env.local_dev .env.prod && docker compose up --force-recreate\n"})}),"\n",(0,s.jsx)(n.p,{children:"Copy the command above, paste it into the terminal, and press Enter to pull and start the containers automatically."}),"\n",(0,s.jsx)(n.p,{children:"Make sure to replace the host URL with your subdomain where OpenSign will be accessible."}),"\n",(0,s.jsx)(n.p,{children:"You will also need to point the subdomain to the server executing these commands by adding the correct A record to your DNS settings."}),"\n",(0,s.jsx)(n.h3,{id:"running-locally",children:"Running locally"}),"\n",(0,s.jsx)(n.p,{children:"If instead want to run locally try out below commands."}),"\n",(0,s.jsx)(n.p,{children:"Command for linux/MacOS (localhost)"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl --remote-name-all https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/.env.local_dev && mv .env.local_dev .env.prod && docker compose up --force-recreate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Command for Windows (",(0,s.jsx)(n.strong,{children:"Powershell"}),") (localhost)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml -OutFile docker-compose.yml; Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile -OutFile Caddyfile; Invoke-WebRequest -Uri https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/.env.local_dev -OutFile .env.local_dev; Rename-Item -Path .env.local_dev -NewName .env.prod; docker compose up --force-recreate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Command for Windows (",(0,s.jsx)(n.strong,{children:"CMD/Terminal"}),") (localhost)"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/docker-compose.yml && curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/Caddyfile && curl -O https://raw.githubusercontent.com/OpenSignLabs/OpenSign/main/.env.local_dev && rename .env.local_dev .env.prod && docker compose up --force-recreate\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Once the deployment is successful, the application will be accessible at ",(0,s.jsx)(n.a,{href:"https://localhost:3001",children:"https://localhost:3001"}),". You will need to accept Chrome's insecure certificate warning. Follow the steps in the screenshots to proceed."]}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("img",{width:"700",alt:"localhost",src:"https://github.com/user-attachments/assets/f5de1882-64d0-44ea-86e3-3a7c8405272c"})}),"\n",(0,s.jsx)("div",{children:(0,s.jsx)("img",{width:"700",alt:"proceedtolocalhost",src:"https://github.com/user-attachments/assets/33f975b9-4a9a-431e-a869-72e38f3b6754"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If you wish to incorporate our latest features into your Docker container, follow the ",(0,s.jsx)(n.a,{href:"https://docs.opensignlabs.com/docs/self-host/docker/upgrade-deployment",children:"Upgrade Deployment"})," steps."]}),"\n",(0,s.jsx)(n.h2,{id:"information-about-env-variables-which-are-used-to-setup-opensign-with-docker-on-localhost",children:"Information About ENV variables which are used to setup OpenSign\u2122 with Docker on Localhost"}),"\n",(0,s.jsx)(n.p,{children:"To set up OpenSign\u2122 locally using Docker, the following prerequisites are required:"}),"\n",(0,s.jsx)(n.p,{children:'Add below Environment Varaibles to the ".env.prod" file that is automatically created in order to personalize your installation:'}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Environment Varibale"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PUBLIC_URL"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"https://localhost:3001",children:"https://localhost:3001"})," or ",(0,s.jsx)(n.a,{href:"https://opensign.yourdomain.com",children:"https://opensign.yourdomain.com"})]}),(0,s.jsx)(n.td,{children:"Set it to the URL form where the app home page will be accessed"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"APP_ID"}),(0,s.jsx)(n.td,{children:"opensign"}),(0,s.jsx)(n.td,{children:"A 12 character long random app identifier. The value of this should be same as REACT_APP_APPID which is a variable used by Frontend React App."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MASTER_KEY"}),(0,s.jsx)(n.td,{children:"XnAadwKxxByMr"}),(0,s.jsx)(n.td,{children:"A 12 character long random secret key that allows access to all the data. It is used in Parse dashboard config to view all the data in the database."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MONGODB_URI"}),(0,s.jsx)(n.td,{children:"mongodb://mongo-container:27017/OpenSignDB"}),(0,s.jsx)(n.td,{children:"Mongodb URI to connect to"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PARSE_MOUNT"}),(0,s.jsx)(n.td,{children:"/app"}),(0,s.jsx)(n.td,{children:"Path on which APIs should be mounted. Do not change this. This variable shall be removed & value hardcoded in the source code in coming versions."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SERVER_URL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"http://localhost:8080/app",children:"http://localhost:8080/app"})}),(0,s.jsx)(n.td,{children:"Set it to the URL from where APIs will be accessible to the NodeJS functions, for local development it should be localhost:8080/app"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_SPACE"}),(0,s.jsx)(n.td,{children:"DOSPACENAME"}),(0,s.jsx)(n.td,{children:"Digital ocean space name or AWS S3 bucket name for uploading documents"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_ENDPOINT"}),(0,s.jsx)(n.td,{children:"ams3.digitaloceanspaces.com"}),(0,s.jsx)(n.td,{children:"Digital ocean spaces endpoint or AWS S3 endpoint for uploading documents"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_BASEURL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://dospace.ams3.digitaloceanspaces.com",children:"https://dospace.ams3.digitaloceanspaces.com"})}),(0,s.jsx)(n.td,{children:"Digital ocean baseurl or AWS S3 base URL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_ACCESS_KEY_ID"}),(0,s.jsx)(n.td,{children:"YOUR_S3_ACCESS_ID"}),(0,s.jsx)(n.td,{children:"Digital ocean spaces access key ID or AWS s3 Access key ID for uploading the docs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_SECRET_ACCESS_KEY"}),(0,s.jsx)(n.td,{children:"YOUR_S3_ACCESS_KEY"}),(0,s.jsx)(n.td,{children:"Digital ocean spaces secret access key or AWS s3 secret access key for uploading the docs"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"DO_REGION"}),(0,s.jsx)(n.td,{children:"YOUR_S3_REGION"}),(0,s.jsx)(n.td,{children:"Digital ocean spaces region or AWS s3 region"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"USE_LOCAL"}),(0,s.jsx)(n.td,{children:"true"}),(0,s.jsx)(n.td,{children:"If this is set to true, local file storage will be used to save files, and DO credentials will be ignored."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MAILGUN_API_KEY"}),(0,s.jsx)(n.td,{children:"YOUR_MAILGUNAPI_KEY"}),(0,s.jsx)(n.td,{children:"Mailgun API Key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MAILGUN_DOMAIN"}),(0,s.jsx)(n.td,{children:"YOUR_MAILGUNAPI_DOMAIN"}),(0,s.jsx)(n.td,{children:"Mailgun API Domain"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"MAILGUN_SENDER"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Mailgun Sender Mail ID"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SMTP_ENABLE"}),(0,s.jsx)(n.td,{children:"false"}),(0,s.jsx)(n.td,{children:"If this is set to true, emails will be sent through SMTP, and Mailgun credentials will be ignored."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SMTP_HOST"}),(0,s.jsx)(n.td,{children:"smtp.yourhost.com"}),(0,s.jsx)(n.td,{children:"Provide smtp host"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SMTP_PORT"}),(0,s.jsx)(n.td,{children:"443"}),(0,s.jsx)(n.td,{children:"Provide smtp port number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SMTP_USER_EMAIL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"mailto:mailer@yourdomain.com",children:"mailer@yourdomain.com"})}),(0,s.jsx)(n.td,{children:"Provide user email of smtp"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SMTP_PASS"}),(0,s.jsx)(n.td,{children:"password"}),(0,s.jsx)(n.td,{children:"Provide smtp password"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PFX_BASE64"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Base64 encoded PFX or p12 document signing certificate file. You can generate base64 encoded self sign certificate using the passphrase."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"PASS_PHRASE"}),(0,s.jsx)(n.td,{children:"opensign"}),(0,s.jsx)(n.td,{children:"Pass phrase of PFX or p12 document signing certificate file."})]})]})]}),"\n",(0,s.jsx)(n.h1,{id:"steps-to-generate-self-sign-certificate",children:"Steps to Generate Self Sign Certificate"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"# execute below command and use passphrase 'opensign'\nopenssl genrsa -des3 -out ./local_dev.key 2048\nopenssl req -key ./local_dev.key -new -x509 -days 365 -out ./local_dev.crt\nopenssl pkcs12 -inkey ./local_dev.key -in ./local_dev.crt -export -out ./local_dev.pfx\nopenssl base64 -in ./local_dev.pfx -out ./base64_pfx\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Please note that when signing a document using a certificate generated through this process, it won\u2019t be recognized as valid by Adobe Acrobat. To get the green tick on your signed documents, you'll need to purchase a document signing certificate (a p12 certificate in pfx format) from an ",(0,s.jsx)(n.a,{href:"https://helpx.adobe.com/in/acrobat/kb/approved-trust-list1.html",children:"AATL-approved Certificate Authority"}),"."]}),"\n",(0,s.jsx)(n.h1,{id:"cors-configuration",children:"CORS Configuration"}),"\n",(0,s.jsxs)(n.p,{children:["As document storage is delegated to S3-compatible services that reside in a different host than the OpenSign one, document operations (loading, storing, deleting) are subject to ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Cross-origin_resource_sharing",children:"Cross-Origin Resource Sharing"})," restriction policies; as a consequence, OpenSign app may fail with (browser console) errors like the following:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"Access to fetch at 'https://foo.nyc3.digitaloceanspaces.com/exported_file_4627_0000-00-00T00%3A45%3A43.344Z.pdf'\nfrom origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header\nis present on the requested resource. If an opaque response serves your needs, set the request's mode to\n'no-cors' to fetch the resource with CORS disabled.\n"})}),"\n",(0,s.jsx)(n.p,{children:"In order to address this, your document storage system must be instructed to accept requests from other hosts; below the relevant documentation links:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.digitalocean.com/products/spaces/how-to/configure-cors/",children:"How to Configure CORS on DigitalOcean Spaces"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/enabling-cors-examples.html",children:"Configuring cross-origin resource sharing on AWS S3"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var s=t(67294);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);