"use strict";(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[8522],{4423:(e,t,a)=>{a.d(t,{Z:()=>r});a(7313);var s=a(6417);const r=e=>{let{message:t,type:a,onClose:r}=e;return(0,s.jsx)("div",{className:"modal",style:{display:"block"},children:(0,s.jsxs)("div",{className:"modal-content",children:[(0,s.jsx)("span",{className:"close",onClick:r,children:"\xd7"}),(0,s.jsx)("p",{className:a,children:t})]})})}},8522:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var s=a(7313),r=a(6573),l=a(195),o=a(7533),n=a(8467),c=a(2102),i=a(3849),d=a(1616),m=a(3122),u=a(4423),x=a(6417);const f=()=>{const[e,t]=(0,s.useState)(""),[a,f]=(0,s.useState)(null),[p,h]=(0,s.useState)([]),[y,g]=(0,s.useState)(""),[b,j]=(0,s.useState)(""),[v,N]=(0,s.useState)(""),[I,S]=(0,s.useState)([]),[C,k]=(0,s.useState)({message:"",type:""}),w=(0,n.s0)(),F=(e=>{const t=[],a=new Date;for(let s=0;s<e;s++){const e=new Date(a);e.setDate(a.getDate()+s);const r="".concat(e.getMonth()+1,"/").concat(e.getDate());t.push(r)}return t})(7),Z=e=>"".concat(e.line1,", ").concat(e.city,", ").concat(e.state," - ").concat(e.postalCode,", ").concat(e.country);return(0,s.useEffect)((()=>{(async()=>{try{const e=(await r.Z.get("/api/restaurant/get")).data.data,t=e[0].address.latitude,a=e[0].address.longitude;localStorage.setItem("restaurantLatitude",t),localStorage.setItem("restaurantLongitude",a),S(e)}catch(e){k({message:"Error fetching Restaurants",type:"error"})}})()}),[a]),(0,s.useEffect)((()=>{e&&(async()=>{try{const t=(await r.Z.post("/api/timeSlots",{restaurantId:e})).data.timeSlots;h(t)}catch(t){k({message:"Error fetching time slots",type:"error"})}})()}),[e]),(0,x.jsx)("div",{className:"OrdCard py-5 bg-white ",children:(0,x.jsx)(c.Z,{children:(0,x.jsx)(i.Z,{children:(0,x.jsx)(d.Z,{lg:{span:6,offset:3},md:{span:7,offset:3},xs:12,sm:12,children:(0,x.jsxs)(l.Z,{className:" mx-auto mt-lg-5 mt-md-2 py-3 CardImg114",id:"CardBackIMg122",children:[C.message&&(0,x.jsx)(u.Z,{message:C.message,type:C.type,onClose:()=>{k({message:"",type:""})}}),(0,x.jsxs)(l.Z.Body,{children:[(0,x.jsx)(l.Z.Title,{className:"my-3",id:"CardTextLog",children:(0,x.jsx)("h5",{children:"Select Restaurant"})}),(0,x.jsx)(o.Z,{className:"container",children:(0,x.jsx)(o.Z.Group,{controlId:"formrestaurantId",children:(0,x.jsx)("p",{children:(0,x.jsxs)(o.Z.Select,{id:"CardTextLog",style:{backgroundColor:"white",color:"black"},value:e,className:"container",onChange:e=>{const a=e.target.value,s=I.find((e=>e.restaurantId===parseInt(a,10)));if(s){t(a);const e=Z(s.address);j(e);const r=s.restaurantBranch;N(r)}},"aria-label":"Select ZIP Code",children:[(0,x.jsx)("option",{className:"container",value:"",children:"Select a RestaurantBranch"}),I&&I.map((e=>(0,x.jsxs)("option",{style:{backgroundColor:"white",color:"black"},className:"container text-black",value:e.restaurantId,children:[e.restaurantBranch," -"," ",Z(e.address)]},e._id)))]})})})})]}),(0,x.jsx)(l.Z.Body,{children:(0,x.jsxs)("div",{className:"modal-body",children:[(0,x.jsx)(l.Z.Title,{children:(0,x.jsx)("h5",{children:"Order Date"})}),(0,x.jsx)("div",{className:"date-buttons my-2",children:F.map((e=>(0,x.jsx)("button",{className:"text-black mx-2 my-2 p-2",onClick:()=>(e=>{f(e)})(e),variant:"outline-danger",style:{borderRadius:"10px",backgroundColor:a===e?"white":"transparent",color:a===e?"black":"white",border:a===e?"2px solid orange":"1px solid #ccc"},children:e},e)))})]})}),(0,x.jsx)(l.Z.Body,{children:(0,x.jsxs)("div",{className:"modal-body",children:[(0,x.jsx)(l.Z.Title,{id:"CardTextLog",children:(0,x.jsx)("h5",{children:"Order Time"})}),(0,x.jsx)("p",{children:(0,x.jsxs)(o.Z.Select,{style:{backgroundColor:"white",color:"black"},id:"CardTextLog",value:y,onChange:e=>g(e.target.value),children:[(0,x.jsx)("option",{value:"",disabled:!0,children:"Select a time"}),p.map((e=>(0,x.jsx)("option",{value:e.slot,className:"text-black",children:e.slot},e._id)))]})})]})}),(0,x.jsx)("div",{className:"d-flex justify-content-end mb-4  px-4",children:(0,x.jsxs)("button",{className:"btn",onClick:()=>{e&&a&&y?(localStorage.setItem("restaurantId",e),localStorage.setItem("selectedDate",JSON.stringify(a)),localStorage.setItem("selectedTimeSlot",JSON.stringify(y)),localStorage.setItem("Address",JSON.stringify(b)),localStorage.setItem("branch",JSON.stringify(v)),localStorage.removeItem("cartItems"),w("/home")):k({message:"Please select restaurant, time and delivery date.",type:"error"})},children:["Continue",(0,x.jsx)(m.Z1Y,{})]})})]})})})})})},p=()=>(0,x.jsx)(x.Fragment,{}),h=()=>{const[e,t]=(0,s.useState)([]),[a,l]=(0,s.useState)(!0),[o,n]=(0,s.useState)(null),[c,i]=(0,s.useState)({message:"",type:""});return(0,s.useEffect)((()=>{(async()=>{try{const e=await r.Z.get("/api/restaurant/get"),{data:a}=e;Array.isArray(a.data)?t(a.data):n("Invalid data format")}catch(o){o.response&&o.response.status,i({message:"Error fetching data",type:"error"})}finally{l(!1)}})()}),[]),a?(0,x.jsx)("p",{children:"Loading..."}):o?(i({message:"An error occured!",type:"error"}),null):(0,x.jsxs)("div",{children:[(0,x.jsx)(p,{}),(0,x.jsxs)("div",{className:"",children:[c.message&&(0,x.jsx)(u.Z,{message:c.message,type:c.type,onClose:()=>{i({message:"",type:""})}}),(0,x.jsx)(f,{})]})]})}},7533:(e,t,a)=>{a.d(t,{Z:()=>J});var s=a(6123),r=a.n(s),l=a(5192),o=a.n(l),n=a(7313),c=a(6417);const i={type:o().string,tooltip:o().bool,as:o().elementType},d=n.forwardRef(((e,t)=>{let{as:a="div",className:s,type:l="valid",tooltip:o=!1,...n}=e;return(0,c.jsx)(a,{...n,ref:t,className:r()(s,"".concat(l,"-").concat(o?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=i;const m=d,u=n.createContext({});var x=a(8524);const f=n.forwardRef(((e,t)=>{let{id:a,bsPrefix:s,className:l,type:o="checkbox",isValid:i=!1,isInvalid:d=!1,as:m="input",...f}=e;const{controlId:p}=(0,n.useContext)(u);return s=(0,x.vE)(s,"form-check-input"),(0,c.jsx)(m,{...f,ref:t,type:o,id:a||p,className:r()(l,s,i&&"is-valid",d&&"is-invalid")})}));f.displayName="FormCheckInput";const p=f,h=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,htmlFor:l,...o}=e;const{controlId:i}=(0,n.useContext)(u);return a=(0,x.vE)(a,"form-check-label"),(0,c.jsx)("label",{...o,ref:t,htmlFor:l||i,className:r()(s,a)})}));h.displayName="FormCheckLabel";const y=h;const g=n.forwardRef(((e,t)=>{let{id:a,bsPrefix:s,bsSwitchPrefix:l,inline:o=!1,reverse:i=!1,disabled:d=!1,isValid:f=!1,isInvalid:h=!1,feedbackTooltip:g=!1,feedback:b,feedbackType:j,className:v,style:N,title:I="",type:S="checkbox",label:C,children:k,as:w="input",...F}=e;s=(0,x.vE)(s,"form-check"),l=(0,x.vE)(l,"form-switch");const{controlId:Z}=(0,n.useContext)(u),R=(0,n.useMemo)((()=>({controlId:a||Z})),[Z,a]),E=!k&&null!=C&&!1!==C||function(e,t){return n.Children.toArray(e).some((e=>n.isValidElement(e)&&e.type===t))}(k,y),T=(0,c.jsx)(p,{...F,type:"switch"===S?"checkbox":S,ref:t,isValid:f,isInvalid:h,disabled:d,as:w});return(0,c.jsx)(u.Provider,{value:R,children:(0,c.jsx)("div",{style:N,className:r()(v,E&&s,o&&"".concat(s,"-inline"),i&&"".concat(s,"-reverse"),"switch"===S&&l),children:k||(0,c.jsxs)(c.Fragment,{children:[T,E&&(0,c.jsx)(y,{title:I,children:C}),b&&(0,c.jsx)(m,{type:j,tooltip:g,children:b})]})})})}));g.displayName="FormCheck";const b=Object.assign(g,{Input:p,Label:y});a(1024);const j=n.forwardRef(((e,t)=>{let{bsPrefix:a,type:s,size:l,htmlSize:o,id:i,className:d,isValid:m=!1,isInvalid:f=!1,plaintext:p,readOnly:h,as:y="input",...g}=e;const{controlId:b}=(0,n.useContext)(u);return a=(0,x.vE)(a,"form-control"),(0,c.jsx)(y,{...g,type:s,size:o,ref:t,readOnly:h,id:i||b,className:r()(d,p?"".concat(a,"-plaintext"):a,l&&"".concat(a,"-").concat(l),"color"===s&&"".concat(a,"-color"),m&&"is-valid",f&&"is-invalid")})}));j.displayName="FormControl";const v=Object.assign(j,{Feedback:m}),N=n.forwardRef(((e,t)=>{let{className:a,bsPrefix:s,as:l="div",...o}=e;return s=(0,x.vE)(s,"form-floating"),(0,c.jsx)(l,{ref:t,className:r()(a,s),...o})}));N.displayName="FormFloating";const I=N,S=n.forwardRef(((e,t)=>{let{controlId:a,as:s="div",...r}=e;const l=(0,n.useMemo)((()=>({controlId:a})),[a]);return(0,c.jsx)(u.Provider,{value:l,children:(0,c.jsx)(s,{...r,ref:t})})}));S.displayName="FormGroup";const C=S;var k=a(1616);const w=n.forwardRef(((e,t)=>{let{as:a="label",bsPrefix:s,column:l=!1,visuallyHidden:o=!1,className:i,htmlFor:d,...m}=e;const{controlId:f}=(0,n.useContext)(u);s=(0,x.vE)(s,"form-label");let p="col-form-label";"string"===typeof l&&(p="".concat(p," ").concat(p,"-").concat(l));const h=r()(i,s,o&&"visually-hidden",l&&p);return d=d||f,l?(0,c.jsx)(k.Z,{ref:t,as:"label",className:h,htmlFor:d,...m}):(0,c.jsx)(a,{ref:t,className:h,htmlFor:d,...m})}));w.displayName="FormLabel";const F=w,Z=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,id:l,...o}=e;const{controlId:i}=(0,n.useContext)(u);return a=(0,x.vE)(a,"form-range"),(0,c.jsx)("input",{...o,type:"range",ref:t,className:r()(s,a),id:l||i})}));Z.displayName="FormRange";const R=Z,E=n.forwardRef(((e,t)=>{let{bsPrefix:a,size:s,htmlSize:l,className:o,isValid:i=!1,isInvalid:d=!1,id:m,...f}=e;const{controlId:p}=(0,n.useContext)(u);return a=(0,x.vE)(a,"form-select"),(0,c.jsx)("select",{...f,size:l,ref:t,className:r()(o,a,s&&"".concat(a,"-").concat(s),i&&"is-valid",d&&"is-invalid"),id:m||p})}));E.displayName="FormSelect";const T=E,L=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,as:l="small",muted:o,...n}=e;return a=(0,x.vE)(a,"form-text"),(0,c.jsx)(l,{...n,ref:t,className:r()(s,a,o&&"text-muted")})}));L.displayName="FormText";const P=L,O=n.forwardRef(((e,t)=>(0,c.jsx)(b,{...e,ref:t,type:"switch"})));O.displayName="Switch";const B=Object.assign(O,{Input:b.Input,Label:b.Label}),D=n.forwardRef(((e,t)=>{let{bsPrefix:a,className:s,children:l,controlId:o,label:n,...i}=e;return a=(0,x.vE)(a,"form-floating"),(0,c.jsxs)(C,{ref:t,className:r()(s,a),controlId:o,...i,children:[l,(0,c.jsx)("label",{htmlFor:o,children:n})]})}));D.displayName="FloatingLabel";const z=D,V={_ref:o().any,validated:o().bool,as:o().elementType},A=n.forwardRef(((e,t)=>{let{className:a,validated:s,as:l="form",...o}=e;return(0,c.jsx)(l,{...o,ref:t,className:r()(a,s&&"was-validated")})}));A.displayName="Form",A.propTypes=V;const J=Object.assign(A,{Group:C,Control:v,Floating:I,Check:b,Switch:B,Label:F,Text:P,Range:R,Select:T,FloatingLabel:z})}}]);