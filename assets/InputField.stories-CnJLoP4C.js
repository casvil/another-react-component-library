import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{L as J}from"./Label-BnpzQARg.js";import{I as K}from"./Input-ATFqI9Yy.js";import{E as Q}from"./ErrorMessage-B1DJFAfK.js";import{H as X}from"./HelperText-DYk7tUaA.js";import{u as Y}from"./useStableId-HNdiPy7R.js";import{I as u}from"./Icon-D5lntnQv.js";import{c as ee}from"./createLucideIcon-nbKSwVxJ.js";import{U as w}from"./user-CyLCayzi.js";import"./clsx-B-dksMZM.js";import"./iframe-CvNxPCzt.js";import"./size-DhI2ozjY.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],se=ee("message-circle-warning",re),g=({id:B,label:h,error:s,helperText:p,size:O="md",className:V,...Z})=>{const r=Y(B),G=[p?`${r}-helper`:null,s?`${r}-error`:null].filter(Boolean).join(" ");return e.jsxs("div",{className:"space-y-1",children:[h&&e.jsx(J,{htmlFor:r,children:h}),e.jsx(K,{id:r,size:O,"aria-invalid":!!s,"aria-describedby":G||void 0,inputClassName:V,...Z}),!s&&p&&e.jsx(X,{id:`${r}-helper`,children:p}),s&&e.jsx(Q,{id:`${r}-error`,children:s})]})};g.displayName="InputField";g.__docgenInfo={description:`InputField molecule component.
Combines Label, Input, HelperText, and ErrorMessage into a single accessible form field.
Manages ARIA attributes for error and helper text associations.
Delegates icon handling and padding fully to Input component.`,methods:[],displayName:"InputField",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const he={title:"molecules/InputField",component:g,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Email",placeholder:"Enter your email"}},a={},o={args:{helperText:"We'll never share your email."}},i={args:{disabled:!0}},t={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(u,{icon:se,size:"sm"}),iconPosition:"left",error:"This field is required"}},n={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(u,{icon:w,size:"sm"}),iconPosition:"left"}},c={args:{label:"Username",placeholder:"Enter your username",icon:e.jsx(u,{icon:w,size:"sm"}),iconPosition:"right"}},l={args:{size:"sm"}},m={args:{size:"md"}},d={args:{size:"lg"}};var f,y,I;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var b,x,E;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    helperText: "We'll never share your email."
  }
}`,...(E=(x=o.parameters)==null?void 0:x.docs)==null?void 0:E.source}}};var z,v,S;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var W,j,T;t.parameters={...t.parameters,docs:{...(W=t.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={MessageCircleWarning} size="sm" />,
    iconPosition: 'left',
    error: 'This field is required'
  }
}`,...(T=(j=t.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var M,U,L;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={User} size="sm" />,
    iconPosition: 'left'
  }
}`,...(L=(U=n.parameters)==null?void 0:U.docs)==null?void 0:L.source}}};var q,F,P;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    icon: <Icon icon={User} size="sm" />,
    iconPosition: 'right'
  }
}`,...(P=(F=c.parameters)==null?void 0:F.docs)==null?void 0:P.source}}};var _,D,H;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(H=(D=l.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var N,C,R;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var $,k,A;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(A=(k=d.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const fe=["Default","WithHelperText","Disabled","WithError","WithLeftIcon","WithRightIcon","Small","Medium","Large"];export{a as Default,i as Disabled,d as Large,m as Medium,l as Small,t as WithError,o as WithHelperText,n as WithLeftIcon,c as WithRightIcon,fe as __namedExportsOrder,he as default};
