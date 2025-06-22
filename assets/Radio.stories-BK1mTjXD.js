import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as oe,R as te}from"./iframe-pYW_qTbO.js";import{c as m}from"./clsx-B-dksMZM.js";import{L as ne}from"./Label-BnpzQARg.js";import{u as le}from"./useStableId-BdX7Nxsd.js";import{r as ie}from"./size-BIjEKicz.js";const p=oe.forwardRef(({checked:u,defaultChecked:P,id:Q,label:g,size:U="md",className:X,labelClassName:Y,wrapperClassName:Z,...d},$)=>{const b=le(Q),f=ie[U],h=u!==void 0,[ee,ae]=te.useState(P??!1),re=h?u:ee,se=y=>{h||ae(y.target.checked),d.onChange&&d.onChange(y)},C=c.jsx("input",{id:b,type:"radio",ref:$,checked:re,onChange:se,className:m("text-indigo-600 focus:ring-2 focus:ring-indigo-500 border-gray-300 rounded-full",f.radio,X),...d});return g?c.jsxs("div",{className:m("flex items-center space-x-2",Z),children:[C,c.jsx(ne,{className:m(f.label,Y),htmlFor:b,children:g})]}):C});p.displayName="Radio";p.__docgenInfo={description:`Radio atom component.
Accessible, stylized radio input with optional label using the custom Label component.`,methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},checked:{required:!1,tsType:{name:"boolean"},description:""},defaultChecked:{required:!1,tsType:{name:"boolean"},description:""}},composes:["Omit"]};const be={title:"atoms/Radio",component:p,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Option A"},argTypes:{label:{control:"text",description:"Label for the radio input"},disabled:{control:"boolean",description:"Disable the radio input"},checked:{control:"boolean",description:"Controlled checked state"},defaultChecked:{control:"boolean",description:"Default checked state (uncontrolled)"},name:{control:"text",description:"Group name for radio inputs"},value:{control:"text",description:"Value submitted when the radio is selected"},size:{control:"text",description:"Size of the radio input"}}},e={},a={args:{checked:!0,onChange:()=>{}}},r={args:{disabled:!0}},s={args:{name:"favoriteColor",value:"blue",label:"Blue"}},o={args:{label:void 0,"aria-label":"Radio without visible label"}},t={args:{label:"Custom",wrapperClassName:"bg-yellow-100 p-2 rounded",labelClassName:"text-purple-500"}},n={args:{size:"sm",label:"Small radio"}},l={args:{size:"md",label:"Medium radio"}},i={args:{size:"lg",label:"Large radio"}};var S,x,N;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:"{}",...(N=(x=e.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var k,v,z;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    checked: true,
    onChange: () => {}
  }
}`,...(z=(v=a.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var w,R,L;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(L=(R=r.parameters)==null?void 0:R.docs)==null?void 0:L.source}}};var T,q,D;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: 'favoriteColor',
    value: 'blue',
    label: 'Blue'
  }
}`,...(D=(q=s.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var j,A,E;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: undefined,
    'aria-label': 'Radio without visible label'
  }
}`,...(E=(A=o.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var I,M,V;t.parameters={...t.parameters,docs:{...(I=t.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Custom',
    wrapperClassName: 'bg-yellow-100 p-2 rounded',
    labelClassName: 'text-purple-500'
  }
}`,...(V=(M=t.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var _,O,B;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small radio'
  }
}`,...(B=(O=n.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var W,F,G;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium radio'
  }
}`,...(G=(F=l.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,K;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large radio'
  }
}`,...(K=(J=i.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};const fe=["Default","Checked","Disabled","WithCustomNameAndValue","NoLabel","CustomStyled","Small","Medium","Large"];export{a as Checked,t as CustomStyled,e as Default,r as Disabled,i as Large,l as Medium,o as NoLabel,n as Small,s as WithCustomNameAndValue,fe as __namedExportsOrder,be as default};
