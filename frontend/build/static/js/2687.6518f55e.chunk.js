"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[2687],{6220:(e,s,t)=>{t.d(s,{Z:()=>i});var a=t(7313),r=t(3298),n=t(465),d=t(259),l=t(1309),c=t(6417);const i=e=>{let{headers:s,data:t,onEdit:i,onUpdate:o,update:x,onDelete:h,onAddMenu:u,onViewDetails:j}=e;const[m,p]=(0,a.useState)("asc"),[C,b]=(0,a.useState)(null),g=e=>{let s;s=e===C&&"asc"===m?"desc":"asc",p(s),b(e)};return(0,c.jsx)("div",{children:(0,c.jsxs)(n.Z,{bordered:!0,responsive:!0,className:" mt-4 text-center w-100 Cardimg123",children:[(0,c.jsx)("thead",{className:"table-head bg-white",children:(0,c.jsxs)("tr",{children:[s.map((e=>(0,c.jsx)("th",{id:"CardText ",onClick:()=>g((e=>{switch(e){case"Menu Name":case"Name":return"name";case"Price":return"price";case"Customer":return"customer";case"Restaurant ID":return"_id";case"Restaurant Branch":return"restaurantBranch";default:return e.toLowerCase()}})(e)),children:e},e))),i&&(0,c.jsx)("th",{children:"View / Edit"}),o&&(0,c.jsx)("th",{children:" Update"}),x&&(0,c.jsx)("th",{children:" View"}),j&&(0,c.jsx)("th",{children:" View"}),h&&(0,c.jsx)("th",{children:"Delete"}),u&&(0,c.jsx)("th",{children:"Add Menu"})]})}),(0,c.jsx)("tbody",{children:t.slice().sort(((e,s)=>{if("name"===C){const t="".concat(e.name," ").concat(e.lastName),a="".concat(s.name," ").concat(s.lastName);return"asc"===m?t.localeCompare(a):a.localeCompare(t)}return"price"===C?"asc"===m?e.price-s.price:s.price-e.price:"customer"===C?"asc"===m?e.shipping.name.localeCompare(s.shipping.name):s.shipping.name.localeCompare(e.shipping.name):"role"===C?"asc"===m?e.role.localeCompare(s.role):s.role.localeCompare(e.role):0})).map(((e,t)=>(0,c.jsxs)("tr",{className:"bg-white",style:{backgroundColor:"white"},children:[s.map((s=>"Sl No"===s?(0,c.jsx)("td",{children:(0,c.jsx)("p",{className:"text-black",id:"CardText",children:t+1})},s):"Restaurant Address"===s?(0,c.jsx)("td",{children:(0,c.jsxs)("p",{className:"text-black",id:"CardText",children:[e.address.line1,", ",e.address.line2,","," ",e.address.city,", ",e.address.state,","," ",e.address.postalCode,", ",e.address.country]})},s):"Order ID"===s?(0,c.jsx)("td",{children:(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.orderId})},s):"Carousal Image"===s?(0,c.jsx)("td",{children:(0,c.jsx)("img",{src:e.images[0].image,alt:"Carousel",style:{width:"75px",height:"auto"}})},s):"Carousal Text"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.text})]},s):"Branch ID"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantId})]},s):"Restaurant Branch ID"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.restaurantName})]},s):"Opening Hours"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.openingHours})]},s):"Restaurant Branch"===s?(0,c.jsx)("td",{onClick:()=>g("restaurantBranch"),children:(0,c.jsxs)("p",{className:"text-black",id:"CardText",children:[e.restaurantBranch," "]})},s):"User ID"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e._id})]},s):"Status"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.orderStatus})," "]},s):"Pickup/Delivery Time"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.selectedTimeSlot})]},s):"Order Date"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.createdAt})]},s):"Phone No"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.phone})]},s):"Email Address"===s?(0,c.jsxs)("td",{children:[" ",(0,c.jsx)("p",{className:"text-black",id:"CardText",children:e.shipping.email})]},s):"Category"===s?(0,c.jsxs)("td",{children:[(0,c.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,c.jsx)("b",{children:"MealType: "})," ",e.mealTypeCategory,","]}),(0,c.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",(0,c.jsx)("b",{children:"Dietary Preference: "})," ",e.dietaryPreferenceCategory]})]},s):"Menu Name"===s?(0,c.jsx)("td",{onClick:()=>g("name"),children:(0,c.jsxs)("p",{className:"text-black",id:"CardText",children:[" ",e.name," "]})},s):"Name"===s?(0,c.jsx)("div",{style:{backgroundColor:"white",border:"none",display:"flex",justifyContent:"center"},children:(0,c.jsx)("td",{style:{border:"none",width:"100px"},onClick:()=>g("name"),children:(0,c.jsxs)("p",{id:"CardText",children:[" ",e.name," ",e.lastName]})},s)}):"Role"===s?(0,c.jsx)("td",{onClick:()=>g("role"),children:(0,c.jsxs)("p",{id:"CardText",children:[" ",e.role," "]})},s):"Customer"===s?(0,c.jsx)("td",{onClick:()=>g("customer"),children:(0,c.jsxs)("p",{id:"CardText",children:[" ",e.shipping.name," "]})},s):(0,c.jsx)("td",{children:(0,c.jsx)("p",{id:"CardText",children:e[s.toLowerCase()]||"N/A"})},s))),o&&(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{className:" btn my-3 px-4 btn bg-white text-black ",onClick:()=>o(e._id),children:(0,c.jsx)(d.G,{icon:l.Xcf})})}),x&&(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>x(e._id),children:"Update"})}),i&&(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>i(e._id),children:(0,c.jsx)(d.G,{icon:l.Mdf})})}),h&&(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>h(e._id),children:(0,c.jsx)(d.G,{icon:l.$aW})})}),j&&(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>j(e._id),children:(0,c.jsx)(d.G,{icon:l.Mdf})})}),u&&(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{className:"btn my-3 px-4 btn border border-danger rounded bg-white text-black",onClick:()=>u(e._id),children:"Add Menu"})})]},e._id)))})]})})}},2687:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var a=t(7313),r=t(3298),n=t(1965),d=t(7533),l=t(259),c=t(1309),i=t(6573),o=t(7548),x=t(6220),h=(t(2214),t(6417));const u=()=>{const[e,s]=(0,a.useState)(!1),[t,u]=(0,a.useState)(!1),[j,m]=(0,a.useState)(null),[p,C]=(0,a.useState)(""),[b,g]=(0,a.useState)(1),[k,y]=(0,a.useState)(0),[N,w]=(0,a.useState)(0),[Z,T]=(0,a.useState)(""),[v,f]=(0,a.useState)(""),[S,B]=(0,a.useState)([]),[I,A]=(0,a.useState)(""),[D,P]=(0,a.useState)([]),[E,_]=(0,a.useState)("user"),R=async()=>{try{let e;e=I?await i.Z.get("/api/admin/users?&keyword=".concat(I,"&page=").concat(b)):await i.Z.get("/api/admin/users?&page=".concat(b)),w(e.data.resPerPage),y(e.data.count),B(e.data.Users)}catch(e){console.error("Error fetching users:",e)}},U=()=>{s(!1),m(null)},G=()=>{u(!1),m(null)},M=e=>{switch(e){case"superAdmin":return"Super Admin";case"admin":return"Admin";case"user":return"Customer";default:return e}},H=E?S.filter((e=>e.role===E)):S;return(0,a.useEffect)((()=>{R()}),[b,I]),(0,h.jsx)("div",{className:"bg-white text-white",style:{minHeight:"58vh"},children:(0,h.jsxs)("div",{className:"container-fluid",children:[(0,h.jsxs)("div",{className:"row",children:[(0,h.jsx)("h5",{className:"mt-3 uppercase",id:"CardText",style:{fontWeight:"bold"},children:"USERS - Customer"}),(0,h.jsx)("div",{className:"col mt-4",style:{display:"flex",justifyContent:"space-between"},children:(0,h.jsx)("div",{style:{display:"flex"},children:(0,h.jsx)("div",{children:(0,h.jsx)("input",{type:"text",className:"form-control ",style:{display:"flex",color:"black",backgroundColor:"white"},placeholder:"Search user",value:I,onChange:e=>A(e.target.value)})})})}),(0,h.jsx)(x.Z,{headers:["Sl No","Name","Email","Phone","Role","Actions"],data:(D.length>0?D:H).map(((e,s)=>({...e,role:M(e.role),actions:(0,h.jsx)("div",{children:(0,h.jsx)(r.Z,{className:"btn my-1 px-4 btn border border-warning rounded bg-white text-black",onClick:()=>(e=>{m(e),u(!0)})(e),children:(0,h.jsx)(l.G,{icon:c.$aW})})})})))}),(0,h.jsx)(o.Z,{activePage:b,itemsCountPerPage:N,totalItemsCount:k,onChange:e=>{g(e),R()},nextPageText:"Next",firstPageText:"First",lastPageText:"Last",itemClass:"page-item123",linkClass:"page-link123"})]}),(0,h.jsxs)(n.Z,{show:e,onHide:U,children:[(0,h.jsx)(n.Z.Header,{closeButton:!0,children:(0,h.jsx)(n.Z.Title,{children:"Edit User"})}),(0,h.jsx)(n.Z.Body,{children:(0,h.jsxs)(d.Z,{children:[(0,h.jsxs)(d.Z.Group,{controlId:"role",children:[(0,h.jsx)(d.Z.Label,{children:"Role"}),(0,h.jsxs)(d.Z.Control,{as:"select",value:p,onChange:e=>C(e.target.value),children:[(0,h.jsx)("option",{value:"",children:"Select Role"}),(0,h.jsx)("option",{value:"user",children:"user"}),(0,h.jsx)("option",{value:"admin",children:"Admin"})]})]}),(0,h.jsxs)(d.Z.Group,{controlId:"assignBranch",children:[(0,h.jsx)(d.Z.Label,{children:"Assign Branch Name"}),(0,h.jsx)(d.Z.Control,{type:"text",placeholder:"Enter branch name",value:Z,onChange:e=>T(e.target.value)})]}),(0,h.jsxs)(d.Z.Group,{controlId:"assignBranchId",children:[(0,h.jsx)(d.Z.Label,{children:"Assign Branch Id"}),(0,h.jsx)(d.Z.Control,{type:"text",placeholder:"Enter branch name",value:v,onChange:e=>f(e.target.value)})]})]})}),(0,h.jsxs)(n.Z.Footer,{children:[(0,h.jsx)(r.Z,{className:"btn-custom",onClick:U,children:"Cancel"}),(0,h.jsx)(r.Z,{className:"btn-custom",onClick:async()=>{try{await i.Z.put("/api/admin/user/".concat(j._id),{role:p,assignBranch:Z,assignBranchId:v}),console.log("User updated successfully"),R(),C(""),T(""),f(""),U()}catch(e){console.error("Error editing user:",e)}},children:"Save Changes"})]})]}),(0,h.jsxs)(n.Z,{show:t,onHide:G,children:[(0,h.jsx)(n.Z.Header,{closeButton:!0,children:(0,h.jsx)(n.Z.Title,{children:"Confirm Delete"})}),(0,h.jsx)(n.Z.Body,{children:"Are you sure you want to delete this user?"}),(0,h.jsxs)(n.Z.Footer,{children:[(0,h.jsx)(r.Z,{variant:"secondary",onClick:G,children:"Cancel"}),(0,h.jsx)(r.Z,{variant:"danger",onClick:async()=>{try{await i.Z.delete("/api/admin/user/".concat(j._id)),console.log("User with ID ".concat(j._id," deleted successfully")),R(),G()}catch(e){console.error("Error deleting user:",e)}},children:"Delete"})]})]})]})})}},2214:()=>{}}]);