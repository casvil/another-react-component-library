import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as P}from"./iframe-Daf5VH0f.js";import{c as i}from"./clsx-B-dksMZM.js";const l=P.forwardRef(({checked:e,onChange:r,label:d,indeterminate:T=!1,className:D,labelClassName:_,wrapperClassName:E,disabled:m,...I},O)=>c.jsxs("label",{className:i("inline-flex items-center space-x-2 cursor-pointer select-none",m&&"cursor-not-allowed opacity-50",E),children:[c.jsx("input",{ref:O,type:"checkbox",checked:e,onChange:r,disabled:m,"aria-checked":T?"mixed":e,className:i("form-checkbox h-4 w-4 text-primary rounded border-gray-300 focus:ring focus:ring-primary/30",D),...I}),d&&c.jsx("span",{className:i("text-sm text-gray-800",_),children:d})]}));l.displayName="Checkbox";l.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const A={title:"molecules/Checkbox",component:l,parameters:{layout:"centered"},args:{label:"Accept terms"}},s={},a={args:{checked:!0}},t={args:{disabled:!0}},o={render:e=>c.jsx(l,{...e,ref:r=>{r&&(r.indeterminate=!0)}}),args:{checked:!1,indeterminate:!0,label:"Partially selected"}},n={args:{label:"Custom styled checkbox",className:"text-green-600 border-green-600",labelClassName:"text-green-700 font-semibold",wrapperClassName:"bg-green-50 px-4 py-2 rounded"}};var p,u,g;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(g=(u=s.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var x,f,b;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var y,h,C;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var k,N,S;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} ref={el => {
    if (el) el.indeterminate = true;
  }} />,
  args: {
    checked: false,
    indeterminate: true,
    label: "Partially selected"
  }
}`,...(S=(N=o.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};var j,w,q;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: "Custom styled checkbox",
    className: "text-green-600 border-green-600",
    labelClassName: "text-green-700 font-semibold",
    wrapperClassName: "bg-green-50 px-4 py-2 rounded"
  }
}`,...(q=(w=n.parameters)==null?void 0:w.docs)==null?void 0:q.source}}};const V=["Default","Checked","Disabled","Indeterminate","WithCustomStyles"];export{a as Checked,s as Default,t as Disabled,o as Indeterminate,n as WithCustomStyles,V as __namedExportsOrder,A as default};
