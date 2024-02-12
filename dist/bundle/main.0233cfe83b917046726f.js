(()=>{"use strict";var e,t={428:(e,t,r)=>{var a=r(504),n=r(104),o=(r(692),r(312)),l=r.n(o),i=r(412),s=r.n(i),c={LoginPage:l(),HomePage:s()},u=window.__INITIAL_PROPS__;console.log("[index.js]",u);var d=c[u.componentName];n.hydrate(a.createElement(d,u),document.getElementById("root"))},692:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const l=o(r(504));t.default=e=>l.createElement("main",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},e.children)},376:function(e,t,r){var a=this&&this.__awaiter||function(e,t,r,a){return new(r||(r=Promise))((function(n,o){function l(e){try{s(a.next(e))}catch(e){o(e)}}function i(e){try{s(a.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(l,i)}s((a=a.apply(e,t||[])).next())}))},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const o=n(r(504)),l=r(216),i=r(392),s=r(708),c=r(668),u=r(520),d=r(756),f=n(r(696)),m=r(96),b=(0,l.object)({email:(0,l.string)().email({message:"Invald email address"}),password:(0,l.string)().min(4,{message:"Password must be a minimum of 8 characters."})});t.default=()=>{const e=(0,s.useForm)({resolver:(0,i.zodResolver)(b),defaultValues:{email:"",password:""}});return o.default.createElement(c.Form,Object.assign({},e),o.default.createElement("form",{onSubmit:e.handleSubmit((e=>a(void 0,void 0,void 0,(function*(){try{const t=yield f.default.post("/v1/auth/login",e);console.log(t)}catch(e){console.error(e),m.toast.error("Invalid usern")}})))),className:"space-y-8"},o.default.createElement(c.FormField,{control:e.control,name:"email",render:({field:e})=>o.default.createElement(c.FormItem,null,o.default.createElement(c.FormLabel,null,"Email"),o.default.createElement(c.FormControl,null,o.default.createElement(u.Input,Object.assign({placeholder:"email"},e))),o.default.createElement(c.FormDescription,null,"The email associated with your account."),o.default.createElement(c.FormMessage,null))}),o.default.createElement(c.FormField,{control:e.control,name:"password",render:({field:e})=>o.default.createElement(c.FormItem,null,o.default.createElement(c.FormLabel,null,"Password"),o.default.createElement(c.FormControl,null,o.default.createElement(u.Input,Object.assign({type:"password",placeholder:"password"},e))),o.default.createElement(c.FormDescription,null,"Must be a minimum of 8 characters"),o.default.createElement(c.FormMessage,null))}),o.default.createElement(d.Button,{type:"submit"},"Submit")))}},312:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(504)),o=a(r(376)),l=r(96);t.default=e=>(console.log("[react]: page props:",e),n.default.createElement("div",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},n.default.createElement("div",{className:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"},n.default.createElement("div",{className:"mx-auto max-w-lg"},n.default.createElement("h1",{className:"text-center text-2xl font-thin text-l-p-500 dark:text-d-p-500 sm:text-3xl "},"Welcome back"),n.default.createElement("p",{className:"mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-gray-300"},"As the initial administrator, you'll need to set up your account to enable you to customize, manage, and optimize the platform to perfectly fit your organization."),n.default.createElement(o.default,null))),n.default.createElement(l.Toaster,null)))},756:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.buttonVariants=t.Button=void 0;const i=o(r(504)),s=r(132),c=r(420),u=r(948),d=(0,c.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});t.buttonVariants=d;const f=i.forwardRef(((e,t)=>{var{className:r,variant:a,size:n,asChild:o=!1}=e,c=l(e,["className","variant","size","asChild"]);const f=o?s.Slot:"button";return i.createElement(f,Object.assign({className:(0,u.cn)(d({variant:a,size:n,className:r})),ref:t},c))}));t.Button=f,f.displayName="Button"},668:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.FormField=t.FormMessage=t.FormDescription=t.FormControl=t.FormLabel=t.FormItem=t.Form=t.useFormField=void 0;const i=o(r(504)),s=r(132),c=r(708),u=r(948),d=r(168),f=c.FormProvider;t.Form=f;const m=i.createContext({});t.FormField=e=>{var t=l(e,[]);return i.createElement(m.Provider,{value:{name:t.name}},i.createElement(c.Controller,Object.assign({},t)))};const b=()=>{const e=i.useContext(m),t=i.useContext(p),{getFieldState:r,formState:a}=(0,c.useFormContext)(),n=r(e.name,a);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:o}=t;return Object.assign({id:o,name:e.name,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`},n)};t.useFormField=b;const p=i.createContext({}),v=i.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);const n=i.useId();return i.createElement(p.Provider,{value:{id:n}},i.createElement("div",Object.assign({ref:t,className:(0,u.cn)("space-y-2",r)},a)))}));t.FormItem=v,v.displayName="FormItem";const g=i.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);const{error:n,formItemId:o}=b();return i.createElement(d.Label,Object.assign({ref:t,className:(0,u.cn)(n?"text-red-500 dark:text-red-900":"text-l-text-a dark:text-d-text-a",r),htmlFor:o},a))}));t.FormLabel=g,g.displayName="FormLabel";const h=i.forwardRef(((e,t)=>{var r=l(e,[]);const{error:a,formItemId:n,formDescriptionId:o,formMessageId:c}=b();return i.createElement(s.Slot,Object.assign({ref:t,id:n,"aria-describedby":a?`${o} ${c}`:`${o}`,"aria-invalid":!!a},r))}));t.FormControl=h,h.displayName="FormControl";const y=i.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);const{formDescriptionId:n}=b();return i.createElement("p",Object.assign({ref:t,id:n,className:(0,u.cn)("text-sm text-slate-500 dark:text-slate-400",r)},a))}));t.FormDescription=y,y.displayName="FormDescription";const O=i.forwardRef(((e,t)=>{var{className:r,children:a}=e,n=l(e,["className","children"]);const{error:o,formMessageId:s}=b(),c=o?String(null==o?void 0:o.message):a;return c?i.createElement("p",Object.assign({ref:t,id:s,className:(0,u.cn)("text-sm font-medium text-red-500 dark:text-red-900",r)},n),c):null}));t.FormMessage=O,O.displayName="FormMessage"},520:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;const i=o(r(504)),s=r(948),c=i.forwardRef(((e,t)=>{var{className:r,type:a}=e,n=l(e,["className","type"]);return i.createElement("input",Object.assign({type:a,className:(0,s.cn)("flex h-10 w-full rounded-md border border-l-bg-a bg-l-bg px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-l-text-a focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-l-s-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-d-bg-a dark:bg-d-bg dark:ring-offset-slate-950 dark:placeholder:text-d-text-a dark:focus-visible:ring-slate-300",r),ref:t},n))}));t.Input=c,c.displayName="Input"},168:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;const i=o(r(504)),s=o(r(832)),c=r(420),u=r(948),d=(0,c.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=i.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);return i.createElement(s.Root,Object.assign({ref:t,className:(0,u.cn)(d(),r)},a))}));t.Label=f,f.displayName=s.Root.displayName},412:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(504));t.default=e=>{var t;return console.log("[react]: home page props:",e),n.default.createElement("div",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},n.default.createElement("h1",null,"Welcome Home ",null===(t=e.user)||void 0===t?void 0:t.firstName))}},948:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cn=void 0;const a=r(932),n=r(864);t.cn=function(...e){return(0,n.twMerge)((0,a.clsx)(e))}}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,n,o)=>{if(!r){var l=1/0;for(u=0;u<e.length;u++){for(var[r,n,o]=e[u],i=!0,s=0;s<r.length;s++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](r[s])))?r.splice(s--,1):(i=!1,o<l&&(l=o));if(i){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var u=e.length;u>0&&e[u-1][2]>o;u--)e[u]=e[u-1];e[u]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={590:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[l,i,s]=r,c=0;if(l.some((t=>0!==e[t]))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(s)var u=s(a)}for(t&&t(r);c<l.length;c++)o=l[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(u)},r=self.webpackChunkthesis_2=self.webpackChunkthesis_2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,[72],(()=>a(428)));n=a.O(n)})();