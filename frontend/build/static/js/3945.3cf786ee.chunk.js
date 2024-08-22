"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[3945],{6220:(e,a,t)=>{t.d(a,{Z:()=>i});var s=t(7313),r=t(3298),c=t(465),d=t(259),l=t(1309),n=t(6417);const i=e=>{let{headers:a,data:t,onEdit:i,onUpdate:o,update:x,onDelete:h,onAddMenu:m,onViewDetails:p}=e;const[j,u]=(0,s.useState)("asc"),[b,C]=(0,s.useState)(null),g=e=>{let a;a=e===b&&"asc"===j?"desc":"asc",u(a),C(e)};return(0,n.jsx)("div",{children:(0,n.jsxs)(c.Z,{bordered:!0,responsive:!0,className:" mt-4 text-center w-100 Cardimg123",children:[(0,n.jsx)("thead",{className:"table-head bg-white",children:(0,n.jsxs)("tr",{children:[a.map((e=>(0,n.jsx)("th",{id:"CardText ",onClick:()=>g((e=>{switch(e){case"Menu Name":case"Name":return"name";case"Price":return"price";case"Customer":return"customer";case"Restaurant ID":return"_id";case"Restaurant Branch":return"restaurantBranch";default:return e.toLowerCase()}})(e)),children:e},e))),i&&(0,n.jsx)("th",{children:"View / Edit"}),o&&(0,n.jsx)("th",{children:" Update"}),x&&(0,n.jsx)("th",{children:" View"}),p&&(0,n.jsx)("th",{children:" View"}),h&&(0,n.jsx)("th",{children:"Delete"}),m&&(0,n.jsx)("th",{children:"Add Menu"})]})}),(0,n.jsx)("tbody",{children:t.slice().sort(((e,a)=>{if("name"===b){const t="".concat(e.name," ").concat(e.lastName),s="".concat(a.name," ").concat(a.lastName);return"asc"===j?t.localeCompare(s):s.localeCompare(t)}return"price"===b?"asc"===j?e.price-a.price:a.price-e.price:"customer"===b?"asc"===j?e.shipping.name.localeCompare(a.shipping.name):a.shipping.name.localeCompare(e.shipping.name):"role"===b?"asc"===j?e.role.localeCompare(a.role):a.role.localeCompare(e.role):0})).map(((e,t)=>(0,n.jsxs)("tr",{className:"bg-white",style:{backgroundColor:"white"},children:[a.map((a=>"Sl No"===a?(0,n.jsx)("td",{children:(0,n.jsx)("p",{className:"text-black",id:"CardText",children:t+1})},a):"Restaurant Address"===a?(0,n.jsx)("td",{children:(0,n.jsxs)("p",{className:"text-black",id:"CardText",children:[e.address.line1,", ",e.address.line2,","," ",e.address.city,", ",e.address.state,","," ",e.address.postalCode,", ",e.address.country]})},a):"Order ID"===a?(0,n.jsx)("td",{children:(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.orderId})},a):"Carousal Image"===a?(0,n.jsx)("td",{children:(0,n.jsx)("img",{src:e.images[0].image,alt:"Carousel",style:{width:"75px",height:"auto"}})},a):"Carousal Text"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.text})]},a):"Branch ID"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantId})]},a):"Restaurant Branch ID"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantName})]},a):"Opening Hours"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.openingHours})]},a):"Restaurant Branch"===a?(0,n.jsx)("td",{onClick:()=>g("restaurantBranch"),children:(0,n.jsxs)("p",{className:"text-black",id:"CardText",children:[e.restaurantBranch," "]})},a):"User ID"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e._id})]},a):"Status"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.orderStatus})," "]},a):"Pickup/Delivery Time"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.selectedTimeSlot})]},a):"Order Date"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.createdAt})]},a):"Phone No"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.phone})]},a):"Email Address"===a?(0,n.jsxs)("td",{children:[" ",(0,n.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.email})]},a):"Category"===a?(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,n.jsx)("b",{children:"MealType: "})," ",e.mealTypeCategory,","]}),(0,n.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,n.jsx)("b",{children:"Dietary Preference: "})," ",e.dietaryPreferenceCategory]})]},a):"Menu Name"===a?(0,n.jsx)("td",{onClick:()=>g("name"),children:(0,n.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",e.name," "]})},a):"Name"===a?(0,n.jsx)("div",{style:{backgroundColor:"white",border:"none",display:"flex",justifyContent:"center"},children:(0,n.jsx)("td",{style:{border:"none",width:"100px"},onClick:()=>g("name"),children:(0,n.jsxs)("p",{id:"CardText",children:[" ",e.name," ",e.lastName]})},a)}):"Role"===a?(0,n.jsx)("td",{onClick:()=>g("role"),children:(0,n.jsxs)("p",{id:"CardText",children:[" ",e.role," "]})},a):"Customer"===a?(0,n.jsx)("td",{onClick:()=>g("customer"),children:(0,n.jsxs)("p",{id:"CardText",children:[" ",e.shipping.name," "]})},a):(0,n.jsx)("td",{children:(0,n.jsx)("p",{id:"CardText",children:e[a.toLowerCase()]||"N/A"})},a))),o&&(0,n.jsx)("td",{children:(0,n.jsx)(r.Z,{className:" btn my-3 px-4 btn bg-white text-black ",onClick:()=>o(e._id),children:(0,n.jsx)(d.G,{icon:l.Xcf})})}),x&&(0,n.jsx)("td",{children:(0,n.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>x(e._id),children:"Update"})}),i&&(0,n.jsx)("td",{children:(0,n.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>i(e._id),children:(0,n.jsx)(d.G,{icon:l.Mdf})})}),h&&(0,n.jsx)("td",{children:(0,n.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>h(e._id),children:(0,n.jsx)(d.G,{icon:l.$aW})})}),p&&(0,n.jsx)("td",{children:(0,n.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>p(e._id),children:(0,n.jsx)(d.G,{icon:l.Mdf})})}),m&&(0,n.jsx)("td",{children:(0,n.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>m(e._id),children:"Add Menu"})})]},e._id)))})]})})}},5896:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var s=t(7313),r=t(6573),c=t(8467),d=t(1378),l=t.n(d),n=t(6220),i=(t(2632),t(8145)),o=t.n(i),x=t(6417);const h=()=>{const e=new Date,a=new Date;a.setMonth(a.getMonth()-6);const t=JSON.parse(localStorage.getItem("user")),{restaurantId:d}=t,{role:i}=t,[h,m]=(0,s.useState)([]),[p,j]=(0,s.useState)(0),[u,b]=(0,s.useState)(0),C=100,[g,N]=(0,s.useState)([]),[y,k]=(0,s.useState)(0),[T,w]=(0,s.useState)(0),[f,v]=(0,s.useState)(d||"all"),[D,S]=(0,s.useState)(a),[M,I]=(0,s.useState)(e),[P,Z]=(0,s.useState)("Pickup"),[A,R]=(0,s.useState)([]),E=(0,c.s0)();return(0,s.useEffect)((()=>{(async()=>{try{let e;if("all"===f)e=await r.Z.get("/api/admin/orders?startDate=".concat(D,"&endDate=").concat(M,"&orderType=").concat(P,"&page=").concat(p+1,"&pageSize=").concat(C));else{const a={restaurantId:f};e=await r.Z.post("/api/admin/orderHistory-nonActive?startDate=".concat(D,"&endDate=").concat(M,"&orderType=").concat(P,"&page=").concat(p+1,"&pageSize=").concat(C),a)}const{data:a}=e,{nonActiveOrders:t,totalOrders:s,totalPrice:c}=a;R(t),k(s),w(c),m(h||[]),b(Math.ceil(s/C))}catch(e){console.error("Error fetching orders:",e)}})()}),[f,P,D,M,y,T,p,C]),(0,s.useEffect)((()=>{(async()=>{try{const e=(await r.Z.get("/api/restaurant/get")).data.data;N(e)}catch(e){console.error("Error fetching time slots:",e.message)}})()}),[]),(0,x.jsx)("div",{className:"bg-white text-black",children:(0,x.jsx)("div",{className:"col-11 mx-auto",id:"CardText",children:(0,x.jsxs)("div",{className:"row",children:[(0,x.jsx)("h4",{className:"mt-4 mb-4 text-center ",style:{fontWeight:"bold"},children:"ORDER HISTORY"}),(0,x.jsx)("div",{className:"col-lg-6 col-md-5 col-xs-12 col-sm-12 mt-2",style:{display:"flex",justifyContent:"space-between"},children:(0,x.jsxs)("div",{className:"form-group",style:{display:"flex",justifyContent:"space-between"},children:[(0,x.jsxs)("label",{children:[(0,x.jsx)("span",{className:"",children:"Start Date:"})," ",(0,x.jsx)(l(),{className:"form-select mb-3 text-black",selected:D,onChange:e=>S(e),dateFormat:"yyyy-MM-dd"})]}),(0,x.jsx)("div",{children:(0,x.jsxs)("label",{className:"mx-1",children:[(0,x.jsx)("span",{className:"CardText",children:"End Date:"})," ",(0,x.jsx)(l(),{className:"form-select mb-3 text-black",selected:M,onChange:e=>I(e),dateFormat:"yyyy-MM-dd"})]})})]})}),(0,x.jsxs)("div",{className:"col-lg-6 col-md-6 col-xs-12 col-sm-12 mt-2",style:{display:"flex",justifyContent:"space-between"},children:[(0,x.jsxs)("div",{children:[(0,x.jsx)("h5",{className:"my-2 CardText",children:"Select Order Type"}),(0,x.jsxs)("select",{value:P,onChange:e=>{Z(e.target.value)},className:"form-select mb-3",children:[(0,x.jsx)("option",{value:"Pickup",children:"Pickup"}),(0,x.jsx)("option",{value:"Delivery",children:"Delivery"})]})]}),(0,x.jsxs)("div",{className:"col-lg-6 col-md-6 col-xs-12 mt-2",children:[(0,x.jsx)("h5",{className:"col-12 CardText",children:"Select a branch"}),"admin"!==i&&(0,x.jsxs)("select",{className:"form-select mb-3",name:"status",value:f,onChange:e=>{v(e.target.value)},children:[(0,x.jsx)("option",{value:"all",children:"All"}),g&&g.map((e=>{return(0,x.jsxs)("option",{value:e.restaurantId,children:[e.restaurantBranch," -"," ",(a=e.address,"".concat(a.line1,", ").concat(a.city,", ").concat(a.state," - ").concat(a.postalCode,", ").concat(a.country))]},e._id);var a}))]})]}),(0,x.jsxs)("h6",{className:"col-3 CardText",children:["Total orders: ",y]})]}),(0,x.jsx)(n.Z,{headers:["Sl No","Customer","Email Address","Phone No","Restaurant Branch","Order Date"],data:A,onViewDetails:e=>{E("/order/".concat(e))}}),(0,x.jsx)(o(),{className:"pagination",pageCount:u,pageRangeDisplayed:5,marginPagesDisplayed:2,onPageChange:e=>{j(e.selected)},containerClassName:"",activeClassName:"active"})]})})})}}}]);