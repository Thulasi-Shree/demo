"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[7511],{6220:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(7313),s=t(3298),c=t(465),n=t(259),d=t(1309),l=t(6417);const i=e=>{let{headers:a,data:t,onEdit:i,onUpdate:o,update:h,onDelete:x,onAddMenu:u,onViewDetails:m}=e;const[p,j]=(0,r.useState)("asc"),[g,b]=(0,r.useState)(null),C=e=>{let a;a=e===g&&"asc"===p?"desc":"asc",j(a),b(e)};return(0,l.jsx)("div",{children:(0,l.jsxs)(c.Z,{bordered:!0,responsive:!0,className:" mt-4 text-center w-100 Cardimg123",children:[(0,l.jsx)("thead",{className:"table-head bg-white",children:(0,l.jsxs)("tr",{children:[a.map((e=>(0,l.jsx)("th",{id:"CardText ",onClick:()=>C((e=>{switch(e){case"Menu Name":case"Name":return"name";case"Price":return"price";case"Customer":return"customer";case"Restaurant ID":return"_id";case"Restaurant Branch":return"restaurantBranch";default:return e.toLowerCase()}})(e)),children:e},e))),i&&(0,l.jsx)("th",{children:"View / Edit"}),o&&(0,l.jsx)("th",{children:" Update"}),h&&(0,l.jsx)("th",{children:" View"}),m&&(0,l.jsx)("th",{children:" View"}),x&&(0,l.jsx)("th",{children:"Delete"}),u&&(0,l.jsx)("th",{children:"Add Menu"})]})}),(0,l.jsx)("tbody",{children:t.slice().sort(((e,a)=>{if("name"===g){const t="".concat(e.name," ").concat(e.lastName),r="".concat(a.name," ").concat(a.lastName);return"asc"===p?t.localeCompare(r):r.localeCompare(t)}return"price"===g?"asc"===p?e.price-a.price:a.price-e.price:"customer"===g?"asc"===p?e.shipping.name.localeCompare(a.shipping.name):a.shipping.name.localeCompare(e.shipping.name):"role"===g?"asc"===p?e.role.localeCompare(a.role):a.role.localeCompare(e.role):0})).map(((e,t)=>(0,l.jsxs)("tr",{className:"bg-white",style:{backgroundColor:"white"},children:[a.map((a=>"Sl No"===a?(0,l.jsx)("td",{children:(0,l.jsx)("p",{className:"text-black",id:"CardText",children:t+1})},a):"Restaurant Address"===a?(0,l.jsx)("td",{children:(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[e.address.line1,", ",e.address.line2,","," ",e.address.city,", ",e.address.state,","," ",e.address.postalCode,", ",e.address.country]})},a):"Order ID"===a?(0,l.jsx)("td",{children:(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.orderId})},a):"Carousal Image"===a?(0,l.jsx)("td",{children:(0,l.jsx)("img",{src:e.images[0].image,alt:"Carousel",style:{width:"75px",height:"auto"}})},a):"Carousal Text"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.text})]},a):"Branch ID"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantId})]},a):"Restaurant Branch ID"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantName})]},a):"Opening Hours"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.openingHours})]},a):"Restaurant Branch"===a?(0,l.jsx)("td",{onClick:()=>C("restaurantBranch"),children:(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[e.restaurantBranch," "]})},a):"User ID"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e._id})]},a):"Status"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.orderStatus})," "]},a):"Pickup/Delivery Time"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.selectedTimeSlot})]},a):"Order Date"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.createdAt})]},a):"Phone No"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.phone})]},a):"Email Address"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.email})]},a):"Category"===a?(0,l.jsxs)("td",{children:[(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,l.jsx)("b",{children:"MealType: "})," ",e.mealTypeCategory,","]}),(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,l.jsx)("b",{children:"Dietary Preference: "})," ",e.dietaryPreferenceCategory]})]},a):"Menu Name"===a?(0,l.jsx)("td",{onClick:()=>C("name"),children:(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",e.name," "]})},a):"Name"===a?(0,l.jsx)("div",{style:{backgroundColor:"white",border:"none",display:"flex",justifyContent:"center"},children:(0,l.jsx)("td",{style:{border:"none",width:"100px"},onClick:()=>C("name"),children:(0,l.jsxs)("p",{id:"CardText",children:[" ",e.name," ",e.lastName]})},a)}):"Role"===a?(0,l.jsx)("td",{onClick:()=>C("role"),children:(0,l.jsxs)("p",{id:"CardText",children:[" ",e.role," "]})},a):"Customer"===a?(0,l.jsx)("td",{onClick:()=>C("customer"),children:(0,l.jsxs)("p",{id:"CardText",children:[" ",e.shipping.name," "]})},a):(0,l.jsx)("td",{children:(0,l.jsx)("p",{id:"CardText",children:e[a.toLowerCase()]||"N/A"})},a))),o&&(0,l.jsx)("td",{children:(0,l.jsx)(s.Z,{className:" btn my-3 px-4 btn bg-white text-black ",onClick:()=>o(e._id),children:(0,l.jsx)(n.G,{icon:d.Xcf})})}),h&&(0,l.jsx)("td",{children:(0,l.jsx)(s.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>h(e._id),children:"Update"})}),i&&(0,l.jsx)("td",{children:(0,l.jsx)(s.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>i(e._id),children:(0,l.jsx)(n.G,{icon:d.Mdf})})}),x&&(0,l.jsx)("td",{children:(0,l.jsx)(s.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>x(e._id),children:(0,l.jsx)(n.G,{icon:d.$aW})})}),m&&(0,l.jsx)("td",{children:(0,l.jsx)(s.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>m(e._id),children:(0,l.jsx)(n.G,{icon:d.Mdf})})}),u&&(0,l.jsx)("td",{children:(0,l.jsx)(s.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>u(e._id),children:"Add Menu"})})]},e._id)))})]})})}},7511:(e,a,t)=>{t.r(a),t.d(a,{default:()=>x});var r=t(7313),s=t(8145),c=t.n(s),n=t(8467),d=t(6573),l=t(6220),i=t(1965),o=t(3298),h=(t(259),t(6417));const x=()=>{const e=(0,n.s0)(),a=JSON.parse(localStorage.getItem("user")),{restaurantId:t}=a,{role:s}=a,[x,u]=(0,r.useState)([]),[m,p]=(0,r.useState)(0),[j,g]=(0,r.useState)(0),[b,C]=(0,r.useState)([]),[y,N]=(0,r.useState)("all"),[k,v]=(0,r.useState)("Preparing"),[w,T]=(0,r.useState)(t||"all"),[D,f]=(0,r.useState)((()=>{const e=new Date,a=e.getMonth()+1,t=e.getDate();return"".concat(a,"/").concat(t)})),[S,Z]=(0,r.useState)(!1),[P,I]=(0,r.useState)(null),A=(e=>{const a=[],t=new Date;for(let r=0;r<e;r++){const e=new Date(t);e.setDate(t.getDate()+r);const s="".concat(e.getMonth()+1,"/").concat(e.getDate());a.push(s)}return a})(7),B=async()=>{try{let e;e="all"===w?await d.Z.get("/api/admin/orders/active?restaurantId=".concat(w,"&selectedDate=").concat(D,"&page=").concat(m+1,"&pageSize=").concat(100)):await d.Z.get("/api/admin/order/active?restaurantId=".concat(w,"&selectedDate=").concat(D,"&page=").concat(m+1,"&pageSize=").concat(100));let a=Array.isArray(e.data)?e.data:e.data.orders;"all"!==y&&(a=a.filter((e=>e.orderType===y))),a.sort(((e,a)=>new Date("1970-01-01T".concat(e.selectedTimeSlot,":00"))-new Date("1970-01-01T".concat(a.selectedTimeSlot,":00")))),u(a||[]),g(Math.ceil(a.length/100))}catch(e){console.error("Error fetching orders:",e)}},O=()=>{Z(!1),I(null)};return(0,r.useEffect)((()=>{B()}),[w,y,D,m]),(0,r.useEffect)((()=>{(async()=>{try{const e=(await d.Z.get("/api/restaurant/get")).data.data;C(e)}catch(e){console.error("Error fetching restaurants:",e.message)}})()}),[]),(0,h.jsxs)("div",{className:"bg-white text-black",style:{minHeight:"58vh"},children:[(0,h.jsxs)("div",{className:"col-11 mx-auto py-2",children:[(0,h.jsx)("h4",{className:"text-center uppercase",children:"Current orders"}),(0,h.jsxs)("div",{className:"row justify-content-end",children:[(0,h.jsxs)("div",{className:"col-lg-6 mx-auto",children:[(0,h.jsx)("h5",{className:"mt-3 text-black",children:"Select order type"}),(0,h.jsxs)("select",{id:"orderType",value:y,onChange:e=>(e=>{N(e)})(e.target.value),className:"form-select",children:[(0,h.jsx)("option",{value:"all",children:"All"}),(0,h.jsx)("option",{value:"Pickup",children:"Pickup"}),(0,h.jsx)("option",{value:"Delivery",children:"Delivery"})]}),(0,h.jsx)("div",{className:"date-buttons col-8  my-2",children:A.map((e=>(0,h.jsx)("button",{className:" my-3 mx-2 px-2 rounded",value:e,onClick:()=>(e=>{f(e)})(e),style:{backgroundColor:D===e?"orange":"white",border:D===e?"2px solid orange":"1px solid orange"},children:e},e)))})]}),(0,h.jsxs)("div",{className:"col-lg-3 col-7 mx-auto",children:["admin"!==s&&(0,h.jsxs)("div",{className:"",children:[(0,h.jsx)("h5",{className:"my-2",children:"Select Branch"}),(0,h.jsxs)("select",{className:"form-select form-select-sm",name:"status",value:w,onChange:e=>{T(e.target.value)},children:[(0,h.jsx)("option",{value:"all",children:"All"}),b&&b.map((e=>{return(0,h.jsxs)("option",{value:e.restaurantId,children:[e.restaurantBranch," -"," ",(a=e.address,"".concat(a.line1,", ").concat(a.city,", ").concat(a.state," - ").concat(a.postalCode,", ").concat(a.country))]},e._id);var a}))]})]}),(0,h.jsx)("h5",{className:"mt-2",children:"Update order"}),(0,h.jsxs)("select",{className:"form-select mb-2 text-black",value:k,required:!0,onChange:e=>v(e.target.value),children:[(0,h.jsx)("option",{value:"Order Placed",children:"Order Placed"}),(0,h.jsx)("option",{value:"Preparing",children:"Preparing"}),(0,h.jsx)("option",{value:"Out For Delivery",children:"Out for Delivery"}),(0,h.jsx)("option",{value:"Ready for Pickup",children:"Ready for Pickup"}),(0,h.jsx)("option",{value:"On the Way",children:"On the Way"}),(0,h.jsx)("option",{value:"Delivered",children:"Delivered"})]})]}),(0,h.jsxs)("div",{className:"col-lg-12 bg-white",children:[(0,h.jsx)(l.Z,{data:x,headers:["Sl No","Order ID","Customer","Restaurant Branch","Pickup/Delivery Time","Status"],update:e=>{I(e),Z(!0)},onEdit:a=>{e("/admin/order/".concat(a))}}),(0,h.jsx)(c(),{className:"pagination bg-white",id:"CardText",pageCount:j,pageRangeDisplayed:5,marginPagesDisplayed:2,onPageChange:e=>{p(e.selected)},containerClassName:"pagination",activeClassName:"active"})]})]})]}),(0,h.jsxs)(i.Z,{show:S,onHide:O,children:[(0,h.jsx)(i.Z.Header,{closeButton:!0,children:(0,h.jsx)(i.Z.Title,{children:"Confirm Order Update"})}),(0,h.jsxs)(i.Z.Body,{children:["Are you sure you want to update this order status to"," ",(0,h.jsx)("strong",{children:k}),"?"]}),(0,h.jsxs)(i.Z.Footer,{children:[(0,h.jsx)(o.Z,{variant:"secondary",onClick:O,children:"Cancel"}),(0,h.jsx)(o.Z,{variant:"primary",onClick:async()=>{try{200===(await d.Z.put("/api/admin/order/".concat(P),{orderStatus:k})).status?B():console.error("Failed to update order status")}catch(e){console.error("Error updating order status:",e)}finally{Z(!1),I(null)}},children:"Confirm"})]})]})]})}}}]);