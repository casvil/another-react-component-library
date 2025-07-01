import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as _,r as M}from"./iframe-q8_L0F5O.js";import{c as K}from"./clsx-B-dksMZM.js";import{m}from"./classes-Cxnm2ATV.js";const W={default:"bg-white border border-gray-200",outlined:"bg-white border-2 border-gray-300",elevated:"bg-white border border-gray-100"},a=_.memo(M.forwardRef(({children:D,size:o="md",variant:u="default",interactive:c=!1,className:A,as:O="div",...h},V)=>{const q=K(m.padding[o],m.borderRadius[o],W[u],{[m.shadow[o]]:u==="elevated","transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer":c},A),G={ref:V,className:q,...c&&{tabIndex:0,role:"button",onKeyDown:r=>{c&&(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),h.onClick&&r.currentTarget.click())}},...h};return e.jsx(O,{...G,children:D})}));a.displayName="Card";a.__docgenInfo={description:`Card atom component. A versatile container for displaying content in a structured format.
Supports different sizes, variants (default, outlined, elevated), and interactive behavior.
Can be rendered as any HTML element using the 'as' prop for semantic flexibility.`,methods:[],displayName:"Card",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'outlined' | 'elevated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'elevated'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},interactive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:"",defaultValue:{value:"'div'",computed:!1}}}};const J={title:"Atoms/Card",component:a,parameters:{layout:"padded",backgrounds:{default:"light",values:[{name:"light",value:"#f5f5f5"},{name:"dark",value:"#333"}]}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"]},size:{control:"select",options:["sm","md","lg"]},interactive:{control:"boolean"},as:{control:"select",options:["div","section","article","aside"]},onClick:{action:"clicked"}},args:{onClick:()=>{}}},t={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Card Title"}),e.jsx("p",{className:"text-gray-600",children:"This is the card content. Cards can contain any type of content including text, images, buttons, and other components."})]}),variant:"default",size:"md",interactive:!1}},s={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Outlined Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a more prominent border styling."})]}),variant:"outlined",size:"md",interactive:!1}},n={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Elevated Card"}),e.jsx("p",{className:"text-gray-600",children:"This card has a shadow that makes it appear elevated from the background."})]}),variant:"elevated",size:"md",interactive:!1}},l={args:{children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg font-semibold mb-2",children:"Interactive Card"}),e.jsx("p",{className:"text-gray-600",children:"This card is interactive and will respond to hover and focus states. Click me!"})]}),variant:"elevated",size:"md",interactive:!0}},d={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs(a,{variant:"default",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Default"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Standard card styling with subtle border."})]}),e.jsxs(a,{variant:"outlined",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Outlined"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Card with prominent border styling."})]}),e.jsxs(a,{variant:"elevated",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Elevated"}),e.jsx("p",{className:"text-sm text-gray-600",children:"Card with shadow for depth."})]})]})},i={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs(a,{className:"bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-300 transition-colors",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-3 h-3 bg-purple-500 rounded-full mr-2"}),e.jsx("h3",{className:"font-semibold text-purple-900",children:"Gradient Card"})]}),e.jsx("p",{className:"text-purple-700 text-sm",children:"Custom gradient background with purple accent colors."})]}),e.jsxs(a,{interactive:!0,className:"bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-3 h-3 bg-white rounded-full mr-2"}),e.jsx("h3",{className:"font-semibold",children:"Interactive Gradient"})]}),e.jsx("p",{className:"text-blue-100 text-sm",children:"Click me! Custom interactive styling with hover effects."})]}),e.jsxs(a,{className:"bg-transparent border-l-4 border-l-green-500 border-t-0 border-r-0 border-b-0 rounded-none pl-4 shadow-none",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-3 h-3 bg-green-500 rounded-full mr-2"}),e.jsx("h3",{className:"font-semibold text-green-900",children:"Minimal Style"})]}),e.jsx("p",{className:"text-green-700 text-sm",children:"Clean minimal design with left accent border."})]}),e.jsxs(a,{className:"bg-amber-50 border-amber-200 border-l-4 border-l-amber-500",children:[e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-4 h-4 text-amber-600",children:"⚠️"}),e.jsx("h3",{className:"font-semibold text-amber-900 ml-2",children:"Warning Card"})]}),e.jsx("p",{className:"text-amber-800 text-sm",children:"Custom styling for warning or alert-style content."})]}),e.jsxs(a,{className:"bg-emerald-50 border-emerald-200 relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-12 h-12 bg-emerald-500 transform rotate-45 translate-x-6 -translate-y-6"}),e.jsxs("div",{className:"flex items-center mb-3",children:[e.jsx("div",{className:"w-4 h-4 text-emerald-600",children:"✅"}),e.jsx("h3",{className:"font-semibold text-emerald-900 ml-2",children:"Success Card"})]}),e.jsx("p",{className:"text-emerald-800 text-sm",children:"Custom success styling with decorative corner element."})]})]}),parameters:{docs:{description:{story:"Cards can be extensively customized using the `className` prop. You can override default styles, add gradients, custom colors, animations, and create theme-specific designs while maintaining the card's structural behavior."}}}};var p,b,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">
          This is the card content. Cards can contain any type of content
          including text, images, buttons, and other components.
        </p>
      </div>,
    variant: 'default',
    size: 'md',
    interactive: false
  }
}`,...(g=(b=t.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var v,f,x;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Outlined Card</h3>
        <p className="text-gray-600">
          This card has a more prominent border styling.
        </p>
      </div>,
    variant: 'outlined',
    size: 'md',
    interactive: false
  }
}`,...(x=(f=s.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var N,C,y;n.parameters={...n.parameters,docs:{...(N=n.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Elevated Card</h3>
        <p className="text-gray-600">
          This card has a shadow that makes it appear elevated from the
          background.
        </p>
      </div>,
    variant: 'elevated',
    size: 'md',
    interactive: false
  }
}`,...(y=(C=n.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var w,j,T;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: <div>
        <h3 className="text-lg font-semibold mb-2">Interactive Card</h3>
        <p className="text-gray-600">
          This card is interactive and will respond to hover and focus states.
          Click me!
        </p>
      </div>,
    variant: 'elevated',
    size: 'md',
    interactive: true
  }
}`,...(T=(j=l.parameters)==null?void 0:j.docs)==null?void 0:T.source}}};var k,S,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card variant="default">
        <h3 className="font-semibold mb-2">Default</h3>
        <p className="text-sm text-gray-600">
          Standard card styling with subtle border.
        </p>
      </Card>
      <Card variant="outlined">
        <h3 className="font-semibold mb-2">Outlined</h3>
        <p className="text-sm text-gray-600">
          Card with prominent border styling.
        </p>
      </Card>
      <Card variant="elevated">
        <h3 className="font-semibold mb-2">Elevated</h3>
        <p className="text-sm text-gray-600">Card with shadow for depth.</p>
      </Card>
    </div>
}`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var z,I,R;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Gradient Border Card */}
      <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 hover:border-purple-300 transition-colors">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <h3 className="font-semibold text-purple-900">Gradient Card</h3>
        </div>
        <p className="text-purple-700 text-sm">
          Custom gradient background with purple accent colors.
        </p>
      </Card>

      {/* Colorful Interactive Card */}
      <Card interactive className="bg-gradient-to-r from-blue-500 to-purple-600 border-none text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-white rounded-full mr-2"></div>
          <h3 className="font-semibold">Interactive Gradient</h3>
        </div>
        <p className="text-blue-100 text-sm">
          Click me! Custom interactive styling with hover effects.
        </p>
      </Card>

      {/* Minimal Card */}
      <Card className="bg-transparent border-l-4 border-l-green-500 border-t-0 border-r-0 border-b-0 rounded-none pl-4 shadow-none">
        <div className="flex items-center mb-3">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <h3 className="font-semibold text-green-900">Minimal Style</h3>
        </div>
        <p className="text-green-700 text-sm">
          Clean minimal design with left accent border.
        </p>
      </Card>

      {/* Warning Card */}
      <Card className="bg-amber-50 border-amber-200 border-l-4 border-l-amber-500">
        <div className="flex items-center mb-3">
          <div className="w-4 h-4 text-amber-600">⚠️</div>
          <h3 className="font-semibold text-amber-900 ml-2">Warning Card</h3>
        </div>
        <p className="text-amber-800 text-sm">
          Custom styling for warning or alert-style content.
        </p>
      </Card>

      {/* Success Card */}
      <Card className="bg-emerald-50 border-emerald-200 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-12 h-12 bg-emerald-500 transform rotate-45 translate-x-6 -translate-y-6"></div>
        <div className="flex items-center mb-3">
          <div className="w-4 h-4 text-emerald-600">✅</div>
          <h3 className="font-semibold text-emerald-900 ml-2">Success Card</h3>
        </div>
        <p className="text-emerald-800 text-sm">
          Custom success styling with decorative corner element.
        </p>
      </Card>
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Cards can be extensively customized using the \`className\` prop. You can override default styles, add gradients, custom colors, animations, and create theme-specific designs while maintaining the card's structural behavior."
      }
    }
  }
}`,...(R=(I=i.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};const Q=["Default","Outlined","Elevated","Interactive","AllVariants","CustomStyling"];export{d as AllVariants,i as CustomStyling,t as Default,n as Elevated,l as Interactive,s as Outlined,Q as __namedExportsOrder,J as default};
