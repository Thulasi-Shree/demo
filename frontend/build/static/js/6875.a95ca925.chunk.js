"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[6875],{6875:(e,t,a)=>{a.r(t),a.d(t,{default:()=>n});var r=a(4696),s=a(6573),o=a(7313),l=a(7533),c=a(8467),d=a(4423);var i=a(6417);const n=()=>{const e=(0,c.s0)(),t=(0,r.useStripe)(),a=(0,r.useElements)(),n=JSON.parse(localStorage.getItem("confirmOrder")),m=JSON.parse(localStorage.getItem("emailOrMobile")),p=JSON.parse(localStorage.getItem("user")),u=JSON.parse(localStorage.getItem("shippingInfo")),g=JSON.parse(localStorage.getItem("billingAddress")),y=JSON.parse(localStorage.getItem("cartItems")),S=JSON.parse(localStorage.getItem("deliveryAddress")),N=JSON.parse(localStorage.getItem("deliveryInstruction")),h=JSON.parse(localStorage.getItem("orderNotes")),v=JSON.parse(localStorage.getItem("selectedTimeSlot")),I=JSON.parse(localStorage.getItem("restaurantId")),b=JSON.parse(localStorage.getItem("branch")),f=JSON.parse(localStorage.getItem("Address")),A=JSON.parse(localStorage.getItem("selectedDate")),O=JSON.parse(localStorage.getItem("user")),[x,C]=(0,o.useState)(null),J={amount:Math.round(n.orderSummary.total),shipping:{name:"".concat((null===p||void 0===p?void 0:p.name)||u.name," ").concat((null===p||void 0===p?void 0:p.lastName)||u.lastName),phone:(null===p||void 0===p?void 0:p.phone)||m,address:{line1:null===g||void 0===g?void 0:g.streetAddress,line2:null,city:null===g||void 0===g?void 0:g.city,state:null===g||void 0===g?void 0:g.state,postal_code:null===g||void 0===g?void 0:g.postalCode,country:null===g||void 0===g?void 0:g.country}}};return(0,o.useEffect)((()=>{C(null)}),[x]),(0,i.jsxs)("div",{className:"bg-white p-5",children:[(0,i.jsx)("div",{className:"col-12 CardImg114 bg-white col-lg-6 mx-auto ",children:(0,i.jsx)(l.Z,{onSubmit:async o=>{o.preventDefault(),document.querySelector("#pay_btn").disabled=!0;try{const{data:o}=await s.Z.post("/api/payment/process",J),c=o.client_secret,d=a.getElement(r.CardNumberElement),i=await t.confirmCardPayment(c,{payment_method:{card:d,billing_details:{name:"".concat((null===p||void 0===p?void 0:p.name)||u.name," ").concat((null===p||void 0===p?void 0:p.lastName)||u.lastName),email:(null===p||void 0===p?void 0:p.email)||m}}});if(i.error)setAlert({message:i.error.message,type:"error"}),document.querySelector("#pay_btn").disabled=!1;else if("succeeded"===i.paymentIntent.status){localStorage.setItem("payment",JSON.stringify(i));const t={shipping:{name:"".concat(u.name," ").concat(u.lastName),email:u.email,phone:u.mobileNumber,emailOrMobile:m,address:{user:u.name,email:u.email,emailOrMobile:m,phone:u.mobileNumber,line1:g.streetAddress,city:g.city,orderType:u.orderType,state:g.state,postalCode:g.postalCode,country:g.country}},delivery:S?{line1:S.streetAddress,city:S.city,state:S.state,postalCode:S.postalCode,country:S.country}:void 0,items:y.map((e=>({name:e.name,image:e.images&&e.images.length>0?e.images[0].image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAABGElEQVR4nO2TTYuDMBCGk0nU0INVqgQJND9A//+v8O6pVdR46EekPYQijdmD4EIPu2wPe+qc5uN9eJmBwWVZoncD3iY/8D/DVCl1vV6DIJBSMsZ+Vjvn2ra93W6UUiEEGGPyPOec933/q5XWGmNcFIWUsus6iOOYEBJF0TRNzrlFdLlc6rpGCDVNcz6fV3i32+33ewBgjBFCgFK6DABgnuclT5LEOXc8Hud5TtP0xd9a2zRNlmVgrV1bAN/345zf73fO+Qv5eDwOh0OSJFEUgdb6+XyO4+j7PsZ4PYxSSgihlFp3QQhN09S2rZRyu90ihOhms6mqyvM8KeUqGoYhDMM0Ta21wzAIIZb+6XQyxlRVtZT485J/iy/fq4ItXYDTDwAAAABJRU5ErkJggg==",price:e.price,itemQuantity:e.quantity}))),orderNotes:h,userId:(null===O||void 0===O?void 0:O._id)||"Guest",deliveryInstruction:N,itemsPrice:n.orderSummary.estimatedTotal,taxPrice:n.orderSummary.tax,shippingPrice:n.orderSummary.shipping,totalPrice:n.orderSummary.total,paymentInfo:i.paymentIntent.id,orderInstruction:h,paymentStatus:i.paymentIntent.status,restaurantId:I,restaurantBranch:"".concat(b,", ").concat(f),orderType:n.shippingInfo.orderType,selectedTimeSlot:"".concat(v),orderDate:A};try{const a=await s.Z.post("/api/order/new",t);console.log("Order created:",a.data),e("/order/success"),localStorage.removeItem("cartItems")}catch(l){console.error("Error creating order:",l.message),setAlert({message:"Order creation failed, please contact support!",type:"error"})}}else setAlert({message:"Payment failed, Please try again!",type:"success"})}catch(c){console.error("Error processing payment:",c.message)}},className:"shadow-lg bg-white custom-table",id:"CardBackIMg1",children:(0,i.jsxs)("div",{className:"my-2 p-2",children:[(0,i.jsx)("h5",{className:"mb-4 text-center",id:"CardText",children:"CARD INFO"}),(0,i.jsxs)("div",{className:"form-group my-3",children:[(0,i.jsx)("h6",{htmlFor:"card_num_field",id:"CardText",children:"Card Number"}),(0,i.jsx)(r.CardNumberElement,{type:"text",style:{backgroundColor:"#d4ffe8",color:"black"},id:"card_num_field",className:"form-control "})]}),(0,i.jsxs)("div",{className:"form-group my-3",children:[(0,i.jsx)("h6",{htmlFor:"card_exp_field",id:"CardText",children:"Card Expiry"}),(0,i.jsx)(r.CardExpiryElement,{style:{backgroundColor:"#d4ffe8",color:"black"},type:"text",id:"card_exp_field",className:"form-control"})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("h6",{htmlFor:"card_cvc_field",children:"Card CVC"}),(0,i.jsx)(r.CardCvcElement,{style:{backgroundColor:"#d4ffe8",color:"black"},type:"password",id:"card_cvc_field",className:"form-control ",value:""})]}),(0,i.jsx)("div",{className:"d-flex justify-content-center",children:(0,i.jsxs)("button",{id:"pay_btn",type:"submit",className:"btn btn my-color mt-3",children:["Pay -"," "," $".concat(n.orderSummary&&n.orderSummary.total)]})})]})})}),alert.message&&(0,i.jsx)(d.Z,{message:alert.message,type:alert.type,onClose:()=>{setAlert({message:"",type:""})}})]})}}}]);