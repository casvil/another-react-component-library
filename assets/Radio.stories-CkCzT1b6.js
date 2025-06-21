import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as O}from"./iframe-DxJVgDAY.js";import{c}from"./clsx-B-dksMZM.js";import{L as V}from"./Label-BnpzQARg.js";import{u as B}from"./useStableId-Cbv2DBuk.js";const D=O.forwardRef(({id:L,label:i,className:j,labelClassName:A,wrapperClassName:E,..._},I)=>{const l=B(L),d=n.jsx("input",{id:l,type:"radio",ref:I,className:c("h-4 w-4 text-indigo-600 focus:ring-2 focus:ring-indigo-500 border-gray-300 rounded-full",j),..._});return i?n.jsxs("div",{className:c("flex items-center space-x-2",E),children:[d,n.jsx(V,{className:A,htmlFor:l,children:i})]}):d});D.__docgenInfo={description:`Radio atom component.
Accessible, stylized radio input with optional label using the custom Label component.`,methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const J={title:"atoms/Radio",component:D,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Option A"},argTypes:{label:{control:"text",description:"Label for the radio input"},disabled:{control:"boolean",description:"Disable the radio input"},checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)"},name:{control:"text",description:"Group name for radio inputs"},value:{control:"text",description:"Value submitted when the radio is selected"}}},e={},a={args:{checked:!0,onChange:()=>{}}},r={args:{disabled:!0}},s={args:{name:"favoriteColor",value:"blue",label:"Blue"}},o={args:{label:void 0,"aria-label":"Radio without visible label"}},t={args:{label:"Custom",wrapperClassName:"bg-yellow-100 p-2 rounded",labelClassName:"text-purple-500"}};var p,m,u;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(u=(m=e.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var b,g,f;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var h,C,x;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(C=r.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var y,N,w;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'favoriteColor',
    value: 'blue',
    label: 'Blue'
  }
}`,...(w=(N=s.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var v,S,k;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Radio without visible label'
  }
}`,...(k=(S=o.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var R,T,q;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    label: 'Custom',
    wrapperClassName: 'bg-yellow-100 p-2 rounded',
    labelClassName: 'text-purple-500'
  }
}`,...(q=(T=t.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};const K=["Default","Checked","Disabled","WithCustomNameAndValue","NoLabel","CustomStyled"];export{a as Checked,t as CustomStyled,e as Default,r as Disabled,o as NoLabel,s as WithCustomNameAndValue,K as __namedExportsOrder,J as default};
