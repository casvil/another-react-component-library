import{T as C}from"./TimeDisplay-BGp_n2q0.js";import"./jsx-runtime-D_zvdyIk.js";import"./iframe-BbYVxIeR.js";import"./clsx-B-dksMZM.js";const h={title:"atoms/TimeDisplay",component:C,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{time:{control:"date"},format:{control:"select",options:["HH:mm:ss","HH:mm","mm:ss"]},className:{control:!1},bordered:{control:"boolean"}}},e={args:{time:new Date,format:"HH:mm:ss"}},r={args:{time:new Date,format:"HH:mm"}},t={args:{time:new Date,format:"mm:ss"}},s={args:{time:new Date,format:"HH:mm:ss",bordered:!0}},a={args:{time:Date.UTC(2025,0,1,5,6,7),format:"HH:mm:ss",bordered:!0}},o={args:{time:new Date,format:"HH:mm:ss",bordered:!0,className:"digital7 text-3xl text-gray-300 border-gray-300 px-0 py-2"},parameters:{docs:{description:{story:"Uses a custom `digital-7` font (make sure to load it globally in your project)."}}}};var m,n,c;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    time: new Date(),
    format: 'HH:mm:ss'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    time: new Date(),
    format: 'HH:mm'
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,l,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    time: new Date(),
    format: 'mm:ss'
  }
}`,...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var H,f,D;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    time: new Date(),
    format: 'HH:mm:ss',
    bordered: true
  }
}`,...(D=(f=s.parameters)==null?void 0:f.docs)==null?void 0:D.source}}};var y,b,w;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    time: Date.UTC(2025, 0, 1, 5, 6, 7),
    format: 'HH:mm:ss',
    bordered: true
  }
}`,...(w=(b=a.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var x,S,T;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    time: new Date(),
    format: 'HH:mm:ss',
    bordered: true,
    className: 'digital7 text-3xl text-gray-300 border-gray-300 px-0 py-2'
  },
  parameters: {
    docs: {
      description: {
        story: 'Uses a custom \`digital-7\` font (make sure to load it globally in your project).'
      }
    }
  }
}`,...(T=(S=o.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};const j=["Default","HoursAndMinutes","MinutesAndSeconds","Bordered","WithDateUTC","CustomStyleDigital7Font"];export{s as Bordered,o as CustomStyleDigital7Font,e as Default,r as HoursAndMinutes,t as MinutesAndSeconds,a as WithDateUTC,j as __namedExportsOrder,h as default};
