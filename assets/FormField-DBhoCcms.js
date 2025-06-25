import{c as i}from"./createLucideIcon-BehFmr7A.js";import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as b}from"./iframe-CWUf6DFn.js";import{c as o}from"./clsx-B-dksMZM.js";import{L as N}from"./Label-BnpzQARg.js";import{I as T}from"./Input-DCB6qc9h.js";import{T as q}from"./Tooltip-DV-eh5YY.js";import{u as k}from"./useStableId-BwVK-eSq.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]],F=i("circle-help",w);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],E=i("lock",I);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],R=i("mail",j),r=b.forwardRef(({id:n,label:m,tooltip:t,tooltipPosition:p="top",tooltipDelay:c=150,labelClassName:d,tooltipClassName:u,wrapperClassName:f,size:h="md",className:y,...g},x)=>{const a=k(n),s=`${a}-tooltip`,l=e.jsx(N,{htmlFor:a,className:o("inline-block",d),children:m}),v=t?e.jsxs("div",{className:"flex items-center gap-1.5",children:[l,e.jsx(q,{id:s,content:t,position:p,delay:c,className:u,children:e.jsx(F,{size:16,className:"text-gray-400 hover:text-gray-600 cursor-help transition-colors","aria-label":`Help: ${t}`})})]}):l;return e.jsxs("div",{className:o("space-y-1",f),children:[v,e.jsx(T,{ref:x,id:a,size:h,inputClassName:y,"aria-describedby":t?s:void 0,...g})]})});r.displayName="FormField";r.__docgenInfo={description:`FormField molecule component.
Combines Label, Input, and optional Tooltip to create a comprehensive form field.
Provides contextual help through tooltips while maintaining proper ARIA relationships.
All components share consistent sizing and styling.`,methods:[],displayName:"FormField",props:{id:{required:!1,tsType:{name:"string"},description:""},label:{required:!0,tsType:{name:"string"},description:""},tooltip:{required:!1,tsType:{name:"string"},description:""},tooltipPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},tooltipDelay:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"150",computed:!1}},labelClassName:{required:!1,tsType:{name:"string"},description:""},tooltipClassName:{required:!1,tsType:{name:"string"},description:""},wrapperClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}},composes:["Omit"]};export{r as F,E as L,R as M};
