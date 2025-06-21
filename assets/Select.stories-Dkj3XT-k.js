import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-CsE_Dzsg.js";import{c as ge}from"./createLucideIcon-BX-ERhqh.js";import{c as s}from"./clsx-B-dksMZM.js";import{I as fe}from"./Input-BOmQ3F23.js";import{I as he}from"./Icon-ChQjg3pH.js";import{L as ye}from"./Label-BnpzQARg.js";import{u as ve}from"./useStableId-BNuJjgjZ.js";import"./size-C63hv48t.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],Se=ge("chevron-down",be),y=a.forwardRef(({label:t,options:o,defaultValue:ee,value:v,onChange:C,placeholder:ae="Select an option",disabled:n=!1,size:re="md",className:se,inputClassName:te,dropdownClassName:oe,id:ne,...le},ie)=>{var T;const N=ve(ne),q=v!==void 0,[ce,de]=a.useState(ee??""),b=q&&v!==void 0?v:ce,[l,S]=a.useState(!1),[ue,pe]=a.useState(0),x=a.useRef(null),w=a.useRef(null),I=e=>{q||de(e),C&&C(e),S(!1)},V=()=>{n||S(e=>!e)};a.useEffect(()=>{const e=i=>{x.current&&!x.current.contains(i.target)&&S(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),a.useLayoutEffect(()=>{w.current&&pe(w.current.offsetWidth)},[l]);const me=((T=o.find(e=>e.value===b))==null?void 0:T.label)||"";return r.jsxs("div",{ref:x,className:s("relative",se),...le,children:[t&&r.jsx(ye,{htmlFor:N,children:t}),r.jsx("div",{ref:ie,role:"button",tabIndex:n?-1:0,"aria-expanded":l,"aria-haspopup":"listbox","aria-label":t||"Select option",className:s("cursor-pointer",n&&"opacity-60 cursor-not-allowed"),onClick:V,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),V())},children:r.jsx(fe,{ref:w,id:N,value:me,placeholder:ae,readOnly:!0,disabled:n,size:re,className:s("cursor-pointer",te),icon:r.jsx(he,{icon:Se,size:16,className:s("transition-transform duration-200",l&&"rotate-180")}),iconPosition:"right"})}),l&&r.jsx("div",{className:s("absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto",oe),style:{width:ue},role:"listbox",children:o.map(e=>r.jsx("div",{role:"option","aria-selected":e.value===b,className:s("px-3 py-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",e.value===b&&"bg-indigo-50 text-indigo-900"),onClick:()=>I(e.value),onKeyDown:i=>{i.key===" "&&(i.preventDefault(),I(e.value))},tabIndex:0,children:e.label},e.value))})]})});y.displayName="Select";y.__docgenInfo={description:`Select molecule component.
Supports controlled and uncontrolled modes with keyboard accessibility.
Displays a styled dropdown with smooth open/close animations.`,methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},dropdownClassName:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const $=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"}],Le={title:"molecules/Select",component:y,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Choose a fruit",options:$,placeholder:"Select a fruit"}},c={},d={args:{defaultValue:"apple"}},u={render:()=>{const[t,o]=a.useState("apple");return r.jsx(y,{options:$,value:t,onChange:o,label:"Controlled Select",placeholder:"Pick a fruit"})}},p={args:{disabled:!0,defaultValue:"apple"}},m={args:{className:"p-6 bg-gray-100 rounded-xl",inputClassName:"border-indigo-500 text-indigo-700",dropdownClassName:"bg-indigo-50 border-indigo-200"}},g={args:{size:"sm",placeholder:"Small select"}},f={args:{size:"md",placeholder:"Medium select"}},h={args:{size:"lg",placeholder:"Large select"}};var D,L,j;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:"{}",...(j=(L=c.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var k,z,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    defaultValue: 'apple'
  }
}`,...(E=(z=d.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var O,R,_;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('apple');
    return <Select options={options} value={value} onChange={setValue} label="Controlled Select" placeholder="Pick a fruit" />;
  }
}`,...(_=(R=u.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};var W,M,P;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'apple'
  }
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var A,K,U;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    className: 'p-6 bg-gray-100 rounded-xl',
    inputClassName: 'border-indigo-500 text-indigo-700',
    dropdownClassName: 'bg-indigo-50 border-indigo-200'
  }
}`,...(U=(K=m.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var B,F,G;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small select'
  }
}`,...(G=(F=g.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var H,J,Q;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 'md',
    placeholder: 'Medium select'
  }
}`,...(Q=(J=f.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large select'
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const je=["Default","Uncontrolled","Controlled","Disabled","WithCustomStyles","Small","Medium","Large"];export{u as Controlled,c as Default,p as Disabled,h as Large,f as Medium,g as Small,d as Uncontrolled,m as WithCustomStyles,je as __namedExportsOrder,Le as default};
