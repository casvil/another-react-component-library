import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as R}from"./iframe-DxJVgDAY.js";import{c as p}from"./clsx-B-dksMZM.js";import{L as O}from"./Label-BnpzQARg.js";import{u as P}from"./useStableId-Cbv2DBuk.js";const l=R.forwardRef(({checked:e,id:r,label:i,indeterminate:T=!1,className:D,labelClassName:_,wrapperClassName:v,disabled:d,...E},L)=>{const m=P(r);return c.jsxs("div",{className:p("inline-flex items-center space-x-2",d&&"opacity-50 cursor-not-allowed",v),children:[c.jsx("input",{ref:L,id:m,type:"checkbox",checked:e,disabled:d,"aria-checked":T?"mixed":e,className:p("form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-2 focus:ring-indigo-500",D),...E}),i&&c.jsx(O,{className:_,htmlFor:m,children:i})]})});l.__docgenInfo={description:`Checkbox atom component.
Renders a native checkbox input with an optional label using the custom Label component.
Supports controlled and indeterminate states, as well as custom styling.`,methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const B={title:"molecules/Checkbox",component:l,parameters:{layout:"centered"},args:{label:"Accept terms"}},s={},a={args:{checked:!0}},t={args:{disabled:!0}},o={render:e=>c.jsx(l,{...e,ref:r=>{r&&(r.indeterminate=!0)}}),args:{checked:!1,indeterminate:!0,label:"Partially selected"}},n={args:{label:"Custom styled checkbox",className:"text-green-600 border-green-600",labelClassName:"text-green-700 font-semibold",wrapperClassName:"bg-green-50 px-4 py-2 rounded"}};var u,g,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var f,x,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(h=(x=a.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var y,k,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(k=t.parameters)==null?void 0:k.docs)==null?void 0:C.source}}};var N,S,w;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} ref={el => {
    if (el) el.indeterminate = true;
  }} />,
  args: {
    checked: false,
    indeterminate: true,
    label: 'Partially selected'
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var j,q,I;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Custom styled checkbox',
    className: 'text-green-600 border-green-600',
    labelClassName: 'text-green-700 font-semibold',
    wrapperClassName: 'bg-green-50 px-4 py-2 rounded'
  }
}`,...(I=(q=n.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};const G=["Default","Checked","Disabled","Indeterminate","WithCustomStyles"];export{a as Checked,s as Default,t as Disabled,o as Indeterminate,n as WithCustomStyles,G as __namedExportsOrder,B as default};
