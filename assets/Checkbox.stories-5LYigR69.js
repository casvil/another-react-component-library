import{j as m}from"./jsx-runtime-D_zvdyIk.js";import{r as ae,R as re}from"./iframe-K6es8UjJ.js";import{c as u}from"./clsx-B-dksMZM.js";import{L as se}from"./Label-BnpzQARg.js";import{u as te}from"./useStableId-BQAh0rnB.js";import{c as oe}from"./size-BIjEKicz.js";const d=ae.forwardRef(({checked:e,defaultChecked:a,id:H,label:g,indeterminate:J=!1,size:K="md",className:Q,labelClassName:U,wrapperClassName:X,disabled:b,...p},Y)=>{const h=te(H),x=oe[K],f=e!==void 0,[Z,$]=re.useState(a??!1),k=f?e:Z,ee=C=>{f||$(C.target.checked),p.onChange&&p.onChange(C)};return m.jsxs("div",{className:u("inline-flex items-center space-x-2",b&&"opacity-50 cursor-not-allowed",X),children:[m.jsx("input",{ref:Y,id:h,type:"checkbox",checked:k,disabled:b,"aria-checked":J?"mixed":k,className:u("form-checkbox text-indigo-600 rounded border-gray-300 focus:ring-2 focus:ring-indigo-500",x.checkbox,Q),onChange:ee,...p}),g&&m.jsx(se,{className:u(x.label,U),htmlFor:h,children:g})]})});d.displayName="Checkbox";d.__docgenInfo={description:`Checkbox atom component.
Renders a native checkbox input with an optional label using the custom Label component.
Supports controlled and indeterminate states, as well as custom styling.`,methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:""},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};const pe={title:"molecules/Checkbox",component:d,parameters:{layout:"centered"},args:{label:"Accept terms"}},r={},s={args:{checked:!0}},t={args:{disabled:!0}},o={render:e=>m.jsx(d,{...e,ref:a=>{a&&(a.indeterminate=!0)}}),args:{checked:!1,indeterminate:!0,label:"Partially selected"}},n={args:{label:"Custom styled checkbox",className:"text-green-600 border-green-600",labelClassName:"text-green-700 font-semibold",wrapperClassName:"bg-green-50 px-4 py-2 rounded"}},c={args:{size:"sm",label:"Small checkbox"}},l={args:{size:"md",label:"Medium checkbox"}},i={args:{size:"lg",label:"Large checkbox"}};var y,S,N;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(N=(S=r.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var z,v,w;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: true
  }
}`,...(w=(v=s.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var L,j,q;t.parameters={...t.parameters,docs:{...(L=t.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(q=(j=t.parameters)==null?void 0:j.docs)==null?void 0:q.source}}};var I,T,R;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Checkbox {...args} ref={el => {
    if (el) el.indeterminate = true;
  }} />,
  args: {
    checked: false,
    indeterminate: true,
    label: 'Partially selected'
  }
}`,...(R=(T=o.parameters)==null?void 0:T.docs)==null?void 0:R.source}}};var D,M,_;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Custom styled checkbox',
    className: 'text-green-600 border-green-600',
    labelClassName: 'text-green-700 font-semibold',
    wrapperClassName: 'bg-green-50 px-4 py-2 rounded'
  }
}`,...(_=(M=n.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var E,O,P;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    label: 'Small checkbox'
  }
}`,...(P=(O=c.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var V,W,A;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'md',
    label: 'Medium checkbox'
  }
}`,...(A=(W=l.parameters)==null?void 0:W.docs)==null?void 0:A.source}}};var F,B,G;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    label: 'Large checkbox'
  }
}`,...(G=(B=i.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const ue=["Default","Checked","Disabled","Indeterminate","WithCustomStyles","Small","Medium","Large"];export{s as Checked,r as Default,t as Disabled,o as Indeterminate,i as Large,l as Medium,c as Small,n as WithCustomStyles,ue as __namedExportsOrder,pe as default};
