import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{U as s}from"./UserPreview-D9Y7434m.js";import"./iframe-DoDsO8uN.js";import"./clsx-B-dksMZM.js";import"./Avatar-ak_Z0AEe.js";import"./classes-CnWFQedi.js";import"./Username-D7cJa5_j.js";import"./StatusIndicator-C2lMiHZc.js";const me={title:"molecules/UserPreview",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},status:{control:"select",options:["online","offline","away","busy"]},showStatus:{control:"boolean"},showStatusLabel:{control:"boolean"},avatarSrc:{control:"text"},size:{control:"select",options:["sm","md","lg"]},layout:{control:"select",options:["horizontal","vertical"]},usernameVariant:{control:"select",options:["default","bold","muted"]},truncateUsername:{control:"boolean"},maxUsernameLength:{control:"number"}},args:{name:"John Doe",status:"online",showStatus:!0,showStatusLabel:!1,size:"md",layout:"horizontal",usernameVariant:"default",truncateUsername:!1}},a={},r={args:{avatarSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}},t={args:{layout:"vertical"}},o={args:{showStatusLabel:!0}},n={args:{showStatus:!1}},l={args:{usernameVariant:"bold"}},m={args:{usernameVariant:"muted"}},c={args:{name:"verylongusernamethatshouldbecapped",maxUsernameLength:12}},i={args:{size:"sm"}},u={args:{size:"lg"}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{name:"John Doe",status:"online",showStatusLabel:!0}),e.jsx(s,{name:"Jane Smith",status:"away",showStatusLabel:!0}),e.jsx(s,{name:"Bob Johnson",status:"busy",showStatusLabel:!0}),e.jsx(s,{name:"Alice Wilson",status:"offline",showStatusLabel:!0})]})},p={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx(s,{name:"John Doe",status:"online",layout:"horizontal",showStatusLabel:!0}),e.jsx(s,{name:"John Doe",status:"online",layout:"vertical",showStatusLabel:!0})]})},g={render:()=>e.jsxs("div",{className:"flex items-center gap-6 p-8 bg-gray-50",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"text-xs text-gray-500 font-medium",children:"Small"}),e.jsx(s,{name:"John",status:"online",size:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"text-xs text-gray-500 font-medium",children:"Medium"}),e.jsx(s,{name:"John Doe",status:"online",size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"text-xs text-gray-500 font-medium",children:"Large"}),e.jsx(s,{name:"John Doe Smith",status:"online",size:"lg"})]})]})};var h,x,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(f=(x=a.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var S,v,b;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,y,L;t.parameters={...t.parameters,docs:{...(w=t.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    layout: 'vertical'
  }
}`,...(L=(y=t.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var U,j,N;o.parameters={...o.parameters,docs:{...(U=o.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    showStatusLabel: true
  }
}`,...(N=(j=o.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var z,J,D;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    showStatus: false
  }
}`,...(D=(J=n.parameters)==null?void 0:J.docs)==null?void 0:D.source}}};var P,V,W;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    usernameVariant: 'bold'
  }
}`,...(W=(V=l.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var A,B,C;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    usernameVariant: 'muted'
  }
}`,...(C=(B=m.parameters)==null?void 0:B.docs)==null?void 0:C.source}}};var M,T,E;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    name: 'verylongusernamethatshouldbecapped',
    maxUsernameLength: 12
  }
}`,...(E=(T=c.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var I,_,O;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(O=(_=i.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var R,k,q;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(q=(k=u.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};var F,G,H;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <UserPreview name="John Doe" status="online" showStatusLabel />
      <UserPreview name="Jane Smith" status="away" showStatusLabel />
      <UserPreview name="Bob Johnson" status="busy" showStatusLabel />
      <UserPreview name="Alice Wilson" status="offline" showStatusLabel />
    </div>
}`,...(H=(G=d.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,Q,X;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <UserPreview name="John Doe" status="online" layout="horizontal" showStatusLabel />
      <UserPreview name="John Doe" status="online" layout="vertical" showStatusLabel />
    </div>
}`,...(X=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 p-8 bg-gray-50">
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 font-medium">Small</div>
        <UserPreview name="John" status="online" size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 font-medium">Medium</div>
        <UserPreview name="John Doe" status="online" size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 font-medium">Large</div>
        <UserPreview name="John Doe Smith" status="online" size="lg" />
      </div>
    </div>
}`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};const ce=["Default","WithImage","Vertical","WithStatusLabel","NoStatus","BoldUsername","MutedUsername","TruncatedUsername","Small","Large","AllStatuses","LayoutComparison","SizeComparison"];export{d as AllStatuses,l as BoldUsername,a as Default,u as Large,p as LayoutComparison,m as MutedUsername,n as NoStatus,g as SizeComparison,i as Small,c as TruncatedUsername,t as Vertical,r as WithImage,o as WithStatusLabel,ce as __namedExportsOrder,me as default};
