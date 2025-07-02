import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{T as t}from"./TableHeader-yum6ANPe.js";import"./iframe-BbYVxIeR.js";import"./clsx-B-dksMZM.js";import"./classes-zVeSqKhV.js";const R={title:"Atoms/TableHeader",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{control:"text",description:"The content of the table header"},size:{control:"select",options:["sm","md","lg"],description:"Size of the table header"},variant:{control:"select",options:["default","sortable"],description:"Visual variant of the header"},align:{control:"select",options:["left","center","right"],description:"Text alignment within the header"},className:{control:"text",description:"Additional CSS classes"}},decorators:[z=>e.jsxs("table",{className:"border border-gray-200 rounded-lg overflow-hidden",children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx(z,{})})}),e.jsx("tbody",{children:e.jsx("tr",{children:e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:"Sample data"})})})]})]},a={args:{children:"Name"}},r={args:{children:"Sortable Column",variant:"sortable"}},n={render:()=>e.jsx("div",{className:"space-y-4",children:e.jsxs("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(t,{size:"sm",children:"Small Header"}),e.jsx(t,{size:"md",children:"Medium Header"}),e.jsx(t,{size:"lg",children:"Large Header"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-gray-600",children:"Small data"}),e.jsx("td",{className:"px-4 py-3 text-base text-gray-600",children:"Medium data"}),e.jsx("td",{className:"px-6 py-4 text-lg text-gray-600",children:"Large data"})]})})]})})},s={render:()=>e.jsxs("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(t,{align:"left",children:"Left Aligned"}),e.jsx(t,{align:"center",children:"Center Aligned"}),e.jsx(t,{align:"right",children:"Right Aligned"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:"Left content"}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600 text-center",children:"Center content"}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600 text-right",children:"Right content"})]})})]})},d={render:()=>e.jsxs("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(t,{variant:"default",children:"Default Header"}),e.jsx(t,{variant:"sortable",children:"Sortable Header"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:"Regular content"}),e.jsx("td",{className:"px-4 py-3 text-sm text-gray-600",children:"Sortable content"})]})})]})},l={render:()=>e.jsxs("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx(t,{size:"sm",align:"left",children:"ID"}),e.jsx(t,{size:"md",variant:"sortable",children:"Name"}),e.jsx(t,{size:"md",variant:"sortable",align:"center",children:"Status"}),e.jsx(t,{size:"md",variant:"sortable",align:"right",children:"Amount"}),e.jsx(t,{size:"sm",align:"center",children:"Actions"})]})}),e.jsx("tbody",{children:e.jsxs("tr",{children:[e.jsx("td",{className:"px-3 py-2 text-sm text-gray-600",children:"001"}),e.jsx("td",{className:"px-4 py-3 text-base text-gray-900",children:"John Doe"}),e.jsx("td",{className:"px-4 py-3 text-base text-gray-900 text-center",children:"Active"}),e.jsx("td",{className:"px-4 py-3 text-base text-gray-900 text-right font-mono",children:"$1,234.56"}),e.jsx("td",{className:"px-3 py-2 text-sm text-gray-600 text-center",children:"Edit"})]})})]})};var o,i,c;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    children: 'Name'
  }
}`,...(c=(i=a.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var x,m,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'Sortable Column',
    variant: 'sortable'
  }
}`,...(g=(m=r.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var h,p,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
        <thead>
          <tr>
            <TableHeader size="sm">Small Header</TableHeader>
            <TableHeader size="md">Medium Header</TableHeader>
            <TableHeader size="lg">Large Header</TableHeader>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-3 py-2 text-sm text-gray-600">Small data</td>
            <td className="px-4 py-3 text-base text-gray-600">Medium data</td>
            <td className="px-6 py-4 text-lg text-gray-600">Large data</td>
          </tr>
        </tbody>
      </table>
    </div>
}`,...(b=(p=n.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var y,u,j;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <thead>
        <tr>
          <TableHeader align="left">Left Aligned</TableHeader>
          <TableHeader align="center">Center Aligned</TableHeader>
          <TableHeader align="right">Right Aligned</TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-3 text-sm text-gray-600">Left content</td>
          <td className="px-4 py-3 text-sm text-gray-600 text-center">
            Center content
          </td>
          <td className="px-4 py-3 text-sm text-gray-600 text-right">
            Right content
          </td>
        </tr>
      </tbody>
    </table>
}`,...(j=(u=s.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var N,f,H;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <thead>
        <tr>
          <TableHeader variant="default">Default Header</TableHeader>
          <TableHeader variant="sortable">Sortable Header</TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-4 py-3 text-sm text-gray-600">Regular content</td>
          <td className="px-4 py-3 text-sm text-gray-600">Sortable content</td>
        </tr>
      </tbody>
    </table>
}`,...(H=(f=d.parameters)==null?void 0:f.docs)==null?void 0:H.source}}};var T,v,S;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <thead>
        <tr>
          <TableHeader size="sm" align="left">
            ID
          </TableHeader>
          <TableHeader size="md" variant="sortable">
            Name
          </TableHeader>
          <TableHeader size="md" variant="sortable" align="center">
            Status
          </TableHeader>
          <TableHeader size="md" variant="sortable" align="right">
            Amount
          </TableHeader>
          <TableHeader size="sm" align="center">
            Actions
          </TableHeader>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="px-3 py-2 text-sm text-gray-600">001</td>
          <td className="px-4 py-3 text-base text-gray-900">John Doe</td>
          <td className="px-4 py-3 text-base text-gray-900 text-center">
            Active
          </td>
          <td className="px-4 py-3 text-base text-gray-900 text-right font-mono">
            $1,234.56
          </td>
          <td className="px-3 py-2 text-sm text-gray-600 text-center">Edit</td>
        </tr>
      </tbody>
    </table>
}`,...(S=(v=l.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const E=["Default","Sortable","Sizes","Alignments","Variants","ComplexExample"];export{s as Alignments,l as ComplexExample,a as Default,n as Sizes,r as Sortable,d as Variants,E as __namedExportsOrder,R as default};
