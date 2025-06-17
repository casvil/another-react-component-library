import{j as T}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-DtmuWCxD.js";import{T as E}from"./TimeDisplay-egtN7gPN.js";import"./clsx-B-dksMZM.js";const n=m.forwardRef(({format:t,className:k,bordered:v=!1},w)=>{const[I,j]=m.useState(new Date);return m.useEffect(()=>{const A=setInterval(()=>j(new Date),1e3);return()=>clearInterval(A)},[]),T.jsx(E,{ref:w,time:I.toISOString(),format:t,className:k,bordered:v})});n.__docgenInfo={description:`Clock molecule component.
Renders a live-updating time string using TimeDisplay.
Updates every second and supports the same formatting and styling props than TimeDisplay.`,methods:[],displayName:"Clock",props:{bordered:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const O={title:"molecules/Clock",component:n,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{format:{control:"select",options:["HH:mm:ss","HH:mm","mm:ss"]},bordered:{control:"boolean"},className:{control:!1}}},e={args:{format:"HH:mm:ss",bordered:!1}},r={args:{format:"HH:mm:ss",bordered:!0}},s={args:{format:"HH:mm",bordered:!1}},a={args:{format:"mm:ss",bordered:!1}},o={render:t=>T.jsx(n,{...t,className:"digital7 text-4xl border-3 px-3 py-0"}),args:{time:new Date,format:"mm:ss",bordered:!0}};var d,c,l;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    format: "HH:mm:ss",
    bordered: false
  }
}`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var i,p,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    format: "HH:mm:ss",
    bordered: true
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,H;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    format: "HH:mm",
    bordered: false
  }
}`,...(H=(g=s.parameters)==null?void 0:g.docs)==null?void 0:H.source}}};var b,x,y;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    format: "mm:ss",
    bordered: false
  }
}`,...(y=(x=a.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,D,C;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Clock {...args} className="digital7 text-4xl border-3 px-3 py-0" />,
  args: {
    time: new Date(),
    format: "mm:ss",
    bordered: true
  }
}`,...(C=(D=o.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};const R=["Default","Bordered","HoursAndMinutes","MinutesAndSeconds","CustomStyleDigital7Font"];export{r as Bordered,o as CustomStyleDigital7Font,e as Default,s as HoursAndMinutes,a as MinutesAndSeconds,R as __namedExportsOrder,O as default};
