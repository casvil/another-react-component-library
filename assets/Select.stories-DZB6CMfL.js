import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-pYW_qTbO.js";import{c as me}from"./createLucideIcon-tUXEcNvt.js";import{c as t}from"./clsx-B-dksMZM.js";import{I as ge}from"./Input-DgYrbMTn.js";import{I as fe}from"./Icon-ChQjg3pH.js";import{L as he}from"./Label-BnpzQARg.js";import{u as ye}from"./useStableId-BdX7Nxsd.js";import"./size-BIjEKicz.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],be=me("chevron-down",ve),v=a.forwardRef(({label:o,options:n,defaultValue:$,value:b,onChange:C,placeholder:ee="Select an option",disabled:l=!1,size:ae="md",className:re,inputClassName:se,dropdownClassName:te,id:oe,...ne},le)=>{const N=ye(oe),q=b!==void 0,[ie,ce]=a.useState($??""),i=q&&b!==void 0?b:ie,[c,S]=a.useState(!1),[de,ue]=a.useState(0),x=a.useRef(null),w=a.useRef(null),I=e=>{q||ce(e),C&&C(e),S(!1)},V=()=>{l||S(e=>!e)};a.useEffect(()=>{const e=s=>{x.current&&!x.current.contains(s.target)&&S(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}},[]),a.useLayoutEffect(()=>{w.current&&ue(w.current.offsetWidth)},[c]);const pe=a.useMemo(()=>{var e;return((e=n.find(s=>s.value===i))==null?void 0:e.label)||""},[n,i]);return r.jsxs("div",{ref:x,className:t("relative",re),...ne,children:[o&&r.jsx(he,{htmlFor:N,children:o}),r.jsx("div",{ref:le,role:"button",tabIndex:l?-1:0,"aria-expanded":c,"aria-haspopup":"listbox","aria-label":o||"Select option",className:t("cursor-pointer",l&&"opacity-60 cursor-not-allowed"),onClick:V,onKeyDown:e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),V())},children:r.jsx(ge,{ref:w,id:N,value:pe,placeholder:ee,readOnly:!0,disabled:l,size:ae,className:t("cursor-pointer",se),icon:r.jsx(fe,{icon:be,size:16,className:t("transition-transform duration-200",c&&"rotate-180")}),iconPosition:"right"})}),c&&r.jsx("div",{className:t("absolute z-10 mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto",te),style:{width:de},role:"listbox",children:n.map(e=>r.jsx("div",{role:"option","aria-selected":e.value===i,className:t("px-3 py-2 cursor-pointer hover:bg-gray-100 focus:bg-gray-100 focus:outline-none",e.value===i&&"bg-indigo-50 text-indigo-900"),onClick:()=>I(e.value),onKeyDown:s=>{s.key===" "&&(s.preventDefault(),I(e.value))},tabIndex:0,children:e.label},e.value))})]})});v.displayName="Select";v.__docgenInfo={description:`Select molecule component.
Supports controlled and uncontrolled modes with keyboard accessibility.
Displays a styled dropdown with smooth open/close animations.`,methods:[],displayName:"Select",props:{label:{required:!1,tsType:{name:"string"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},defaultValue:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'Select an option'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},inputClassName:{required:!1,tsType:{name:"string"},description:""},dropdownClassName:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Z=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"}],De={title:"molecules/Select",component:v,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Choose a fruit",options:Z,placeholder:"Select a fruit"}},d={},u={args:{defaultValue:"apple"}},p={render:()=>{const[o,n]=a.useState("apple");return r.jsx(v,{options:Z,value:o,onChange:n,label:"Controlled Select",placeholder:"Pick a fruit"})}},m={args:{disabled:!0,defaultValue:"apple"}},g={args:{className:"p-6 bg-gray-100 rounded-xl",inputClassName:"border-indigo-500 text-indigo-700",dropdownClassName:"bg-indigo-50 border-indigo-200"}},f={args:{size:"sm",placeholder:"Small select"}},h={args:{size:"md",placeholder:"Medium select"}},y={args:{size:"lg",placeholder:"Large select"}};var T,D,L;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:"{}",...(L=(D=d.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var j,k,z;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    defaultValue: 'apple'
  }
}`,...(z=(k=u.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var E,O,R;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('apple');
    return <Select options={options} value={value} onChange={setValue} label="Controlled Select" placeholder="Pick a fruit" />;
  }
}`,...(R=(O=p.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var _,M,W;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'apple'
  }
}`,...(W=(M=m.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var P,A,K;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    className: 'p-6 bg-gray-100 rounded-xl',
    inputClassName: 'border-indigo-500 text-indigo-700',
    dropdownClassName: 'bg-indigo-50 border-indigo-200'
  }
}`,...(K=(A=g.parameters)==null?void 0:A.docs)==null?void 0:K.source}}};var U,B,F;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small select'
  }
}`,...(F=(B=f.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'md',
    placeholder: 'Medium select'
  }
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large select'
  }
}`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};const Le=["Default","Uncontrolled","Controlled","Disabled","WithCustomStyles","Small","Medium","Large"];export{p as Controlled,d as Default,m as Disabled,y as Large,h as Medium,f as Small,u as Uncontrolled,g as WithCustomStyles,Le as __namedExportsOrder,De as default};
