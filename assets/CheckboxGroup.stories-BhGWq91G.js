import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as v,r as $}from"./iframe-pYW_qTbO.js";import{c as J}from"./clsx-B-dksMZM.js";import{L as K}from"./Label-BnpzQARg.js";import{C as M}from"./Checkbox-BzgVDSAm.js";import{u as Q}from"./useStableId-BdX7Nxsd.js";import"./size-BIjEKicz.js";const d=({label:r,options:p,value:g,defaultValue:D,onChange:m,name:W,direction:F="vertical",className:H,labelClassName:I,checkboxProps:_})=>{const b=g!==void 0,[E,L]=v.useState(D??[]),s=b?g:E,h=Q(W),f=r?`${h}-label`:void 0,P=v.useCallback(e=>B=>{let t;B.target.checked?t=[...s,e]:t=s.filter(U=>U!==e),b||L(t),m&&m(t)},[s,b,m]),R=F==="vertical"?"flex-col gap-2":"flex-row gap-4";return l.jsxs("div",{className:H,role:"group","aria-labelledby":f,children:[r&&l.jsx(K,{id:f,className:I,children:r}),l.jsx("div",{className:J("flex",R),children:p.map(e=>l.jsx(M,{label:e.label,checked:s.includes(e.value),onChange:P(e.value),name:h,disabled:e.disabled,..._},e.value))})]})};d.displayName="CheckboxGroup";d.__docgenInfo={description:`CheckboxGroup molecule component.
Composed by Label + multiple Checkbox components.
Aria and a11y compliant (uses role="group" and proper labeling). Uses Tailwind CSS for styling.
Supports controlled and uncontrolled usage. Supports custom styles via className prop.`,methods:[],displayName:"CheckboxGroup",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"CheckboxGroupOption"}],raw:"CheckboxGroupOption[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},checkboxProps:{required:!1,tsType:{name:"Omit",elements:[{name:"CheckboxProps"},{name:"union",raw:"'checked' | 'onChange' | 'label' | 'id' | 'disabled'",elements:[{name:"literal",value:"'checked'"},{name:"literal",value:"'onChange'"},{name:"literal",value:"'label'"},{name:"literal",value:"'id'"},{name:"literal",value:"'disabled'"}]}],raw:`Omit<
  CheckboxProps,
  'checked' | 'onChange' | 'label' | 'id' | 'disabled'
>`},description:""}}};const a=[{label:"Apple",value:"apple"},{label:"Banana",value:"banana"},{label:"Cherry",value:"cherry"}],se={title:"molecules/CheckboxGroup",component:d,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{label:"Fruits",options:a,defaultValue:["banana"]}},o={args:{options:a},render:()=>{const[r,p]=$.useState(["apple"]);return l.jsx(d,{label:"Controlled Fruits",options:a,value:r,onChange:p})}},i={args:{label:"Horizontal Group",options:a,direction:"horizontal"}},c={args:{label:"With Disabled Option",options:[...a,{label:"Watermelon",value:"watermelon",disabled:!0}],defaultValue:["cherry"]}},u={args:{label:"Styled Group",options:a,className:"bg-gray-50 p-4 rounded-lg",labelClassName:"text-indigo-700 font-bold"}};var y,C,x;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    label: 'Fruits',
    options,
    defaultValue: ['banana']
  }
}`,...(x=(C=n.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};var k,S,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    options
  },
  render: () => {
    const [value, setValue] = useState(['apple']);
    return <CheckboxGroup label="Controlled Fruits" options={options} value={value} onChange={setValue} />;
  }
}`,...(w=(S=o.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var G,N,T;i.parameters={...i.parameters,docs:{...(G=i.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    label: 'Horizontal Group',
    options,
    direction: 'horizontal'
  }
}`,...(T=(N=i.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var V,q,z;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    label: 'With Disabled Option',
    options: [...options, {
      label: 'Watermelon',
      value: 'watermelon',
      disabled: true
    }],
    defaultValue: ['cherry']
  }
}`,...(z=(q=c.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var j,O,A;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Styled Group',
    options,
    className: 'bg-gray-50 p-4 rounded-lg',
    labelClassName: 'text-indigo-700 font-bold'
  }
}`,...(A=(O=u.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const te=["Default","Controlled","Horizontal","WithDisabled","CustomStyles"];export{o as Controlled,u as CustomStyles,n as Default,i as Horizontal,c as WithDisabled,te as __namedExportsOrder,se as default};
