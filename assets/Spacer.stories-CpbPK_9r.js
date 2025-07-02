import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as v,r as f}from"./iframe-BbYVxIeR.js";import{c as b}from"./clsx-B-dksMZM.js";import{w as h}from"./classes-zVeSqKhV.js";const a=v.memo(f.forwardRef(({size:r="md",grow:n=!1,className:p,...g},u)=>{const x=r==="0"?"":`h-${h[r]}`;return e.jsx("div",{ref:u,className:b(n&&"flex-1",!n&&x,p),"aria-hidden":"true",...g})}));a.displayName="Spacer";a.__docgenInfo={description:`Spacer – flexible gap filler. Use inside flex layouts or as vertical rhythm helper.
Can render a fixed height or grow to fill available space in flex containers.
Useful for pushing content apart or adding vertical space between elements.`,methods:[],displayName:"Spacer",props:{size:{required:!1,tsType:{name:"union",raw:`| '0'
| 'xs'
| 'sm'
| 'md'
| 'lg'
| 'xl'
| '2xl'
| '3xl'
| '4xl'`,elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},grow:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const S={title:"Atoms/Layout/Spacer",component:a,args:{size:"lg"},argTypes:{size:{control:"select",options:["0","xs","sm","md","lg","xl","2xl","3xl","4xl"]},grow:{control:"boolean"}},tags:["autodocs"]},s={render:r=>e.jsxs("div",{className:"bg-gray-50 p-4",children:[e.jsx("div",{className:"bg-blue-200 p-2",children:"Above"}),e.jsx(a,{...r}),e.jsx("div",{className:"bg-blue-200 p-2",children:"Below"})]})},l={render:()=>e.jsxs("div",{className:"flex space-x-2 bg-gray-100 p-2",children:[e.jsx("div",{className:"bg-gray-300 p-2",children:"A"}),e.jsx(a,{grow:!0}),e.jsx("div",{className:"bg-gray-300 p-2",children:"B"})]}),parameters:{controls:{hideNoControlsWarning:!0}}};var o,t,i;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <div className="bg-gray-50 p-4">
      <div className="bg-blue-200 p-2">Above</div>
      <Spacer {...args as SpacerProps} />
      <div className="bg-blue-200 p-2">Below</div>
    </div>
}`,...(i=(t=s.parameters)==null?void 0:t.docs)==null?void 0:i.source}}};var c,d,m;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex space-x-2 bg-gray-100 p-2">
      <div className="bg-gray-300 p-2">A</div>
      <Spacer grow />
      <div className="bg-gray-300 p-2">B</div>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const A=["Playground","GrowInFlex"];export{l as GrowInFlex,s as Playground,A as __namedExportsOrder,S as default};
