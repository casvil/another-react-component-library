import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as C}from"./iframe-DoDsO8uN.js";import{F as m,a}from"./Form-8NNP7ltw.js";import{B as F}from"./Button-DJzPNsD_.js";import{B as S}from"./Badge-Dccq6mCt.js";import{D as d}from"./Divider-fd4QaF25.js";import{U as ie}from"./UserPreview-D9Y7434m.js";import{T as ne}from"./TextArea-Cr7aqqhr.js";import{S as u}from"./Switch-DrZPb2po.js";import{F as le}from"./FormField-3DjZjf0y.js";import{S as me}from"./Select-B1Fij871.js";import{R as oe}from"./RadioGroup-OAEnO6l4.js";import{C as ce}from"./CheckboxGroup-DE5SxYwJ.js";import{M as c}from"./mail-DY9FOLZd.js";import{L as j}from"./lock-BFqLU0kO.js";import{U as r}from"./user-DkH31Bne.js";import{c as P}from"./createLucideIcon-CHihJJUA.js";import"./clsx-B-dksMZM.js";import"./ErrorMessage-B1DJFAfK.js";import"./classes-CnWFQedi.js";import"./Avatar-ak_Z0AEe.js";import"./Username-D7cJa5_j.js";import"./StatusIndicator-C2lMiHZc.js";import"./Label-DAveljUB.js";import"./useStableId-CJULI6mG.js";import"./Input-C0VR9rrc.js";import"./Tooltip-DiDN8r2X.js";import"./Radio-BT8JGKtN.js";import"./Checkbox-2o1_tAJ8.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["path",{d:"M10.268 21a2 2 0 0 0 3.464 0",key:"vwvbt9"}],["path",{d:"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326",key:"11g9vi"}]],D=P("bell",de);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ue=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],T=P("map-pin",ue);/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pe=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],q=P("phone",pe),$e={title:"Molecules/Form",component:m,parameters:{layout:"centered",actions:{handles:["onSubmit","onValidate","onFieldChange","onFieldBlur"]}},tags:["autodocs"],argTypes:{layout:{control:"select",options:["vertical","horizontal","grid"]},spacing:{control:"select",options:["sm","md","lg"]},gridColumns:{control:{type:"number",min:1,max:4}},onSubmit:{action:"form-submitted"},onValidate:{action:"form-validated"},onFieldChange:{action:"field-changed"},onFieldBlur:{action:"field-blurred"},validateOnChange:{control:"boolean",description:"Validate fields as the user types"},validateOnBlur:{control:"boolean",description:"Validate fields when they lose focus"},validateOnSubmit:{control:"boolean",description:"Validate the entire form before submission"},resetOnSubmit:{control:"boolean",description:"Reset the form after successful submission"},disabled:{control:"boolean",description:"Disable the entire form"},className:{control:"text",description:"Additional CSS classes for the form"}}},p={args:{onSubmit:()=>{}},render:()=>{const t=async o=>{alert(`Form submitted! Check console for detailed logs.

Data: ${JSON.stringify(o,null,2)}`)};return e.jsx("div",{className:"w-96",children:e.jsxs(m,{onSubmit:t,children:[e.jsx(a,{name:"email",label:"Email Address",type:"email",icon:c,placeholder:"Enter your email",tooltip:"We'll never share your email with anyone",required:!0}),e.jsx(a,{name:"password",label:"Password",type:"password",icon:j,placeholder:"Enter your password",tooltip:"Must be at least 8 characters",required:!0,validate:o=>{if(o&&o.length<8)return"Password must be at least 8 characters"}})]})})}},h={args:{onSubmit:()=>{},onValidate:()=>{}},render:t=>{const o=async l=>{const s={};return t.onValidate(l),l.email==="taken@example.com"&&(s.email="This email is already taken"),l.password!==l.confirmPassword&&(s.confirmPassword="Passwords do not match"),s},i=async(l,s)=>{try{t.onSubmit(l,s),await new Promise(n=>setTimeout(n,2e3)),console.log("Registration successful:",l),alert("Registration successful!"),s.reset()}catch{s.setErrors({form:"Registration failed. Please try again."})}};return e.jsx("div",{className:"w-96",children:e.jsxs(m,{onSubmit:i,onValidate:o,validateOnBlur:!0,submitText:"Register",loadingText:"Creating account...",children:[e.jsx(a,{name:"firstName",label:"First Name",icon:r,placeholder:"John",required:!0}),e.jsx(a,{name:"lastName",label:"Last Name",icon:r,placeholder:"Doe",required:!0}),e.jsx(a,{name:"email",label:"Email Address",type:"email",icon:c,placeholder:"john@example.com",tooltip:"Try 'taken@example.com' to see validation error",required:!0}),e.jsx(a,{name:"password",label:"Password",type:"password",icon:j,placeholder:"••••••••",tooltip:"Must be at least 8 characters with numbers",required:!0,validate:l=>{if(l){if(l.length<8)return"Password must be at least 8 characters";if(!/\d/.test(l))return"Password must contain at least one number"}}}),e.jsx(a,{name:"confirmPassword",label:"Confirm Password",type:"password",icon:j,placeholder:"••••••••",tooltip:"Must match your password",required:!0})]})})}},b={render:()=>{const t=async o=>{console.log("Contact form submitted:",o),alert("Message sent successfully!")};return e.jsx("div",{className:"w-full max-w-2xl",children:e.jsxs(m,{onSubmit:t,layout:"grid",gridColumns:2,spacing:"lg",submitText:"Send Message",children:[e.jsx(a,{name:"firstName",label:"First Name",icon:r,placeholder:"John",required:!0}),e.jsx(a,{name:"lastName",label:"Last Name",icon:r,placeholder:"Doe",required:!0}),e.jsx(a,{name:"email",label:"Email",type:"email",icon:c,placeholder:"john@example.com",tooltip:"We'll respond to this email",required:!0}),e.jsx(a,{name:"phone",label:"Phone",type:"tel",icon:q,placeholder:"+1 (555) 123-4567",tooltip:"Optional: For urgent matters"}),e.jsx("div",{className:"col-span-2",children:e.jsx(le,{label:"Message",name:"message",tooltip:"Tell us how we can help you",placeholder:"Your message here...",required:!0})})]})})}},g={render:()=>{const t=async o=>{console.log("Search submitted:",o)};return e.jsx("div",{className:"w-full",children:e.jsxs(m,{onSubmit:t,layout:"horizontal",spacing:"sm",submitText:"Search",children:[e.jsx(a,{name:"query",label:"Search",placeholder:"Enter search terms...",tooltip:"Search across all products",className:"min-w-64"}),e.jsx(a,{name:"category",label:"Category",placeholder:"All categories",tooltip:"Filter by category",className:"min-w-40"})]})})}},f={render:()=>{const[t,o]=C.useState({username:"john_doe",email:"john@example.com"}),i=async s=>{o(s),console.log("Updated data:",s)},l=(s,n)=>{console.log(`Field ${s} changed to:`,n)};return e.jsxs("div",{className:"w-96 space-y-4",children:[e.jsxs("div",{className:"p-4 bg-gray-50 rounded-lg",children:[e.jsx("h3",{className:"font-semibold mb-2",children:"Current Form Data:"}),e.jsx("pre",{className:"text-sm text-gray-600",children:JSON.stringify(t,null,2)})]}),e.jsxs(m,{onSubmit:i,initialValues:t,onFieldChange:l,validateOnChange:!0,submitText:"Update Profile",children:[e.jsx(a,{name:"username",label:"Username",icon:r,placeholder:"Enter username",tooltip:"Must be unique and 3+ characters",required:!0,validate:s=>{if(s){if(s.length<3)return"Username must be at least 3 characters";if(!/^[a-zA-Z0-9_]+$/.test(s))return"Username can only contain letters, numbers, and underscores"}}}),e.jsx(a,{name:"email",label:"Email",type:"email",icon:c,placeholder:"Enter email",tooltip:"We'll send notifications here",required:!0}),e.jsx(a,{name:"bio",label:"Bio",placeholder:"Tell us about yourself...",tooltip:"Optional: Share a bit about yourself"})]})]})}},v={render:()=>{const[t,o]=C.useState(!1),i=async l=>{o(!0),await new Promise(s=>setTimeout(s,2e3)),o(!1),console.log("Custom submit:",l),alert("Custom submission complete!")};return e.jsx("div",{className:"w-96",children:e.jsxs(m,{onSubmit:i,isSubmitting:t,showSubmitButton:!1,children:[e.jsx(a,{name:"title",label:"Post Title",placeholder:"Enter title",required:!0}),e.jsx(a,{name:"content",label:"Content",placeholder:"Write your post...",required:!0}),e.jsxs("div",{className:"flex gap-2 pt-2",children:[e.jsx(F,{type:"submit",label:t?"Publishing...":"Publish Post",disabled:t,variant:"primary"}),e.jsx(F,{type:"button",label:"Save Draft",variant:"secondary",onClick:()=>console.log("Save draft")})]})]})})}},x={args:{onSubmit:()=>{}},render:()=>{const t=async s=>{alert(`Form submitted! Check console for detailed logs.

Data: ${JSON.stringify(s,null,2)}`)},o=[{value:"us",label:"United States"},{value:"ca",label:"Canada"},{value:"uk",label:"United Kingdom"},{value:"de",label:"Germany"},{value:"fr",label:"France"}],i=[{value:"reading",label:"Reading"},{value:"gaming",label:"Gaming"},{value:"cooking",label:"Cooking"},{value:"sports",label:"Sports"},{value:"music",label:"Music"}],l=[{value:"personal",label:"Personal Account",description:"For individual use"},{value:"business",label:"Business Account",description:"For teams and organizations"},{value:"enterprise",label:"Enterprise Account",description:"For large organizations"}];return e.jsxs("div",{className:"max-w-4xl mx-auto p-6",children:[e.jsxs("div",{className:"mb-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-2",children:"User Registration Form"}),e.jsx("p",{className:"text-gray-600",children:"This showcases Form molecule orchestrating atoms and molecules from our library"}),e.jsx(S,{intent:"warning",className:"mt-2",children:"Molecule Component"})]}),e.jsxs(m,{onSubmit:t,layout:"grid",gridColumns:2,spacing:"lg",submitText:"Create Account",loadingText:"Creating account...",children:[e.jsx("div",{className:"col-span-2",children:e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2",children:[e.jsx(r,{className:"w-5 h-5"}),"Personal Information"]})}),e.jsx(a,{name:"firstName",label:"First Name",icon:r,placeholder:"John",tooltip:"Your given name",required:!0}),e.jsx(a,{name:"lastName",label:"Last Name",icon:r,placeholder:"Doe",tooltip:"Your family name",required:!0}),e.jsx(a,{name:"email",label:"Email Address",type:"email",icon:c,placeholder:"john@example.com",tooltip:"We'll use this for login and notifications",required:!0}),e.jsx(a,{name:"phone",label:"Phone Number",type:"tel",icon:q,placeholder:"+1 (555) 123-4567",tooltip:"For account verification and support"}),e.jsxs("div",{className:"col-span-2 mt-6",children:[e.jsx(d,{}),e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 my-4 flex items-center gap-2",children:[e.jsx(T,{className:"w-5 h-5"}),"Address Information"]})]}),e.jsx("div",{className:"col-span-2",children:e.jsx(a,{name:"address",label:"Street Address",icon:T,placeholder:"123 Main Street",tooltip:"Your full street address",required:!0})}),e.jsx(a,{name:"city",label:"City",placeholder:"New York",required:!0}),e.jsx(me,{name:"country",label:"Country",placeholder:"Select country",options:o,required:!0}),e.jsxs("div",{className:"col-span-2 mt-6",children:[e.jsx(d,{}),e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 my-4 flex items-center gap-2",children:[e.jsx(D,{className:"w-5 h-5"}),"Account Preferences"]})]}),e.jsx("div",{className:"col-span-2",children:e.jsx(oe,{name:"accountType",label:"Account Type",options:l,required:!0})}),e.jsx("div",{className:"col-span-2",children:e.jsx(ce,{name:"hobbies",label:"Interests & Hobbies",description:"Select all that apply (optional)",options:i})}),e.jsx("div",{className:"col-span-2",children:e.jsx(ne,{name:"bio",label:"Bio",placeholder:"Tell us a bit about yourself...",rows:3,tooltip:"Optional: Share your background or interests"})}),e.jsxs("div",{className:"col-span-2 mt-6",children:[e.jsx(d,{}),e.jsxs("h3",{className:"text-lg font-semibold text-gray-900 my-4 flex items-center gap-2",children:[e.jsx(D,{className:"w-5 h-5"}),"Notification Settings"]})]}),e.jsxs("div",{className:"col-span-2 space-y-4",children:[e.jsx(u,{name:"emailNotifications",label:"Email Notifications",description:"Receive updates and news via email",defaultChecked:!0}),e.jsx(u,{name:"smsNotifications",label:"SMS Notifications",description:"Receive important alerts via SMS"}),e.jsx(u,{name:"marketingEmails",label:"Marketing Communications",description:"Receive product updates and special offers"})]}),e.jsxs("div",{className:"col-span-2 mt-6",children:[e.jsx(d,{}),e.jsx("div",{className:"pt-4",children:e.jsx(u,{name:"agreeToTerms",label:"I agree to the Terms of Service and Privacy Policy",description:"Required to create an account",required:!0})})]})]})]})}},y={args:{onSubmit:()=>{}},render:()=>{var s;const[t,o]=C.useState({firstName:"John",lastName:"Doe",email:"john@example.com",status:"online"}),i=async n=>{o(w=>({...w,...n})),console.log("Profile updated:",n)},l=(n,w)=>{o(re=>({...re,[n]:w}))};return e.jsxs("div",{className:"max-w-2xl mx-auto p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Profile Editor"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[e.jsxs("div",{className:"bg-gray-50 p-6 rounded-lg",children:[e.jsx("h3",{className:"text-lg font-semibold mb-4",children:"Live Preview"}),e.jsx(ie,{avatarSrc:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",name:`${t.firstName} ${t.lastName}`.trim(),username:((s=t.email)==null?void 0:s.split("@")[0])||"username",status:t.status,size:"lg",layout:"vertical",className:"justify-center"}),e.jsxs("div",{className:"mt-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center",children:[e.jsx(S,{intent:"info",size:"sm",className:"w-14 justify-center",children:"Name"}),e.jsx("span",{className:"text-sm ml-3 flex-1",children:`${t.firstName} ${t.lastName}`.trim()||"Not set"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(S,{intent:"warning",size:"sm",className:"w-14 justify-center",children:"Email"}),e.jsx("span",{className:"text-sm ml-3 flex-1",children:t.email||"Not set"})]}),e.jsxs("div",{className:"flex items-center",children:[e.jsx(S,{intent:"success",size:"sm",className:"w-14 justify-center",children:"Status"}),e.jsx("span",{className:"text-sm ml-3 flex-1 capitalize",children:t.status})]})]})]}),e.jsx("div",{children:e.jsxs(m,{onSubmit:i,onFieldChange:l,initialValues:t,validateOnChange:!0,submitText:"Update Profile",spacing:"md",children:[e.jsx(a,{name:"firstName",label:"First Name",icon:r,placeholder:"John",required:!0}),e.jsx(a,{name:"lastName",label:"Last Name",icon:r,placeholder:"Doe",required:!0}),e.jsx(a,{name:"email",label:"Email",type:"email",icon:c,placeholder:"john@example.com",required:!0}),e.jsx(oe,{name:"status",label:"Status",options:[{value:"online",label:"Online"},{value:"offline",label:"Offline"},{value:"away",label:"Away"},{value:"busy",label:"Busy"}],required:!0})]})})]})]})}},N={args:{onSubmit:()=>{},onFieldChange:()=>{}},render:t=>{const o=async(l,s)=>{t.onSubmit(l,s),console.log("Contact form submitted:",l),alert(`Message sent from ${l.firstName} ${l.lastName}!`)},i=(l,s,n)=>{t.onFieldChange({fieldName:l,fieldValue:s,formValues:n})};return e.jsxs("div",{className:"max-w-2xl mx-auto p-6",children:[e.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Contact Us (with Actions Logging)"}),e.jsxs(m,{onSubmit:o,onFieldChange:i,layout:"grid",gridColumns:2,spacing:"lg",showSubmitButton:!1,children:[e.jsx(a,{name:"firstName",label:"First Name",icon:r,placeholder:"John",tooltip:"Your given name",required:!0}),e.jsx(a,{name:"lastName",label:"Last Name",icon:r,placeholder:"Doe",tooltip:"Your family name",required:!0}),e.jsx(a,{name:"email",label:"Email",icon:c,type:"email",placeholder:"john@example.com",tooltip:"We'll respond to this email",required:!0}),e.jsx(a,{name:"phone",label:"Phone",icon:q,type:"tel",placeholder:"+1 (555) 123-4567",tooltip:"Optional: For urgent matters"}),e.jsx("div",{className:"col-span-2",children:e.jsx(le,{label:"Message",name:"message",tooltip:"Tell us how we can help you",placeholder:"Your message here...",required:!0})}),e.jsx("div",{className:"col-span-2 flex justify-end",children:e.jsx(F,{type:"submit",label:"Send Message",variant:"primary",size:"md",className:"px-8"})})]})]})}};var M,I,A;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {}
  },
  render: () => {
    const handleSubmit = async (data: FormData) => {
      alert(\`Form submitted! Check console for detailed logs.\\n\\nData: \${JSON.stringify(data, null, 2)}\`);
    };
    return <div className="w-96">
        <Form onSubmit={handleSubmit}>
          <FormInput name="email" label="Email Address" type="email" icon={Mail} placeholder="Enter your email" tooltip="We'll never share your email with anyone" required />

          <FormInput name="password" label="Password" type="password" icon={Lock} placeholder="Enter your password" tooltip="Must be at least 8 characters" required validate={value => {
          if (value && value.length < 8) {
            return 'Password must be at least 8 characters';
          }
        }} />
        </Form>
      </div>;
  }
}`,...(A=(I=p.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var k,E,B;h.parameters={...h.parameters,docs:{...(k=h.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {},
    onValidate: () => {}
  },
  render: args => {
    const validateForm = async (data: FormData): Promise<FormErrors> => {
      const errors: FormErrors = {};

      // Log validation to Actions panel
      args.onValidate(data);

      // Simulate async validation (e.g., checking email availability)
      if (data.email === 'taken@example.com') {
        errors.email = 'This email is already taken';
      }
      if (data.password !== data.confirmPassword) {
        errors.confirmPassword = 'Passwords do not match';
      }
      return errors;
    };
    const handleSubmit = async (data: FormData, helpers: FormHelpers) => {
      try {
        // Log to Actions panel
        args.onSubmit(data, helpers);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log('Registration successful:', data);
        alert('Registration successful!');
        helpers.reset();
      } catch {
        helpers.setErrors({
          form: 'Registration failed. Please try again.'
        });
      }
    };
    return <div className="w-96">
        <Form onSubmit={handleSubmit} onValidate={validateForm} validateOnBlur={true} submitText="Register" loadingText="Creating account...">
          <FormInput name="firstName" label="First Name" icon={User} placeholder="John" required />

          <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" required />

          <FormInput name="email" label="Email Address" type="email" icon={Mail} placeholder="john@example.com" tooltip="Try 'taken@example.com' to see validation error" required />

          <FormInput name="password" label="Password" type="password" icon={Lock} placeholder="••••••••" tooltip="Must be at least 8 characters with numbers" required validate={value => {
          if (!value) return;
          if (value.length < 8) return 'Password must be at least 8 characters';
          if (!/\\d/.test(value)) return 'Password must contain at least one number';
        }} />

          <FormInput name="confirmPassword" label="Confirm Password" type="password" icon={Lock} placeholder="••••••••" tooltip="Must match your password" required />
        </Form>
      </div>;
  }
}`,...(B=(E=h.parameters)==null?void 0:E.docs)==null?void 0:B.source}}};var U,O,L;b.parameters={...b.parameters,docs:{...(U=b.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: FormData) => {
      console.log('Contact form submitted:', data);
      alert('Message sent successfully!');
    };
    return <div className="w-full max-w-2xl">
        <Form onSubmit={handleSubmit} layout="grid" gridColumns={2} spacing="lg" submitText="Send Message">
          <FormInput name="firstName" label="First Name" icon={User} placeholder="John" required />
          <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" required />
          <FormInput name="email" label="Email" type="email" icon={Mail} placeholder="john@example.com" tooltip="We'll respond to this email" required />
          <FormInput name="phone" label="Phone" type="tel" icon={Phone} placeholder="+1 (555) 123-4567" tooltip="Optional: For urgent matters" />
          <div className="col-span-2">
            <FormField label="Message" name="message" tooltip="Tell us how we can help you" placeholder="Your message here..." required />
          </div>
        </Form>
      </div>;
  }
}`,...(L=(O=b.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var R,z,V;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const handleSubmit = async (data: FormData) => {
      console.log('Search submitted:', data);
    };
    return <div className="w-full">
        <Form onSubmit={handleSubmit} layout="horizontal" spacing="sm" submitText="Search">
          <FormInput name="query" label="Search" placeholder="Enter search terms..." tooltip="Search across all products" className="min-w-64" />
          <FormInput name="category" label="Category" placeholder="All categories" tooltip="Filter by category" className="min-w-40" />
        </Form>
      </div>;
  }
}`,...(V=(z=g.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var $,J,W;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: () => {
    const [formData, setFormData] = useState({
      username: 'john_doe',
      email: 'john@example.com'
    });
    const handleSubmit = async (data: FormData) => {
      setFormData(data);
      console.log('Updated data:', data);
    };
    const handleFieldChange = (name: string, value: unknown) => {
      console.log(\`Field \${name} changed to:\`, value);
    };
    return <div className="w-96 space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <h3 className="font-semibold mb-2">Current Form Data:</h3>
          <pre className="text-sm text-gray-600">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>

        <Form onSubmit={handleSubmit} initialValues={formData} onFieldChange={handleFieldChange} validateOnChange={true} submitText="Update Profile">
          <FormInput name="username" label="Username" icon={User} placeholder="Enter username" tooltip="Must be unique and 3+ characters" required validate={value => {
          if (!value) return;
          if (value.length < 3) return 'Username must be at least 3 characters';
          if (!/^[a-zA-Z0-9_]+$/.test(value)) return 'Username can only contain letters, numbers, and underscores';
        }} />
          <FormInput name="email" label="Email" type="email" icon={Mail} placeholder="Enter email" tooltip="We'll send notifications here" required />
          <FormInput name="bio" label="Bio" placeholder="Tell us about yourself..." tooltip="Optional: Share a bit about yourself" />
        </Form>
      </div>;
  }
}`,...(W=(J=f.parameters)==null?void 0:J.docs)==null?void 0:W.source}}};var Y,_,G;v.parameters={...v.parameters,docs:{...(Y=v.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const handleSubmit = async (data: FormData) => {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitting(false);
      console.log('Custom submit:', data);
      alert('Custom submission complete!');
    };
    return <div className="w-96">
        <Form onSubmit={handleSubmit} isSubmitting={isSubmitting} showSubmitButton={false}>
          <FormInput name="title" label="Post Title" placeholder="Enter title" required />
          <FormInput name="content" label="Content" placeholder="Write your post..." required />
          <div className="flex gap-2 pt-2">
            <Button type="submit" label={isSubmitting ? 'Publishing...' : 'Publish Post'} disabled={isSubmitting} variant="primary" />
            <Button type="button" label="Save Draft" variant="secondary" onClick={() => console.log('Save draft')} />
          </div>
        </Form>
      </div>;
  }
}`,...(G=(_=v.parameters)==null?void 0:_.docs)==null?void 0:G.source}}};var H,K,Z;x.parameters={...x.parameters,docs:{...(H=x.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {}
  },
  render: () => {
    const handleSubmit = async (data: FormData) => {
      alert(\`Form submitted! Check console for detailed logs.\\n\\nData: \${JSON.stringify(data, null, 2)}\`);
    };
    const countryOptions = [{
      value: 'us',
      label: 'United States'
    }, {
      value: 'ca',
      label: 'Canada'
    }, {
      value: 'uk',
      label: 'United Kingdom'
    }, {
      value: 'de',
      label: 'Germany'
    }, {
      value: 'fr',
      label: 'France'
    }];
    const hobbyOptions = [{
      value: 'reading',
      label: 'Reading'
    }, {
      value: 'gaming',
      label: 'Gaming'
    }, {
      value: 'cooking',
      label: 'Cooking'
    }, {
      value: 'sports',
      label: 'Sports'
    }, {
      value: 'music',
      label: 'Music'
    }];
    const accountTypeOptions = [{
      value: 'personal',
      label: 'Personal Account',
      description: 'For individual use'
    }, {
      value: 'business',
      label: 'Business Account',
      description: 'For teams and organizations'
    }, {
      value: 'enterprise',
      label: 'Enterprise Account',
      description: 'For large organizations'
    }];
    return <div className="max-w-4xl mx-auto p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">User Registration Form</h2>
          <p className="text-gray-600">
            This showcases Form molecule orchestrating atoms and molecules from
            our library
          </p>
          <Badge intent="warning" className="mt-2">
            Molecule Component
          </Badge>
        </div>

        <Form onSubmit={handleSubmit} layout="grid" gridColumns={2} spacing="lg" submitText="Create Account" loadingText="Creating account...">
          {/* Personal Information Section */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <User className="w-5 h-5" />
              Personal Information
            </h3>
          </div>

          <FormInput name="firstName" label="First Name" icon={User} placeholder="John" tooltip="Your given name" required />
          <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" tooltip="Your family name" required />
          <FormInput name="email" label="Email Address" type="email" icon={Mail} placeholder="john@example.com" tooltip="We'll use this for login and notifications" required />
          <FormInput name="phone" label="Phone Number" type="tel" icon={Phone} placeholder="+1 (555) 123-4567" tooltip="For account verification and support" />

          {/* Address Section */}
          <div className="col-span-2 mt-6">
            <Divider />
            <h3 className="text-lg font-semibold text-gray-900 my-4 flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              Address Information
            </h3>
          </div>

          <div className="col-span-2">
            <FormInput name="address" label="Street Address" icon={MapPin} placeholder="123 Main Street" tooltip="Your full street address" required />
          </div>

          <FormInput name="city" label="City" placeholder="New York" required />

          <Select name="country" label="Country" placeholder="Select country" options={countryOptions} required />

          {/* Account Preferences */}
          <div className="col-span-2 mt-6">
            <Divider />
            <h3 className="text-lg font-semibold text-gray-900 my-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Account Preferences
            </h3>
          </div>

          <div className="col-span-2">
            <RadioGroup name="accountType" label="Account Type" options={accountTypeOptions} required />
          </div>

          <div className="col-span-2">
            <CheckboxGroup name="hobbies" label="Interests & Hobbies" description="Select all that apply (optional)" options={hobbyOptions} />
          </div>

          <div className="col-span-2">
            <TextArea name="bio" label="Bio" placeholder="Tell us a bit about yourself..." rows={3} tooltip="Optional: Share your background or interests" />
          </div>

          {/* Notification Settings */}
          <div className="col-span-2 mt-6">
            <Divider />
            <h3 className="text-lg font-semibold text-gray-900 my-4 flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notification Settings
            </h3>
          </div>

          <div className="col-span-2 space-y-4">
            <Switch name="emailNotifications" label="Email Notifications" description="Receive updates and news via email" defaultChecked={true} />
            <Switch name="smsNotifications" label="SMS Notifications" description="Receive important alerts via SMS" />
            <Switch name="marketingEmails" label="Marketing Communications" description="Receive product updates and special offers" />
          </div>

          {/* Terms and Conditions */}
          <div className="col-span-2 mt-6">
            <Divider />
            <div className="pt-4">
              <Switch name="agreeToTerms" label="I agree to the Terms of Service and Privacy Policy" description="Required to create an account" required />
            </div>
          </div>
        </Form>
      </div>;
  }
}`,...(Z=(K=x.parameters)==null?void 0:K.docs)==null?void 0:Z.source}}};var Q,X,ee;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {}
  },
  render: () => {
    const [previewData, setPreviewData] = useState({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      status: 'online' as const
    });
    const handleSubmit = async (data: FormData) => {
      setPreviewData(prev => ({
        ...prev,
        ...data
      }));
      console.log('Profile updated:', data);
    };
    const handleFieldChange = (name: string, value: unknown) => {
      setPreviewData(prev => ({
        ...prev,
        [name]: value
      }));
    };
    return <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">Profile Editor</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Live Preview */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
            <UserPreview avatarSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" name={\`\${previewData.firstName} \${previewData.lastName}\`.trim()} username={previewData.email?.split('@')[0] || 'username'} status={previewData.status} size="lg" layout="vertical" className="justify-center" />
            <div className="mt-4 space-y-2">
              <div className="flex items-center">
                <Badge intent="info" size="sm" className="w-14 justify-center">
                  Name
                </Badge>
                <span className="text-sm ml-3 flex-1">
                  {\`\${previewData.firstName} \${previewData.lastName}\`.trim() || 'Not set'}
                </span>
              </div>
              <div className="flex items-center">
                <Badge intent="warning" size="sm" className="w-14 justify-center">
                  Email
                </Badge>
                <span className="text-sm ml-3 flex-1">
                  {previewData.email || 'Not set'}
                </span>
              </div>
              <div className="flex items-center">
                <Badge intent="success" size="sm" className="w-14 justify-center">
                  Status
                </Badge>
                <span className="text-sm ml-3 flex-1 capitalize">
                  {previewData.status}
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <Form onSubmit={handleSubmit} onFieldChange={handleFieldChange} initialValues={previewData} validateOnChange={true} submitText="Update Profile" spacing="md">
              <FormInput name="firstName" label="First Name" icon={User} placeholder="John" required />
              <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" required />
              <FormInput name="email" label="Email" type="email" icon={Mail} placeholder="john@example.com" required />

              <RadioGroup name="status" label="Status" options={[{
              value: 'online',
              label: 'Online'
            }, {
              value: 'offline',
              label: 'Offline'
            }, {
              value: 'away',
              label: 'Away'
            }, {
              value: 'busy',
              label: 'Busy'
            }]} required />
            </Form>
          </div>
        </div>
      </div>;
  }
}`,...(ee=(X=y.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var ae,te,se;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {},
    onFieldChange: () => {}
  },
  render: args => {
    const handleSubmit = async (data: FormData, helpers: FormHelpers) => {
      // Log to Actions panel
      args.onSubmit(data, helpers);
      console.log('Contact form submitted:', data);
      alert(\`Message sent from \${data.firstName} \${data.lastName}!\`);
    };
    const handleFieldChange = (name: string, value: unknown, allValues: FormData) => {
      // Log field changes to Actions panel
      args.onFieldChange({
        fieldName: name,
        fieldValue: value,
        formValues: allValues
      });
    };
    return <div className="max-w-2xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-6">
          Contact Us (with Actions Logging)
        </h2>

        <Form onSubmit={handleSubmit} onFieldChange={handleFieldChange} layout="grid" gridColumns={2} spacing="lg" showSubmitButton={false}>
          <FormInput name="firstName" label="First Name" icon={User} placeholder="John" tooltip="Your given name" required />

          <FormInput name="lastName" label="Last Name" icon={User} placeholder="Doe" tooltip="Your family name" required />

          <FormInput name="email" label="Email" icon={Mail} type="email" placeholder="john@example.com" tooltip="We'll respond to this email" required />

          <FormInput name="phone" label="Phone" icon={Phone} type="tel" placeholder="+1 (555) 123-4567" tooltip="Optional: For urgent matters" />

          {/* Message field spans full width */}
          <div className="col-span-2">
            <FormField label="Message" name="message" tooltip="Tell us how we can help you" placeholder="Your message here..." required />
          </div>

          {/* Submit button positioned to not grow vertically */}
          <div className="col-span-2 flex justify-end">
            <Button type="submit" label="Send Message" variant="primary" size="md" className="px-8" />
          </div>
        </Form>
      </div>;
  }
}`,...(se=(te=N.parameters)==null?void 0:te.docs)==null?void 0:se.source}}};const Je=["BasicForm","WithValidation","GridLayout","HorizontalLayout","ControlledForm","CustomSubmitButton","ComponentShowcase","WithUserPreview","ContactFormWithActions"];export{p as BasicForm,x as ComponentShowcase,N as ContactFormWithActions,f as ControlledForm,v as CustomSubmitButton,b as GridLayout,g as HorizontalLayout,y as WithUserPreview,h as WithValidation,Je as __namedExportsOrder,$e as default};
