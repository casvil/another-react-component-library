import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as pe}from"./iframe-ESOGW_Ls.js";import{c as t}from"./clsx-B-dksMZM.js";import{A as r}from"./classes-BD7lNhBs.js";import{c as b}from"./createLucideIcon-DFpa-8el.js";import{T as ge}from"./triangle-alert-q4Z8912a.js";import{X as fe}from"./x-DuH8TvbH.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],be=b("info",we);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],ye=b("circle-check-big",xe);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],ve=b("circle-x",Ie),Ne={info:be,success:ye,warning:ge,error:ve},s=pe.memo(({children:re,intent:n="info",size:o="md",dismissible:ne=!1,onDismiss:x,showIcon:oe=!0,className:te,"aria-label":ae,"aria-live":ie=n==="error"?"assertive":"polite",...le})=>{const ce=Ne[n],de=t("border flex items-start gap-3",r.padding[o],r.borderRadius[o],r.variant[n],te),me=t("flex-shrink-0 mt-0.5",r.icon[o],r.iconVariant[n]),ue=t("flex-1",r.text[o]),he=t("flex-shrink-0 -mt-1 -mr-1 p-1 rounded transition-colors cursor-pointer",r.icon[o],r.dismissHover[n]);return e.jsxs("div",{role:"alert","aria-label":ae,"aria-live":ie,className:de,...le,children:[oe&&e.jsx(ce,{className:me,"aria-hidden":"true"}),e.jsx("div",{className:ue,children:re}),ne&&x&&e.jsx("button",{type:"button",className:he,onClick:x,"aria-label":"Dismiss alert",children:e.jsx(fe,{className:"w-full h-full"})})]})});s.displayName="Alert";s.__docgenInfo={description:`Alert atom component. Displays contextual feedback messages to users.
Supports different intents (info, success, warning, error), sizes, and dismissible functionality.
Fully accessible with ARIA attributes and proper semantic roles.`,methods:[],displayName:"Alert",props:{intent:{defaultValue:{value:"'info'",computed:!1},required:!1},size:{defaultValue:{value:"'md'",computed:!1},required:!1},dismissible:{defaultValue:{value:"false",computed:!1},required:!1},showIcon:{defaultValue:{value:"true",computed:!1},required:!1},"aria-live":{defaultValue:{value:"intent === 'error' ? 'assertive' : 'polite'",computed:!1},required:!1}}};const _e={title:"Atoms/Alert",component:s,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{intent:{control:"select",options:["info","success","warning","error"]},size:{control:"select",options:["sm","md","lg"]},showIcon:{control:"boolean"},dismissible:{control:"boolean"},className:{control:"text",description:"Custom Tailwind CSS classes for styling"},onDismiss:{action:"dismissed"}},args:{onDismiss:()=>{}}},a={args:{children:"This is an info alert message.",intent:"info",size:"md",showIcon:!0,dismissible:!1}},i={args:{children:"Your changes have been saved successfully!",intent:"success",size:"md",showIcon:!0,dismissible:!1}},l={args:{children:"Please review your information before proceeding.",intent:"warning",size:"md",showIcon:!0,dismissible:!1}},c={args:{children:"An error occurred while processing your request.",intent:"error",size:"md",showIcon:!0,dismissible:!1}},d={args:{children:"This alert can be dismissed by clicking the X button.",intent:"info",size:"md",showIcon:!0,dismissible:!0}},m={args:{children:"This alert does not show an icon.",intent:"info",size:"md",showIcon:!1,dismissible:!1}},u={args:{children:"This is a small alert.",intent:"info",size:"sm",showIcon:!0,dismissible:!1}},h={args:{children:"This is a large alert with more prominent styling.",intent:"info",size:"lg",showIcon:!0,dismissible:!1}},p={args:{children:e.jsxs(e.Fragment,{children:[e.jsx("strong",{children:"Important Notice:"})," This is an alert with longer content that demonstrates how the component handles multiple lines of text. The alert should maintain proper spacing and alignment even with extensive content that may wrap to multiple lines."]}),intent:"warning",size:"md",showIcon:!0,dismissible:!0}},g={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{intent:"info",showIcon:!0,children:"Info: This is an informational message."}),e.jsx(s,{intent:"success",showIcon:!0,children:"Success: Operation completed successfully!"}),e.jsx(s,{intent:"warning",showIcon:!0,children:"Warning: Please check your input."}),e.jsx(s,{intent:"error",showIcon:!0,children:"Error: Something went wrong."})]})},f={args:{children:"This alert has custom styling applied via className prop.",intent:"info",size:"md",showIcon:!0,className:"shadow-lg border-2 border-dashed bg-gradient-to-r from-blue-50 to-purple-50"}},w={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(s,{intent:"success",size:"lg",showIcon:!0,dismissible:!0,className:"shadow-xl border-l-4 border-l-green-500 bg-gradient-to-r from-green-50 to-emerald-50",children:e.jsxs("div",{children:[e.jsx("h4",{className:"font-bold text-green-900",children:"Success!"}),e.jsx("p",{className:"text-green-700",children:"Your custom styled alert with gradient background."})]})}),e.jsx(s,{intent:"warning",size:"sm",showIcon:!1,className:"border-l-4 border-l-orange-400 bg-orange-50 text-orange-800 rounded-none",children:"Minimal warning with custom border and no icon."}),e.jsx(s,{intent:"error",className:"bg-red-900 text-white border-red-700 rounded-xl shadow-2xl",children:"Dark theme error alert with custom colors."})]})};var y,I,v;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: 'This is an info alert message.',
    intent: 'info',
    size: 'md',
    showIcon: true,
    dismissible: false
  }
}`,...(v=(I=a.parameters)==null?void 0:I.docs)==null?void 0:v.source}}};var N,z,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: 'Your changes have been saved successfully!',
    intent: 'success',
    size: 'md',
    showIcon: true,
    dismissible: false
  }
}`,...(A=(z=i.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var S,T,k;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    children: 'Please review your information before proceeding.',
    intent: 'warning',
    size: 'md',
    showIcon: true,
    dismissible: false
  }
}`,...(k=(T=l.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var j,C,_;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: 'An error occurred while processing your request.',
    intent: 'error',
    size: 'md',
    showIcon: true,
    dismissible: false
  }
}`,...(_=(C=c.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var D,q,E;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    children: 'This alert can be dismissed by clicking the X button.',
    intent: 'info',
    size: 'md',
    showIcon: true,
    dismissible: true
  }
}`,...(E=(q=d.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var L,V,W;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    children: 'This alert does not show an icon.',
    intent: 'info',
    size: 'md',
    showIcon: false,
    dismissible: false
  }
}`,...(W=(V=m.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var M,F,O;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    children: 'This is a small alert.',
    intent: 'info',
    size: 'sm',
    showIcon: true,
    dismissible: false
  }
}`,...(O=(F=u.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var P,X,Y;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    children: 'This is a large alert with more prominent styling.',
    intent: 'info',
    size: 'lg',
    showIcon: true,
    dismissible: false
  }
}`,...(Y=(X=h.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var R,B,$;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...($=(B=p.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var H,G,J;g.parameters={...g.parameters,docs:{...(H=g.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(se=(ee=w.parameters)==null?void 0:ee.docs)==null?void 0:se.source}}};const De=["Default","Success","Warning","Error","Dismissible","WithoutIcon","Small","Large","LongContent","AllIntents","CustomStyling","FullyCustomized"];export{g as AllIntents,f as CustomStyling,a as Default,d as Dismissible,c as Error,w as FullyCustomized,h as Large,p as LongContent,u as Small,i as Success,l as Warning,m as WithoutIcon,De as __namedExportsOrder,_e as default};
