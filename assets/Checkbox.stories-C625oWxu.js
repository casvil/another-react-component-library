import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{r as Q}from"./iframe-Coi7unCe.js";import{c as d}from"./clsx-B-dksMZM.js";import{L as U}from"./Label-BnpzQARg.js";import{u as X}from"./useStableId-BhuJpmv4.js";import{c as Y}from"./size-BIjEKicz.js";const p=Q.forwardRef(({checked:e,id:r,label:u,indeterminate:A=!1,size:F="md",className:B,labelClassName:G,wrapperClassName:H,disabled:g,...J},K)=>{const b=X(r),x=Y[F];return i.jsxs("div",{className:d("inline-flex items-center space-x-2",g&&"opacity-50 cursor-not-allowed",H),children:[i.jsx("input",{ref:K,id:b,type:"checkbox",checked:e,disabled:g,"aria-checked":A?"mixed":e,className:d("form-checkbox text-indigo-600 rounded border-gray-300 focus:ring-2 focus:ring-indigo-500",x.checkbox,B),...J}),u&&i.jsx(U,{className:d(x.label,G),htmlFor:b,children:u})]})});p.__docgenInfo={description:`Checkbox atom component.
Renders a native checkbox input with an optional label using the custom Label component.
Supports controlled and indeterminate states, as well as custom styling.`,methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const te={title:"molecules/Checkbox",component:p,parameters:{layout:"centered"},args:{label:"Accept terms"}},a={},s={args:{checked:!0}},t={args:{disabled:!0}},o={render:e=>i.jsx(p,{...e,ref:r=>{r&&(r.indeterminate=!0)}}),args:{checked:!1,indeterminate:!0,label:"Partially selected"}},n={args:{label:"Custom styled checkbox",className:"text-green-600 border-green-600",labelClassName:"text-green-700 font-semibold",wrapperClassName:"bg-green-50 px-4 py-2 rounded"}},c={args:{size:"sm",label:"Small checkbox"}},l={args:{size:"md",label:"Medium checkbox"}},m={args:{size:"lg",label:"Large checkbox"}};var f,h,k;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:"{}",...(k=(h=a.parameters)==null?void 0:h.docs)==null?void 0:k.source}}};var y,C,S;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var N,z,w;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(w=(z=t.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var v,L,j;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} ref={el => {
    if (el) el.indeterminate = true;
  }} />,
  args: {
    checked: false,
    indeterminate: true,
    label: 'Partially selected'
  }
}`,...(j=(L=o.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var q,T,I;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Custom styled checkbox',
    className: 'text-green-600 border-green-600',
    labelClassName: 'text-green-700 font-semibold',
    wrapperClassName: 'bg-green-50 px-4 py-2 rounded'
  }
}`,...(I=(T=n.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var D,M,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small checkbox'
  }
}`,...(_=(M=c.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var E,R,O;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium checkbox'
  }
}`,...(O=(R=l.parameters)==null?void 0:R.docs)==null?void 0:O.source}}};var P,V,W;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large checkbox'
  }
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const oe=["Default","Checked","Disabled","Indeterminate","WithCustomStyles","Small","Medium","Large"];export{s as Checked,a as Default,t as Disabled,o as Indeterminate,m as Large,l as Medium,c as Small,n as WithCustomStyles,oe as __namedExportsOrder,te as default};
