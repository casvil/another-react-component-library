import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as d,r as W}from"./iframe-BCzmj9Vo.js";import{c as w}from"./clsx-B-dksMZM.js";import{n as M}from"./classes-DL16wGMG.js";import{T as t}from"./TableHeader-BMc1WTxw.js";import{a as l,T as r}from"./TableRow-Dc3zaaxv.js";const f=a=>d.isValidElement(a),q=a=>a.type===l,L=a=>a.type===t,P=a=>a.type===r,b=d.memo(W.forwardRef(({children:a,size:o="md",variant:h="default",layout:D="auto",responsive:y=!1,hover:F=!1,className:v,caption:N,...i},j)=>{const x=w("w-full border-collapse",{"table-auto":D==="auto","table-fixed":D==="fixed"},M.text[o],v),p=w("overflow-hidden",M.container.borderRadius[o],{"border border-gray-200":h==="bordered","overflow-x-auto":y,"shadow-sm":h!=="bordered"}),De=w({"min-w-full inline-block align-middle":y}),ye=d.Children.map(a,n=>{if(!f(n))return n;if(n.type==="tbody"){const T=d.Children.map(n.props.children,s=>{if(!f(s)||!q(s))return s;const g={...s.props};g.size||(g.size=o);const I=d.Children.map(s.props.children,c=>{if(!f(c)||!P(c)&&!L(c))return c;const u={...c.props};return u.size||(u.size=o),d.cloneElement(c,u)});return d.cloneElement(s,{...g,children:I})});return d.cloneElement(n,{...n.props,children:T})}if(n.type==="thead"){const T=d.Children.map(n.props.children,s=>{if(!f(s)||!q(s))return s;const g={...s.props};g.size||(g.size=o);const I=d.Children.map(s.props.children,c=>{if(!f(c)||!L(c))return c;const u={...c.props};return u.size||(u.size=o),d.cloneElement(c,u)});return d.cloneElement(s,{...g,children:I})});return d.cloneElement(n,{...n.props,children:T})}if(q(n)){const T={...n.props};return T.size||(T.size=o),d.cloneElement(n,T)}if(P(n)||L(n)){const T=n,s={...T.props};return s.size||(s.size=o),d.cloneElement(T,s)}return n}),_=e.jsxs("table",{ref:j,className:w(x,{"[&_tbody_tr:nth-child(even)]:bg-gray-50":h==="striped","[&_tbody_tr:hover]:bg-gray-100":F}),role:"table","aria-label":N?void 0:"Data table",...i,children:[N&&e.jsx("caption",{className:"text-left text-gray-700 font-medium mb-4 px-2",children:N}),ye]});return y?e.jsx("div",{className:p,children:e.jsx("div",{className:De,children:_})}):e.jsx("div",{className:p,children:_})}));b.displayName="Table";b.__docgenInfo={description:`Table organism component. A comprehensive table component that provides structure
and styling for tabular data. Works with TableHeader, TableRow, and TableData atoms.
Supports responsive design, hover effects, striped rows, and fixed layouts.
Fully accessible with proper ARIA attributes and semantic table structure.`,methods:[],displayName:"Table",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'striped' | 'bordered'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'striped'"},{name:"literal",value:"'bordered'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'auto' | 'fixed'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'fixed'"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},responsive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:""}}};const Se={title:"Organisms/Table",component:b,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{children:{control:!1,description:"Table content (thead, tbody, rows, cells)"},size:{control:"select",options:["sm","md","lg"],description:"Size of the table"},variant:{control:"select",options:["default","striped","bordered"],description:"Visual variant of the table"},layout:{control:"select",options:["auto","fixed"],description:"Table layout algorithm"},responsive:{control:"boolean",description:"Whether the table is responsive (horizontal scroll on mobile)"},hover:{control:"boolean",description:"Whether rows have hover effects"},caption:{control:"text",description:"Table caption for accessibility"},className:{control:"text",description:"Additional CSS classes"}}},m=[{id:1,name:"John Doe",age:30,email:"john@example.com",role:"Engineer"},{id:2,name:"Jane Smith",age:25,email:"jane@example.com",role:"Designer"},{id:3,name:"Bob Johnson",age:35,email:"bob@example.com",role:"Manager"},{id:4,name:"Alice Brown",age:28,email:"alice@example.com",role:"Developer"},{id:5,name:"Charlie Wilson",age:32,email:"charlie@example.com",role:"Analyst"}],H={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Age"}),e.jsx(t,{children:"Email"}),e.jsx(t,{children:"Role"})]})}),e.jsx("tbody",{children:m.map(a=>e.jsxs(l,{children:[e.jsx(r,{children:a.name}),e.jsx(r,{variant:"numeric",align:"center",children:a.age}),e.jsx(r,{children:a.email}),e.jsx(r,{children:a.role})]},a.id))})]})}},R={args:{variant:"striped",children:e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{align:"center",children:"Age"}),e.jsx(t,{children:"Role"})]})}),e.jsx("tbody",{children:m.map(a=>e.jsxs(l,{children:[e.jsx(r,{children:a.name}),e.jsx(r,{variant:"numeric",align:"center",children:a.age}),e.jsx(r,{children:a.role})]},a.id))})]})}},S={args:{variant:"bordered",children:e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{align:"center",children:"Age"}),e.jsx(t,{children:"Email"}),e.jsx(t,{children:"Role"})]})}),e.jsx("tbody",{children:m.map(a=>e.jsxs(l,{children:[e.jsx(r,{children:a.name}),e.jsx(r,{variant:"numeric",align:"center",children:a.age}),e.jsx(r,{children:a.email}),e.jsx(r,{children:a.role})]},a.id))})]})}},E={args:{hover:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Age"}),e.jsx(t,{children:"Actions"})]})}),e.jsx("tbody",{children:m.slice(0,3).map(a=>e.jsxs(l,{children:[e.jsx(r,{children:a.name}),e.jsx(r,{variant:"numeric",align:"center",children:a.age}),e.jsxs(r,{variant:"action",children:[e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm mr-2",children:"Edit"}),e.jsx("button",{className:"text-red-600 hover:text-red-800 text-sm",children:"Delete"})]})]},a.id))})]})}},C={args:{responsive:!0,children:e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{children:"ID"}),e.jsx(t,{children:"Full Name"}),e.jsx(t,{children:"Age"}),e.jsx(t,{children:"Email Address"}),e.jsx(t,{children:"Job Role"}),e.jsx(t,{children:"Department"}),e.jsx(t,{children:"Salary"}),e.jsx(t,{children:"Actions"})]})}),e.jsx("tbody",{children:m.map(a=>e.jsxs(l,{children:[e.jsx(r,{variant:"numeric",children:a.id}),e.jsx(r,{children:a.name}),e.jsx(r,{variant:"numeric",align:"center",children:a.age}),e.jsx(r,{children:a.email}),e.jsx(r,{children:a.role}),e.jsx(r,{children:"Engineering"}),e.jsx(r,{variant:"numeric",align:"right",children:"$75,000"}),e.jsx(r,{variant:"action",children:"Edit"})]},a.id))})]})}},A={args:{caption:"Employee Information Table",variant:"bordered",children:e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Role"}),e.jsx(t,{children:"Status"})]})}),e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(r,{children:"John Doe"}),e.jsx(r,{children:"Engineer"}),e.jsx(r,{children:"Active"})]}),e.jsxs(l,{children:[e.jsx(r,{children:"Jane Smith"}),e.jsx(r,{children:"Designer"}),e.jsx(r,{children:"Active"})]})]})]})}},k={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Small Table"}),e.jsxs(b,{size:"sm",children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Role"})]})}),e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(r,{children:"John Doe"}),e.jsx(r,{children:"Engineer"})]}),e.jsxs(l,{children:[e.jsx(r,{children:"Jane Smith"}),e.jsx(r,{children:"Designer"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Medium Table"}),e.jsxs(b,{size:"md",children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Role"})]})}),e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(r,{children:"John Doe"}),e.jsx(r,{children:"Engineer"})]}),e.jsxs(l,{children:[e.jsx(r,{children:"Jane Smith"}),e.jsx(r,{children:"Designer"})]})]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Large Table"}),e.jsxs(b,{size:"lg",children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{children:"Name"}),e.jsx(t,{children:"Role"})]})}),e.jsxs("tbody",{children:[e.jsxs(l,{children:[e.jsx(r,{children:"John Doe"}),e.jsx(r,{children:"Engineer"})]}),e.jsxs(l,{children:[e.jsx(r,{children:"Jane Smith"}),e.jsx(r,{children:"Designer"})]})]})]})]})]})},V={render:()=>{const[a,o]=W.useState("name"),[h,D]=W.useState("asc"),y=i=>{a===i?D(h==="asc"?"desc":"asc"):(o(i),D("asc"))},F=i=>a!==i?"":h==="asc"?"↑":"↓",v=(i,j,x)=>e.jsx(t,{variant:"sortable",onClick:()=>y(j),style:{cursor:"pointer"},align:x,children:e.jsxs("span",{className:"inline-flex items-center",children:[e.jsx("span",{children:i}),e.jsx("span",{className:"w-4 text-center ml-1",children:F(j)})]})}),N=[...m].sort((i,j)=>{let x=i[a],p=j[a];return a==="age"?(x=Number(x),p=Number(p)):(x=String(x).toLowerCase(),p=String(p).toLowerCase()),x<p?h==="asc"?-1:1:x>p?h==="asc"?1:-1:0});return e.jsxs(b,{children:[e.jsx("thead",{children:e.jsxs(l,{children:[v("Name","name"),v("Age","age","center"),v("Role","role","right"),e.jsx(t,{children:"Actions"})]})}),e.jsx("tbody",{children:N.map(i=>e.jsxs(l,{children:[e.jsx(r,{children:i.name}),e.jsx(r,{variant:"numeric",align:"center",children:i.age}),e.jsx(r,{align:"right",children:i.role}),e.jsx(r,{variant:"action",children:e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"View"})})]},i.id))})]})}},z={render:()=>e.jsxs("div",{className:"space-y-8",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Custom Colors"}),e.jsxs(b,{className:"bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900",variant:"bordered",children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{className:"bg-blue-100 text-blue-800",children:"Name"}),e.jsx(t,{className:"bg-blue-100 text-blue-800",align:"center",children:"Age"}),e.jsx(t,{className:"bg-blue-100 text-blue-800",children:"Role"})]})}),e.jsx("tbody",{children:m.slice(0,3).map(a=>e.jsxs(l,{children:[e.jsx(r,{className:"font-medium",children:a.name}),e.jsx(r,{align:"center",className:"font-mono",children:a.age}),e.jsx(r,{className:"text-blue-600",children:a.role})]},a.id))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Dark Theme"}),e.jsxs(b,{className:"bg-gray-800 text-white border-gray-700",variant:"bordered",children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{className:"bg-gray-700 text-white border-gray-600",children:"Name"}),e.jsx(t,{className:"bg-gray-700 text-white border-gray-600",align:"center",children:"Age"}),e.jsx(t,{className:"bg-gray-700 text-white border-gray-600",children:"Role"})]})}),e.jsx("tbody",{children:m.slice(0,3).map(a=>e.jsxs(l,{className:"border-gray-700",children:[e.jsx(r,{className:"text-gray-100",children:a.name}),e.jsx(r,{align:"center",className:"text-gray-300",children:a.age}),e.jsx(r,{className:"text-blue-400",children:a.role})]},a.id))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Fancy Styling"}),e.jsxs(b,{className:"shadow-2xl border-2 border-purple-200 rounded-xl overflow-hidden",size:"lg",children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{className:"bg-gradient-to-r from-purple-500 to-pink-500 text-white",children:"Name"}),e.jsx(t,{className:"bg-gradient-to-r from-purple-500 to-pink-500 text-white",align:"center",children:"Age"}),e.jsx(t,{className:"bg-gradient-to-r from-purple-500 to-pink-500 text-white",children:"Role"})]})}),e.jsx("tbody",{children:m.slice(0,3).map((a,o)=>e.jsxs(l,{className:o%2===0?"bg-purple-50":"bg-pink-50",children:[e.jsx(r,{className:"font-semibold text-purple-800",children:a.name}),e.jsx(r,{align:"center",className:"text-purple-600 font-mono text-xl",children:a.age}),e.jsx(r,{className:"text-pink-600 font-medium",children:a.role})]},a.id))})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-medium text-gray-900 mb-4",children:"Minimal Style"}),e.jsxs(b,{className:"shadow-none border-none",children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{className:"border-b-2 border-gray-300 bg-transparent pb-4",children:"Name"}),e.jsx(t,{className:"border-b-2 border-gray-300 bg-transparent pb-4",align:"center",children:"Age"}),e.jsx(t,{className:"border-b-2 border-gray-300 bg-transparent pb-4",children:"Role"})]})}),e.jsx("tbody",{children:m.slice(0,3).map(a=>e.jsxs(l,{className:"border-none",children:[e.jsx(r,{className:"py-4 border-none",children:a.name}),e.jsx(r,{align:"center",className:"py-4 border-none",children:a.age}),e.jsx(r,{className:"py-4 border-none text-gray-600",children:a.role})]},a.id))})]})]})]})},J={args:{variant:"striped",hover:!0,size:"md",caption:"Employee Directory - Q4 2024",children:e.jsxs(e.Fragment,{children:[e.jsx("thead",{children:e.jsxs(l,{children:[e.jsx(t,{size:"sm",children:"ID"}),e.jsx(t,{variant:"sortable",children:"Employee Name"}),e.jsx(t,{variant:"sortable",align:"center",children:"Age"}),e.jsx(t,{children:"Contact"}),e.jsx(t,{variant:"sortable",children:"Department"}),e.jsx(t,{variant:"sortable",align:"right",children:"Salary"}),e.jsx(t,{align:"center",children:"Actions"})]})}),e.jsx("tbody",{children:m.map((a,o)=>e.jsxs(l,{children:[e.jsx(r,{size:"sm",variant:"numeric",children:String(a.id).padStart(3,"0")}),e.jsx(r,{children:e.jsxs("div",{className:"flex items-center space-x-2",children:[e.jsx("div",{className:"w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium",children:a.name.split(" ").map(h=>h[0]).join("")}),e.jsx("span",{className:"font-medium",children:a.name})]})}),e.jsx(r,{variant:"numeric",align:"center",children:a.age}),e.jsx(r,{children:e.jsxs("div",{className:"text-sm",children:[e.jsx("div",{children:a.email}),e.jsxs("div",{className:"text-gray-500",children:["+1 (555) 123-45",String(o+10).slice(-2)]})]})}),e.jsx(r,{children:a.role}),e.jsxs(r,{variant:"numeric",align:"right",children:["$",(5e4+Math.random()*5e4).toLocaleString("en-US",{minimumFractionDigits:0})]}),e.jsx(r,{variant:"action",children:e.jsxs("div",{className:"flex space-x-2",children:[e.jsx("button",{className:"text-blue-600 hover:text-blue-800 text-sm",children:"Edit"}),e.jsx("button",{className:"text-gray-600 hover:text-gray-800 text-sm",children:"View"}),e.jsx("button",{className:"text-red-600 hover:text-red-800 text-sm",children:"Delete"})]})})]},a.id))})]})}};var B,$,O;H.parameters={...H.parameters,docs:{...(B=H.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map(person => <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>{person.email}</TableData>
              <TableData>{person.role}</TableData>
            </TableRow>)}
        </tbody>
      </>
  }
}`,...(O=($=H.parameters)==null?void 0:$.docs)==null?void 0:O.source}}};var Q,U,G;R.parameters={...R.parameters,docs:{...(Q=R.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    children: <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader align="center">Age</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map(person => <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>{person.role}</TableData>
            </TableRow>)}
        </tbody>
      </>
  }
}`,...(G=(U=R.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var K,X,Y;S.parameters={...S.parameters,docs:{...(K=S.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    variant: 'bordered',
    children: <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader align="center">Age</TableHeader>
            <TableHeader>Email</TableHeader>
            <TableHeader>Role</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map(person => <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>{person.email}</TableData>
              <TableData>{person.role}</TableData>
            </TableRow>)}
        </tbody>
      </>
  }
}`,...(Y=(X=S.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;E.parameters={...E.parameters,docs:{...(Z=E.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    hover: true,
    children: <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.slice(0, 3).map(person => <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData variant="action">
                <button className="text-blue-600 hover:text-blue-800 text-sm mr-2">
                  Edit
                </button>
                <button className="text-red-600 hover:text-red-800 text-sm">
                  Delete
                </button>
              </TableData>
            </TableRow>)}
        </tbody>
      </>
  }
}`,...(ae=(ee=E.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,le;C.parameters={...C.parameters,docs:{...(re=C.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    responsive: true,
    children: <>
        <thead>
          <TableRow>
            <TableHeader>ID</TableHeader>
            <TableHeader>Full Name</TableHeader>
            <TableHeader>Age</TableHeader>
            <TableHeader>Email Address</TableHeader>
            <TableHeader>Job Role</TableHeader>
            <TableHeader>Department</TableHeader>
            <TableHeader>Salary</TableHeader>
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map(person => <TableRow key={person.id}>
              <TableData variant="numeric">{person.id}</TableData>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>{person.email}</TableData>
              <TableData>{person.role}</TableData>
              <TableData>Engineering</TableData>
              <TableData variant="numeric" align="right">
                $75,000
              </TableData>
              <TableData variant="action">Edit</TableData>
            </TableRow>)}
        </tbody>
      </>
  }
}`,...(le=(te=C.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,se,ie;A.parameters={...A.parameters,docs:{...(ne=A.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    caption: 'Employee Information Table',
    variant: 'bordered',
    children: <>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Role</TableHeader>
            <TableHeader>Status</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          <TableRow>
            <TableData>John Doe</TableData>
            <TableData>Engineer</TableData>
            <TableData>Active</TableData>
          </TableRow>
          <TableRow>
            <TableData>Jane Smith</TableData>
            <TableData>Designer</TableData>
            <TableData>Active</TableData>
          </TableRow>
        </tbody>
      </>
  }
}`,...(ie=(se=A.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var de,oe,ce;k.parameters={...k.parameters,docs:{...(de=k.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Small Table</h3>
        <Table size="sm">
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Role</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData>John Doe</TableData>
              <TableData>Engineer</TableData>
            </TableRow>
            <TableRow>
              <TableData>Jane Smith</TableData>
              <TableData>Designer</TableData>
            </TableRow>
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Medium Table</h3>
        <Table size="md">
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Role</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData>John Doe</TableData>
              <TableData>Engineer</TableData>
            </TableRow>
            <TableRow>
              <TableData>Jane Smith</TableData>
              <TableData>Designer</TableData>
            </TableRow>
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Large Table</h3>
        <Table size="lg">
          <thead>
            <TableRow>
              <TableHeader>Name</TableHeader>
              <TableHeader>Role</TableHeader>
            </TableRow>
          </thead>
          <tbody>
            <TableRow>
              <TableData>John Doe</TableData>
              <TableData>Engineer</TableData>
            </TableRow>
            <TableRow>
              <TableData>Jane Smith</TableData>
              <TableData>Designer</TableData>
            </TableRow>
          </tbody>
        </Table>
      </div>
    </div>
}`,...(ce=(oe=k.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};var be,me,he;V.parameters={...V.parameters,docs:{...(be=V.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: () => {
    const [sortColumn, setSortColumn] = useState<string>('name');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
    const handleSort = (column: string) => {
      if (sortColumn === column) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortColumn(column);
        setSortDirection('asc');
      }
    };
    const getSortIcon = (column: string) => {
      if (sortColumn !== column) return '';
      return sortDirection === 'asc' ? '↑' : '↓';
    };
    const renderSortableHeader = (label: string, column: string, align?: 'left' | 'center' | 'right') => <TableHeader variant="sortable" onClick={() => handleSort(column)} style={{
      cursor: 'pointer'
    }} align={align}>
        <span className="inline-flex items-center">
          <span>{label}</span>
          <span className="w-4 text-center ml-1">{getSortIcon(column)}</span>
        </span>
      </TableHeader>;
    const sortedData = [...sampleData].sort((a, b) => {
      let aValue: string | number = a[sortColumn as keyof typeof a] as string | number;
      let bValue: string | number = b[sortColumn as keyof typeof b] as string | number;

      // Handle different data types
      if (sortColumn === 'age') {
        aValue = Number(aValue);
        bValue = Number(bValue);
      } else {
        aValue = String(aValue).toLowerCase();
        bValue = String(bValue).toLowerCase();
      }
      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return <Table>
        <thead>
          <TableRow>
            {renderSortableHeader('Name', 'name')}
            {renderSortableHeader('Age', 'age', 'center')}
            {renderSortableHeader('Role', 'role', 'right')}
            <TableHeader>Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sortedData.map(person => <TableRow key={person.id}>
              <TableData>{person.name}</TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData align="right">{person.role}</TableData>
              <TableData variant="action">
                <button className="text-blue-600 hover:text-blue-800 text-sm">
                  View
                </button>
              </TableData>
            </TableRow>)}
        </tbody>
      </Table>;
  }
}`,...(he=(me=V.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var xe,Te,pe;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: () => <div className="space-y-8">
      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Custom Colors
        </h3>
        <Table className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-900" variant="bordered">
          <thead>
            <TableRow>
              <TableHeader className="bg-blue-100 text-blue-800">
                Name
              </TableHeader>
              <TableHeader className="bg-blue-100 text-blue-800" align="center">
                Age
              </TableHeader>
              <TableHeader className="bg-blue-100 text-blue-800">
                Role
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sampleData.slice(0, 3).map(person => <TableRow key={person.id}>
                <TableData className="font-medium">{person.name}</TableData>
                <TableData align="center" className="font-mono">
                  {person.age}
                </TableData>
                <TableData className="text-blue-600">{person.role}</TableData>
              </TableRow>)}
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Dark Theme</h3>
        <Table className="bg-gray-800 text-white border-gray-700" variant="bordered">
          <thead>
            <TableRow>
              <TableHeader className="bg-gray-700 text-white border-gray-600">
                Name
              </TableHeader>
              <TableHeader className="bg-gray-700 text-white border-gray-600" align="center">
                Age
              </TableHeader>
              <TableHeader className="bg-gray-700 text-white border-gray-600">
                Role
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sampleData.slice(0, 3).map(person => <TableRow key={person.id} className="border-gray-700">
                <TableData className="text-gray-100">{person.name}</TableData>
                <TableData align="center" className="text-gray-300">
                  {person.age}
                </TableData>
                <TableData className="text-blue-400">{person.role}</TableData>
              </TableRow>)}
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Fancy Styling
        </h3>
        <Table className="shadow-2xl border-2 border-purple-200 rounded-xl overflow-hidden" size="lg">
          <thead>
            <TableRow>
              <TableHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Name
              </TableHeader>
              <TableHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white" align="center">
                Age
              </TableHeader>
              <TableHeader className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                Role
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sampleData.slice(0, 3).map((person, index) => <TableRow key={person.id} className={index % 2 === 0 ? 'bg-purple-50' : 'bg-pink-50'}>
                <TableData className="font-semibold text-purple-800">
                  {person.name}
                </TableData>
                <TableData align="center" className="text-purple-600 font-mono text-xl">
                  {person.age}
                </TableData>
                <TableData className="text-pink-600 font-medium">
                  {person.role}
                </TableData>
              </TableRow>)}
          </tbody>
        </Table>
      </div>

      <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">
          Minimal Style
        </h3>
        <Table className="shadow-none border-none">
          <thead>
            <TableRow>
              <TableHeader className="border-b-2 border-gray-300 bg-transparent pb-4">
                Name
              </TableHeader>
              <TableHeader className="border-b-2 border-gray-300 bg-transparent pb-4" align="center">
                Age
              </TableHeader>
              <TableHeader className="border-b-2 border-gray-300 bg-transparent pb-4">
                Role
              </TableHeader>
            </TableRow>
          </thead>
          <tbody>
            {sampleData.slice(0, 3).map(person => <TableRow key={person.id} className="border-none">
                <TableData className="py-4 border-none">
                  {person.name}
                </TableData>
                <TableData align="center" className="py-4 border-none">
                  {person.age}
                </TableData>
                <TableData className="py-4 border-none text-gray-600">
                  {person.role}
                </TableData>
              </TableRow>)}
          </tbody>
        </Table>
      </div>
    </div>
}`,...(pe=(Te=z.parameters)==null?void 0:Te.docs)==null?void 0:pe.source}}};var ge,ue,je;J.parameters={...J.parameters,docs:{...(ge=J.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    variant: 'striped',
    hover: true,
    size: 'md',
    caption: 'Employee Directory - Q4 2024',
    children: <>
        <thead>
          <TableRow>
            <TableHeader size="sm">ID</TableHeader>
            <TableHeader variant="sortable">Employee Name</TableHeader>
            <TableHeader variant="sortable" align="center">
              Age
            </TableHeader>
            <TableHeader>Contact</TableHeader>
            <TableHeader variant="sortable">Department</TableHeader>
            <TableHeader variant="sortable" align="right">
              Salary
            </TableHeader>
            <TableHeader align="center">Actions</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {sampleData.map((person, index) => <TableRow key={person.id}>
              <TableData size="sm" variant="numeric">
                {String(person.id).padStart(3, '0')}
              </TableData>
              <TableData>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-medium">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <span className="font-medium">{person.name}</span>
                </div>
              </TableData>
              <TableData variant="numeric" align="center">
                {person.age}
              </TableData>
              <TableData>
                <div className="text-sm">
                  <div>{person.email}</div>
                  <div className="text-gray-500">
                    +1 (555) 123-45{String(index + 10).slice(-2)}
                  </div>
                </div>
              </TableData>
              <TableData>{person.role}</TableData>
              <TableData variant="numeric" align="right">
                $
                {(50000 + Math.random() * 50000).toLocaleString('en-US', {
              minimumFractionDigits: 0
            })}
              </TableData>
              <TableData variant="action">
                <div className="flex space-x-2">
                  <button className="text-blue-600 hover:text-blue-800 text-sm">
                    Edit
                  </button>
                  <button className="text-gray-600 hover:text-gray-800 text-sm">
                    View
                  </button>
                  <button className="text-red-600 hover:text-red-800 text-sm">
                    Delete
                  </button>
                </div>
              </TableData>
            </TableRow>)}
        </tbody>
      </>
  }
}`,...(je=(ue=J.parameters)==null?void 0:ue.docs)==null?void 0:je.source}}};const Ee=["Default","Striped","Bordered","WithHover","Responsive","WithCaption","Sizes","SortableHeaders","CustomStyling","ComplexExample"];export{S as Bordered,J as ComplexExample,z as CustomStyling,H as Default,C as Responsive,k as Sizes,V as SortableHeaders,R as Striped,A as WithCaption,E as WithHover,Ee as __namedExportsOrder,Se as default};
