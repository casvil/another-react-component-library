import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as i}from"./iframe-BURjgtq8.js";import{c as h}from"./clsx-B-dksMZM.js";import{C as he}from"./credit-card-D4Kl7Er3.js";import{c as fe}from"./createLucideIcon-DcMer0xQ.js";import{L as Ne}from"./lock-DmhrJd2j.js";import{U as ye}from"./user-C42j6_KH.js";import{I as y}from"./Input-CK_m5Gh8.js";import{L as C}from"./Label-BnpzQARg.js";import{E as w}from"./ErrorMessage-B1DJFAfK.js";import{d as Ce,g as we}from"./cardPatterns-NqprS6y9.js";import{B as me}from"./Button-0Qjm44SM.js";import"./size-B9QBcs2T.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],De=fe("calendar",je),f=({size:s="md",className:p,onSubmit:u,onChange:x,showCardholderName:b=!0,disabled:g=!1,initialValues:P={}})=>{const[t,L]=i.useState({cardNumber:"",cardholderName:"",expiryDate:"",cvc:"",cardType:null,...P}),[n,q]=i.useState({}),l=i.useMemo(()=>Ce(t.cardNumber),[t.cardNumber]),c=i.useMemo(()=>we(l),[l]),ue=i.useCallback(r=>{const a=r.replace(/\D/g,"");let d="",o=0;for(let m=0;m<a.length;m++)c.gaps.includes(o)&&d.length>0&&(d+=" "),d+=a[m],o++;return d},[c.gaps]),pe=i.useCallback(r=>{const a=r.replace(/\D/g,"").slice(0,4);return a.length>=2?`${a.slice(0,2)}/${a.slice(2)}`:a},[]),xe=i.useCallback(r=>r.replace(/\D/g,"").slice(0,c.cvcLength),[c.cvcLength]),A=i.useCallback(r=>{const a=r.replace(/\s/g,"");if(a.length<13||a.length>19)return!1;let d=0,o=!1;for(let m=a.length-1;m>=0;m--){let v=parseInt(a[m]);o&&(v*=2,v>9&&(v-=9)),d+=v,o=!o}return d%10===0},[]),R=i.useCallback(r=>{const a=r.replace(/\D/g,"");if(a.length!==4)return!1;const d=parseInt(a.slice(0,2)),o=parseInt(a.slice(2,4));if(d<1||d>12)return!1;const m=new Date,v=m.getFullYear()%100,ve=m.getMonth()+1;return o>v||o===v&&d>=ve},[]),N=i.useCallback((r,a)=>{const d={...t,[r]:a};r==="cardNumber"&&(d.cardType=l),L(d),n[r]&&q(o=>({...o,[r]:void 0})),x&&x(d)},[t,l,n,x]),ge=i.useCallback(r=>{r.preventDefault();const a={};t.cardNumber?A(t.cardNumber)||(a.cardNumber="Please enter a valid card number"):a.cardNumber="Card number is required",b&&!t.cardholderName.trim()&&(a.cardholderName="Cardholder name is required"),t.expiryDate?R(t.expiryDate)||(a.expiryDate="Please enter a valid future date"):a.expiryDate="Expiry date is required",t.cvc?t.cvc.length!==c.cvcLength&&(a.cvc=`CVC must be ${c.cvcLength} digits`):a.cvc="CVC is required",q(a),Object.keys(a).length===0&&u&&u({...t,cardType:l})},[t,b,A,R,c.cvcLength,l,u]),be=h("space-y-4",g&&"opacity-60 pointer-events-none",p);return e.jsxs("form",{onSubmit:ge,className:be,role:"form",children:[e.jsxs("div",{children:[e.jsx(C,{htmlFor:"credit-card-number",children:"Card Number"}),e.jsx(y,{id:"credit-card-number",size:s,icon:he,iconClassName:h(l==="visa"&&"text-blue-600",l==="mastercard"&&"text-red-500",l==="amex"&&"text-green-600",l==="discover"&&"text-orange-500"),value:t.cardNumber,onChange:r=>N("cardNumber",ue(r.target.value)),placeholder:"1234 5678 9012 3456",inputMode:"numeric",autoComplete:"cc-number",maxLength:c.maxLength,className:h("font-mono tracking-wider",n.cardNumber&&"border-red-300 focus:ring-red-500"),disabled:g,required:!0}),n.cardNumber&&e.jsx(w,{id:"credit-card-number-error",children:n.cardNumber})]}),b&&e.jsxs("div",{children:[e.jsx(C,{htmlFor:"cardholder-name",children:"Card Holder"}),e.jsx(y,{id:"cardholder-name",size:s,icon:ye,value:t.cardholderName,onChange:r=>N("cardholderName",r.target.value.toUpperCase()),placeholder:"VICTOR SAULER",autoComplete:"cc-name",className:h("uppercase tracking-wider",n.cardholderName&&"border-red-300 focus:ring-red-500"),disabled:g,required:b}),n.cardholderName&&e.jsx(w,{id:"cardholder-name-error",children:n.cardholderName})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-4",children:[e.jsxs("div",{children:[e.jsx(C,{htmlFor:"expiry-date",children:"Exp. Date"}),e.jsx(y,{id:"expiry-date",size:s,icon:De,value:t.expiryDate,onChange:r=>N("expiryDate",pe(r.target.value)),placeholder:"MM/YY",inputMode:"numeric",autoComplete:"cc-exp",maxLength:5,className:h("font-mono tracking-wider",n.expiryDate&&"border-red-300 focus:ring-red-500"),disabled:g,required:!0}),n.expiryDate&&e.jsx(w,{id:"expiry-date-error",children:n.expiryDate})]}),e.jsxs("div",{children:[e.jsx(C,{htmlFor:"cvc",children:"CVC"}),e.jsx(y,{id:"cvc",size:s,icon:Ne,value:t.cvc,onChange:r=>N("cvc",xe(r.target.value)),placeholder:c.cvcLength===4?"1234":"123",inputMode:"numeric",autoComplete:"cc-csc",maxLength:c.cvcLength,className:h("font-mono tracking-wider text-center",n.cvc&&"border-red-300 focus:ring-red-500"),disabled:g,required:!0}),n.cvc&&e.jsx(w,{id:"cvc-error",children:n.cvc})]})]}),l&&l!=="unknown"&&e.jsxs("div",{className:"text-sm text-gray-600",children:[e.jsx("span",{className:"font-medium",children:"Detected card:"})," ",e.jsx("span",{className:"capitalize font-semibold",children:l})]})]})};f.displayName="CreditCardForm";f.__docgenInfo={description:`CreditCardForm molecule component.
A complete credit card form with automatic formatting, validation, and card type detection.
Uses existing Input and Label components from the library.`,methods:[],displayName:"CreditCardForm",props:{size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: CreditCardFormData) => void",signature:{arguments:[{type:{name:"CreditCardFormData"},name:"data"}],return:{name:"void"}}},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(data: Partial<CreditCardFormData>) => void",signature:{arguments:[{type:{name:"Partial",elements:[{name:"CreditCardFormData"}],raw:"Partial<CreditCardFormData>"},name:"data"}],return:{name:"void"}}},description:""},showCardholderName:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},initialValues:{required:!1,tsType:{name:"Partial",elements:[{name:"CreditCardFormData"}],raw:"Partial<CreditCardFormData>"},description:"",defaultValue:{value:"{}",computed:!1}}}};const Oe={title:"molecules/CreditCardForm",component:f,parameters:{layout:"centered",docs:{description:{component:"A complete credit card form built with existing library components. Features automatic formatting, validation, and card type detection."}}},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"]},showCardholderName:{control:"boolean"},disabled:{control:"boolean"}}},j={args:{}},D={args:{showCardholderName:!1}},S={args:{size:"sm"}},F={args:{size:"lg"}},E={args:{disabled:!0}},V={args:{initialValues:{cardNumber:"4111 1111 1111 1111",cardholderName:"JOHN DOE",expiryDate:"12/25",cvc:"123"}}},k={render:()=>{const[s,p]=i.useState({}),[u,x]=i.useState(null),[b,g]=i.useState(!1),P=async t=>{g(!0),x(t),await new Promise(L=>setTimeout(L,1e3)),g(!1),alert("Payment submitted successfully!")};return e.jsxs("div",{className:"space-y-6 w-96",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Payment Information"}),e.jsx(f,{onSubmit:P,onChange:p}),e.jsx(me,{type:"submit",label:b?"Processing...":"Submit Payment",className:"w-full mt-4",disabled:b,onClick:()=>{const t=document.querySelector("form");t&&t.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0}))}})]}),e.jsxs("div",{className:"bg-gray-50 p-4 rounded-lg",children:[e.jsx("h4",{className:"font-medium text-gray-900 mb-2",children:"Current Form Data:"}),e.jsx("pre",{className:"text-xs bg-white p-2 rounded border overflow-x-auto",children:JSON.stringify(s,null,2)})]}),u&&e.jsxs("div",{className:"bg-green-50 p-4 rounded-lg border border-green-200",children:[e.jsx("h4",{className:"font-medium text-green-900 mb-2",children:"Submitted Data:"}),e.jsx("pre",{className:"text-xs bg-white p-2 rounded border overflow-x-auto",children:JSON.stringify(u,null,2)})]}),e.jsxs("div",{className:"text-xs text-gray-500 space-y-1 bg-blue-50 p-3 rounded",children:[e.jsx("div",{children:e.jsx("strong",{children:"Test card numbers:"})}),e.jsx("div",{children:"Visa: 4111 1111 1111 1111"}),e.jsx("div",{children:"Mastercard: 5555 5555 5555 4444"}),e.jsx("div",{children:"Amex: 3782 822463 10005"}),e.jsx("div",{children:"Discover: 6011 1111 1111 1117"})]})]})}},I={render:()=>{var u,x;const[s,p]=i.useState({cardNumber:"1234 1234 1234 1234",cardholderName:"VICTOR SAULER",expiryDate:"10/25",cvc:"123"});return e.jsxs("div",{className:"max-w-md mx-auto space-y-6",children:[e.jsxs("div",{className:"bg-gradient-to-br from-slate-800 via-slate-700 to-teal-600 rounded-xl p-6 text-white relative overflow-hidden shadow-xl",children:[e.jsxs("div",{className:"relative z-10",children:[e.jsx("div",{className:"flex justify-between items-start mb-8",children:e.jsx("div",{className:"text-blue-400 font-bold text-lg italic",children:((u=s.cardType)==null?void 0:u.toUpperCase())==="VISA"?e.jsx("span",{className:"text-blue-300",children:"VISA"}):((x=s.cardType)==null?void 0:x.toUpperCase())||"CARD"})}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:"text-xs text-gray-300 mb-1",children:"Card Number"}),e.jsx("div",{className:"font-mono text-lg tracking-wider",children:s.cardNumber||"1234 1234 1234 1234"}),e.jsx("div",{className:"w-full h-px bg-gray-400 mt-2"})]}),e.jsxs("div",{className:"flex justify-between items-end",children:[e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"text-xs text-gray-300 mb-1",children:"Card Holder"}),e.jsx("div",{className:"font-mono text-sm tracking-wider uppercase",children:s.cardholderName||"VICTOR SAULER"}),e.jsx("div",{className:"w-3/4 h-px bg-gray-400 mt-1"})]}),e.jsxs("div",{className:"text-right mx-4",children:[e.jsx("div",{className:"text-xs text-gray-300 mb-1",children:"Exp. Date"}),e.jsx("div",{className:"font-mono text-sm tracking-wider",children:s.expiryDate||"10/25"}),e.jsx("div",{className:"w-full h-px bg-gray-400 mt-1"})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-xs text-gray-300 mb-1",children:"CCV"}),e.jsx("div",{className:"font-mono text-sm tracking-wider",children:s.cvc||"123"}),e.jsx("div",{className:"w-full h-px bg-gray-400 mt-1"})]})]})]}),e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full transform -translate-x-4 translate-y-4"})]}),e.jsxs("div",{className:"bg-white p-6 rounded-lg border shadow-sm",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Enter Card Details"}),e.jsx(f,{onChange:p,initialValues:s,className:"space-y-4"})]})]})}},T={render:()=>{const[,s]=i.useState({});return e.jsxs("div",{className:"space-y-6 w-96",children:[e.jsxs("div",{className:"bg-white p-6 rounded-lg border",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Validation Example"}),e.jsx(f,{onChange:s}),e.jsx(me,{type:"submit",label:"Validate Form",className:"w-full mt-4",onClick:()=>{const p=document.querySelector("form");p&&p.dispatchEvent(new Event("submit",{bubbles:!0,cancelable:!0}))}})]}),e.jsxs("div",{className:"text-sm space-y-3 bg-amber-50 p-4 rounded-lg border border-amber-200",children:[e.jsx("div",{children:e.jsx("strong",{children:"Try these validation scenarios:"})}),e.jsxs("ul",{className:"space-y-1 list-disc list-inside text-gray-700",children:[e.jsx("li",{children:"Submit empty form to see required field errors"}),e.jsx("li",{children:"Enter invalid card number: 1234567890"}),e.jsx("li",{children:"Enter past expiry date: 01/20"}),e.jsx("li",{children:"Enter invalid month: 13/25"}),e.jsx("li",{children:"Enter wrong CVC length for card type"})]})]})]})}};var M,O,U;j.parameters={...j.parameters,docs:{...(M=j.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {}
}`,...(U=(O=j.parameters)==null?void 0:O.docs)==null?void 0:U.source}}};var z,B,J;D.parameters={...D.parameters,docs:{...(z=D.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    showCardholderName: false
  }
}`,...(J=(B=D.parameters)==null?void 0:B.docs)==null?void 0:J.source}}};var _,H,W;S.parameters={...S.parameters,docs:{...(_=S.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'sm'
  }
}`,...(W=(H=S.parameters)==null?void 0:H.docs)==null?void 0:W.source}}};var Y,$,G;F.parameters={...F.parameters,docs:{...(Y=F.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: 'lg'
  }
}`,...(G=($=F.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,Q,X;E.parameters={...E.parameters,docs:{...(K=E.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    disabled: true
  }
}`,...(X=(Q=E.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,ae;V.parameters={...V.parameters,docs:{...(Z=V.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    initialValues: {
      cardNumber: '4111 1111 1111 1111',
      cardholderName: 'JOHN DOE',
      expiryDate: '12/25',
      cvc: '123'
    }
  }
}`,...(ae=(ee=V.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var re,te,se;k.parameters={...k.parameters,docs:{...(re=k.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(se=(te=k.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};var ie,de,ne;I.parameters={...I.parameters,docs:{...(ie=I.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState<Partial<CreditCardFormData>>({
      cardNumber: '1234 1234 1234 1234',
      cardholderName: 'VICTOR SAULER',
      expiryDate: '10/25',
      cvc: '123'
    });
    return <div className="max-w-md mx-auto space-y-6">
        {/* Card preview section matching the image design */}
        <div className="bg-gradient-to-br from-slate-800 via-slate-700 to-teal-600 rounded-xl p-6 text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10">
            {/* Card brand */}
            <div className="flex justify-between items-start mb-8">
              <div className="text-blue-400 font-bold text-lg italic">
                {formData.cardType?.toUpperCase() === 'VISA' ? <span className="text-blue-300">VISA</span> : formData.cardType?.toUpperCase() || 'CARD'}
              </div>
            </div>

            {/* Card number */}
            <div className="mb-6">
              <div className="text-xs text-gray-300 mb-1">Card Number</div>
              <div className="font-mono text-lg tracking-wider">
                {formData.cardNumber || '1234 1234 1234 1234'}
              </div>
              <div className="w-full h-px bg-gray-400 mt-2"></div>
            </div>

            {/* Bottom row */}
            <div className="flex justify-between items-end">
              <div className="flex-1">
                <div className="text-xs text-gray-300 mb-1">Card Holder</div>
                <div className="font-mono text-sm tracking-wider uppercase">
                  {formData.cardholderName || 'VICTOR SAULER'}
                </div>
                <div className="w-3/4 h-px bg-gray-400 mt-1"></div>
              </div>
              <div className="text-right mx-4">
                <div className="text-xs text-gray-300 mb-1">Exp. Date</div>
                <div className="font-mono text-sm tracking-wider">
                  {formData.expiryDate || '10/25'}
                </div>
                <div className="w-full h-px bg-gray-400 mt-1"></div>
              </div>
              <div className="text-right">
                <div className="text-xs text-gray-300 mb-1">CCV</div>
                <div className="font-mono text-sm tracking-wider">
                  {formData.cvc || '123'}
                </div>
                <div className="w-full h-px bg-gray-400 mt-1"></div>
              </div>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full transform -translate-x-4 translate-y-4"></div>
        </div>

        {/* Form */}
        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Enter Card Details</h3>
          <CreditCardForm onChange={setFormData} initialValues={formData} className="space-y-4" />
        </div>
      </div>;
  }
}`,...(ne=(de=I.parameters)==null?void 0:de.docs)==null?void 0:ne.source}}};var le,oe,ce;T.parameters={...T.parameters,docs:{...(le=T.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(ce=(oe=T.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const Ue=["Default","WithoutCardholderName","Small","Large","Disabled","WithInitialValues","InteractiveForm","PaymentCardPreview","ValidationShowcase"];export{j as Default,E as Disabled,k as InteractiveForm,F as Large,I as PaymentCardPreview,S as Small,T as ValidationShowcase,V as WithInitialValues,D as WithoutCardholderName,Ue as __namedExportsOrder,Oe as default};
