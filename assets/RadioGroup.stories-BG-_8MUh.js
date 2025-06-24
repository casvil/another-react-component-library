import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as y}from"./iframe-B2RirJys.js";import{c as ue}from"./clsx-B-dksMZM.js";import{L as de}from"./Label-BnpzQARg.js";import{R as ce}from"./Radio-wkTCv9G5.js";import{u as pe}from"./useStableId-Ci1xiXW7.js";import"./size-7vYuislZ.js";const g=({label:a,options:b,value:l,defaultValue:Q,onChange:v,name:X,direction:Z="vertical",className:ee,labelClassName:ae,radioProps:re})=>{const f=l!==void 0,[le,oe]=y.useState(Q??""),se=f?l:le,h=pe(X),S=a?`${h}-label`:void 0,ne=y.useCallback(e=>ie=>{ie.target.checked&&(f||oe(e),v&&v(e))},[f,v]),te=Z==="vertical"?"flex-col gap-2":"flex-row gap-4";return r.jsxs("div",{className:ee,role:"radiogroup","aria-labelledby":S,children:[a&&r.jsx(de,{id:S,className:ae,children:a}),r.jsx("div",{className:ue("flex",te),children:b.map(e=>r.jsx(ce,{label:e.label,checked:se===e.value,onChange:ne(e.value),name:h,value:e.value,disabled:e.disabled,...re},e.value))})]})};g.displayName="RadioGroup";g.__docgenInfo={description:`RadioGroup molecule component.
Composed by Label + multiple Radio components.
Aria and a11y compliant (uses role="radiogroup" and proper labeling). Uses Tailwind CSS for styling.
Supports controlled and uncontrolled usage. Supports custom styles via className prop.`,methods:[],displayName:"RadioGroup",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioGroupOption"}],raw:"RadioGroupOption[]"},description:""},value:{required:!1,tsType:{name:"string"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},name:{required:!1,tsType:{name:"string"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},radioProps:{required:!1,tsType:{name:"Omit",elements:[{name:"RadioProps"},{name:"union",raw:"'checked' | 'onChange' | 'label' | 'id' | 'disabled'",elements:[{name:"literal",value:"'checked'"},{name:"literal",value:"'onChange'"},{name:"literal",value:"'label'"},{name:"literal",value:"'id'"},{name:"literal",value:"'disabled'"}]}],raw:`Omit<
  RadioProps,
  'checked' | 'onChange' | 'label' | 'id' | 'disabled'
>`},description:""}}};const Se={title:"molecules/RadioGroup",component:g,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Choose your favorite color",options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green"},{label:"Yellow",value:"yellow"}]},argTypes:{direction:{control:"select",options:["vertical","horizontal"],description:"Layout direction for radio options"},value:{control:"select",options:["red","blue","green","yellow"],description:"Controlled value (selected option)"},defaultValue:{control:"select",options:["red","blue","green","yellow"],description:"Default value for uncontrolled usage"},onChange:{action:"changed",description:"Callback when selection changes"}}},o={},s={args:{defaultValue:"blue"}},n={render:a=>{const[b,l]=y.useState(a.value);return r.jsx(g,{...a,value:b,onChange:l})},args:{value:"green"}},t={args:{direction:"horizontal"}},i={args:{options:[{label:"Red",value:"red"},{label:"Blue",value:"blue"},{label:"Green",value:"green",disabled:!0},{label:"Yellow",value:"yellow"}]}},u={args:{className:"p-4 border border-gray-300 rounded-lg",labelClassName:"text-lg font-bold text-blue-600",radioProps:{size:"lg",wrapperClassName:"hover:bg-gray-50 p-2 rounded"}}},d={args:{radioProps:{size:"sm"}}},c={args:{radioProps:{size:"lg"}}},p={args:{label:void 0}},m={args:{label:"Select your preferred programming language",options:[{label:"JavaScript",value:"js"},{label:"TypeScript",value:"ts"},{label:"Python",value:"python"},{label:"Java",value:"java"},{label:"C++",value:"cpp"},{label:"Rust",value:"rust"},{label:"Go",value:"go"},{label:"Swift",value:"swift"}],direction:"horizontal"}};var C,w,R;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:"{}",...(R=(w=o.parameters)==null?void 0:w.docs)==null?void 0:R.source}}};var z,x,N;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    defaultValue: 'blue'
  }
}`,...(N=(x=s.parameters)==null?void 0:x.docs)==null?void 0:N.source}}};var T,G,V;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState(args.value);
    return <RadioGroup {...args} value={value} onChange={setValue} />;
  },
  args: {
    value: 'green'
  }
}`,...(V=(G=n.parameters)==null?void 0:G.docs)==null?void 0:V.source}}};var j,P,q;t.parameters={...t.parameters,docs:{...(j=t.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal'
  }
}`,...(q=(P=t.parameters)==null?void 0:P.docs)==null?void 0:q.source}}};var O,L,k;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    options: [{
      label: 'Red',
      value: 'red'
    }, {
      label: 'Blue',
      value: 'blue'
    }, {
      label: 'Green',
      value: 'green',
      disabled: true
    }, {
      label: 'Yellow',
      value: 'yellow'
    }]
  }
}`,...(k=(L=i.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var D,I,J;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    className: 'p-4 border border-gray-300 rounded-lg',
    labelClassName: 'text-lg font-bold text-blue-600',
    radioProps: {
      size: 'lg',
      wrapperClassName: 'hover:bg-gray-50 p-2 rounded'
    }
  }
}`,...(J=(I=u.parameters)==null?void 0:I.docs)==null?void 0:J.source}}};var W,_,B;d.parameters={...d.parameters,docs:{...(W=d.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    radioProps: {
      size: 'sm'
    }
  }
}`,...(B=(_=d.parameters)==null?void 0:_.docs)==null?void 0:B.source}}};var Y,A,E;c.parameters={...c.parameters,docs:{...(Y=c.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    radioProps: {
      size: 'lg'
    }
  }
}`,...(E=(A=c.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var H,M,U;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    label: undefined
  }
}`,...(U=(M=p.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var $,F,K;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Select your preferred programming language',
    options: [{
      label: 'JavaScript',
      value: 'js'
    }, {
      label: 'TypeScript',
      value: 'ts'
    }, {
      label: 'Python',
      value: 'python'
    }, {
      label: 'Java',
      value: 'java'
    }, {
      label: 'C++',
      value: 'cpp'
    }, {
      label: 'Rust',
      value: 'rust'
    }, {
      label: 'Go',
      value: 'go'
    }, {
      label: 'Swift',
      value: 'swift'
    }],
    direction: 'horizontal'
  }
}`,...(K=(F=m.parameters)==null?void 0:F.docs)==null?void 0:K.source}}};const Ce=["Default","WithDefaultValue","Controlled","Horizontal","WithDisabledOption","CustomStyling","SizeVariants","LargeSize","NoLabel","ManyOptions"];export{n as Controlled,u as CustomStyling,o as Default,t as Horizontal,c as LargeSize,m as ManyOptions,p as NoLabel,d as SizeVariants,s as WithDefaultValue,i as WithDisabledOption,Ce as __namedExportsOrder,Se as default};
