import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as z,r as k}from"./iframe-BbYVxIeR.js";import{c as T}from"./clsx-B-dksMZM.js";import{v as I}from"./classes-zVeSqKhV.js";const n=z.memo(k.forwardRef(({as:a="div",direction:v="vertical",gap:f="md",align:x="stretch",justify:y="start",className:h,...j},b)=>{const w=v==="vertical"?"flex-col":"flex-row",N={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"},S={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"};return e.jsx(a,{ref:b,className:T("flex",w,I(f),N[x],S[y],h),...j})}));n.displayName="Stack";n.__docgenInfo={description:`Stack – flexbox layout for vertical or horizontal stacking with consistent gap.
Ideal for lists, forms, toolbars, and any UI that needs evenly spaced children.
Supports alignment and justification props for flexible layouts.`,methods:[],displayName:"Stack",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'div'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:`| '0'
| 'xs'
| 'sm'
| 'md'
| 'lg'
| 'xl'
| '2xl'
| '3xl'
| '4xl'`,elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}]},description:"",defaultValue:{value:"'stretch'",computed:!1}},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'between'"},{name:"literal",value:"'around'"},{name:"literal",value:"'evenly'"}]},description:"",defaultValue:{value:"'start'",computed:!1}}}};const R={title:"Atoms/Layout/Stack",component:n,args:{direction:"vertical",gap:"md",align:"start",justify:"start",children:[e.jsx("div",{className:"bg-indigo-100 p-2",children:"Item 1"},"1"),e.jsx("div",{className:"bg-indigo-200 p-2",children:"Item 2"},"2"),e.jsx("div",{className:"bg-indigo-300 p-2",children:"Item 3"},"3")]},argTypes:{direction:{control:"radio",options:["vertical","horizontal"]},gap:{control:"select",options:["0","xs","sm","md","lg","xl","2xl","3xl","4xl"]},align:{control:"select",options:["start","center","end","stretch"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]}},tags:["autodocs"]},t={args:{direction:"horizontal",gap:"lg"}},r={args:{align:"center",justify:"center"}},l={render:()=>e.jsx("div",{className:"space-y-4",children:["0","xs","sm","md","lg","xl"].map(a=>e.jsxs(n,{direction:"horizontal",gap:a,children:[e.jsxs("div",{className:"bg-indigo-100 p-2",children:["gap-",a]}),e.jsxs("div",{className:"bg-indigo-100 p-2",children:["gap-",a]})]},a))}),parameters:{controls:{hideNoControlsWarning:!0}}};var s,i,o;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    direction: 'horizontal',
    gap: 'lg'
  }
}`,...(o=(i=t.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};var c,d,m;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    align: 'center',
    justify: 'center'
  }
}`,...(m=(d=r.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,p,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      {(['0', 'xs', 'sm', 'md', 'lg', 'xl'] as Spacing[]).map(g => <Stack key={g} direction="horizontal" gap={g}>
          <div className="bg-indigo-100 p-2">gap-{g}</div>
          <div className="bg-indigo-100 p-2">gap-{g}</div>
        </Stack>)}
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(g=(p=l.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const _=["Horizontal","CenterAligned","GapShowcase"];export{r as CenterAligned,l as GapShowcase,t as Horizontal,_ as __namedExportsOrder,R as default};
