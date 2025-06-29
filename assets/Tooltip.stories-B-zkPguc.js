import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{T as e}from"./Tooltip-teFxmosf.js";import{B as t}from"./Button-BQ3qSm0_.js";import{I as f}from"./IconButton-CzY4rw_n.js";import{X as B}from"./x-Bv0OYpnB.js";import"./iframe-9e6QjIOn.js";import"./clsx-B-dksMZM.js";import"./classes-BD7lNhBs.js";import"./createLucideIcon-nNOwPI7l.js";const I={title:"atoms/Tooltip",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"]},delay:{control:{type:"number",min:0,max:2e3,step:50}},className:{control:"text"}}},s={args:{id:"tooltip-1",content:"This is a tooltip",children:o.jsx(t,{label:"Hover me"}),position:"top",delay:150}},l={args:{children:o.jsx(t,{label:"Position"}),content:"Tooltip",id:"tooltip-positions",position:"top"},render:i=>o.jsxs("div",{className:"flex gap-8 items-center justify-center",children:[o.jsx(e,{...i,id:"tooltip-top",position:"top",content:"Tooltip on top",children:o.jsx(t,{label:"Top"})}),o.jsx(e,{...i,id:"tooltip-right",position:"right",content:"Tooltip on right",children:o.jsx(t,{label:"Right"})}),o.jsx(e,{...i,id:"tooltip-bottom",position:"bottom",content:"Tooltip on bottom",children:o.jsx(t,{label:"Bottom"})}),o.jsx(e,{...i,id:"tooltip-left",position:"left",content:"Tooltip on left",children:o.jsx(t,{label:"Left"})})]})},n={args:{id:"tooltip-delay",content:"Tooltip with 1 second delay",children:o.jsx(f,{icon:o.jsx(B,{}),"aria-label":"close"}),delay:1e3,position:"top"}},r={args:{id:"tooltip-custom",content:"Styled tooltip",children:o.jsx(t,{label:"Hover me"}),className:"bg-indigo-600 text-white px-3 py-2 rounded-lg shadow-xl",position:"top"}};var p,a,c;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-1',
    content: 'This is a tooltip',
    children: <Button label="Hover me"></Button>,
    position: 'top',
    delay: 150
  }
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var d,m,u;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: <Button label="Position"></Button>,
    content: 'Tooltip',
    id: 'tooltip-positions',
    position: 'top'
  },
  render: args => <div className="flex gap-8 items-center justify-center">
      <Tooltip {...args} id="tooltip-top" position="top" content="Tooltip on top">
        <Button label="Top"></Button>
      </Tooltip>
      <Tooltip {...args} id="tooltip-right" position="right" content="Tooltip on right">
        <Button label="Right"></Button>
      </Tooltip>
      <Tooltip {...args} id="tooltip-bottom" position="bottom" content="Tooltip on bottom">
        <Button label="Bottom"></Button>
      </Tooltip>
      <Tooltip {...args} id="tooltip-left" position="left" content="Tooltip on left">
        <Button label="Left"></Button>
      </Tooltip>
    </div>
}`,...(u=(m=l.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-delay',
    content: 'Tooltip with 1 second delay',
    children: <IconButton icon={<X />} aria-label="close" />,
    delay: 1000,
    position: 'top'
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var T,b,y;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-custom',
    content: 'Styled tooltip',
    children: <Button label="Hover me"></Button>,
    className: 'bg-indigo-600 text-white px-3 py-2 rounded-lg shadow-xl',
    position: 'top'
  }
}`,...(y=(b=r.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};const R=["Default","Positions","CustomDelay","WithCustomStyles"];export{n as CustomDelay,s as Default,l as Positions,r as WithCustomStyles,R as __namedExportsOrder,I as default};
