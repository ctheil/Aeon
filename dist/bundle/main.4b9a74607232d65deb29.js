(()=>{"use strict";var e,t,a,r={428:(e,t,a)=>{var r=a(504),l=a(104),o=(a(692),a(312)),n=a.n(o),s=a(412),u=a.n(s),d={LoginPage:n(),HomePage:u()},i=window.__INITIAL_PROPS__;console.log("[index.js]",i);var c=d[i.componentName];l.hydrate(r.createElement(c,i),document.getElementById("root"))},692:function(e,t,a){var r=this&&this.__createBinding||(Object.create?function(e,t,a,r){void 0===r&&(r=a);var l=Object.getOwnPropertyDescriptor(t,a);l&&!("get"in l?!t.__esModule:l.writable||l.configurable)||(l={enumerable:!0,get:function(){return t[a]}}),Object.defineProperty(e,r,l)}:function(e,t,a,r){void 0===r&&(r=a),e[r]=t[a]}),l=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)"default"!==a&&Object.prototype.hasOwnProperty.call(e,a)&&r(t,e,a);return l(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const n=o(a(504));t.default=e=>n.createElement("main",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},e.children)},376:function(e,t,a){var r=this&&this.__awaiter||function(e,t,a,r){return new(a||(a=Promise))((function(l,o){function n(e){try{u(r.next(e))}catch(e){o(e)}}function s(e){try{u(r.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?l(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(n,s)}u((r=r.apply(e,t||[])).next())}))},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=l(a(504)),n=a(592),s=a(518),u=a(456),d=l(a(220));t.default=({token:e})=>{const t=(0,u.object)({email:(0,u.string)().email(),password:(0,u.string)()});return o.default.createElement(s.Formik,{initialValues:{email:"",password:""},onSubmit:(e,{setSubmitting:t})=>r(void 0,void 0,void 0,(function*(){t(!0)})),validationSchema:t},(({values:t,errors:a,touched:r,handleChange:l,handleBlur:s,handleSubmit:u,isSubmitting:i})=>o.default.createElement("form",{onSubmit:u,className:"space-y-8"},o.default.createElement(d.default,{token:e}),o.default.createElement(n.TextField,{type:"email"}))))}},312:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(a(504)),o=r(a(376)),n=a(904);t.default=e=>(console.log("[react]: page props:",e),l.default.createElement("div",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},l.default.createElement("div",{className:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"},l.default.createElement("div",{className:"mx-auto max-w-lg"},l.default.createElement("h1",{className:"text-center text-2xl font-thin text-l-text dark:text-d-text sm:text-3xl "},"Welcome back"),l.default.createElement("p",{className:"mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-gray-300"},"As the initial administrator, you'll need to set up your account to enable you to customize, manage, and optimize the platform to perfectly fit your organization."),l.default.createElement(o.default,{token:e.csrfToken}))),l.default.createElement(n.Toaster,null)))},220:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(a(504));t.default=e=>l.default.createElement("input",{type:"hidden",value:e.token,name:"_csrf"})},904:function(e,t,a){var r=this&&this.__rest||function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(r=Object.getOwnPropertySymbols(e);l<r.length;l++)t.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(a[r[l]]=e[r[l]])}return a},l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Toaster=void 0;const o=l(a(504)),n=a(836),s=a(96);t.Toaster=e=>{var t=r(e,[]);const{theme:a="system"}=(0,n.useTheme)();return o.default.createElement(s.Toaster,Object.assign({theme:a,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-slate-50 dark:group-[.toaster]:border-slate-800",description:"group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400",actionButton:"group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 dark:group-[.toast]:bg-slate-50 dark:group-[.toast]:text-slate-900",cancelButton:"group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-400"}}},t))}},872:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(a(504));t.default=e=>l.default.createElement("div",{className:"col-span-12 md:col-span-9 bg-l-bg dark:bg-d-bg p-4"},l.default.createElement("div",{className:"flex flex-col"},l.default.createElement("div",{className:"mb-4"},l.default.createElement("h1",{className:"text-2xl font-bold text-gray-700"},"Welcome to Capsule"),l.default.createElement("p",null,"Let's set up your Capsule experience with these steps below.")),l.default.createElement("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"},l.default.createElement("div",{className:"p-4 bg-gray-50 rounded-lg"},l.default.createElement("h2",{className:"font-bold text-lg mb-2"},"Organization"),l.default.createElement("p",null,"Add all information about your organization to your account.")),l.default.createElement("div",{className:"p-4 bg-gray-50 rounded-lg"},l.default.createElement("h2",{className:"font-bold text-lg mb-2"},"Insurance documents"),l.default.createElement("p",null,"Upload the various mandatory insurance documents.")),l.default.createElement("div",{className:"p-4 bg-gray-50 rounded-lg"},l.default.createElement("h2",{className:"font-bold text-lg mb-2"},"Drivers and vehicles"),l.default.createElement("p",null,"Add drivers and vehicles to begin submitting documents for them.")))))},412:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=r(a(504)),o=r(a(480)),n=r(a(872));t.default=e=>(console.log("[react]: home page props:",e),l.default.createElement("div",{className:"bg-l-bg dark:bg-d-bg min-h-screen"},l.default.createElement("div",{className:"grid grid-cols-12 gap-4 min-h-screen"},l.default.createElement(o.default,{user:e.user}),l.default.createElement(n.default,null))))},480:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=a(352),o=r(a(504)),n=[{title:"Home",path:"/",icon:o.default.createElement(l.Home,{size:18,strokeWidth:1.5})},{title:"Settings",path:"/settings",icon:o.default.createElement(l.Settings,{size:18,strokeWidth:1.5})}];t.default=e=>o.default.createElement("div",{className:"col-span-3 bg-l-bg dark:bg-d-bg border-e border-l-bg-a dark:border-d-bg-a p-4 hidden md:block"},o.default.createElement("div",{className:"flex flex-col h-full"},o.default.createElement("div",{className:"mb-4"},o.default.createElement("div",{className:"text-l-p-500 dark:text-d-p-500 text-3xl font-bold mb-2"},"Somename")),o.default.createElement("div",{className:"flex flex-col gap-3 space-y-1 pl-1"},n.map(((e,t)=>o.default.createElement("a",{key:t,href:e.path,className:"text-l-text-a hover:text-l-text dark:text-d-text dark:hover:text-d-text-a font-medium flex gap-3 items-center"},e.icon,o.default.createElement("p",null,e.title))))),o.default.createElement("div",{className:"mt-auto flex items-center mb-6"},o.default.createElement("div",{className:"rounded-full h-10 w-10 bg-gray-300 mr-2"}),o.default.createElement("span",{className:"font-medium"},e.user.firstName))))}},l={};function o(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={exports:{}};return r[e].call(a.exports,a,a.exports,o),a.exports}o.m=r,e=[],o.O=(t,a,r,l)=>{if(!a){var n=1/0;for(i=0;i<e.length;i++){for(var[a,r,l]=e[i],s=!0,u=0;u<a.length;u++)(!1&l||n>=l)&&Object.keys(o.O).every((e=>o.O[e](a[u])))?a.splice(u--,1):(s=!1,l<n&&(n=l));if(s){e.splice(i--,1);var d=r();void 0!==d&&(t=d)}}return t}l=l||0;for(var i=e.length;i>0&&e[i-1][2]>l;i--)e[i]=e[i-1];e[i]=[a,r,l]},o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},a=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,o.t=function(e,r){if(1&r&&(e=this(e)),8&r)return e;if("object"==typeof e&&e){if(4&r&&e.__esModule)return e;if(16&r&&"function"==typeof e.then)return e}var l=Object.create(null);o.r(l);var n={};t=t||[null,a({}),a([]),a(a)];for(var s=2&r&&e;"object"==typeof s&&!~t.indexOf(s);s=a(s))Object.getOwnPropertyNames(s).forEach((t=>n[t]=()=>e[t]));return n.default=()=>e,o.d(l,n),l},o.d=(e,t)=>{for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),o.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={590:0};o.O.j=t=>0===e[t];var t=(t,a)=>{var r,l,[n,s,u]=a,d=0;if(n.some((t=>0!==e[t]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(u)var i=u(o)}for(t&&t(a);d<n.length;d++)l=n[d],o.o(e,l)&&e[l]&&e[l][0](),e[l]=0;return o.O(i)},a=self.webpackChunkthesis_2=self.webpackChunkthesis_2||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var n=o.O(void 0,[380],(()=>o(428)));n=o.O(n)})();