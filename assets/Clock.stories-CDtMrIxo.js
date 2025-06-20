import{j as c}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-plP9v_Vp.js";import{T as R}from"./TimeDisplay-UsCbG3MO.js";import"./clsx-B-dksMZM.js";const r=n.forwardRef(({format:e="HH:mm:ss",className:A,bordered:E=!1,stop:l=!1},M)=>{const[_,q]=n.useState(()=>new Date);return n.useEffect(()=>{if(l)return;const w=setInterval(()=>{q(new Date)},1e3);return()=>clearInterval(w)},[l]),c.jsx(R,{ref:M,time:_,format:e,className:A,bordered:E})});r.displayName="Clock";r.__docgenInfo={description:"Clock molecule component.\nRenders a live-updating time string using TimeDisplay.\nIf `stop` is true, it stops updating.",methods:[],displayName:"Clock",props:{stop:{required:!1,tsType:{name:"boolean"},description:"If true, stops the internal clock updates",defaultValue:{value:"false",computed:!1}},format:{defaultValue:{value:"'HH:mm:ss'",computed:!1},required:!1},bordered:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Omit"]};const O={title:"molecules/Clock",component:r,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{format:{control:"select",options:["HH:mm:ss","HH:mm","mm:ss"]},bordered:{control:"boolean"},className:{control:!1}}},s={args:{format:"HH:mm:ss",bordered:!1}},a={args:{format:"HH:mm:ss",bordered:!0}},o={args:{format:"HH:mm",bordered:!1}},t={args:{format:"mm:ss",bordered:!1}},m={render:e=>c.jsx(r,{...e,className:"digital7 text-4xl border-3 px-3 py-0"}),args:{format:"mm:ss",bordered:!0}},d={render:e=>c.jsx(r,{...e,className:"digital7 text-4xl border-3 px-3 py-0"}),args:{format:"mm:ss",bordered:!0,stop:!0}};var p,u,i;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm:ss',
    bordered: false
  }
}`,...(i=(u=s.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var f,g,H;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm:ss',
    bordered: true
  }
}`,...(H=(g=a.parameters)==null?void 0:g.docs)==null?void 0:H.source}}};var b,x,y;o.parameters={...o.parameters,docs:{...(b=o.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    bordered: false
  }
}`,...(y=(x=o.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var S,C,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    format: 'mm:ss',
    bordered: false
  }
}`,...(k=(C=t.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var D,v,N;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Clock {...args} className="digital7 text-4xl border-3 px-3 py-0" />,
  args: {
    format: 'mm:ss',
    bordered: true
  }
}`,...(N=(v=m.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};var T,j,I;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <Clock {...args} className="digital7 text-4xl border-3 px-3 py-0" />,
  args: {
    format: 'mm:ss',
    bordered: true,
    stop: true
  }
}`,...(I=(j=d.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};const z=["Default","Bordered","HoursAndMinutes","MinutesAndSeconds","CustomStyleDigital7Font","Stopped"];export{a as Bordered,m as CustomStyleDigital7Font,s as Default,o as HoursAndMinutes,t as MinutesAndSeconds,d as Stopped,z as __namedExportsOrder,O as default};
