import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as m,R as ze}from"./iframe-CWUf6DFn.js";import{c as re}from"./clsx-B-dksMZM.js";import{B as Q}from"./Button-CZqdpEQL.js";import{F as oe,M as k,L as se}from"./FormField-DBhoCcms.js";import{E as Le}from"./ErrorMessage-B1DJFAfK.js";import{B as Z}from"./Badge-CuACdh1B.js";import{D as U}from"./Divider-CIAps_SP.js";import{U as $e}from"./UserPreview-BEfR9BlV.js";import{T as Je}from"./TextArea-COfwUIfU.js";import{S as z}from"./Switch-DwQA3GGE.js";import{S as We}from"./Select-DInxojj0.js";import{R as Ae}from"./RadioGroup-qpYrfeHr.js";import{C as _e}from"./CheckboxGroup-CMPk32Ek.js";import{U as x}from"./user-SRfI9gcn.js";import{c as ne}from"./createLucideIcon-BehFmr7A.js";import"./size-C5vASx-s.js";import"./Label-BnpzQARg.js";import"./Input-DCB6qc9h.js";import"./Tooltip-DV-eh5YY.js";import"./useStableId-BwVK-eSq.js";import"./Avatar-D8i3WquS.js";import"./Username-CZku2Woe.js";import"./StatusIndicator-BG6Pmp7P.js";import"./Radio-BlyZZgqQ.js";import"./Checkbox-70Si0KJE.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],ie=ne("bell",Ye);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],me=ne("map-pin",Ge);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],le=ne("phone",He),Be=m.createContext(null),Ke=()=>{const a=m.useContext(Be);if(!a)throw new Error("useFormContext must be used within a Form component");return a},Ze=(a,r)=>{const{errors:i,registerField:t,setFieldValue:s,setFieldError:l,clearFieldError:d,getFieldValue:h,validateField:y,validateOnChange:v,validateOnBlur:w,disabled:T}=Ke();ze.useEffect(()=>{const b={name:a,...r};return t(b)},[a,t,r]);const p=h(a),S=i[a],E=!!S,g=m.useCallback(async b=>{s(a,b),v&&await y(a,b)},[a,s,y,v]),D=m.useCallback(async()=>{w&&await y(a,p)},[a,p,y,w]),j=m.useCallback(b=>{l(a,b)},[a,l]),C=m.useCallback(()=>{d(a)},[a,d]);return{value:p,error:S,hasError:E,disabled:T,setValue:g,setError:j,clearError:C,onBlur:D,fieldProps:{name:a,value:typeof p=="string"?p:"",onChange:b=>g(b.target.value),onBlur:D,disabled:T,"aria-invalid":E}}},Ue=({children:a,value:r})=>e.jsx(Be.Provider,{value:r,children:a});Ue.__docgenInfo={description:"",methods:[],displayName:"FormProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!0,tsType:{name:"FormContextValue"},description:""}}};const te=(a,r)=>r.split(".").reduce((i,t)=>i&&typeof i=="object"&&i!==null&&t in i?i[t]:void 0,a),ce=(a,r,i)=>{const t=r.split("."),s={...a};let l=s;for(let d=0;d<t.length-1;d++){const h=t[d];(!(h in l)||typeof l[h]!="object"||l[h]===null)&&(l[h]={}),l=l[h]}return l[t[t.length-1]]=i,s};function Qe(a){const{onSubmit:r,onValidate:i,onFieldChange:t,onFieldBlur:s,onReset:l,initialValues:d={},isSubmitting:h,disabled:y=!1,resetOnSubmit:v=!1,validateOnBlur:w=!1,validateOnSubmit:T=!0}=a,[p,S]=m.useState(d),[E,g]=m.useState({}),[D,j]=m.useState(!1),C=m.useRef(new Map),b=h||D,A=m.useCallback(o=>(C.current.set(o.name,o),o.defaultValue!==void 0&&te(p,o.name)===void 0&&S(c=>ce(c,o.name,o.defaultValue)),()=>{C.current.delete(o.name)}),[p]),M=m.useCallback((o,c)=>{S(u=>{const f=ce(u,o,c);return t==null||t(o,c,f),f})},[t]),O=m.useCallback(o=>te(p,o),[p]),I=m.useCallback((o,c)=>{g(u=>({...u,[o]:c}))},[]),q=m.useCallback(o=>{g(c=>{const u={...c};return delete u[o],u})},[]),R=m.useCallback(o=>{g(o)},[]),F=m.useCallback(async(o,c)=>{const u=C.current.get(o);if(!u)return;let f;if(u.required&&(c==null||c==="")&&(f="This field is required"),!f&&u.validate&&c!==void 0&&c!==null&&c!=="")try{f=await u.validate(c)}catch{f="Validation failed"}return f?I(o,f):q(o),f},[I,q]),V=m.useCallback(async()=>{const o={},c=Array.from(C.current.entries()).map(async([u])=>{const f=te(p,u),B=await F(u,f);B&&(o[u]=B)});if(await Promise.all(c),i)try{const u=await i(p);Object.assign(o,u)}catch{o.form="Form validation failed"}return o},[p,i,F]),P=m.useCallback(()=>{S(d),g({}),j(!1),l==null||l(d)},[d,l]),X=m.useCallback(async()=>{if(!(y||b)){j(!0);try{if(T){const c=await V();if(Object.keys(c).length>0){g(c);return}}g({}),await r(p,{reset:P,setErrors:R,setFieldValue:M,getFieldValue:O,setFieldError:I,clearFieldError:q,isSubmitting:!0}),v&&P()}catch(o){o instanceof Error?g({form:o.message}):g({form:"An unexpected error occurred"})}finally{j(!1)}}},[y,b,T,V,r,p,v,P,M,O,I,q,R]),ee=m.useCallback((o,c)=>{s==null||s(o,c),w&&F(o,c)},[s,w,F]),ae=m.useCallback(()=>{g({}),j(!1),P()},[P]);return{values:p,errors:E,isSubmitting:b,registerField:A,setFieldValue:M,getFieldValue:O,setFieldError:I,clearFieldError:q,setErrors:R,submit:X,reset:P,validateField:F,validateForm:V,handleFieldBlur:ee,clearErrors:ae}}const Xe={vertical:"flex flex-col",horizontal:"flex flex-row flex-wrap items-end",grid:"grid"},ea={sm:{vertical:"gap-3",horizontal:"gap-2",grid:"gap-3"},md:{vertical:"gap-4",horizontal:"gap-3",grid:"gap-4"},lg:{vertical:"gap-6",horizontal:"gap-4",grid:"gap-6"}},N=m.forwardRef(({children:a,layout:r="vertical",spacing:i="md",gridColumns:t=2,className:s,submitButton:l,submitText:d="Submit",loadingText:h="Submitting...",showSubmitButton:y=!0,disabled:v=!1,onSubmit:w,onValidate:T,validateOnChange:p,validateOnBlur:S,validateOnSubmit:E,isSubmitting:g,resetOnSubmit:D,initialValues:j,onFieldChange:C,onFieldBlur:b,onReset:A,...M},O)=>{const q=Qe({onSubmit:w,onValidate:T,validateOnBlur:S,validateOnSubmit:E,resetOnSubmit:D,initialValues:j,onFieldChange:C,onFieldBlur:b,onReset:A,isSubmitting:g,disabled:v}),{submit:R,isSubmitting:F,errors:V}=q,P={...q,validateOnChange:p??!1,validateOnBlur:S??!0,disabled:v||F},X=async B=>{B.preventDefault(),await R()},ee=Xe[r],ae=ea[i][r],o=r==="grid"?{gridTemplateColumns:`repeat(${t}, 1fr)`}:void 0,c=re("w-full",ee,ae,v&&"opacity-60 pointer-events-none",s),u=y&&e.jsx(Q,{type:"submit",label:F?h:d,disabled:F||v,variant:"primary",className:r==="horizontal"?"ml-auto":void 0}),f=V.form&&e.jsx("div",{className:"text-sm text-red-600 bg-red-50 border border-red-200 rounded-md p-3",role:"alert","aria-live":"polite",children:V.form});return e.jsx(Ue,{value:P,children:e.jsxs("form",{ref:O,onSubmit:X,className:c,style:o,noValidate:!0,...M,children:[a,f,l||u]})})});N.displayName="Form";N.__docgenInfo={description:`Form molecule component.
Provides a powerful orchestration layer for form state management, validation, and submission.
Automatically detects and manages form fields while maintaining proper accessibility.
Supports flexible layouts, comprehensive validation, and async operations.`,methods:[],displayName:"Form",props:{onSubmit:{required:!0,tsType:{name:"signature",type:"function",raw:`(
  data: FormData,
  helpers: FormHelpers,
) => void | Promise<void>`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"data"},{type:{name:"FormHelpers"},name:"helpers"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:""},onValidate:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  data: FormData,
) => FormErrors | Promise<FormErrors>`,signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"data"}],return:{name:"union",raw:"FormErrors | Promise<FormErrors>",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"},{name:"Promise",elements:[{name:"Record",elements:[{name:"string"},{name:"string"}],raw:"Record<string, string>"}],raw:"Promise<FormErrors>"}]}}},description:""},validateOnChange:{required:!1,tsType:{name:"boolean"},description:""},validateOnBlur:{required:!1,tsType:{name:"boolean"},description:""},validateOnSubmit:{required:!1,tsType:{name:"boolean"},description:""},initialValues:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:""},isSubmitting:{required:!1,tsType:{name:"boolean"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},resetOnSubmit:{required:!1,tsType:{name:"boolean"},description:""},onFieldChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  name: string,
  value: unknown,
  allValues: FormData,
) => void`,signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"unknown"},name:"value"},{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"allValues"}],return:{name:"void"}}},description:""},onFieldBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(name: string, value: unknown) => void",signature:{arguments:[{type:{name:"string"},name:"name"},{type:{name:"unknown"},name:"value"}],return:{name:"void"}}},description:""},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"(initialValues: FormData) => void",signature:{arguments:[{type:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},name:"initialValues"}],return:{name:"void"}}},description:""},layout:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal' | 'grid'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"},{name:"literal",value:"'grid'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},spacing:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},gridColumns:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"2",computed:!1}},submitButton:{required:!1,tsType:{name:"ReactElement"},description:""},submitText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Submit'",computed:!1}},loadingText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Submitting...'",computed:!1}},showSubmitButton:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:""}},composes:["Omit"]};const n=m.forwardRef(({name:a,required:r=!1,validate:i,className:t,wrapperClassName:s,...l},d)=>{const{value:h,error:y,hasError:v,fieldProps:w}=Ze(a,{required:r,validate:i});return e.jsxs("div",{className:re("space-y-1",s),children:[e.jsx(oe,{ref:d,...l,...w,value:String(h||""),className:re(v&&"border-red-300 focus:ring-red-500 focus:border-red-300",t),required:r}),v&&y&&e.jsx(Le,{id:`${a}-error`,children:y})]})});n.displayName="FormInput";n.__docgenInfo={description:`FormInput component.
Auto-registering form field that integrates with Form context.
Combines FormField (Label + Input + Tooltip) with automatic error display and validation.`,methods:[],displayName:"FormInput",props:{name:{required:!0,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},validate:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: unknown) => string | undefined",signature:{arguments:[{type:{name:"unknown"},name:"value"}],return:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]}}},description:""}},composes:["Omit"]};const qa={title:"Molecules/Form",component:N,parameters:{layout:"centered",actions:{handles:["onSubmit","onValidate","onFieldChange","onFieldBlur"]}},tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal","grid"]},spacing:{control:"select",options:["sm","md","lg"]},gridColumns:{control:{type:"number",min:1,max:4}},onSubmit:{action:"form-submitted"},onValidate:{action:"form-validated"},onFieldChange:{action:"field-changed"},onFieldBlur:{action:"field-blurred"},validateOnChange:{control:"boolean",description:"Validate fields as the user types"},validateOnBlur:{control:"boolean",description:"Validate fields when they lose focus"},validateOnSubmit:{control:"boolean",description:"Validate the entire form before submission"},resetOnSubmit:{control:"boolean",description:"Reset the form after successful submission"},disabled:{control:"boolean",description:"Disable the entire form"},className:{control:"text",description:"Additional CSS classes for the form"}}},L={args:{onSubmit:()=>{}},render:()=>{const a=async r=>{alert(`Form submitted! Check console for detailed logs.

Data: ${JSON.stringify(r,null,2)}`)};return e.jsx("div",{className:"w-96",children:e.jsxs(N,{onSubmit:a,children:[e.jsx(n,{name:"email",label:"Email Address",type:"email",icon:k,placeholder:"Enter your email",tooltip:"We'll never share your email with anyone",required:!0}),e.jsx(n,{name:"password",label:"Password",type:"password",icon:se,placeholder:"Enter your password",tooltip:"Must be at least 8 characters",required:!0,validate:r=>{if(r&&r.length<8)return"Password must be at least 8 characters"}})]})})}},$={args:{onSubmit:()=>{},onValidate:()=>{}},render:a=>{const r=async t=>{const s={};return a.onValidate(t),t.email==="taken@example.com"&&(s.email="This email is already taken"),t.password!==t.confirmPassword&&(s.confirmPassword="Passwords do not match"),s},i=async(t,s)=>{try{a.onSubmit(t,s),await new Promise(l=>setTimeout(l,2e3)),console.log("Registration successful:",t),alert("Registration successful!"),s.reset()}catch{s.setErrors({form:"Registration failed. Please try again."})}};return e.jsx("div",{className:"w-96",children:e.jsxs(N,{onSubmit:i,onValidate:r,validateOnBlur:!0,submitText:"Register",loadingText:"Creating account...",children:[e.jsx(n,{name:"firstName",label:"First Name",icon:x,placeholder:"John",required:!0}),e.jsx(n,{name:"lastName",label:"Last Name",icon:x,placeholder:"Doe",required:!0}),e.jsx(n,{name:"email",label:"Email Address",type:"email",icon:k,placeholder:"john@example.com",tooltip:"Try 'taken@example.com' to see validation error",required:!0}),e.jsx(n,{name:"password",label:"Password",type:"password",icon:se,placeholder:"••••••••",tooltip:"Must be at least 8 characters with numbers",required:!0,validate:t=>{if(t){if(t.length<8)return"Password must be at least 8 characters";if(!/\d/.test(t))return"Password must contain at least one number"}}}),e.jsx(n,{name:"confirmPassword",label:"Confirm Password",type:"password",icon:se,placeholder:"••••••••",tooltip:"Must match your password",required:!0})]})})}},J={render:()=>{const a=async r=>{console.log("Contact form submitted:",r),alert("Message sent successfully!")};return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsxs(N,{onSubmit:a,layout:"grid",gridColumns:2,spacing:"lg",submitText:"Send Message",children:[e.jsx(n,{name:"firstName",label:"First Name",icon:x,placeholder:"John",required:!0}),e.jsx(n,{name:"lastName",label:"Last Name",icon:x,placeholder:"Doe",required:!0}),e.jsx(n,{name:"email",label:"Email",type:"email",icon:k,placeholder:"john@example.com",tooltip:"We'll respond to this email",required:!0}),e.jsx(n,{name:"phone",label:"Phone",type:"tel",icon:le,placeholder:"+1 (555) 123-4567",tooltip:"Optional: For urgent matters"}),e.jsx("div",{className:"col-span-2",children:e.jsx(oe,{label:"Message",name:"message",tooltip:"Tell us how we can help you",placeholder:"Your message here...",required:!0})})]})})}},W={render:()=>{const a=async r=>{console.log("Search submitted:",r)};return e.jsx("div",{className:"w-full",children:e.jsxs(N,{onSubmit:a,layout:"horizontal",spacing:"sm",submitText:"Search",children:[e.jsx(n,{name:"query",label:"Search",placeholder:"Enter search terms...",tooltip:"Search across all products",className:"min-w-64"}),e.jsx(n,{name:"category",label:"Category",placeholder:"All categories",tooltip:"Filter by category",className:"min-w-40"})]})})}},_={render:()=>{const[a,r]=m.useState({username:"john_doe",email:"john@example.com"}),i=async s=>{r(s),console.log("Updated data:",s)},t=(s,l)=>{console.log(`Field ${s} changed to:`,l)};return e.jsxs("div",{className:"w-96 space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Current Form Data:"}),e.jsx("pre",{className:"text-sm text-gray-600",children:JSON.stringify(a,null,2)})]}),e.jsxs(N,{onSubmit:i,initialValues:a,onFieldChange:t,validateOnChange:!0,submitText:"Update Profile",children:[e.jsx(n,{name:"username",label:"Username",icon:x,placeholder:"Enter username",tooltip:"Must be unique and 3+ characters",required:!0,validate:s=>{if(s){if(s.length<3)return"Username must be at least 3 characters";if(!/^[a-zA-Z0-9_]+$/.test(s))return"Username can only contain letters, numbers, and underscores"}}}),e.jsx(n,{name:"email",label:"Email",type:"email",icon:k,placeholder:"Enter email",tooltip:"We'll send notifications here",required:!0}),e.jsx(n,{name:"bio",label:"Bio",placeholder:"Tell us about yourself...",tooltip:"Optional: Share a bit about yourself"})]})]})}},Y={render:()=>{const[a,r]=m.useState(!1),i=async t=>{r(!0),await new Promise(s=>setTimeout(s,2e3)),r(!1),console.log("Custom submit:",t),alert("Custom submission complete!")};return e.jsx("div",{className:"w-96",children:e.jsxs(N,{onSubmit:i,isSubmitting:a,showSubmitButton:!1,children:[e.jsx(n,{name:"title",label:"Post Title",placeholder:"Enter title",required:!0}),e.jsx(n,{name:"content",label:"Content",placeholder:"Write your post...",required:!0}),e.jsxs("div",{className:"flex gap-2 pt-2",children:[e.jsx(Q,{type:"submit",label:a?"Publishing...":"Publish Post",disabled:a,variant:"primary"}),e.jsx(Q,{type:"button",label:"Save Draft",variant:"secondary",onClick:()=>console.log("Save draft")})]})]})})}},G={args:{onSubmit:()=>{}},render:()=>{const a=async s=>{alert(`Form submitted! Check console for detailed logs.

Data: ${JSON.stringify(s,null,2)}`)},r=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"}],i=[{value:"reading",label:"Reading"},{value:"gaming",label:"Gaming"},{value:"cooking",label:"Cooking"},{value:"sports",label:"Sports"},{value:"music",label:"Music"}],t=[{value:"personal",label:"Personal Account",description:"For individual use"},{value:"business",label:"Business Account",description:"For teams and organizations"},{value:"enterprise",label:"Enterprise Account",description:"For large organizations"}];return e.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"User Registration Form"}),e.jsx("p",{className:"text-gray-600",children:"This showcases Form molecule orchestrating atoms and molecules from our library"}),e.jsx(Z,{variant:"warning",className:"mt-2",children:"Molecule Component"})]}),e.jsxs(N,{onSubmit:a,layout:"grid",gridColumns:2,spacing:"lg",submitText:"Create Account",loadingText:"Creating account...",children:[e.jsx("div",{className:"col-span-2",children:e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(x,{className:"w-5 h-5"}),"Personal Information"]})}),e.jsx(n,{name:"firstName",label:"First Name",icon:x,placeholder:"John",tooltip:"Your given name",required:!0}),e.jsx(n,{name:"lastName",label:"Last Name",icon:x,placeholder:"Doe",tooltip:"Your family name",required:!0}),e.jsx(n,{name:"email",label:"Email Address",type:"email",icon:k,placeholder:"john@example.com",tooltip:"We'll use this for login and notifications",required:!0}),e.jsx(n,{name:"phone",label:"Phone Number",type:"tel",icon:le,placeholder:"+1 (555) 123-4567",tooltip:"For account verification and support"}),e.jsxs("div",{className:"col-span-2 mt-6",children:[e.jsx(U,{}),e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 my-4 flex items-center gap-2",children:[e.jsx(me,{className:"w-5 h-5"}),"Address Information"]})]}),e.jsx("div",{className:"col-span-2",children:e.jsx(n,{name:"address",label:"Street Address",icon:me,placeholder:"123 Main Street",tooltip:"Your full street address",required:!0})}),e.jsx(n,{name:"city",label:"City",placeholder:"New York",required:!0}),e.jsx(We,{name:"country",label:"Country",placeholder:"Select country",options:r,required:!0}),e.jsxs("div",{className:"col-span-2 mt-6",children:[e.jsx(U,{}),e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 my-4 flex items-center gap-2",children:[e.jsx(ie,{className:"w-5 h-5"}),"Account Preferences"]})]}),e.jsx("div",{className:"col-span-2",children:e.jsx(Ae,{name:"accountType",label:"Account Type",options:t,required:!0})}),e.jsx("div",{className:"col-span-2",children:e.jsx(_e,{name:"hobbies",label:"Interests & Hobbies",description:"Select all that apply (optional)",options:i})}),e.jsx("div",{className:"col-span-2",children:e.jsx(Je,{name:"bio",label:"Bio",placeholder:"Tell us a bit about yourself...",rows:3,tooltip:"Optional: Share your background or interests"})}),e.jsxs("div",{className:"col-span-2 mt-6",children:[e.jsx(U,{}),e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 my-4 flex items-center gap-2",children:[e.jsx(ie,{className:"w-5 h-5"}),"Notification Settings"]})]}),e.jsxs("div",{className:"col-span-2 space-y-4",children:[e.jsx(z,{name:"emailNotifications",label:"Email Notifications",description:"Receive updates and news via email",defaultChecked:!0}),e.jsx(z,{name:"smsNotifications",label:"SMS Notifications",description:"Receive important alerts via SMS"}),e.jsx(z,{name:"marketingEmails",label:"Marketing Communications",description:"Receive product updates and special offers"})]}),e.jsxs("div",{className:"col-span-2 mt-6",children:[e.jsx(U,{}),e.jsx("div",{className:"pt-4",children:e.jsx(z,{name:"agreeToTerms",label:"I agree to the Terms of Service and Privacy Policy",description:"Required to create an account",required:!0})})]})]})]})}},H={args:{onSubmit:()=>{}},render:()=>{var s;const[a,r]=m.useState({firstName:"John",lastName:"Doe",email:"john@example.com",status:"online"}),i=async l=>{r(d=>({...d,...l})),console.log("Profile updated:",l)},t=(l,d)=>{r(h=>({...h,[l]:d}))};return e.jsxs("div",{className:"max-w-2xl mx-auto p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Profile Editor"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Live Preview"}),e.jsx($e,{avatarSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",name:`${a.firstName} ${a.lastName}`.trim(),username:((s=a.email)==null?void 0:s.split("@")[0])||"username",status:a.status,size:"lg",layout:"vertical",className:"justify-center"}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Z,{variant:"info",size:"sm",children:"Name"}),e.jsx("span",{className:"text-sm",children:`${a.firstName} ${a.lastName}`.trim()||"Not set"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Z,{variant:"warning",size:"sm",children:"Email"}),e.jsx("span",{className:"text-sm",children:a.email||"Not set"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Z,{variant:"success",size:"sm",children:"Status"}),e.jsx("span",{className:"text-sm capitalize",children:a.status})]})]})]}),e.jsx("div",{children:e.jsxs(N,{onSubmit:i,onFieldChange:t,initialValues:a,validateOnChange:!0,submitText:"Update Profile",spacing:"md",children:[e.jsx(n,{name:"firstName",label:"First Name",icon:x,placeholder:"John",required:!0}),e.jsx(n,{name:"lastName",label:"Last Name",icon:x,placeholder:"Doe",required:!0}),e.jsx(n,{name:"email",label:"Email",type:"email",icon:k,placeholder:"john@example.com",required:!0}),e.jsx(Ae,{name:"status",label:"Status",options:[{value:"online",label:"Online"},{value:"offline",label:"Offline"},{value:"away",label:"Away"},{value:"busy",label:"Busy"}],required:!0})]})})]})]})}},K={args:{onSubmit:()=>{},onFieldChange:()=>{}},render:a=>{const r=async(t,s)=>{a.onSubmit(t,s),console.log("Contact form submitted:",t),alert(`Message sent from ${t.firstName} ${t.lastName}!`)},i=(t,s,l)=>{a.onFieldChange({fieldName:t,fieldValue:s,formValues:l})};return e.jsxs("div",{className:"max-w-2xl mx-auto p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Contact Us (with Actions Logging)"}),e.jsxs(N,{onSubmit:r,onFieldChange:i,layout:"grid",gridColumns:2,spacing:"lg",showSubmitButton:!1,children:[e.jsx(n,{name:"firstName",label:"First Name",icon:x,placeholder:"John",tooltip:"Your given name",required:!0}),e.jsx(n,{name:"lastName",label:"Last Name",icon:x,placeholder:"Doe",tooltip:"Your family name",required:!0}),e.jsx(n,{name:"email",label:"Email",icon:k,type:"email",placeholder:"john@example.com",tooltip:"We'll respond to this email",required:!0}),e.jsx(n,{name:"phone",label:"Phone",icon:le,type:"tel",placeholder:"+1 (555) 123-4567",tooltip:"Optional: For urgent matters"}),e.jsx("div",{className:"col-span-2",children:e.jsx(oe,{label:"Message",name:"message",tooltip:"Tell us how we can help you",placeholder:"Your message here...",required:!0})}),e.jsx("div",{className:"col-span-2 flex justify-end",children:e.jsx(Q,{type:"submit",label:"Send Message",variant:"primary",size:"md",className:"px-8"})})]})]})}};var de,ue,pe;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {}
  },
  render: () => {
    const handleSubmit = async (data: FormData) => {
      alert(\`Form submitted! Check console for detailed logs.\\n\\nData: \${JSON.stringify(data, null, 2)}\`);
    };
    return <div className="w-96">
        <Form onSubmit={handleSubmit}>
          <FormInput name="email" label="Email Address" type="email" icon={Mail} placeholder="Enter your email" tooltip="We'll never share your email with anyone" required />

          <FormInput name="password" label="Password" type="password" icon={Lock} placeholder="Enter your password" tooltip="Must be at least 8 characters" required validate={value => {
          if (value && value.length < 8) {
            return 'Password must be at least 8 characters';
          }
        }} />
        </Form>
      </div>;
  }
}`,...(pe=(ue=L.parameters)==null?void 0:ue.docs)==null?void 0:pe.source}}};var he,ge,be;$.parameters={...$.parameters,docs:{...(he=$.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {},
    onValidate: () => {}
  },
  render: args => {
    const validateForm = async (data: FormData): Promise<FormErrors> => {
      const errors: FormErrors = {};

      // Log validation to Actions panel
      args.onValidate(data);

      // Simulate async validation (e.g., checking email availability)
      if (data.email === 'taken@example.com') {
        errors.email = 'This email is already taken';
      }
      if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
      return errors;
    };
    const handleSubmit = async (data: FormData, helpers: FormHelpers) => {
      try {
        // Log to Actions panel
        args.onSubmit(data, helpers);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Registration successful:', data);
        alert('Registration successful!');
        helpers.reset();
      } catch {
        helpers.setErrors({
          form: 'Registration failed. Please try again.'
        });
      }
    };
    return <div className="w-96">
        <Form onSubmit={handleSubmit} onValidate={validateForm} validateOnBlur={true} submitText="Register" loadingText="Creating account...">
          <FormInput name="firstName" label="First Name" icon={User} placeholder="John" required />

          <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" required />

          <FormInput name="email" label="Email Address" type="email" icon={Mail} placeholder="john@example.com" tooltip="Try 'taken@example.com' to see validation error" required />

          <FormInput name="password" label="Password" type="password" icon={Lock} placeholder="••••••••" tooltip="Must be at least 8 characters with numbers" required validate={value => {
          if (!value) return;
          if (value.length < 8) return 'Password must be at least 8 characters';
          if (!/\\d/.test(value)) return 'Password must contain at least one number';
        }} />

          <FormInput name="confirmPassword" label="Confirm Password" type="password" icon={Lock} placeholder="••••••••" tooltip="Must match your password" required />
        </Form>
      </div>;
  }
}`,...(be=(ge=$.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var fe,ve,ye;J.parameters={...J.parameters,docs:{...(fe=J.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: FormData) => {
      console.log('Contact form submitted:', data);
      alert('Message sent successfully!');
    };
    return <div className="w-full max-w-2xl">
        <Form onSubmit={handleSubmit} layout="grid" gridColumns={2} spacing="lg" submitText="Send Message">
          <FormInput name="firstName" label="First Name" icon={User} placeholder="John" required />
          <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" required />
          <FormInput name="email" label="Email" type="email" icon={Mail} placeholder="john@example.com" tooltip="We'll respond to this email" required />
          <FormInput name="phone" label="Phone" type="tel" icon={Phone} placeholder="+1 (555) 123-4567" tooltip="Optional: For urgent matters" />
          <div className="col-span-2">
            <FormField label="Message" name="message" tooltip="Tell us how we can help you" placeholder="Your message here..." required />
          </div>
        </Form>
      </div>;
  }
}`,...(ye=(ve=J.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var xe,Ne,we;W.parameters={...W.parameters,docs:{...(xe=W.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: FormData) => {
      console.log('Search submitted:', data);
    };
    return <div className="w-full">
        <Form onSubmit={handleSubmit} layout="horizontal" spacing="sm" submitText="Search">
          <FormInput name="query" label="Search" placeholder="Enter search terms..." tooltip="Search across all products" className="min-w-64" />
          <FormInput name="category" label="Category" placeholder="All categories" tooltip="Filter by category" className="min-w-40" />
        </Form>
      </div>;
  }
}`,...(we=(Ne=W.parameters)==null?void 0:Ne.docs)==null?void 0:we.source}}};var Se,Fe,je;_.parameters={..._.parameters,docs:{...(Se=_.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      username: 'john_doe',
      email: 'john@example.com'
    });
    const handleSubmit = async (data: FormData) => {
      setFormData(data);
      console.log('Updated data:', data);
    };
    const handleFieldChange = (name: string, value: unknown) => {
      console.log(\`Field \${name} changed to:\`, value);
    };
    return <div className="w-96 space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Current Form Data:</h3>
          <pre className="text-sm text-gray-600">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>

        <Form onSubmit={handleSubmit} initialValues={formData} onFieldChange={handleFieldChange} validateOnChange={true} submitText="Update Profile">
          <FormInput name="username" label="Username" icon={User} placeholder="Enter username" tooltip="Must be unique and 3+ characters" required validate={value => {
          if (!value) return;
          if (value.length < 3) return 'Username must be at least 3 characters';
          if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Username can only contain letters, numbers, and underscores';
        }} />
          <FormInput name="email" label="Email" type="email" icon={Mail} placeholder="Enter email" tooltip="We'll send notifications here" required />
          <FormInput name="bio" label="Bio" placeholder="Tell us about yourself..." tooltip="Optional: Share a bit about yourself" />
        </Form>
      </div>;
  }
}`,...(je=(Fe=_.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var Ce,qe,Pe;Y.parameters={...Y.parameters,docs:{...(Ce=Y.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (data: FormData) => {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      console.log('Custom submit:', data);
      alert('Custom submission complete!');
    };
    return <div className="w-96">
        <Form onSubmit={handleSubmit} isSubmitting={isSubmitting} showSubmitButton={false}>
          <FormInput name="title" label="Post Title" placeholder="Enter title" required />
          <FormInput name="content" label="Content" placeholder="Write your post..." required />
          <div className="flex gap-2 pt-2">
            <Button type="submit" label={isSubmitting ? 'Publishing...' : 'Publish Post'} disabled={isSubmitting} variant="primary" />
            <Button type="button" label="Save Draft" variant="secondary" onClick={() => console.log('Save draft')} />
          </div>
        </Form>
      </div>;
  }
}`,...(Pe=(qe=Y.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};var Te,ke,Ee;G.parameters={...G.parameters,docs:{...(Te=G.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {}
  },
  render: () => {
    const handleSubmit = async (data: FormData) => {
      alert(\`Form submitted! Check console for detailed logs.\\n\\nData: \${JSON.stringify(data, null, 2)}\`);
    };
    const countryOptions = [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'ca',
      label: 'Canada'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'de',
      label: 'Germany'
    }, {
      value: 'fr',
      label: 'France'
    }];
    const hobbyOptions = [{
      value: 'reading',
      label: 'Reading'
    }, {
      value: 'gaming',
      label: 'Gaming'
    }, {
      value: 'cooking',
      label: 'Cooking'
    }, {
      value: 'sports',
      label: 'Sports'
    }, {
      value: 'music',
      label: 'Music'
    }];
    const accountTypeOptions = [{
      value: 'personal',
      label: 'Personal Account',
      description: 'For individual use'
    }, {
      value: 'business',
      label: 'Business Account',
      description: 'For teams and organizations'
    }, {
      value: 'enterprise',
      label: 'Enterprise Account',
      description: 'For large organizations'
    }];
    return <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">User Registration Form</h2>
          <p className="text-gray-600">
            This showcases Form molecule orchestrating atoms and molecules from
            our library
          </p>
          <Badge variant="warning" className="mt-2">
            Molecule Component
          </Badge>
        </div>

        <Form onSubmit={handleSubmit} layout="grid" gridColumns={2} spacing="lg" submitText="Create Account" loadingText="Creating account...">
          {/* Personal Information Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h3>
          </div>

          <FormInput name="firstName" label="First Name" icon={User} placeholder="John" tooltip="Your given name" required />
          <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" tooltip="Your family name" required />
          <FormInput name="email" label="Email Address" type="email" icon={Mail} placeholder="john@example.com" tooltip="We'll use this for login and notifications" required />
          <FormInput name="phone" label="Phone Number" type="tel" icon={Phone} placeholder="+1 (555) 123-4567" tooltip="For account verification and support" />

          {/* Address Section */}
          <div className="col-span-2 mt-6">
            <Divider />
            <h3 className="text-lg font-semibold text-gray-900 my-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Address Information
            </h3>
          </div>

          <div className="col-span-2">
            <FormInput name="address" label="Street Address" icon={MapPin} placeholder="123 Main Street" tooltip="Your full street address" required />
          </div>

          <FormInput name="city" label="City" placeholder="New York" required />

          <Select name="country" label="Country" placeholder="Select country" options={countryOptions} required />

          {/* Account Preferences */}
          <div className="col-span-2 mt-6">
            <Divider />
            <h3 className="text-lg font-semibold text-gray-900 my-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Account Preferences
            </h3>
          </div>

          <div className="col-span-2">
            <RadioGroup name="accountType" label="Account Type" options={accountTypeOptions} required />
          </div>

          <div className="col-span-2">
            <CheckboxGroup name="hobbies" label="Interests & Hobbies" description="Select all that apply (optional)" options={hobbyOptions} />
          </div>

          <div className="col-span-2">
            <TextArea name="bio" label="Bio" placeholder="Tell us a bit about yourself..." rows={3} tooltip="Optional: Share your background or interests" />
          </div>

          {/* Notification Settings */}
          <div className="col-span-2 mt-6">
            <Divider />
            <h3 className="text-lg font-semibold text-gray-900 my-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Settings
            </h3>
          </div>

          <div className="col-span-2 space-y-4">
            <Switch name="emailNotifications" label="Email Notifications" description="Receive updates and news via email" defaultChecked={true} />
            <Switch name="smsNotifications" label="SMS Notifications" description="Receive important alerts via SMS" />
            <Switch name="marketingEmails" label="Marketing Communications" description="Receive product updates and special offers" />
          </div>

          {/* Terms and Conditions */}
          <div className="col-span-2 mt-6">
            <Divider />
            <div className="pt-4">
              <Switch name="agreeToTerms" label="I agree to the Terms of Service and Privacy Policy" description="Required to create an account" required />
            </div>
          </div>
        </Form>
      </div>;
  }
}`,...(Ee=(ke=G.parameters)==null?void 0:ke.docs)==null?void 0:Ee.source}}};var De,Ie,Ve;H.parameters={...H.parameters,docs:{...(De=H.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {}
  },
  render: () => {
    const [previewData, setPreviewData] = useState({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      status: 'online' as const
    });
    const handleSubmit = async (data: FormData) => {
      setPreviewData(prev => ({
        ...prev,
        ...data
      }));
      console.log('Profile updated:', data);
    };
    const handleFieldChange = (name: string, value: unknown) => {
      setPreviewData(prev => ({
        ...prev,
        [name]: value
      }));
    };
    return <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Profile Editor</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Live Preview */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
            <UserPreview avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" name={\`\${previewData.firstName} \${previewData.lastName}\`.trim()} username={previewData.email?.split('@')[0] || 'username'} status={previewData.status} size="lg" layout="vertical" className="justify-center" />
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="info" size="sm">
                  Name
                </Badge>
                <span className="text-sm">
                  {\`\${previewData.firstName} \${previewData.lastName}\`.trim() || 'Not set'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="warning" size="sm">
                  Email
                </Badge>
                <span className="text-sm">
                  {previewData.email || 'Not set'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="success" size="sm">
                  Status
                </Badge>
                <span className="text-sm capitalize">{previewData.status}</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <Form onSubmit={handleSubmit} onFieldChange={handleFieldChange} initialValues={previewData} validateOnChange={true} submitText="Update Profile" spacing="md">
              <FormInput name="firstName" label="First Name" icon={User} placeholder="John" required />
              <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" required />
              <FormInput name="email" label="Email" type="email" icon={Mail} placeholder="john@example.com" required />

              <RadioGroup name="status" label="Status" options={[{
              value: 'online',
              label: 'Online'
            }, {
              value: 'offline',
              label: 'Offline'
            }, {
              value: 'away',
              label: 'Away'
            }, {
              value: 'busy',
              label: 'Busy'
            }]} required />
            </Form>
          </div>
        </div>
      </div>;
  }
}`,...(Ve=(Ie=H.parameters)==null?void 0:Ie.docs)==null?void 0:Ve.source}}};var Me,Oe,Re;K.parameters={...K.parameters,docs:{...(Me=K.parameters)==null?void 0:Me.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {},
    onFieldChange: () => {}
  },
  render: args => {
    const handleSubmit = async (data: FormData, helpers: FormHelpers) => {
      // Log to Actions panel
      args.onSubmit(data, helpers);
      console.log('Contact form submitted:', data);
      alert(\`Message sent from \${data.firstName} \${data.lastName}!\`);
    };
    const handleFieldChange = (name: string, value: unknown, allValues: FormData) => {
      // Log field changes to Actions panel
      args.onFieldChange({
        fieldName: name,
        fieldValue: value,
        formValues: allValues
      });
    };
    return <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">
          Contact Us (with Actions Logging)
        </h2>

        <Form onSubmit={handleSubmit} onFieldChange={handleFieldChange} layout="grid" gridColumns={2} spacing="lg" showSubmitButton={false}>
          <FormInput name="firstName" label="First Name" icon={User} placeholder="John" tooltip="Your given name" required />

          <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" tooltip="Your family name" required />

          <FormInput name="email" label="Email" icon={Mail} type="email" placeholder="john@example.com" tooltip="We'll respond to this email" required />

          <FormInput name="phone" label="Phone" icon={Phone} type="tel" placeholder="+1 (555) 123-4567" tooltip="Optional: For urgent matters" />

          {/* Message field spans full width */}
          <div className="col-span-2">
            <FormField label="Message" name="message" tooltip="Tell us how we can help you" placeholder="Your message here..." required />
          </div>

          {/* Submit button positioned to not grow vertically */}
          <div className="col-span-2 flex justify-end">
            <Button type="submit" label="Send Message" variant="primary" size="md" className="px-8" />
          </div>
        </Form>
      </div>;
  }
}`,...(Re=(Oe=K.parameters)==null?void 0:Oe.docs)==null?void 0:Re.source}}};const Pa=["BasicForm","WithValidation","GridLayout","HorizontalLayout","ControlledForm","CustomSubmitButton","ComponentShowcase","WithUserPreview","ContactFormWithActions"];export{L as BasicForm,G as ComponentShowcase,K as ContactFormWithActions,_ as ControlledForm,Y as CustomSubmitButton,J as GridLayout,W as HorizontalLayout,H as WithUserPreview,$ as WithValidation,Pa as __namedExportsOrder,qa as default};
