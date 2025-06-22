import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{r as _}from"./iframe-BlINTDqv.js";import{c as m}from"./clsx-B-dksMZM.js";import{L as E}from"./Label-BnpzQARg.js";import{u as B}from"./useStableId-4p5d23RD.js";import{i as O}from"./size-Dk6DSvK0.js";import{W as V}from"./WithFullWidthRoot-Bumwkrt6.js";const i=_.forwardRef(({label:n,labelPosition:q="above",wrapperClassName:j,labelClassName:A,size:F="md",id:R,className:D,...I},M)=>{const d=B(R),P=q==="beside"?"flex-row":"flex-col";return l.jsxs("div",{className:m("flex gap-2",P,j),children:[n&&l.jsx(E,{htmlFor:d,className:A,children:n}),l.jsx("textarea",{id:d,ref:M,className:m("resize-none rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500",O[F],D),...I})]})});i.displayName="TextArea";i.__docgenInfo={description:`TextArea atom component.
Renders a customizable <textarea> with optional label support, using Tailwind CSS styles.
It supports label positioning (above or beside), accessibility via \`aria-*\` attributes,
and custom styling through wrapper, label, and textarea class names.`,methods:[],displayName:"TextArea",props:{className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:"'above' | 'beside'",elements:[{name:"literal",value:"'above'"},{name:"literal",value:"'beside'"}]},description:"",defaultValue:{value:"'above'",computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const X={title:"atoms/TextArea",component:i,parameters:{layout:"centered"},args:{label:"Description",placeholder:"Type here..."},tags:["autodocs"],argTypes:{labelPosition:{control:{type:"radio"},options:["above","beside"]}}},e={},a={args:{labelPosition:"beside"}},r={args:{className:"border-red-500",labelClassName:"text-indigo-700 font-semibold",wrapperClassName:"bg-yellow-100 p-4 rounded"},decorators:[V]},s={args:{size:"sm",placeholder:"Small textarea"}},o={args:{size:"md",placeholder:"Medium textarea"}},t={args:{size:"lg",placeholder:"Large textarea"}};var c,p,u;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(p=e.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var g,b,f;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    labelPosition: 'beside'
  }
}`,...(f=(b=a.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,h,y;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    className: 'border-red-500',
    labelClassName: 'text-indigo-700 font-semibold',
    wrapperClassName: 'bg-yellow-100 p-4 rounded'
  },
  decorators: [WithFullWidthRoot]
}`,...(y=(h=r.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var S,v,N;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small textarea'
  }
}`,...(N=(v=s.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var T,w,z;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'md',
    placeholder: 'Medium textarea'
  }
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var C,L,W;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large textarea'
  }
}`,...(W=(L=t.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};const Y=["Default","LabelBeside","CustomStylesFullWidth","Small","Medium","Large"];export{r as CustomStylesFullWidth,e as Default,a as LabelBeside,t as Large,o as Medium,s as Small,Y as __namedExportsOrder,X as default};
