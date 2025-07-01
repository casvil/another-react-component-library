import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as a,a as r}from"./TableRow-Cs1zjwRc.js";import"./iframe-DoDsO8uN.js";import"./clsx-B-dksMZM.js";import"./classes-CnWFQedi.js";const O={title:"Atoms/TableData",component:a,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"The content of the table cell"},size:{control:"select",options:["sm","md","lg"],description:"Size of the table cell"},align:{control:"select",options:["left","center","right"],description:"Text alignment within the cell"},variant:{control:"select",options:["default","numeric","action"],description:"Content variant of the cell"},truncate:{control:"boolean",description:"Whether to truncate long text content"},className:{control:"text",description:"Additional CSS classes"}},decorators:[E=>e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(E,{})})})})]},t={args:{children:"Default cell content"}},n={args:{children:"$1,234.56",variant:"numeric",align:"right"}},l={args:{children:"Edit",variant:"action"}},s={args:{children:"This is a very long text content that should be truncated when the truncate prop is enabled",truncate:!0}},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Small Cell"}),e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(a,{size:"sm",children:"Small content"})})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Medium Cell"}),e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(a,{size:"md",children:"Medium content"})})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Large Cell"}),e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsx(r,{children:e.jsx(a,{size:"lg",children:"Large content"})})})})]})]})},d={render:()=>e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsxs(r,{children:[e.jsx(a,{align:"left",children:"Left aligned"}),e.jsx(a,{align:"center",children:"Center aligned"}),e.jsx(a,{align:"right",children:"Right aligned"})]})})})},i={render:()=>e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsxs(r,{children:[e.jsx(a,{variant:"default",children:"Default text"}),e.jsx(a,{variant:"numeric",align:"right",children:"$999.99"}),e.jsx(a,{variant:"action",children:e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"Edit"})})]})})})};var c,m,b;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    children: 'Default cell content'
  }
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,h,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: '$1,234.56',
    variant: 'numeric',
    align: 'right'
  }
}`,...(g=(h=n.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,p,f;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Edit',
    variant: 'action'
  }
}`,...(f=(p=l.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var v,y,T;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: 'This is a very long text content that should be truncated when the truncate prop is enabled',
    truncate: true
  }
}`,...(T=(y=s.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var j,w,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Small Cell</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow>
              <TableData size="sm">Small content</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Medium Cell</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow>
              <TableData size="md">Medium content</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Large Cell</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow>
              <TableData size="lg">Large content</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>
    </div>
}`,...(D=(w=o.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,S,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <tbody>
        <TableRow>
          <TableData align="left">Left aligned</TableData>
          <TableData align="center">Center aligned</TableData>
          <TableData align="right">Right aligned</TableData>
        </TableRow>
      </tbody>
    </table>
}`,...(R=(S=d.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var z,C,A;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <tbody>
        <TableRow>
          <TableData variant="default">Default text</TableData>
          <TableData variant="numeric" align="right">
            $999.99
          </TableData>
          <TableData variant="action">
            <button className="text-blue-600 hover:text-blue-800 text-sm">
              Edit
            </button>
          </TableData>
        </TableRow>
      </tbody>
    </table>
}`,...(A=(C=i.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};const W=["Default","Numeric","Action","Truncated","Sizes","Alignments","Variants"];export{l as Action,d as Alignments,t as Default,n as Numeric,o as Sizes,s as Truncated,i as Variants,W as __namedExportsOrder,O as default};
