"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[4448],{6220:(e,a,s)=>{s.d(a,{Z:()=>i});var t=s(7313),r=s(3298),d=s(465),n=s(259),c=s(1309),l=s(6417);const i=e=>{let{headers:a,data:s,onEdit:i,onUpdate:o,update:x,onDelete:h,onAddMenu:m,onViewDetails:u}=e;const[p,j]=(0,t.useState)("asc"),[b,g]=(0,t.useState)(null),C=e=>{let a;a=e===b&&"asc"===p?"desc":"asc",j(a),g(e)};return(0,l.jsx)("div",{children:(0,l.jsxs)(d.Z,{bordered:!0,responsive:!0,className:" mt-4 text-center w-100 Cardimg123",children:[(0,l.jsx)("thead",{className:"table-head bg-white",children:(0,l.jsxs)("tr",{children:[a.map((e=>(0,l.jsx)("th",{id:"CardText ",onClick:()=>C((e=>{switch(e){case"Menu Name":case"Name":return"name";case"Price":return"price";case"Customer":return"customer";case"Restaurant ID":return"_id";case"Restaurant Branch":return"restaurantBranch";default:return e.toLowerCase()}})(e)),children:e},e))),i&&(0,l.jsx)("th",{children:"View / Edit"}),o&&(0,l.jsx)("th",{children:" Update"}),x&&(0,l.jsx)("th",{children:" View"}),u&&(0,l.jsx)("th",{children:" View"}),h&&(0,l.jsx)("th",{children:"Delete"}),m&&(0,l.jsx)("th",{children:"Add Menu"})]})}),(0,l.jsx)("tbody",{children:s.slice().sort(((e,a)=>{if("name"===b){const s="".concat(e.name," ").concat(e.lastName),t="".concat(a.name," ").concat(a.lastName);return"asc"===p?s.localeCompare(t):t.localeCompare(s)}return"price"===b?"asc"===p?e.price-a.price:a.price-e.price:"customer"===b?"asc"===p?e.shipping.name.localeCompare(a.shipping.name):a.shipping.name.localeCompare(e.shipping.name):"role"===b?"asc"===p?e.role.localeCompare(a.role):a.role.localeCompare(e.role):0})).map(((e,s)=>(0,l.jsxs)("tr",{className:"bg-white",style:{backgroundColor:"white"},children:[a.map((a=>"Sl No"===a?(0,l.jsx)("td",{children:(0,l.jsx)("p",{className:"text-black",id:"CardText",children:s+1})},a):"Restaurant Address"===a?(0,l.jsx)("td",{children:(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[e.address.line1,", ",e.address.line2,","," ",e.address.city,", ",e.address.state,","," ",e.address.postalCode,", ",e.address.country]})},a):"Order ID"===a?(0,l.jsx)("td",{children:(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.orderId})},a):"Carousal Image"===a?(0,l.jsx)("td",{children:(0,l.jsx)("img",{src:e.images[0].image,alt:"Carousel",style:{width:"75px",height:"auto"}})},a):"Carousal Text"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.text})]},a):"Branch ID"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantId})]},a):"Restaurant Branch ID"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantName})]},a):"Opening Hours"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.openingHours})]},a):"Restaurant Branch"===a?(0,l.jsx)("td",{onClick:()=>C("restaurantBranch"),children:(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[e.restaurantBranch," "]})},a):"User ID"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e._id})]},a):"Status"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.orderStatus})," "]},a):"Pickup/Delivery Time"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.selectedTimeSlot})]},a):"Order Date"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.createdAt})]},a):"Phone No"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.phone})]},a):"Email Address"===a?(0,l.jsxs)("td",{children:[" ",(0,l.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.email})]},a):"Category"===a?(0,l.jsxs)("td",{children:[(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,l.jsx)("b",{children:"MealType: "})," ",e.mealTypeCategory,","]}),(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,l.jsx)("b",{children:"Dietary Preference: "})," ",e.dietaryPreferenceCategory]})]},a):"Menu Name"===a?(0,l.jsx)("td",{onClick:()=>C("name"),children:(0,l.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",e.name," "]})},a):"Name"===a?(0,l.jsx)("div",{style:{backgroundColor:"white",border:"none",display:"flex",justifyContent:"center"},children:(0,l.jsx)("td",{style:{border:"none",width:"100px"},onClick:()=>C("name"),children:(0,l.jsxs)("p",{id:"CardText",children:[" ",e.name," ",e.lastName]})},a)}):"Role"===a?(0,l.jsx)("td",{onClick:()=>C("role"),children:(0,l.jsxs)("p",{id:"CardText",children:[" ",e.role," "]})},a):"Customer"===a?(0,l.jsx)("td",{onClick:()=>C("customer"),children:(0,l.jsxs)("p",{id:"CardText",children:[" ",e.shipping.name," "]})},a):(0,l.jsx)("td",{children:(0,l.jsx)("p",{id:"CardText",children:e[a.toLowerCase()]||"N/A"})},a))),o&&(0,l.jsx)("td",{children:(0,l.jsx)(r.Z,{className:" btn my-3 px-4 btn bg-white text-black ",onClick:()=>o(e._id),children:(0,l.jsx)(n.G,{icon:c.Xcf})})}),x&&(0,l.jsx)("td",{children:(0,l.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>x(e._id),children:"Update"})}),i&&(0,l.jsx)("td",{children:(0,l.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>i(e._id),children:(0,l.jsx)(n.G,{icon:c.Mdf})})}),h&&(0,l.jsx)("td",{children:(0,l.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>h(e._id),children:(0,l.jsx)(n.G,{icon:c.$aW})})}),u&&(0,l.jsx)("td",{children:(0,l.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>u(e._id),children:(0,l.jsx)(n.G,{icon:c.Mdf})})}),m&&(0,l.jsx)("td",{children:(0,l.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>m(e._id),children:"Add Menu"})})]},e._id)))})]})})}},4448:(e,a,s)=>{s.r(a),s.d(a,{default:()=>m});var t=s(7313),r=s(8467),d=s(3298),n=s(6573),c=s(6220),l=s(4423),i=s(1965),o=s(8145),x=s.n(o),h=s(6417);const m=()=>{const e=(0,r.s0)(),a=JSON.parse(localStorage.getItem("user")),{restaurantId:s}=a,{role:o}=a,[m,u]=(0,t.useState)([]),[p,j]=(0,t.useState)([]),[b,g]=(0,t.useState)({message:"",type:""}),[C,N]=(0,t.useState)(s||""),[k,y]=(0,t.useState)(!1),[w,T]=(0,t.useState)(null),[f,v]=(0,t.useState)(0),[S,Z]=(0,t.useState)(0),D=async function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;try{let a;if("all"===C)a=await n.Z.get("/api/admin/products",{params:{page:e,pageSize:100}});else{const s={restaurantId:C};a=await n.Z.post("/api/admin/products/branch",s,{params:{page:e,pageSize:100}})}const s=Array.isArray(a.data)?a.data:a.data.data,t=a.headers["x-total-count"],r=Math.ceil(t/100);u(s||[]),Z(r)}catch(a){console.error("Error fetching menus:",a)}},M=()=>{y(!1),T(null)};(0,t.useEffect)((()=>{D(f+1)}),[C]);(0,t.useEffect)((()=>{(async()=>{try{const e=(await n.Z.get("/api/restaurant/get")).data.data;j(e)}catch(e){console.error("Error fetching time slots:",e.message)}})()}),[]);return(0,h.jsxs)("div",{className:"bg-white",children:[(0,h.jsx)("div",{className:"col-11 mx-auto",children:(0,h.jsx)("div",{className:"row",children:(0,h.jsxs)("div",{className:"col",children:[(0,h.jsx)("h3",{className:"text-center text-black mt-3",children:"MENUS"}),(0,h.jsx)("div",{className:"d-flex justify-content-end ",children:(0,h.jsx)(d.Z,{className:"btn my-3 px-4 btn rounded",id:"CardText",onClick:()=>{e("/admin/createMenu")},children:"Add Menu"})}),(0,h.jsx)("div",{className:"col-12 col-lg-3 ",children:(0,h.jsx)("div",{className:"form-group",children:"admin"!==o&&(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("h4",{className:"mt-lg-n5",id:"CardText",children:"Select branch"}),(0,h.jsxs)("select",{className:"form-select",name:"status",value:C,onChange:e=>{N(e.target.value),v(0)},children:[(0,h.jsx)("option",{value:"",children:"Select"}),(0,h.jsx)("option",{value:"all",children:"All"}),p&&p.map((e=>(0,h.jsx)("option",{value:e.restaurantId,children:e.restaurantBranch},e._id)))]})]})})}),b.message&&(0,h.jsx)(l.Z,{message:b.message,type:b.type,onClose:()=>{g({message:"",type:""})}}),(0,h.jsx)(c.Z,{headers:["Sl No","Menu Name","Price","Category","Restaurant Branch"],data:m,onEdit:a=>{e("/admin/updateMenu/".concat(a))},onDelete:e=>{T(e),y(!0)}}),(0,h.jsx)(x(),{previousLabel:"previous",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:S,marginPagesDisplayed:1,pageRangeDisplayed:1,onPageChange:e=>{const a=e.selected+1;v(a-1),D(a)},containerClassName:"pagination bg-white",activeClassName:"active"})]})})}),(0,h.jsxs)(i.Z,{show:k,onHide:M,children:[(0,h.jsx)(i.Z.Header,{closeButton:!0,children:(0,h.jsx)(i.Z.Title,{children:"Confirm Delete"})}),(0,h.jsx)(i.Z.Body,{children:"Are you sure you want to delete this menu item?"}),(0,h.jsxs)(i.Z.Footer,{children:[(0,h.jsx)(d.Z,{variant:"secondary",onClick:M,children:"Cancel"}),(0,h.jsx)(d.Z,{variant:"danger",onClick:async()=>{try{await n.Z.delete("/api/admin/product/".concat(w)),D(f+1),g({message:"Product Deleted Successfully!",type:"success"}),M()}catch(e){g({message:e.message||"An error occurred",type:"error"})}},children:"Delete"})]})]})]})}}}]);