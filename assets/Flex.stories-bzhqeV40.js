import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as q,r as R}from"./iframe-BbYVxIeR.js";import{c as V}from"./clsx-B-dksMZM.js";import{v as E}from"./classes-zVeSqKhV.js";const s=q.memo(R.forwardRef(({as:v="div",direction:w="row",align:f="stretch",justify:g="start",wrap:x="nowrap",gap:y="0",className:b,...j},h)=>{const k=`flex-${w}`,N={start:"items-start",center:"items-center",end:"items-end",stretch:"items-stretch",baseline:"items-baseline"}[f],T={start:"justify-start",center:"justify-center",end:"justify-end",between:"justify-between",around:"justify-around",evenly:"justify-evenly"}[g],C={wrap:"flex-wrap",nowrap:"flex-nowrap","wrap-reverse":"flex-wrap-reverse"}[x];return e.jsx(v,{ref:h,className:V("flex",k,N,T,C,E(y),b),...j})}));s.displayName="Flex";s.__docgenInfo={description:`Flex – low-level flexbox layout component.
Provides full control over direction, alignment, justification, wrapping, and gap.
Use for advanced layouts, toolbars, and responsive arrangements.`,methods:[],displayName:"Flex",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'div'",computed:!1}},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'row-reverse' | 'col' | 'col-reverse'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'row-reverse'"},{name:"literal",value:"'col'"},{name:"literal",value:"'col-reverse'"}]},description:"",defaultValue:{value:"'row'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'stretch' | 'baseline'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'stretch'"},{name:"literal",value:"'baseline'"}]},description:"",defaultValue:{value:"'stretch'",computed:!1}},justify:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end' | 'between' | 'around' | 'evenly'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"},{name:"literal",value:"'between'"},{name:"literal",value:"'around'"},{name:"literal",value:"'evenly'"}]},description:"",defaultValue:{value:"'start'",computed:!1}},wrap:{required:!1,tsType:{name:"union",raw:"'wrap' | 'nowrap' | 'wrap-reverse'",elements:[{name:"literal",value:"'wrap'"},{name:"literal",value:"'nowrap'"},{name:"literal",value:"'wrap-reverse'"}]},description:"",defaultValue:{value:"'nowrap'",computed:!1}},gap:{required:!1,tsType:{name:"union",raw:`| '0'
| 'xs'
| 'sm'
| 'md'
| 'lg'
| 'xl'
| '2xl'
| '3xl'
| '4xl'`,elements:[{name:"literal",value:"'0'"},{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"}]},description:"",defaultValue:{value:"'0'",computed:!1}}}};const I={title:"Atoms/Layout/Flex",component:s,args:{direction:"row",align:"center",justify:"between",gap:"md",wrap:"wrap",children:[e.jsx("div",{className:"bg-pink-200 p-2",children:"Item A"},"1"),e.jsx("div",{className:"bg-pink-300 p-2",children:"Item B"},"2")]},argTypes:{direction:{control:"select",options:["row","row-reverse","col","col-reverse"]},align:{control:"select",options:["start","center","end","stretch","baseline"]},justify:{control:"select",options:["start","center","end","between","around","evenly"]},wrap:{control:"select",options:["wrap","nowrap","wrap-reverse"]},gap:{control:"select",options:["0","xs","sm","md","lg","xl","2xl","3xl","4xl"]}},tags:["autodocs"]},a={args:{direction:"col",wrap:"wrap",gap:"sm"}},r={args:{justify:"between"}},l={args:{wrap:"wrap-reverse",gap:"lg",children:[e.jsx("div",{className:"bg-pink-200 p-2",children:"1"},"1"),e.jsx("div",{className:"bg-pink-300 p-2",children:"2"},"2"),e.jsx("div",{className:"bg-pink-400 p-2",children:"3"},"3"),e.jsx("div",{className:"bg-pink-500 p-2",children:"4"},"4")]}};var t,n,i;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    direction: 'col',
    wrap: 'wrap',
    gap: 'sm'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var o,p,c;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    justify: 'between'
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,u,d;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    wrap: 'wrap-reverse',
    gap: 'lg',
    children: [<div key="1" className="bg-pink-200 p-2">
        1
      </div>, <div key="2" className="bg-pink-300 p-2">
        2
      </div>, <div key="3" className="bg-pink-400 p-2">
        3
      </div>, <div key="4" className="bg-pink-500 p-2">
        4
      </div>]
  }
}`,...(d=(u=l.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const S=["ColumnWrap","JustifyBetween","WrapReverse"];export{a as ColumnWrap,r as JustifyBetween,l as WrapReverse,S as __namedExportsOrder,I as default};
