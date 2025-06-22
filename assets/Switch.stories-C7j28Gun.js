import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as a}from"./iframe-BZGwmEKa.js";import{c as r}from"./clsx-B-dksMZM.js";import{L as pe}from"./Label-BnpzQARg.js";import{u as ge}from"./useStableId-DwVmev1F.js";import{d as he,t as fe}from"./size-G8QTwTDo.js";const t=a.forwardRef(({checked:n,defaultChecked:s,id:i,label:y,size:l="md",className:ae,labelClassName:re,wrapperClassName:te,description:m,disabled:d,...ne},u)=>{const p=ge(i),j=`${p}-description`,oe=a.useRef(null),[le,W]=a.useState(s??!1),o=n!==void 0,ce=o?n:void 0,ie=o?void 0:s,T=o?n:le;a.useEffect(()=>{!o&&s!==void 0&&W(s)},[s,o]);const{onChange:k,...de}=ne,me=a.useCallback(c=>{o||W(c.target.checked),k&&k(c)},[o,k]),g=a.useMemo(()=>he[l],[l]),ue=a.useMemo(()=>fe[l],[l]);return e.jsxs("div",{className:r("inline-flex items-center space-x-3",d&&"opacity-50 cursor-not-allowed",te),children:[e.jsxs("div",{className:"relative inline-flex items-center",children:[e.jsx("input",{ref:c=>{typeof u=="function"?u(c):u&&(u.current=c),oe.current=c},id:p,type:"checkbox",role:"switch",checked:ce,defaultChecked:ie,disabled:d,"aria-describedby":m?j:void 0,className:r("sr-only",ae),onChange:me,...de}),e.jsx("label",{htmlFor:p,className:r("relative inline-flex cursor-pointer items-center rounded-full transition-colors duration-200 ease-in-out focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2",g.track,T?r("bg-indigo-600",!d&&"hover:bg-indigo-700"):r("bg-gray-200",!d&&"hover:bg-gray-300"),d&&"cursor-not-allowed"),children:e.jsx("span",{className:r("inline-block transform rounded-full bg-white shadow-lg transition-transform duration-200 ease-in-out",g.thumb,T?g.thumbTranslate:g.thumbUnchecked)})})]}),(y||m)&&e.jsxs("div",{className:"flex flex-col",children:[y&&e.jsx(pe,{className:r("cursor-pointer",ue,re),htmlFor:p,children:y}),m&&e.jsx("span",{id:j,className:r("text-gray-500",l==="sm"?"text-xs":l==="md"?"text-sm":"text-base"),children:m})]})]})});t.__docgenInfo={description:`Switch atom component.
Renders a toggle switch input with an optional label using a Label component.
Supports controlled state, custom styling, and accessibility features.`,methods:[],displayName:"Switch",props:{label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},labelClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const ve={title:"molecules/Switch",component:t,parameters:{layout:"centered"},args:{label:"Toggle option"},tags:["autodocs"],argTypes:{}},h={},f={render:()=>{const[n,s]=a.useState(!0);return e.jsx(t,{checked:n,onChange:i=>s(i.target.checked),label:"Notifications enabled"})}},b={args:{disabled:!0}},C={args:{label:"Custom styled label",labelClassName:"text-pink-600 font-bold"}},x={args:{label:"Wrapper styled",wrapperClassName:"bg-gray-100 p-4 rounded-md"}},N={args:{label:"Custom input class",className:"peer"}},S={render:()=>{const[n,s]=a.useState(!0);return e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Controlled Switch"}),e.jsx(t,{label:"Controlled",checked:n,onChange:i=>s(i.target.checked)})]}),e.jsxs("div",{children:[e.jsx("h4",{className:"font-medium",children:"Uncontrolled Switch"}),e.jsx(t,{label:"Uncontrolled",defaultChecked:!0})]})]})}},w={args:{className:"ring-2 ring-offset-2 ring-indigo-500",labelClassName:"text-indigo-700 font-semibold",wrapperClassName:"p-4 bg-indigo-50 rounded-lg"}},v={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(t,{label:"Small",size:"sm"}),e.jsx(t,{label:"Medium",size:"md"}),e.jsx(t,{label:"Large",size:"lg"})]})};var z,L,I;h.parameters={...h.parameters,docs:{...(z=h.parameters)==null?void 0:z.docs,source:{originalSource:"{}",...(I=(L=h.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var U,q,D;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const [checked, setChecked] = useState(true);
    return <Switch checked={checked} onChange={e => setChecked(e.target.checked)} label="Notifications enabled" />;
  }
}`,...(D=(q=f.parameters)==null?void 0:q.docs)==null?void 0:D.source}}};var R,E,M;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(M=(E=b.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var _,A,F;C.parameters={...C.parameters,docs:{...(_=C.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Custom styled label',
    labelClassName: 'text-pink-600 font-bold'
  }
}`,...(F=(A=C.parameters)==null?void 0:A.docs)==null?void 0:F.source}}};var O,P,V;x.parameters={...x.parameters,docs:{...(O=x.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    label: 'Wrapper styled',
    wrapperClassName: 'bg-gray-100 p-4 rounded-md'
  }
}`,...(V=(P=x.parameters)==null?void 0:P.docs)==null?void 0:V.source}}};var $,B,G;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    label: 'Custom input class',
    className: 'peer'
  }
}`,...(G=(B=N.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var H,J,K;S.parameters={...S.parameters,docs:{...(H=S.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => {
    const [controlled, setControlled] = useState(true);
    return <div className="space-y-6">
        <div>
          <h4 className="font-medium">Controlled Switch</h4>
          <Switch label="Controlled" checked={controlled} onChange={e => setControlled(e.target.checked)} />
        </div>
        <div>
          <h4 className="font-medium">Uncontrolled Switch</h4>
          <Switch label="Uncontrolled" defaultChecked />
        </div>
      </div>;
  }
}`,...(K=(J=S.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;w.parameters={...w.parameters,docs:{...(Q=w.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    className: 'ring-2 ring-offset-2 ring-indigo-500',
    labelClassName: 'text-indigo-700 font-semibold',
    wrapperClassName: 'p-4 bg-indigo-50 rounded-lg'
  }
}`,...(Y=(X=w.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,se;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Switch label="Small" size="sm" />
      <Switch label="Medium" size="md" />
      <Switch label="Large" size="lg" />
    </div>
}`,...(se=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};const ye=["Default","Checked","Disabled","WithLabelClassName","WithWrapperClassName","WithCustomInputClassName","ControlledUncontrolledComparison","CustomStyles","AllSizes"];export{v as AllSizes,f as Checked,S as ControlledUncontrolledComparison,w as CustomStyles,h as Default,b as Disabled,N as WithCustomInputClassName,C as WithLabelClassName,x as WithWrapperClassName,ye as __namedExportsOrder,ve as default};
