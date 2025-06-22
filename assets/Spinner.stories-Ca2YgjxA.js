import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{c as i}from"./clsx-B-dksMZM.js";import{c as _}from"./createLucideIcon-C8ow0UHQ.js";import{s as j}from"./size-Dk6DSvK0.js";import"./iframe-BlINTDqv.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],T=_("loader-circle",M),t=({size:L="md",className:b,iconClassName:h,...w})=>n.jsxs("div",{role:"status","aria-live":"polite","aria-label":"Loading",className:i("inline-flex items-center",b),...w,children:[n.jsx(T,{className:i("animate-spin",j[L],h),"aria-hidden":"true"}),n.jsx("span",{className:"sr-only",children:"Loading"})]});t.displayName="Spinner";t.__docgenInfo={description:'Spinner atom component.\n\nRenders a spinning loader icon using Lucide\'s `LoaderCircle`.\nAccepts size, wrapper styling via `className`, and icon color via `iconClassName`.\nAccessible via `role="status"` and visually hidden text.',methods:[],displayName:"Spinner",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},iconClassName:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"atoms/Spinner",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{}},e={args:{}},s={args:{size:"sm"}},a={args:{size:"md"}},r={args:{size:"lg"}},o={args:{size:"lg",className:"bg-yellow-50 p-2 rounded-full border",iconClassName:"text-yellow-500"}};var l,c,m;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {}
}`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,y,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    size: 'md'
  }
}`,...(f=(y=a.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var S,N,x;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(x=(N=r.parameters)==null?void 0:N.docs)==null?void 0:x.source}}};var z,v,C;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    className: 'bg-yellow-50 p-2 rounded-full border',
    iconClassName: 'text-yellow-500'
  }
}`,...(C=(v=o.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};const k=["Default","Small","Medium","Large","CustomStyles"];export{o as CustomStyles,e as Default,r as Large,a as Medium,s as Small,k as __namedExportsOrder,R as default};
