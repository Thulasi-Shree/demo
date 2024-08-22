"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[7516],{6220:(e,s,a)=>{a.d(s,{Z:()=>i});var t=a(7313),r=a(3298),n=a(465),l=a(259),c=a(1309),d=a(6417);const i=e=>{let{headers:s,data:a,onEdit:i,onUpdate:o,update:x,onDelete:h,onAddMenu:m,onViewDetails:u}=e;const[j,p]=(0,t.useState)("asc"),[b,C]=(0,t.useState)(null),g=e=>{let s;s=e===b&&"asc"===j?"desc":"asc",p(s),C(e)};return(0,d.jsx)("div",{children:(0,d.jsxs)(n.Z,{bordered:!0,responsive:!0,className:" mt-4 text-center w-100 Cardimg123",children:[(0,d.jsx)("thead",{className:"table-head bg-white",children:(0,d.jsxs)("tr",{children:[s.map((e=>(0,d.jsx)("th",{id:"CardText ",onClick:()=>g((e=>{switch(e){case"Menu Name":case"Name":return"name";case"Price":return"price";case"Customer":return"customer";case"Restaurant ID":return"_id";case"Restaurant Branch":return"restaurantBranch";default:return e.toLowerCase()}})(e)),children:e},e))),i&&(0,d.jsx)("th",{children:"View / Edit"}),o&&(0,d.jsx)("th",{children:" Update"}),x&&(0,d.jsx)("th",{children:" View"}),u&&(0,d.jsx)("th",{children:" View"}),h&&(0,d.jsx)("th",{children:"Delete"}),m&&(0,d.jsx)("th",{children:"Add Menu"})]})}),(0,d.jsx)("tbody",{children:a.slice().sort(((e,s)=>{if("name"===b){const a="".concat(e.name," ").concat(e.lastName),t="".concat(s.name," ").concat(s.lastName);return"asc"===j?a.localeCompare(t):t.localeCompare(a)}return"price"===b?"asc"===j?e.price-s.price:s.price-e.price:"customer"===b?"asc"===j?e.shipping.name.localeCompare(s.shipping.name):s.shipping.name.localeCompare(e.shipping.name):"role"===b?"asc"===j?e.role.localeCompare(s.role):s.role.localeCompare(e.role):0})).map(((e,a)=>(0,d.jsxs)("tr",{className:"bg-white",style:{backgroundColor:"white"},children:[s.map((s=>"Sl No"===s?(0,d.jsx)("td",{children:(0,d.jsx)("p",{className:"text-black",id:"CardText",children:a+1})},s):"Restaurant Address"===s?(0,d.jsx)("td",{children:(0,d.jsxs)("p",{className:"text-black",id:"CardText",children:[e.address.line1,", ",e.address.line2,","," ",e.address.city,", ",e.address.state,","," ",e.address.postalCode,", ",e.address.country]})},s):"Order ID"===s?(0,d.jsx)("td",{children:(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.orderId})},s):"Carousal Image"===s?(0,d.jsx)("td",{children:(0,d.jsx)("img",{src:e.images[0].image,alt:"Carousel",style:{width:"75px",height:"auto"}})},s):"Carousal Text"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.text})]},s):"Branch ID"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantId})]},s):"Restaurant Branch ID"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantName})]},s):"Opening Hours"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.openingHours})]},s):"Restaurant Branch"===s?(0,d.jsx)("td",{onClick:()=>g("restaurantBranch"),children:(0,d.jsxs)("p",{className:"text-black",id:"CardText",children:[e.restaurantBranch," "]})},s):"User ID"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e._id})]},s):"Status"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.orderStatus})," "]},s):"Pickup/Delivery Time"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.selectedTimeSlot})]},s):"Order Date"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.createdAt})]},s):"Phone No"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.phone})]},s):"Email Address"===s?(0,d.jsxs)("td",{children:[" ",(0,d.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.email})]},s):"Category"===s?(0,d.jsxs)("td",{children:[(0,d.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,d.jsx)("b",{children:"MealType: "})," ",e.mealTypeCategory,","]}),(0,d.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,d.jsx)("b",{children:"Dietary Preference: "})," ",e.dietaryPreferenceCategory]})]},s):"Menu Name"===s?(0,d.jsx)("td",{onClick:()=>g("name"),children:(0,d.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",e.name," "]})},s):"Name"===s?(0,d.jsx)("div",{style:{backgroundColor:"white",border:"none",display:"flex",justifyContent:"center"},children:(0,d.jsx)("td",{style:{border:"none",width:"100px"},onClick:()=>g("name"),children:(0,d.jsxs)("p",{id:"CardText",children:[" ",e.name," ",e.lastName]})},s)}):"Role"===s?(0,d.jsx)("td",{onClick:()=>g("role"),children:(0,d.jsxs)("p",{id:"CardText",children:[" ",e.role," "]})},s):"Customer"===s?(0,d.jsx)("td",{onClick:()=>g("customer"),children:(0,d.jsxs)("p",{id:"CardText",children:[" ",e.shipping.name," "]})},s):(0,d.jsx)("td",{children:(0,d.jsx)("p",{id:"CardText",children:e[s.toLowerCase()]||"N/A"})},s))),o&&(0,d.jsx)("td",{children:(0,d.jsx)(r.Z,{className:" btn my-3 px-4 btn bg-white text-black ",onClick:()=>o(e._id),children:(0,d.jsx)(l.G,{icon:c.Xcf})})}),x&&(0,d.jsx)("td",{children:(0,d.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>x(e._id),children:"Update"})}),i&&(0,d.jsx)("td",{children:(0,d.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>i(e._id),children:(0,d.jsx)(l.G,{icon:c.Mdf})})}),h&&(0,d.jsx)("td",{children:(0,d.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>h(e._id),children:(0,d.jsx)(l.G,{icon:c.$aW})})}),u&&(0,d.jsx)("td",{children:(0,d.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>u(e._id),children:(0,d.jsx)(l.G,{icon:c.Mdf})})}),m&&(0,d.jsx)("td",{children:(0,d.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>m(e._id),children:"Add Menu"})})]},e._id)))})]})})}},7516:(e,s,a)=>{a.r(s),a.d(s,{default:()=>j});var t=a(7313),r=a(3298),n=a(1965),l=a(7533),c=a(8467),d=a(2135),i=a(259),o=a(1309),x=a(6573),h=a(7548),m=a(6220),u=(a(2214),a(6417));const j=()=>{const[e,s]=(0,t.useState)(!1),[a,j]=(0,t.useState)(null),[p,b]=(0,t.useState)(""),[C,g]=(0,t.useState)(0),[N,k]=(0,t.useState)(0),[y,Z]=(0,t.useState)(0),[w,v]=(0,t.useState)(""),[T,f]=(0,t.useState)(""),[S,A]=(0,t.useState)([]),[B,I]=(0,t.useState)([]),[D,E]=(0,t.useState)(""),[R,_]=(0,t.useState)(!1),P=(0,c.s0)(),U=async()=>{try{const e=await x.Z.get("/api/admin/admins?&page=".concat(C));Z(e.data.resPerPage),k(e.data.count),A(e.data.Users)}catch(e){console.error("Error fetching users:",e)}},G=()=>{s(!1),j(null)},M=e=>{switch(e){case"superAdmin":return"Super Admin";case"admin":return"Admin";case"user":return"Customer";default:return e}},H=D?S.filter((e=>e.role===D)):S.filter((e=>"admin"===e.role)),L=()=>{_(!1),j(null)};return(0,t.useEffect)((()=>{U()}),[C]),(0,u.jsx)("div",{className:"bg-white text-black",style:{minHeight:"58vh"},children:(0,u.jsx)("div",{className:"container-fluid",children:(0,u.jsx)("div",{className:"row",children:(0,u.jsxs)("div",{className:"col-lg-12 col-xs-12 col-sm-12 col-md-12 text-black",children:[(0,u.jsx)("h5",{className:"mt-3 text-black uppercase",style:{fontWeight:"bold"},children:"USERS - Admin"}),(0,u.jsxs)("div",{className:"row",children:[(0,u.jsxs)("div",{className:"col-lg-3 col-md-4 text-black col-xs-12",children:[(0,u.jsx)("label",{className:"text-black",children:"Filter by Role:"}),(0,u.jsx)("div",{className:"mx-4",children:(0,u.jsxs)("select",{value:D,onChange:e=>{E(e.target.value)},className:"form-select mt-3 text-black",children:[(0,u.jsx)("option",{value:"admin",children:"Admin"}),(0,u.jsx)("option",{value:"superAdmin",children:"Super Admin"})]})})]}),(0,u.jsx)("div",{className:"col-lg-3 col-xs-6 col-md-4 mx-auto ",children:(0,u.jsx)(d.rU,{className:"btn my-3 px-4 btn rounded mt-3",style:{background:"#51bc8fb5"},to:"/admin/customer/list",children:"View Customers"})}),(0,u.jsx)("div",{className:"col-lg-3 col-md-4 col-xs-6 mt-3 ",children:(0,u.jsx)("button",{className:"btn my-1 px-4 btn rounded ",onClick:()=>{P("/admin/create")},children:"Create Admin"})}),(0,u.jsx)(m.Z,{headers:["Sl No","Name","Email","Phone","Role","Restaurant Branch","Actions"],data:(B.length>0?B:H).map((e=>({...e,role:M(e.role),actions:(0,u.jsx)("div",{style:{display:"flex",justifyContent:"center"},children:(0,u.jsx)(r.Z,{className:"btn my-1 px-3 btn rounded",onClick:()=>(e=>{j(e),_(!0)})(e),children:(0,u.jsx)(i.G,{icon:o.$aW})})})})))}),(0,u.jsx)(h.Z,{className:"pagination btn bg-danger",activePage:C,containerClassName:"pagination",itemsCountPerPage:y,totalItemsCount:N,onChange:e=>{g(e),U()}})]}),(0,u.jsxs)(n.Z,{show:e,onHide:G,children:[(0,u.jsx)(n.Z.Header,{closeButton:!0,children:(0,u.jsx)(n.Z.Title,{children:"Edit User"})}),(0,u.jsx)(n.Z.Body,{children:(0,u.jsxs)(l.Z,{children:[(0,u.jsxs)(l.Z.Group,{controlId:"role",children:[(0,u.jsx)(l.Z.Label,{children:"Role"}),(0,u.jsxs)(l.Z.Control,{as:"select",value:p,onChange:e=>b(e.target.value),children:[(0,u.jsx)("option",{value:"",children:"Select Role"}),(0,u.jsx)("option",{value:"user",children:"user"}),(0,u.jsx)("option",{value:"admin",children:"Admin"})]})]}),(0,u.jsxs)(l.Z.Group,{controlId:"assignBranch",children:[(0,u.jsx)(l.Z.Label,{children:"Assign Branch Name"}),(0,u.jsx)(l.Z.Control,{type:"text",placeholder:"Enter branch name",value:w,onChange:e=>v(e.target.value)})]}),(0,u.jsxs)(l.Z.Group,{controlId:"assignBranchId",children:[(0,u.jsx)(l.Z.Label,{children:"Assign Branch Id"}),(0,u.jsx)(l.Z.Control,{type:"text",placeholder:"Enter branch name",value:T,onChange:e=>f(e.target.value)})]})]})}),(0,u.jsxs)(n.Z.Footer,{children:[(0,u.jsx)(r.Z,{className:"btn-custom my-global-button",onClick:G,children:"Edit"}),(0,u.jsx)(r.Z,{className:"btn-custom my-global-button",onClick:async()=>{try{await x.Z.put("/api/admin/user/".concat(a._id),{role:p,assignBranch:w,assignBranchId:T}),console.log("User updated successfully"),U(),b(""),v(""),f(""),G()}catch(e){console.error("Error editing user:",e)}},children:"Delete"})]})]}),(0,u.jsxs)(n.Z,{show:R,onHide:L,children:[(0,u.jsx)(n.Z.Header,{closeButton:!0,children:(0,u.jsx)(n.Z.Title,{children:"Confirm Delete"})}),(0,u.jsx)(n.Z.Body,{children:"Are you sure you want to delete this user?"}),(0,u.jsxs)(n.Z.Footer,{children:[(0,u.jsx)(r.Z,{variant:"secondary",onClick:L,children:"Cancel"}),(0,u.jsx)(r.Z,{variant:"danger",onClick:async()=>{try{await x.Z.delete("/api/admin/user/".concat(a._id)),console.log("User with ID ".concat(a._id," deleted successfully")),U(),L()}catch(e){console.error("Error deleting user:",e)}},children:"Delete"})]})]})]})})})})}},2214:()=>{}}]);