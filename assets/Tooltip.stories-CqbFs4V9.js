import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as I,R as f}from"./iframe-DVWSAZO_.js";import{c as H}from"./clsx-B-dksMZM.js";import{B as e}from"./Button-DSWi3Wj_.js";import{I as P,X as V}from"./IconButton-DWClV1A_.js";import"./createLucideIcon-nUuCcPUO.js";const i=({children:o,content:R,className:q,delay:E=150,id:r,position:C="top"})=>{const[p,c]=I.useState(!1);let d;const m=()=>{d=setTimeout(()=>c(!0),E)},u=()=>{clearTimeout(d),c(!1)},D={top:"bottom-full mb-2 left-1/2 transform -translate-x-1/2",bottom:"top-full mt-2 left-1/2 transform -translate-x-1/2",left:"right-full mr-2 top-1/2 transform -translate-y-1/2",right:"left-full ml-2 top-1/2 transform -translate-y-1/2"};return t.jsxs("div",{className:"relative inline-block",onMouseEnter:m,onMouseLeave:u,onFocus:m,onBlur:u,children:[f.isValidElement(o)&&f.cloneElement(o,{"aria-describedby":p?r:void 0}),p&&t.jsx("div",{id:r,role:"tooltip",className:H("absolute z-10 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap shadow-lg",D[C],q),children:R})]})};i.__docgenInfo={description:`Tooltip atom component.
Displays a tooltip with customizable content and position on hover or focus.
Adds ARIA attributes for accessibility and supports configurable show delay.`,methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},id:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}}}};const X={title:"atoms/Tooltip",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"]},delay:{control:{type:"number",min:0,max:2e3,step:50}},className:{control:"text"}}},s={args:{id:"tooltip-1",content:"This is a tooltip",children:t.jsx(e,{label:"Hover me"}),position:"top",delay:150}},l={args:{children:t.jsx(e,{label:"Position"}),content:"Tooltip",id:"tooltip-positions",position:"top"},render:o=>t.jsxs("div",{className:"flex gap-8 items-center justify-center",children:[t.jsx(i,{...o,id:"tooltip-top",position:"top",content:"Tooltip on top",children:t.jsx(e,{label:"Top"})}),t.jsx(i,{...o,id:"tooltip-right",position:"right",content:"Tooltip on right",children:t.jsx(e,{label:"Right"})}),t.jsx(i,{...o,id:"tooltip-bottom",position:"bottom",content:"Tooltip on bottom",children:t.jsx(e,{label:"Bottom"})}),t.jsx(i,{...o,id:"tooltip-left",position:"left",content:"Tooltip on left",children:t.jsx(e,{label:"Left"})})]})},n={args:{id:"tooltip-delay",content:"Tooltip with 1 second delay",children:t.jsx(P,{icon:t.jsx(V,{}),"aria-label":"close"}),delay:1e3,position:"top"}},a={args:{id:"tooltip-custom",content:"Styled tooltip",children:t.jsx(e,{label:"Hover me"}),className:"bg-indigo-600 text-white px-3 py-2 rounded-lg shadow-xl",position:"top"}};var h,g,b;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-1',
    content: 'This is a tooltip',
    children: <Button label="Hover me"></Button>,
    position: 'top',
    delay: 150
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var T,x,y;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var B,j,v;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-delay',
    content: 'Tooltip with 1 second delay',
    children: <IconButton icon={<X />} aria-label="close" />,
    delay: 1000,
    position: 'top'
  }
}`,...(v=(j=n.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var w,N,S;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-custom',
    content: 'Styled tooltip',
    children: <Button label="Hover me"></Button>,
    className: 'bg-indigo-600 text-white px-3 py-2 rounded-lg shadow-xl',
    position: 'top'
  }
}`,...(S=(N=a.parameters)==null?void 0:N.docs)==null?void 0:S.source}}};const k=["Default","Positions","CustomDelay","WithCustomStyles"];export{n as CustomDelay,s as Default,l as Positions,a as WithCustomStyles,k as __namedExportsOrder,X as default};
