import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{e as p,r as u}from"./iframe-BbYVxIeR.js";import{c as f}from"./clsx-B-dksMZM.js";const g={xs:"max-w-xs",sm:"max-w-sm",md:"max-w-md",lg:"max-w-lg",xl:"max-w-xl","2xl":"max-w-2xl","3xl":"max-w-3xl","4xl":"max-w-4xl",full:"max-w-full"},s=p.memo(u.forwardRef(({as:e="div",size:o="2xl",center:m=!0,padded:i=!0,className:d,...x},c)=>l.jsx(e,{ref:c,className:f(g[o],m&&"mx-auto",i&&"px-4 sm:px-6 lg:px-8",d),...x})));s.displayName="Container";s.__docgenInfo={description:`Container – responsive wrapper for page sections.
Sets a max-width, horizontal centering, and padding for consistent layouts.
Use to wrap main content, forms, or any section that needs alignment.`,methods:[],displayName:"Container",props:{as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'div'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:`| 'xs'
| 'sm'
| 'md'
| 'lg'
| 'xl'
| '2xl'
| '3xl'
| '4xl'
| 'full'`,elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"},{name:"literal",value:"'2xl'"},{name:"literal",value:"'3xl'"},{name:"literal",value:"'4xl'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'2xl'",computed:!1}},center:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},padded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const h={title:"Atoms/Layout/Container",component:s,args:{size:"lg",padded:!0,center:!0,children:l.jsx("div",{className:"bg-yellow-100 p-4",children:"Inside Container"})},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl","2xl","3xl","4xl","full"]},padded:{control:"boolean"},center:{control:"boolean"}},tags:["autodocs"]},a={render:()=>l.jsx("div",{className:"space-y-6",children:["xs","sm","md","lg","xl","2xl","3xl","4xl"].map(e=>l.jsx(s,{size:e,className:"bg-yellow-50 py-2 text-center",children:e},e))}),parameters:{controls:{hideNoControlsWarning:!0}}};var t,n,r;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: () => <div className="space-y-6">
      {(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl'] as const).map(s => <Container key={s} size={s} className="bg-yellow-50 py-2 text-center">
            {s}
          </Container>)}
    </div>,
  parameters: {
    controls: {
      hideNoControlsWarning: true
    }
  }
}`,...(r=(n=a.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const C=["Sizes"];export{a as Sizes,C as __namedExportsOrder,h as default};
