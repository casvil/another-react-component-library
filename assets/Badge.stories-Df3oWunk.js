import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{B as r}from"./Badge-Dccq6mCt.js";import"./iframe-DoDsO8uN.js";import"./clsx-B-dksMZM.js";import"./classes-CnWFQedi.js";const re={title:"atoms/Badge",component:r,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"New"},argTypes:{intent:{control:{type:"select"},options:["default","success","error","warning","info"],description:"Intent/semantic style of the badge",defaultValue:"default"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the badge",defaultValue:"md"},className:{control:{type:"text"},description:"Custom Tailwind CSS classes"},children:{control:{type:"text"},description:"Content inside the badge"}}},s={},a={args:{children:"Success",intent:"success"}},n={args:{children:"Warning",intent:"warning"}},t={args:{children:"Error",intent:"error"}},o={args:{children:"Info",intent:"info"}},d={args:{children:"Custom",className:"px-3 bg-purple-100 text-purple-800 border border-purple-300"}},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{className:"bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg",children:"Gradient"}),e.jsx(r,{className:"bg-black text-white shadow-md",children:"Dark"}),e.jsx(r,{className:"border-2 border-blue-500 bg-transparent text-blue-500 font-bold",children:"Outline"}),e.jsx(r,{className:"bg-yellow-300 text-black border border-yellow-600 rounded-none",children:"Sharp"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{size:"sm",className:"bg-indigo-100 text-indigo-800 uppercase tracking-wider",children:"Small Custom"}),e.jsx(r,{size:"lg",className:"bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full shadow-lg",children:"Large Custom"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(r,{className:"animate-pulse bg-red-100 text-red-800",children:"Animated"}),e.jsx(r,{className:"transform hover:scale-110 transition-transform bg-blue-100 text-blue-800 cursor-pointer",children:"Hoverable"})]})]})},i={args:{children:"Small",size:"sm"}},l={args:{children:"Medium",size:"md"}},m={args:{children:"Large",size:"lg"}},g={render:()=>e.jsxs("div",{className:"space-x-2",children:[e.jsx(r,{intent:"default",children:"Default"}),e.jsx(r,{intent:"info",children:"Info"}),e.jsx(r,{intent:"success",children:"Success"}),e.jsx(r,{intent:"warning",children:"Warning"}),e.jsx(r,{intent:"error",children:"Error"})]})},p={render:()=>e.jsxs("div",{className:"space-x-2",children:[e.jsx(r,{size:"sm",children:"Small"}),e.jsx(r,{size:"md",children:"Medium"}),e.jsx(r,{size:"lg",children:"Large"})]})};var u,x,h;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(x=s.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var f,b,S;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    children: 'Success',
    intent: 'success'
  }
}`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var B,N,w;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Warning',
    intent: 'warning'
  }
}`,...(w=(N=n.parameters)==null?void 0:N.docs)==null?void 0:w.source}}};var j,v,z;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'Error',
    intent: 'error'
  }
}`,...(z=(v=t.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var y,C,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'Info',
    intent: 'info'
  }
}`,...(k=(C=o.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var I,A,E;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: 'Custom',
    className: 'px-3 bg-purple-100 text-purple-800 border border-purple-300'
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,D,M;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <Badge className="bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg">
          Gradient
        </Badge>
        <Badge className="bg-black text-white shadow-md">Dark</Badge>
        <Badge className="border-2 border-blue-500 bg-transparent text-blue-500 font-bold">
          Outline
        </Badge>
        <Badge className="bg-yellow-300 text-black border border-yellow-600 rounded-none">
          Sharp
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge size="sm" className="bg-indigo-100 text-indigo-800 uppercase tracking-wider">
          Small Custom
        </Badge>
        <Badge size="lg" className="bg-emerald-100 text-emerald-800 px-6 py-2 rounded-full shadow-lg">
          Large Custom
        </Badge>
      </div>

      <div className="flex flex-wrap gap-2">
        <Badge className="animate-pulse bg-red-100 text-red-800">
          Animated
        </Badge>
        <Badge className="transform hover:scale-110 transition-transform bg-blue-100 text-blue-800 cursor-pointer">
          Hoverable
        </Badge>
      </div>
    </div>
}`,...(M=(D=c.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var W,O,G;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'Small',
    size: 'sm'
  }
}`,...(G=(O=i.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var H,T,V;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    children: 'Medium',
    size: 'md'
  }
}`,...(V=(T=l.parameters)==null?void 0:T.docs)==null?void 0:V.source}}};var _,R,q;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'Large',
    size: 'lg'
  }
}`,...(q=(R=m.parameters)==null?void 0:R.docs)==null?void 0:q.source}}};var F,J,K;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="space-x-2">
      <Badge intent="default">Default</Badge>
      <Badge intent="info">Info</Badge>
      <Badge intent="success">Success</Badge>
      <Badge intent="warning">Warning</Badge>
      <Badge intent="error">Error</Badge>
    </div>
} satisfies StoryObj<typeof meta>`,...(K=(J=g.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var P,Q,U;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <div className="space-x-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
} satisfies StoryObj<typeof meta>`,...(U=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};const se=["Default","Success","Warning","Error","Info","CustomStyle","AdvancedCustomization","Small","Medium","Large","AllIntents","AllSizes"];export{c as AdvancedCustomization,g as AllIntents,p as AllSizes,d as CustomStyle,s as Default,t as Error,o as Info,m as Large,l as Medium,i as Small,a as Success,n as Warning,se as __namedExportsOrder,re as default};
