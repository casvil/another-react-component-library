import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./iframe-CsE_Dzsg.js";import{c as d}from"./clsx-B-dksMZM.js";import{L as E}from"./Label-BnpzQARg.js";import{u as B}from"./useStableId-BNuJjgjZ.js";import{i as O}from"./size-C63hv48t.js";import{W as V}from"./WithFullWidthRoot-B-HNhOcA.js";const W=_.forwardRef(({label:i,labelPosition:q="above",wrapperClassName:j,labelClassName:F,size:R="md",id:A,className:D,...I},M)=>{const n=B(A),P=q==="beside"?"flex-row":"flex-col";return l.jsxs("div",{className:d("flex gap-2",P,j),children:[i&&l.jsx(E,{htmlFor:n,className:F,children:i}),l.jsx("textarea",{id:n,ref:M,className:d("resize-none rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500",O[R],D),...I})]})});W.__docgenInfo={description:`TextArea molecule component.
Renders a customizable <textarea> with optional label support, using Tailwind CSS styles.
It supports label positioning (above or beside), accessibility via \`aria-*\` attributes,
and custom styling through wrapper, label, and textarea class names.`,methods:[],displayName:"TextArea",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:"'above' | 'beside'",elements:[{name:"literal",value:"'above'"},{name:"literal",value:"'beside'"}]},description:"",defaultValue:{value:"'above'",computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const X={title:"molecules/TextArea",component:W,parameters:{layout:"centered"},args:{label:"Description",placeholder:"Type here..."},tags:["autodocs"],argTypes:{labelPosition:{control:{type:"radio"},options:["above","beside"]}}},e={},a={args:{labelPosition:"beside"}},r={args:{className:"border-red-500",labelClassName:"text-indigo-700 font-semibold",wrapperClassName:"bg-yellow-100 p-4 rounded"},decorators:[V]},s={args:{size:"sm",placeholder:"Small textarea"}},o={args:{size:"md",placeholder:"Medium textarea"}},t={args:{size:"lg",placeholder:"Large textarea"}};var m,c,p;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(p=(c=e.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var u,g,b;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    labelPosition: 'beside'
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,x,h;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    className: 'border-red-500',
    labelClassName: 'text-indigo-700 font-semibold',
    wrapperClassName: 'bg-yellow-100 p-4 rounded'
  },
  decorators: [WithFullWidthRoot]
}`,...(h=(x=r.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,S,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small textarea'
  }
}`,...(v=(S=s.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var N,T,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: 'md',
    placeholder: 'Medium textarea'
  }
}`,...(w=(T=o.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var z,C,L;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large textarea'
  }
}`,...(L=(C=t.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};const Y=["Default","LabelBeside","CustomStylesFullWidth","Small","Medium","Large"];export{r as CustomStylesFullWidth,e as Default,a as LabelBeside,t as Large,o as Medium,s as Small,Y as __namedExportsOrder,X as default};
