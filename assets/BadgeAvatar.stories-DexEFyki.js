import{j as i}from"./jsx-runtime-D_zvdyIk.js";import{c as d}from"./clsx-B-dksMZM.js";import{B as M}from"./Badge-DKbup-1Q.js";import{A as _}from"./Avatar-D5iqQBHe.js";import"./iframe-9e6QjIOn.js";import"./classes-BD7lNhBs.js";const j=({avatarProps:w={},badgeProps:a={},children:l,className:O,textClassName:R,size:c="md"})=>{const e={size:c,...w},J={size:c,...a};return i.jsxs(M,{...J,className:d("inline-flex items-center space-x-1 rounded-full",O,a==null?void 0:a.className),"aria-label":(a==null?void 0:a["aria-label"])||String(l)||e.alt||e.name||"User avatar",children:[i.jsx(_,{...e,className:d("rounded-full",e.className)}),l&&i.jsx("span",{className:R,children:l})]})};j.__docgenInfo={description:`BadgeAvatar molecule.
Puts Avatar inside the Badge, alongside optional children content (text or elements).`,methods:[],displayName:"BadgeAvatar",props:{avatarProps:{required:!1,tsType:{name:"Omit",elements:[{name:"AvatarProps"},{name:"literal",value:"'size'"}],raw:"Omit<AvatarProps, 'size'>"},description:"",defaultValue:{value:"{}",computed:!1}},badgeProps:{required:!1,tsType:{name:"Omit",elements:[{name:"BadgeProps"},{name:"union",raw:"'children' | 'aria-label' | 'size'",elements:[{name:"literal",value:"'children'"},{name:"literal",value:"'aria-label'"},{name:"literal",value:"'size'"}]}],raw:"Omit<BadgeProps, 'children' | 'aria-label' | 'size'>"},description:"",defaultValue:{value:"{}",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},textClassName:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}}}};const D={title:"molecules/BadgeAvatar",component:j,parameters:{layout:"centered"},tags:["autodocs"],args:{children:"User Name"}},r={args:{avatarProps:{name:"Alice Johnson"}}},s={args:{avatarProps:{name:"Bob Smith"}}},t={args:{avatarProps:{name:"Carol Lee"},textClassName:"text-3xl"}},n={args:{size:"sm",avatarProps:{name:"Alice Johnson"}}},o={args:{size:"md",avatarProps:{name:"Bob Smith"}}},m={args:{size:"lg",avatarProps:{name:"Carol Lee"},textClassName:"text-3xl"}};var p,u,v;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    avatarProps: {
      name: 'Alice Johnson'
    }
  }
}`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,x,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    avatarProps: {
      name: 'Bob Smith'
    }
  }
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var A,h,N;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    avatarProps: {
      name: 'Carol Lee'
    },
    textClassName: 'text-3xl'
  }
}`,...(N=(h=t.parameters)==null?void 0:h.docs)==null?void 0:N.source}}};var S,B,z;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    avatarProps: {
      name: 'Alice Johnson'
    }
  }
}`,...(z=(B=n.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var P,C,y;o.parameters={...o.parameters,docs:{...(P=o.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: 'md',
    avatarProps: {
      name: 'Bob Smith'
    }
  }
}`,...(y=(C=o.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var L,q,T;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    avatarProps: {
      name: 'Carol Lee'
    },
    textClassName: 'text-3xl'
  }
}`,...(T=(q=m.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};const F=["SmallAvatar","MediumAvatar","LargeAvatar","Small","Medium","Large"];export{m as Large,t as LargeAvatar,o as Medium,s as MediumAvatar,n as Small,r as SmallAvatar,F as __namedExportsOrder,D as default};
