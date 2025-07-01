import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as x}from"./iframe-DoDsO8uN.js";import{C as r}from"./CreditCardPreview-BB6dFiUn.js";import"./clsx-B-dksMZM.js";import"./classes-CnWFQedi.js";const T={title:"Molecules/CreditCardPreview",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{cardNumber:{control:"text",description:"The card number (formatted automatically)"},cardholderName:{control:"text",description:"The cardholder name (converts to uppercase)"},expiryDate:{control:"text",description:"Expiry date in MM/YY format"},cvc:{control:"text",description:"CVC security code (3 or 4 digits based on card type)"},cardType:{control:"select",options:["visa","mastercard","amex","discover","diners","jcb","unionpay","maestro","elo","mir","rupay",null],description:"Override auto-detected card type"},editable:{control:"boolean",description:"Whether fields can be edited by clicking"},showCvc:{control:"boolean",description:"Whether to show the CVC field"},size:{control:"select",options:["sm","md","lg"],description:"Card size"},onChange:{action:"card-changed"}}},a={visa:"4111 1111 1111 1111",mastercard:"5555 5555 5555 4444",amex:"3782 822463 10005",discover:"6011 1111 1111 1117",diners:"3056 930902 5904",jcb:"3530 1113 3330 0000",unionpay:"6200 0000 0000 0005",maestro:"5018 4500 0000 0000",elo:"4011 7812 3456 7890",mir:"2200 4500 0000 0000",rupay:"6521 4500 0000 0000"},d={args:{cardNumber:"",cardholderName:"",expiryDate:"",cvc:"",editable:!0,showCvc:!0,size:"md"}},i={args:{cardNumber:a.visa,cardholderName:"JOHN DOE",expiryDate:"12/25",cvc:"123",editable:!0,showCvc:!0,size:"md"}},l={render:()=>e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-6 max-w-7xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"VISA"}),e.jsx(r,{cardNumber:a.visa,cardholderName:"JOHN SMITH",expiryDate:"12/25",cvc:"123",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"MASTERCARD"}),e.jsx(r,{cardNumber:a.mastercard,cardholderName:"JANE DOE",expiryDate:"06/27",cvc:"456",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"AMERICAN EXPRESS"}),e.jsx(r,{cardNumber:a.amex,cardholderName:"ALEX JOHNSON",expiryDate:"03/26",cvc:"1234",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"DISCOVER"}),e.jsx(r,{cardNumber:a.discover,cardholderName:"SARAH WILSON",expiryDate:"09/28",cvc:"789",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"DINERS CLUB"}),e.jsx(r,{cardNumber:a.diners,cardholderName:"MIKE BROWN",expiryDate:"11/24",cvc:"321",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"JCB"}),e.jsx(r,{cardNumber:a.jcb,cardholderName:"YUKI TANAKA",expiryDate:"04/29",cvc:"567",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"UNIONPAY"}),e.jsx(r,{cardNumber:a.unionpay,cardholderName:"LI WEI",expiryDate:"07/26",cvc:"890",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"MAESTRO"}),e.jsx(r,{cardNumber:a.maestro,cardholderName:"ELENA ROSSI",expiryDate:"02/25",cvc:"234",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"ELO"}),e.jsx(r,{cardNumber:a.elo,cardholderName:"CARLOS SILVA",expiryDate:"08/27",cvc:"345",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"MIR"}),e.jsx(r,{cardNumber:a.mir,cardholderName:"IVAN PETROV",expiryDate:"10/26",cvc:"678",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"RUPAY"}),e.jsx(r,{cardNumber:a.rupay,cardholderName:"PRIYA SHARMA",expiryDate:"05/28",cvc:"901",editable:!1,size:"md"})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"All supported card networks with their unique gradient styling and formatting rules."}}}},m={render:()=>{const s=[{type:"VISA",cardNumber:a.visa,name:"JOHN SMITH",expiry:"12/25",cvc:"123"},{type:"MASTERCARD",cardNumber:a.mastercard,name:"JANE DOE",expiry:"06/27",cvc:"456"},{type:"AMERICAN EXPRESS",cardNumber:a.amex,name:"ALEX JOHNSON",expiry:"03/26",cvc:"1234"},{type:"DISCOVER",cardNumber:a.discover,name:"SARAH WILSON",expiry:"09/28",cvc:"789"},{type:"DINERS CLUB",cardNumber:a.diners,name:"MIKE BROWN",expiry:"11/24",cvc:"321"},{type:"JCB",cardNumber:a.jcb,name:"YUKI TANAKA",expiry:"04/29",cvc:"567"},{type:"UNIONPAY",cardNumber:a.unionpay,name:"LI WEI",expiry:"07/26",cvc:"890"},{type:"MAESTRO",cardNumber:a.maestro,name:"ELENA ROSSI",expiry:"02/25",cvc:"234"},{type:"ELO",cardNumber:a.elo,name:"CARLOS SILVA",expiry:"08/27",cvc:"345"},{type:"MIR",cardNumber:a.mir,name:"IVAN PETROV",expiry:"10/26",cvc:"678"},{type:"RUPAY",cardNumber:a.rupay,name:"PRIYA SHARMA",expiry:"05/28",cvc:"901"}],[o,j]=x.useState(0),[O,p]=x.useState(!1);x.useEffect(()=>{const N=setInterval(()=>{p(!0),setTimeout(()=>{j(c=>(c+1)%s.length),p(!1)},200)},2500);return()=>clearInterval(N)},[s.length]);const t=s[o];return e.jsxs("div",{className:"flex flex-col items-center space-y-6 p-8 max-w-lg mx-auto",children:[e.jsxs("div",{className:"text-center space-y-2",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900",children:"Auto-Cycling Card Demo"}),e.jsxs("p",{className:"text-gray-600",children:["Showcasing all ",s.length," supported card networks"]})]}),e.jsxs("div",{className:"flex items-center space-x-4 text-sm text-gray-500",children:[e.jsx("span",{children:"Currently showing:"}),e.jsx("div",{className:"bg-blue-100 px-3 py-1 rounded-full",children:e.jsx("span",{className:"font-semibold text-blue-800",children:t.type})}),e.jsxs("span",{children:["(",o+1,"/",s.length,")"]})]}),e.jsx("div",{className:`transition-all duration-200 ${O?"opacity-50 scale-95":"opacity-100 scale-100"}`,children:e.jsx(r,{cardNumber:t.cardNumber,cardholderName:t.name,expiryDate:t.expiry,cvc:t.cvc,editable:!1,size:"lg",className:"shadow-xl"})}),e.jsx("div",{className:"flex space-x-1",children:s.map((N,c)=>e.jsx("div",{className:`w-2 h-2 rounded-full transition-colors duration-200 ${c===o?"bg-blue-500":"bg-gray-300"}`},c))}),e.jsx("div",{className:"text-center text-xs text-gray-500 max-w-md",children:e.jsx("p",{children:"Cards automatically cycle every 2.5 seconds. Each card shows the correct formatting, CVC length, and network-specific styling patterns."})})]})},parameters:{layout:"fullscreen",docs:{description:{story:"An interactive demonstration that automatically cycles through all 11 supported card networks, showcasing real-time card type detection, formatting, and network-specific styling."}}}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-8 items-center p-6 max-w-2xl mx-auto",children:[e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"Small (sm)"}),e.jsx(r,{cardNumber:a.visa,cardholderName:"SMALL CARD",expiryDate:"12/25",cvc:"123",editable:!1,size:"sm"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"Medium (md) - Default"}),e.jsx(r,{cardNumber:a.mastercard,cardholderName:"MEDIUM CARD",expiryDate:"06/27",cvc:"456",editable:!1,size:"md"})]}),e.jsxs("div",{className:"flex flex-col items-center space-y-3",children:[e.jsx("h3",{className:"text-sm font-semibold text-gray-800 uppercase tracking-wide",children:"Large (lg)"}),e.jsx(r,{cardNumber:a.amex,cardholderName:"LARGE CARD",expiryDate:"03/26",cvc:"1234",editable:!1,size:"lg"})]})]}),parameters:{layout:"fullscreen",docs:{description:{story:"Different card sizes available."}}}};var u,y,v;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvc: '',
    editable: true,
    showCvc: true,
    size: 'md'
  }
}`,...(v=(y=d.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var b,f,h;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    cardNumber: testCardNumbers.visa,
    cardholderName: 'JOHN DOE',
    expiryDate: '12/25',
    cvc: '123',
    editable: true,
    showCvc: true,
    size: 'md'
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var g,C,A;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var w,I,D;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const cardData = [{
      type: 'VISA',
      cardNumber: testCardNumbers.visa,
      name: 'JOHN SMITH',
      expiry: '12/25',
      cvc: '123'
    }, {
      type: 'MASTERCARD',
      cardNumber: testCardNumbers.mastercard,
      name: 'JANE DOE',
      expiry: '06/27',
      cvc: '456'
    }, {
      type: 'AMERICAN EXPRESS',
      cardNumber: testCardNumbers.amex,
      name: 'ALEX JOHNSON',
      expiry: '03/26',
      cvc: '1234'
    }, {
      type: 'DISCOVER',
      cardNumber: testCardNumbers.discover,
      name: 'SARAH WILSON',
      expiry: '09/28',
      cvc: '789'
    }, {
      type: 'DINERS CLUB',
      cardNumber: testCardNumbers.diners,
      name: 'MIKE BROWN',
      expiry: '11/24',
      cvc: '321'
    }, {
      type: 'JCB',
      cardNumber: testCardNumbers.jcb,
      name: 'YUKI TANAKA',
      expiry: '04/29',
      cvc: '567'
    }, {
      type: 'UNIONPAY',
      cardNumber: testCardNumbers.unionpay,
      name: 'LI WEI',
      expiry: '07/26',
      cvc: '890'
    }, {
      type: 'MAESTRO',
      cardNumber: testCardNumbers.maestro,
      name: 'ELENA ROSSI',
      expiry: '02/25',
      cvc: '234'
    }, {
      type: 'ELO',
      cardNumber: testCardNumbers.elo,
      name: 'CARLOS SILVA',
      expiry: '08/27',
      cvc: '345'
    }, {
      type: 'MIR',
      cardNumber: testCardNumbers.mir,
      name: 'IVAN PETROV',
      expiry: '10/26',
      cvc: '678'
    }, {
      type: 'RUPAY',
      cardNumber: testCardNumbers.rupay,
      name: 'PRIYA SHARMA',
      expiry: '05/28',
      cvc: '901'
    }];
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    useEffect(() => {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setCurrentIndex(prev => (prev + 1) % cardData.length);
          setIsAnimating(false);
        }, 200);
      }, 2500);
      return () => clearInterval(interval);
    }, [cardData.length]);
    const currentCard = cardData[currentIndex];
    return <div className="flex flex-col items-center space-y-6 p-8 max-w-lg mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-gray-900">
            Auto-Cycling Card Demo
          </h2>
          <p className="text-gray-600">
            Showcasing all {cardData.length} supported card networks
          </p>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>Currently showing:</span>
          <div className="bg-blue-100 px-3 py-1 rounded-full">
            <span className="font-semibold text-blue-800">
              {currentCard.type}
            </span>
          </div>
          <span>
            ({currentIndex + 1}/{cardData.length})
          </span>
        </div>

        <div className={\`transition-all duration-200 \${isAnimating ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}\`}>
          <CreditCardPreview cardNumber={currentCard.cardNumber} cardholderName={currentCard.name} expiryDate={currentCard.expiry} cvc={currentCard.cvc} editable={false} size="lg" className="shadow-xl" />
        </div>

        <div className="flex space-x-1">
          {cardData.map((_, index) => <div key={index} className={\`w-2 h-2 rounded-full transition-colors duration-200 \${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}\`} />)}
        </div>

        <div className="text-center text-xs text-gray-500 max-w-md">
          <p>
            Cards automatically cycle every 2.5 seconds. Each card shows the
            correct formatting, CVC length, and network-specific styling
            patterns.
          </p>
        </div>
      </div>;
  },
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        story: 'An interactive demonstration that automatically cycles through all 11 supported card networks, showcasing real-time card type detection, formatting, and network-specific styling.'
      }
    }
  }
}`,...(D=(I=m.parameters)==null?void 0:I.docs)==null?void 0:D.source}}};var S,E,R;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(E=n.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};const V=["Default","FilledExample","AllCardNetworks","AutoCyclingDemo","DifferentSizes"];export{l as AllCardNetworks,m as AutoCyclingDemo,d as Default,n as DifferentSizes,i as FilledExample,V as __namedExportsOrder,T as default};
