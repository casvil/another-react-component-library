import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{e as v,r as y}from"./iframe-BCzmj9Vo.js";import{c as g}from"./clsx-B-dksMZM.js";import{j as e,k as T}from"./classes-DL16wGMG.js";const x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body:"p",small:"small",caption:"span"},t=v.memo(y.forwardRef(({children:n,variant:a="body",weight:l,color:r="primary",align:i="left",truncate:s=!1,className:o,as:m,...u},p)=>{const d=m||x[a],c=l?e.weight[l]:e.variantDefaultWeights[a],h=g(e.variant[a],c,e.color[r],T[i],{truncate:s},o);return f.jsx(d,{ref:p,className:h,...u,children:n})}));t.displayName="Text";t.__docgenInfo={description:`Text atom component. A flexible typography component for rendering text with various styles.
Supports multiple variants (h1-h6, body, small, caption), font weights, colors, alignment options,
and text truncation. Can be rendered as any HTML element using the 'as' prop for semantic flexibility.`,methods:[],displayName:"Text",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:`| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'
| 'body'
| 'small'
| 'caption'`,elements:[{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"},{name:"literal",value:"'h4'"},{name:"literal",value:"'h5'"},{name:"literal",value:"'h6'"},{name:"literal",value:"'body'"},{name:"literal",value:"'small'"},{name:"literal",value:"'caption'"}]},description:"",defaultValue:{value:"'body'",computed:!1}},weight:{required:!1,tsType:{name:"union",raw:"'light' | 'normal' | 'medium' | 'semibold' | 'bold'",elements:[{name:"literal",value:"'light'"},{name:"literal",value:"'normal'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'semibold'"},{name:"literal",value:"'bold'"}]},description:""},color:{required:!1,tsType:{name:"union",raw:`| 'primary'
| 'secondary'
| 'muted'
| 'success'
| 'warning'
| 'error'
| 'info'`,elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'muted'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},align:{required:!1,tsType:{name:"union",raw:"'left' | 'center' | 'right' | 'justify'",elements:[{name:"literal",value:"'left'"},{name:"literal",value:"'center'"},{name:"literal",value:"'right'"},{name:"literal",value:"'justify'"}]},description:"",defaultValue:{value:"'left'",computed:!1}},truncate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},as:{required:!1,tsType:{name:"ReactElementType",raw:"React.ElementType"},description:""}}};export{t as T};
