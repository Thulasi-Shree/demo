"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[6233],{5104:(e,s,r)=>{r(7313),r(259),r(1930),r(6417)},6233:(e,s,r)=>{r.r(s),r.d(s,{default:()=>n});var a=r(6573),t=(r(5104),r(7313)),l=r(195),d=r(8467),c=(r(1930),r(6417));function i(){const e=JSON.parse(localStorage.getItem("cartItems"))||[],s=JSON.parse(localStorage.getItem("cartItemsTotal")),[r,a]=(0,t.useState)(e.reduce(((e,s)=>(e[s._id]=Number(s.quantity),e)),{}));return(0,t.useEffect)((()=>{a(e.reduce(((e,s)=>(e[s._id]=Number(s.quantity),e)),{}))}),[]),(0,c.jsx)(c.Fragment,{children:0===e.length?(0,c.jsx)("h4",{className:"mt-5",style:{color:"black",backgroundColor:"transparent",fontWeight:"500"},children:"Your Cart is Empty"}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("h5",{className:"mt-1",style:{color:"black",backgroundColor:"transparent",fontWeight:"500"},children:["Your Cart: ",(0,c.jsxs)("b",{children:[e.length," items"]})]}),(0,c.jsx)("div",{id:"MainCart",children:(0,c.jsxs)(l.Z,{className:"p-2 justify-content-between  mx-auto",style:{color:"black",backgroundColor:"transparent",fontWeight:"500"},children:[(0,c.jsx)("div",{className:"col-12 ",children:e.map((e=>(0,c.jsx)(t.Fragment,{children:(0,c.jsx)("div",{className:"row",children:(0,c.jsx)("div",{className:"col-12",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-4",children:(0,c.jsx)("p",{style:{color:"black",backgroundColor:"transparent",fontWeight:"500"},children:e.name})}),(0,c.jsx)("div",{className:"col-4",children:(0,c.jsxs)("p",{id:"card_item_price",style:{color:"black",backgroundColor:"transparent",fontWeight:"500"},children:["Qty: ",e.quantity||1]})}),(0,c.jsx)("div",{className:"col-4 ",children:(0,c.jsxs)("p",{id:"card_item_price",style:{color:"black",backgroundColor:"transparent",fontWeight:"500"},children:["$",e.price*e.quantity]})})]})})})},e._id)))}),(0,c.jsx)("div",{id:"order_summary",className:"col-11  pt-2  ",children:(0,c.jsxs)("p",{style:{color:"black",backgroundColor:"transparent",fontSize:"13px",fontWeight:"500"},children:["Items total:"," ",(0,c.jsxs)("span",{className:"order-summary-values",style:{color:"black",backgroundColor:"transparent",fontWeight:"500"},children:["$",Number(s).toFixed(2)]})]})})]})})]})})}var o=r(4423);const n=()=>{const e=(0,d.s0)(),[s,r]=(0,t.useState)([]),[n,m]=(0,t.useState)({message:"",type:""}),[x,h]=(0,t.useState)(null),[p,u]=(0,t.useState)(!0),[g,N]=(0,t.useState)(!0),j=JSON.parse(localStorage.getItem("orderType")),b=function(e){let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};try{const r=localStorage.getItem(e);return r?JSON.parse(r):s}catch(r){return console.error("Error parsing JSON for key ".concat(e,":"),r),s}},y=b("shippingInfo",{}),f=b("user",{}),v=JSON.parse(localStorage.getItem("emailOrMobile")),C=JSON.parse(localStorage.getItem("orderNotes")),S=JSON.parse(localStorage.getItem("billingAddress")),T=JSON.parse(localStorage.getItem("deliveryAddress")),I=JSON.parse(localStorage.getItem("restaurantId")),k=JSON.parse(localStorage.getItem("selectedDate")),O=JSON.parse(localStorage.getItem("selectedTimeSlot")),w=JSON.parse(localStorage.getItem("distanceResponse")),P=JSON.parse(localStorage.getItem("isloggedIn")),[E,J]=(0,t.useState)(""),[Z,R]=(0,t.useState)(""),[_,A]=(0,t.useState)(""),F=p?0:(Number(Z)+Number(w*E)).toFixed(2),W=JSON.parse(localStorage.getItem("cartItemsTotal")),B=Number(W),D=(Number(_*B).toFixed(2),Number(Number(F)+Number(B)+Number(_)).toFixed(2));(0,t.useEffect)((()=>{(async()=>{try{const e=await a.Z.get("/api/restaurant",{params:{id:I}});h(e.data.restaurant.restaurantBranch),localStorage.setItem("restaurantBranch",JSON.stringify(x))}catch(e){m({message:"Error fetching restaurant details",type:"error"})}})(),(async()=>{try{const e=await a.Z.get("/api/admin/settings/get",{});J(e.data.data[0].deliveryChargePerKm),R(e.data.data[0].minDeliveryCharge),A(e.data.data[0].taxAmount)}catch(e){m({message:"Error fetching delivery & tax charges",type:"error"})}})(),N(!1),console.log(j)}),[I,y]);const M={userName:"".concat(f.name," ").concat(f.lastName),city:S.city,orderType:j,selectedTimeSlot:"".concat(O),state:S.state,streetAddress:S.streetAddress,postalCode:S.postalCode||S.postal_code,country:S.country};return(0,t.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("cartItems"))||[];r(e),u("Pickup"===j)}),[]),g?(0,c.jsx)("div",{children:"Loading..."}):(0,c.jsx)("div",{className:"ConfirmOrderMainImg bg-white",children:(0,c.jsx)("div",{className:"py-5",children:(0,c.jsx)(l.Z,{className:"row d-flex CardImg114 bg-white justify-content-between col-12 col-md-10 col-sm-12 col-xs-12 col-lg-8 mx-auto",id:"CardBackIMg1",children:(0,c.jsxs)("div",{className:" order-confirm ",style:{textAlign:"left"},children:[(0,c.jsx)("h4",{className:"mb-3 my-2",id:"CardText",children:"Order Info"}),(0,c.jsx)("div",{className:"container text-center",children:(0,c.jsxs)("div",{className:"row",children:[n.message&&(0,c.jsx)(o.Z,{message:n.message,type:n.type,onClose:()=>{m({message:"",type:""})}}),(0,c.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:(0,c.jsxs)(l.Z,{className:"p-2 borderUp",id:"CardText",children:[(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Name:"}),"  ",(null===f||void 0===f?void 0:f.name)||(null===y||void 0===y?void 0:y.name)," ",(null===f||void 0===f?void 0:f.lastName)||(null===y||void 0===y?void 0:y.lastName)]}),P&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Email:"})," ",f.email]}),(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Phone:"})," ",y.mobileNumber||f.phone]})]}),!P&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Email / Phone:"})," ",v]}),(0,c.jsx)("hr",{})]}),"Pickup"===j?(0,c.jsxs)("div",{id:"CardText",children:[(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Type:"})," Pickup"]}),(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Order date:"})," ",k]}),(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Pickup Time:"})," ",M.selectedTimeSlot]}),(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Restaurant:"})," ",x]}),(0,c.jsx)(l.Z,{className:"mt-3 p-2",id:"CardText",children:(0,c.jsxs)("p",{className:"mb-4",id:"CardText",children:[(0,c.jsx)("b",{id:"CardText",children:"Billing Address:"})," ",M.streetAddress,", ",M.city,","," ",M.state,", ",M.postalCode||S.postalCode,","," ",M.country]})})]}):(0,c.jsxs)("div",{children:[(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Type:"})," Delivery"]}),(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Restaurant:"})," ",x]}),(0,c.jsxs)("p",{id:"CardText",children:[(0,c.jsx)("b",{children:"Delivery Time:"})," ",M.selectedTimeSlot||Date.now()]}),(0,c.jsx)(l.Z,{className:"mt-3 p-2",id:"CardText",children:(0,c.jsxs)("p",{className:"mb-4",id:"CardText",children:[(0,c.jsx)("b",{id:"CardText",children:"Billing Address:"})," ",M.streetAddress,", ",M.city,","," ",M.state,", ",M.postalCode||S.postal_code,","," ",M.country]})}),(0,c.jsx)(l.Z,{className:"mt-3 p-2",id:"CardText",children:(0,c.jsxs)("p",{className:"mb-4",id:"CardText",children:[(0,c.jsx)("b",{id:"CardText",children:"Delivery Address:"})," ",T.streetAddress,","," ",T.city,", ",T.state,","," ",T.postalCode||T.postal_code,","," ",T.country]})}),(0,c.jsx)(l.Z,{className:"mt-3 p-2",id:"CardText",children:(0,c.jsxs)("p",{className:"mb-4",id:"CardText",children:[(0,c.jsx)("b",{id:"CardText",children:"Order Instruction:"})," ",C]})})]})]})}),(0,c.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 col-lg-6",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)("div",{className:"col-lg-12 col-sm-12 col-xs-12 col-md-6 col-lg-6",children:(0,c.jsx)(i,{})})," ",(0,c.jsx)("div",{className:"col-lg-12 col-sm-12 col-md-6 col-lg-6",children:(0,c.jsxs)(l.Z,{className:" p-5 borderUp h-100 ",style:{color:"black",backgroundColor:"transparent",fontWeight:"500"},id:"order_summary",children:[(0,c.jsxs)("p",{id:"CardText",children:["Tax:"," ",(0,c.jsxs)("span",{className:"order-summary-values",id:"CardText",children:["$",_]})]}),"Delivery"===j?(0,c.jsxs)("p",{id:"CardText",children:["Delivery:"," ",(0,c.jsxs)("span",{className:"order-summary-values",children:["$",F]})]}):"",(0,c.jsxs)("p",{id:"CardText",children:["Total:"," ",(0,c.jsxs)("span",{className:"order-summary-values",id:"CardText",children:["$",D]})]})]})})]})}),(0,c.jsx)("div",{className:"d-flex justify-content-center",children:(0,c.jsx)("button",{type:"submit",id:"checkout_btn",className:"btn btn my-color my-3",onClick:()=>{const r={shippingInfo:M,cartItems:s,orderSummary:{shipping:Number(F),tax:Number(_),total:Number(D)}};localStorage.setItem("confirmOrder",JSON.stringify(r)),e("/payment")},children:"Proceed to Payment"})})]})})]})})})})}},195:(e,s,r)=>{r.d(s,{Z:()=>E});var a=r(6123),t=r.n(a),l=r(7313),d=r(8524),c=r(6417);const i=l.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:l="div",...i}=e;return a=(0,d.vE)(a,"card-body"),(0,c.jsx)(l,{ref:s,className:t()(r,a),...i})}));i.displayName="CardBody";const o=i,n=l.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:l="div",...i}=e;return a=(0,d.vE)(a,"card-footer"),(0,c.jsx)(l,{ref:s,className:t()(r,a),...i})}));n.displayName="CardFooter";const m=n;var x=r(5614);const h=l.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,as:i="div",...o}=e;const n=(0,d.vE)(r,"card-header"),m=(0,l.useMemo)((()=>({cardHeaderBsPrefix:n})),[n]);return(0,c.jsx)(x.Z.Provider,{value:m,children:(0,c.jsx)(i,{ref:s,...o,className:t()(a,n)})})}));h.displayName="CardHeader";const p=h,u=l.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,variant:l,as:i="img",...o}=e;const n=(0,d.vE)(r,"card-img");return(0,c.jsx)(i,{ref:s,className:t()(l?"".concat(n,"-").concat(l):n,a),...o})}));u.displayName="CardImg";const g=u,N=l.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:l="div",...i}=e;return a=(0,d.vE)(a,"card-img-overlay"),(0,c.jsx)(l,{ref:s,className:t()(r,a),...i})}));N.displayName="CardImgOverlay";const j=N,b=l.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:l="a",...i}=e;return a=(0,d.vE)(a,"card-link"),(0,c.jsx)(l,{ref:s,className:t()(r,a),...i})}));b.displayName="CardLink";const y=b;var f=r(6205);const v=(0,f.Z)("h6"),C=l.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:l=v,...i}=e;return a=(0,d.vE)(a,"card-subtitle"),(0,c.jsx)(l,{ref:s,className:t()(r,a),...i})}));C.displayName="CardSubtitle";const S=C,T=l.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:l="p",...i}=e;return a=(0,d.vE)(a,"card-text"),(0,c.jsx)(l,{ref:s,className:t()(r,a),...i})}));T.displayName="CardText";const I=T,k=(0,f.Z)("h5"),O=l.forwardRef(((e,s)=>{let{className:r,bsPrefix:a,as:l=k,...i}=e;return a=(0,d.vE)(a,"card-title"),(0,c.jsx)(l,{ref:s,className:t()(r,a),...i})}));O.displayName="CardTitle";const w=O,P=l.forwardRef(((e,s)=>{let{bsPrefix:r,className:a,bg:l,text:i,border:n,body:m=!1,children:x,as:h="div",...p}=e;const u=(0,d.vE)(r,"card");return(0,c.jsx)(h,{ref:s,...p,className:t()(a,u,l&&"bg-".concat(l),i&&"text-".concat(i),n&&"border-".concat(n)),children:m?(0,c.jsx)(o,{children:x}):x})}));P.displayName="Card";const E=Object.assign(P,{Img:g,Title:w,Subtitle:S,Body:o,Link:y,Text:I,Header:p,Footer:m,ImgOverlay:j})},1930:()=>{}}]);