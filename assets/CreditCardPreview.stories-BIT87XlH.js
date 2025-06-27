import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{C as a}from"./CreditCardPreview-D6fc99qp.js";import"./iframe-CvNxPCzt.js";import"./clsx-B-dksMZM.js";import"./size-DhI2ozjY.js";const D={title:"Molecules/CreditCardPreview",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{cardNumber:{control:"text",description:"The card number (formatted automatically)"},cardholderName:{control:"text",description:"The cardholder name (converts to uppercase)"},expiryDate:{control:"text",description:"Expiry date in MM/YY format"},cvc:{control:"text",description:"CVC security code (3 or 4 digits based on card type)"},cardType:{control:"select",options:["visa","mastercard","amex","discover","diners","jcb","unionpay","maestro","elo","mir","rupay",null],description:"Override auto-detected card type"},editable:{control:"boolean",description:"Whether fields can be edited by clicking"},showCvc:{control:"boolean",description:"Whether to show the CVC field"},size:{control:"select",options:["sm","md","lg"],description:"Card size"},onChange:{action:"card-changed"}}},r={visa:"4111 1111 1111 1111",mastercard:"5555 5555 5555 4444",amex:"3782 822463 10005",discover:"6011 1111 1111 1117",diners:"3056 930902 5904",jcb:"3530 1113 3330 0000",unionpay:"6200 0000 0000 0005",maestro:"5018 4500 0000 0000",elo:"4011 7812 3456 7890",mir:"2200 4500 0000 0000",rupay:"6521 4500 0000 0000"},s={args:{cardNumber:"",cardholderName:"",expiryDate:"",cvc:"",editable:!0,showCvc:!0,size:"md"}},t={args:{cardNumber:r.visa,cardholderName:"JOHN DOE",expiryDate:"12/25",cvc:"123",editable:!0,showCvc:!0,size:"md"}},c={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"VISA"}),e.jsx(a,{cardNumber:r.visa,cardholderName:"JOHN SMITH",expiryDate:"12/25",cvc:"123",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"MASTERCARD"}),e.jsx(a,{cardNumber:r.mastercard,cardholderName:"JANE DOE",expiryDate:"06/27",cvc:"456",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"AMERICAN EXPRESS"}),e.jsx(a,{cardNumber:r.amex,cardholderName:"ALEX JOHNSON",expiryDate:"03/26",cvc:"1234",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"DISCOVER"}),e.jsx(a,{cardNumber:r.discover,cardholderName:"SARAH WILSON",expiryDate:"09/28",cvc:"789",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"DINERS CLUB"}),e.jsx(a,{cardNumber:r.diners,cardholderName:"MIKE BROWN",expiryDate:"11/24",cvc:"321",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"JCB"}),e.jsx(a,{cardNumber:r.jcb,cardholderName:"YUKI TANAKA",expiryDate:"04/29",cvc:"567",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"UNIONPAY"}),e.jsx(a,{cardNumber:r.unionpay,cardholderName:"LI WEI",expiryDate:"07/26",cvc:"890",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"MAESTRO"}),e.jsx(a,{cardNumber:r.maestro,cardholderName:"ELENA ROSSI",expiryDate:"02/25",cvc:"234",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"ELO"}),e.jsx(a,{cardNumber:r.elo,cardholderName:"CARLOS SILVA",expiryDate:"08/27",cvc:"345",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"MIR"}),e.jsx(a,{cardNumber:r.mir,cardholderName:"IVAN PETROV",expiryDate:"10/26",cvc:"678",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"RUPAY"}),e.jsx(a,{cardNumber:r.rupay,cardholderName:"PRIYA SHARMA",expiryDate:"05/28",cvc:"901",editable:!1,size:"md"})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"All supported card networks with their unique gradient styling and formatting rules."}}}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 items-center p-6 max-w-2xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"Small (sm)"}),e.jsx(a,{cardNumber:r.visa,cardholderName:"SMALL CARD",expiryDate:"12/25",cvc:"123",editable:!1,size:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"Medium (md) - Default"}),e.jsx(a,{cardNumber:r.mastercard,cardholderName:"MEDIUM CARD",expiryDate:"06/27",cvc:"456",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"Large (lg)"}),e.jsx(a,{cardNumber:r.amex,cardholderName:"LARGE CARD",expiryDate:"03/26",cvc:"1234",editable:!1,size:"lg"})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"Different card sizes available."}}}};var i,l,m;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvc: '',
    editable: true,
    showCvc: true,
    size: 'md'
  }
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var o,n,x;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    cardNumber: testCardNumbers.visa,
    cardholderName: 'JOHN DOE',
    expiryDate: '12/25',
    cvc: '123',
    editable: true,
    showCvc: true,
    size: 'md'
  }
}`,...(x=(n=t.parameters)==null?void 0:n.docs)==null?void 0:x.source}}};var p,N,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(N=c.parameters)==null?void 0:N.docs)==null?void 0:u.source}}};var f,h,b;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(b=(h=d.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const A=["Default","FilledExample","AllCardNetworks","DifferentSizes"];export{c as AllCardNetworks,s as Default,d as DifferentSizes,t as FilledExample,A as __namedExportsOrder,D as default};
