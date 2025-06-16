import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{R as v}from"./iframe-C9hZwJj3.js";import{L as F}from"./Label-CP3kfEUJ.js";import{I as H}from"./Input-CP5zykAk.js";import{E as D}from"./ErrorMessage-B1DJFAfK.js";import{H as R}from"./HelperText-BqOF1FJj.js";import"./clsx-B-dksMZM.js";const I=({id:j,label:l,error:r,helperText:n,className:T,...W})=>{const e=j||v.useId(),q=[n?`${e}-helper`:null,r?`${e}-error`:null].filter(Boolean).join(" ");return s.jsxs("div",{className:"space-y-1",children:[l&&s.jsx(F,{htmlFor:e,children:l}),s.jsx(H,{id:e,"aria-invalid":!!r,"aria-describedby":q||void 0,className:T,...W}),!r&&n&&s.jsx(R,{id:`${e}-helper`,children:n}),r&&s.jsx(D,{id:`${e}-error`,children:r})]})};I.__docgenInfo={description:`InputField molecule component.
Combines Label, Input, HelperText, and ErrorMessage into a single accessible form field.
Manages ARIA attributes for error and helper text associations.`,methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"molecules/InputField",component:I,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Email",placeholder:"Enter your email"}},a={},o={args:{helperText:"We'll never share your email."}},t={args:{error:"Email is required"}},i={args:{disabled:!0}};var d,c,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,u,g;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    helperText: "We'll never share your email."
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,h,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    error: "Email is required"
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,y,E;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(E=(y=i.parameters)==null?void 0:y.docs)==null?void 0:E.source}}};const C=["Default","WithHelperText","WithError","Disabled"];export{a as Default,i as Disabled,t as WithError,o as WithHelperText,C as __namedExportsOrder,N as default};
