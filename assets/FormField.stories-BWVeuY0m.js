import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{R as A}from"./iframe-CWUf6DFn.js";import{F as o,M as c,L as V}from"./FormField-DBhoCcms.js";import{U as t}from"./user-SRfI9gcn.js";import{c as k}from"./createLucideIcon-BehFmr7A.js";import"./clsx-B-dksMZM.js";import"./Label-BnpzQARg.js";import"./Input-DCB6qc9h.js";import"./size-C5vASx-s.js";import"./Tooltip-DV-eh5YY.js";import"./useStableId-BwVK-eSq.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]],_=k("credit-card",D),oe={title:"molecules/FormField",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Email Address",placeholder:"Enter your email",size:"md"},argTypes:{tooltipPosition:{control:"select",options:["top","bottom","left","right"]},size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","email","password","number","tel","url"]}}},l={args:{label:"Email Address",placeholder:"Enter your email",type:"email"}},r={args:{label:"Password",tooltip:"Password must be at least 8 characters with at least 1 number and 1 special character",type:"password",placeholder:"Enter your password"}},a={args:{label:"Email Address",tooltip:"We will never share your email with anyone else",icon:c,type:"email",placeholder:"Enter your email"}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(o,{label:"Small Size",tooltip:"This is a small form field",size:"sm",placeholder:"Small input",icon:t}),e.jsx(o,{label:"Medium Size",tooltip:"This is a medium form field",size:"md",placeholder:"Medium input",icon:t}),e.jsx(o,{label:"Large Size",tooltip:"This is a large form field",size:"lg",placeholder:"Large input",icon:t})]})},s={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 p-8",children:[e.jsx(o,{label:"Top Tooltip",tooltip:"Tooltip appears on top",tooltipPosition:"top",placeholder:"Hover the help icon"}),e.jsx(o,{label:"Right Tooltip",tooltip:"Tooltip appears on the right",tooltipPosition:"right",placeholder:"Hover the help icon"}),e.jsx(o,{label:"Bottom Tooltip",tooltip:"Tooltip appears on bottom",tooltipPosition:"bottom",placeholder:"Hover the help icon"}),e.jsx(o,{label:"Left Tooltip",tooltip:"Tooltip appears on the left",tooltipPosition:"left",placeholder:"Hover the help icon"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(o,{label:"Full Name",tooltip:"Enter your first and last name",icon:t,placeholder:"John Doe",required:!0}),e.jsx(o,{label:"Email",tooltip:"We'll use this to send you important updates",icon:c,type:"email",placeholder:"john@example.com",required:!0}),e.jsx(o,{label:"Password",tooltip:"Must be at least 8 characters with numbers and symbols",tooltipPosition:"right",icon:V,type:"password",placeholder:"••••••••",required:!0}),e.jsx(o,{label:"Credit Card",tooltip:"Your payment information is encrypted and secure",icon:_,placeholder:"1234 5678 9012 3456",maxLength:19})]})},n={args:{label:"Custom Styled Field",tooltip:"This field has custom styling applied",labelClassName:"text-indigo-700 font-bold text-base",tooltipClassName:"bg-indigo-600 text-white",wrapperClassName:"bg-indigo-50 p-4 rounded-lg border border-indigo-200",className:"border-indigo-300 focus:ring-indigo-500",placeholder:"Custom styled input",icon:c}},d={render:()=>{const[U,q]=A.useState("");return e.jsx(o,{label:"Interactive Example",tooltip:"Type something to see the controlled behavior",value:U,onChange:R=>q(R.target.value),placeholder:"Start typing...",icon:t})}};var m,h,u;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(u=(h=l.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,b,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    tooltip: 'Password must be at least 8 characters with at least 1 number and 1 special character',
    type: 'password',
    placeholder: 'Enter your password'
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var x,f,F;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    tooltip: 'We will never share your email with anyone else',
    icon: Mail,
    type: 'email',
    placeholder: 'Enter your email'
  }
}`,...(F=(f=a.parameters)==null?void 0:f.docs)==null?void 0:F.source}}};var T,v,w;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <FormField label="Small Size" tooltip="This is a small form field" size="sm" placeholder="Small input" icon={User} />
      <FormField label="Medium Size" tooltip="This is a medium form field" size="md" placeholder="Medium input" icon={User} />
      <FormField label="Large Size" tooltip="This is a large form field" size="lg" placeholder="Large input" icon={User} />
    </div>
}`,...(w=(v=i.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,C,E;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-2 gap-8 p-8">
      <FormField label="Top Tooltip" tooltip="Tooltip appears on top" tooltipPosition="top" placeholder="Hover the help icon" />
      <FormField label="Right Tooltip" tooltip="Tooltip appears on the right" tooltipPosition="right" placeholder="Hover the help icon" />
      <FormField label="Bottom Tooltip" tooltip="Tooltip appears on bottom" tooltipPosition="bottom" placeholder="Hover the help icon" />
      <FormField label="Left Tooltip" tooltip="Tooltip appears on the left" tooltipPosition="left" placeholder="Hover the help icon" />
    </div>
}`,...(E=(C=s.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var j,P,z;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4 w-80">
      <FormField label="Full Name" tooltip="Enter your first and last name" icon={User} placeholder="John Doe" required />
      <FormField label="Email" tooltip="We'll use this to send you important updates" icon={Mail} type="email" placeholder="john@example.com" required />
      <FormField label="Password" tooltip="Must be at least 8 characters with numbers and symbols" tooltipPosition="right" icon={Lock} type="password" placeholder="••••••••" required />
      <FormField label="Credit Card" tooltip="Your payment information is encrypted and secure" icon={CreditCard} placeholder="1234 5678 9012 3456" maxLength={19} />
    </div>
}`,...(z=(P=p.parameters)==null?void 0:P.docs)==null?void 0:z.source}}};var N,L,M;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    label: 'Custom Styled Field',
    tooltip: 'This field has custom styling applied',
    labelClassName: 'text-indigo-700 font-bold text-base',
    tooltipClassName: 'bg-indigo-600 text-white',
    wrapperClassName: 'bg-indigo-50 p-4 rounded-lg border border-indigo-200',
    className: 'border-indigo-300 focus:ring-indigo-500',
    placeholder: 'Custom styled input',
    icon: Mail
  }
}`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,W,I;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <FormField label="Interactive Example" tooltip="Type something to see the controlled behavior" value={value} onChange={e => setValue(e.target.value)} placeholder="Start typing..." icon={User} />;
  }
}`,...(I=(W=d.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};const te=["Default","WithTooltip","WithIcon","SizeVariants","TooltipPositions","FormExamples","CustomStyling","Interactive"];export{n as CustomStyling,l as Default,p as FormExamples,d as Interactive,i as SizeVariants,s as TooltipPositions,a as WithIcon,r as WithTooltip,te as __namedExportsOrder,oe as default};
