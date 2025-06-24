import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as be}from"./iframe-B2RirJys.js";import{c as b}from"./clsx-B-dksMZM.js";import{A as ye}from"./Avatar-B7YJs6Q8.js";import{U as Le}from"./Username-B460lj8B.js";import{S as y}from"./StatusIndicator-R36NxdCh.js";import{u as r}from"./size-7vYuislZ.js";const Ue={online:"Online",offline:"Offline",away:"Away",busy:"Busy"},a=be.forwardRef(({name:t,status:x="offline",showStatus:S=!0,showStatusLabel:ie=!1,avatarSrc:me,avatarAlt:ce,size:s="md",layout:w="horizontal",usernameVariant:ue="default",truncateUsername:de=!1,maxUsernameLength:pe,className:fe,...he},ve)=>{const ge=b("flex relative",r.layout[w],r.spacing[w][s],fe),xe=e.jsxs("div",{className:"relative",children:[e.jsx(ye,{src:me,alt:ce||t,name:t,size:s}),S&&e.jsx("div",{className:b("absolute",r.statusPosition[s]),children:e.jsx(y,{status:x,size:r.statusIndicatorSizes[s],showLabel:!1})})]}),Se=e.jsx(Le,{size:s,variant:ue,truncate:de,maxLength:pe,children:t}),we=S&&ie&&e.jsx(y,{status:x,size:s,showLabel:!0});return e.jsxs("div",{ref:ve,className:ge,role:"group","aria-label":`User ${t}${S?`, ${Ue[x]}`:""}`,...he,children:[xe,e.jsxs("div",{className:b("flex",r.innerGap[w]),children:[Se,we]})]})});a.displayName="UserPreview";a.__docgenInfo={description:`UserPreview molecule component.
Combines Avatar, Username, and StatusIndicator to create a comprehensive user display.
Supports horizontal and vertical layouts with consistent sizing across all child components.`,methods:[],displayName:"UserPreview",props:{name:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'online' | 'offline' | 'away' | 'busy'",elements:[{name:"literal",value:"'online'"},{name:"literal",value:"'offline'"},{name:"literal",value:"'away'"},{name:"literal",value:"'busy'"}]},description:"",defaultValue:{value:"'offline'",computed:!1}},showStatus:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showStatusLabel:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarAlt:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},layout:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},usernameVariant:{required:!1,tsType:{name:"union",raw:"'default' | 'bold' | 'muted'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'bold'"},{name:"literal",value:"'muted'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},truncateUsername:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxUsernameLength:{required:!1,tsType:{name:"number"},description:""}}};const De={title:"molecules/UserPreview",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{name:{control:"text"},status:{control:"select",options:["online","offline","away","busy"]},showStatus:{control:"boolean"},showStatusLabel:{control:"boolean"},avatarSrc:{control:"text"},size:{control:"select",options:["sm","md","lg"]},layout:{control:"select",options:["horizontal","vertical"]},usernameVariant:{control:"select",options:["default","bold","muted"]},truncateUsername:{control:"boolean"},maxUsernameLength:{control:"number"}},args:{name:"John Doe",status:"online",showStatus:!0,showStatusLabel:!1,size:"md",layout:"horizontal",usernameVariant:"default",truncateUsername:!1}},n={},o={args:{avatarSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}},l={args:{layout:"vertical"}},i={args:{showStatusLabel:!0}},m={args:{showStatus:!1}},c={args:{usernameVariant:"bold"}},u={args:{usernameVariant:"muted"}},d={args:{name:"verylongusernamethatshouldbecapped",maxUsernameLength:12}},p={args:{size:"sm"}},f={args:{size:"lg"}},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{name:"John Doe",status:"online",showStatusLabel:!0}),e.jsx(a,{name:"Jane Smith",status:"away",showStatusLabel:!0}),e.jsx(a,{name:"Bob Johnson",status:"busy",showStatusLabel:!0}),e.jsx(a,{name:"Alice Wilson",status:"offline",showStatusLabel:!0})]})},v={render:()=>e.jsxs("div",{className:"flex gap-8",children:[e.jsx(a,{name:"John Doe",status:"online",layout:"horizontal",showStatusLabel:!0}),e.jsx(a,{name:"John Doe",status:"online",layout:"vertical",showStatusLabel:!0})]})},g={render:()=>e.jsxs("div",{className:"flex items-center gap-6 p-8 bg-gray-50",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"text-xs text-gray-500 font-medium",children:"Small"}),e.jsx(a,{name:"John",status:"online",size:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"text-xs text-gray-500 font-medium",children:"Medium"}),e.jsx(a,{name:"John Doe",status:"online",size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx("div",{className:"text-xs text-gray-500 font-medium",children:"Large"}),e.jsx(a,{name:"John Doe Smith",status:"online",size:"lg"})]})]})};var L,U,j;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:"{}",...(j=(U=n.parameters)==null?void 0:U.docs)==null?void 0:j.source}}};var N,z,J;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    avatarSrc: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face'
  }
}`,...(J=(z=o.parameters)==null?void 0:z.docs)==null?void 0:J.source}}};var P,V,T;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    layout: 'vertical'
  }
}`,...(T=(V=l.parameters)==null?void 0:V.docs)==null?void 0:T.source}}};var D,q,A;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showStatusLabel: true
  }
}`,...(A=(q=i.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var C,W,I;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    showStatus: false
  }
}`,...(I=(W=m.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var B,E,M;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    usernameVariant: 'bold'
  }
}`,...(M=(E=c.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};var _,O,$;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    usernameVariant: 'muted'
  }
}`,...($=(O=u.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var R,G,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: 'verylongusernamethatshouldbecapped',
    maxUsernameLength: 12
  }
}`,...(k=(G=d.parameters)==null?void 0:G.docs)==null?void 0:k.source}}};var F,H,K;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(K=(H=p.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <UserPreview name="John Doe" status="online" showStatusLabel />
      <UserPreview name="Jane Smith" status="away" showStatusLabel />
      <UserPreview name="Bob Johnson" status="busy" showStatusLabel />
      <UserPreview name="Alice Wilson" status="offline" showStatusLabel />
    </div>
}`,...(ae=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var se,re,te;v.parameters={...v.parameters,docs:{...(se=v.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      <UserPreview name="John Doe" status="online" layout="horizontal" showStatusLabel />
      <UserPreview name="John Doe" status="online" layout="vertical" showStatusLabel />
    </div>
}`,...(te=(re=v.parameters)==null?void 0:re.docs)==null?void 0:te.source}}};var ne,oe,le;g.parameters={...g.parameters,docs:{...(ne=g.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6 p-8 bg-gray-50">
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 font-medium">Small</div>
        <UserPreview name="John" status="online" size="sm" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 font-medium">Medium</div>
        <UserPreview name="John Doe" status="online" size="md" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="text-xs text-gray-500 font-medium">Large</div>
        <UserPreview name="John Doe Smith" status="online" size="lg" />
      </div>
    </div>
}`,...(le=(oe=g.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const qe=["Default","WithImage","Vertical","WithStatusLabel","NoStatus","BoldUsername","MutedUsername","TruncatedUsername","Small","Large","AllStatuses","LayoutComparison","SizeComparison"];export{h as AllStatuses,c as BoldUsername,n as Default,f as Large,v as LayoutComparison,u as MutedUsername,m as NoStatus,g as SizeComparison,p as Small,d as TruncatedUsername,l as Vertical,o as WithImage,i as WithStatusLabel,qe as __namedExportsOrder,De as default};
