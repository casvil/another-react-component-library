import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{D as l}from"./Divider-DleMKJB9.js";import{L as n}from"./Label-D1zlcN_X.js";import"./iframe-ESOGW_Ls.js";import"./clsx-B-dksMZM.js";const W={title:"atoms/Divider",component:l,tags:["autodocs"],argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},className:{control:"text"}},args:{orientation:"horizontal",className:"w-full my-4"}},a={args:{orientation:"horizontal"}},o={render:({className:r,orientation:c})=>e.jsx("div",{className:"flex items-center h-8",children:e.jsx(l,{orientation:c,className:r})}),args:{orientation:"vertical"}},s={render:r=>e.jsxs("div",{children:[e.jsx(n,{children:"Element 1"}),e.jsx(l,{orientation:r.orientation,className:r.className}),e.jsx(n,{children:"Element 2"})]}),args:{orientation:"horizontal",className:"h-24"}},t={render:({className:r,orientation:c})=>e.jsxs("div",{className:"flex items-center h-8",children:[e.jsx(n,{children:"Left"}),e.jsx(l,{orientation:c,className:r}),e.jsx(n,{children:"Right"})]}),args:{orientation:"vertical"}},i={args:{orientation:"horizontal",className:"border-red-500 border-2"}};var m,d,p;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var h,g,u;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    className,
    orientation
  }) => <div className="flex items-center h-8">
      <Divider orientation={orientation} className={className} />
    </div>,
  args: {
    orientation: 'vertical'
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var N,v,x;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div>
      <Label>Element 1</Label>
      <Divider orientation={args.orientation} className={args.className} />
      <Label>Element 2</Label>
    </div>,
  args: {
    orientation: 'horizontal',
    className: 'h-24'
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var b,L,j;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: ({
    className,
    orientation
  }) => <div className="flex items-center h-8">
      <Label>Left</Label>
      <Divider orientation={orientation} className={className} />
      <Label>Right</Label>
    </div>,
  args: {
    orientation: 'vertical'
  }
}`,...(j=(L=t.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var z,f,S;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    className: 'border-red-500 border-2'
  }
}`,...(S=(f=i.parameters)==null?void 0:f.docs)==null?void 0:S.source}}};const R=["Horizontal","Vertical","HorizontalWithLabels","VerticalWithLabels","CustomStyled"];export{i as CustomStyled,a as Horizontal,s as HorizontalWithLabels,o as Vertical,t as VerticalWithLabels,R as __namedExportsOrder,W as default};
