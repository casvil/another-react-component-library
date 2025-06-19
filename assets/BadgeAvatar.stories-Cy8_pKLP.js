import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{c as m}from"./clsx-B-dksMZM.js";import{B}from"./Badge-BADDppSq.js";import{A as S}from"./Avatar-BW_sL1DQ.js";import"./iframe-D5UJ3uGf.js";const A=({avatarProps:f,badgeProps:a,children:n,className:N,textClassName:h})=>{const e={size:"sm",...f};return o.jsxs(B,{...a,className:m("inline-flex items-center space-x-1 rounded-full",N,a==null?void 0:a.className),"aria-label":(a==null?void 0:a["aria-label"])||String(n)||e.alt||e.name||"User avatar",children:[o.jsx(S,{...e,className:m("rounded-full",e.className)}),n&&o.jsx("span",{className:h,children:n})]})};A.__docgenInfo={description:`BadgeAvatar molecule.
Puts Avatar inside the Badge, alongside optional children content (text or elements).`,methods:[],displayName:"BadgeAvatar",props:{avatarProps:{required:!0,tsType:{name:"AvatarProps"},description:""},badgeProps:{required:!1,tsType:{name:"Omit",elements:[{name:"BadgeProps"},{name:"union",raw:"'children' | 'aria-label'",elements:[{name:"literal",value:"'children'"},{name:"literal",value:"'aria-label'"}]}],raw:"Omit<BadgeProps, 'children' | 'aria-label'>"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},textClassName:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"molecules/BadgeAvatar",component:A,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"User Name"}},r={args:{avatarProps:{size:"sm",name:"Alice Johnson"}}},s={args:{avatarProps:{size:"md",name:"Bob Smith"}}},t={args:{avatarProps:{size:"lg",name:"Carol Lee"},textClassName:"text-3xl"}};var l,i,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    avatarProps: {
      size: 'sm',
      name: 'Alice Johnson'
    }
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var d,p,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    avatarProps: {
      size: 'md',
      name: 'Bob Smith'
    }
  }
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,g,x;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    avatarProps: {
      size: 'lg',
      name: 'Carol Lee'
    },
    textClassName: 'text-3xl'
  }
}`,...(x=(g=t.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const T=["SmallAvatar","MediumAvatar","LargeAvatar"];export{t as LargeAvatar,s as MediumAvatar,r as SmallAvatar,T as __namedExportsOrder,R as default};
