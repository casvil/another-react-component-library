import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as B}from"./iframe-BbYVxIeR.js";import{S as s}from"./Switch-DUVN_rlA.js";import"./clsx-B-dksMZM.js";import"./Label-DmQWfZIS.js";import"./useStableId-NxHCH-Z3.js";import"./classes-zVeSqKhV.js";const V={title:"atoms/Switch",component:s,parameters:{layout:"centered"},args:{label:"Toggle option"},tags:["autodocs"],argTypes:{}},a={},r={render:()=>{const[m,p]=B.useState(!0);return e.jsx(s,{checked:m,onChange:u=>p(u.target.checked),label:"Notifications enabled"})}},t={args:{disabled:!0}},o={args:{label:"Custom styled label",labelClassName:"text-pink-600 font-bold"}},l={args:{label:"Wrapper styled",wrapperClassName:"bg-gray-100 p-4 rounded-md"}},n={args:{label:"Custom input class",className:"peer"}},c={render:()=>{const[m,p]=B.useState(!0);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Controlled Switch"}),e.jsx(s,{label:"Controlled",checked:m,onChange:u=>p(u.target.checked)})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Uncontrolled Switch"}),e.jsx(s,{label:"Uncontrolled",defaultChecked:!0})]})]})}},d={args:{className:"ring-2 ring-offset-2 ring-indigo-500",labelClassName:"text-indigo-700 font-semibold",wrapperClassName:"p-4 bg-indigo-50 rounded-lg"}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{label:"Small",size:"sm"}),e.jsx(s,{label:"Medium",size:"md"}),e.jsx(s,{label:"Large",size:"lg"})]})};var g,h,C;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:"{}",...(C=(h=a.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var b,S,N;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={e => setChecked(e.target.checked)} label="Notifications enabled" />;
  }
}`,...(N=(S=r.parameters)==null?void 0:S.docs)==null?void 0:N.source}}};var f,x,k;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(k=(x=t.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var w,j,v;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Custom styled label',
    labelClassName: 'text-pink-600 font-bold'
  }
}`,...(v=(j=o.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var y,W,z;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Wrapper styled',
    wrapperClassName: 'bg-gray-100 p-4 rounded-md'
  }
}`,...(z=(W=l.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var U,D,L;n.parameters={...n.parameters,docs:{...(U=n.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    label: 'Custom input class',
    className: 'peer'
  }
}`,...(L=(D=n.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var E,A,I;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [controlled, setControlled] = useState(true);
    return <div className="space-y-6">
        <div>
          <h4 className="font-medium">Controlled Switch</h4>
          <Switch label="Controlled" checked={controlled} onChange={e => setControlled(e.target.checked)} />
        </div>
        <div>
          <h4 className="font-medium">Uncontrolled Switch</h4>
          <Switch label="Uncontrolled" defaultChecked />
        </div>
      </div>;
  }
}`,...(I=(A=c.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var M,T,_;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    className: 'ring-2 ring-offset-2 ring-indigo-500',
    labelClassName: 'text-indigo-700 font-semibold',
    wrapperClassName: 'p-4 bg-indigo-50 rounded-lg'
  }
}`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var O,R,q;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Switch label="Small" size="sm" />
      <Switch label="Medium" size="md" />
      <Switch label="Large" size="lg" />
    </div>
}`,...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};const X=["Default","Checked","Disabled","WithLabelClassName","WithWrapperClassName","WithCustomInputClassName","ControlledUncontrolledComparison","CustomStyles","AllSizes"];export{i as AllSizes,r as Checked,c as ControlledUncontrolledComparison,d as CustomStyles,a as Default,t as Disabled,n as WithCustomInputClassName,o as WithLabelClassName,l as WithWrapperClassName,X as __namedExportsOrder,V as default};
