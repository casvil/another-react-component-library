var H=Object.defineProperty;var J=(s,a,e)=>a in s?H(s,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[a]=e;var N=(s,a,e)=>J(s,typeof a!="symbol"?a+"":a,e);import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{r as w}from"./iframe-BbYVxIeR.js";import{c as Q}from"./clsx-B-dksMZM.js";import{T as V}from"./triangle-alert-C0KW06Zl.js";import{c as X}from"./createLucideIcon-CdlKAxmU.js";import{B as E}from"./Button-CZFgrRDI.js";import{T as t}from"./Text-Bza3cTHW.js";import{C as Y}from"./Card-Bzq4Suqj.js";import"./classes-zVeSqKhV.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],$=X("refresh-cw",Z);class l extends w.Component{constructor(e){super(e);N(this,"resetErrorBoundary",()=>{this.setState({hasError:!1,error:null,errorInfo:null})});this.state={hasError:!1,error:null,errorInfo:null}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,o){this.setState({error:e,errorInfo:o}),this.props.onError&&this.props.onError(e,o)}componentDidUpdate(e){const{resetOnPropsChange:o,resetKeys:n}=this.props,{hasError:c}=this.state;if(c&&o&&n){const i=e.resetKeys||[];n.some((d,j)=>d!==i[j])&&this.resetErrorBoundary()}}render(){const{hasError:e,error:o,errorInfo:n}=this.state,{children:c,fallback:i,className:p,showErrorDetails:d=!1}=this.props;return e?i||r.jsx(Y,{className:Q("max-w-md mx-auto p-6 text-center","border-red-200 bg-red-50",p),role:"alert","aria-live":"assertive","aria-labelledby":"error-boundary-title","aria-describedby":"error-boundary-description",children:r.jsxs("div",{className:"flex flex-col items-center space-y-4",children:[r.jsx(V,{size:48,className:"text-red-500","aria-hidden":"true"}),r.jsxs("div",{className:"space-y-2",children:[r.jsx(t,{id:"error-boundary-title",variant:"h3",weight:"semibold",color:"error",children:"Something went wrong"}),r.jsx(t,{id:"error-boundary-description",variant:"body",color:"secondary",children:"An unexpected error occurred. Please try refreshing the page or contact support if the problem persists."})]}),d&&o&&r.jsxs("details",{className:"w-full mt-4 p-3 bg-red-100 rounded-md text-left",children:[r.jsx("summary",{className:"cursor-pointer font-medium text-red-800 mb-2",children:"Error Details"}),r.jsxs("div",{className:"space-y-2 text-sm",children:[r.jsxs("div",{children:[r.jsx(t,{variant:"small",weight:"medium",color:"error",children:"Error:"}),r.jsx(t,{variant:"small",className:"font-mono text-red-700 break-all",children:o.message})]}),o.stack&&r.jsxs("div",{children:[r.jsx(t,{variant:"small",weight:"medium",color:"error",children:"Stack:"}),r.jsx("pre",{className:"text-xs text-red-700 whitespace-pre-wrap break-words max-h-32 overflow-y-auto",children:o.stack})]}),d&&n&&n.componentStack&&r.jsxs("div",{children:[r.jsx(t,{variant:"small",weight:"medium",color:"error",children:"Component Stack:"}),r.jsx("pre",{className:"text-xs text-red-700 whitespace-pre-wrap break-words max-h-32 overflow-y-auto",children:n.componentStack})]})]})]}),r.jsx(E,{label:"Try Again",variant:"primary",size:"sm",icon:$,iconPosition:"left",onClick:this.resetErrorBoundary,className:"mt-4","aria-label":"Try again to reload the component"})]})}):c}}l.__docgenInfo={description:`ErrorBoundary class component that catches JavaScript errors anywhere in the child component tree,
logs those errors, and displays a fallback UI instead of the component tree that crashed.
Fully accessible with ARIA attributes and keyboard navigation support.`,methods:[{name:"resetErrorBoundary",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},fallback:{required:!1,tsType:{name:"ReactNode"},description:""},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},showErrorDetails:{required:!1,tsType:{name:"boolean"},description:""},resetOnPropsChange:{required:!1,tsType:{name:"boolean"},description:""},resetKeys:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Array<string | number>"},description:""}}};const m=({shouldThrow:s})=>{if(s)throw new Error("This is a simulated error for testing ErrorBoundary");return r.jsx("div",{className:"p-4 border rounded bg-green-50 border-green-200",children:r.jsx(t,{color:"success",weight:"medium",children:"✅ Everything is working fine!"})})},v=({showErrorDetails:s,customFallback:a,onError:e})=>{const[o,n]=w.useState(!1),[c,i]=w.useState(0),p=()=>{n(!0)},d=()=>{n(!1),i(j=>j+1)};return r.jsxs("div",{className:"space-y-4",children:[r.jsxs("div",{className:"flex gap-2",children:[r.jsx(E,{label:"Trigger Error",variant:"secondary",onClick:p,disabled:o}),r.jsx(E,{label:"Reset Demo",variant:"secondary",onClick:d})]}),r.jsx(l,{showErrorDetails:s,fallback:a,onError:e,resetOnPropsChange:!0,resetKeys:[c],children:r.jsx(m,{shouldThrow:o})},c)]})},dr={title:"Atoms/ErrorBoundary",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1},fallback:{control:!1},onError:{control:!1},className:{control:"text"},showErrorDetails:{control:"boolean"},resetOnPropsChange:{control:"boolean"},resetKeys:{control:!1}}},u={render:()=>r.jsx(v,{})},h={render:()=>r.jsx(v,{showErrorDetails:!0})},x={render:()=>r.jsx(v,{customFallback:r.jsxs("div",{className:"p-6 text-center bg-purple-50 border border-purple-200 rounded-lg",children:[r.jsx(t,{variant:"h3",color:"primary",className:"mb-2",children:"🔧 Under Maintenance"}),r.jsx(t,{color:"secondary",children:"This feature is temporarily unavailable. Please check back later."}),r.jsx(E,{label:"Go Back",variant:"primary",size:"sm",className:"mt-4"})]})})},y={render:()=>r.jsx(v,{onError:(s,a)=>{console.log("Custom error handler called:",{error:s,errorInfo:a})}})},f={render:()=>r.jsx(l,{children:r.jsx(m,{shouldThrow:!0})})},b={render:()=>r.jsx(l,{children:r.jsx(m,{shouldThrow:!1})})},g={render:()=>r.jsxs("div",{className:"space-y-6 w-full max-w-4xl",children:[r.jsxs("div",{children:[r.jsx(t,{variant:"h4",className:"mb-2",children:"Small Error Boundary"}),r.jsx(l,{className:"max-w-sm",children:r.jsx(m,{shouldThrow:!0})})]}),r.jsxs("div",{children:[r.jsx(t,{variant:"h4",className:"mb-2",children:"Large Error Boundary"}),r.jsx(l,{className:"max-w-2xl",children:r.jsx(m,{shouldThrow:!0})})]})]}),parameters:{layout:"padded"}};var T,k,S;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ErrorDemo />
}`,...(S=(k=u.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var B,C,D;h.parameters={...h.parameters,docs:{...(B=h.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ErrorDemo showErrorDetails />
}`,...(D=(C=h.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var P,I,R;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <ErrorDemo customFallback={<div className="p-6 text-center bg-purple-50 border border-purple-200 rounded-lg">
          <Text variant="h3" color="primary" className="mb-2">
            🔧 Under Maintenance
          </Text>
          <Text color="secondary">
            This feature is temporarily unavailable. Please check back later.
          </Text>
          <Button label="Go Back" variant="primary" size="sm" className="mt-4" />
        </div>} />
}`,...(R=(I=x.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var K,q,A;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => <ErrorDemo onError={(error, errorInfo) => {
    console.log('Custom error handler called:', {
      error,
      errorInfo
    });
  }} />
}`,...(A=(q=y.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var L,z,F;f.parameters={...f.parameters,docs:{...(L=f.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <ProblematicComponent shouldThrow />
    </ErrorBoundary>
}`,...(F=(z=f.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var M,_,O;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => <ErrorBoundary>
      <ProblematicComponent shouldThrow={false} />
    </ErrorBoundary>
}`,...(O=(_=b.parameters)==null?void 0:_.docs)==null?void 0:O.source}}};var U,W,G;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-6 w-full max-w-4xl">
      <div>
        <Text variant="h4" className="mb-2">
          Small Error Boundary
        </Text>
        <ErrorBoundary className="max-w-sm">
          <ProblematicComponent shouldThrow />
        </ErrorBoundary>
      </div>

      <div>
        <Text variant="h4" className="mb-2">
          Large Error Boundary
        </Text>
        <ErrorBoundary className="max-w-2xl">
          <ProblematicComponent shouldThrow />
        </ErrorBoundary>
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(G=(W=g.parameters)==null?void 0:W.docs)==null?void 0:G.source}}};const mr=["Default","WithErrorDetails","CustomFallback","WithErrorLogging","ErrorState","SuccessState","Sizes"];export{x as CustomFallback,u as Default,f as ErrorState,g as Sizes,b as SuccessState,h as WithErrorDetails,y as WithErrorLogging,mr as __namedExportsOrder,dr as default};
