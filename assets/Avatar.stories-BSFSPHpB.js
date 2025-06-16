import{j as x}from"./jsx-runtime-D_zvdyIk.js";import{r as re}from"./iframe-DjGJ464A.js";import{c as S}from"./clsx-B-dksMZM.js";const ae=r=>{if(!r)return"";const e=r.trim().split(/\s+/);return e.length===1?e[0].charAt(0).toUpperCase():e[0].charAt(0).toUpperCase()+e[e.length-1].charAt(0).toUpperCase()},X=re.forwardRef(({src:r,name:e,alt:Y,className:g,size:u="md",border:h},b)=>{const Z=ae(e),d=Y||e||"User avatar",f={sm:"w-8 h-8 text-sm",md:"w-12 h-12 text-base",lg:"w-20 h-20 text-xl"},$=S("inline-flex items-center justify-center rounded-full font-semibold bg-gray-200 text-gray-700 select-none",f[u],h,g),ee=S("rounded-full",f[u],h,g);return r?x.jsx("img",{ref:b,src:r,alt:d,className:ee,role:"img","aria-label":d}):x.jsx("span",{ref:b,className:$,role:"img","aria-label":d,children:Z})});X.__docgenInfo={description:`Avatar atom component. Shows a user avatar with image or initials fallback.
Fully accessible with alt text and aria-label.`,methods:[],displayName:"Avatar",props:{alt:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},src:{required:!1,tsType:{name:"string"},description:""},border:{required:!1,tsType:{name:"string"},description:""}}};const ne={title:"Atoms/Avatar",component:X,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{src:{control:"text"},name:{control:"text"},alt:{control:"text"},className:{control:"text"},size:{control:"select",options:["sm","md","lg"]}}},a={args:{src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"User avatar",size:"sm"}},s={args:{src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"User avatar"}},t={args:{src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"User avatar",size:"lg"}},o={args:{src:"https://randomuser.me/api/portraits/women/44.jpg",alt:"User avatar",border:"border-1 border-black-500"}},n={args:{name:"Cher",size:"md"}},m={args:{name:"John Smith",size:"sm"}},i={args:{name:"Jane Doe"}},c={args:{name:"Alice Wonderland",size:"lg"}},l={args:{name:"Alice Wonderland",border:"border-2 border-black-500"}},p={args:{name:"Custom Style",className:"bg-purple-300 text-purple-900"}};var v,I,y;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    alt: "User avatar",
    size: "sm"
  }
}`,...(y=(I=a.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var w,A,j;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    alt: "User avatar"
  }
}`,...(j=(A=s.parameters)==null?void 0:A.docs)==null?void 0:j.source}}};var z,C,U;t.parameters={...t.parameters,docs:{...(z=t.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    alt: "User avatar",
    size: "lg"
  }
}`,...(U=(C=t.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var M,W,N;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    src: "https://randomuser.me/api/portraits/women/44.jpg",
    alt: "User avatar",
    border: "border-1 border-black-500"
  }
}`,...(N=(W=o.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var T,q,k;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    name: "Cher",
    size: "md"
  }
}`,...(k=(q=n.parameters)==null?void 0:q.docs)==null?void 0:k.source}}};var L,B,J;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    name: "John Smith",
    size: "sm"
  }
}`,...(J=(B=m.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var _,E,D;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    name: "Jane Doe"
  }
}`,...(D=(E=i.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var R,F,O;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    name: "Alice Wonderland",
    size: "lg"
  }
}`,...(O=(F=c.parameters)==null?void 0:F.docs)==null?void 0:O.source}}};var V,G,H;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    name: "Alice Wonderland",
    border: "border-2 border-black-500"
  }
}`,...(H=(G=l.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var K,P,Q;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    name: "Custom Style",
    className: "bg-purple-300 text-purple-900"
  }
}`,...(Q=(P=p.parameters)==null?void 0:P.docs)==null?void 0:Q.source}}};const me=["Image","ImageMd","ImageLg","ImageMdWithBorder","SingleNameInitialMd","InitialsSm","InitialsMd","InitialsLg","WithBorder","CustomStyleAvatar"];export{p as CustomStyleAvatar,a as Image,t as ImageLg,s as ImageMd,o as ImageMdWithBorder,c as InitialsLg,i as InitialsMd,m as InitialsSm,n as SingleNameInitialMd,l as WithBorder,me as __namedExportsOrder,ne as default};
