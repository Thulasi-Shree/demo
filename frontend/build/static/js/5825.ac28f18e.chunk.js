"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[5825],{7482:(e,s,i)=>{i.r(s),i.d(s,{default:()=>n});var t=i(6573),c=i(7313),a=i(8467),r=i(2135),l=i(6417);const n=()=>{const[e,s]=(0,c.useState)("Verifying..."),{token:i}=(0,a.UO)();return(0,c.useEffect)((()=>{(async()=>{try{(await t.Z.post("/api/verify-email/".concat(i))).data.success?s("Email verified successfully!"):s("Email verification failed. Please contact support.")}catch(e){console.error("Error verifying email:",e),s("Error verifying email. Please try again later.")}})()}),[i]),(0,l.jsx)("div",{children:(0,l.jsx)("div",{className:"row justify-content-center",children:(0,l.jsxs)("div",{className:"col-6 mt-5 text-center",children:["Email verified successfully!"===e&&(0,l.jsx)("img",{className:"my-5 img-fluid d-block mx-auto",src:"https://static.vecteezy.com/system/resources/thumbnails/001/622/545/original/success-check-mark-icon-animation-video.jpg",alt:"Registration Success",width:"200",height:"200"}),(0,l.jsx)("h2",{children:e}),"Email verified successfully!"===e&&(0,l.jsx)(r.rU,{to:"/login",children:"Login"})]})})})}}}]);