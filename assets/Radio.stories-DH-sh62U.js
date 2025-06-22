import{j as d}from"./jsx-runtime-D_zvdyIk.js";import{r as X}from"./iframe-Coi7unCe.js";import{c}from"./clsx-B-dksMZM.js";import{L as Y}from"./Label-BnpzQARg.js";import{u as Z}from"./useStableId-BhuJpmv4.js";import{r as $}from"./size-BIjEKicz.js";const F=X.forwardRef(({id:G,label:m,size:H="md",className:J,labelClassName:K,wrapperClassName:P,...Q},U)=>{const p=Z(G),u=$[H],g=d.jsx("input",{id:p,type:"radio",ref:U,className:c("text-indigo-600 focus:ring-2 focus:ring-indigo-500 border-gray-300 rounded-full",u.radio,J),...Q});return m?d.jsxs("div",{className:c("flex items-center space-x-2",P),children:[g,d.jsx(Y,{className:c(u.label,K),htmlFor:p,children:m})]}):g});F.__docgenInfo={description:`Radio atom component.
Accessible, stylized radio input with optional label using the custom Label component.`,methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const le={title:"atoms/Radio",component:F,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Option A"},argTypes:{label:{control:"text",description:"Label for the radio input"},disabled:{control:"boolean",description:"Disable the radio input"},checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)"},name:{control:"text",description:"Group name for radio inputs"},value:{control:"text",description:"Value submitted when the radio is selected"},size:{control:"text",description:"Size of the radio input"}}},e={},a={args:{checked:!0,onChange:()=>{}}},r={args:{disabled:!0}},s={args:{name:"favoriteColor",value:"blue",label:"Blue"}},o={args:{label:void 0,"aria-label":"Radio without visible label"}},t={args:{label:"Custom",wrapperClassName:"bg-yellow-100 p-2 rounded",labelClassName:"text-purple-500"}},l={args:{size:"sm",label:"Small radio"}},i={args:{size:"md",label:"Medium radio"}},n={args:{size:"lg",label:"Large radio"}};var b,f,h;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:"{}",...(h=(f=e.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var C,S,x;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var y,N,v;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(v=(N=r.parameters)==null?void 0:N.docs)==null?void 0:v.source}}};var z,w,L;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    name: 'favoriteColor',
    value: 'blue',
    label: 'Blue'
  }
}`,...(L=(w=s.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var k,R,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Radio without visible label'
  }
}`,...(T=(R=o.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var q,D,j;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Custom',
    wrapperClassName: 'bg-yellow-100 p-2 rounded',
    labelClassName: 'text-purple-500'
  }
}`,...(j=(D=t.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var A,E,M;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small radio'
  }
}`,...(M=(E=l.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var V,_,I;i.parameters={...i.parameters,docs:{...(V=i.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium radio'
  }
}`,...(I=(_=i.parameters)==null?void 0:_.docs)==null?void 0:I.source}}};var O,B,W;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large radio'
  }
}`,...(W=(B=n.parameters)==null?void 0:B.docs)==null?void 0:W.source}}};const ie=["Default","Checked","Disabled","WithCustomNameAndValue","NoLabel","CustomStyled","Small","Medium","Large"];export{a as Checked,t as CustomStyled,e as Default,r as Disabled,n as Large,i as Medium,o as NoLabel,l as Small,s as WithCustomNameAndValue,ie as __namedExportsOrder,le as default};
