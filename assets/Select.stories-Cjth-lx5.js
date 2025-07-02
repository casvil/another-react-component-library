import{j as _}from"./jsx-runtime-D_zvdyIk.js";import{r as A}from"./iframe-BCzmj9Vo.js";import{S as w}from"./Select-CWDbqtVG.js";import"./createLucideIcon-CebC0jUa.js";import"./clsx-B-dksMZM.js";import"./Input-CbUp8fdz.js";import"./classes-DL16wGMG.js";import"./Label-CFaunMtC.js";import"./useStableId-gMyTOkxf.js";const P=[{value:"apple",label:"Apple"},{value:"banana",label:"Banana"},{value:"cherry",label:"Cherry"}],K={title:"molecules/Select",component:w,parameters:{layout:"centered"},tags:["autodocs"],args:{label:"Choose a fruit",options:P,placeholder:"Select a fruit"}},e={},r={args:{defaultValue:"apple"}},a={render:()=>{const[U,W]=A.useState("apple");return _.jsx(w,{options:P,value:U,onChange:W,label:"Controlled Select",placeholder:"Pick a fruit"})}},s={args:{disabled:!0,defaultValue:"apple"}},o={args:{className:"p-6 bg-gray-100 rounded-xl",inputClassName:"border-indigo-500 text-indigo-700",dropdownClassName:"bg-indigo-50 border-indigo-200"}},t={args:{size:"sm",placeholder:"Small select"}},l={args:{size:"md",placeholder:"Medium select"}},c={args:{size:"lg",placeholder:"Large select"}};var n,d,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var i,m,u;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    defaultValue: 'apple'
  }
}`,...(u=(m=r.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,S,b;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('apple');
    return <Select options={options} value={value} onChange={setValue} label="Controlled Select" placeholder="Pick a fruit" />;
  }
}`,...(b=(S=a.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,f,C;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: 'apple'
  }
}`,...(C=(f=s.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var x,v,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    className: 'p-6 bg-gray-100 rounded-xl',
    inputClassName: 'border-indigo-500 text-indigo-700',
    dropdownClassName: 'bg-indigo-50 border-indigo-200'
  }
}`,...(y=(v=o.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var V,z,N;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    placeholder: 'Small select'
  }
}`,...(N=(z=t.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var D,L,M;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    size: 'md',
    placeholder: 'Medium select'
  }
}`,...(M=(L=l.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var j,E,k;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    placeholder: 'Large select'
  }
}`,...(k=(E=c.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};const Q=["Default","Uncontrolled","Controlled","Disabled","WithCustomStyles","Small","Medium","Large"];export{a as Controlled,e as Default,s as Disabled,c as Large,l as Medium,t as Small,r as Uncontrolled,o as WithCustomStyles,Q as __namedExportsOrder,K as default};
