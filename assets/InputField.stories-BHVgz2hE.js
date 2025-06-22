import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as K}from"./Label-BnpzQARg.js";import{I as Q}from"./Input-Hss9dKYU.js";import{E as X}from"./ErrorMessage-B1DJFAfK.js";import{H as Y}from"./HelperText-BqOF1FJj.js";import{u as ee}from"./useStableId-DwVmev1F.js";import{I as u}from"./Icon-ChQjg3pH.js";import{c as C}from"./createLucideIcon-gqKurJFS.js";import"./clsx-B-dksMZM.js";import"./iframe-BZGwmEKa.js";import"./size-G8QTwTDo.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],se=C("message-circle-warning",re);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],w=C("user",ae),B=({id:O,label:g,error:s,helperText:p,size:V="md",className:Z,...G})=>{const r=ee(O),J=[p?`${r}-helper`:null,s?`${r}-error`:null].filter(Boolean).join(" ");return e.jsxs("div",{className:"space-y-1",children:[g&&e.jsx(K,{htmlFor:r,children:g}),e.jsx(Q,{id:r,size:V,"aria-invalid":!!s,"aria-describedby":J||void 0,className:Z,...G}),!s&&p&&e.jsx(Y,{id:`${r}-helper`,children:p}),s&&e.jsx(X,{id:`${r}-error`,children:s})]})};B.__docgenInfo={description:`InputField molecule component.
Combines Label, Input, HelperText, and ErrorMessage into a single accessible form field.
Manages ARIA attributes for error and helper text associations.
Delegates icon handling and padding fully to Input component.`,methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const he={title:"molecules/InputField",component:B,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Email",placeholder:"Enter your email"}},a={},o={args:{helperText:"We'll never share your email."}},i={args:{disabled:!0}},n={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(u,{icon:e.jsx(se,{}),size:"sm"}),iconPosition:"left",error:"This field is required"}},t={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(u,{icon:e.jsx(w,{}),size:"sm"}),iconPosition:"left"}},c={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(u,{icon:e.jsx(w,{}),size:"sm"}),iconPosition:"right"}},l={args:{size:"sm"}},m={args:{size:"md"}},d={args:{size:"lg"}};var h,f,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,x,I;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    helperText: "We'll never share your email."
  }
}`,...(I=(x=o.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var E,j,v;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(v=(j=i.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var z,S,W;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<MessageCircleWarning />} size="sm" />,
    iconPosition: 'left',
    error: 'This field is required'
  }
}`,...(W=(S=n.parameters)==null?void 0:S.docs)==null?void 0:W.source}}};var M,T,L;t.parameters={...t.parameters,docs:{...(M=t.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: 'left'
  }
}`,...(L=(T=t.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var U,_,k;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: 'right'
  }
}`,...(k=(_=c.parameters)==null?void 0:_.docs)==null?void 0:k.source}}};var q,H,P;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var D,F,$;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...($=(F=m.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var N,R,A;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(A=(R=d.parameters)==null?void 0:R.docs)==null?void 0:A.source}}};const fe=["Default","WithHelperText","Disabled","WithError","WithLeftIcon","WithRightIcon","Small","Medium","Large"];export{a as Default,i as Disabled,d as Large,m as Medium,l as Small,n as WithError,o as WithHelperText,t as WithLeftIcon,c as WithRightIcon,fe as __namedExportsOrder,he as default};
