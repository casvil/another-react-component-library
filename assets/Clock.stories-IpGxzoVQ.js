import{j as D}from"./jsx-runtime-D_zvdyIk.js";import{C as d}from"./Clock-DRNHfnkC.js";import"./iframe-BbYVxIeR.js";import"./TimeDisplay-BGp_n2q0.js";import"./clsx-B-dksMZM.js";const O={title:"molecules/Clock",component:d,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{format:{control:"select",options:["HH:mm:ss","HH:mm","mm:ss"]},bordered:{control:"boolean"},className:{control:!1}}},r={args:{format:"HH:mm:ss",bordered:!1}},e={args:{format:"HH:mm:ss",bordered:!0}},s={args:{format:"HH:mm",bordered:!1}},o={args:{format:"mm:ss",bordered:!1}},a={render:m=>D.jsx(d,{...m,className:"digital7 text-4xl border-3 px-3 py-0"}),args:{format:"mm:ss",bordered:!0}},t={render:m=>D.jsx(d,{...m,className:"digital7 text-4xl border-3 px-3 py-0"}),args:{format:"mm:ss",bordered:!0,stop:!0}};var c,n,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm:ss',
    bordered: false
  }
}`,...(p=(n=r.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var l,u,i;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm:ss',
    bordered: true
  }
}`,...(i=(u=e.parameters)==null?void 0:u.docs)==null?void 0:i.source}}};var g,f,b;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    format: 'HH:mm',
    bordered: false
  }
}`,...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var x,H,S;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    format: 'mm:ss',
    bordered: false
  }
}`,...(S=(H=o.parameters)==null?void 0:H.docs)==null?void 0:S.source}}};var y,C,N;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => <Clock {...args} className="digital7 text-4xl border-3 px-3 py-0" />,
  args: {
    format: 'mm:ss',
    bordered: true
  }
}`,...(N=(C=a.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var j,k,A;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => <Clock {...args} className="digital7 text-4xl border-3 px-3 py-0" />,
  args: {
    format: 'mm:ss',
    bordered: true,
    stop: true
  }
}`,...(A=(k=t.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};const R=["Default","Bordered","HoursAndMinutes","MinutesAndSeconds","CustomStyleDigital7Font","Stopped"];export{e as Bordered,a as CustomStyleDigital7Font,r as Default,s as HoursAndMinutes,o as MinutesAndSeconds,t as Stopped,R as __namedExportsOrder,O as default};
