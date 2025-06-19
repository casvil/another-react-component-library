import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as t}from"./clsx-B-dksMZM.js";import{c as j}from"./createLucideIcon-CGrNzbPx.js";import"./iframe-D5UJ3uGf.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],T=j("loader-circle",M),h=({size:w="md",className:C,iconClassName:L,...b})=>{const _={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"};return n.jsxs("div",{role:"status","aria-live":"polite","aria-label":"Loading",className:t("inline-flex items-center",C),...b,children:[n.jsx(T,{className:t("animate-spin",_[w],L),"aria-hidden":"true"}),n.jsx("span",{className:"sr-only",children:"Loading"})]})};h.__docgenInfo={description:'Spinner atom component.\n\nRenders a spinning loader icon using Lucide\'s `LoaderCircle`.\nAccepts size, wrapper styling via `className`, and icon color via `iconClassName`.\nAccessible via `role="status"` and visually hidden text.',methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},iconClassName:{required:!1,tsType:{name:"string"},description:""}}};const I={title:"atoms/Spinner",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},e={args:{}},s={args:{size:"sm"}},a={args:{size:"md"}},r={args:{size:"lg"}},o={args:{size:"lg",className:"bg-yellow-50 p-2 rounded-full border",iconClassName:"text-yellow-500"}};var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var m,d,p;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,g,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,S,x;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(x=(S=r.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var z,N,v;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    className: 'bg-yellow-50 p-2 rounded-full border',
    iconClassName: 'text-yellow-500'
  }
}`,...(v=(N=o.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};const R=["Default","Small","Medium","Large","CustomStyles"];export{o as CustomStyles,e as Default,r as Large,a as Medium,s as Small,R as __namedExportsOrder,I as default};
