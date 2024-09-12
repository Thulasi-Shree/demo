(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[1212],{2766:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>x});var s=a(7313),r=a(8467),l=a(6573),o=a(195),n=a(3298),i=a(6417);const d=e=>{let{name:t,lastName:a,handleFirstNameChange:r,handleLastNameChange:l,handleGetOtp:d,handleOtpChange:c,emailOrMobile:h,handleEmailOrMobileChange:m,enteredOtp:g,handleConfirmOtp:u,isOtpSent:p}=e;const[y,x]=(0,s.useState)(!1),[b,C]=(0,s.useState)("");(0,s.useEffect)((()=>{const e=localStorage.getItem("otpVerified");e&&x(JSON.parse(e))}),[]);return(0,i.jsx)("div",{children:(0,i.jsxs)(o.Z,{className:"my-3 p-3",style:{backgroundColor:"transparent"},children:[(0,i.jsx)("h4",{id:"CardText",children:"Personal Details"}),(0,i.jsxs)("div",{className:"mb-3 address-container",children:[(0,i.jsxs)("label",{htmlFor:"userName",className:"form-label",id:"CardText",children:["First Name"," ",(0,i.jsx)("span",{className:"text-danger",children:(0,i.jsx)("b",{children:"*"})})]}),(0,i.jsx)("input",{type:"text",style:{backgroundColor:"white",color:"black"},className:"form-control",id:"userName",value:t,onChange:r,placeholder:"First Name is Required",required:!0}),b.name&&(0,i.jsx)("div",{className:"error",children:b.name})]}),(0,i.jsxs)("div",{className:"mb-3 address-container",children:[(0,i.jsxs)("label",{htmlFor:"lastName",className:"form-label",id:"CardText",children:["Last Name"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"text",className:"form-control",id:"lastName",value:a,placeholder:"Last Name is Required",onChange:l,required:!0})]}),(0,i.jsxs)("div",{className:"mb-3 address-container",style:{display:y?"none":"block"},children:[(0,i.jsxs)("label",{htmlFor:"emailOrMobile",className:"form-label",id:"CardText",children:["Email / Mobile Number"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{type:"text",style:{backgroundColor:"white",color:"black"},className:"form-control",id:"emailOrMobile",value:h,onChange:m,required:!0,placeholder:"Email id / Mobile number is required"})]}),(0,i.jsx)(n.Z,{type:"button",className:"my-global-button btn my-2",onClick:d,style:{display:y?"none":"block"},children:"Get OTP"}),p&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{style:{display:y?"none":"block"},children:[(0,i.jsxs)("label",{htmlFor:"otp",className:"form-label mt-4",id:"CardText",children:["Enter OTP"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"tel",className:"form-control",id:"otp",value:g,onChange:c,required:!0,placeholder:"Field is required"})]}),(0,i.jsx)(n.Z,{type:"button",className:"my-3 my-global-button",onClick:()=>{u(),x(!0),localStorage.setItem("otpVerified",!0)},style:{display:y?"none":"block"},children:"Confirm OTP"})]})]})})},c=e=>{let{orderType:t,handleOrderTypeChange:a,handleText1:s,textBox1:r}=e;return(0,i.jsxs)(o.Z,{className:"my-3 p-3 bg-transparent",children:[(0,i.jsx)("h4",{id:"CardText",children:"Order Details"}),(0,i.jsxs)("div",{className:"mb-3 address-container",children:[(0,i.jsxs)("label",{htmlFor:"orderType",className:"form-label",id:"CardText",children:["Order Type"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsxs)("select",{className:"form-select form-select-sm col-xs-2 ",id:"orderType",value:t,onChange:a,style:{backgroundColor:"white",color:"black"},required:!0,children:[(0,i.jsx)("option",{value:"",children:"Select"}),(0,i.jsx)("option",{value:"Pickup",className:"text-black",children:"Pickup"}),(0,i.jsx)("option",{value:"Delivery",className:"text-black",children:"Delivery"})]})]}),(0,i.jsxs)("div",{className:"mb-3 address-container",children:[(0,i.jsx)("label",{htmlFor:"orderNotes",className:"form-label",id:"CardText",children:"Order Notes"}),(0,i.jsx)("textarea",{type:"text",style:{backgroundColor:"white",color:"black"},className:"form-control ",name:"orderNotes",value:r,onChange:s,placeholder:"Order Notes"})]})]})},h=e=>{let{streetAddress:t,postalCode:a,city:r,postal_code:l,state:n,country:d,handleStreetAddressChange:c,handleZipCodeChange:h,handleCityChange:m,handleStateChange:g}=e;return(0,s.useEffect)((()=>{const e={streetAddress:t,postalCode:a||l,city:r,state:n,country:d};localStorage.setItem("billingAddress",JSON.stringify(e))}),[t,a,l,r,n,d]),(0,i.jsxs)(o.Z,{className:"my-3 p-3 bg-transparent",children:[(0,i.jsx)("h4",{id:"CardText",children:"Billing Address"}),(0,i.jsxs)("div",{className:"mb-3 address-container",children:[(0,i.jsxs)("label",{htmlFor:"streetAddress",className:"form-label",id:"CardText",style:{color:"black",backgroundColor:"transparent"},children:["Street Address"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"streetAddress",value:t,onChange:c,required:!0,placeholder:"Field is required"})]}),(0,i.jsxs)("div",{className:"mb-3 address-container",children:[(0,i.jsxs)("label",{id:"CardText",htmlFor:"zipCode",className:"form-label",children:["ZIP Code"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"zipCode",value:a,onChange:h,required:!0,placeholder:"Field is required"})]}),(0,i.jsxs)("div",{className:"mb-3 address-container",children:[(0,i.jsxs)("label",{id:"CardText",htmlFor:"city",className:"form-label",children:["City"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"city",value:r,onChange:m,required:!0,placeholder:"Field is required"})]}),(0,i.jsxs)("div",{className:"mb-3 address-container",children:[(0,i.jsxs)("label",{htmlFor:"state",id:"CardText",className:"form-label",children:["State"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"state",value:n,onChange:g,required:!0,placeholder:"Field is required"})]}),(0,i.jsxs)("div",{className:"mb-3 address-container",children:[(0,i.jsxs)("label",{htmlFor:"state",id:"CardText",className:"form-label",children:["Country"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"country",value:d,required:!0,disabled:!0,placeholder:"Field is required"})]})]})},m=e=>{let{streetAddress:t,postalCode:a,city:s,state:r,country:l,textBox2:n,postal_code:d,setPostal_code:c,billingPostalCode:m,useCurrentLocation:g,billingStreetAddress:u,setBillingPostalCode:p,handleSameAsDeliveryChange:y,setBillingStreetAddress:x,handleButtonClick:b,billingCity:C,setBillingCity:S,setBillingState:f,setBillingCountry:N,billingState:j,billingCountry:v,handleStreetAddressChange:k,handleZipCodeChange:O,handleCityChange:A,handleStateChange:I,sameAsDelivery:T,handleUseCurrentLocationChange:w,userLocation:J,distanceResult:F,handleText2:E}=e;return(0,i.jsxs)(o.Z,{className:"my-3 p-3",id:"",children:[(0,i.jsx)("h4",{id:"CardText",children:"Delivery Address"}),g?(0,i.jsxs)("div",{children:[(0,i.jsx)("p",{id:"CardText",children:"Using current location"}),J?(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{id:"CardText",children:["Address: ",J.features[0].properties.address_line1,","," ",J.features[0].properties.postcode,","," ",J.features[0].properties.state_district,","," ",J.features[0].properties.state,","," ",J.features[0].properties.country]}),null!==F&&(0,i.jsx)(i.Fragment,{children:F<500?(0,i.jsx)("div",{children:(0,i.jsx)("p",{style:{color:"#008000",backgroundColor:"white"},children:"Order available for this location"})}):(0,i.jsx)("div",{children:(0,i.jsx)("p",{style:{color:"red",backgroundColor:"white"},children:"Order not available for this location"})})}),(0,i.jsxs)("div",{className:"address-options mt-2",children:[(0,i.jsxs)("label",{className:"radio-label",id:"CardText",children:[(0,i.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"radio",name:"sameAsDeliveryOption",checked:T,onChange:y}),(0,i.jsx)("span",{className:"radio-custom"}),"Use Delivery address"]}),(0,i.jsxs)("label",{className:"radio-label",id:"CardText",children:[(0,i.jsx)("input",{style:{backgroundColor:"white",color:"black"},type:"radio",name:"sameAsDeliveryOption",checked:!T,onChange:y}),(0,i.jsx)("span",{className:"radio-custom"}),"Enter different address"]})]}),(0,i.jsx)(h,{sameAsDelivery:T,streetAddress:u,postal_code:m,city:C,state:j,country:v,handleStreetAddressChange:e=>x(e.target.value),handleZipCodeChange:e=>p(e.target.value),handleCityChange:e=>S(e.target.value),handleStateChange:e=>f(e.target.value),handleCountryChange:e=>N(e.target.value)})]}):(0,i.jsx)("p",{children:"Loading location..."})]}):(0,i.jsxs)("div",{className:"address-container",children:[(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{id:"CardText",htmlFor:"streetAddress",className:"form-label",children:["Street Address"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"streetAddress",value:t,onChange:k,required:!0,placeholder:"Field is required"})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{id:"CardText",htmlFor:"zipCode",className:"form-label",children:["ZIP Code"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"zipCode",value:d,onChange:e=>c(e.target.value),required:!0,placeholder:"Field is required"})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{id:"CardText",htmlFor:"city",className:"form-label",children:["City"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"city",value:s,onChange:A,required:!0,placeholder:"Field is required"})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{htmlFor:"state",id:"CardText",className:"form-label",children:["State"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"state",value:r,onChange:I,required:!0,placeholder:"Field is required"})]}),(0,i.jsxs)("div",{className:"mb-3",children:[(0,i.jsxs)("label",{htmlFor:"country",id:"CardText",className:"form-label",children:["Country"," ",(0,i.jsxs)("span",{className:"text-danger",children:[" ",(0,i.jsx)("b",{children:"*"})]})]}),(0,i.jsx)("input",{style:{color:"black",backgroundColor:"white"},type:"text",className:"form-control ",id:"country",value:l,required:!0,disabled:!0,placeholder:"Field is required"})]}),null!==F&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{})}),(0,i.jsxs)("div",{className:"address-options mt-2",children:[(0,i.jsxs)("label",{className:"radio-label",id:"CardText",children:[(0,i.jsx)("input",{type:"radio",name:"sameAsDeliveryOption",checked:T,onChange:y}),(0,i.jsx)("span",{className:"radio-custom"}),"Use Delivery address"]}),(0,i.jsxs)("label",{className:"radio-label",id:"CardText",children:[(0,i.jsx)("input",{type:"radio",name:"sameAsDeliveryOption",checked:!T,onChange:y}),(0,i.jsx)("span",{className:"radio-custom"}),"Enter different address"]})]}),(0,i.jsx)(h,{sameAsDelivery:T,streetAddress:u,postalCode:m,city:C,state:j,country:v,handleStreetAddressChange:e=>x(e.target.value),handleZipCodeChange:e=>p(e.target.value),handleCityChange:e=>S(e.target.value),handleStateChange:e=>f(e.target.value),handleCountryChange:e=>N(e.target.value)})]})]})};var g=a(6926),u=a(2984),p=a.n(u),y=a(4423);const x=()=>{const e=(0,r.s0)(),t=JSON.parse(localStorage.getItem("isloggedIn")),a=JSON.parse(localStorage.getItem("deliveryAddress")||"{}"),o=JSON.parse(localStorage.getItem("orderType")||"{}"),n=JSON.parse(localStorage.getItem("shippingInfo")||"{}"),u=JSON.parse(localStorage.getItem("emailOrMobile"))||"",x=JSON.parse(localStorage.getItem("orderNotes")),b=JSON.parse(localStorage.getItem("billingAddress")||"{}"),C=JSON.parse(localStorage.getItem("user")),S=JSON.parse(localStorage.getItem("restaurantLongitude")),f=JSON.parse(localStorage.getItem("restaurantLatitude")),[N,j]=(0,s.useState)(""),[v,k]=(0,s.useState)(o||""),[O,A]=(0,s.useState)(""),[I,T]=(0,s.useState)([]),[w,J]=(0,s.useState)(a&&a.streetAddress||b&&b.streetAddress||""),[F,E]=(0,s.useState)(a.city||b.city||""),[P,q]=(0,s.useState)("US"),[Z,D]=(0,s.useState)(a.state||b.state||""),[B,L]=(0,s.useState)(a.postal_code||b.postal_code||""),[_,M]=(0,s.useState)(x||""),[U,z]=(0,s.useState)(x||""),[R,V]=(0,s.useState)(!1),[K,G]=(0,s.useState)(!1),[$,H]=(0,s.useState)(null),[Q,W]=(0,s.useState)(""),[X,Y]=(0,s.useState)({message:"",type:""}),[ee,te]=(0,s.useState)(null),[ae,se]=(0,s.useState)(t?C.name:n.name||""),[re,le]=(0,s.useState)(t?C.lastName:n.lastName||""),[oe,ne]=(0,s.useState)(t?C.email:n.email||""),[ie,de]=(0,s.useState)(!1),[ce,he]=(0,s.useState)(!1),[me,ge]=(0,s.useState)(!1),[ue,pe]=(0,s.useState)(null),[ye,xe]=(0,s.useState)(!1),[be,Ce]=(0,s.useState)(u||""),[Se,fe]=(0,s.useState)({latitude:null,longitude:null}),[Ne,je]=(0,s.useState)({latitude:null,longitude:null}),[ve,ke]=(0,s.useState)(null),[Oe,Ae]=(0,s.useState)(t?C.phone:""),[Ie,Te]=(0,s.useState)({}),[we,Je]=(JSON.parse(localStorage.getItem("lat")),JSON.parse(localStorage.getItem("lng")),(0,s.useState)(null)),Fe=((0,r.TH)().state,e=>{const t=e.target.value;M(t),localStorage.setItem("orderNotes",JSON.stringify(t))}),Ee=e=>{J(e.target.value)},Pe=e=>{E(e.target.value)},qe=e=>{q(e.target.value)},Ze=e=>{D(e.target.value)},De=e=>{L(e.target.value)},[Be,Le]=(0,s.useState)(!1),[_e,Me]=(0,s.useState)(b.streetAddress||""),[Ue,ze]=(0,s.useState)(a.postal_code||b.postal_code||""),[Re,Ve]=(0,s.useState)(b.city||""),[Ke,Ge]=(0,s.useState)(b.state||""),[$e,He]=(0,s.useState)("US"),Qe=JSON.parse(localStorage.getItem("restaurantId")),We=async e=>{const t="".concat(_e,", ").concat(Re,", ").concat(Ke,", ").concat(Ue,", ").concat($e);try{const e=await(async e=>{try{const t=encodeURIComponent(e),a=await l.Z.get("https://api.geoapify.com/v1/geocode/search?text=".concat(t,"&apiKey=").concat(ee));if(!a.data.features||0===a.data.features.length)throw new Error("Coordinates not found for the given billing address");const s=a.data.features[0],{lat:r,lon:o}=s.properties;return localStorage.setItem("billingLat",JSON.stringify(r)),localStorage.setItem("billingLng",JSON.stringify(o)),he(!0),{latitude:r,longitude:o}}catch(t){throw he(!1),t}})(t);je(e)}catch(a){Y({message:"Enter the correct address!",type:"error"})}},Xe=async e=>{e.preventDefault();const t="".concat(w,", ").concat(F,", ").concat(Z,", ").concat(B||Ue,", ").concat(P);try{const e=await(async e=>{try{const t=encodeURIComponent(e),a=await l.Z.get("https://api.geoapify.com/v1/geocode/search?text=".concat(t,"&apiKey=").concat(ee));if(!a.data.features||0===a.data.features.length)throw new Error("Coordinates not found for the given billing address");const s=a.data.features[0],{lat:r,lon:o}=s.properties;return he(!0),localStorage.setItem("billingLat",JSON.stringify(r)),localStorage.setItem("billingLng",JSON.stringify(o)),{latitude:r,longitude:o}}catch(t){throw t}})(t);je(e)}catch(a){he(!1),Y({message:"Please enter the address correctly",type:"error"})}},Ye=async e=>{e.preventDefault();const t="".concat(w,", ").concat(F,", ").concat(Z,", ").concat(B||Ue,", ").concat(P);try{const e=await(async e=>{try{const t=encodeURIComponent(e),a=await l.Z.get("https://api.geoapify.com/v1/geocode/search?text=".concat(t,"&apiKey=").concat(ee));if(!a.data.features||0===a.data.features.length)throw new Error("Coordinates not found for the given delivery address");const s=a.data.features[0],{lat:r,lon:o}=s.properties;return de(!0),localStorage.setItem("deliveryLat",JSON.stringify(r)),localStorage.setItem("deliveryLng",JSON.stringify(o)),{latitude:r,longitude:o}}catch(t){throw t}})(t),a={latitude:f,longitude:S},s=(0,g.getDistance)(a,e)/1e3;console.log(s),pe(s),s<=Q?de(!0):(de(!1),Y({message:"Delivery address is too far. Maximum delivery distance is ".concat(Q," miles/km."),type:"success"})),fe(e)}catch(a){de(!1),Y({message:"Please enter the address correctly",type:"error"})}};(0,s.useEffect)((()=>{(async()=>{try{const e=await l.Z.get("/api/admin/settings/getbyId",{params:{restaurantId:Qe}});W(e.data.data.deliveryKm),console.log(Q)}catch(e){console.error("Error fetching restaurant details:",e),Y({message:"Error fetching delivery & tax charges",type:"error"})}})(),(async()=>{try{const e=JSON.parse(localStorage.getItem("restaurantId")),t=(await l.Z.post("/api/timeSlots",{restaurantId:e})).data.timeSlots;T(t)}catch(e){Y({message:"Error fetching time slots",type:"error"})}})()}),[Q]),(0,s.useEffect)((()=>{l.Z.get("/api/get-location-api-key").then((e=>{const t=e.data.apiKey,a=et(t);H(a)})).catch((e=>{Y({message:"Error fetching API key",type:"error"})})),l.Z.get("/api/locationApikey").then((e=>{const t=e.data.apiKey,a=et(t);te(a)})).catch((e=>{console.error("Error fetching API key:",e),Y({message:"Error fetching API key",type:"error"})}))}),[]);const et=e=>{try{const t=p().AES.decrypt(e,"ghjdjdgdhddjjdhgdcdghww#hsh536");return t.toString(p().enc.Utf8)}catch(t){return console.error("Error decrypting API key:",t),""}};return(0,s.useEffect)((()=>{localStorage.setItem("billingAddress",JSON.stringify({streetAddress:_e,postal_code:Ue,city:Re,state:Ke,country:$e}))}),[_e,Ue,Re,Ke,$e]),(0,s.useEffect)((()=>{localStorage.setItem("deliveryAddress",JSON.stringify({streetAddress:w,postal_code:B,city:F,state:Z,country:P}))}),[w,B,F,Z,P]),(0,s.useEffect)((()=>{Be&&(me?(Me(ve.features[0].properties.address_line1),ze(ve.features[0].properties.postcode),Ve(ve.features[0].properties.city),Ge(ve.features[0].properties.state),He(ve.features[0].properties.country)):(Me(w),ze(B),Ve(F),Ge(Z),He(P)))}),[Be,w,B,F,Z,P]),(0,s.useEffect)((()=>{}),[ce,ie,v,t,K,e]),(0,i.jsx)("div",{id:"ShippingInfo",className:"py-5 bg-white",children:(0,i.jsxs)("div",{className:"container col-11 mx-auto bg-white col-lg-6 py-3 custom-table my-4",id:"CardBackIMg",children:[X.message&&(0,i.jsx)(y.Z,{message:X.message,type:X.type,onClose:()=>{Y({message:"",type:""})}}),(0,i.jsxs)("form",{className:"checkout-form bg-white",onSubmit:async a=>{a.preventDefault();try{const s={orderType:v,name:ae,lastName:re,email:oe,mobileNumber:Oe,textBox1:_,textBox2:U};"Pickup"===v?await Xe(a):await We(),"Delivery"===v?await Ye(a):await We(),localStorage.setItem("shippingInfo",JSON.stringify(s)),(!0===ce&&!0===ie||"Pickup"===v&&!0===ce)&&(Y({message:"Address verified",type:"success"}),t||K?e("/order/confirm"):Y({message:"Please verify your email / mobile number",type:"error"}))}catch(s){console.error("Error submitting form:",s),Y({message:"Error submitting form. Please try again later.",type:"error"})}},children:[!t&&(0,i.jsx)(d,{name:ae,lastName:re,email:oe,otp:N,handleGetOtp:async()=>{try{const e="/api/send/otp",t=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(be);console.log(t);const a=/^\d{10}$/.test(be);await l.Z.post(e,{email:t?be:void 0,mobile:a?be:void 0}),Y({message:"OTP sent successfully!",type:"success"}),V(!0)}catch(e){Y({message:"Error sending OTP!",type:"error"})}},isOtpSent:R,otpVerified:K,emailOrMobile:be,handleConfirmOtp:async()=>{try{const e=p().AES.encrypt(N,"ghjdjdgdhddjjdhgdcdghww#hsh536").toString(),t="/api/verify/otp";(await l.Z.post(t,{email:be,mobile:be,enteredOtp:e})).data.success?(Y({message:"OTP verified successfully! ",type:"success"}),localStorage.setItem("emailOrMobile",JSON.stringify(be)),G(!0),localStorage.setItem("otpVerified",JSON.stringify(K))):(Y({message:"OTP verification failed!",type:"success"}),G(!1),localStorage.setItem("otpVerified",JSON.stringify(K)))}catch(e){Y({message:"OTP verification failed!",type:"error"}),G(!1),localStorage.setItem("otpVerified",JSON.stringify(K))}},handleFirstNameChange:e=>{se(e.target.value),localStorage.setItem("name",JSON.stringify(ae))},handleLastNameChange:e=>{le(e.target.value),localStorage.setItem("lastName",JSON.stringify(re))},handleEmailChange:e=>{ne(e.target.value)},handleOtpChange:e=>{j(e.target.value)},handleEmailOrMobileChange:e=>{Ce(e.target.value)},errors:Ie}),(0,i.jsx)(c,{orderType:v,selectedTimeSlot:O,timeSlots:I,handleOrderTypeChange:e=>{he(!1),de(!1);const t=e.target.value;localStorage.setItem("orderType",JSON.stringify(t)),k(t)},handleTimeSlotChange:e=>{const t=e.target.value;A(t),localStorage.setItem("selectedTimeSlot",JSON.stringify(t))},handleTimeChange:e=>{Je(e)},time:we,textBox1:_,handleText1:Fe}),"Delivery"===v&&(0,i.jsx)(m,{streetAddress:w,postal_code:B,setPostal_code:L,city:F,state:Z,country:P,textBox2:U,setBillingVerified:he,handleStreetAddressChange:Ee,handleZipCodeChange:De,handleCityChange:Pe,handleStateChange:Ze,handleCountryChange:qe,handleText2:e=>{const t=e.target.value;z(t),localStorage.setItem("deliveryInstruction",JSON.stringify(t))},toastShown:ye,setToastShown:xe,useCurrentLocation:me,userLocation:ve,sameAsDelivery:Be,billingCity:Re,billingState:Ke,billingCountry:$e,setBillingStreetAddress:Me,handleSameAsDeliveryChange:()=>{Le(!Be),Be?(Me(""),ze(""),Ve(""),Ge(""),localStorage.removeItem("billingAddress")):(Me(w),ze(Ue),Ve(F),Ge(Z),He(P))},billingStreetAddress:_e,billingPostalCode:Ue,setBillingPostalCode:ze,setBillingCity:Ve,setBillingState:Ge,setBillingCountry:He,coordinates:Se,distanceResult:ue}),"Pickup"===v&&(0,i.jsx)(h,{streetAddress:w,postal_code:B,city:F,state:Z,country:P,textBox1:_,billingPostalCode:Ue,setBillingPostalCode:ze,handleStreetAddressChange:Ee,handleZipCodeChange:De,handleCityChange:Pe,handleStateChange:Ze,handleCountryChange:qe,handleText1:Fe,orderType:v}),(0,i.jsx)("div",{className:"d-flex justify-content-center",children:(0,i.jsx)("button",{type:"submit",id:"checkout_btn",className:"btn my-4",children:"Continue"})})]})]})})}},2480:()=>{}}]);