import{j as C}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-BkINPk9u.js";import{T as q}from"./TimeDisplay-TQm3f_Uq.js";import"./clsx-B-dksMZM.js";const m=n.forwardRef(({format:o,className:w,bordered:k=!1},v)=>{const[I,N]=n.useState(new Date);return n.useEffect(()=>{const j=setInterval(()=>N(new Date),1e3);return()=>clearInterval(j)},[]),C.jsx(q,{ref:v,time:I.toISOString(),format:o,className:w,bordered:k})});m.__docgenInfo={description:`Clock molecule component.
Renders a live-updating time string using TimeDisplay.
Updates every second and supports the same formatting and styling props than TimeDisplay.`,methods:[],displayName:"Clock",props:{time:{required:!0,tsType:{name:"union",raw:"Date | string | number",elements:[{name:"Date"},{name:"string"},{name:"number"}]},description:""},format:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const h={title:"molecules/Clock",component:m,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{format:{control:"select",options:["HH:mm:ss","HH:mm","mm:ss"]},bordered:{control:"boolean"},className:{control:!1}}},e={args:{format:"HH:mm:ss",bordered:!1}},r={args:{format:"HH:mm:ss",bordered:!0}},s={args:{format:"HH:mm",bordered:!1}},a={args:{format:"mm:ss",bordered:!1}},t={render:o=>C.jsx(m,{...o,className:"digital7 text-4xl border-3 px-3 py-0"}),args:{time:new Date,format:"mm:ss",bordered:!0}};var d,c,i;e.parameters={...e.parameters,docs:{...(d=e.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm:ss',
    bordered: false
  }
}`,...(i=(c=e.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,p,u;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm:ss',
    bordered: true
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var f,g,b;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    bordered: false
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var H,y,x;a.parameters={...a.parameters,docs:{...(H=a.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    format: 'mm:ss',
    bordered: false
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var D,S,T;t.parameters={...t.parameters,docs:{...(D=t.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Clock {...args} className="digital7 text-4xl border-3 px-3 py-0" />,
  args: {
    time: new Date(),
    format: 'mm:ss',
    bordered: true
  }
}`,...(T=(S=t.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const R=["Default","Bordered","HoursAndMinutes","MinutesAndSeconds","CustomStyleDigital7Font"];export{r as Bordered,t as CustomStyleDigital7Font,e as Default,s as HoursAndMinutes,a as MinutesAndSeconds,R as __namedExportsOrder,h as default};
