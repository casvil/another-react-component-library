import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as ge,r as fe}from"./iframe-By2cKsV2.js";import{c as a}from"./clsx-B-dksMZM.js";import{A as r}from"./classes-BD7lNhBs.js";import{c as b}from"./createLucideIcon-DWx-_3MN.js";import{T as we}from"./triangle-alert-YCQ7c9YD.js";import{X as be}from"./x-BclqOC7Z.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ye=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],xe=b("info",ye);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Ie=b("circle-check-big",ve);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],Te=b("circle-x",Ne),ze={info:xe,success:Ie,warning:we,error:Te},s=ge.memo(fe.forwardRef(({children:re,intent:n="info",size:t="md",dismissible:ne=!1,onDismiss:y,showIcon:te=!0,className:ae,"aria-label":oe,"aria-live":ie=n==="error"?"assertive":"polite",...le},ce)=>{const de=ze[n],me=a("border flex items-start gap-3",r.padding[t],r.borderRadius[t],r.variant[n],ae),ue=a("flex-shrink-0 mt-0.5",r.icon[t],r.iconVariant[n]),pe=a("flex-1",r.text[t]),he=a("flex-shrink-0 -mt-1 -mr-1 p-1 rounded transition-colors cursor-pointer",r.icon[t],r.dismissHover[n]);return e.jsxs("div",{ref:ce,role:"alert","aria-label":oe,"aria-live":ie,className:me,...le,children:[te&&e.jsx(de,{className:ue,"aria-hidden":"true"}),e.jsx("div",{className:pe,children:re}),ne&&y&&e.jsx("button",{type:"button",className:he,onClick:y,"aria-label":"Dismiss alert",children:e.jsx(be,{className:"w-full h-full"})})]})}));s.displayName="Alert";s.__docgenInfo={description:`Alert atom component. Displays contextual feedback messages to users.
Supports different intents (info, success, warning, error), sizes, and dismissible functionality.
Fully accessible with ARIA attributes and proper semantic roles.`,methods:[],displayName:"Alert",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},intent:{required:!1,tsType:{name:"union",raw:"'default' | 'info' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'info'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'info'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},dismissible:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},showIcon:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-live":{required:!1,tsType:{name:"union",raw:"'polite' | 'assertive' | 'off'",elements:[{name:"literal",value:"'polite'"},{name:"literal",value:"'assertive'"},{name:"literal",value:"'off'"}]},description:"",defaultValue:{value:"intent === 'error' ? 'assertive' : 'polite'",computed:!1}}}};const De={title:"Atoms/Alert",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{intent:{control:"select",options:["info","success","warning","error"]},size:{control:"select",options:["sm","md","lg"]},showIcon:{control:"boolean"},dismissible:{control:"boolean"},className:{control:"text",description:"Custom Tailwind CSS classes for styling"},onDismiss:{action:"dismissed"}},args:{onDismiss:()=>{}}},o={args:{children:"This is an info alert message.",intent:"info",size:"md",showIcon:!0,dismissible:!1}},i={args:{children:"Your changes have been saved successfully!",intent:"success",size:"md",showIcon:!0,dismissible:!1}},l={args:{children:"Please review your information before proceeding.",intent:"warning",size:"md",showIcon:!0,dismissible:!1}},c={args:{children:"An error occurred while processing your request.",intent:"error",size:"md",showIcon:!0,dismissible:!1}},d={args:{children:"This alert can be dismissed by clicking the X button.",intent:"info",size:"md",showIcon:!0,dismissible:!0}},m={args:{children:"This alert does not show an icon.",intent:"info",size:"md",showIcon:!1,dismissible:!1}},u={args:{children:"This is a small alert.",intent:"info",size:"sm",showIcon:!0,dismissible:!1}},p={args:{children:"This is a large alert with more prominent styling.",intent:"info",size:"lg",showIcon:!0,dismissible:!1}},h={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Important Notice:"})," This is an alert with longer content that demonstrates how the component handles multiple lines of text. The alert should maintain proper spacing and alignment even with extensive content that may wrap to multiple lines."]}),intent:"warning",size:"md",showIcon:!0,dismissible:!0}},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{intent:"info",showIcon:!0,children:"Info: This is an informational message."}),e.jsx(s,{intent:"success",showIcon:!0,children:"Success: Operation completed successfully!"}),e.jsx(s,{intent:"warning",showIcon:!0,children:"Warning: Please check your input."}),e.jsx(s,{intent:"error",showIcon:!0,children:"Error: Something went wrong."})]})},f={args:{children:"This alert has custom styling applied via className prop.",intent:"info",size:"md",showIcon:!0,className:"shadow-lg border-2 border-dashed bg-gradient-to-r from-blue-50 to-purple-50"}},w={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{intent:"success",size:"lg",showIcon:!0,dismissible:!0,className:"shadow-xl border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-green-900",children:"Success!"}),e.jsx("p",{className:"text-green-700",children:"Your custom styled alert with gradient background."})]})}),e.jsx(s,{intent:"warning",size:"sm",showIcon:!1,className:"border-l-4 border-l-orange-400 bg-orange-50 text-orange-800 rounded-none",children:"Minimal warning with custom border and no icon."}),e.jsx(s,{intent:"error",className:"bg-red-900 text-white border-red-700 rounded-xl shadow-2xl",children:"Dark theme error alert with custom colors."})]})};var x,v,I;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    children: 'This is an info alert message.',
    intent: 'info',
    size: 'md',
    showIcon: true,
    dismissible: false
  }
}`,...(I=(v=o.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var N,T,z;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Your changes have been saved successfully!',
    intent: 'success',
    size: 'md',
    showIcon: true,
    dismissible: false
  }
}`,...(z=(T=i.parameters)==null?void 0:T.docs)==null?void 0:z.source}}};var A,S,k;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    children: 'Please review your information before proceeding.',
    intent: 'warning',
    size: 'md',
    showIcon: true,
    dismissible: false
  }
}`,...(k=(S=l.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var j,C,q;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'An error occurred while processing your request.',
    intent: 'error',
    size: 'md',
    showIcon: true,
    dismissible: false
  }
}`,...(q=(C=c.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var _,D,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    children: 'This alert can be dismissed by clicking the X button.',
    intent: 'info',
    size: 'md',
    showIcon: true,
    dismissible: true
  }
}`,...(E=(D=d.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var R,L,V;m.parameters={...m.parameters,docs:{...(R=m.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    children: 'This alert does not show an icon.',
    intent: 'info',
    size: 'md',
    showIcon: false,
    dismissible: false
  }
}`,...(V=(L=m.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var W,M,F;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    children: 'This is a small alert.',
    intent: 'info',
    size: 'sm',
    showIcon: true,
    dismissible: false
  }
}`,...(F=(M=u.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var O,P,X;p.parameters={...p.parameters,docs:{...(O=p.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'This is a large alert with more prominent styling.',
    intent: 'info',
    size: 'lg',
    showIcon: true,
    dismissible: false
  }
}`,...(X=(P=p.parameters)==null?void 0:P.docs)==null?void 0:X.source}}};var Y,B,$;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    children: <>
        <strong>Important Notice:</strong> This is an alert with longer content
        that demonstrates how the component handles multiple lines of text. The
        alert should maintain proper spacing and alignment even with extensive
        content that may wrap to multiple lines.
      </>,
    intent: 'warning',
    size: 'md',
    showIcon: true,
    dismissible: true
  }
}`,...($=(B=h.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var H,G,J;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert intent="info" showIcon>
        Info: This is an informational message.
      </Alert>
      <Alert intent="success" showIcon>
        Success: Operation completed successfully!
      </Alert>
      <Alert intent="warning" showIcon>
        Warning: Please check your input.
      </Alert>
      <Alert intent="error" showIcon>
        Error: Something went wrong.
      </Alert>
    </div>
}`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,U;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    children: 'This alert has custom styling applied via className prop.',
    intent: 'info',
    size: 'md',
    showIcon: true,
    className: 'shadow-lg border-2 border-dashed bg-gradient-to-r from-blue-50 to-purple-50'
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var Z,ee,se;w.parameters={...w.parameters,docs:{...(Z=w.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Alert intent="success" size="lg" showIcon dismissible className="shadow-xl border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50">
        <div>
          <h4 className="font-bold text-green-900">Success!</h4>
          <p className="text-green-700">
            Your custom styled alert with gradient background.
          </p>
        </div>
      </Alert>

      <Alert intent="warning" size="sm" showIcon={false} className="border-l-4 border-l-orange-400 bg-orange-50 text-orange-800 rounded-none">
        Minimal warning with custom border and no icon.
      </Alert>

      <Alert intent="error" className="bg-red-900 text-white border-red-700 rounded-xl shadow-2xl">
        Dark theme error alert with custom colors.
      </Alert>
    </div>
}`,...(se=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};const Ee=["Default","Success","Warning","Error","Dismissible","WithoutIcon","Small","Large","LongContent","AllIntents","CustomStyling","FullyCustomized"];export{g as AllIntents,f as CustomStyling,o as Default,d as Dismissible,c as Error,w as FullyCustomized,p as Large,h as LongContent,u as Small,i as Success,l as Warning,m as WithoutIcon,Ee as __namedExportsOrder,De as default};
