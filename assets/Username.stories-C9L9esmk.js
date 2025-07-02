import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{U as r}from"./Username-Cj-7THAt.js";import"./iframe-BbYVxIeR.js";import"./clsx-B-dksMZM.js";import"./classes-zVeSqKhV.js";const H={title:"atoms/Username",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text"},size:{control:"select",options:["sm","md","lg"]},variant:{control:"select",options:["default","bold","muted"]},truncate:{control:"boolean"},maxLength:{control:"number"}},args:{children:"johndoe",size:"md",variant:"default",truncate:!1}},a={},s={args:{variant:"bold"}},o={args:{variant:"muted"}},n={args:{size:"sm"}},t={args:{size:"lg"}},c={args:{children:"verylongusername123",maxLength:10}},d={args:{children:"This is a very long username that should be truncated with CSS",truncate:!0},decorators:[O=>e.jsxs("div",{className:"w-32 border border-gray-200 p-2",children:[e.jsx("div",{className:"text-xs text-gray-500 mb-1",children:"Container width: 128px"}),e.jsx(O,{})]})]},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{variant:"default",children:"johndoe"}),e.jsx(r,{variant:"bold",children:"johndoe"}),e.jsx(r,{variant:"muted",children:"johndoe"})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(r,{size:"sm",children:"johndoe"}),e.jsx(r,{size:"md",children:"johndoe"}),e.jsx(r,{size:"lg",children:"johndoe"})]})};var l,u,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var g,h,x;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'bold'
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var v,j,S;o.parameters={...o.parameters,docs:{...(v=o.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: 'muted'
  }
}`,...(S=(j=o.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var f,b,U;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(U=(b=n.parameters)==null?void 0:b.docs)==null?void 0:U.source}}};var z,y,N;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(N=(y=t.parameters)==null?void 0:y.docs)==null?void 0:N.source}}};var L,w,T;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'verylongusername123',
    maxLength: 10
  }
}`,...(T=(w=c.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var A,C,M;d.parameters={...d.parameters,docs:{...(A=d.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'This is a very long username that should be truncated with CSS',
    truncate: true
  },
  decorators: [Story => <div className="w-32 border border-gray-200 p-2">
        <div className="text-xs text-gray-500 mb-1">Container width: 128px</div>
        <Story />
      </div>]
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var W,B,D;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Username variant="default">johndoe</Username>
      <Username variant="bold">johndoe</Username>
      <Username variant="muted">johndoe</Username>
    </div>
}`,...(D=(B=i.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var E,V,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <Username size="sm">johndoe</Username>
      <Username size="md">johndoe</Username>
      <Username size="lg">johndoe</Username>
    </div>
}`,...(_=(V=m.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};const I=["Default","Bold","Muted","Small","Large","WithMaxLength","WithTruncate","AllVariants","AllSizes"];export{m as AllSizes,i as AllVariants,s as Bold,a as Default,t as Large,o as Muted,n as Small,c as WithMaxLength,d as WithTruncate,I as __namedExportsOrder,H as default};
