import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{c as m}from"./clsx-B-dksMZM.js";import{L as S}from"./Label-BnpzQARg.js";import{W as B}from"./WithFullWidthRoot-DNt7TZ3_.js";import"./iframe-i29B4WCl.js";const P=({value:j,label:l,className:T,barClassName:q,labelClassName:L})=>{const n=Math.min(100,Math.max(0,j));return e.jsxs("div",{className:m("w-full",T),children:[l&&e.jsx(S,{className:L,children:l}),e.jsx("div",{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":n,className:"relative w-full h-4 bg-gray-200 rounded overflow-hidden",children:e.jsx("div",{className:m("h-full bg-indigo-600 transition-all duration-300 ease-in-out",q),style:{width:`${n}%`}})})]})};P.__docgenInfo={description:`ProgressBar atom component.
Displays a progress bar with accessible attributes and optional label.`,methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},barClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""}}};const M={title:"atoms/ProgressBar",component:P,parameters:{layout:"centered"},args:{value:50,label:"Loading progress"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},label:{control:"text"},className:{control:"text"},barClassName:{control:"text"},labelClassName:{control:"text"}},decorators:[B]},a={},s={args:{value:100,label:"Complete"}},r={args:{value:0,label:"Not started"}},o={args:{value:30,label:void 0}},t={args:{value:75,label:"Custom styled",className:"px-2 py-2 bg-gray-800 rounded-md",barClassName:"bg-green-500",labelClassName:"text-white font-semibold"}};var i,c,d;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: 'Complete'
  }
}`,...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var b,N,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    value: 0,
    label: 'Not started'
  }
}`,...(f=(N=r.parameters)==null?void 0:N.docs)==null?void 0:f.source}}};var v,x,y;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    value: 30,
    label: undefined
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var C,h,w;t.parameters={...t.parameters,docs:{...(C=t.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: 'Custom styled',
    className: 'px-2 py-2 bg-gray-800 rounded-md',
    barClassName: 'bg-green-500',
    labelClassName: 'text-white font-semibold'
  }
}`,...(w=(h=t.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const R=["Default","FullProgress","EmptyProgress","NoLabel","CustomColors"];export{t as CustomColors,a as Default,r as EmptyProgress,s as FullProgress,o as NoLabel,R as __namedExportsOrder,M as default};
