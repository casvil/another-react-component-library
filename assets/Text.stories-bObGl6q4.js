import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{e as te}from"./iframe-ESOGW_Ls.js";import{c as ae}from"./clsx-B-dksMZM.js";import{l as n,m as ne}from"./classes-BD7lNhBs.js";const ie={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",body:"p",small:"small",caption:"span"},t=te.memo(({children:a,variant:p="body",weight:g,color:O="primary",align:G="left",truncate:K=!1,className:Q,as:X,...Y})=>{const Z=X||ie[p],$=g?n.weight[g]:n.variantDefaultWeights[p],ee=ae(n.variant[p],$,n.color[O],ne[G],{truncate:K},Q);return e.jsx(Z,{className:ee,...Y,children:a})});t.displayName="Text";t.__docgenInfo={description:`Text atom component. A flexible typography component for rendering text with various styles.
Supports multiple variants (h1-h6, body, small, caption), font weights, colors, alignment options,
and text truncation. Can be rendered as any HTML element using the 'as' prop for semantic flexibility.`,methods:[],displayName:"Text",props:{variant:{defaultValue:{value:"'body'",computed:!1},required:!1},color:{defaultValue:{value:"'primary'",computed:!1},required:!1},align:{defaultValue:{value:"'left'",computed:!1},required:!1},truncate:{defaultValue:{value:"false",computed:!1},required:!1}}};const ce={title:"Atoms/Text",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["h1","h2","h3","h4","h5","h6","body","small","caption"]},weight:{control:"select",options:["light","normal","medium","semibold","bold"]},color:{control:"select",options:["primary","secondary","muted","success","warning","error","info"]},align:{control:"select",options:["left","center","right","justify"]},truncate:{control:"boolean"},as:{control:"select",options:["h1","h2","h3","h4","h5","h6","p","span","div","small"]}}},i={args:{children:"This is default body text with normal weight and primary color.",variant:"body",weight:"normal",color:"primary",align:"left",truncate:!1}},r={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsx(t,{variant:"h1",children:"Heading 1 - Main page title"}),e.jsx(t,{variant:"h2",children:"Heading 2 - Section title"}),e.jsx(t,{variant:"h3",children:"Heading 3 - Subsection title"}),e.jsx(t,{variant:"h4",children:"Heading 4 - Component title"}),e.jsx(t,{variant:"h5",children:"Heading 5 - Small section"}),e.jsx(t,{variant:"h6",children:"Heading 6 - Smallest heading"})]})},s={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{variant:"body",children:"Body text - Standard paragraph text for content"}),e.jsx(t,{variant:"small",children:"Small text - For captions, footnotes, or secondary information"}),e.jsx(t,{variant:"caption",children:"Caption text - For image captions or very small details"})]})},o={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{color:"primary",children:"Primary color text - Standard text color"}),e.jsx(t,{color:"secondary",children:"Secondary color text - Slightly muted"}),e.jsx(t,{color:"muted",children:"Muted color text - More subdued"}),e.jsx(t,{color:"success",children:"Success color text - For positive messages"}),e.jsx(t,{color:"warning",children:"Warning color text - For cautionary messages"}),e.jsx(t,{color:"error",children:"Error color text - For error messages"}),e.jsx(t,{color:"info",children:"Info color text - For informational messages"})]})},l={render:()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{weight:"light",children:"Light weight text"}),e.jsx(t,{weight:"normal",children:"Normal weight text"}),e.jsx(t,{weight:"medium",children:"Medium weight text"}),e.jsx(t,{weight:"semibold",children:"Semibold weight text"}),e.jsx(t,{weight:"bold",children:"Bold weight text"})]})},c={render:()=>e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"h6",className:"mb-2",children:"Left Aligned (Default)"}),e.jsx(t,{align:"left",children:"This text is aligned to the left side of its container."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h6",className:"mb-2",children:"Center Aligned"}),e.jsx(t,{align:"center",children:"This text is centered within its container."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h6",className:"mb-2",children:"Right Aligned"}),e.jsx(t,{align:"right",children:"This text is aligned to the right side of its container."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h6",className:"mb-2",children:"Justified"}),e.jsx(t,{align:"justify",children:"This text is justified, which means it is aligned to both the left and right margins, creating straight edges on both sides by adjusting the spacing between words."})]})]})},d={render:()=>e.jsxs("div",{className:"space-y-4 max-w-xs",children:[e.jsxs("div",{children:[e.jsx(t,{variant:"h6",className:"mb-2",children:"Normal Text (Wraps)"}),e.jsx(t,{children:"This is a long line of text that will wrap to multiple lines when it exceeds the container width."})]}),e.jsxs("div",{children:[e.jsx(t,{variant:"h6",className:"mb-2",children:"Truncated Text"}),e.jsx(t,{truncate:!0,children:"This is a long line of text that will be truncated with an ellipsis when it exceeds the container width."})]})]})},h={render:()=>e.jsxs("div",{className:"space-y-3",children:[e.jsx(t,{variant:"h2",as:"div",children:"H2 styling but rendered as div"}),e.jsx(t,{variant:"body",as:"span",children:"Body styling but rendered as span"}),e.jsx(t,{variant:"caption",as:"p",children:"Caption styling but rendered as paragraph"})]})},x={render:()=>e.jsxs("article",{className:"space-y-4 max-w-2xl",children:[e.jsx(t,{variant:"h1",as:"h1",children:"Article Title"}),e.jsx(t,{variant:"small",color:"muted",children:"Published on March 15, 2024"}),e.jsx(t,{variant:"h2",as:"h2",children:"Introduction"}),e.jsx(t,{variant:"body",children:"This is the introduction paragraph of the article. It provides an overview of what the reader can expect to learn from this content."}),e.jsx(t,{variant:"h3",as:"h3",children:"Main Section"}),e.jsx(t,{variant:"body",children:"This is the main content section with detailed information. The text component allows for consistent typography throughout the application while maintaining semantic HTML structure."}),e.jsxs(t,{variant:"body",children:[e.jsx(t,{as:"strong",weight:"semibold",children:"Important note:"})," ","This demonstrates how text components can be nested and combined with different weights and styling."]}),e.jsx(t,{variant:"small",color:"secondary",as:"footer",children:"This article demonstrates the Text component's flexibility and semantic capabilities."})]})},m={render:()=>e.jsx("div",{className:"space-y-2",children:["h1","h2","h3","h4","h5","h6","body","small","caption"].map(a=>e.jsxs(t,{variant:a,children:[a.toUpperCase()," - Sample text for ",a," variant"]},a))})};var T,u,v;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    children: 'This is default body text with normal weight and primary color.',
    variant: 'body',
    weight: 'normal',
    color: 'primary',
    align: 'left',
    truncate: false
  }
}`,...(v=(u=i.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var y,f,w;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <Text variant="h1">Heading 1 - Main page title</Text>
      <Text variant="h2">Heading 2 - Section title</Text>
      <Text variant="h3">Heading 3 - Subsection title</Text>
      <Text variant="h4">Heading 4 - Component title</Text>
      <Text variant="h5">Heading 5 - Small section</Text>
      <Text variant="h6">Heading 6 - Smallest heading</Text>
    </div>
}`,...(w=(f=r.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var b,j,S;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text variant="body">
        Body text - Standard paragraph text for content
      </Text>
      <Text variant="small">
        Small text - For captions, footnotes, or secondary information
      </Text>
      <Text variant="caption">
        Caption text - For image captions or very small details
      </Text>
    </div>
}`,...(S=(j=s.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var N,C,H;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Text color="primary">Primary color text - Standard text color</Text>
      <Text color="secondary">Secondary color text - Slightly muted</Text>
      <Text color="muted">Muted color text - More subdued</Text>
      <Text color="success">Success color text - For positive messages</Text>
      <Text color="warning">Warning color text - For cautionary messages</Text>
      <Text color="error">Error color text - For error messages</Text>
      <Text color="info">Info color text - For informational messages</Text>
    </div>
}`,...(H=(C=o.parameters)==null?void 0:C.docs)==null?void 0:H.source}}};var A,M,F;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      <Text weight="light">Light weight text</Text>
      <Text weight="normal">Normal weight text</Text>
      <Text weight="medium">Medium weight text</Text>
      <Text weight="semibold">Semibold weight text</Text>
      <Text weight="bold">Bold weight text</Text>
    </div>
}`,...(F=(M=l.parameters)==null?void 0:M.docs)==null?void 0:F.source}}};var E,I,B;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="space-y-4">
      <div>
        <Text variant="h6" className="mb-2">
          Left Aligned (Default)
        </Text>
        <Text align="left">
          This text is aligned to the left side of its container.
        </Text>
      </div>
      <div>
        <Text variant="h6" className="mb-2">
          Center Aligned
        </Text>
        <Text align="center">This text is centered within its container.</Text>
      </div>
      <div>
        <Text variant="h6" className="mb-2">
          Right Aligned
        </Text>
        <Text align="right">
          This text is aligned to the right side of its container.
        </Text>
      </div>
      <div>
        <Text variant="h6" className="mb-2">
          Justified
        </Text>
        <Text align="justify">
          This text is justified, which means it is aligned to both the left and
          right margins, creating straight edges on both sides by adjusting the
          spacing between words.
        </Text>
      </div>
    </div>
}`,...(B=(I=c.parameters)==null?void 0:I.docs)==null?void 0:B.source}}};var L,V,W;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="space-y-4 max-w-xs">
      <div>
        <Text variant="h6" className="mb-2">
          Normal Text (Wraps)
        </Text>
        <Text>
          This is a long line of text that will wrap to multiple lines when it
          exceeds the container width.
        </Text>
      </div>
      <div>
        <Text variant="h6" className="mb-2">
          Truncated Text
        </Text>
        <Text truncate>
          This is a long line of text that will be truncated with an ellipsis
          when it exceeds the container width.
        </Text>
      </div>
    </div>
}`,...(W=(V=d.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};var D,_,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div className="space-y-3">
      <Text variant="h2" as="div">
        H2 styling but rendered as div
      </Text>
      <Text variant="body" as="span">
        Body styling but rendered as span
      </Text>
      <Text variant="caption" as="p">
        Caption styling but rendered as paragraph
      </Text>
    </div>
}`,...(q=(_=h.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var P,R,J;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => <article className="space-y-4 max-w-2xl">
      <Text variant="h1" as="h1">
        Article Title
      </Text>
      <Text variant="small" color="muted">
        Published on March 15, 2024
      </Text>

      <Text variant="h2" as="h2">
        Introduction
      </Text>
      <Text variant="body">
        This is the introduction paragraph of the article. It provides an
        overview of what the reader can expect to learn from this content.
      </Text>

      <Text variant="h3" as="h3">
        Main Section
      </Text>
      <Text variant="body">
        This is the main content section with detailed information. The text
        component allows for consistent typography throughout the application
        while maintaining semantic HTML structure.
      </Text>

      <Text variant="body">
        <Text as="strong" weight="semibold">
          Important note:
        </Text>{' '}
        This demonstrates how text components can be nested and combined with
        different weights and styling.
      </Text>

      <Text variant="small" color="secondary" as="footer">
        This article demonstrates the Text component's flexibility and semantic
        capabilities.
      </Text>
    </article>
}`,...(J=(R=x.parameters)==null?void 0:R.docs)==null?void 0:J.source}}};var U,k,z;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <div className="space-y-2">
      {(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'body', 'small', 'caption'] as const).map(variant => <Text key={variant} variant={variant}>
          {variant.toUpperCase()} - Sample text for {variant} variant
        </Text>)}
    </div>
}`,...(z=(k=m.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};const de=["Default","Headings","BodyTexts","Colors","Weights","Alignments","Truncated","CustomElements","SemanticExample","AllVariants"];export{c as Alignments,m as AllVariants,s as BodyTexts,o as Colors,h as CustomElements,i as Default,r as Headings,x as SemanticExample,d as Truncated,l as Weights,de as __namedExportsOrder,ce as default};
