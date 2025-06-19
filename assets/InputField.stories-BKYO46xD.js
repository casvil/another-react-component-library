import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as F}from"./iframe-BXVjBmDq.js";import{L as $}from"./Label-BnpzQARg.js";import{I as N}from"./Input-F2F6THUT.js";import{E as A}from"./ErrorMessage-B1DJFAfK.js";import{H as C}from"./HelperText-BqOF1FJj.js";import{I as d}from"./Icon-ChQjg3pH.js";import{c as k}from"./createLucideIcon-Do6ansRR.js";import"./clsx-B-dksMZM.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],w=k("message-circle-warning",B);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],z=k("user",O),H=({id:P,label:m,error:s,helperText:l,className:R,...S})=>{const q=F.useId(),r=P||q,D=[l?`${r}-helper`:null,s?`${r}-error`:null].filter(Boolean).join(" ");return e.jsxs("div",{className:"space-y-1",children:[m&&e.jsx($,{htmlFor:r,children:m}),e.jsx(N,{id:r,"aria-invalid":!!s,"aria-describedby":D||void 0,className:R,...S}),!s&&l&&e.jsx(C,{id:`${r}-helper`,children:l}),s&&e.jsx(A,{id:`${r}-error`,children:s})]})};H.__docgenInfo={description:`InputField molecule component.
Combines Label, Input, HelperText, and ErrorMessage into a single accessible form field.
Manages ARIA attributes for error and helper text associations.
Delegates icon handling and padding fully to Input component.`,methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""}}};const re={title:"molecules/InputField",component:H,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Email",placeholder:"Enter your email"}},o={},a={args:{helperText:"We'll never share your email."}},i={args:{disabled:!0}},t={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(d,{icon:e.jsx(w,{}),size:"sm"}),iconPosition:"left",error:"This field is required"}},n={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(d,{icon:e.jsx(z,{}),size:"sm"}),iconPosition:"left"}},c={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(d,{icon:e.jsx(z,{}),size:"sm"}),iconPosition:"right"}};var p,u,g;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var h,f,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    helperText: "We'll never share your email."
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var I,x,b;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(b=(x=i.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var E,j,W;t.parameters={...t.parameters,docs:{...(E=t.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<MessageCircleWarning />} size="sm" />,
    iconPosition: 'left',
    error: 'This field is required'
  }
}`,...(W=(j=t.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var v,T,M;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: 'left'
  }
}`,...(M=(T=n.parameters)==null?void 0:T.docs)==null?void 0:M.source}}};var U,_,L;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: 'right'
  }
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const se=["Default","WithHelperText","Disabled","WithError","WithLeftIcon","WithRightIcon"];export{o as Default,i as Disabled,t as WithError,a as WithHelperText,n as WithLeftIcon,c as WithRightIcon,se as __namedExportsOrder,re as default};
