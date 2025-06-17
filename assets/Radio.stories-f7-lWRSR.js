import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-BtY6RC1z.js";import{c as p}from"./clsx-B-dksMZM.js";import{L as V}from"./Label-BnpzQARg.js";const L=c.forwardRef(({id:j,label:i,className:A,labelClassName:E,wrapperClassName:_,...I},O)=>{const l=j||c.useId(),d=n.jsx("input",{id:l,type:"radio",ref:O,className:p("h-4 w-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500 border-gray-300 rounded-full",A),...I});return i?n.jsxs("div",{className:p("flex items-center space-x-2",_),children:[d,n.jsx(V,{className:E,htmlFor:l,children:i})]}):d});L.__docgenInfo={description:`Radio atom component.
Accessible, stylized radio input with optional label using the custom Label component.`,methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const G={title:"atoms/Radio",component:L,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Option A"},argTypes:{label:{control:"text",description:"Label for the radio input"},disabled:{control:"boolean",description:"Disable the radio input"},checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)"},name:{control:"text",description:"Group name for radio inputs"},value:{control:"text",description:"Value submitted when the radio is selected"}}},e={},a={args:{checked:!0,onChange:()=>{}}},r={args:{disabled:!0}},s={args:{name:"favoriteColor",value:"blue",label:"Blue"}},o={args:{label:void 0,"aria-label":"Radio without visible label"}},t={args:{label:"Custom",wrapperClassName:"bg-yellow-100 p-2 rounded",labelClassName:"text-purple-500"}};var m,u,b;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:"{}",...(b=(u=e.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var g,f,h;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var C,x,y;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(y=(x=r.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var N,w,v;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    name: "favoriteColor",
    value: "blue",
    label: "Blue"
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var k,R,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: undefined,
    "aria-label": "Radio without visible label"
  }
}`,...(S=(R=o.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var T,q,D;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    label: "Custom",
    wrapperClassName: "bg-yellow-100 p-2 rounded",
    labelClassName: "text-purple-500"
  }
}`,...(D=(q=t.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};const H=["Default","Checked","Disabled","WithCustomNameAndValue","NoLabel","CustomStyled"];export{a as Checked,t as CustomStyled,e as Default,r as Disabled,o as NoLabel,s as WithCustomNameAndValue,H as __namedExportsOrder,G as default};
