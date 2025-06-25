import{j as V}from"./jsx-runtime-D_zvdyIk.js";import{r as z}from"./iframe-Ds_X6DKR.js";import{C as S}from"./CheckboxGroup-DfdN-1TX.js";import"./clsx-B-dksMZM.js";import"./Label-BnpzQARg.js";import"./Checkbox-CCsiMEzB.js";import"./useStableId-DYXkd8vM.js";import"./size-DtCGJLJt.js";const e=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"}],O={title:"molecules/CheckboxGroup",component:S,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{label:"Fruits",options:e,defaultValue:["banana"]}},r={args:{options:e},render:()=>{const[v,G]=z.useState(["apple"]);return V.jsx(S,{label:"Controlled Fruits",options:e,value:v,onChange:G})}},o={args:{label:"Horizontal Group",options:e,direction:"horizontal"}},t={args:{label:"With Disabled Option",options:[...e,{label:"Watermelon",value:"watermelon",disabled:!0}],defaultValue:["cherry"]}},s={args:{label:"Styled Group",options:e,className:"bg-gray-50 p-4 rounded-lg",labelClassName:"text-indigo-700 font-bold"}};var l,n,p;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Fruits',
    options,
    defaultValue: ['banana']
  }
}`,...(p=(n=a.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var u,i,c;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    options
  },
  render: () => {
    const [value, setValue] = useState(['apple']);
    return <CheckboxGroup label="Controlled Fruits" options={options} value={value} onChange={setValue} />;
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,m,b;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Horizontal Group',
    options,
    direction: 'horizontal'
  }
}`,...(b=(m=o.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var g,h,C;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    label: 'With Disabled Option',
    options: [...options, {
      label: 'Watermelon',
      value: 'watermelon',
      disabled: true
    }],
    defaultValue: ['cherry']
  }
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var f,x,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Styled Group',
    options,
    className: 'bg-gray-50 p-4 rounded-lg',
    labelClassName: 'text-indigo-700 font-bold'
  }
}`,...(y=(x=s.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};const w=["Default","Controlled","Horizontal","WithDisabled","CustomStyles"];export{r as Controlled,s as CustomStyles,a as Default,o as Horizontal,t as WithDisabled,w as __namedExportsOrder,O as default};
