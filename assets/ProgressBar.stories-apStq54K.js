import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{c as m}from"./clsx-B-dksMZM.js";import{L as q}from"./Label-CihIfn8F.js";import{r as B}from"./iframe-33NFX5Oy.js";const j=({value:n,label:e,className:S,barClassName:T,labelClassName:_})=>{const i=Math.min(100,Math.max(0,n));return s.jsxs("div",{className:m("w-full",S),children:[e&&s.jsx(q,{className:_,children:e}),s.jsx("div",{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":i,className:"relative w-full h-4 bg-gray-200 rounded overflow-hidden",children:s.jsx("div",{className:m("h-full bg-indigo-600 transition-all duration-300 ease-in-out",T),style:{width:`${i}%`}})})]})};j.__docgenInfo={description:`ProgressBar atom component.
Displays a progress bar with accessible attributes and optional label.`,methods:[],displayName:"ProgressBar",props:{value:{required:!0,tsType:{name:"number"},description:""},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},barClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""}}};const E=n=>(B.useEffect(()=>{const e=document.getElementById("storybook-root");return e&&(e.style.width="100%"),()=>{e&&(e.style.width="")}},[]),s.jsx(n,{}));E.__docgenInfo={description:"Sets `width: 100%` on the #storybook-root element for a specific story.",methods:[],displayName:"withFullWidthRoot"};const R={title:"atoms/ProgressBar",component:j,parameters:{layout:"centered"},args:{value:50,label:"Loading progress"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},label:{control:"text"},className:{control:"text"},barClassName:{control:"text"},labelClassName:{control:"text"}},decorators:[E]},a={},r={args:{value:100,label:"Complete"}},o={args:{value:0,label:"Not started"}},t={args:{value:30,label:void 0}},l={args:{value:75,label:"Custom styled",className:"px-2 py-2 bg-gray-800 rounded-md",barClassName:"bg-green-500",labelClassName:"text-white font-semibold"}};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,b;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    value: 100,
    label: "Complete"
  }
}`,...(b=(g=r.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,y,h;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    value: 0,
    label: "Not started"
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,N,v;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    value: 30,
    label: undefined
  }
}`,...(v=(N=t.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var C,w,P;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    value: 75,
    label: "Custom styled",
    className: "px-2 py-2 bg-gray-800 rounded-md",
    barClassName: "bg-green-500",
    labelClassName: "text-white font-semibold"
  }
}`,...(P=(w=l.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};const k=["Default","FullProgress","EmptyProgress","NoLabel","CustomColors"];export{l as CustomColors,a as Default,o as EmptyProgress,r as FullProgress,t as NoLabel,k as __namedExportsOrder,R as default};
