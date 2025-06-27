import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as V}from"./iframe-CvNxPCzt.js";import{F as o}from"./FormField-CMuSwMTd.js";import{M as c}from"./mail-CygLb0vT.js";import{U as t}from"./user-CyLCayzi.js";import{L as D}from"./lock-C35FH7oB.js";import{C as R}from"./credit-card-CmeKmSun.js";import"./clsx-B-dksMZM.js";import"./createLucideIcon-nbKSwVxJ.js";import"./Label-BnpzQARg.js";import"./Input-ATFqI9Yy.js";import"./size-DhI2ozjY.js";import"./Tooltip-CrjkNCmM.js";import"./useStableId-HNdiPy7R.js";const te={title:"molecules/FormField",component:o,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Email Address",placeholder:"Enter your email",size:"md"},argTypes:{tooltipPosition:{control:"select",options:["top","bottom","left","right"]},size:{control:"select",options:["sm","md","lg"]},type:{control:"select",options:["text","email","password","number","tel","url"]}}},l={args:{label:"Email Address",placeholder:"Enter your email",type:"email"}},r={args:{label:"Password",tooltip:"Password must be at least 8 characters with at least 1 number and 1 special character",type:"password",placeholder:"Enter your password"}},a={args:{label:"Email Address",tooltip:"We will never share your email with anyone else",icon:c,type:"email",placeholder:"Enter your email"}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(o,{label:"Small Size",tooltip:"This is a small form field",size:"sm",placeholder:"Small input",icon:t}),e.jsx(o,{label:"Medium Size",tooltip:"This is a medium form field",size:"md",placeholder:"Medium input",icon:t}),e.jsx(o,{label:"Large Size",tooltip:"This is a large form field",size:"lg",placeholder:"Large input",icon:t})]})},s={render:()=>e.jsxs("div",{className:"grid grid-cols-2 gap-8 p-8",children:[e.jsx(o,{label:"Top Tooltip",tooltip:"Tooltip appears on top",tooltipPosition:"top",placeholder:"Hover the help icon"}),e.jsx(o,{label:"Right Tooltip",tooltip:"Tooltip appears on the right",tooltipPosition:"right",placeholder:"Hover the help icon"}),e.jsx(o,{label:"Bottom Tooltip",tooltip:"Tooltip appears on bottom",tooltipPosition:"bottom",placeholder:"Hover the help icon"}),e.jsx(o,{label:"Left Tooltip",tooltip:"Tooltip appears on the left",tooltipPosition:"left",placeholder:"Hover the help icon"})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4 w-80",children:[e.jsx(o,{label:"Full Name",tooltip:"Enter your first and last name",icon:t,placeholder:"John Doe",required:!0}),e.jsx(o,{label:"Email",tooltip:"We'll use this to send you important updates",icon:c,type:"email",placeholder:"john@example.com",required:!0}),e.jsx(o,{label:"Password",tooltip:"Must be at least 8 characters with numbers and symbols",tooltipPosition:"right",icon:D,type:"password",placeholder:"••••••••",required:!0}),e.jsx(o,{label:"Credit Card",tooltip:"Your payment information is encrypted and secure",icon:R,placeholder:"1234 5678 9012 3456",maxLength:19})]})},n={args:{label:"Custom Styled Field",tooltip:"This field has custom styling applied",labelClassName:"text-indigo-700 font-bold text-base",tooltipClassName:"bg-indigo-600 text-white",wrapperClassName:"bg-indigo-50 p-4 rounded-lg border border-indigo-200",className:"border-indigo-300 focus:ring-indigo-500",placeholder:"Custom styled input",icon:c}},d={render:()=>{const[q,I]=V.useState("");return e.jsx(o,{label:"Interactive Example",tooltip:"Type something to see the controlled behavior",value:q,onChange:A=>I(A.target.value),placeholder:"Start typing...",icon:t})}};var m,u,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    placeholder: 'Enter your email',
    type: 'email'
  }
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,b,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    tooltip: 'Password must be at least 8 characters with at least 1 number and 1 special character',
    type: 'password',
    placeholder: 'Enter your password'
  }
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,x,F;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    tooltip: 'We will never share your email with anyone else',
    icon: Mail,
    type: 'email',
    placeholder: 'Enter your email'
  }
}`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var T,v,S;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <FormField label="Small Size" tooltip="This is a small form field" size="sm" placeholder="Small input" icon={User} />
      <FormField label="Medium Size" tooltip="This is a medium form field" size="md" placeholder="Medium input" icon={User} />
      <FormField label="Large Size" tooltip="This is a large form field" size="lg" placeholder="Large input" icon={User} />
    </div>
}`,...(S=(v=i.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var w,C,E;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(M=(L=n.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var H,W,U;d.parameters={...d.parameters,docs:{...(H=d.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState('');
    return <FormField label="Interactive Example" tooltip="Type something to see the controlled behavior" value={value} onChange={e => setValue(e.target.value)} placeholder="Start typing..." icon={User} />;
  }
}`,...(U=(W=d.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const le=["Default","WithTooltip","WithIcon","SizeVariants","TooltipPositions","FormExamples","CustomStyling","Interactive"];export{n as CustomStyling,l as Default,p as FormExamples,d as Interactive,i as SizeVariants,s as TooltipPositions,a as WithIcon,r as WithTooltip,le as __namedExportsOrder,te as default};
