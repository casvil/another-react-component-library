import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{a as t,T as a}from"./TableRow-Dc3zaaxv.js";import"./iframe-BCzmj9Vo.js";import"./clsx-B-dksMZM.js";import"./classes-DL16wGMG.js";const W={title:"Atoms/TableRow",component:t,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{children:{control:!1,description:"Table cells (TableData or TableHeader components)"},size:{control:"select",options:["sm","md","lg"],description:"Size of the table row"},variant:{control:"select",options:["default","striped","highlighted"],description:"Visual variant of the row"},interactive:{control:"boolean",description:"Whether the row is interactive (clickable)"},className:{control:"text",description:"Additional CSS classes"}},decorators:[A=>e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsx(A,{})})})]},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"John Doe"}),e.jsx(a,{children:"30"}),e.jsx(a,{children:"Engineer"})]})}},l={args:{variant:"striped",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Jane Smith"}),e.jsx(a,{children:"25"}),e.jsx(a,{children:"Designer"})]})}},n={args:{variant:"highlighted",children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Bob Johnson"}),e.jsx(a,{children:"35"}),e.jsx(a,{children:"Manager"})]})}},s={args:{interactive:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:"Alice Brown"}),e.jsx(a,{children:"28"}),e.jsx(a,{children:"Developer"})]})}},i={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Small Row"}),e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsxs(t,{size:"sm",children:[e.jsx(a,{size:"sm",children:"Small content"}),e.jsx(a,{size:"sm",children:"Data"}),e.jsx(a,{size:"sm",children:"Values"})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Medium Row"}),e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsxs(t,{size:"md",children:[e.jsx(a,{size:"md",children:"Medium content"}),e.jsx(a,{size:"md",children:"Data"}),e.jsx(a,{size:"md",children:"Values"})]})})})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-medium text-gray-700 mb-2",children:"Large Row"}),e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsx("tbody",{children:e.jsxs(t,{size:"lg",children:[e.jsx(a,{size:"lg",children:"Large content"}),e.jsx(a,{size:"lg",children:"Data"}),e.jsx(a,{size:"lg",children:"Values"})]})})})]})]})},d={render:()=>e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsxs("tbody",{children:[e.jsxs(t,{variant:"default",children:[e.jsx(a,{children:"Default Row"}),e.jsx(a,{children:"Regular styling"}),e.jsx(a,{children:"White background"})]}),e.jsxs(t,{variant:"striped",children:[e.jsx(a,{children:"Striped Row"}),e.jsx(a,{children:"Alternate styling"}),e.jsx(a,{children:"Gray background"})]}),e.jsxs(t,{variant:"highlighted",children:[e.jsx(a,{children:"Highlighted Row"}),e.jsx(a,{children:"Special styling"}),e.jsx(a,{children:"Blue background"})]})]})})},o={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx("p",{className:"text-sm text-gray-600",children:"Click on the interactive rows below:"}),e.jsx("table",{className:"border border-gray-200 rounded-lg overflow-hidden w-full",children:e.jsxs("tbody",{children:[e.jsxs(t,{interactive:!0,onClick:()=>alert("Row 1 clicked!"),children:[e.jsx(a,{children:"Interactive Row 1"}),e.jsx(a,{children:"Click me!"}),e.jsx(a,{children:"✓ Clickable"})]}),e.jsxs(t,{interactive:!0,variant:"striped",onClick:()=>alert("Row 2 clicked!"),children:[e.jsx(a,{children:"Interactive Row 2"}),e.jsx(a,{children:"Click me too!"}),e.jsx(a,{children:"✓ Clickable"})]}),e.jsxs(t,{children:[e.jsx(a,{children:"Non-interactive Row"}),e.jsx(a,{children:"Cannot click"}),e.jsx(a,{children:"✗ Not clickable"})]})]})})]})},c={args:{interactive:!0,children:e.jsxs(e.Fragment,{children:[e.jsx(a,{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium",children:"JD"}),e.jsx("span",{children:"John Doe"})]})}),e.jsx(a,{variant:"numeric",children:"$1,234.56"}),e.jsx(a,{variant:"action",children:e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"Edit"})})]})}};var b,h,m;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    children: <>
        <TableData>John Doe</TableData>
        <TableData>30</TableData>
        <TableData>Engineer</TableData>
      </>
  }
}`,...(m=(h=r.parameters)==null?void 0:h.docs)==null?void 0:m.source}}};var x,T,u;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    children: <>
        <TableData>Jane Smith</TableData>
        <TableData>25</TableData>
        <TableData>Designer</TableData>
      </>
  }
}`,...(u=(T=l.parameters)==null?void 0:T.docs)==null?void 0:u.source}}};var g,D,j;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'highlighted',
    children: <>
        <TableData>Bob Johnson</TableData>
        <TableData>35</TableData>
        <TableData>Manager</TableData>
      </>
  }
}`,...(j=(D=n.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var p,w,v;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    interactive: true,
    children: <>
        <TableData>Alice Brown</TableData>
        <TableData>28</TableData>
        <TableData>Developer</TableData>
      </>
  }
}`,...(v=(w=s.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var f,y,R;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Small Row</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow size="sm">
              <TableData size="sm">Small content</TableData>
              <TableData size="sm">Data</TableData>
              <TableData size="sm">Values</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Medium Row</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow size="md">
              <TableData size="md">Medium content</TableData>
              <TableData size="md">Data</TableData>
              <TableData size="md">Values</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-sm font-medium text-gray-700 mb-2">Large Row</h3>
        <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
          <tbody>
            <TableRow size="lg">
              <TableData size="lg">Large content</TableData>
              <TableData size="lg">Data</TableData>
              <TableData size="lg">Values</TableData>
            </TableRow>
          </tbody>
        </table>
      </div>
    </div>
}`,...(R=(y=i.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var N,k,z;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
      <tbody>
        <TableRow variant="default">
          <TableData>Default Row</TableData>
          <TableData>Regular styling</TableData>
          <TableData>White background</TableData>
        </TableRow>
        <TableRow variant="striped">
          <TableData>Striped Row</TableData>
          <TableData>Alternate styling</TableData>
          <TableData>Gray background</TableData>
        </TableRow>
        <TableRow variant="highlighted">
          <TableData>Highlighted Row</TableData>
          <TableData>Special styling</TableData>
          <TableData>Blue background</TableData>
        </TableRow>
      </tbody>
    </table>
}`,...(z=(k=d.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var S,C,J;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Click on the interactive rows below:
      </p>
      <table className="border border-gray-200 rounded-lg overflow-hidden w-full">
        <tbody>
          <TableRow interactive onClick={() => alert('Row 1 clicked!')}>
            <TableData>Interactive Row 1</TableData>
            <TableData>Click me!</TableData>
            <TableData>✓ Clickable</TableData>
          </TableRow>
          <TableRow interactive variant="striped" onClick={() => alert('Row 2 clicked!')}>
            <TableData>Interactive Row 2</TableData>
            <TableData>Click me too!</TableData>
            <TableData>✓ Clickable</TableData>
          </TableRow>
          <TableRow>
            <TableData>Non-interactive Row</TableData>
            <TableData>Cannot click</TableData>
            <TableData>✗ Not clickable</TableData>
          </TableRow>
        </tbody>
      </table>
    </div>
}`,...(J=(C=o.parameters)==null?void 0:C.docs)==null?void 0:J.source}}};var V,E,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    interactive: true,
    children: <>
        <TableData>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
              JD
            </div>
            <span>John Doe</span>
          </div>
        </TableData>
        <TableData variant="numeric">$1,234.56</TableData>
        <TableData variant="action">
          <button className="text-blue-600 hover:text-blue-800 text-sm">
            Edit
          </button>
        </TableData>
      </>
  }
}`,...(I=(E=c.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const G=["Default","Striped","Highlighted","Interactive","Sizes","Variants","InteractiveExample","ComplexContent"];export{c as ComplexContent,r as Default,n as Highlighted,s as Interactive,o as InteractiveExample,i as Sizes,l as Striped,d as Variants,G as __namedExportsOrder,W as default};
