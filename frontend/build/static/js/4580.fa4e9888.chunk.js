"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[4580],{4580:(e,s,a)=>{a.r(s),a.d(s,{default:()=>i});var r=a(7313),l=a(6573),t=a(195),n=a(4423),d=a(8467),c=a(6417);const i=()=>{const[e,s]=(0,r.useState)({restaurantName:"Grand India - Restaurant & Catering",restaurantBranch:"",restaurantId:"",description:"",address:{line1:"",line2:"",city:"",state:"",postalCode:"",country:"",latitude:"",longitude:""},cuisineTypeCategory:"",openingHours:""}),[a,i]=(0,r.useState)({message:"",type:""}),o=((0,d.s0)(),a=>{a.target.name.startsWith("address.")?s({...e,address:{...e.address,[a.target.name.slice(8)]:a.target.value}}):s({...e,[a.target.name]:a.target.value})});return(0,c.jsx)("div",{className:"bg-white text-black py-4",children:(0,c.jsxs)(t.Z,{className:"col-md-5 container py-4 my-5 Cardimg123",children:[(0,c.jsx)("h4",{className:"text-black uppercase",children:"Create a New Restaurant"}),a.message&&(0,c.jsx)(n.Z,{message:a.message,type:a.type,onClose:()=>{i({message:"",type:""})}}),(0,c.jsxs)("form",{onSubmit:async a=>{var r;if(a.preventDefault(),r=e.openingHours,/^([01]?[0-9]|2[0-3]):([0-5][0-9]) - ([01]?[0-9]|2[0-3]):([0-5][0-9])$/.test(r))try{await l.Z.post("/api/restaurant/create",e),console.log("Restaurant created successfully!"),i({message:"Restaurant created Successfully!",type:"success"}),s({restaurantName:"",restaurantBranch:"",restaurantId:"",description:"",address:{line1:"",line2:"",city:"",state:"",postalCode:"",country:"",latitude:"",longitude:""},cuisineTypeCategory:"",openingHours:""})}catch(t){console.error("Error creating restaurant:",t),i({message:"Error creating restaurant. Please ensure the provided data is unique and try again.",type:"error"})}else i({message:"Please enter a valid time range in the format HH:MM - HH:MM",type:"success"})},className:"address-container",children:[(0,c.jsxs)("div",{className:"mb-3",children:[" ",(0,c.jsxs)("label",{children:["Restaurant Name:"," ",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",name:"restaurantName",className:"form-control ",value:e.restaurantName,onChange:o,required:!0,placeholder:"Field is required"})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsxs)("label",{children:["Restaurant Branch:"," ",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",name:"restaurantBranch",value:e.restaurantBranch,onChange:o,required:!0,placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsxs)("label",{children:["Restaurant Id:"," ",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"number",name:"restaurantId",value:e.restaurantId,onChange:o,required:!0,placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsxs)("label",{children:["Description:"," ",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",name:"description",value:e.description,onChange:o,required:!0,placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsxs)("label",{children:["Address Line 1:",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",name:"address.line1",value:e.address.line1,onChange:o,required:!0,placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsx)("label",{children:"Address Line 2:"}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",name:"address.line2",value:e.address.line2,onChange:o,placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsxs)("label",{children:["City:",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",name:"address.city",value:e.address.city,onChange:o,required:!0,placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsxs)("label",{children:["State:",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",name:"address.state",value:e.address.state,onChange:o,required:!0,placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsxs)("label",{children:["Postal Code:",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"number",name:"address.postalCode",value:e.address.postalCode,onChange:o,required:!0,placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsxs)("label",{children:["Country:",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",name:"address.country",value:e.address.country,onChange:o,required:!0,placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-4",children:[(0,c.jsxs)("label",{children:["Latitude:",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"number",name:"address.latitude",value:e.address.latitude,onChange:o,required:!0,step:"0.00000001",placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-3",children:[" ",(0,c.jsxs)("label",{children:["Longitude:"," ",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"number",name:"address.longitude",value:e.address.longitude,onChange:o,required:!0,step:"0.00000001",placeholder:"Field is required",className:"form-control "})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsxs)("label",{children:["Cuisine:"," ",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsxs)("select",{style:{backgroundColor:"white",color:"black"},name:"cuisineTypeCategory",value:e.cuisineTypeCategory,onChange:o,required:!0,className:"form-control ",children:[(0,c.jsx)("option",{value:"",children:"Select"}),(0,c.jsx)("option",{value:"Italian",children:"Italian"}),(0,c.jsx)("option",{value:"Asian",children:"Asian"}),(0,c.jsx)("option",{value:"Chinese",children:"Chinese"}),(0,c.jsx)("option",{value:"Indian",children:"Indian"}),(0,c.jsx)("option",{value:"Mexican",children:"Mexican"}),(0,c.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,c.jsxs)("div",{className:"mb-3",children:[(0,c.jsxs)("label",{children:["Opening Hours:"," ",(0,c.jsxs)("span",{className:"text-danger",children:[" ",(0,c.jsx)("b",{children:"*"})]})]}),(0,c.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",name:"openingHours",value:e.openingHours,onChange:o,required:!0,placeholder:"e.g. 09:00 - 17:00",className:"form-control"})]}),(0,c.jsx)("div",{className:"d-flex justify-content-center",children:(0,c.jsx)("button",{className:" btn my-3 px-4 btn rounded w-100",type:"submit",children:"Create Restaurant"})})]})]})})}},195:(e,s,a)=>{a.d(s,{Z:()=>H});var r=a(6123),l=a.n(r),t=a(7313),n=a(8524),d=a(6417);const c=t.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:t="div",...c}=e;return r=(0,n.vE)(r,"card-body"),(0,d.jsx)(t,{ref:s,className:l()(a,r),...c})}));c.displayName="CardBody";const i=c,o=t.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:t="div",...c}=e;return r=(0,n.vE)(r,"card-footer"),(0,d.jsx)(t,{ref:s,className:l()(a,r),...c})}));o.displayName="CardFooter";const u=o;var m=a(5614);const x=t.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,as:c="div",...i}=e;const o=(0,n.vE)(a,"card-header"),u=(0,t.useMemo)((()=>({cardHeaderBsPrefix:o})),[o]);return(0,d.jsx)(m.Z.Provider,{value:u,children:(0,d.jsx)(c,{ref:s,...i,className:l()(r,o)})})}));x.displayName="CardHeader";const h=x,p=t.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,variant:t,as:c="img",...i}=e;const o=(0,n.vE)(a,"card-img");return(0,d.jsx)(c,{ref:s,className:l()(t?"".concat(o,"-").concat(t):o,r),...i})}));p.displayName="CardImg";const b=p,j=t.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:t="div",...c}=e;return r=(0,n.vE)(r,"card-img-overlay"),(0,d.jsx)(t,{ref:s,className:l()(a,r),...c})}));j.displayName="CardImgOverlay";const g=j,N=t.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:t="a",...c}=e;return r=(0,n.vE)(r,"card-link"),(0,d.jsx)(t,{ref:s,className:l()(a,r),...c})}));N.displayName="CardLink";const y=N;var v=a(6205);const f=(0,v.Z)("h6"),C=t.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:t=f,...c}=e;return r=(0,n.vE)(r,"card-subtitle"),(0,d.jsx)(t,{ref:s,className:l()(a,r),...c})}));C.displayName="CardSubtitle";const k=C,w=t.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:t="p",...c}=e;return r=(0,n.vE)(r,"card-text"),(0,d.jsx)(t,{ref:s,className:l()(a,r),...c})}));w.displayName="CardText";const q=w,R=(0,v.Z)("h5"),P=t.forwardRef(((e,s)=>{let{className:a,bsPrefix:r,as:t=R,...c}=e;return r=(0,n.vE)(r,"card-title"),(0,d.jsx)(t,{ref:s,className:l()(a,r),...c})}));P.displayName="CardTitle";const F=P,I=t.forwardRef(((e,s)=>{let{bsPrefix:a,className:r,bg:t,text:c,border:o,body:u=!1,children:m,as:x="div",...h}=e;const p=(0,n.vE)(a,"card");return(0,d.jsx)(x,{ref:s,...h,className:l()(r,p,t&&"bg-".concat(t),c&&"text-".concat(c),o&&"border-".concat(o)),children:u?(0,d.jsx)(i,{children:m}):m})}));I.displayName="Card";const H=Object.assign(I,{Img:b,Title:F,Subtitle:k,Body:i,Link:y,Text:q,Header:h,Footer:u,ImgOverlay:g})}}]);