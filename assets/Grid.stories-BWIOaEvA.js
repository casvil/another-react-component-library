import{j as a}from"./jsx-runtime-D_zvdyIk.js";import{e as G,r as q}from"./iframe-BbYVxIeR.js";import{c as _}from"./clsx-B-dksMZM.js";import{v as b}from"./classes-zVeSqKhV.js";const t=G.memo(q.forwardRef(({as:s="div",cols:e=12,rows:n,gap:v="0",autoFlow:i,align:g="stretch",justify:f="stretch",className:x,...y},h)=>{const w=`grid-cols-${e}`,j=n?`grid-rows-${n}`:void 0,N=i?`auto-flow-${i}`.replace(" ","-"):void 0,T={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch"}[g],C={start:"justify-start",center:"justify-center",end:"justify-end",stretch:"justify-stretch"}[f];return a.jsx(s,{ref:h,className:_("grid",w,j,N,b(v),T,C,x),...y})}));t.displayName="Grid";t.__docgenInfo={description:`Grid – CSS Grid wrapper with shorthand props for common utilities.
Quickly create responsive, multi-column layouts with gap, alignment, and flow control.
Ideal for dashboards, card layouts, and complex page structures.`,methods:[],displayName:"Grid",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'div'",computed:!1}},cols:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:"",defaultValue:{value:"12",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:""},gap:{required:!1,tsType:{name:"union",raw:`| '0'
| 'xs'
| 'sm'
| 'md'
| 'lg'
| 'xl'
| '2xl'
| '3xl'
| '4xl'`,elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"}]},description:"",defaultValue:{value:"'0'",computed:!1}},autoFlow:{required:!1,tsType:{name:"union",raw:"'row' | 'column' | 'dense' | 'row dense' | 'column dense'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"},{name:"literal",value:"'dense'"},{name:"literal",value:"'row dense'"},{name:"literal",value:"'column dense'"}]},description:""},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}]},description:"",defaultValue:{value:"'stretch'",computed:!1}},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"}]},description:"",defaultValue:{value:"'stretch'",computed:!1}}}};const S={title:"Atoms/Layout/Grid",component:t,args:{cols:3,gap:"md",children:Array.from({length:6}).map((s,e)=>a.jsx("div",{className:"bg-teal-200 p-2 text-center",children:`Item ${e+1}`},e))},argTypes:{cols:{control:{type:"number",min:1,max:12,step:1}},gap:{control:"select",options:["0","xs","sm","md","lg","xl","2xl","3xl","4xl"]}},tags:["autodocs"]},l={args:{cols:2}},r={render:()=>a.jsx("div",{className:"space-y-4",children:a.jsx(t,{cols:1,gap:"sm",className:"sm:grid-cols-2 lg:grid-cols-4",children:Array.from({length:8}).map((s,e)=>a.jsx("div",{className:"bg-teal-300 p-2 text-center",children:e+1},e))})}),parameters:{controls:{hideNoControlsWarning:!0}}};var o,m,c;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    cols: 2
  }
}`,...(c=(m=l.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,d,p;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Grid cols={1} gap="sm" className="sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({
        length: 8
      }).map((_, i) => <div key={i} className="bg-teal-300 p-2 text-center">
            {i + 1}
          </div>)}
      </Grid>
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const $=["TwoColumn","Responsive"];export{r as Responsive,l as TwoColumn,$ as __namedExportsOrder,S as default};
