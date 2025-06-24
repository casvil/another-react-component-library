import{j as l}from"./jsx-runtime-D_zvdyIk.js";import{R as z}from"./iframe-yv47tbq0.js";import{I as O}from"./Input-gc1B2oRU.js";import{I as W}from"./Icon-D5lntnQv.js";import{S as $}from"./Spinner-D6BQkWt0.js";import{S as k}from"./search-swXuEQSA.js";import"./clsx-B-dksMZM.js";import"./size-7yIMnH0j.js";import"./createLucideIcon-DgjBuQ9w.js";const i=z.forwardRef(({loading:e=!1,iconPosition:d="left",disabled:m,...p},E)=>{const L=e?l.jsx($,{size:"sm",className:"mr-1"}):l.jsx(W,{icon:k,size:18,"aria-label":"Search"});return l.jsx(O,{ref:E,icon:L,iconPosition:d,disabled:m||e,"aria-busy":e,...p})});i.displayName="Search";i.__docgenInfo={description:`Search molecule component.
Combines Input, Icon, and Spinner for a search experience.
Shows a search icon and an optional loading spinner.`,methods:[],displayName:"Search",props:{loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},iconPosition:{required:!1,tsType:{name:"union",raw:"'left' | 'right'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const U={title:"molecules/Search",component:i,parameters:{layout:"centered"},tags:["autodocs"],args:{placeholder:"Search…"},argTypes:{loading:{control:"boolean"},disabled:{control:"boolean"},iconPosition:{control:"radio",options:["left","right"]},value:{control:"text"},onChange:{action:"changed"}}},r={},a={args:{loading:!0}},s={args:{disabled:!0}},o={args:{placeholder:"Type to search…"}},t={args:{iconPosition:"right"}},n={args:{className:"border-blue-500 focus:ring-blue-500",inputClassName:"bg-gray-50"}},c={render:e=>{const[d,m]=z.useState("");return l.jsx(i,{...e,value:d,onChange:p=>m(p.target.value),placeholder:"Controlled search…"})}};var u,g,h;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=r.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var f,S,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var y,C,v;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(v=(C=s.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var x,I,N;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type to search…'
  }
}`,...(N=(I=o.parameters)==null?void 0:I.docs)==null?void 0:N.source}}};var R,j,P;t.parameters={...t.parameters,docs:{...(R=t.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    iconPosition: 'right'
  }
}`,...(P=(j=t.parameters)==null?void 0:j.docs)==null?void 0:P.source}}};var T,V,D;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    className: 'border-blue-500 focus:ring-blue-500',
    inputClassName: 'bg-gray-50'
  }
}`,...(D=(V=n.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var _,q,w;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = React.useState('');
    return <Search {...args} value={value} onChange={e => setValue(e.target.value)} placeholder="Controlled search…" />;
  }
}`,...(w=(q=c.parameters)==null?void 0:q.docs)==null?void 0:w.source}}};const X=["Default","Loading","Disabled","WithPlaceholder","IconRight","CustomStyles","Controlled"];export{c as Controlled,n as CustomStyles,r as Default,s as Disabled,t as IconRight,a as Loading,o as WithPlaceholder,X as __namedExportsOrder,U as default};
