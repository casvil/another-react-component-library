import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as c}from"./iframe-CvNxPCzt.js";import{c as x}from"./clsx-B-dksMZM.js";import{C as ye}from"./credit-card-CmeKmSun.js";import{c as Ne}from"./createLucideIcon-nbKSwVxJ.js";import{L as fe}from"./lock-C35FH7oB.js";import{U as Ce}from"./user-CyLCayzi.js";import{I as y}from"./Input-ATFqI9Yy.js";import{L as N}from"./Label-BnpzQARg.js";import{E as f}from"./ErrorMessage-B1DJFAfK.js";import{u as De,E as u,F as a,g as we,a as Se,b as je,C as Fe}from"./CreditCardPreview-D6fc99qp.js";import{B as ne}from"./Button-C9QtWei4.js";import"./size-DhI2ozjY.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],Pe=Ne("calendar",Ee),b=({size:t="md",className:l,onSubmit:p,onChange:h,showCardholderName:n=!0,disabled:m=!1,initialValues:q={}})=>{const[r,V]=c.useState({cardNumber:"",cardholderName:"",expiryDate:"",cvc:"",cardType:null,...q}),[s,I]=c.useState({}),{formatCardNumber:ue,formatExpiryDate:pe,formatCvc:be,formatCardholderName:he,validateCardNumber:M,validateExpiryDate:O,validateCvc:k,cardType:o,formatRules:v}=De({cardNumber:r.cardNumber,mode:"form"}),g=c.useCallback((d,i)=>{const L={...r,[d]:i};d==="cardNumber"&&(L.cardType=o),V(L),s[d]&&I(ge=>({...ge,[d]:void 0})),h&&h(L)},[r,o,s,h]),ve=c.useCallback(d=>{d.preventDefault();const i={};r.cardNumber?M(r.cardNumber)||(i.cardNumber=u.cardNumber.invalid):i.cardNumber=u.cardNumber.required,n&&!r.cardholderName.trim()&&(i.cardholderName=u.cardholderName.required),r.expiryDate?O(r.expiryDate)||(i.expiryDate=u.expiryDate.invalid):i.expiryDate=u.expiryDate.required,r.cvc?k(r.cvc,o)||(i.cvc=u.cvc.invalid(v.cvcLength)):i.cvc=u.cvc.required,I(i),Object.keys(i).length===0&&p&&p({...r,cardType:o})},[r,n,M,O,k,v.cvcLength,o,p]),xe=x("space-y-4",m&&"opacity-60 pointer-events-none",l);return e.jsxs("form",{onSubmit:ve,className:xe,role:"form",children:[e.jsxs("div",{children:[e.jsx(N,{htmlFor:a.cardNumber.id,children:a.cardNumber.label}),e.jsx(y,{id:a.cardNumber.id,size:t,icon:ye,iconClassName:Se(o),value:r.cardNumber,onChange:d=>g("cardNumber",ue(d.target.value)),placeholder:a.cardNumber.placeholder,inputMode:a.cardNumber.inputMode,autoComplete:a.cardNumber.autoComplete,maxLength:we(v.maxLength),className:x(a.cardNumber.className,s.cardNumber&&a.cardNumber.errorClass),disabled:m,required:a.cardNumber.required}),s.cardNumber&&e.jsx(f,{id:`${a.cardNumber.id}-error`,children:s.cardNumber})]}),n&&e.jsxs("div",{children:[e.jsx(N,{htmlFor:a.cardholderName.id,children:a.cardholderName.label}),e.jsx(y,{id:a.cardholderName.id,size:t,icon:Ce,value:r.cardholderName,onChange:d=>g("cardholderName",he(d.target.value)),placeholder:a.cardholderName.placeholder,autoComplete:a.cardholderName.autoComplete,className:x(a.cardholderName.className,s.cardholderName&&a.cardholderName.errorClass),disabled:m,required:n}),s.cardholderName&&e.jsx(f,{id:`${a.cardholderName.id}-error`,children:s.cardholderName})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(N,{htmlFor:a.expiryDate.id,children:a.expiryDate.label}),e.jsx(y,{id:a.expiryDate.id,size:t,icon:Pe,value:r.expiryDate,onChange:d=>g("expiryDate",pe(d.target.value)),placeholder:a.expiryDate.placeholder,inputMode:a.expiryDate.inputMode,autoComplete:a.expiryDate.autoComplete,maxLength:a.expiryDate.maxLength,className:x(a.expiryDate.className,s.expiryDate&&a.expiryDate.errorClass),disabled:m,required:a.expiryDate.required}),s.expiryDate&&e.jsx(f,{id:`${a.expiryDate.id}-error`,children:s.expiryDate})]}),e.jsxs("div",{children:[e.jsx(N,{htmlFor:a.cvc.id,children:a.cvc.label}),e.jsx(y,{id:a.cvc.id,size:t,icon:fe,value:r.cvc,onChange:d=>g("cvc",be(d.target.value)),placeholder:je(v.cvcLength),inputMode:a.cvc.inputMode,autoComplete:a.cvc.autoComplete,maxLength:v.cvcLength,className:x(a.cvc.className,s.cvc&&a.cvc.errorClass),disabled:m,required:a.cvc.required}),s.cvc&&e.jsx(f,{id:`${a.cvc.id}-error`,children:s.cvc})]})]}),o&&o!=="unknown"&&e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsx("span",{className:"font-medium",children:"Detected card:"})," ",e.jsx("span",{className:"capitalize font-semibold",children:o})]})]})};b.displayName="CreditCardForm";b.__docgenInfo={description:`CreditCardForm molecule component.
A complete credit card form with automatic formatting, validation, and card type detection.
Uses existing Input and Label components from the library.`,methods:[],displayName:"CreditCardForm",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: CreditCardFormData) => void",signature:{arguments:[{type:{name:"CreditCardFormData"},name:"data"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: Partial<CreditCardFormData>) => void",signature:{arguments:[{type:{name:"Partial",elements:[{name:"CreditCardFormData"}],raw:"Partial<CreditCardFormData>"},name:"data"}],return:{name:"void"}}},description:""},showCardholderName:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialValues:{required:!1,tsType:{name:"Partial",elements:[{name:"CreditCardFormData"}],raw:"Partial<CreditCardFormData>"},description:"",defaultValue:{value:"{}",computed:!1}}}};const Ue={title:"molecules/CreditCardForm",component:b,parameters:{layout:"centered",docs:{description:{component:"A complete credit card form built with existing library components. Features automatic formatting, validation, and card type detection."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},showCardholderName:{control:"boolean"},disabled:{control:"boolean"}}},C={args:{}},D={args:{showCardholderName:!1}},w={args:{size:"sm"}},S={args:{size:"lg"}},j={args:{disabled:!0}},F={args:{initialValues:{cardNumber:"4111 1111 1111 1111",cardholderName:"JOHN DOE",expiryDate:"12/25",cvc:"123"}}},E={render:()=>{const[t,l]=c.useState({}),[p,h]=c.useState(null),[n,m]=c.useState(!1),q=async r=>{m(!0),h(r),await new Promise(V=>setTimeout(V,1e3)),m(!1),alert("Payment submitted successfully!")};return e.jsxs("div",{className:"space-y-6 w-96",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Payment Information"}),e.jsx(b,{onSubmit:q,onChange:l}),e.jsx(ne,{type:"submit",label:n?"Processing...":"Submit Payment",className:"w-full mt-4",disabled:n,onClick:()=>{const r=document.querySelector("form");r&&r.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0}))}})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Current Form Data:"}),e.jsx("pre",{className:"text-xs bg-white p-2 rounded border overflow-x-auto",children:JSON.stringify(t,null,2)})]}),p&&e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-green-900 mb-2",children:"Submitted Data:"}),e.jsx("pre",{className:"text-xs bg-white p-2 rounded border overflow-x-auto",children:JSON.stringify(p,null,2)})]}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1 bg-blue-50 p-3 rounded",children:[e.jsx("div",{children:e.jsx("strong",{children:"Test card numbers:"})}),e.jsx("div",{children:"Visa: 4111 1111 1111 1111"}),e.jsx("div",{children:"Mastercard: 5555 5555 5555 4444"}),e.jsx("div",{children:"Amex: 3782 822463 10005"}),e.jsx("div",{children:"Discover: 6011 1111 1111 1117"})]})]})}},P={render:()=>{const[t,l]=c.useState({cardNumber:"1234 1234 1234 1234",cardholderName:"VICTOR SAULER",expiryDate:"10/25",cvc:"123"});return e.jsxs("div",{className:"max-w-md mx-auto space-y-6",children:[e.jsx(Fe,{cardNumber:t.cardNumber,cardholderName:t.cardholderName,expiryDate:t.expiryDate,cvc:t.cvc,cardType:t.cardType,editable:!1,size:"md",className:"shadow-xl"}),e.jsxs("div",{className:"bg-white p-6 rounded-lg border shadow-sm",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Enter Card Details"}),e.jsx(b,{onChange:l,initialValues:t,className:"space-y-4"})]})]})},parameters:{layout:"centered",docs:{description:{story:"A complete payment card form with live preview. The card preview updates in real-time as you type in the form below."}}}},T={render:()=>{const[,t]=c.useState({});return e.jsxs("div",{className:"space-y-6 w-96",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Validation Example"}),e.jsx(b,{onChange:t}),e.jsx(ne,{type:"submit",label:"Validate Form",className:"w-full mt-4",onClick:()=>{const l=document.querySelector("form");l&&l.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0}))}})]}),e.jsxs("div",{className:"text-sm space-y-3 bg-amber-50 p-4 rounded-lg border border-amber-200",children:[e.jsx("div",{children:e.jsx("strong",{children:"Try these validation scenarios:"})}),e.jsxs("ul",{className:"space-y-1 list-disc list-inside text-gray-700",children:[e.jsx("li",{children:"Submit empty form to see required field errors"}),e.jsx("li",{children:"Enter invalid card number: 1234567890"}),e.jsx("li",{children:"Enter past expiry date: 01/20"}),e.jsx("li",{children:"Enter invalid month: 13/25"}),e.jsx("li",{children:"Enter wrong CVC length for card type"})]})]})]})}};var R,A,_;C.parameters={...C.parameters,docs:{...(R=C.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {}
}`,...(_=(A=C.parameters)==null?void 0:A.docs)==null?void 0:_.source}}};var z,J,U;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    showCardholderName: false
  }
}`,...(U=(J=D.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var W,B,$;w.parameters={...w.parameters,docs:{...(W=w.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...($=(B=w.parameters)==null?void 0:B.docs)==null?void 0:$.source}}};var G,H,K;S.parameters={...S.parameters,docs:{...(G=S.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(K=(H=S.parameters)==null?void 0:H.docs)==null?void 0:K.source}}};var Q,X,Y;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(Y=(X=j.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,ae;F.parameters={...F.parameters,docs:{...(Z=F.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    initialValues: {
      cardNumber: '4111 1111 1111 1111',
      cardholderName: 'JOHN DOE',
      expiryDate: '12/25',
      cvc: '123'
    }
  }
}`,...(ae=(ee=F.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;E.parameters={...E.parameters,docs:{...(re=E.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState<Partial<CreditCardFormData>>({});
    const [submittedData, setSubmittedData] = useState<CreditCardFormData | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (data: CreditCardFormData) => {
      setIsSubmitting(true);
      setSubmittedData(data);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitting(false);
      alert('Payment submitted successfully!');
    };
    return <div className="space-y-6 w-96">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Payment Information</h3>
          <CreditCardForm onSubmit={handleSubmit} onChange={setFormData} />

          <Button type="submit" label={isSubmitting ? 'Processing...' : 'Submit Payment'} className="w-full mt-4" disabled={isSubmitting} onClick={() => {
          const form = document.querySelector('form');
          if (form) {
            form.dispatchEvent(new Event('submit', {
              bubbles: true,
              cancelable: true
            }));
          }
        }} />
        </div>

        {/* Real-time form data */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-medium text-gray-900 mb-2">Current Form Data:</h4>
          <pre className="text-xs bg-white p-2 rounded border overflow-x-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>

        {/* Submitted data */}
        {submittedData && <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <h4 className="font-medium text-green-900 mb-2">Submitted Data:</h4>
            <pre className="text-xs bg-white p-2 rounded border overflow-x-auto">
              {JSON.stringify(submittedData, null, 2)}
            </pre>
          </div>}

        <div className="text-xs text-gray-500 space-y-1 bg-blue-50 p-3 rounded">
          <div>
            <strong>Test card numbers:</strong>
          </div>
          <div>Visa: 4111 1111 1111 1111</div>
          <div>Mastercard: 5555 5555 5555 4444</div>
          <div>Amex: 3782 822463 10005</div>
          <div>Discover: 6011 1111 1111 1117</div>
        </div>
      </div>;
  }
}`,...(se=(te=E.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var de,ie,oe;P.parameters={...P.parameters,docs:{...(de=P.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState<Partial<CreditCardFormData>>({
      cardNumber: '1234 1234 1234 1234',
      cardholderName: 'VICTOR SAULER',
      expiryDate: '10/25',
      cvc: '123'
    });
    return <div className="max-w-md mx-auto space-y-6">
        {/* Card preview using the actual CreditCardPreview component */}
        <CreditCardPreview cardNumber={formData.cardNumber} cardholderName={formData.cardholderName} expiryDate={formData.expiryDate} cvc={formData.cvc} cardType={formData.cardType} editable={false} size="md" className="shadow-xl" />

        {/* Form */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Enter Card Details</h3>
          <CreditCardForm onChange={setFormData} initialValues={formData} className="space-y-4" />
        </div>
      </div>;
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'A complete payment card form with live preview. The card preview updates in real-time as you type in the form below.'
      }
    }
  }
}`,...(oe=(ie=P.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var ce,le,me;T.parameters={...T.parameters,docs:{...(ce=T.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: () => {
    const [, setFormData] = useState<Partial<CreditCardFormData>>({});
    return <div className="space-y-6 w-96">
        <div className="bg-white p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4">Validation Example</h3>
          <CreditCardForm onChange={setFormData} />

          <Button type="submit" label="Validate Form" className="w-full mt-4" onClick={() => {
          const form = document.querySelector('form');
          if (form) {
            form.dispatchEvent(new Event('submit', {
              bubbles: true,
              cancelable: true
            }));
          }
        }} />
        </div>

        <div className="text-sm space-y-3 bg-amber-50 p-4 rounded-lg border border-amber-200">
          <div>
            <strong>Try these validation scenarios:</strong>
          </div>
          <ul className="space-y-1 list-disc list-inside text-gray-700">
            <li>Submit empty form to see required field errors</li>
            <li>Enter invalid card number: 1234567890</li>
            <li>Enter past expiry date: 01/20</li>
            <li>Enter invalid month: 13/25</li>
            <li>Enter wrong CVC length for card type</li>
          </ul>
        </div>
      </div>;
  }
}`,...(me=(le=T.parameters)==null?void 0:le.docs)==null?void 0:me.source}}};const We=["Default","WithoutCardholderName","Small","Large","Disabled","WithInitialValues","InteractiveForm","PaymentCardPreview","ValidationShowcase"];export{C as Default,j as Disabled,E as InteractiveForm,S as Large,P as PaymentCardPreview,w as Small,T as ValidationShowcase,F as WithInitialValues,D as WithoutCardholderName,We as __namedExportsOrder,Ue as default};
