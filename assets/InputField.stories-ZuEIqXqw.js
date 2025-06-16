import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as D}from"./iframe-DjGJ464A.js";import{L as F}from"./Label-CP3kfEUJ.js";import{I as $}from"./Input-BK-4GOBg.js";import{E as N}from"./ErrorMessage-B1DJFAfK.js";import{H as A}from"./HelperText-BqOF1FJj.js";import{I as d}from"./Icon-CCsYCgSy.js";import{c as k}from"./createLucideIcon-BdIXDdMA.js";import"./clsx-B-dksMZM.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],B=k("message-circle-warning",C);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],z=k("user",w),H=({id:P,label:m,error:s,helperText:l,className:R,...S})=>{const r=P||D.useId(),q=[l?`${r}-helper`:null,s?`${r}-error`:null].filter(Boolean).join(" ");return e.jsxs("div",{className:"space-y-1",children:[m&&e.jsx(F,{htmlFor:r,children:m}),e.jsx($,{id:r,"aria-invalid":!!s,"aria-describedby":q||void 0,className:R,...S}),!s&&l&&e.jsx(A,{id:`${r}-helper`,children:l}),s&&e.jsx(N,{id:`${r}-error`,children:s})]})};H.__docgenInfo={description:`InputField molecule component.
Combines Label, Input, HelperText, and ErrorMessage into a single accessible form field.
Manages ARIA attributes for error and helper text associations.
Delegates icon handling and padding fully to Input component.`,methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""}}};const ee={title:"molecules/InputField",component:H,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Email",placeholder:"Enter your email"}},o={},a={args:{helperText:"We'll never share your email."}},n={args:{disabled:!0}},i={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(d,{icon:e.jsx(B,{}),size:"sm"}),iconPosition:"left",error:"This field is required"}},t={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(d,{icon:e.jsx(z,{}),size:"sm"}),iconPosition:"left"}},c={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(d,{icon:e.jsx(z,{}),size:"sm"}),iconPosition:"right"}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    helperText: "We'll never share your email."
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var x,I,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(I=n.parameters)==null?void 0:I.docs)==null?void 0:b.source}}};var E,j,W;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    icon: <Icon icon={<MessageCircleWarning />} size="sm" />,
    iconPosition: "left",
    error: "This field is required"
  }
}`,...(W=(j=i.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var v,T,M;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: "left"
  }
}`,...(M=(T=t.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var U,_,L;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Enter your username",
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: "right"
  }
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const re=["Default","WithHelperText","Disabled","WithError","WithLeftIcon","WithRightIcon"];export{o as Default,n as Disabled,i as WithError,a as WithHelperText,t as WithLeftIcon,c as WithRightIcon,re as __namedExportsOrder,ee as default};
