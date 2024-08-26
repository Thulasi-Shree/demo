"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[5444],{5444:(e,a,s)=>{s.r(a),s.d(a,{default:()=>y});var r=s(7313),t=s(6573),l=s(195),c=s(1965),n=s(7533),i=s(3298),o=s(259),d=s(1309),m=s(6417);const h=e=>{let{categories:a,onDeleteCategory:s}=e;return(0,m.jsxs)("div",{children:[(0,m.jsx)("h4",{children:"All Categories"}),a.length>0?(0,m.jsx)("ul",{className:"list-group",children:a.map((e=>(0,m.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.dietaryPreferenceCategory,(0,m.jsx)(i.Z,{variant:"danger",size:"sm",onClick:()=>s(e._id),children:(0,m.jsx)(o.G,{icon:d.$aW})})]},e._id)))}):(0,m.jsx)("p",{children:"No categories available."})]})},x=e=>{let{categories:a,onDeleteCategory1:s}=e;return(0,m.jsxs)("div",{children:[(0,m.jsx)("h4",{children:"All Categories"}),a.length>0?(0,m.jsx)("ul",{className:"list-group",children:a.map((e=>(0,m.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-center",children:[e.mealTypeCategory,(0,m.jsx)(i.Z,{variant:"danger",size:"sm",onClick:()=>s(e._id),children:(0,m.jsx)(o.G,{icon:d.$aW})})]},e._id)))}):(0,m.jsx)("p",{children:"No categories available."})]})};var u=s(4423),p=s(8467);function y(){const[e,a]=(0,r.useState)(""),[s,y]=(0,r.useState)(""),[f,g]=(0,r.useState)(""),[j,b]=(0,r.useState)({message:"",type:""}),[v,N]=(0,r.useState)(""),[C,w]=(0,r.useState)(null),[k,Z]=(0,r.useState)(null),[F,S]=(0,r.useState)(""),[E,I]=(0,r.useState)([]),[A,P]=(0,r.useState)([]),[R,T]=(0,r.useState)(""),[_,B]=(0,r.useState)([]),[D,H]=(0,r.useState)(!1),[L,O]=(0,r.useState)([]),[q,z]=(0,r.useState)([]),[M,V]=(0,r.useState)(""),[G,J]=(0,r.useState)(""),[U,W]=(0,r.useState)(!1),[$,K]=(0,r.useState)(""),[Q,X]=(0,r.useState)(""),[Y,ee]=(0,r.useState)(!1),[ae,se]=(0,r.useState)([]),[re,te]=(0,r.useState)(!1),[le,ce]=(0,r.useState)(!1),[ne,ie]=(0,r.useState)(!1),[oe,de]=(0,r.useState)(null),me=JSON.parse(localStorage.getItem("user")),[he,xe]=(0,r.useState)(!1),[ue,pe]=(0,r.useState)(!1),{role:ye}=me,fe=(0,p.s0)(),ge=()=>{ee(!Y)},je=async()=>{await t.Z.get("/api/dietary-preferences").then((e=>I(e.data.data))).catch((e=>console.error("Error fetching dietary categories:",e)))},be=async()=>{await t.Z.get("/api/meal-types").then((e=>P(e.data.data))).catch((e=>console.error("Error fetching meal categories:",e)))},ve=()=>{console.log("handleAddCategoryClick called"),te(!re)},Ne=()=>{t.Z.get("/api/dietary-preferences").then((e=>se(e.data.data))).catch((e=>console.error("Error fetching categories:",e)))},Ce=()=>{t.Z.get("/api/meal-types").then((e=>se(e.data.data))).catch((e=>console.error("Error fetching categories:",e)))},we=e=>{w(e),xe(!1),J(null),te(!1),ee(!1),ce(!1),ie(!1)};return(0,r.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("user")),{restaurantId:a,restaurantBranch:s}=e;"superAdmin"!==ye&&(T(a),B(s)),oe&&b({message:"An error occured!",type:"error"})}),[oe]),(0,r.useEffect)((()=>{je(),be(),Ne(),"superAdmin"===ye&&t.Z.get("/api/restaurant/get").then((e=>B(e.data.data))).catch((e=>console.error("Error fetching restaurant branches:",e)))}),[]),(0,r.useEffect)((()=>{if("superAdmin"===ye){const e=_.find((e=>e.restaurantBranch===M));e&&J(e.restaurantId)}}),[M,_]),(0,m.jsxs)("div",{className:" bg-white py-1 text-white",children:[(0,m.jsxs)("div",{className:"container-fluid bg-white text-black my-5",children:[(0,m.jsx)(l.Z,{className:"Cardimg123 bg-white",children:(0,m.jsx)("div",{className:"my-5 text-black bg-white",children:(0,m.jsxs)("form",{onSubmit:async r=>{r.preventDefault(),W(!0);try{const a=new FormData;a.append("name",e),a.append("price",s),a.append("description",f),a.append("dietaryPreferenceCategory",v),a.append("mealTypeCategory",F),a.append("isAvailable",D),"superAdmin"===ye?(a.append("restaurantBranch",M),a.append("restaurantId",G)):(a.append("restaurantBranch",_),a.append("restaurantId",R)),L.forEach((e=>{a.append("images",e)})),await t.Z.post("/api/admin/product/new",a),b({message:"Menu Created Successfully!",type:"success"})}catch(oe){b({message:"Error creating menu",type:"error"}),de("Error creating menu. Please try again.")}finally{W(!1),a(""),y(""),H(!1),S([]),N([]),I([]),P([]),O([""]),z([]),g(""),"superAdmin"===ye&&(V(""),J("")),Ne(),je(),be(),Ce()}},className:"address-container",encType:"multipart/form-data",children:[(0,m.jsx)("h4",{className:"mb-5 uppercase mx-5",children:"Add a new Menu Item"}),(0,m.jsxs)("div",{className:"row",children:[(0,m.jsxs)("div",{className:"col-xs-12 col-lg-6 col-md-12",children:[(0,m.jsxs)("div",{className:"mb-4 mx-5",children:[(0,m.jsxs)("label",{htmlFor:"name_field",children:["Name",(0,m.jsxs)("span",{className:"text-danger",children:[" ",(0,m.jsx)("b",{children:"*"})]})]}),(0,m.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",id:"name_field",className:"form-control",onChange:e=>a(e.target.value),value:e,required:!0,placeholder:"Field is required"})]}),(0,m.jsxs)("div",{className:"mb-4 mx-5",children:[(0,m.jsxs)("label",{htmlFor:"price_field",children:["Price",(0,m.jsxs)("span",{className:"text-danger",children:[" ",(0,m.jsx)("b",{children:"*"})]})]}),(0,m.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"number",id:"price_field",required:!0,placeholder:"Field is required",className:"form-control ",onChange:e=>{e.target.value>=0&&y(e.target.value)},value:s,step:"any"})]}),(0,m.jsxs)("div",{className:"mb-4 mx-5",children:[(0,m.jsxs)("label",{htmlFor:"description_field",children:["Description",(0,m.jsxs)("span",{className:"text-danger",children:[" ",(0,m.jsx)("b",{children:"*"})]})]}),(0,m.jsx)("textarea",{style:{backgroundColor:"white",color:"black"},className:"form-control",id:"description_field",rows:"2",onChange:e=>g(e.target.value),value:f,required:!0,placeholder:"Field is required"})]}),(0,m.jsxs)("div",{className:"mb-4 mx-5",children:[(0,m.jsxs)("label",{htmlFor:"category_field",children:["Meal Category",(0,m.jsxs)("span",{className:"text-danger",children:[" ",(0,m.jsx)("b",{children:"*"})]}),(0,m.jsxs)("span",{onClick:ge,children:["(Add Category)",(0,m.jsx)(o.G,{icon:d.UJf,style:{marginRight:"5px"}})]})]}),(0,m.jsxs)("select",{style:{backgroundColor:"white",color:"black"},onChange:e=>S(e.target.value),className:"form-control",id:"category_field",required:!0,children:[(0,m.jsx)("option",{value:"",children:"Select"}),A.map((e=>(0,m.jsx)("option",{style:{backgroundColor:"white",color:"black"},value:e.mealTypeCategory,children:e.mealTypeCategory},e.mealTypeCategory)))]})]}),(0,m.jsxs)("div",{className:"mb-4 mx-5",children:[(0,m.jsxs)("label",{htmlFor:"dietary_category_field",children:["Dietary Category",(0,m.jsxs)("span",{className:"text-danger",children:[" ",(0,m.jsx)("b",{children:"*"})]}),(0,m.jsxs)("span",{onClick:ve,children:["(Add Category)",(0,m.jsx)(o.G,{icon:d.UJf,style:{marginRight:"5px"}})]})]}),(0,m.jsxs)("select",{style:{backgroundColor:"white",color:"black"},onChange:e=>N(e.target.value),className:"form-control",id:"dietary_category_field",required:!0,children:[(0,m.jsx)("option",{value:"",children:"Select"}),E.map((e=>(0,m.jsx)("option",{value:e.dietaryPreferenceCategory,children:e.dietaryPreferenceCategory},e.dietaryPreferenceCategory)))]})]})]}),(0,m.jsxs)("div",{className:"col-xs-12 col-lg-6 col-md-12",children:[(0,m.jsxs)(m.Fragment,{children:["superAdmin"===ye&&Array.isArray(_)&&(0,m.jsxs)("div",{className:"mb-4 mx-5",children:[(0,m.jsxs)("label",{htmlFor:"seller_field",children:["Restaurant Branch",(0,m.jsxs)("span",{className:"text-danger",children:[" ",(0,m.jsx)("b",{children:"*"})]})]}),(0,m.jsxs)("select",{style:{backgroundColor:"white",color:"black"},id:"seller_field",className:"form-control",value:M,onChange:e=>V(e.target.value),required:!0,children:[(0,m.jsx)("option",{value:"",children:"Select"}),_.map((e=>(0,m.jsx)("option",{value:e.restaurantBranch,children:e.restaurantBranch},e.restaurantBranch)))]})]}),(0,m.jsxs)("div",{className:"mb-4 mx-5 d-none",children:[(0,m.jsxs)("label",{htmlFor:"id_field",children:["Restaurant Id",(0,m.jsxs)("span",{className:"text-danger",children:[" ",(0,m.jsx)("b",{children:"*"})]})]}),(0,m.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",id:"id_field",className:"form-control",placeholder:"Field is required"})]})]}),(0,m.jsxs)("div",{className:"mb-4 mx-5",children:[(0,m.jsx)("label",{htmlFor:"customFile",children:"Images"}),(0,m.jsxs)("div",{className:"custom-file",children:[(0,m.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"file",name:"product_images",className:"form-control",id:"customFile",multiple:!0,onChange:e=>{Array.from(e.target.files).forEach((e=>{const a=new FileReader;a.onload=()=>{2===a.readyState&&(z((e=>[...e,a.result])),O((a=>[...a,e])))},a.readAsDataURL(e)}))}}),(0,m.jsx)("label",{className:"custom-file-label",htmlFor:"customFile",children:"Chosen Image"})]}),(0,m.jsx)("div",{className:"image-preview mt-3",children:q.map(((e,a)=>(0,m.jsx)("img",{className:"mr-2 mb-2",src:e,alt:"Image Preview ".concat(a+1),width:"55",height:"52"},a)))})]}),(0,m.jsxs)("div",{className:"mb-4 mx-5",children:[(0,m.jsx)("label",{htmlFor:"vegetarian_checkbox",style:{color:"black",fontSize:"1rem"},children:"Is Available"}),(0,m.jsxs)("div",{className:"my-2",children:[(0,m.jsx)("input",{type:"checkbox",id:"vegetarian_checkbox",checked:D,onChange:()=>{H(!D)},className:"custom-checkbox form-control",style:{display:"none"}}),(0,m.jsx)("label",{htmlFor:"vegetarian_checkbox",style:{marginTop:"5px",borderRadius:"50%",width:"20px",height:"20px",cursor:"pointer",border:"1px solid #333",display:"inline-block",position:"relative",backgroundColor:D?"#4caf50":"#fff"},children:D&&(0,m.jsx)(o.G,{icon:d.LEp,style:{color:"#fff",position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}})})]})]}),(0,m.jsx)("div",{className:"mb-4 p-5",children:(0,m.jsx)("button",{id:"login_button",type:"submit",disabled:U,className:"btn my-3 px-4 btn rounded px-5 mx-5",children:"CREATE"})})]})]})]})})}),j.message&&(0,m.jsx)(u.Z,{message:j.message,type:j.type,onClose:()=>{b({message:"",type:""}),fe("/admin/menus")}})]}),(0,m.jsxs)(c.Z,{show:Y,onHide:ge,centered:!0,children:[(0,m.jsx)(c.Z.Header,{closeButton:!0,children:(0,m.jsx)(c.Z.Title,{children:"Add Meal Category"})}),(0,m.jsx)(c.Z.Body,{children:(0,m.jsxs)(n.Z.Group,{controlId:"newMealCategoryName",children:[(0,m.jsx)(n.Z.Label,{children:"Meal Category Name"}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter meal category name",value:Q,onChange:e=>X(e.target.value)})]})}),(0,m.jsxs)(c.Z.Footer,{children:[(0,m.jsx)(i.Z,{variant:"outline-primary",className:"mt-2 ms-2",onClick:()=>{ce(!0),Ce()},children:"View All Categories"}),(0,m.jsx)(i.Z,{variant:"secondary",onClick:ge,children:"Close"}),(0,m.jsx)(i.Z,{variant:"primary",onClick:async()=>{try{await t.Z.post("/api/meal-types",{mealTypeCategory:Q}),be(),b({message:"Category Added Successfully!",type:"success"}),ee(!1),K(""),X("")}catch(oe){b({message:oe.message||"An error occurred",type:"error"})}},children:"Save"})]})]}),(0,m.jsxs)(c.Z,{show:re,onHide:ve,centered:!0,children:[(0,m.jsx)(c.Z.Header,{closeButton:!0,children:(0,m.jsx)(c.Z.Title,{children:"Add Dietary Category"})}),(0,m.jsx)(c.Z.Body,{children:(0,m.jsxs)(n.Z.Group,{controlId:"newCategoryName",children:[(0,m.jsx)(n.Z.Label,{children:"Category Name"}),(0,m.jsx)(n.Z.Control,{type:"text",placeholder:"Enter category name",value:$,onChange:e=>K(e.target.value)})]})}),(0,m.jsxs)(c.Z.Footer,{children:[(0,m.jsx)(i.Z,{variant:"outline-primary",className:"mt-2 ms-2",onClick:()=>{ie(!0),Ne()},children:"View All Categories"}),(0,m.jsx)(i.Z,{variant:"secondary",onClick:ve,children:"Close"}),(0,m.jsx)(i.Z,{variant:"primary",onClick:async()=>{try{await t.Z.post("/api/dietary-preferences",{dietaryPreferenceCategory:$}),b({message:"Category Added Successfully!",type:"success"}),K(""),X(""),je(),te(!1)}catch(oe){b({message:oe.message||"An error occurred",type:"error"})}},children:"Save"})]})]}),(0,m.jsxs)(c.Z,{show:ne,onHide:()=>ie(!1),centered:!0,children:[(0,m.jsx)(c.Z.Header,{closeButton:!0,children:(0,m.jsx)(c.Z.Title,{children:"View All Dietary Categories"})}),(0,m.jsx)(c.Z.Body,{children:(0,m.jsx)(h,{categories:ae,onDeleteCategory:e=>{w(e),xe(!0),te(!1),ee(!1),ce(!1),ie(!1)}})}),(0,m.jsx)(c.Z.Footer,{children:(0,m.jsx)(i.Z,{variant:"secondary",onClick:()=>ie(!1),children:"Close"})})]}),(0,m.jsxs)(c.Z,{show:le,onHide:()=>ce(!1),centered:!0,children:[(0,m.jsx)(c.Z.Header,{closeButton:!0,children:(0,m.jsx)(c.Z.Title,{children:"View All Meal Categories"})}),(0,m.jsx)(c.Z.Body,{children:(0,m.jsx)(x,{categories:ae,onDeleteCategory1:e=>{Z(e),pe(!0),te(!1),ee(!1),ce(!1),ie(!1)}})}),(0,m.jsx)(c.Z.Footer,{children:(0,m.jsx)(i.Z,{variant:"secondary",onClick:()=>ce(!1),children:"Close"})})]}),(0,m.jsxs)(c.Z,{show:ue,onHide:we,centered:!0,children:[(0,m.jsx)(c.Z.Header,{closeButton:!0,children:(0,m.jsx)(c.Z.Title,{children:"Confirm Delete"})}),(0,m.jsx)(c.Z.Body,{children:"Are you sure you want to delete this menu item?"}),(0,m.jsxs)(c.Z.Footer,{children:[(0,m.jsx)(i.Z,{variant:"secondary",onClick:we,children:"Cancel"}),(0,m.jsx)(i.Z,{variant:"danger",onClick:async()=>{try{await t.Z.delete("/api/meal-types/".concat(k)),b({message:"Category Deleted Successfully!",type:"success"}),te(!1),ee(!1),ce(!1),ie(!1),be(),Ce()}catch(oe){b({message:oe.message||"An error occurred",type:"error"})}},children:"Delete"})]})]}),(0,m.jsxs)(c.Z,{show:he,onHide:we,centered:!0,children:[(0,m.jsx)(c.Z.Header,{closeButton:!0,children:(0,m.jsx)(c.Z.Title,{children:"Confirm Delete"})}),(0,m.jsx)(c.Z.Body,{children:"Are you sure you want to delete this ?"}),(0,m.jsxs)(c.Z.Footer,{children:[(0,m.jsx)(i.Z,{variant:"secondary",onClick:we,children:"Cancel"}),(0,m.jsx)(i.Z,{variant:"danger",onClick:async()=>{try{await t.Z.delete("/api/dietary-preferences/".concat(C)),b({message:"Category Deleted Successfully!",type:"success"}),te(!1),ce(!1),ie(!1),xe(!1),Ne(),je()}catch(oe){b({message:oe.message||"An error occurred",type:"error"})}},children:"Delete"})]})]})]})}},3298:(e,a,s)=>{s.d(a,{Z:()=>d});var r=s(6123),t=s.n(r),l=s(7313),c=s(6184),n=s(8524),i=s(6417);const o=l.forwardRef(((e,a)=>{let{as:s,bsPrefix:r,variant:l="primary",size:o,active:d=!1,disabled:m=!1,className:h,...x}=e;const u=(0,n.vE)(r,"btn"),[p,{tagName:y}]=(0,c.FT)({tagName:s,disabled:m,...x}),f=y;return(0,i.jsx)(f,{...p,...x,ref:a,disabled:m,className:t()(h,u,d&&"active",l&&"".concat(u,"-").concat(l),o&&"".concat(u,"-").concat(o),x.href&&m&&"disabled")})}));o.displayName="Button";const d=o},195:(e,a,s)=>{s.d(a,{Z:()=>A});var r=s(6123),t=s.n(r),l=s(7313),c=s(8524),n=s(6417);const i=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...i}=e;return r=(0,c.vE)(r,"card-body"),(0,n.jsx)(l,{ref:a,className:t()(s,r),...i})}));i.displayName="CardBody";const o=i,d=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...i}=e;return r=(0,c.vE)(r,"card-footer"),(0,n.jsx)(l,{ref:a,className:t()(s,r),...i})}));d.displayName="CardFooter";const m=d;var h=s(5614);const x=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:i="div",...o}=e;const d=(0,c.vE)(s,"card-header"),m=(0,l.useMemo)((()=>({cardHeaderBsPrefix:d})),[d]);return(0,n.jsx)(h.Z.Provider,{value:m,children:(0,n.jsx)(i,{ref:a,...o,className:t()(r,d)})})}));x.displayName="CardHeader";const u=x,p=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,variant:l,as:i="img",...o}=e;const d=(0,c.vE)(s,"card-img");return(0,n.jsx)(i,{ref:a,className:t()(l?"".concat(d,"-").concat(l):d,r),...o})}));p.displayName="CardImg";const y=p,f=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...i}=e;return r=(0,c.vE)(r,"card-img-overlay"),(0,n.jsx)(l,{ref:a,className:t()(s,r),...i})}));f.displayName="CardImgOverlay";const g=f,j=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="a",...i}=e;return r=(0,c.vE)(r,"card-link"),(0,n.jsx)(l,{ref:a,className:t()(s,r),...i})}));j.displayName="CardLink";const b=j;var v=s(6205);const N=(0,v.Z)("h6"),C=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=N,...i}=e;return r=(0,c.vE)(r,"card-subtitle"),(0,n.jsx)(l,{ref:a,className:t()(s,r),...i})}));C.displayName="CardSubtitle";const w=C,k=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="p",...i}=e;return r=(0,c.vE)(r,"card-text"),(0,n.jsx)(l,{ref:a,className:t()(s,r),...i})}));k.displayName="CardText";const Z=k,F=(0,v.Z)("h5"),S=l.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l=F,...i}=e;return r=(0,c.vE)(r,"card-title"),(0,n.jsx)(l,{ref:a,className:t()(s,r),...i})}));S.displayName="CardTitle";const E=S,I=l.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,bg:l,text:i,border:d,body:m=!1,children:h,as:x="div",...u}=e;const p=(0,c.vE)(s,"card");return(0,n.jsx)(x,{ref:a,...u,className:t()(r,p,l&&"bg-".concat(l),i&&"text-".concat(i),d&&"border-".concat(d)),children:m?(0,n.jsx)(o,{children:h}):h})}));I.displayName="Card";const A=Object.assign(I,{Img:y,Title:E,Subtitle:w,Body:o,Link:b,Text:Z,Header:u,Footer:m,ImgOverlay:g})},7533:(e,a,s)=>{s.d(a,{Z:()=>q});var r=s(6123),t=s.n(r),l=s(5192),c=s.n(l),n=s(7313),i=s(6417);const o={type:c().string,tooltip:c().bool,as:c().elementType},d=n.forwardRef(((e,a)=>{let{as:s="div",className:r,type:l="valid",tooltip:c=!1,...n}=e;return(0,i.jsx)(s,{...n,ref:a,className:t()(r,"".concat(l,"-").concat(c?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=o;const m=d,h=n.createContext({});var x=s(8524);const u=n.forwardRef(((e,a)=>{let{id:s,bsPrefix:r,className:l,type:c="checkbox",isValid:o=!1,isInvalid:d=!1,as:m="input",...u}=e;const{controlId:p}=(0,n.useContext)(h);return r=(0,x.vE)(r,"form-check-input"),(0,i.jsx)(m,{...u,ref:a,type:c,id:s||p,className:t()(l,r,o&&"is-valid",d&&"is-invalid")})}));u.displayName="FormCheckInput";const p=u,y=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,htmlFor:l,...c}=e;const{controlId:o}=(0,n.useContext)(h);return s=(0,x.vE)(s,"form-check-label"),(0,i.jsx)("label",{...c,ref:a,htmlFor:l||o,className:t()(r,s)})}));y.displayName="FormCheckLabel";const f=y;const g=n.forwardRef(((e,a)=>{let{id:s,bsPrefix:r,bsSwitchPrefix:l,inline:c=!1,reverse:o=!1,disabled:d=!1,isValid:u=!1,isInvalid:y=!1,feedbackTooltip:g=!1,feedback:j,feedbackType:b,className:v,style:N,title:C="",type:w="checkbox",label:k,children:Z,as:F="input",...S}=e;r=(0,x.vE)(r,"form-check"),l=(0,x.vE)(l,"form-switch");const{controlId:E}=(0,n.useContext)(h),I=(0,n.useMemo)((()=>({controlId:s||E})),[E,s]),A=!Z&&null!=k&&!1!==k||function(e,a){return n.Children.toArray(e).some((e=>n.isValidElement(e)&&e.type===a))}(Z,f),P=(0,i.jsx)(p,{...S,type:"switch"===w?"checkbox":w,ref:a,isValid:u,isInvalid:y,disabled:d,as:F});return(0,i.jsx)(h.Provider,{value:I,children:(0,i.jsx)("div",{style:N,className:t()(v,A&&r,c&&"".concat(r,"-inline"),o&&"".concat(r,"-reverse"),"switch"===w&&l),children:Z||(0,i.jsxs)(i.Fragment,{children:[P,A&&(0,i.jsx)(f,{title:C,children:k}),j&&(0,i.jsx)(m,{type:b,tooltip:g,children:j})]})})})}));g.displayName="FormCheck";const j=Object.assign(g,{Input:p,Label:f});s(1024);const b=n.forwardRef(((e,a)=>{let{bsPrefix:s,type:r,size:l,htmlSize:c,id:o,className:d,isValid:m=!1,isInvalid:u=!1,plaintext:p,readOnly:y,as:f="input",...g}=e;const{controlId:j}=(0,n.useContext)(h);return s=(0,x.vE)(s,"form-control"),(0,i.jsx)(f,{...g,type:r,size:c,ref:a,readOnly:y,id:o||j,className:t()(d,p?"".concat(s,"-plaintext"):s,l&&"".concat(s,"-").concat(l),"color"===r&&"".concat(s,"-color"),m&&"is-valid",u&&"is-invalid")})}));b.displayName="FormControl";const v=Object.assign(b,{Feedback:m}),N=n.forwardRef(((e,a)=>{let{className:s,bsPrefix:r,as:l="div",...c}=e;return r=(0,x.vE)(r,"form-floating"),(0,i.jsx)(l,{ref:a,className:t()(s,r),...c})}));N.displayName="FormFloating";const C=N,w=n.forwardRef(((e,a)=>{let{controlId:s,as:r="div",...t}=e;const l=(0,n.useMemo)((()=>({controlId:s})),[s]);return(0,i.jsx)(h.Provider,{value:l,children:(0,i.jsx)(r,{...t,ref:a})})}));w.displayName="FormGroup";const k=w;var Z=s(1616);const F=n.forwardRef(((e,a)=>{let{as:s="label",bsPrefix:r,column:l=!1,visuallyHidden:c=!1,className:o,htmlFor:d,...m}=e;const{controlId:u}=(0,n.useContext)(h);r=(0,x.vE)(r,"form-label");let p="col-form-label";"string"===typeof l&&(p="".concat(p," ").concat(p,"-").concat(l));const y=t()(o,r,c&&"visually-hidden",l&&p);return d=d||u,l?(0,i.jsx)(Z.Z,{ref:a,as:"label",className:y,htmlFor:d,...m}):(0,i.jsx)(s,{ref:a,className:y,htmlFor:d,...m})}));F.displayName="FormLabel";const S=F,E=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,id:l,...c}=e;const{controlId:o}=(0,n.useContext)(h);return s=(0,x.vE)(s,"form-range"),(0,i.jsx)("input",{...c,type:"range",ref:a,className:t()(r,s),id:l||o})}));E.displayName="FormRange";const I=E,A=n.forwardRef(((e,a)=>{let{bsPrefix:s,size:r,htmlSize:l,className:c,isValid:o=!1,isInvalid:d=!1,id:m,...u}=e;const{controlId:p}=(0,n.useContext)(h);return s=(0,x.vE)(s,"form-select"),(0,i.jsx)("select",{...u,size:l,ref:a,className:t()(c,s,r&&"".concat(s,"-").concat(r),o&&"is-valid",d&&"is-invalid"),id:m||p})}));A.displayName="FormSelect";const P=A,R=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,as:l="small",muted:c,...n}=e;return s=(0,x.vE)(s,"form-text"),(0,i.jsx)(l,{...n,ref:a,className:t()(r,s,c&&"text-muted")})}));R.displayName="FormText";const T=R,_=n.forwardRef(((e,a)=>(0,i.jsx)(j,{...e,ref:a,type:"switch"})));_.displayName="Switch";const B=Object.assign(_,{Input:j.Input,Label:j.Label}),D=n.forwardRef(((e,a)=>{let{bsPrefix:s,className:r,children:l,controlId:c,label:n,...o}=e;return s=(0,x.vE)(s,"form-floating"),(0,i.jsxs)(k,{ref:a,className:t()(r,s),controlId:c,...o,children:[l,(0,i.jsx)("label",{htmlFor:c,children:n})]})}));D.displayName="FloatingLabel";const H=D,L={_ref:c().any,validated:c().bool,as:c().elementType},O=n.forwardRef(((e,a)=>{let{className:s,validated:r,as:l="form",...c}=e;return(0,i.jsx)(l,{...c,ref:a,className:t()(s,r&&"was-validated")})}));O.displayName="Form",O.propTypes=L;const q=Object.assign(O,{Group:k,Control:v,Floating:C,Check:j,Switch:B,Label:S,Text:T,Range:I,Select:P,FloatingLabel:H})},1024:e=>{var a=function(){};e.exports=a}}]);