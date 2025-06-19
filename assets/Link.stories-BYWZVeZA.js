import{j as z}from"./jsx-runtime-D_zvdyIk.js";import{r as m}from"./iframe-CeuOv4tS.js";import{c as B}from"./clsx-B-dksMZM.js";const l=m.forwardRef(({href:O,children:j,variant:D="primary",disabled:n=!1,target:i,rel:c,className:I,onClick:d,...C},P)=>{const V=m.useMemo(()=>{if(c)return c;if(i==="_blank")return"noopener noreferrer"},[c,i]),A=B("inline-flex items-center cursor-pointer font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",{primary:"text-indigo-600 hover:text-indigo-800 focus:ring-indigo-500",secondary:"text-gray-600 hover:text-gray-800 focus:ring-gray-400",tertiary:"text-gray-600 hover:text-gray-800 focus:ring-gray-400 underline"}[D],n&&"pointer-events-none opacity-50",I);function M(p){if(n){p.preventDefault();return}d==null||d(p)}return z.jsx("a",{ref:P,href:O,target:i,rel:V,className:A,onClick:M,"aria-disabled":n,...C,children:j})});l.displayName="Link";l.__docgenInfo={description:`Link atom component.
Renders an accessible styled anchor tag.
Supports variants, disabled state, and forwards ref.
Automatically adds rel="noopener noreferrer" if target="_blank".`,methods:[],displayName:"Link",props:{href:{required:!0,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const Q={title:"atoms/Link",component:l,parameters:{layout:"centered"},args:{href:"https://example.com",children:"Example Link",variant:"primary"},tags:["autodocs"],argTypes:{variant:{control:{type:"radio"},options:["primary","secondary","tertiary"]},disabled:{control:"boolean"},target:{control:"select",options:[void 0,"_self","_blank","_parent","_top"]}}},e={},r={args:{variant:"secondary"}},a={args:{variant:"tertiary"}},s={args:{disabled:!0}},t={args:{target:"_blank"}},o={args:{className:"underline decoration-2 decoration-indigo-500"}};var u,y,g;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(y=e.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,v,b;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'secondary'
  }
}`,...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var x,_,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    variant: 'tertiary'
  }
}`,...(h=(_=a.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};var S,T,k;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(k=(T=s.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var N,w,L;t.parameters={...t.parameters,docs:{...(N=t.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    target: '_blank'
  }
}`,...(L=(w=t.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var q,R,E;o.parameters={...o.parameters,docs:{...(q=o.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    className: 'underline decoration-2 decoration-indigo-500'
  }
}`,...(E=(R=o.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};const U=["Primary","Secondary","Tertiary","Disabled","OpensInNewTab","CustomClass"];export{o as CustomClass,s as Disabled,t as OpensInNewTab,e as Primary,r as Secondary,a as Tertiary,U as __namedExportsOrder,Q as default};
