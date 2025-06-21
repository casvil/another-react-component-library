import{j as t}from"./jsx-runtime-D_zvdyIk.js";import{r as c,R as h}from"./iframe-CsE_Dzsg.js";import{c as H}from"./clsx-B-dksMZM.js";import{B as e}from"./Button-B4VkxrKM.js";import{I as P,X as V}from"./IconButton-CpwgLod_.js";import"./size-C63hv48t.js";import"./createLucideIcon-BX-ERhqh.js";const s=({children:o,content:E,className:q,delay:C=150,id:d,position:D="top"})=>{const[p,m]=c.useState(!1),i=c.useRef(void 0),u=()=>{i.current=setTimeout(()=>m(!0),C)},f=()=>{i.current&&(clearTimeout(i.current),i.current=void 0),p&&m(!1)};c.useEffect(()=>()=>{i.current&&clearTimeout(i.current)},[]);const I={top:"bottom-full mb-2 left-1/2 transform -translate-x-1/2",bottom:"top-full mt-2 left-1/2 transform -translate-x-1/2",left:"right-full mr-2 top-1/2 transform -translate-y-1/2",right:"left-full ml-2 top-1/2 transform -translate-y-1/2"};return t.jsxs("div",{className:"relative inline-block",onMouseEnter:u,onMouseLeave:f,onFocus:u,onBlur:f,children:[h.isValidElement(o)&&h.cloneElement(o,{"aria-describedby":p?d:void 0}),p&&t.jsx("div",{id:d,role:"tooltip",className:H("absolute z-10 px-2 py-1 rounded bg-gray-800 text-white text-xs whitespace-nowrap shadow-lg",I[D],q),children:E})]})};s.__docgenInfo={description:`Tooltip atom component.
Displays a tooltip with customizable content and position on hover or focus.
Adds ARIA attributes for accessibility and supports configurable show delay.`,methods:[],displayName:"Tooltip",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},content:{required:!0,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},delay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},id:{required:!0,tsType:{name:"string"},description:""},position:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}}}};const k={title:"atoms/Tooltip",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{position:{control:"select",options:["top","bottom","left","right"]},delay:{control:{type:"number",min:0,max:2e3,step:50}},className:{control:"text"}}},l={args:{id:"tooltip-1",content:"This is a tooltip",children:t.jsx(e,{label:"Hover me"}),position:"top",delay:150}},n={args:{children:t.jsx(e,{label:"Position"}),content:"Tooltip",id:"tooltip-positions",position:"top"},render:o=>t.jsxs("div",{className:"flex gap-8 items-center justify-center",children:[t.jsx(s,{...o,id:"tooltip-top",position:"top",content:"Tooltip on top",children:t.jsx(e,{label:"Top"})}),t.jsx(s,{...o,id:"tooltip-right",position:"right",content:"Tooltip on right",children:t.jsx(e,{label:"Right"})}),t.jsx(s,{...o,id:"tooltip-bottom",position:"bottom",content:"Tooltip on bottom",children:t.jsx(e,{label:"Bottom"})}),t.jsx(s,{...o,id:"tooltip-left",position:"left",content:"Tooltip on left",children:t.jsx(e,{label:"Left"})})]})},r={args:{id:"tooltip-delay",content:"Tooltip with 1 second delay",children:t.jsx(P,{icon:t.jsx(V,{}),"aria-label":"close"}),delay:1e3,position:"top"}},a={args:{id:"tooltip-custom",content:"Styled tooltip",children:t.jsx(e,{label:"Hover me"}),className:"bg-indigo-600 text-white px-3 py-2 rounded-lg shadow-xl",position:"top"}};var g,b,T;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-1',
    content: 'This is a tooltip',
    children: <Button label="Hover me"></Button>,
    position: 'top',
    delay: 150
  }
}`,...(T=(b=l.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};var x,y,v;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(v=(y=n.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var B,j,w;r.parameters={...r.parameters,docs:{...(B=r.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-delay',
    content: 'Tooltip with 1 second delay',
    children: <IconButton icon={<X />} aria-label="close" />,
    delay: 1000,
    position: 'top'
  }
}`,...(w=(j=r.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var N,R,S;a.parameters={...a.parameters,docs:{...(N=a.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    id: 'tooltip-custom',
    content: 'Styled tooltip',
    children: <Button label="Hover me"></Button>,
    className: 'bg-indigo-600 text-white px-3 py-2 rounded-lg shadow-xl',
    position: 'top'
  }
}`,...(S=(R=a.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};const F=["Default","Positions","CustomDelay","WithCustomStyles"];export{r as CustomDelay,l as Default,n as Positions,a as WithCustomStyles,F as __namedExportsOrder,k as default};
