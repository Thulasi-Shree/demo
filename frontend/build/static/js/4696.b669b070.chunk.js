(self.webpackChunkrestaurant=self.webpackChunkrestaurant||[]).push([[4696],{4696:function(e,t,n){!function(e,t){"use strict";function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function r(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e){return o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}function i(e,t){if(null==e)return{};var n,r,o=c(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function a(e,t){return s(e)||l(e,t)||p(e,t)||d()}function s(e){if(Array.isArray(e))return e}function l(e,t){var n=e&&("undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"]);if(null!=n){var r,o,u=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(u.push(r.value),!t||u.length!==t);c=!0);}catch(a){i=!0,o=a}finally{try{c||null==n.return||n.return()}finally{if(i)throw o}}return u}}function p(e,t){if(e){if("string"===typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function m(e,t){return e(t={exports:{}},t.exports),t.exports}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var h="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";function y(){}function C(){}C.resetWarningCache=y;var v=function(){function e(e,t,n,r,o,u){if(u!==h){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:C,resetWarningCache:y};return n.PropTypes=n,n},g=m((function(e){e.exports=v()})),E=function(e){var n=t.useRef(e);return t.useEffect((function(){n.current=e}),[e]),n.current},k=function(e){return null!==e&&"object"===o(e)},b=function(e){return k(e)&&"function"===typeof e.then},S=function(e){return k(e)&&"function"===typeof e.elements&&"function"===typeof e.createToken&&"function"===typeof e.createPaymentMethod&&"function"===typeof e.confirmCardPayment},w="[object Object]",P=function e(t,n){if(!k(t)||!k(n))return t===n;var r=Array.isArray(t);if(r!==Array.isArray(n))return!1;var o=Object.prototype.toString.call(t)===w;if(o!==(Object.prototype.toString.call(n)===w))return!1;if(!o&&!r)return t===n;var u=Object.keys(t),c=Object.keys(n);if(u.length!==c.length)return!1;for(var i={},a=0;a<u.length;a+=1)i[u[a]]=!0;for(var s=0;s<c.length;s+=1)i[c[s]]=!0;var l=Object.keys(i);if(l.length!==u.length)return!1;var p=t,f=n,d=function(t){return e(p[t],f[t])};return l.every(d)},O=function(e,t,n){return k(e)?Object.keys(e).reduce((function(o,c){var i=!k(t)||!P(e[c],t[c]);return n.includes(c)?(i&&console.warn("Unsupported prop change: options.".concat(c," is not a mutable property.")),o):i?r(r({},o||{}),{},u({},c,e[c])):o}),null):null},j="Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;if(null===e||S(e))return e;throw new Error(t)},A=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;if(b(e))return{tag:"async",stripePromise:Promise.resolve(e).then((function(e){return x(e,t)}))};var n=x(e,t);return null===n?{tag:"empty"}:{tag:"sync",stripe:n}},R=function(e){e&&e._registerWrapper&&e.registerAppInfo&&(e._registerWrapper({name:"react-stripe-js",version:"2.3.1"}),e.registerAppInfo({name:"react-stripe-js",version:"2.3.1",url:"https://stripe.com/docs/stripe-js/react"}))},N=["on","session"],I=t.createContext(null);I.displayName="CustomCheckoutSdkContext";var T=function(e,t){if(!e)throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(t," in an <CustomCheckoutProvider> provider."));return e},_=t.createContext(null);_.displayName="CustomCheckoutContext";var B=function(e,t){if(!e)return null;e.on,e.session;var n=i(e,N);return r(r({},n),t||e.session())},M="Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",U=function(e){var n=e.stripe,r=e.options,o=e.children,u=t.useMemo((function(){return A(n,M)}),[n]),c=a(t.useState(null),2),i=c[0],s=c[1],l=a(t.useState((function(){return{stripe:"sync"===u.tag?u.stripe:null,customCheckoutSdk:null}})),2),p=l[0],f=l[1],d=function(e,t){f((function(n){return n.stripe&&n.customCheckoutSdk?n:{stripe:e,customCheckoutSdk:t}}))},m=t.useRef(!1);t.useEffect((function(){var e=!0;return"async"!==u.tag||p.stripe?"sync"===u.tag&&u.stripe&&!m.current&&(m.current=!0,u.stripe.initCustomCheckout(r).then((function(e){e&&(d(u.stripe,e),e.on("change",s))}))):u.stripePromise.then((function(t){t&&e&&!m.current&&(m.current=!0,t.initCustomCheckout(r).then((function(e){e&&(d(t,e),e.on("change",s))})))})),function(){e=!1}}),[u,p,r,s]);var h=E(n);t.useEffect((function(){null!==h&&h!==n&&console.warn("Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.")}),[h,n]);var y=E(r);t.useEffect((function(){var e,t;if(p.customCheckoutSdk){!r.clientSecret||k(y)||P(r.clientSecret,y.clientSecret)||console.warn("Unsupported prop change: options.client_secret is not a mutable property.");var n=null===y||void 0===y||null===(e=y.elementsOptions)||void 0===e?void 0:e.appearance,o=null===r||void 0===r||null===(t=r.elementsOptions)||void 0===t?void 0:t.appearance;o&&!P(o,n)&&p.customCheckoutSdk.changeAppearance(o)}}),[r,y,p.customCheckoutSdk]),t.useEffect((function(){R(p.stripe)}),[p.stripe]);var C=t.useMemo((function(){return B(p.customCheckoutSdk,i)}),[p.customCheckoutSdk,i]);return p.customCheckoutSdk?t.createElement(I.Provider,{value:p},t.createElement(_.Provider,{value:C},o)):null};U.propTypes={stripe:g.any,options:g.shape({clientSecret:g.string.isRequired,elementsOptions:g.object}).isRequired};var L=function(e){var n=t.useContext(I);return T(n,e)},Y=function(e){var n=t.useContext(I),r=t.useContext(q);if(n&&r)throw new Error("You cannot wrap the part of your app that ".concat(e," in both <CustomCheckoutProvider> and <Elements> providers."));return n?T(n,e):D(r,e)},W=function(){L("calls useCustomCheckout()");var e=t.useContext(_);if(!e)throw new Error("Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.");return e},q=t.createContext(null);q.displayName="ElementsContext";var D=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},F=t.createContext(null);F.displayName="CartElementContext";var H=function(e,t){if(!e)throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(t," in an <Elements> provider."));return e},V=function(e){var n=e.stripe,r=e.options,o=e.children,u=t.useMemo((function(){return A(n)}),[n]),c=a(t.useState(null),2),i=c[0],s=c[1],l=a(t.useState(null),2),p=l[0],f=l[1],d=a(t.useState((function(){return{stripe:"sync"===u.tag?u.stripe:null,elements:"sync"===u.tag?u.stripe.elements(r):null}})),2),m=d[0],h=d[1];t.useEffect((function(){var e=!0,t=function(e){h((function(t){return t.stripe?t:{stripe:e,elements:e.elements(r)}}))};return"async"!==u.tag||m.stripe?"sync"!==u.tag||m.stripe||t(u.stripe):u.stripePromise.then((function(n){n&&e&&t(n)})),function(){e=!1}}),[u,m,r]);var y=E(n);t.useEffect((function(){null!==y&&y!==n&&console.warn("Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.")}),[y,n]);var C=E(r);return t.useEffect((function(){if(m.elements){var e=O(r,C,["clientSecret","fonts"]);e&&m.elements.update(e)}}),[r,C,m.elements]),t.useEffect((function(){R(m.stripe)}),[m.stripe]),t.createElement(q.Provider,{value:m},t.createElement(F.Provider,{value:{cart:i,setCart:s,cartState:p,setCartState:f}},o))};V.propTypes={stripe:g.any,options:g.object};var $=function(e){var n=t.useContext(q);return D(n,e)},z={cart:null,cartState:null,setCart:function(){},setCartState:function(){}},G=function(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t.useContext(F);return n?z:H(r,e)},J=function(){return $("calls useElements()").elements},K=function(){return Y("calls useStripe()").stripe},Q=function(){return G("calls useCartElement()").cart},X=function(){return G("calls useCartElementState()").cartState},Z=function(e){return(0,e.children)($("mounts <ElementsConsumer>"))};Z.propTypes={children:g.func.isRequired};var ee=function(e,n,r){var o=!!r,u=t.useRef(r);t.useEffect((function(){u.current=r}),[r]),t.useEffect((function(){if(!o||!e)return function(){};var t=function(){u.current&&u.current.apply(u,arguments)};return e.on(n,t),function(){e.off(n,t)}}),[o,n,e,u])},te=function(e){return e.charAt(0).toUpperCase()+e.slice(1)},ne=function(e,n){var r="".concat(te(e),"Element"),o=n?function(e){var n=Y("mounts <".concat(r,">"));G("mounts <".concat(r,">"),"customCheckoutSdk"in n);var o=e.id,u=e.className;return t.createElement("div",{id:o,className:u})}:function(n){var o,u=n.id,c=n.className,i=n.options,s=void 0===i?{}:i,l=n.onBlur,p=n.onFocus,f=n.onReady,d=n.onChange,m=n.onEscape,h=n.onClick,y=n.onLoadError,C=n.onLoaderStart,v=n.onNetworksChange,g=n.onCheckout,k=n.onLineItemClick,b=n.onConfirm,S=n.onCancel,w=n.onShippingAddressChange,P=n.onShippingRateChange,j=Y("mounts <".concat(r,">")),x="elements"in j?j.elements:null,A="customCheckoutSdk"in j?j.customCheckoutSdk:null,R=a(t.useState(null),2),N=R[0],I=R[1],T=t.useRef(null),_=t.useRef(null),B=G("mounts <".concat(r,">"),"customCheckoutSdk"in j),M=B.setCart,U=B.setCartState;ee(N,"blur",l),ee(N,"focus",p),ee(N,"escape",m),ee(N,"click",h),ee(N,"loaderror",y),ee(N,"loaderstart",C),ee(N,"networkschange",v),ee(N,"lineitemclick",k),ee(N,"confirm",b),ee(N,"cancel",S),ee(N,"shippingaddresschange",w),ee(N,"shippingratechange",P),"cart"===e?o=function(e){U(e),f&&f(e)}:f&&(o="expressCheckout"===e?f:function(){f(N)}),ee(N,"ready",o),ee(N,"change","cart"===e?function(e){U(e),d&&d(e)}:d),ee(N,"checkout","cart"===e?function(e){U(e),g&&g(e)}:g),t.useLayoutEffect((function(){if(null===T.current&&null!==_.current&&(x||A)){var t=null;A?t=A.createElement(e,s):x&&(t=x.create(e,s)),"cart"===e&&M&&M(t),T.current=t,I(t),t&&t.mount(_.current)}}),[x,A,s,M]);var L=E(s);return t.useEffect((function(){if(T.current){var e=O(s,L,["paymentRequest"]);e&&T.current.update(e)}}),[s,L]),t.useLayoutEffect((function(){return function(){if(T.current&&"function"===typeof T.current.destroy)try{T.current.destroy(),T.current=null}catch(e){}}}),[]),t.createElement("div",{id:u,className:c,ref:_})};return o.propTypes={id:g.string,className:g.string,onChange:g.func,onBlur:g.func,onFocus:g.func,onReady:g.func,onEscape:g.func,onClick:g.func,onLoadError:g.func,onLoaderStart:g.func,onNetworksChange:g.func,onCheckout:g.func,onLineItemClick:g.func,onConfirm:g.func,onCancel:g.func,onShippingAddressChange:g.func,onShippingRateChange:g.func,options:g.object},o.displayName=r,o.__elementType=e,o},re="undefined"===typeof window,oe=t.createContext(null);oe.displayName="EmbeddedCheckoutProviderContext";var ue=function(){var e=t.useContext(oe);if(!e)throw new Error("<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>");return e},ce="Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.",ie=function(e){var n=e.stripe,r=e.options,o=e.children,u=t.useMemo((function(){return A(n,ce)}),[n]),c=t.useRef(null),i=t.useRef(null),s=a(t.useState({embeddedCheckout:null}),2),l=s[0],p=s[1];t.useEffect((function(){if(!i.current&&!c.current){var e=function(e){i.current||c.current||(i.current=e,c.current=i.current.initEmbeddedCheckout(r).then((function(e){p({embeddedCheckout:e})})))};"async"===u.tag&&!i.current&&r.clientSecret?u.stripePromise.then((function(t){t&&e(t)})):"sync"===u.tag&&!i.current&&r.clientSecret&&e(u.stripe)}}),[u,r,l,i]),t.useEffect((function(){return function(){l.embeddedCheckout?(c.current=null,l.embeddedCheckout.destroy()):c.current&&c.current.then((function(){c.current=null,l.embeddedCheckout&&l.embeddedCheckout.destroy()}))}}),[l.embeddedCheckout]),t.useEffect((function(){R(i)}),[i]);var f=E(n);t.useEffect((function(){null!==f&&f!==n&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.")}),[f,n]);var d=E(r);return t.useEffect((function(){null!=d&&(null!=r?(null!=d.clientSecret&&r.clientSecret!==d.clientSecret&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead."),null!=d.onComplete&&r.onComplete!==d.onComplete&&console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.")):console.warn("Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them."))}),[d,r]),t.createElement(oe.Provider,{value:l},o)},ae=function(e){var n=e.id,r=e.className,o=ue().embeddedCheckout,u=t.useRef(!1),c=t.useRef(null);return t.useLayoutEffect((function(){return!u.current&&o&&null!==c.current&&(o.mount(c.current),u.current=!0),function(){if(u.current&&o)try{o.unmount(),u.current=!1}catch(e){}}}),[o]),t.createElement("div",{ref:c,id:n,className:r})},se=function(e){var n=e.id,r=e.className;return ue(),t.createElement("div",{id:n,className:r})},le=re?se:ae,pe=ne("auBankAccount",re),fe=ne("card",re),de=ne("cardNumber",re),me=ne("cardExpiry",re),he=ne("cardCvc",re),ye=ne("fpxBank",re),Ce=ne("iban",re),ve=ne("idealBank",re),ge=ne("p24Bank",re),Ee=ne("epsBank",re),ke=ne("payment",re),be=ne("expressCheckout",re),Se=ne("paymentRequestButton",re),we=ne("linkAuthentication",re),Pe=ne("address",re),Oe=ne("shippingAddress",re),je=ne("cart",re),xe=ne("paymentMethodMessaging",re),Ae=ne("affirmMessage",re),Re=ne("afterpayClearpayMessage",re);e.AddressElement=Pe,e.AffirmMessageElement=Ae,e.AfterpayClearpayMessageElement=Re,e.AuBankAccountElement=pe,e.CardCvcElement=he,e.CardElement=fe,e.CardExpiryElement=me,e.CardNumberElement=de,e.CartElement=je,e.CustomCheckoutProvider=U,e.Elements=V,e.ElementsConsumer=Z,e.EmbeddedCheckout=le,e.EmbeddedCheckoutProvider=ie,e.EpsBankElement=Ee,e.ExpressCheckoutElement=be,e.FpxBankElement=ye,e.IbanElement=Ce,e.IdealBankElement=ve,e.LinkAuthenticationElement=we,e.P24BankElement=ge,e.PaymentElement=ke,e.PaymentMethodMessagingElement=xe,e.PaymentRequestButtonElement=Se,e.ShippingAddressElement=Oe,e.useCartElement=Q,e.useCartElementState=X,e.useCustomCheckout=W,e.useElements=J,e.useStripe=K,Object.defineProperty(e,"__esModule",{value:!0})}(t,n(7313))}}]);