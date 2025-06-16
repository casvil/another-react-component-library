import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{R}from"./iframe-C9hZwJj3.js";import{c as T}from"./clsx-B-dksMZM.js";import{c as j}from"./createLucideIcon-BrulWP96.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],i=j("triangle-alert",I),b=({icon:A,size:s=24,color:c="currentColor",className:x,"aria-label":t,...z})=>{const o=typeof s=="string"?parseInt(s,10)||24:s;return n.jsx("span",{role:t?"img":void 0,"aria-label":t,"aria-hidden":t?void 0:!0,className:T("inline-flex items-center justify-center",x),style:{width:o,height:o,color:c,lineHeight:0},...z,children:R.cloneElement(A,{size:o,color:c,focusable:"false"})})};b.__docgenInfo={description:`Icon molecule component.
Renders any React icon with configurable size, color, and accessibility.`,methods:[],displayName:"Icon",props:{icon:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},size:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"",defaultValue:{value:"24",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"currentColor"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""}}};const w={component:b,title:"atoms/Icon",tags:["autodocs"],parameters:{layout:"centered"}},e={args:{icon:n.jsx(i,{}),size:16,"aria-label":"Alert icon small"}},r={args:{icon:n.jsx(i,{}),size:24,"aria-label":"Alert icon medium"}},a={args:{icon:n.jsx(i,{}),size:48,"aria-label":"Alert icon large"}};var l,m,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    icon: <AlertTriangle />,
    size: 16,
    "aria-label": "Alert icon small"
  }
}`,...(d=(m=e.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,u,g;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: <AlertTriangle />,
    size: 24,
    "aria-label": "Alert icon medium"
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,y,h;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    icon: <AlertTriangle />,
    size: 48,
    "aria-label": "Alert icon large"
  }
}`,...(h=(y=a.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const E=["Small","Medium","Large"];export{a as Large,r as Medium,e as Small,E as __namedExportsOrder,w as default};
