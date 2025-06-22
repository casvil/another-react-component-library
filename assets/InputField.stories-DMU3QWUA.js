import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as K}from"./Label-BnpzQARg.js";import{I as Q}from"./Input-Dm9VUH0A.js";import{E as X}from"./ErrorMessage-B1DJFAfK.js";import{H as Y}from"./HelperText-DYk7tUaA.js";import{u as ee}from"./useStableId-4p5d23RD.js";import{I as u}from"./Icon-D5lntnQv.js";import{c as w}from"./createLucideIcon-C8ow0UHQ.js";import"./clsx-B-dksMZM.js";import"./iframe-BlINTDqv.js";import"./size-Dk6DSvK0.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],se=w("message-circle-warning",re);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],B=w("user",ae),g=({id:O,label:h,error:s,helperText:p,size:V="md",className:Z,...G})=>{const r=ee(O),J=[p?`${r}-helper`:null,s?`${r}-error`:null].filter(Boolean).join(" ");return e.jsxs("div",{className:"space-y-1",children:[h&&e.jsx(K,{htmlFor:r,children:h}),e.jsx(Q,{id:r,size:V,"aria-invalid":!!s,"aria-describedby":J||void 0,className:Z,...G}),!s&&p&&e.jsx(Y,{id:`${r}-helper`,children:p}),s&&e.jsx(X,{id:`${r}-error`,children:s})]})};g.displayName="InputField";g.__docgenInfo={description:`InputField molecule component.
Combines Label, Input, HelperText, and ErrorMessage into a single accessible form field.
Manages ARIA attributes for error and helper text associations.
Delegates icon handling and padding fully to Input component.`,methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const he={title:"molecules/InputField",component:g,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Email",placeholder:"Enter your email"}},a={},o={args:{helperText:"We'll never share your email."}},i={args:{disabled:!0}},n={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(u,{icon:e.jsx(se,{}),size:"sm"}),iconPosition:"left",error:"This field is required"}},t={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(u,{icon:e.jsx(B,{}),size:"sm"}),iconPosition:"left"}},c={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(u,{icon:e.jsx(B,{}),size:"sm"}),iconPosition:"right"}},l={args:{size:"sm"}},m={args:{size:"md"}},d={args:{size:"lg"}};var f,y,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var b,x,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    helperText: "We'll never share your email."
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var j,v,z;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(z=(v=i.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var S,W,M;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<MessageCircleWarning />} size="sm" />,
    iconPosition: 'left',
    error: 'This field is required'
  }
}`,...(M=(W=n.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var T,L,U;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: 'left'
  }
}`,...(U=(L=t.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var _,k,q;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={<User />} size="sm" />,
    iconPosition: 'right'
  }
}`,...(q=(k=c.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var F,H,P;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(P=(H=l.parameters)==null?void 0:H.docs)==null?void 0:P.source}}};var D,N,$;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...($=(N=m.parameters)==null?void 0:N.docs)==null?void 0:$.source}}};var R,A,C;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};const fe=["Default","WithHelperText","Disabled","WithError","WithLeftIcon","WithRightIcon","Small","Medium","Large"];export{a as Default,i as Disabled,d as Large,m as Medium,l as Small,n as WithError,o as WithHelperText,t as WithLeftIcon,c as WithRightIcon,fe as __namedExportsOrder,he as default};
