import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as i}from"./index-DA6JI1RV.js";import{M as t}from"./blocks-D4uqKqOs.js";import"./Button-ukBVQVn2.js";import"./Input-DqEeptCX.js";import"./Badge-DtN_85IE.js";import{F as a,a as o}from"./Form-Cndht0II.js";import{S as c}from"./Select-SFneh2Yz.js";import{S as d}from"./Switch-DD_mSkj9.js";import{C as h}from"./Clock-Cj8EoJT1.js";import"./iframe-Ds_X6DKR.js";import"./index-B2L-jeCW.js";import"./clsx-B-dksMZM.js";import"./size-DtCGJLJt.js";import"./FormField-B10A5keA.js";import"./createLucideIcon-5dodZkuP.js";import"./Label-BnpzQARg.js";import"./Tooltip-B_rdbyG5.js";import"./useStableId-DYXkd8vM.js";import"./ErrorMessage-B1DJFAfK.js";import"./TimeDisplay-D015fMan.js";function s(r){const n={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...i(),...r.components};return e.jsxs(e.Fragment,{children:[e.jsx(t,{title:"Introduction"}),`
`,e.jsx(n.h1,{id:"another-react-component-library",children:"Another React Component Library"}),`
`,e.jsx(n.p,{children:"A customizable React 19 component library built with Vite, Tailwind CSS v4 and TypeScript."}),`
`,e.jsx(n.h2,{id:"-getting-started",children:"🚀 Getting Started"}),`
`,e.jsx(n.p,{children:"Install the component library in your React project:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-bash",children:`npm install another-react-component-library
`})}),`
`,e.jsx(n.h3,{id:"basic-usage",children:"Basic Usage"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-tsx",children:`import {
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
`,e.jsx(n.p,{children:e.jsx(n.strong,{children:"Live Example:"})}),`
`,e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",padding:"16px",border:"1px solid #e5e7eb",borderRadius:"8px",backgroundColor:"#f9fafb"},children:[e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(h,{format:"HH:mm:ss",bordered:!0})}),e.jsx("div",{children:e.jsxs(a,{onSubmit:l=>alert(JSON.stringify(l,null,2)),children:[e.jsx(o,{name:"username",label:"Username",placeholder:"Enter your username",required:!0}),e.jsx(c,{label:"Favorite Fruit",options:[{value:"apple",label:"🍎 Apple"},{value:"banana",label:"🍌 Banana"},{value:"orange",label:"🍊 Orange"},{value:"grape",label:"🍇 Grape"}],defaultValue:"apple"}),e.jsx(d,{label:"Enable notifications",defaultChecked:!0,wrapperClassName:"space-x-6"})]})})]}),`
`,e.jsx(n.h2,{id:"-component-architecture",children:"🧩 Component Architecture"}),`
`,e.jsxs(n.p,{children:["This library follows ",e.jsx(n.strong,{children:"Atomic Design"})," principles, organizing components into atoms and molecules:"]}),`
`,e.jsx(n.h3,{id:"️-atoms",children:"⚛️ Atoms"}),`
`,e.jsx(n.p,{children:"Basic building blocks - fundamental UI elements."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Avatar"})," - User profile images"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Badge"})," - Status indicators and labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Button"})," - Interactive buttons"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Checkbox"})," - Selection controls"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Divider"})," - Visual separators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ErrorMessage"})," - Error displays"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"HelperText"})," - Contextual information"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Icon"})," - Lucide icon wrapper"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"IconButton"})," - Icon-only buttons"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Image"})," - Image display"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Input"})," - Text inputs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Label"})," - Form labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Link"})," - Navigation links"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"ProgressBar"})," - Progress indicators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Radio"})," - Single selection controls"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Spinner"})," - Loading indicators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"StatusIndicator"})," - Status displays"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Switch"})," - Toggle controls"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TextArea"})," - Multi-line text inputs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"TimeDisplay"})," - Time formatting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Tooltip"})," - Information overlays"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Username"})," - Username displays"]}),`
`]}),`
`,e.jsx(n.h3,{id:"-molecules",children:"🧬 Molecules"}),`
`,e.jsx(n.p,{children:"Component combinations - groups of atoms working together."}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"BadgeAvatar"})," - Avatar with badge overlay"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"CheckboxGroup"})," - Multiple checkbox management"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Clock"})," - Real-time clock display"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Form"})," - Form management with validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FormField"})," - Input with label and validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"FormInput"})," - Form-connected input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"InputField"})," - Enhanced input with states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"RadioGroup"})," - Multiple radio management"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Search"})," - Search input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Select"})," - Dropdown selection"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"UserPreview"})," - User info display"]}),`
`]}),`
`,e.jsx(n.h2,{id:"-component-gallery",children:"🎨 Component Gallery"}),`
`,e.jsx(n.h3,{id:"atoms",children:"Atoms"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-avatar--image",children:"Avatar"})," - User profile images"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-badge--default",children:"Badge"})," - Status indicators and labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-button--primary",children:"Button"})," - Interactive buttons with variants"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-checkbox--default",children:"Checkbox"})," - Selection controls"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-divider--horizontal",children:"Divider"})," - Visual separators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-errormessage--default",children:"ErrorMessage"})," - Error displays"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-helpertext--default",children:"HelperText"})," - Contextual information"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-icon--medium",children:"Icon"})," - Lucide icon wrapper"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-iconbutton--primary",children:"IconButton"})," - Icon-only buttons"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-image--default",children:"Image"})," - Image display"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-input--default",children:"Input"})," - Text inputs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-label--default",children:"Label"})," - Form labels"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-link--primary",children:"Link"})," - Navigation links"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-progressbar--default",children:"ProgressBar"})," - Progress indicators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-radio--default",children:"Radio"})," - Single selection controls"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-spinner--default",children:"Spinner"})," - Loading indicators"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-statusindicator--default",children:"StatusIndicator"})," - Status displays"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-switch--default",children:"Switch"})," - Toggle controls"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-textarea--default",children:"TextArea"})," - Multi-line text inputs"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-timedisplay--default",children:"TimeDisplay"})," - Time formatting"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-tooltip--default",children:"Tooltip"})," - Information overlays"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/atoms-username--default",children:"Username"})," - Username displays"]}),`
`]}),`
`,e.jsx(n.h3,{id:"molecules",children:"Molecules"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-badgeavatar--default",children:"BadgeAvatar"})," - Avatar with badge overlay"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-checkboxgroup--default",children:"CheckboxGroup"})," - Multiple checkbox management"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-clock--default",children:"Clock"})," - Real-time clock display"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-form--basicform",children:"Form"})," - Form management with validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-formfield--default",children:"FormField"})," - Input with label and validation"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-inputfield--default",children:"InputField"})," - Enhanced input with states"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-radiogroup--default",children:"RadioGroup"})," - Multiple radio management"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-search--default",children:"Search"})," - Search input"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-select--default",children:"Select"})," - Dropdown selection"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.a,{href:"?path=/story/molecules-userpreview--default",children:"UserPreview"})," - User info display"]}),`
`]}),`
`,e.jsx(n.h2,{id:"-documentation",children:"📖 Documentation"}),`
`,e.jsx(n.p,{children:"Each component includes:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interactive Storybook examples"})," - Live demonstrations with multiple variants"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Props API documentation"})," - Auto-generated from TypeScript interfaces"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Interactive controls"})," - Test different prop combinations"]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Multiple use cases"})," - Primary, secondary, disabled states, and size variants"]}),`
`]}),`
`,e.jsx(n.h2,{id:"-resources",children:"🔗 Resources"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"GitHub"}),": ",e.jsx(n.a,{href:"https://github.com/casvil/another-react-component-library",rel:"nofollow",children:"casvil/another-react-component-library"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"Homepage"}),": ",e.jsx(n.a,{href:"https://casvil.github.io/another-react-component-library",rel:"nofollow",children:"casvil.github.io/another-react-component-library"})]}),`
`,e.jsxs(n.li,{children:[e.jsx(n.strong,{children:"NPM"}),": ",e.jsx(n.a,{href:"https://www.npmjs.com/package/another-react-component-library",rel:"nofollow",children:"another-react-component-library"})]}),`
`]}),`
`,e.jsx(n.hr,{}),`
`,e.jsxs(n.p,{children:[e.jsx(n.strong,{children:"Version:"})," v0.11.0 | ",e.jsx(n.strong,{children:"Author:"})," David Casanellas | ",e.jsx(n.strong,{children:"License:"})," MIT",e.jsx(n.br,{}),`
`,e.jsx(n.strong,{children:"React:"})," 18+ or 19+ | ",e.jsx(n.strong,{children:"Dependencies:"})," Tailwind CSS v4, Lucide React, clsx"]})]})}function L(r={}){const{wrapper:n}={...i(),...r.components};return n?e.jsx(n,{...r,children:e.jsx(s,{...r})}):s(r)}export{L as default};
