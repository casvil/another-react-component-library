import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as p}from"./iframe-DtmuWCxD.js";import{c as u}from"./clsx-B-dksMZM.js";import{L as O}from"./Label-BnpzQARg.js";const l=p.forwardRef(({checked:e,id:r,label:i,indeterminate:D=!1,className:_,labelClassName:v,wrapperClassName:E,disabled:d,...L},R)=>{const m=r||p.useId();return c.jsxs("div",{className:u("inline-flex items-center space-x-2",d&&"opacity-50 cursor-not-allowed",E),children:[c.jsx("input",{ref:R,id:m,type:"checkbox",checked:e,disabled:d,"aria-checked":D?"mixed":e,className:u("form-checkbox h-4 w-4 text-indigo-600 rounded border-gray-300 focus:ring-2 focus:ring-indigo-500",_),...L}),i&&c.jsx(O,{className:v,htmlFor:m,children:i})]})});l.__docgenInfo={description:`Checkbox atom component.
Renders a native checkbox input with an optional label using the custom Label component.
Supports controlled and indeterminate states, as well as custom styling.`,methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const V={title:"molecules/Checkbox",component:l,parameters:{layout:"centered"},args:{label:"Accept terms"}},s={},a={args:{checked:!0}},t={args:{disabled:!0}},o={render:e=>c.jsx(l,{...e,ref:r=>{r&&(r.indeterminate=!0)}}),args:{checked:!1,indeterminate:!0,label:"Partially selected"}},n={args:{label:"Custom styled checkbox",className:"text-green-600 border-green-600",labelClassName:"text-green-700 font-semibold",wrapperClassName:"bg-green-50 px-4 py-2 rounded"}};var g,b,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,h,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var k,C,N;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(N=(C=t.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var w,S,j;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} ref={el => {
    if (el) el.indeterminate = true;
  }} />,
  args: {
    checked: false,
    indeterminate: true,
    label: "Partially selected"
  }
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var q,I,T;n.parameters={...n.parameters,docs:{...(q=n.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: "Custom styled checkbox",
    className: "text-green-600 border-green-600",
    labelClassName: "text-green-700 font-semibold",
    wrapperClassName: "bg-green-50 px-4 py-2 rounded"
  }
}`,...(T=(I=n.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};const z=["Default","Checked","Disabled","Indeterminate","WithCustomStyles"];export{a as Checked,s as Default,t as Disabled,o as Indeterminate,n as WithCustomStyles,z as __namedExportsOrder,V as default};
