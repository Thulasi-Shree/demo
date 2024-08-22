"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[2013],{2013:(e,a,s)=>{s.r(a),s.d(a,{default:()=>n});var r=s(7313),t=s(8467),l=s(6573),c=s(195),o=(s(1804),s(4423)),i=s(6417);const n=()=>{const[e,a]=(0,r.useState)(""),[s,n]=(0,r.useState)(""),[d,m]=(0,r.useState)(""),[u,p]=(0,r.useState)(""),[f,h]=(0,r.useState)({message:"",type:""}),[x,g]=(0,r.useState)(""),[y,v]=(0,r.useState)(""),[N,b]=(0,r.useState)(""),[j,C]=(0,r.useState)(!1),[w,k]=(0,r.useState)([]),[P,S]=(0,r.useState)(!1),[_,E]=(0,r.useState)([]),{id:F}=(0,t.UO)(),R=(0,t.s0)();return(0,r.useEffect)((()=>{(async()=>{try{const e=(await l.Z.get("/api/product/".concat(F))).data.menu;a(e.name),n(e.price),C(e.isAvailable),m(e.description),v(e.restaurantId),b(e.restaurantBranch),p(e.dietaryPreferenceCategory),g(e.mealTypeCategory);const s=e.images.map((e=>e.image));E(s)}catch(e){f(e.message||"An error occurred")}})()}),[F]),(0,i.jsx)("div",{className:"bg-white py-1 text-black",children:(0,i.jsx)("div",{className:"container-fluid",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col-lg-8  mx-auto col-xs-12 col-md-10 my-5",children:(0,i.jsxs)(c.Z,{className:"Cardimg123",children:[f.message&&(0,i.jsx)(o.Z,{message:f.message,type:f.type,onClose:()=>{h({message:"",type:""})}}),(0,i.jsxs)("form",{onSubmit:async a=>{a.preventDefault();const r=new FormData;r.append("name",e),r.append("price",s),r.append("isAvailable",j||!1),r.append("description",d),r.append("restaurantId",y),r.append("restaurantBranch",N),r.append("mealTypeCategory",x),r.append("dietaryPreferenceCategory",u),w.forEach((e=>{r.append("images",e)})),r.append("imagesCleared",P);try{await l.Z.put("/api/admin/product/".concat(F),r),h({message:"Product Updated Successfully!",type:"success"}),R("/admin/menus"),k([])}catch(t){h({message:t.message||"An error occurred",type:"error"})}},className:"shadow-lg p-4",encType:"multipart/form-data",children:[(0,i.jsx)("h1",{className:"mb-4 uppercase",children:"EDIT MENU"}),(0,i.jsxs)("div",{className:"form-group mt-2",children:[(0,i.jsx)("label",{htmlFor:"name_field",children:"Name"}),(0,i.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",id:"name_field",className:"form-control mt-2",onChange:e=>a(e.target.value),value:e})]}),(0,i.jsxs)("div",{className:"form-group mt-2",children:[(0,i.jsx)("label",{htmlFor:"price_field",children:"Price"}),(0,i.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",id:"price_field",className:"form-control mt-2",onChange:e=>n(e.target.value),value:s})]}),(0,i.jsxs)("div",{className:"form-group mt-2",children:[(0,i.jsx)("label",{htmlFor:"description_field",children:"Description"}),(0,i.jsx)("textarea",{style:{backgroundColor:"white",color:"black"},className:"form-control mt-2",id:"description_field",rows:"4",onChange:e=>m(e.target.value),value:d})]}),(0,i.jsxs)("div",{className:"form-group mt-2",children:[(0,i.jsx)("label",{htmlFor:"category_field",children:"Dietary Preference Category"}),(0,i.jsxs)("select",{style:{backgroundColor:"white",color:"black"},value:u,onChange:e=>p(e.target.value),className:"form-control mt-2",id:"category_field",children:[(0,i.jsx)("option",{value:"",children:"Select"}),["Vegetarian","Non-vegetarian","Vegan","Gluten-Free","Halal","Other"].map((e=>(0,i.jsx)("option",{value:e,children:e},e)))]})]}),(0,i.jsxs)("div",{className:"form-group mt-2",children:[(0,i.jsx)("label",{htmlFor:"category_field",children:"Meal Type Category"}),(0,i.jsxs)("select",{style:{backgroundColor:"white",color:"black"},value:x,onChange:e=>p(e.target.value),className:"form-control",id:"category_field",children:[(0,i.jsx)("option",{value:"",children:"Select"}),["Appetizers","Main Course","Desserts","Beverages","Other"].map((e=>(0,i.jsx)("option",{value:e,children:e},e)))]})]}),(0,i.jsxs)("div",{className:"form-group mt-2",children:[(0,i.jsx)("label",{htmlFor:"stock_field",children:"Is Available"}),(0,i.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"checkbox",id:"stock_field",className:" mt-2",onChange:()=>{C((e=>!e))},checked:j})]}),(0,i.jsxs)("div",{className:"form-group mt-2",children:[(0,i.jsx)("label",{htmlFor:"seller_field",children:"Restaurant Id"}),(0,i.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",id:"seller_field",className:"form-control mt-2",readOnly:!0,onChange:e=>v(e.target.value),value:y})]}),(0,i.jsxs)("div",{className:"form-group mt-2",children:[(0,i.jsx)("label",{htmlFor:"seller_field",children:"Restaurant Branch"}),(0,i.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",id:"seller_field",className:"form-control mt-2",readOnly:!0,onChange:e=>b(e.target.value),value:N})]}),(0,i.jsxs)("div",{className:"form-group mt-2",children:[(0,i.jsx)("label",{children:"Images"}),(0,i.jsxs)("div",{className:"custom-file mt-2",children:[(0,i.jsx)("input",{style:{backgroundColor:"transparent",borderRadius:"30px"},type:"file",name:"product_images",className:"form-control mt-2",id:"customFile",multiple:!0,onChange:e=>{Array.from(e.target.files).forEach((e=>{const a=new FileReader;a.onload=()=>{2===a.readyState&&(E([a.result]),k([e]))},a.readAsDataURL(e)}))}}),(0,i.jsx)("label",{className:"custom-file-label mt-2",htmlFor:"customFile",children:"Choose Images"})]}),_.length>0&&(0,i.jsx)("span",{className:"m-3",onClick:()=>{k([]),E([]),S(!0)},style:{cursor:"pointer"},children:(0,i.jsx)("i",{className:"fa fa-trash"})}),_.map((e=>(0,i.jsx)("img",{className:"image-preview mt-2",src:e,alt:"Image Preview",width:"55",height:"52"},e)))]}),(0,i.jsx)("div",{className:"d-flex justify-content-center",children:(0,i.jsx)("button",{id:"login_button",type:"submit",className:"btn my-3 px-4 btn rounded px-5 ",children:"UPDATE"})})]})]})})})})})}},195:(e,a,s)=>{s.d(a,{Z:()=>R});var r=s(6123),t=s.n(r),l=s(7313),c=s(8524),o=s(6417);const i=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...i}=e;return r=(0,c.vE)(r,"card-body"),(0,o.jsx)(l,{ref:a,className:t()(s,r),...i})}));i.displayName="CardBody";const n=i,d=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...i}=e;return r=(0,c.vE)(r,"card-footer"),(0,o.jsx)(l,{ref:a,className:t()(s,r),...i})}));d.displayName="CardFooter";const m=d;var u=s(5614);const p=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:i="div",...n}=e;const d=(0,c.vE)(s,"card-header"),m=(0,l.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,o.jsx)(u.Z.Provider,{value:m,children:(0,o.jsx)(i,{ref:a,...n,className:t()(r,d)})})}));p.displayName="CardHeader";const f=p,h=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:l,as:i="img",...n}=e;const d=(0,c.vE)(s,"card-img");return(0,o.jsx)(i,{ref:a,className:t()(l?"".concat(d,"-").concat(l):d,r),...n})}));h.displayName="CardImg";const x=h,g=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...i}=e;return r=(0,c.vE)(r,"card-img-overlay"),(0,o.jsx)(l,{ref:a,className:t()(s,r),...i})}));g.displayName="CardImgOverlay";const y=g,v=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="a",...i}=e;return r=(0,c.vE)(r,"card-link"),(0,o.jsx)(l,{ref:a,className:t()(s,r),...i})}));v.displayName="CardLink";const N=v;var b=s(6205);const j=(0,b.Z)("h6"),C=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=j,...i}=e;return r=(0,c.vE)(r,"card-subtitle"),(0,o.jsx)(l,{ref:a,className:t()(s,r),...i})}));C.displayName="CardSubtitle";const w=C,k=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="p",...i}=e;return r=(0,c.vE)(r,"card-text"),(0,o.jsx)(l,{ref:a,className:t()(s,r),...i})}));k.displayName="CardText";const P=k,S=(0,b.Z)("h5"),_=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=S,...i}=e;return r=(0,c.vE)(r,"card-title"),(0,o.jsx)(l,{ref:a,className:t()(s,r),...i})}));_.displayName="CardTitle";const E=_,F=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:l,text:i,border:d,body:m=!1,children:u,as:p="div",...f}=e;const h=(0,c.vE)(s,"card");return(0,o.jsx)(p,{ref:a,...f,className:t()(r,h,l&&"bg-".concat(l),i&&"text-".concat(i),d&&"border-".concat(d)),children:m?(0,o.jsx)(n,{children:u}):u})}));F.displayName="Card";const R=Object.assign(F,{Img:x,Title:E,Subtitle:w,Body:n,Link:N,Text:P,Header:f,Footer:m,ImgOverlay:y})},1804:()=>{}}]);