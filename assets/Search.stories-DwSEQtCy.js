import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{e as L}from"./iframe-BCzmj9Vo.js";import{I as O}from"./Input-CbUp8fdz.js";import{S as W}from"./Spinner-DAQjo7zm.js";import{S as z}from"./search-Bnt7Dkh-.js";import"./clsx-B-dksMZM.js";import"./classes-DL16wGMG.js";import"./createLucideIcon-CebC0jUa.js";const d=L.forwardRef(({loading:e=!1,iconPosition:a="left",disabled:u,className:m,...$},E)=>r.jsxs("div",{className:`relative ${m||""}`,children:[r.jsx(O,{ref:E,icon:z,iconAriaLabel:"Search",iconPosition:a,disabled:u||e,"aria-busy":e,...$}),e&&r.jsx("div",{className:`absolute inset-y-0 flex items-center ${a==="left"?"left-3":"right-3"}`,children:r.jsx(W,{size:"sm"})})]}));d.displayName="Search";d.__docgenInfo={description:`Search molecule component.
Combines Input, Icon, and Spinner for a search experience.
Shows a search icon and an optional loading spinner.`,methods:[],displayName:"Search",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const M={title:"molecules/Search",component:d,parameters:{layout:"centered"},tags:["autodocs"],args:{placeholder:"Search…"},argTypes:{loading:{control:"boolean"},disabled:{control:"boolean"},iconPosition:{control:"radio",options:["left","right"]},value:{control:"text"},onChange:{action:"changed"}}},s={},o={args:{loading:!0}},t={args:{disabled:!0}},n={args:{placeholder:"Type to search…"}},c={args:{iconPosition:"right"}},l={args:{className:"border-blue-500 focus:ring-blue-500",inputClassName:"bg-gray-50"}},i={render:e=>{const[a,u]=L.useState("");return r.jsx(d,{...e,value:a,onChange:m=>u(m.target.value),placeholder:"Controlled search…"})}};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:"{}",...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,S,b;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(b=(S=o.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,v,x;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(x=(v=t.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var C,N,j;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type to search…'
  }
}`,...(j=(N=n.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var I,T,P;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    iconPosition: 'right'
  }
}`,...(P=(T=c.parameters)==null?void 0:T.docs)==null?void 0:P.source}}};var R,V,D;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    className: 'border-blue-500 focus:ring-blue-500',
    inputClassName: 'bg-gray-50'
  }
}`,...(D=(V=l.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var _,q,w;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('');
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} placeholder="Controlled search…" />;
  }
}`,...(w=(q=i.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const Q=["Default","Loading","Disabled","WithPlaceholder","IconRight","CustomStyles","Controlled"];export{i as Controlled,l as CustomStyles,s as Default,t as Disabled,c as IconRight,o as Loading,n as WithPlaceholder,Q as __namedExportsOrder,M as default};
