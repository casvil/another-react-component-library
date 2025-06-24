import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as a}from"./clsx-B-dksMZM.js";import{L as k}from"./Label-BnpzQARg.js";import{p as A}from"./size-7yIMnH0j.js";import{W as G}from"./WithFullWidthRoot-CTKtmsnH.js";import"./iframe-D7IP4P95.js";const W=({value:R,label:c,size:V="md",className:I,barClassName:O,labelClassName:$})=>{const d=Math.min(100,Math.max(0,R)),p=A[V];return e.jsxs("div",{className:a("w-full",I),children:[c&&e.jsx(k,{className:a(p.label,$),children:c}),e.jsx("div",{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":d,className:a("relative w-full bg-gray-200 rounded overflow-hidden",p.bar),children:e.jsx("div",{className:a("h-full bg-indigo-600 transition-all duration-300 ease-in-out",O),style:{width:`${d}%`}})})]})};W.__docgenInfo={description:`ProgressBar atom component.
Displays a progress bar with accessible attributes and optional label.`,methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},barClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""}}};const Y={title:"atoms/ProgressBar",component:W,parameters:{layout:"centered"},args:{value:50,label:"Loading progress"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},label:{control:"text"},className:{control:"text"},barClassName:{control:"text"},labelClassName:{control:"text"}},decorators:[G]},r={},s={args:{value:100,label:"Complete"}},o={args:{value:0,label:"Not started"}},l={args:{value:30,label:void 0}},t={args:{value:75,label:"Custom styled",className:"px-2 py-2 bg-gray-800 rounded-md",barClassName:"bg-green-500",labelClassName:"text-white font-semibold"}},n={args:{size:"sm",label:"Small progress bar"}},m={args:{size:"md",label:"Medium progress bar"}},i={args:{size:"lg",label:"Large progress bar"}};var u,g,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,v,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: 'Complete'
  }
}`,...(y=(v=s.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var N,x,C;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    value: 0,
    label: 'Not started'
  }
}`,...(C=(x=o.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var h,S,w;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    value: 30,
    label: undefined
  }
}`,...(w=(S=l.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var z,L,P;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Custom styled',
    className: 'px-2 py-2 bg-gray-800 rounded-md',
    barClassName: 'bg-green-500',
    labelClassName: 'text-white font-semibold'
  }
}`,...(P=(L=t.parameters)==null?void 0:L.docs)==null?void 0:P.source}}};var T,j,q;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small progress bar'
  }
}`,...(q=(j=n.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var M,B,E;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium progress bar'
  }
}`,...(E=(B=m.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var _,D,F;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large progress bar'
  }
}`,...(F=(D=i.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};const Z=["Default","FullProgress","EmptyProgress","NoLabel","CustomColors","Small","Medium","Large"];export{t as CustomColors,r as Default,o as EmptyProgress,s as FullProgress,i as Large,m as Medium,l as NoLabel,n as Small,Z as __namedExportsOrder,Y as default};
