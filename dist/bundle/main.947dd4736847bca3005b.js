(()=>{"use strict";var e,t={428:(e,t,r)=>{var a=r(504),n=r(104),o=(r(692),r(312)),l=r.n(o),s=r(412),i=r.n(s),c={LoginPage:l(),HomePage:i()},d=window.__INITIAL_PROPS__;console.log("[index.js]",d);var u=c[d.componentName];n.hydrate(a.createElement(u,d),document.getElementById("root"))},692:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});const l=o(r(504));t.default=e=>l.createElement("main",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},e.children)},376:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(504)),o=r(216),l=r(392),s=r(708),i=r(668),c=r(520),d=r(756),u=(0,o.object)({email:(0,o.string)().email({message:"Invald email address"}),password:(0,o.string)().min(4,{message:"Password must be a minimum of 8 characters."})});t.default=()=>{const e=(0,s.useForm)({resolver:(0,l.zodResolver)(u),defaultValues:{email:"",password:""}});return n.default.createElement(i.Form,Object.assign({},e),n.default.createElement("form",{action:"/v1/auth",className:"space-y-8"},n.default.createElement(i.FormField,{control:e.control,name:"email",render:({field:e})=>n.default.createElement(i.FormItem,null,n.default.createElement(i.FormLabel,null,"Email"),n.default.createElement(i.FormControl,null,n.default.createElement(c.Input,Object.assign({placeholder:"email"},e))),n.default.createElement(i.FormDescription,null,"The email associated with your account."),n.default.createElement(i.FormMessage,null))}),n.default.createElement(i.FormField,{control:e.control,name:"password",render:({field:e})=>n.default.createElement(i.FormItem,null,n.default.createElement(i.FormLabel,null,"Password"),n.default.createElement(i.FormControl,null,n.default.createElement(c.Input,Object.assign({type:"password",placeholder:"password"},e))),n.default.createElement(i.FormDescription,null,"Must be a minimum of 8 characters"),n.default.createElement(i.FormMessage,null))}),n.default.createElement(d.Button,{type:"submit"},"Submit")))}},312:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(504)),o=a(r(376));t.default=e=>(console.log("[react]: page props:",e),n.default.createElement("div",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},n.default.createElement("div",{className:"mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"},n.default.createElement("div",{className:"mx-auto max-w-lg"},n.default.createElement("h1",{className:"text-center text-2xl font-thin text-l-p-500 dark:text-d-p-500 sm:text-3xl "},"Welcome back"),n.default.createElement("p",{className:"mx-auto mt-4 max-w-md text-center text-gray-500 dark:text-gray-300"},"As the initial administrator, you'll need to set up your account to enable you to customize, manage, and optimize the platform to perfectly fit your organization."),n.default.createElement(o.default,null)))))},756:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.buttonVariants=t.Button=void 0;const s=o(r(504)),i=r(132),c=r(420),d=r(948),u=(0,c.cva)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-slate-950 dark:focus-visible:ring-slate-300",{variants:{variant:{default:"bg-slate-900 text-slate-50 hover:bg-slate-900/90 dark:bg-slate-50 dark:text-slate-900 dark:hover:bg-slate-50/90",destructive:"bg-red-500 text-slate-50 hover:bg-red-500/90 dark:bg-red-900 dark:text-slate-50 dark:hover:bg-red-900/90",outline:"border border-slate-200 bg-white hover:bg-slate-100 hover:text-slate-900 dark:border-slate-800 dark:bg-slate-950 dark:hover:bg-slate-800 dark:hover:text-slate-50",secondary:"bg-slate-100 text-slate-900 hover:bg-slate-100/80 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-800/80",ghost:"hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-50",link:"text-slate-900 underline-offset-4 hover:underline dark:text-slate-50"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}});t.buttonVariants=u;const f=s.forwardRef(((e,t)=>{var{className:r,variant:a,size:n,asChild:o=!1}=e,c=l(e,["className","variant","size","asChild"]);const f=o?i.Slot:"button";return s.createElement(f,Object.assign({className:(0,d.cn)(u({variant:a,size:n,className:r})),ref:t},c))}));t.Button=f,f.displayName="Button"},668:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.FormField=t.FormMessage=t.FormDescription=t.FormControl=t.FormLabel=t.FormItem=t.Form=t.useFormField=void 0;const s=o(r(504)),i=r(132),c=r(708),d=r(948),u=r(168),f=c.FormProvider;t.Form=f;const m=s.createContext({});t.FormField=e=>{var t=l(e,[]);return s.createElement(m.Provider,{value:{name:t.name}},s.createElement(c.Controller,Object.assign({},t)))};const b=()=>{const e=s.useContext(m),t=s.useContext(p),{getFieldState:r,formState:a}=(0,c.useFormContext)(),n=r(e.name,a);if(!e)throw new Error("useFormField should be used within <FormField>");const{id:o}=t;return Object.assign({id:o,name:e.name,formItemId:`${o}-form-item`,formDescriptionId:`${o}-form-item-description`,formMessageId:`${o}-form-item-message`},n)};t.useFormField=b;const p=s.createContext({}),v=s.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);const n=s.useId();return s.createElement(p.Provider,{value:{id:n}},s.createElement("div",Object.assign({ref:t,className:(0,d.cn)("space-y-2",r)},a)))}));t.FormItem=v,v.displayName="FormItem";const g=s.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);const{error:n,formItemId:o}=b();return s.createElement(u.Label,Object.assign({ref:t,className:(0,d.cn)(n?"text-red-500 dark:text-red-900":"text-l-text-a dark:text-d-text-a",r),htmlFor:o},a))}));t.FormLabel=g,g.displayName="FormLabel";const h=s.forwardRef(((e,t)=>{var r=l(e,[]);const{error:a,formItemId:n,formDescriptionId:o,formMessageId:c}=b();return s.createElement(i.Slot,Object.assign({ref:t,id:n,"aria-describedby":a?`${o} ${c}`:`${o}`,"aria-invalid":!!a},r))}));t.FormControl=h,h.displayName="FormControl";const y=s.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);const{formDescriptionId:n}=b();return s.createElement("p",Object.assign({ref:t,id:n,className:(0,d.cn)("text-sm text-slate-500 dark:text-slate-400",r)},a))}));t.FormDescription=y,y.displayName="FormDescription";const O=s.forwardRef(((e,t)=>{var{className:r,children:a}=e,n=l(e,["className","children"]);const{error:o,formMessageId:i}=b(),c=o?String(null==o?void 0:o.message):a;return c?s.createElement("p",Object.assign({ref:t,id:i,className:(0,d.cn)("text-sm font-medium text-red-500 dark:text-red-900",r)},n),c):null}));t.FormMessage=O,O.displayName="FormMessage"},520:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.Input=void 0;const s=o(r(504)),i=r(948),c=s.forwardRef(((e,t)=>{var{className:r,type:a}=e,n=l(e,["className","type"]);return s.createElement("input",Object.assign({type:a,className:(0,i.cn)("flex h-10 w-full rounded-md border border-l-bg-a bg-l-bg px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-l-text-a focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-l-s-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-d-bg-a dark:bg-d-bg dark:ring-offset-slate-950 dark:placeholder:text-d-text-a dark:focus-visible:ring-slate-300",r),ref:t},n))}));t.Input=c,c.displayName="Input"},168:function(e,t,r){var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var n=Object.getOwnPropertyDescriptor(t,r);n&&!("get"in n?!t.__esModule:n.writable||n.configurable)||(n={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,n)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return n(t,e),t},l=this&&this.__rest||function(e,t){var r={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(a=Object.getOwnPropertySymbols(e);n<a.length;n++)t.indexOf(a[n])<0&&Object.prototype.propertyIsEnumerable.call(e,a[n])&&(r[a[n]]=e[a[n]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.Label=void 0;const s=o(r(504)),i=o(r(832)),c=r(420),d=r(948),u=(0,c.cva)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),f=s.forwardRef(((e,t)=>{var{className:r}=e,a=l(e,["className"]);return s.createElement(i.Root,Object.assign({ref:t,className:(0,d.cn)(u(),r)},a))}));t.Label=f,f.displayName=i.Root.displayName},412:function(e,t,r){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const n=a(r(504));t.default=e=>{var t;return console.log("[react]: home page props:",e),n.default.createElement("div",{className:"min-h-screen bg-l-bg dark:bg-d-bg"},n.default.createElement("h1",null,"Welcome Home ",null===(t=e.user)||void 0===t?void 0:t.firstName))}},948:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.cn=void 0;const a=r(932),n=r(864);t.cn=function(...e){return(0,n.twMerge)((0,a.clsx)(e))}}},r={};function a(e){var n=r[e];if(void 0!==n)return n.exports;var o=r[e]={exports:{}};return t[e].call(o.exports,o,o.exports,a),o.exports}a.m=t,e=[],a.O=(t,r,n,o)=>{if(!r){var l=1/0;for(d=0;d<e.length;d++){for(var[r,n,o]=e[d],s=!0,i=0;i<r.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((e=>a.O[e](r[i])))?r.splice(i--,1):(s=!1,o<l&&(l=o));if(s){e.splice(d--,1);var c=n();void 0!==c&&(t=c)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[r,n,o]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={590:0};a.O.j=t=>0===e[t];var t=(t,r)=>{var n,o,[l,s,i]=r,c=0;if(l.some((t=>0!==e[t]))){for(n in s)a.o(s,n)&&(a.m[n]=s[n]);if(i)var d=i(a)}for(t&&t(r);c<l.length;c++)o=l[c],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},r=self.webpackChunkthesis_2=self.webpackChunkthesis_2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var n=a.O(void 0,[72],(()=>a(428)));n=a.O(n)})();