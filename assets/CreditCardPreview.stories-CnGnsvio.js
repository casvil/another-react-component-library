import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as l}from"./iframe-BURjgtq8.js";import{c as p}from"./clsx-B-dksMZM.js";import{d as q,g as pe,a as xe}from"./cardPatterns-NqprS6y9.js";import{k as Ne}from"./size-B9QBcs2T.js";const fe={sm:{brand:"text-base",number:"text-base",label:"text-xs",value:"text-xs"},md:{brand:"text-lg",number:"text-lg",label:"text-xs",value:"text-sm"},lg:{brand:"text-xl",number:"text-xl",label:"text-sm",value:"text-base"}},ve={sm:"mt-auto",md:"mt-auto",lg:"mt-auto"},s=({cardNumber:N="",cardholderName:f="",expiryDate:v="",cvc:h="",cardType:te,onChange:R,editable:S=!0,className:se,size:z="md",showCvc:le=!0})=>{const[g,I]=l.useState(null),[t,T]=l.useState({cardNumber:N,cardholderName:f,expiryDate:v,cvc:h}),O=l.useRef({cardNumber:l.useRef(null),cardholderName:l.useRef(null),expiryDate:l.useRef(null),cvc:l.useRef(null)}).current,ce=q(t.cardNumber),x=te||ce,m=pe(x),L=l.useCallback(a=>{const r=a.replace(/\D/g,""),i=m.maxLength,d=r.slice(0,i);let n="",o=0;for(let C=0;C<d.length;C++)m.gaps.includes(o)&&n.length>0&&(n+=" "),n+=d[C],o++;return n},[m.gaps,m.maxLength]),H=l.useCallback(a=>{const r=a.replace(/\D/g,"").slice(0,4);if(r.length>=2){const i=r.slice(0,2),d=r.slice(2),n=parseInt(i,10);return`${n>=1&&n<=12?i:"12"}/${d}`}return r},[]),U=l.useCallback(a=>a.replace(/\D/g,"").slice(0,m.cvcLength),[m.cvcLength]),ie=l.useCallback(a=>{S&&I(a)},[S]),de=l.useCallback((a,r)=>{let i=r;switch(a){case"cardNumber":{const d=r.replace(/[^\d\s]/g,""),n=d.replace(/\D/g,"").length,o=t.cardNumber.replace(/\D/g,"").length;if((o===16||o===15&&x==="amex"||o===14&&x==="diners")&&n>o)i=t.cardNumber;else{const ue=d.replace(/\D/g,"").slice(0,m.maxLength);i=L(ue)}break}case"cardholderName":{i=r.replace(/[^a-zA-Z\s\-']/g,"").toUpperCase().slice(0,26);break}case"expiryDate":{i=H(r);break}case"cvc":{i=U(r);break}}T(d=>({...d,[a]:i}))},[L,H,U,m.maxLength]),M=l.useCallback(a=>{if(I(null),R){const r=a==="cardNumber"&&t.cardNumber.trim()?q(t.cardNumber):t.cardNumber.trim()?q(t.cardNumber):null;R({cardNumber:t.cardNumber,cardholderName:t.cardholderName,expiryDate:t.expiryDate,cvc:t.cvc,cardType:r})}},[t,R]),ne=l.useCallback((a,r)=>{a.key==="Enter"&&M(r),a.key==="Escape"&&(I(null),T({cardNumber:N,cardholderName:f,expiryDate:v,cvc:h}))},[M,N,f,v,h]);l.useEffect(()=>{var a;if(g&&((a=O[g])!=null&&a.current)){const r=O[g].current;r==null||r.focus(),r==null||r.select()}},[g]),l.useEffect(()=>{T({cardNumber:N,cardholderName:f,expiryDate:v,cvc:h})},[N,f,v,h]);const u=fe[z],b=xe(x),me=()=>(b==null?void 0:b.displayName)||(x==null?void 0:x.toUpperCase())||"CARD",oe=()=>(b==null?void 0:b.gradient)||"from-slate-800 via-slate-700 to-teal-600",w=(a,r,i,d="text",n)=>{const o=g===a,P=a==="cardNumber"&&(!N||!r.trim())||a==="cardholderName"&&!f||a==="expiryDate"&&!v||a==="cvc"&&!h?i:r,V=y=>{switch(y){case"cardNumber":return"Card number";case"cardholderName":return"Cardholder name";case"expiryDate":return"Expiry date";case"cvc":return"CVC security code";default:return"Field"}};return o?e.jsx("input",{ref:O[a],value:t[a],onChange:y=>de(a,y.target.value),onBlur:()=>M(a),onKeyDown:y=>ne(y,a),placeholder:i,inputMode:d,...a!=="cardNumber"&&{maxLength:n},"aria-label":`Edit ${V(a)}`,role:"textbox",className:"bg-transparent border-none outline-none text-white font-mono tracking-wider w-full resize-none",style:{fontSize:"inherit",fontFamily:"inherit"}}):S?e.jsx("button",{type:"button",onClick:()=>ie(a),className:p("font-mono tracking-wider text-left","cursor-pointer hover:bg-white/10 rounded px-1 -mx-1 transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"),"aria-label":`Edit ${V(a)}`,tabIndex:0,children:P}):e.jsx("span",{className:"font-mono tracking-wider",children:P})};return e.jsxs("div",{role:"article",className:p("bg-gradient-to-br rounded-xl text-white relative overflow-hidden shadow-xl",oe(),Ne[z],se),children:[e.jsxs("div",{className:"relative z-10 h-full flex flex-col",children:[e.jsx("div",{className:"flex justify-between items-start mb-8",children:e.jsx("div",{className:p("font-bold italic",u.brand),children:me()})}),e.jsxs("div",{className:"mb-6",children:[e.jsx("div",{className:p("text-gray-300 mb-1",u.label),children:"Card Number"}),e.jsx("div",{className:u.number,children:w("cardNumber",L(t.cardNumber),"•••• •••• •••• ••••","numeric",void 0)}),e.jsx("div",{className:"w-full h-px bg-gray-400 mt-2"})]}),e.jsxs("div",{className:p("flex justify-between items-end",ve[z]),children:[e.jsxs("div",{className:"flex-1 min-w-0 pr-4",children:[e.jsx("div",{className:p("text-gray-300 mb-1",u.label),children:"Card Holder"}),e.jsx("div",{className:p("uppercase truncate",u.value),children:w("cardholderName",t.cardholderName,"CARDHOLDER NAME")}),e.jsx("div",{className:"w-2/3 h-px bg-gray-400 mt-1"})]}),e.jsxs("div",{className:"text-left mx-4 flex-shrink-0",children:[e.jsx("div",{className:p("text-gray-300 mb-1",u.label),children:"Exp. Date"}),e.jsx("div",{className:u.value,children:w("expiryDate",t.expiryDate,"MM/YY","numeric",5)}),e.jsx("div",{className:"w-full h-px bg-gray-400 mt-1"})]}),le&&e.jsxs("div",{className:"text-left flex-shrink-0",children:[e.jsx("div",{className:p("text-gray-300 mb-1",u.label),children:"CCV"}),e.jsx("div",{className:u.value,children:w("cvc",t.cvc,m.cvcLength===4?"••••":"•••","numeric",m.cvcLength)}),e.jsx("div",{className:"w-full h-px bg-gray-400 mt-1"})]})]})]}),e.jsx("div",{className:"absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/10 to-transparent rounded-full transform translate-x-8 -translate-y-8"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white/5 to-transparent rounded-full transform -translate-x-4 translate-y-4"})]})};s.displayName="CreditCardPreview";s.__docgenInfo={description:`CreditCardPreview molecule component.
An editable credit card visualization that matches real credit card design.
Users can click on fields to edit them directly on the card.`,methods:[],displayName:"CreditCardPreview",props:{cardNumber:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},cardholderName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},expiryDate:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},cvc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},cardType:{required:!1,tsType:{name:"union",raw:"CardType | null",elements:[{name:"union",raw:`| 'visa'
| 'mastercard'
| 'amex'
| 'discover'
| 'diners'
| 'jcb'
| 'unionpay'
| 'maestro'
| 'elo'
| 'mir'
| 'rupay'
| 'unknown'`,elements:[{name:"literal",value:"'visa'"},{name:"literal",value:"'mastercard'"},{name:"literal",value:"'amex'"},{name:"literal",value:"'discover'"},{name:"literal",value:"'diners'"},{name:"literal",value:"'jcb'"},{name:"literal",value:"'unionpay'"},{name:"literal",value:"'maestro'"},{name:"literal",value:"'elo'"},{name:"literal",value:"'mir'"},{name:"literal",value:"'rupay'"},{name:"literal",value:"'unknown'"}]},{name:"null"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:`(data: {
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvc?: string;
  cardType?: CardType | null;
}) => void`,signature:{arguments:[{type:{name:"signature",type:"object",raw:`{
  cardNumber?: string;
  cardholderName?: string;
  expiryDate?: string;
  cvc?: string;
  cardType?: CardType | null;
}`,signature:{properties:[{key:"cardNumber",value:{name:"string",required:!1}},{key:"cardholderName",value:{name:"string",required:!1}},{key:"expiryDate",value:{name:"string",required:!1}},{key:"cvc",value:{name:"string",required:!1}},{key:"cardType",value:{name:"union",raw:"CardType | null",elements:[{name:"union",raw:`| 'visa'
| 'mastercard'
| 'amex'
| 'discover'
| 'diners'
| 'jcb'
| 'unionpay'
| 'maestro'
| 'elo'
| 'mir'
| 'rupay'
| 'unknown'`,elements:[{name:"literal",value:"'visa'"},{name:"literal",value:"'mastercard'"},{name:"literal",value:"'amex'"},{name:"literal",value:"'discover'"},{name:"literal",value:"'diners'"},{name:"literal",value:"'jcb'"},{name:"literal",value:"'unionpay'"},{name:"literal",value:"'maestro'"},{name:"literal",value:"'elo'"},{name:"literal",value:"'mir'"},{name:"literal",value:"'rupay'"},{name:"literal",value:"'unknown'"}]},{name:"null"}],required:!1}}]}},name:"data"}],return:{name:"void"}}},description:""},editable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},showCvc:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const we={title:"Molecules/CreditCardPreview",component:s,parameters:{layout:"centered",docs:{description:{component:"An editable credit card preview component that supports all major international card networks with gradient styling. Detects card types automatically and formats input accordingly."}}},tags:["autodocs"],argTypes:{cardNumber:{control:"text",description:"The card number (formatted automatically)"},cardholderName:{control:"text",description:"The cardholder name (converts to uppercase)"},expiryDate:{control:"text",description:"Expiry date in MM/YY format"},cvc:{control:"text",description:"CVC security code (3 or 4 digits based on card type)"},cardType:{control:"select",options:["visa","mastercard","amex","discover","diners","jcb","unionpay","maestro","elo","mir","rupay",null],description:"Override auto-detected card type"},editable:{control:"boolean",description:"Whether fields can be edited by clicking"},showCvc:{control:"boolean",description:"Whether to show the CVC field"},size:{control:"select",options:["sm","md","lg"],description:"Card size"},onChange:{action:"card-changed"}}},c={visa:"4111 1111 1111 1111",mastercard:"5555 5555 5555 4444",amex:"3782 822463 10005",discover:"6011 1111 1111 1117",diners:"3056 930902 5904",jcb:"3530 1113 3330 0000",unionpay:"6200 0000 0000 0005",maestro:"5018 4500 0000 0000",elo:"4011 7812 3456 7890",mir:"2200 4500 0000 0000",rupay:"6521 4500 0000 0000"},D={args:{cardNumber:"",cardholderName:"",expiryDate:"",cvc:"",editable:!0,showCvc:!0,size:"md"}},j={args:{cardNumber:c.visa,cardholderName:"JOHN DOE",expiryDate:"12/25",cvc:"123",editable:!0,showCvc:!0,size:"md"}},k={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"VISA"}),e.jsx(s,{cardNumber:c.visa,cardholderName:"JOHN SMITH",expiryDate:"12/25",cvc:"123",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"MASTERCARD"}),e.jsx(s,{cardNumber:c.mastercard,cardholderName:"JANE DOE",expiryDate:"06/27",cvc:"456",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"AMERICAN EXPRESS"}),e.jsx(s,{cardNumber:c.amex,cardholderName:"ALEX JOHNSON",expiryDate:"03/26",cvc:"1234",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"DISCOVER"}),e.jsx(s,{cardNumber:c.discover,cardholderName:"SARAH WILSON",expiryDate:"09/28",cvc:"789",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"DINERS CLUB"}),e.jsx(s,{cardNumber:c.diners,cardholderName:"MIKE BROWN",expiryDate:"11/24",cvc:"321",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"JCB"}),e.jsx(s,{cardNumber:c.jcb,cardholderName:"YUKI TANAKA",expiryDate:"04/29",cvc:"567",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"UNIONPAY"}),e.jsx(s,{cardNumber:c.unionpay,cardholderName:"LI WEI",expiryDate:"07/26",cvc:"890",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"MAESTRO"}),e.jsx(s,{cardNumber:c.maestro,cardholderName:"ELENA ROSSI",expiryDate:"02/25",cvc:"234",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"ELO"}),e.jsx(s,{cardNumber:c.elo,cardholderName:"CARLOS SILVA",expiryDate:"08/27",cvc:"345",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"MIR"}),e.jsx(s,{cardNumber:c.mir,cardholderName:"IVAN PETROV",expiryDate:"10/26",cvc:"678",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"RUPAY"}),e.jsx(s,{cardNumber:c.rupay,cardholderName:"PRIYA SHARMA",expiryDate:"05/28",cvc:"901",editable:!1,size:"md"})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"All supported card networks with their unique gradient styling and formatting rules."}}}},A={args:{cardNumber:"4111 1111 1111 1111",cardholderName:"JOHN DOE",expiryDate:"12/25",cvc:"123",editable:!0,showCvc:!0,size:"md"},parameters:{docs:{description:{story:"Click on any field to edit it. The card type and styling will update automatically as you type."}}}},E={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 items-center p-6 max-w-2xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"Small (sm)"}),e.jsx(s,{cardNumber:c.visa,cardholderName:"SMALL CARD",expiryDate:"12/25",cvc:"123",editable:!1,size:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"Medium (md) - Default"}),e.jsx(s,{cardNumber:c.mastercard,cardholderName:"MEDIUM CARD",expiryDate:"06/27",cvc:"456",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"Large (lg)"}),e.jsx(s,{cardNumber:c.amex,cardholderName:"LARGE CARD",expiryDate:"03/26",cvc:"1234",editable:!1,size:"lg"})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"Different card sizes available."}}}};var J,Y,F;D.parameters={...D.parameters,docs:{...(J=D.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvc: '',
    editable: true,
    showCvc: true,
    size: 'md'
  }
}`,...(F=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:F.source}}};var B,K,W;j.parameters={...j.parameters,docs:{...(B=j.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    cardNumber: testCardNumbers.visa,
    cardholderName: 'JOHN DOE',
    expiryDate: '12/25',
    cvc: '123',
    editable: true,
    showCvc: true,
    size: 'md'
  }
}`,...(W=(K=j.parameters)==null?void 0:K.docs)==null?void 0:W.source}}};var X,_,$;k.parameters={...k.parameters,docs:{...(X=k.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto">
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          VISA
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.visa} cardholderName="JOHN SMITH" expiryDate="12/25" cvc="123" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          MASTERCARD
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.mastercard} cardholderName="JANE DOE" expiryDate="06/27" cvc="456" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          AMERICAN EXPRESS
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.amex} cardholderName="ALEX JOHNSON" expiryDate="03/26" cvc="1234" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          DISCOVER
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.discover} cardholderName="SARAH WILSON" expiryDate="09/28" cvc="789" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          DINERS CLUB
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.diners} cardholderName="MIKE BROWN" expiryDate="11/24" cvc="321" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          JCB
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.jcb} cardholderName="YUKI TANAKA" expiryDate="04/29" cvc="567" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          UNIONPAY
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.unionpay} cardholderName="LI WEI" expiryDate="07/26" cvc="890" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          MAESTRO
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.maestro} cardholderName="ELENA ROSSI" expiryDate="02/25" cvc="234" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          ELO
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.elo} cardholderName="CARLOS SILVA" expiryDate="08/27" cvc="345" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          MIR
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.mir} cardholderName="IVAN PETROV" expiryDate="10/26" cvc="678" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          RUPAY
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.rupay} cardholderName="PRIYA SHARMA" expiryDate="05/28" cvc="901" editable={false} size="md" />
      </div>
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'All supported card networks with their unique gradient styling and formatting rules.'
      }
    }
  }
}`,...($=(_=k.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var G,Z,Q;A.parameters={...A.parameters,docs:{...(G=A.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    cardNumber: '4111 1111 1111 1111',
    cardholderName: 'JOHN DOE',
    expiryDate: '12/25',
    cvc: '123',
    editable: true,
    showCvc: true,
    size: 'md'
  },
  parameters: {
    docs: {
      description: {
        story: 'Click on any field to edit it. The card type and styling will update automatically as you type.'
      }
    }
  }
}`,...(Q=(Z=A.parameters)==null?void 0:Z.docs)==null?void 0:Q.source}}};var ee,ae,re;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8 items-center p-6 max-w-2xl mx-auto">
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Small (sm)
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.visa} cardholderName="SMALL CARD" expiryDate="12/25" cvc="123" editable={false} size="sm" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Medium (md) - Default
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.mastercard} cardholderName="MEDIUM CARD" expiryDate="06/27" cvc="456" editable={false} size="md" />
      </div>

      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
          Large (lg)
        </h3>
        <CreditCardPreview cardNumber={testCardNumbers.amex} cardholderName="LARGE CARD" expiryDate="03/26" cvc="1234" editable={false} size="lg" />
      </div>
    </div>,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'Different card sizes available.'
      }
    }
  }
}`,...(re=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:re.source}}};const De=["Default","FilledExample","AllCardNetworks","EditableCard","DifferentSizes"];export{k as AllCardNetworks,D as Default,E as DifferentSizes,A as EditableCard,j as FilledExample,De as __namedExportsOrder,we as default};
