import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./iframe-i29B4WCl.js";import{c as H}from"./clsx-B-dksMZM.js";import{L as c}from"./Label-BnpzQARg.js";const a=w.forwardRef(({orientation:r="horizontal",className:o,...D},E)=>{const S=r==="horizontal";return e.jsx("hr",{ref:E,role:"separator","aria-orientation":r,className:H("border-gray-300 border-solid border",S?"h-px w-full":"w-px h-full mx-2",o),...D})});a.displayName="Divider";a.__docgenInfo={description:`Divider atom component.
Renders an accessible horizontal or vertical divider line,
fills the container's full width or height accordingly.`,methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const T={title:"atoms/Divider",component:a,tags:["autodocs"],argTypes:{orientation:{control:{type:"radio"},options:["horizontal","vertical"]},className:{control:"text"}},args:{orientation:"horizontal",className:"w-full my-4"}},t={args:{orientation:"horizontal"}},s={render:({className:r,orientation:o})=>e.jsx("div",{className:"flex items-center h-8",children:e.jsx(a,{orientation:o,className:r})}),args:{orientation:"vertical"}},i={render:r=>e.jsxs("div",{children:[e.jsx(c,{children:"Element 1"}),e.jsx(a,{orientation:r.orientation,className:r.className}),e.jsx(c,{children:"Element 2"})]}),args:{orientation:"horizontal",className:"h-24"}},n={render:({className:r,orientation:o})=>e.jsxs("div",{className:"flex items-center h-8",children:[e.jsx(c,{children:"Left"}),e.jsx(a,{orientation:o,className:r}),e.jsx(c,{children:"Right"})]}),args:{orientation:"vertical"}},l={args:{orientation:"horizontal",className:"border-red-500 border-2"}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    className,
    orientation
  }) => <div className="flex items-center h-8">
      <Divider orientation={orientation} className={className} />
    </div>,
  args: {
    orientation: 'vertical'
  }
}`,...(v=(u=s.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,x,N;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div>
      <Label>Element 1</Label>
      <Divider orientation={args.orientation} className={args.className} />
      <Label>Element 2</Label>
    </div>,
  args: {
    orientation: 'horizontal',
    className: 'h-24'
  }
}`,...(N=(x=i.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var f,b,z;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(z=(b=n.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var L,j,y;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    className: 'border-red-500 border-2'
  }
}`,...(y=(j=l.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};const q=["Horizontal","Vertical","HorizontalWithLabels","VerticalWithLabels","CustomStyled"];export{l as CustomStyled,t as Horizontal,i as HorizontalWithLabels,s as Vertical,n as VerticalWithLabels,q as __namedExportsOrder,T as default};
