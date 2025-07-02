import{j as s}from"./jsx-runtime-D_zvdyIk.js";import{S as e}from"./StatusIndicator-BrwhyEZ9.js";import"./iframe-BbYVxIeR.js";import"./clsx-B-dksMZM.js";import"./classes-zVeSqKhV.js";const Q={title:"atoms/StatusIndicator",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["online","offline","away","busy"]},size:{control:"select",options:["sm","md","lg"]},showLabel:{control:"boolean"}},args:{status:"online",size:"md",showLabel:!1}},a={},r={args:{showLabel:!0}},t={args:{status:"online",showLabel:!0}},o={args:{status:"offline",showLabel:!0}},n={args:{status:"away",showLabel:!0}},c={args:{status:"busy",showLabel:!0}},u={args:{size:"sm",showLabel:!0}},l={args:{size:"md",showLabel:!0}},i={args:{size:"lg",showLabel:!0}},m={render:()=>s.jsxs("div",{className:"flex flex-col gap-4",children:[s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(e,{status:"online",showLabel:!0}),s.jsx(e,{status:"offline",showLabel:!0}),s.jsx(e,{status:"away",showLabel:!0}),s.jsx(e,{status:"busy",showLabel:!0})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(e,{status:"online"}),s.jsx(e,{status:"offline"}),s.jsx(e,{status:"away"}),s.jsx(e,{status:"busy"})]})]})};var d,p,g;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var b,w,f;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    showLabel: true
  }
}`,...(f=(w=r.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var h,L,S;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    status: 'online',
    showLabel: true
  }
}`,...(S=(L=t.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var x,y,j;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    status: 'offline',
    showLabel: true
  }
}`,...(j=(y=o.parameters)==null?void 0:y.docs)==null?void 0:j.source}}};var I,v,z;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: 'away',
    showLabel: true
  }
}`,...(z=(v=n.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var N,O,A;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'busy',
    showLabel: true
  }
}`,...(A=(O=c.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};var B,D,E;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    showLabel: true
  }
}`,...(E=(D=u.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var M,W,_;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: 'md',
    showLabel: true
  }
}`,...(_=(W=l.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var R,T,k;i.parameters={...i.parameters,docs:{...(R=i.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    showLabel: true
  }
}`,...(k=(T=i.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var q,C,F;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <StatusIndicator status="online" showLabel />
        <StatusIndicator status="offline" showLabel />
        <StatusIndicator status="away" showLabel />
        <StatusIndicator status="busy" showLabel />
      </div>
      <div className="flex items-center gap-4">
        <StatusIndicator status="online" />
        <StatusIndicator status="offline" />
        <StatusIndicator status="away" />
        <StatusIndicator status="busy" />
      </div>
    </div>
}`,...(F=(C=m.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};const U=["Default","WithLabel","Online","Offline","Away","Busy","Small","Medium","Large","AllStatuses"];export{m as AllStatuses,n as Away,c as Busy,a as Default,i as Large,l as Medium,o as Offline,t as Online,u as Small,r as WithLabel,U as __namedExportsOrder,Q as default};
