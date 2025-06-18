import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-BkINPk9u.js";import{c as i}from"./clsx-B-dksMZM.js";import{L as j}from"./Label-BnpzQARg.js";import{W as q}from"./WithFullWidthRoot-sSTiMS-y.js";const x=l.forwardRef(({label:o,labelPosition:y="above",wrapperClassName:h,labelClassName:N,id:T,className:v,...w},C)=>{const S=l.useId(),t=T??S,W=y==="beside"?"flex-row":"flex-col";return r.jsxs("div",{className:i("flex gap-2",W,h),children:[o&&r.jsx(j,{htmlFor:t,className:N,children:o}),r.jsx("textarea",{id:t,ref:C,className:i("resize-none rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500",v),...w})]})});x.__docgenInfo={description:`TextArea molecule component.
Renders a customizable <textarea> with optional label support, using Tailwind CSS styles.
It supports label positioning (above or beside), accessibility via \`aria-*\` attributes,
and custom styling through wrapper, label, and textarea class names.`,methods:[],displayName:"TextArea",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:"'above' | 'beside'",elements:[{name:"literal",value:"'above'"},{name:"literal",value:"'beside'"}]},description:"",defaultValue:{value:"'above'",computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const L={title:"molecules/TextArea",component:x,parameters:{layout:"centered"},args:{label:"Description",placeholder:"Type here..."},tags:["autodocs"],argTypes:{labelPosition:{control:{type:"radio"},options:["above","beside"]}}},e={},s={args:{labelPosition:"beside"}},a={args:{className:"border-red-500",labelClassName:"text-indigo-700 font-semibold",wrapperClassName:"bg-yellow-100 p-4 rounded"},decorators:[q]};var n,d,c;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    labelPosition: 'beside'
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,g,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    className: 'border-red-500',
    labelClassName: 'text-indigo-700 font-semibold',
    wrapperClassName: 'bg-yellow-100 p-4 rounded'
  },
  decorators: [WithFullWidthRoot]
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const P=["Default","LabelBeside","CustomStylesFullWidth"];export{a as CustomStylesFullWidth,e as Default,s as LabelBeside,P as __namedExportsOrder,L as default};
