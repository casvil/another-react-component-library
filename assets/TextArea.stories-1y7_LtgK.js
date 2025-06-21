import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as S}from"./iframe-DpnjE_u6.js";import{c as l}from"./clsx-B-dksMZM.js";import{L as W}from"./Label-BnpzQARg.js";import{u as j}from"./useStableId-B4pJ_Tya.js";import{W as q}from"./WithFullWidthRoot-Cjte2UTG.js";const g=S.forwardRef(({label:o,labelPosition:x="above",wrapperClassName:y,labelClassName:h,id:N,className:T,...v},w)=>{const t=j(N),C=x==="beside"?"flex-row":"flex-col";return r.jsxs("div",{className:l("flex gap-2",C,y),children:[o&&r.jsx(W,{htmlFor:t,className:h,children:o}),r.jsx("textarea",{id:t,ref:w,className:l("resize-none rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500",T),...v})]})});g.__docgenInfo={description:`TextArea molecule component.
Renders a customizable <textarea> with optional label support, using Tailwind CSS styles.
It supports label positioning (above or beside), accessibility via \`aria-*\` attributes,
and custom styling through wrapper, label, and textarea class names.`,methods:[],displayName:"TextArea",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:"'above' | 'beside'",elements:[{name:"literal",value:"'above'"},{name:"literal",value:"'beside'"}]},description:"",defaultValue:{value:"'above'",computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const P={title:"molecules/TextArea",component:g,parameters:{layout:"centered"},args:{label:"Description",placeholder:"Type here..."},tags:["autodocs"],argTypes:{labelPosition:{control:{type:"radio"},options:["above","beside"]}}},e={},s={args:{labelPosition:"beside"}},a={args:{className:"border-red-500",labelClassName:"text-indigo-700 font-semibold",wrapperClassName:"bg-yellow-100 p-4 rounded"},decorators:[q]};var i,n,d;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    labelPosition: 'beside'
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,b,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    className: 'border-red-500',
    labelClassName: 'text-indigo-700 font-semibold',
    wrapperClassName: 'bg-yellow-100 p-4 rounded'
  },
  decorators: [WithFullWidthRoot]
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const _=["Default","LabelBeside","CustomStylesFullWidth"];export{a as CustomStylesFullWidth,e as Default,s as LabelBeside,_ as __namedExportsOrder,P as default};
