"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[6822],{6220:(e,r,a)=>{a.d(r,{Z:()=>l});var s=a(7313),t=a(3298),d=a(465),c=a(259),n=a(1309),i=a(6417);const l=e=>{let{headers:r,data:a,onEdit:l,onUpdate:o,update:x,onDelete:h,onAddMenu:m,onViewDetails:j}=e;const[p,b]=(0,s.useState)("asc"),[u,C]=(0,s.useState)(null),N=e=>{let r;r=e===u&&"asc"===p?"desc":"asc",b(r),C(e)};return(0,i.jsx)("div",{children:(0,i.jsxs)(d.Z,{bordered:!0,responsive:!0,className:" mt-4 text-center w-100 Cardimg123",children:[(0,i.jsx)("thead",{className:"table-head bg-white",children:(0,i.jsxs)("tr",{children:[r.map((e=>(0,i.jsx)("th",{id:"CardText ",onClick:()=>N((e=>{switch(e){case"Menu Name":case"Name":return"name";case"Price":return"price";case"Customer":return"customer";case"Restaurant ID":return"_id";case"Restaurant Branch":return"restaurantBranch";default:return e.toLowerCase()}})(e)),children:e},e))),l&&(0,i.jsx)("th",{children:"View / Edit"}),o&&(0,i.jsx)("th",{children:" Update"}),x&&(0,i.jsx)("th",{children:" View"}),j&&(0,i.jsx)("th",{children:" View"}),h&&(0,i.jsx)("th",{children:"Delete"}),m&&(0,i.jsx)("th",{children:"Add Menu"})]})}),(0,i.jsx)("tbody",{children:a.slice().sort(((e,r)=>{if("name"===u){const a="".concat(e.name," ").concat(e.lastName),s="".concat(r.name," ").concat(r.lastName);return"asc"===p?a.localeCompare(s):s.localeCompare(a)}return"price"===u?"asc"===p?e.price-r.price:r.price-e.price:"customer"===u?"asc"===p?e.shipping.name.localeCompare(r.shipping.name):r.shipping.name.localeCompare(e.shipping.name):"role"===u?"asc"===p?e.role.localeCompare(r.role):r.role.localeCompare(e.role):0})).map(((e,a)=>(0,i.jsxs)("tr",{className:"bg-white",style:{backgroundColor:"white"},children:[r.map((r=>"Sl No"===r?(0,i.jsx)("td",{children:(0,i.jsx)("p",{className:"text-black",id:"CardText",children:a+1})},r):"Restaurant Address"===r?(0,i.jsx)("td",{children:(0,i.jsxs)("p",{className:"text-black",id:"CardText",children:[e.address.line1,", ",e.address.line2,","," ",e.address.city,", ",e.address.state,","," ",e.address.postalCode,", ",e.address.country]})},r):"Order ID"===r?(0,i.jsx)("td",{children:(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.orderId})},r):"Carousal Image"===r?(0,i.jsx)("td",{children:(0,i.jsx)("img",{src:e.images[0].image,alt:"Carousel",style:{width:"75px",height:"auto"}})},r):"Carousal Text"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.text})]},r):"Branch ID"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantId})]},r):"Restaurant Branch ID"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantName})]},r):"Opening Hours"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.openingHours})]},r):"Restaurant Branch"===r?(0,i.jsx)("td",{onClick:()=>N("restaurantBranch"),children:(0,i.jsxs)("p",{className:"text-black",id:"CardText",children:[e.restaurantBranch," "]})},r):"User ID"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e._id})]},r):"Status"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.orderStatus})," "]},r):"Pickup/Delivery Time"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.selectedTimeSlot})]},r):"Order Date"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.createdAt})]},r):"Phone No"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.phone})]},r):"Email Address"===r?(0,i.jsxs)("td",{children:[" ",(0,i.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.email})]},r):"Category"===r?(0,i.jsxs)("td",{children:[(0,i.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,i.jsx)("b",{children:"MealType: "})," ",e.mealTypeCategory,","]}),(0,i.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,i.jsx)("b",{children:"Dietary Preference: "})," ",e.dietaryPreferenceCategory]})]},r):"Menu Name"===r?(0,i.jsx)("td",{onClick:()=>N("name"),children:(0,i.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",e.name," "]})},r):"Name"===r?(0,i.jsx)("div",{style:{backgroundColor:"white",border:"none",display:"flex",justifyContent:"center"},children:(0,i.jsx)("td",{style:{border:"none",width:"100px"},onClick:()=>N("name"),children:(0,i.jsxs)("p",{id:"CardText",children:[" ",e.name," ",e.lastName]})},r)}):"Role"===r?(0,i.jsx)("td",{onClick:()=>N("role"),children:(0,i.jsxs)("p",{id:"CardText",children:[" ",e.role," "]})},r):"Customer"===r?(0,i.jsx)("td",{onClick:()=>N("customer"),children:(0,i.jsxs)("p",{id:"CardText",children:[" ",e.shipping.name," "]})},r):(0,i.jsx)("td",{children:(0,i.jsx)("p",{id:"CardText",children:e[r.toLowerCase()]||"N/A"})},r))),o&&(0,i.jsx)("td",{children:(0,i.jsx)(t.Z,{className:" btn my-3 px-4 btn bg-white text-black ",onClick:()=>o(e._id),children:(0,i.jsx)(c.G,{icon:n.Xcf})})}),x&&(0,i.jsx)("td",{children:(0,i.jsx)(t.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>x(e._id),children:"Update"})}),l&&(0,i.jsx)("td",{children:(0,i.jsx)(t.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>l(e._id),children:(0,i.jsx)(c.G,{icon:n.Mdf})})}),h&&(0,i.jsx)("td",{children:(0,i.jsx)(t.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>h(e._id),children:(0,i.jsx)(c.G,{icon:n.$aW})})}),j&&(0,i.jsx)("td",{children:(0,i.jsx)(t.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>j(e._id),children:(0,i.jsx)(c.G,{icon:n.Mdf})})}),m&&(0,i.jsx)("td",{children:(0,i.jsx)(t.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>m(e._id),children:"Add Menu"})})]},e._id)))})]})})}},420:(e,r,a)=>{a.r(r),a.d(r,{default:()=>i});var s=a(7313),t=a(8467),d=a(6573),c=a(6220),n=a(6417);const i=()=>{const e=(0,t.s0)(),[r,a]=(0,s.useState)([]),[i,l]=(0,s.useState)([]),[o,x]=(0,s.useState)(!0),h=JSON.parse(localStorage.getItem("user"))._id,m=["Order ID","Restaurant Branch","Status"];function j(r){e("/order/".concat(r))}if((0,s.useEffect)((()=>{(async()=>{try{const e=await d.Z.get("/api/myorders?userId=".concat(h),{withCredentials:!0}),{order:r}=e.data,s=r.filter((e=>"Delivered"===e.orderStatus)),t=r.filter((e=>"Delivered"!==e.orderStatus));l(s),a(t)}catch(e){console.error("Error fetching orders:",e)}finally{x(!1)}})()}),[]),o)return(0,n.jsx)("div",{children:"Loading..."});const p=0===r.length,b=0===i.length;return p&&b?(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsx)("div",{className:"vh-100 d-flex justify-content-center text-center text-black align-items-center",children:"No orders available."})}):(0,n.jsx)("div",{className:"bg-white",children:(0,n.jsxs)("div",{className:"container col-lg-8",id:"CardText",children:[(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col p-4 my-2",children:!p&&(0,n.jsxs)("div",{className:"",children:[(0,n.jsx)("h3",{style:{backgroundColor:"white",fontWeight:"550"},children:"Current Orders"}),(0,n.jsx)(c.Z,{className:"CardImg114",data:r,headers:m,onViewDetails:j})]})})}),(0,n.jsx)("div",{className:"row",children:(0,n.jsx)("div",{className:"col p-4 mb-2",children:!b&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h3",{children:"Delivered Orders"}),(0,n.jsx)(c.Z,{data:i,headers:m,onViewDetails:j})]})})})]})})}},3298:(e,r,a)=>{a.d(r,{Z:()=>o});var s=a(6123),t=a.n(s),d=a(7313),c=a(6184),n=a(8524),i=a(6417);const l=d.forwardRef(((e,r)=>{let{as:a,bsPrefix:s,variant:d="primary",size:l,active:o=!1,disabled:x=!1,className:h,...m}=e;const j=(0,n.vE)(s,"btn"),[p,{tagName:b}]=(0,c.FT)({tagName:a,disabled:x,...m}),u=b;return(0,i.jsx)(u,{...p,...m,ref:r,disabled:x,className:t()(h,j,o&&"active",d&&"".concat(j,"-").concat(d),l&&"".concat(j,"-").concat(l),m.href&&x&&"disabled")})}));l.displayName="Button";const o=l},465:(e,r,a)=>{a.d(r,{Z:()=>i});var s=a(6123),t=a.n(s),d=a(7313),c=a(8524),n=a(6417);const i=d.forwardRef(((e,r)=>{let{bsPrefix:a,className:s,striped:d,bordered:i,borderless:l,hover:o,size:x,variant:h,responsive:m,...j}=e;const p=(0,c.vE)(a,"table"),b=t()(s,p,h&&"".concat(p,"-").concat(h),x&&"".concat(p,"-").concat(x),d&&"".concat(p,"-").concat("string"===typeof d?"striped-".concat(d):"striped"),i&&"".concat(p,"-bordered"),l&&"".concat(p,"-borderless"),o&&"".concat(p,"-hover")),u=(0,n.jsx)("table",{...j,className:b,ref:r});if(m){let e="".concat(p,"-responsive");return"string"===typeof m&&(e="".concat(e,"-").concat(m)),(0,n.jsx)("div",{className:e,children:u})}return u}))}}]);