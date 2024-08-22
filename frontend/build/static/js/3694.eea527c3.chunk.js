"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[3694],{3694:(e,s,a)=>{a.r(s),a.d(s,{default:()=>o});var r=a(7313),t=a(5377),l=a.n(t),c=a(6573),d=(a(763),a(195)),n=a(4423),i=a(6417);const o=()=>{const[e,s]=(0,r.useState)(""),[a,t]=(0,r.useState)(!1),[o,m]=(0,r.useState)(null),[f,u]=(0,r.useState)(null),[x,N]=(0,r.useState)({message:"",type:""}),p=(0,r.useRef)(new(l())({className:"text-danger"}));return(0,r.useEffect)((()=>()=>{}),[]),(0,i.jsx)("div",{className:"container-fluid bg-white",children:(0,i.jsx)("div",{className:"row ",children:(0,i.jsx)("div",{className:"col-lg-5 col-xs-12 col-md-9 mx-auto my-5",children:(0,i.jsxs)(d.Z,{className:"Cardimg123",children:[x.message&&(0,i.jsx)(n.Z,{message:x.message,type:x.type,onClose:()=>{N({message:"",type:""})}}),(0,i.jsx)("form",{onSubmit:async a=>{if(a.preventDefault(),p.current.allValid()){t(!0);try{const a=new FormData;a.append("email",e);const r={headers:{"Content-type":"application/json"}},t=await c.Z.post("/api/password/forgot",a,r);m(t.data.message),N({message:t.data.message,type:"success"}),s("")}catch(f){u(f.response?f.response.data:"An error occurred");const s=f.response?f.response.data.message:"An error occurred";N({message:s,type:"error"})}finally{t(!1)}}else x("Please fix the validation errors"),p.current.showMessages()},children:(0,i.jsxs)("div",{className:" my-5 bg-white p-4",children:[(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)("h2",{className:"text-center mt-1 font-regular-29",id:"CardText",children:"Forgot password"}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{htmlFor:"email",className:"form-label text-black ",children:["Email address"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{id:"CardText",value:e,style:{backgroundColor:"white",color:"black"},name:"email",onChange:e=>s(e.target.value),type:"email",required:!0,placeholder:"Field is required",className:"form-control"}),p.current.message("Email",e,"required")]})]}),(0,i.jsx)("div",{className:"d-flex justify-content-center",children:(0,i.jsx)("button",{type:"submit",disabled:a,className:"btn my-3 px-4 btn rounded w-100",style:{borderRadius:"30px"},children:"Submit"})})]})})]})})})})}},195:(e,s,a)=>{a.d(s,{Z:()=>F});var r=a(6123),t=a.n(r),l=a(7313),c=a(8524),d=a(6417);const n=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="div",...n}=e;return r=(0,c.vE)(r,"card-body"),(0,d.jsx)(l,{ref:s,className:t()(a,r),...n})}));n.displayName="CardBody";const i=n,o=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="div",...n}=e;return r=(0,c.vE)(r,"card-footer"),(0,d.jsx)(l,{ref:s,className:t()(a,r),...n})}));o.displayName="CardFooter";const m=o;var f=a(5614);const u=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,as:n="div",...i}=e;const o=(0,c.vE)(a,"card-header"),m=(0,l.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,d.jsx)(f.Z.Provider,{value:m,children:(0,d.jsx)(n,{ref:s,...i,className:t()(r,o)})})}));u.displayName="CardHeader";const x=u,N=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,variant:l,as:n="img",...i}=e;const o=(0,c.vE)(a,"card-img");return(0,d.jsx)(n,{ref:s,className:t()(l?"".concat(o,"-").concat(l):o,r),...i})}));N.displayName="CardImg";const p=N,b=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="div",...n}=e;return r=(0,c.vE)(r,"card-img-overlay"),(0,d.jsx)(l,{ref:s,className:t()(a,r),...n})}));b.displayName="CardImgOverlay";const v=b,h=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="a",...n}=e;return r=(0,c.vE)(r,"card-link"),(0,d.jsx)(l,{ref:s,className:t()(a,r),...n})}));h.displayName="CardLink";const y=h;var g=a(6205);const j=(0,g.Z)("h6"),w=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l=j,...n}=e;return r=(0,c.vE)(r,"card-subtitle"),(0,d.jsx)(l,{ref:s,className:t()(a,r),...n})}));w.displayName="CardSubtitle";const C=w,E=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l="p",...n}=e;return r=(0,c.vE)(r,"card-text"),(0,d.jsx)(l,{ref:s,className:t()(a,r),...n})}));E.displayName="CardText";const P=E,R=(0,g.Z)("h5"),k=l.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:l=R,...n}=e;return r=(0,c.vE)(r,"card-title"),(0,d.jsx)(l,{ref:s,className:t()(a,r),...n})}));k.displayName="CardTitle";const S=k,Z=l.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,bg:l,text:n,border:o,body:m=!1,children:f,as:u="div",...x}=e;const N=(0,c.vE)(a,"card");return(0,d.jsx)(u,{ref:s,...x,className:t()(r,N,l&&"bg-".concat(l),n&&"text-".concat(n),o&&"border-".concat(o)),children:m?(0,d.jsx)(i,{children:f}):f})}));Z.displayName="Card";const F=Object.assign(Z,{Img:p,Title:S,Subtitle:C,Body:i,Link:y,Text:P,Header:x,Footer:m,ImgOverlay:v})},763:()=>{}}]);