"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[4662],{5104:(e,t,a)=>{a(7313),a(259),a(1930),a(6417)},4662:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});var s=a(7313),r=a(1965),l=a(3298),n=a(195),c=a(6123),i=a.n(c),d=(a(1024),a(2858)),o=a(3194),m=a(8524),h=a(9650),x=a(917),u=a(9982),g=a(6417);const y=s.forwardRef(((e,t)=>{let{bsPrefix:a,active:s,disabled:r,eventKey:l,className:n,variant:c,action:d,as:o,...y}=e;a=(0,m.vE)(a,"list-group-item");const[j,f]=(0,x.v)({key:(0,u.h)(l,y.href),active:s,...y}),p=(0,h.Z)((e=>{if(r)return e.preventDefault(),void e.stopPropagation();j.onClick(e)}));r&&void 0===y.tabIndex&&(y.tabIndex=-1,y["aria-disabled"]=!0);const N=o||(d?y.href?"a":"button":"div");return(0,g.jsx)(N,{ref:t,...y,...j,onClick:p,className:i()(n,a,f.isActive&&"active",r&&"disabled",c&&"".concat(a,"-").concat(c),d&&"".concat(a,"-action"))})}));y.displayName="ListGroupItem";const j=y,f=s.forwardRef(((e,t)=>{const{className:a,bsPrefix:s,variant:r,horizontal:l,numbered:n,as:c="div",...h}=(0,d.Ch)(e,{activeKey:"onSelect"}),x=(0,m.vE)(s,"list-group");let u;return l&&(u=!0===l?"horizontal":"horizontal-".concat(l)),(0,g.jsx)(o.Z,{ref:t,...h,as:c,className:i()(a,x,r&&"".concat(x,"-").concat(r),u&&"".concat(x,"-").concat(u),n&&"".concat(x,"-numbered"))})}));f.displayName="ListGroup";const p=Object.assign(f,{Item:j});var N=a(2102),v=a(3849),b=a(1616),S=a(6573),C=a(8467),w=a(259),I=a(1309),Z=a(2135);a(5104);const k=e=>{let{menus:t,searchTerm:a,handleSearchChange:r}=e;const[c,i]=(0,s.useState)({}),[d,o]=(0,s.useState)([]),[m,h]=(0,s.useState)(null),x=localStorage.getItem("branch"),u=(localStorage.getItem("Address"),localStorage.getItem("selectedDate")),[y,j]=(0,s.useState)("large");(0,s.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("cartItems"))||[],t=e.reduce(((e,t)=>(e[t._id]=Number(t.quantity),e)),{});i(t),o(e)}),[]);const f=e=>{localStorage.setItem("cartItems",JSON.stringify(e)),o(e)},S=e=>{if(!1===e.isAvailable)return;const t={...c,[e._id]:(c[e._id]||0)+1};i(t);const a=d.map((t=>t._id===e._id?{...t,quantity:(t.quantity||0)+1}:t));f(a)},C=e=>{if(!1===e.isAvailable)return;const t={...c,[e._id]:Math.max((c[e._id]||0)-1,0)};let a;i(t),a=0===t[e._id]?d.filter((t=>t._id!==e._id)):d.map((t=>t._id===e._id?{...t,quantity:Math.max((t.quantity||0)-1,0)}:t)),f(a)},k=Number(d.reduce(((e,t)=>e+t.price*t.quantity),0)).toFixed(2),z=()=>{window.innerWidth<=992?j("small"):j("large")};return(0,s.useEffect)((()=>(window.addEventListener("resize",z),z(),()=>window.removeEventListener("resize",z))),[]),(0,g.jsxs)("div",{className:"bg-white row",children:[(0,g.jsxs)("div",{className:" col-12 col-xl-8 col-md-12 col-lg-7 ",children:[(0,g.jsx)(b.Z,{className:"col-11 mx-auto",children:(0,g.jsx)("div",{className:"search-container mb-3",children:(0,g.jsx)("input",{type:"text",className:"form-control search-input",placeholder:"Search menus...",value:a,onChange:r})})}),(0,g.jsx)("div",{className:"col-12",children:0===t.length?(0,g.jsx)("div",{className:"no-menus-found",children:(0,g.jsx)("p",{children:"No menus found."})}):(0,g.jsxs)(N.Z,{className:"bg-white",children:[(0,g.jsx)(v.Z,{id:"RowFourthComp",children:t.map((e=>(0,g.jsx)(b.Z,{className:"col-xl-6 col-12",children:(0,g.jsx)(n.Z,{className:"menu-card mb-3 ".concat(m===e._id?"move-to-cart-animation":""),children:(0,g.jsxs)(v.Z,{children:[(0,g.jsx)(b.Z,{xs:6,children:(0,g.jsx)(n.Z.Img,{variant:"top",src:e.images.length>0?e.images[0].image:"https://via.placeholder.com/285x200",alt:e.name,className:"card-img"})}),(0,g.jsx)(b.Z,{xs:6,children:(0,g.jsxs)("div",{className:"p-2",children:[(0,g.jsxs)("div",{className:"row",children:[(0,g.jsx)("div",{className:"col-8",style:{fontSize:"1rem"},children:e.name}),(0,g.jsxs)("div",{className:"col-4",style:{fontSize:"0.9rem",color:"red"},children:["$",e.price]})]}),(0,g.jsx)("div",{style:{fontSize:"0.9rem"},children:e.mealTypeCategory}),(0,g.jsx)("div",{className:"mb-2",style:{fontSize:"0.8rem"},children:e.description}),c[e._id]?(0,g.jsxs)("div",{className:"d-flex justify-content-center align-items-center",children:[(0,g.jsx)("button",{className:"quantity-button",onClick:()=>C(e),children:"-"}),(0,g.jsx)("span",{style:{fontSize:"0.9rem"},className:"quantity-text",children:c[e._id]}),(0,g.jsx)("button",{className:"quantity-button",onClick:()=>S(e),children:"+"})]}):(0,g.jsx)("button",{id:"cart_btn",disabled:!e.isAvailable,onClick:()=>(e=>{const t={...c,[e._id]:1};i(t);const a=[...d,{...e,quantity:1}];f(a),h(e._id),setTimeout((()=>h(null)),1e3)})(e),className:" bg-white border  border-warning text-center py-2 pb-4",style:{width:"70%",height:"25px",borderRadius:"10px"},children:e.isAvailable?(0,g.jsx)(g.Fragment,{children:"Add to Cart"}):(0,g.jsx)(g.Fragment,{children:" Sold Out"})})]})})]})})},e._id)))}),(0,g.jsx)("div",{className:"view-cart-button-container mx-auto",children:(0,g.jsxs)(l.Z,{as:Z.rU,to:"/cart",className:"view-cart-button d-flex justify-content-center align-items-center mx-auto px-3",children:[(0,g.jsx)("div",{className:"cart-items-count col-auto",children:d&&d.length>1?(0,g.jsxs)("div",{children:[d.length," items added"]}):(0,g.jsxs)("div",{children:[d.length," item added"]})}),(0,g.jsx)("div",{className:"view-cart-text col-auto",children:"View cart"})]})})]})})]}),"large"===y?(0,g.jsx)("aside",{className:"fixed-aside mx-auto col-lg-5 col-xl-4",children:(0,g.jsxs)(n.Z,{className:"p-3 delivery-card",style:{fontSize:"1rem"},children:[(0,g.jsx)(n.Z.Header,{className:"delivery-card-header",style:{fontSize:"1.2rem"},children:(0,g.jsx)("p",{className:"delivery-card-title",style:{fontSize:"1.2rem"},children:"Delivery Information"})}),(0,g.jsxs)(n.Z.Body,{children:[(0,g.jsxs)("div",{className:"delivery-info",style:{fontSize:"1rem"},children:[(0,g.jsx)("b",{children:"Branch:"})," ",x]}),(0,g.jsxs)("div",{className:"delivery-info",style:{fontSize:"1rem"},children:[(0,g.jsx)("b",{children:"Date:"})," ",u]})]}),(0,g.jsx)("div",{className:"cart-items",children:(0,g.jsx)(g.Fragment,{children:0===d.length?(0,g.jsxs)("div",{className:"mt-5 text-center",children:[(0,g.jsx)(w.G,{icon:I.sq$,size:"4x",color:"#e7c5c9"}),(0,g.jsx)("p",{className:"mt-2",style:{color:"black",backgroundColor:"transparent",fontWeight:"500"},children:"Your Cart is Empty"})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(p.Item,{className:"my-3",style:{fontSize:"1rem"},children:[" Your Cart: ",(0,g.jsxs)("b",{children:[d.length," items"]})]}),(0,g.jsx)("div",{id:"MainCart",children:(0,g.jsx)(n.Z,{className:"p-2 cart-card",style:{height:""},children:(0,g.jsx)("div",{className:"col-12",children:d.map((e=>(0,g.jsxs)(s.Fragment,{children:[(0,g.jsxs)("div",{className:"row ",children:[(0,g.jsx)("div",{className:"col-5",children:(0,g.jsx)("p",{className:"",style:{fontSize:"0.8rem"},children:e.name})}),(0,g.jsx)("div",{className:"col-4",children:(0,g.jsx)("div",{className:"col-12 border",children:(0,g.jsx)("div",{className:"row align-items-center ",style:{cursor:"pointer"},children:(0,g.jsxs)("div",{className:"d-flex  justify-content-between w-100",style:{fontSize:"0.8rem"},children:[(0,g.jsx)("span",{className:"col-4 d-flex border justify-content-center",onClick:()=>C(e),children:"-"}),(0,g.jsx)("span",{className:"col-4 d-flex border justify-content-center",children:e.quantity}),(0,g.jsx)("span",{className:"col-4 d-flex border justify-content-center",onClick:()=>S(e),children:"+"})]})})})}),(0,g.jsx)("div",{className:"col-3",children:(0,g.jsxs)("p",{className:"",style:{fontSize:"0.8rem"},children:["$",e.price*e.quantity]})})]}),(0,g.jsx)("hr",{className:"cart-divider"})]},e._id)))})})}),(0,g.jsx)("div",{id:"order_summary",className:"col-11 pt-2",children:(0,g.jsxs)("p",{className:"order-total",children:["Items total:"," ",(0,g.jsxs)("span",{className:"order-summary-values",children:["$",k]})]})})]})})})]})}):null]})};var z=a(6577),_=a(3122);const T=e=>{let{dietaryCategories:t,mealCategories:a,mealTypeCategory:s,setMealTypeCategory:r,dietaryPreferenceCategory:l,setDietaryPreferenceCategory:n,handleClearFilter:c,productsCount:i,loading:d}=e;return(0,g.jsx)("div",{className:"container-fluid",children:(0,g.jsxs)("div",{className:"row",children:[(0,g.jsxs)("button",{variant:"link",onClick:c,className:"clear-button1 my-2 text-danger",children:[(0,g.jsx)(_.aHS,{})," Clear"]}),d?(0,g.jsx)(z.Z,{}):(0,g.jsxs)("div",{className:"col-12",children:[(0,g.jsxs)("div",{className:" col-12",children:[(0,g.jsx)(p.Item,{style:{fontSize:"0.8rem",textAlign:"center"},children:"Preferences"}),(0,g.jsx)("ol",{className:"",style:{listStyleType:"none"},children:t.map((e=>(0,g.jsx)("li",{className:"filter-item",style:{color:l===e.dietaryPreferenceCategory?"red":"black",cursor:"pointer",fontSize:"0.9rem"},onClick:()=>{n(l===e.dietaryPreferenceCategory?null:e.dietaryPreferenceCategory)},children:e.dietaryPreferenceCategory},e._id)))})]}),(0,g.jsxs)("div",{className:"course my-3",children:[(0,g.jsx)(p.Item,{style:{fontSize:"0.8rem",textAlign:"center"},children:"Course"}),(0,g.jsx)("ol",{className:"grid gap-3",style:{listStyleType:"none"},children:a.map((e=>(0,g.jsx)("li",{className:"filter-item",style:{color:s===e.mealTypeCategory?"red":"black",cursor:"pointer",fontSize:"0.9rem",marginLeft:"0px"},onClick:()=>{r(s===e.mealTypeCategory?null:e.mealTypeCategory)},children:e.mealTypeCategory},e._id)))})]})]})]})})};var P=a(4423);const E=()=>{const e=localStorage.getItem("branch"),t=(localStorage.getItem("Address"),localStorage.getItem("selectedDate"),localStorage.getItem("restaurantId")),a=JSON.parse(localStorage.getItem("cartItems"))||[],[c,i]=(0,s.useState)(a),[d,o]=(0,s.useState)(!1),[m,h]=(0,s.useState)([]),[x,u]=(0,s.useState)(!1),[y,j]=(0,s.useState)(null),[f,Z]=(0,s.useState)(!1),[z,_]=(0,s.useState)(a.reduce(((e,t)=>(e[t._id]=Number(t.quantity),e)),{})),[E,q]=(0,s.useState)({}),[F,M]=(0,s.useState)({message:"",type:""}),[A,D]=(0,s.useState)(0),[L,O]=(0,s.useState)(0),[J,B]=(0,s.useState)(1),[H,G]=(0,s.useState)(null),[R,$]=(0,s.useState)(null),[V,W]=(0,s.useState)([]),[K,Y]=(0,s.useState)([]),[U,Q]=(0,s.useState)(""),X=(0,C.s0)(),[ee,te]=(0,s.useState)(0),[ae,se]=(0,s.useState)("large"),re=()=>{window.innerWidth<=992?se("small"):se("large")};(0,s.useEffect)((()=>(window.addEventListener("resize",re),re(),()=>window.removeEventListener("resize",re))),[]),(0,s.useEffect)((()=>{const e=()=>{const e=JSON.parse(localStorage.getItem("cartItems"));e&&te(e.length)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)}),[ee.length]);const le=e=>{if(!e||!e._id)return;if(c.find((t=>t._id===e._id)))return;const t=[...c,{...e,quantity:c.quantity||1}];i(t),localStorage.setItem("cartItems",JSON.stringify(t));const a=JSON.parse(localStorage.getItem("cartItems"));a&&te(a.length)},ne=e=>{j(e),u(!0)},ce=()=>{u(!1)},[ie,de]=(0,s.useState)(!1),oe=()=>u(!1),me=()=>{G(null),$(null)},he=e=>{B(e)},xe=e=>{Q(e.target.value)},ue=()=>{Q("")};(0,s.useEffect)((()=>{a.length>0&&(e=>{try{const t=(JSON.parse(localStorage.getItem("cartItems"))||[]).filter((t=>t._id!==e));_((t=>{const{[e]:a,...s}=t;return s})),i(t),0===t.length?localStorage.removeItem("cartItems"):localStorage.setItem("cartItems",JSON.stringify(t))}catch(t){M({message:"Error deleting item!",type:"error"})}})()}),[a.length]),(0,s.useEffect)((()=>{(async(e,a,s,r)=>{try{o(!0);let l="/api/products?restaurantId=".concat(t,"&page=").concat(r);e&&(l+="&keyword=".concat(e)),s&&(l+="&mealTypeCategory=".concat(s)),a&&(l+="&dietaryPreferenceCategory=".concat(a));const n=await S.Z.get(l);h(n.data.Menus),D(n.data.Count),O(n.data.resPerPage),o(!1)}catch(l){o(!1),G(null),$(null)}})(U,R,H,J)}),[J,U,H,R,e]);return(0,s.useEffect)((()=>{S.Z.get("/api/dietary-preferences").then((e=>W(e.data.data))).catch((e=>M({message:"Error fetching dietary categories",type:"error"}))),S.Z.get("/api/meal-types").then((e=>Y(e.data.data))).catch((e=>M({message:"Error fetching meal categories",type:"error"})))}),[]),(0,g.jsx)(g.Fragment,{children:"small"===ae?(0,g.jsx)("div",{className:"bg-white",children:(0,g.jsxs)("div",{className:" bg-white",children:[(0,g.jsx)("button",{className:" my-2 text-center bg-transparent mx-3  mt-4",onClick:()=>u(!0),style:{position:"sticky",border:"none",top:4,zIndex:100},children:(0,g.jsx)(w.G,{className:" btn filter-icon-fa  mx-auto",icon:I.G_j,style:{position:"sticky",height:"1.5rem",zIndex:100}})}),(0,g.jsxs)(N.Z,{fluid:!0,children:[(0,g.jsxs)(v.Z,{children:[f&&(0,g.jsx)(b.Z,{xs:12,sm:12,md:3,lg:3,className:"mb-5",children:(0,g.jsx)(T,{dietaryCategories:V,mealCategories:K,mealTypeCategory:H,setMealTypeCategory:G,dietaryPreferenceCategory:R,setDietaryPreferenceCategory:$,handleClearFilter:me})}),(0,g.jsxs)(b.Z,{xs:12,sm:12,md:9,lg:f?9:12,className:"mb-5 mx-auto",children:[F.message&&(0,g.jsx)(P.Z,{message:F.message,type:F.type,onClose:()=>{M({message:"",type:""})}}),(0,g.jsx)(k,{menus:m,handleViewDetails:ne,handleAddToCart:le,handleSearchChange:xe,handleSearchSubmit:ue,handlePageChange:he,searchTerm:U,handleCloseModal:ce,showModal:x,show:x,onHide:ce,selectedMenuItem:y})]})]}),(0,g.jsx)("div",{className:"col-12 d-flex justify-content-center",children:(0,g.jsx)("button",{id:"checkout_btn",onClick:()=>{X(-1)},className:"btn my-4 ms-md-5",style:{background:"rgb(249, 233, 233)",color:"black",border:"red"},children:"Back to Select"})}),(0,g.jsxs)(r.Z,{show:x,onHide:oe,className:"CardImg12 modal fade bg-transparent",style:{backgroundColor:"transparent"},tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:[(0,g.jsx)(r.Z.Header,{closeButton:!0,children:(0,g.jsx)(r.Z.Title,{children:"Filter Panel"})}),(0,g.jsx)(r.Z.Body,{children:(0,g.jsx)(T,{dietaryCategories:V,mealCategories:K,mealTypeCategory:H,setMealTypeCategory:G,dietaryPreferenceCategory:R,setDietaryPreferenceCategory:$,handleClearFilter:me})}),(0,g.jsx)(r.Z.Footer,{children:(0,g.jsx)(l.Z,{className:"btn",style:{background:"rgb(249, 233, 233)",color:"black",border:"red"},onClick:oe,children:"Close"})})]})]})]})}):(0,g.jsx)("div",{className:"container-fluid mt-4",children:(0,g.jsx)(b.Z,{md:12,lg:12,xs:12,sm:12,children:(0,g.jsxs)("div",{className:"row bg-white",children:[(0,g.jsx)("aside",{className:"sidebar col-md-3 col-xl-2 col fixed-sidebar",children:(0,g.jsx)(n.Z,{style:{fontSize:"1rem"},children:(0,g.jsxs)(n.Z.Body,{children:[(0,g.jsx)(n.Z.Header,{className:"delivery-card-header",style:{fontSize:"1.2rem"},children:(0,g.jsx)("p",{className:"delivery-card-title mb-2",style:{fontSize:"1.2rem"},children:"Categories"})}),(0,g.jsxs)(p,{className:"mt-2",children:[(0,g.jsx)(p.Item,{style:{fontSize:"1rem",textAlign:"center"},children:"All"}),(0,g.jsx)(T,{dietaryCategories:V,mealCategories:K,mealTypeCategory:H,setMealTypeCategory:G,dietaryPreferenceCategory:R,setDietaryPreferenceCategory:$,handleClearFilter:me})]})]})})}),(0,g.jsx)("div",{className:"main-content col col-xl-10 col-md-9",style:{height:"90vh",overflow:"auto"},children:(0,g.jsx)(k,{menus:m,handleViewDetails:ne,handleAddToCart:le,handleSearchChange:xe,handleSearchSubmit:ue,handlePageChange:he,searchTerm:U,handleCloseModal:ce,showModal:x,show:x,onHide:ce,selectedMenuItem:y})})]})})})})}},3298:(e,t,a)=>{a.d(t,{Z:()=>o});var s=a(6123),r=a.n(s),l=a(7313),n=a(6184),c=a(8524),i=a(6417);const d=l.forwardRef(((e,t)=>{let{as:a,bsPrefix:s,variant:l="primary",size:d,active:o=!1,disabled:m=!1,className:h,...x}=e;const u=(0,c.vE)(s,"btn"),[g,{tagName:y}]=(0,n.FT)({tagName:a,disabled:m,...x}),j=y;return(0,i.jsx)(j,{...g,...x,ref:t,disabled:m,className:r()(h,u,o&&"active",l&&"".concat(u,"-").concat(l),d&&"".concat(u,"-").concat(d),x.href&&m&&"disabled")})}));d.displayName="Button";const o=d},1930:()=>{}}]);