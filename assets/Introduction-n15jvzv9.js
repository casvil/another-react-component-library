import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as t}from"./index-BlpR4ebG.js";import{M as l}from"./blocks-BxpQGLjE.js";import"./Button-C9QtWei4.js";import"./Input-ATFqI9Yy.js";import"./Badge-BVDemmK8.js";import{F as a,a as o}from"./Form-C9LOZFHl.js";import{S as c}from"./Select-BEn0rGAS.js";import{S as d}from"./Switch-Cj9-_Nh0.js";import{C as h}from"./Clock-DRye3g8o.js";import"./iframe-CvNxPCzt.js";import"./index-B3o4wIpU.js";import"./clsx-B-dksMZM.js";import"./size-DhI2ozjY.js";import"./FormField-CMuSwMTd.js";import"./createLucideIcon-nbKSwVxJ.js";import"./Label-BnpzQARg.js";import"./Tooltip-CrjkNCmM.js";import"./useStableId-HNdiPy7R.js";import"./ErrorMessage-B1DJFAfK.js";import"./TimeDisplay-BVGiAAxP.js";function s(n){const r={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...t(),...n.components};return e.jsxs(e.Fragment,{children:[e.jsx(l,{title:"Introduction"}),`
`,e.jsx(r.h1,{id:"another-react-component-library",children:"Another React Component Library"}),`
`,e.jsx(r.p,{children:"A customizable React 19 component library built with Vite, Tailwind CSS v4 and TypeScript."}),`
`,e.jsx(r.h2,{id:"-getting-started",children:"🚀 Getting Started"}),`
`,e.jsx(r.p,{children:"Install the component library in your React project:"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-bash",children:`npm install another-react-component-library
`})}),`
`,e.jsx(r.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(r.pre,{children:e.jsx(r.code,{className:"language-tsx",children:`import {
  Form,
  FormInput,
  Select,
  Switch,
  Clock,
} from 'another-react-component-library';

const fruitOptions = [
  { value: 'apple', label: '🍎 Apple' },
  { value: 'banana', label: '🍌 Banana' },
  { value: 'orange', label: '🍊 Orange' },
  { value: 'grape', label: '🍇 Grape' },
];

function App() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Clock format="HH:mm:ss" bordered />
      </div>
      <div>
        <Form onSubmit={(data) => alert(JSON.stringify(data, null, 2))}>
          <FormInput
            name="username"
            label="Username"
            placeholder="Enter your username"
            required
          />
          <Select
            label="Favorite Fruit"
            options={fruitOptions}
            defaultValue="apple"
          />
          <Switch
            label="Enable notifications"
            defaultChecked={true}
            wrapperClassName="space-x-6"
          />
        </Form>
      </div>
    </div>
  );
}
`})}),`
`,e.jsx(r.p,{children:e.jsx(r.strong,{children:"Live Example:"})}),`
`,e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",border:"1px solid #e5e7eb",borderRadius:"8px",backgroundColor:"#f9fafb"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(h,{format:"HH:mm:ss",bordered:!0})}),e.jsx("div",{children:e.jsxs(a,{onSubmit:i=>alert(JSON.stringify(i,null,2)),children:[e.jsx(o,{name:"username",label:"Username",placeholder:"Enter your username",required:!0}),e.jsx(c,{label:"Favorite Fruit",options:[{value:"apple",label:"🍎 Apple"},{value:"banana",label:"🍌 Banana"},{value:"orange",label:"🍊 Orange"},{value:"grape",label:"🍇 Grape"}],defaultValue:"apple"}),e.jsx(d,{label:"Enable notifications",defaultChecked:!0,wrapperClassName:"space-x-6"})]})})]}),`
`,e.jsx(r.h2,{id:"-component-architecture--gallery",children:"🧩 Component Architecture & Gallery"}),`
`,e.jsxs(r.p,{children:["This library follows ",e.jsx(r.strong,{children:"Atomic Design"})," principles, organizing components into atoms and molecules:"]}),`
`,e.jsx(r.h3,{id:"️-atoms",children:"⚛️ Atoms"}),`
`,e.jsx(r.p,{children:"Basic building blocks - fundamental UI elements."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-avatar--image",children:"Avatar"})})," - User profile images"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-badge--default",children:"Badge"})})," - Status indicators and labels"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-button--primary",children:"Button"})})," - Interactive buttons with variants"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-checkbox--default",children:"Checkbox"})})," - Selection controls"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-divider--horizontal",children:"Divider"})})," - Visual separators"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-errormessage--default",children:"ErrorMessage"})})," - Error displays"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-helpertext--default",children:"HelperText"})})," - Contextual information"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-icon--medium",children:"Icon"})})," - Lucide icon wrapper"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-iconbutton--primary",children:"IconButton"})})," - Icon-only buttons"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-image--default",children:"Image"})})," - Image display"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-input--default",children:"Input"})})," - Text inputs"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-label--default",children:"Label"})})," - Form labels"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-link--primary",children:"Link"})})," - Navigation links"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-progressbar--default",children:"ProgressBar"})})," - Progress indicators"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-radio--default",children:"Radio"})})," - Single selection controls"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-spinner--default",children:"Spinner"})})," - Loading indicators"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-statusindicator--default",children:"StatusIndicator"})})," - Status displays"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-switch--default",children:"Switch"})})," - Toggle controls"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-textarea--default",children:"TextArea"})})," - Multi-line text inputs"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-timedisplay--default",children:"TimeDisplay"})})," - Time formatting"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-tooltip--default",children:"Tooltip"})})," - Information overlays"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/atoms-username--default",children:"Username"})})," - Username displays"]}),`
`]}),`
`,e.jsx(r.h3,{id:"-molecules",children:"🧬 Molecules"}),`
`,e.jsx(r.p,{children:"Component combinations - groups of atoms working together."}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-badgeavatar--default",children:"BadgeAvatar"})})," - Avatar with badge overlay"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-checkboxgroup--default",children:"CheckboxGroup"})})," - Multiple checkbox management"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-clock--default",children:"Clock"})})," - Real-time clock display"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-creditcardform--default",children:"CreditCardForm"})})," - Credit card input form with validation"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-creditcardpreview--default",children:"CreditCardPreview"})})," - Editable credit card preview"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-form--basicform",children:"Form"})})," - Form management with validation"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-formfield--default",children:"FormField"})})," - Input with label and validation"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-form--basicform",children:"FormInput"})})," - Form-connected input"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-inputfield--default",children:"InputField"})})," - Enhanced input with states"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-radiogroup--default",children:"RadioGroup"})})," - Multiple radio management"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-search--default",children:"Search"})})," - Search input"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-select--default",children:"Select"})})," - Dropdown selection"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:e.jsx(r.a,{href:"?path=/story/molecules-userpreview--default",children:"UserPreview"})})," - User info display"]}),`
`]}),`
`,e.jsx(r.h2,{id:"-documentation",children:"📖 Documentation"}),`
`,e.jsx(r.p,{children:"Each component includes:"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Interactive Storybook examples"})," - Live demonstrations with multiple variants"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Props API documentation"})," - Auto-generated from TypeScript interfaces"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Interactive controls"})," - Test different prop combinations"]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Multiple use cases"})," - Primary, secondary, disabled states, and size variants"]}),`
`]}),`
`,e.jsx(r.h2,{id:"-resources",children:"🔗 Resources"}),`
`,e.jsxs(r.ul,{children:[`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"GitHub"}),": ",e.jsx(r.a,{href:"https://github.com/casvil/another-react-component-library",rel:"nofollow",children:"casvil/another-react-component-library"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"Homepage"}),": ",e.jsx(r.a,{href:"https://casvil.github.io/another-react-component-library",rel:"nofollow",children:"casvil.github.io/another-react-component-library"})]}),`
`,e.jsxs(r.li,{children:[e.jsx(r.strong,{children:"NPM"}),": ",e.jsx(r.a,{href:"https://www.npmjs.com/package/another-react-component-library",rel:"nofollow",children:"another-react-component-library"})]}),`
`]}),`
`,e.jsx(r.hr,{}),`
`,e.jsxs(r.p,{children:[e.jsx(r.strong,{children:"Version:"})," v0.11.0 | ",e.jsx(r.strong,{children:"Author:"})," David Casanellas | ",e.jsx(r.strong,{children:"License:"})," MIT",e.jsx(r.br,{}),`
`,e.jsx(r.strong,{children:"React:"})," 18+ or 19+ | ",e.jsx(r.strong,{children:"Dependencies:"})," Tailwind CSS v4, Lucide React, clsx"]})]})}function R(n={}){const{wrapper:r}={...t(),...n.components};return r?e.jsx(r,{...n,children:e.jsx(s,{...n})}):s(n)}export{R as default};
