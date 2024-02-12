(()=>{"use strict";var e,t={428:(e,t,r)=>{var a=r(504),o=r(104),n=(r(692),r(312)),l=r.n(n),s=r(412),i=r.n(s),c={LoginPage:l(),HomePage:i()},u=window.__INITIAL_PROPS__;console.log("[index.js]",u);var d=c[u.componentName];o.hydrate(a.createElement(d,u),document.getElementById("root"))},692:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const l=n(r(504));t.default=e=>l.createElement("main",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},e.children)},376:function(e,t,r){this&&this.__awaiter;var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(504)),n=r(216),l=r(392),s=r(708),i=r(668),c=r(520),u=r(756),d=(a(r(696)),r(96),a(r(220))),f=(0,n.object)({email:(0,n.string)().email({message:"Invald email address"}),password:(0,n.string)().min(4,{message:"Password must be a minimum of 8 characters."})});t.default=({token:e})=>{const t=(0,s.useForm)({resolver:(0,l.zodResolver)(f),defaultValues:{email:"",password:""}});return o.default.createElement(i.Form,Object.assign({},t),o.default.createElement("form",{action:"/v1",className:"space-y-8"},o.default.createElement(d.default,{token:e}),o.default.createElement(i.FormField,{control:t.control,name:"email",render:({field:e})=>o.default.createElement(i.FormItem,null,o.default.createElement(i.FormLabel,null,"Email"),o.default.createElement(i.FormControl,null,o.default.createElement(c.Input,Object.assign({placeholder:"email"},e))),o.default.createElement(i.FormDescription,null,"The email associated with your account."),o.default.createElement(i.FormMessage,null))}),o.default.createElement(i.FormField,{control:t.control,name:"password",render:({field:e})=>o.default.createElement(i.FormItem,null,o.default.createElement(i.FormLabel,null,"Password"),o.default.createElement(i.FormControl,null,o.default.createElement(c.Input,Object.assign({type:"password",placeholder:"password"},e))),o.default.createElement(i.FormDescription,null,"Must be a minimum of 8 characters"),o.default.createElement(i.FormMessage,null))}),o.default.createElement(u.Button,{type:"submit"},"Submit")))}},312:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(504)),n=a(r(376)),l=r(904);t.default=e=>(console.log("[react]: page props:",e),o.default.createElement("div",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},o.default.createElement("div",{className:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"},o.default.createElement("div",{className:"mx-auto max-w-lg"},o.default.createElement("h1",{className:"text-center text-2xl font-thin text-l-p-500 dark:text-d-p-500 sm:text-3xl "},"Welcome back"),o.default.createElement("p",{className:"mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-gray-300"},"As the initial administrator, you'll need to set up your account to enable you to customize, manage, and optimize the platform to perfectly fit your organization."),o.default.createElement(n.default,{token:e.csrfToken}))),o.default.createElement(l.Toaster,null)))},220:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(504));t.default=e=>o.default.createElement("input",{type:"hidden",value:e.token,name:"_csrf"})},756:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.buttonVariants=t.Button=void 0;const s=n(r(504)),i=r(132),c=r(420),u=r(948),d=(0,c.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});t.buttonVariants=d;const f=s.forwardRef(((e,t)=>{var{className:r,variant:a,size:o,asChild:n=!1}=e,c=l(e,["className","variant","size","asChild"]);const f=n?i.Slot:"button";return s.createElement(f,Object.assign({className:(0,u.cn)(d({variant:a,size:o,className:r})),ref:t},c))}));t.Button=f,f.displayName="Button"},668:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.FormField=t.FormMessage=t.FormDescription=t.FormControl=t.FormLabel=t.FormItem=t.Form=t.useFormField=void 0;const s=n(r(504)),i=r(132),c=r(708),u=r(948),d=r(168),f=c.FormProvider;t.Form=f;const m=s.createContext({});t.FormField=e=>{var t=l(e,[]);return s.createElement(m.Provider,{value:{name:t.name}},s.createElement(c.Controller,Object.assign({},t)))};const p=()=>{const e=s.useContext(m),t=s.useContext(b),{getFieldState:r,formState:a}=(0,c.useFormContext)(),o=r(e.name,a);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:n}=t;return Object.assign({id:n,name:e.name,formItemId:`${n}-form-item`,formDescriptionId:`${n}-form-item-description`,formMessageId:`${n}-form-item-message`},o)};t.useFormField=p;const b=s.createContext({}),g=s.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);const o=s.useId();return s.createElement(b.Provider,{value:{id:o}},s.createElement("div",Object.assign({ref:t,className:(0,u.cn)("space-y-2",r)},a)))}));t.FormItem=g,g.displayName="FormItem";const v=s.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);const{error:o,formItemId:n}=p();return s.createElement(d.Label,Object.assign({ref:t,className:(0,u.cn)(o?"text-red-500 dark:text-red-900":"text-l-text-a dark:text-d-text-a",r),htmlFor:n},a))}));t.FormLabel=v,v.displayName="FormLabel";const h=s.forwardRef(((e,t)=>{var r=l(e,[]);const{error:a,formItemId:o,formDescriptionId:n,formMessageId:c}=p();return s.createElement(i.Slot,Object.assign({ref:t,id:o,"aria-describedby":a?`${n} ${c}`:`${n}`,"aria-invalid":!!a},r))}));t.FormControl=h,h.displayName="FormControl";const y=s.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);const{formDescriptionId:o}=p();return s.createElement("p",Object.assign({ref:t,id:o,className:(0,u.cn)("text-sm text-slate-500 dark:text-slate-400",r)},a))}));t.FormDescription=y,y.displayName="FormDescription";const O=s.forwardRef(((e,t)=>{var{className:r,children:a}=e,o=l(e,["className","children"]);const{error:n,formMessageId:i}=p(),c=n?String(null==n?void 0:n.message):a;return c?s.createElement("p",Object.assign({ref:t,id:i,className:(0,u.cn)("text-sm font-medium text-red-500 dark:text-red-900",r)},o),c):null}));t.FormMessage=O,O.displayName="FormMessage"},520:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;const s=n(r(504)),i=r(948),c=s.forwardRef(((e,t)=>{var{className:r,type:a}=e,o=l(e,["className","type"]);return s.createElement("input",Object.assign({type:a,className:(0,i.cn)("flex h-10 w-full rounded-md border border-l-bg-a bg-l-bg px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-l-text-a focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-l-s-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-d-bg-a dark:bg-d-bg dark:ring-offset-slate-950 dark:placeholder:text-d-text-a dark:focus-visible:ring-slate-300",r),ref:t},o))}));t.Input=c,c.displayName="Input"},168:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),n=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;const s=n(r(504)),i=n(r(832)),c=r(420),u=r(948),d=(0,c.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=s.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);return s.createElement(i.Root,Object.assign({ref:t,className:(0,u.cn)(d(),r)},a))}));t.Label=f,f.displayName=i.Root.displayName},904:function(e,t,r){var a=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(e);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(e,a[o])&&(r[a[o]]=e[a[o]])}return r},o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Toaster=void 0;const n=o(r(504)),l=r(836),s=r(96);t.Toaster=e=>{var t=a(e,[]);const{theme:r="system"}=(0,l.useTheme)();return n.default.createElement(s.Toaster,Object.assign({theme:r,className:"toaster group",toastOptions:{classNames:{toast:"group toast group-[.toaster]:bg-white group-[.toaster]:text-slate-950 group-[.toaster]:border-slate-200 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-slate-950 dark:group-[.toaster]:text-slate-50 dark:group-[.toaster]:border-slate-800",description:"group-[.toast]:text-slate-500 dark:group-[.toast]:text-slate-400",actionButton:"group-[.toast]:bg-slate-900 group-[.toast]:text-slate-50 dark:group-[.toast]:bg-slate-50 dark:group-[.toast]:text-slate-900",cancelButton:"group-[.toast]:bg-slate-100 group-[.toast]:text-slate-500 dark:group-[.toast]:bg-slate-800 dark:group-[.toast]:text-slate-400"}}},t))}},412:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=a(r(504));t.default=e=>{var t;return console.log("[react]: home page props:",e),o.default.createElement("div",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},o.default.createElement("h1",null,"Welcome Home ",null===(t=e.user)||void 0===t?void 0:t.firstName))}},948:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cn=void 0;const a=r(932),o=r(864);t.cn=function(...e){return(0,o.twMerge)((0,a.clsx)(e))}}},r={};function a(e){var o=r[e];if(void 0!==o)return o.exports;var n=r[e]={exports:{}};return t[e].call(n.exports,n,n.exports,a),n.exports}a.m=t,e=[],a.O=(t,r,o,n)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,o,n]=e[u],s=!0,i=0;i<r.length;i++)(!1&n||l>=n)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(s=!1,n<l&&(l=n));if(s){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[r,o,n]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={590:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var o,n,[l,s,i]=r,c=0;if(l.some((t=>0!==e[t]))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(i)var u=i(a)}for(t&&t(r);c<l.length;c++)n=l[c],a.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return a.O(u)},r=self.webpackChunkthesis_2=self.webpackChunkthesis_2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var o=a.O(void 0,[72],(()=>a(428)));o=a.O(o)})();