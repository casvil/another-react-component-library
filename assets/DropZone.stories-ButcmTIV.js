import{j as f}from"./jsx-runtime-D_zvdyIk.js";import{e as Xe,r as a}from"./iframe-BbYVxIeR.js";import{c as D}from"./clsx-B-dksMZM.js";import{c as Qe}from"./createLucideIcon-CdlKAxmU.js";import{a as er,C as rr}from"./circle-x-DFHXZ2t7.js";import{u as sr}from"./useStableId-NxHCH-Z3.js";import{H as tr}from"./classes-zVeSqKhV.js";import{T as se}from"./Text-Bza3cTHW.js";/**
 * @license lucide-react v0.515.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]],te=Qe("upload",or),ar=(s,r)=>s?te:r==="success"?er:r==="error"?rr:te,nr=(s,r,t)=>s?"text-gray-400":r==="success"?"text-green-500":r==="error"?"text-red-500":t?"text-blue-500":"text-gray-500",ir=(s,r,t)=>s?"border-gray-200":r==="success"?"border-green-300":r==="error"?"border-red-300":t?"border-blue-400 border-solid":"border-gray-300 border-dashed",lr=(s,r,t)=>s?"bg-gray-50":r==="success"?"bg-green-50":r==="error"?"bg-red-50":t?"bg-blue-50":"bg-white hover:bg-gray-50",cr=(s,r)=>s?"muted":r==="success"?"success":r==="error"?"error":"primary",F=s=>{const r=new DataTransfer;return s.forEach(t=>r.items.add(t)),r.files},B=Xe.memo(a.forwardRef(({onDrop:s,onDropRejected:r,accept:t="*/*",multiple:x=!1,maxFiles:V=10,maxSize:Z=10*1024*1024,minSize:R=0,title:W,description:J,variant:g="default",disabled:o=!1,loading:n=!1,size:u="md",className:_,contentClassName:K,iconClassName:H,"aria-label":Oe,"aria-describedby":$e,...Be},Ve)=>{const Y=`${sr()}-description`,b=a.useRef(null),[h,L]=a.useState(!1),[,E]=a.useState(0),l=a.useMemo(()=>({accept:t,maxFiles:V,maxSize:Z,minSize:R,acceptedTypes:t!=="*/*"&&t!=="*"?t.split(",").map(e=>e.trim().toLowerCase()):null}),[t,V,Z,R]),X=a.useCallback(e=>{var Q;const i=[],p=[];let m;if(e.length>l.maxFiles)return m=`Too many files. Maximum ${l.maxFiles} file${l.maxFiles===1?"":"s"} allowed.`,{valid:F([]),invalid:F(Array.from(e)),error:m};for(let $=0;$<e.length;$++){const c=e[$];if(c.size>l.maxSize){p.push(c),m=`File "${c.name}" is too large. Maximum size: ${(l.maxSize/(1024*1024)).toFixed(1)}MB`;continue}if(c.size<l.minSize){p.push(c),m=`File "${c.name}" is too small. Minimum size: ${(l.minSize/1024).toFixed(1)}KB`;continue}if(l.acceptedTypes){const ee=c.type.toLowerCase(),re="."+((Q=c.name.split(".").pop())==null?void 0:Q.toLowerCase());if(!l.acceptedTypes.some(C=>{if(C.includes("/*")){const Ye=C.split("/")[0];return ee.startsWith(Ye+"/")}return ee===C||re===C})){p.push(c),m=`File type "${c.type||re}" not accepted. Accepted types: ${l.accept}`;continue}}i.push(c)}return{valid:F(i),invalid:F(p),error:m}},[l]),v=a.useCallback(e=>{if(e.length===0)return;const{valid:i,invalid:p,error:m}=X(e);i.length>0&&s&&s(i),p.length>0&&m&&r&&r(p,m)},[X,s,r]),Ze=a.useCallback(e=>{const i=e.target.files;i&&v(i),b.current&&(b.current.value="")},[v]),G=a.useCallback(()=>{var e;o||n||(e=b.current)==null||e.click()},[o,n]),Re=a.useCallback(e=>{e.preventDefault(),e.stopPropagation(),!(o||n)&&(E(i=>i+1),e.dataTransfer.items&&e.dataTransfer.items.length>0&&L(!0))},[o,n]),We=a.useCallback(e=>{e.preventDefault(),e.stopPropagation(),E(i=>{const p=i-1;return p===0&&L(!1),p})},[]),Je=a.useCallback(e=>{if(e.preventDefault(),e.stopPropagation(),o||n){e.dataTransfer.dropEffect="none";return}e.dataTransfer.dropEffect="copy"},[o,n]),_e=a.useCallback(e=>{if(e.preventDefault(),e.stopPropagation(),L(!1),E(0),o||n)return;const i=e.dataTransfer.files;v(i)},[o,n,v]),Ke=a.useCallback(e=>{(e.key==="Enter"||e.key===" ")&&!o&&!n&&(e.preventDefault(),G())},[o,n,G]),y=a.useMemo(()=>({icon:ar(n,g),iconColor:nr(o,g,h),borderColor:ir(o,g,h),backgroundColor:lr(o,g,h),textColor:cr(o,g)}),[o,g,h,n]),d=a.useMemo(()=>tr,[]),A=a.useMemo(()=>({title:W||(x?"Drop files here":"Drop file here"),description:J||`Click to select ${x?"files":"a file"} or drag and drop${t!=="*/*"?` (${t})`:""}`}),[W,x,J,t]),O=a.useMemo(()=>({dropZone:D("flex flex-col items-center justify-center text-center border-2 transition-all duration-200 cursor-pointer",d.height[u],d.padding[u],d.borderRadius[u],y.borderColor,y.backgroundColor,o&&"cursor-not-allowed opacity-60",n&&"cursor-wait",_),content:D("flex flex-col items-center justify-center",d.gap[u],K),icon:D(d.icon[u],y.iconColor,n&&"animate-pulse",H)}),[d,u,y,o,n,_,K,H]),He=y.icon;return f.jsxs("div",{ref:Ve,role:"button",tabIndex:o?-1:0,"aria-label":Oe||A.title,"aria-describedby":$e||Y,className:O.dropZone,onClick:G,onDragEnter:Re,onDragLeave:We,onDragOver:Je,onDrop:_e,onKeyDown:Ke,...Be,children:[f.jsx("input",{ref:b,type:"file",accept:t,multiple:x,onChange:Ze,className:"sr-only",tabIndex:-1,"aria-hidden":"true"}),f.jsxs("div",{className:O.content,children:[f.jsx(He,{size:d.iconValues[u],className:O.icon,"aria-hidden":"true"}),f.jsxs("div",{className:"space-y-1",children:[f.jsx(se,{variant:"body",weight:"medium",color:y.textColor,className:d.text[u].title,children:A.title}),f.jsx(se,{variant:"small",color:o?"muted":"secondary",id:Y,className:D("max-w-xs",d.text[u].description),children:A.description})]})]})]})}));B.displayName="DropZone";B.__docgenInfo={description:`DropZone molecule component. A file upload area that supports both drag & drop
and click-to-select functionality with comprehensive validation and accessibility features.`,methods:[],displayName:"DropZone",props:{onDrop:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"}],return:{name:"void"}}},description:""},onDropRejected:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: FileList, error: string) => void",signature:{arguments:[{type:{name:"FileList"},name:"files"},{type:{name:"string"},name:"error"}],return:{name:"void"}}},description:""},accept:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'*/*'",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},maxFiles:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10 * 1024 * 1024",computed:!1}},minSize:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'error'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},contentClassName:{required:!1,tsType:{name:"string"},description:""},iconClassName:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}},composes:["Omit"]};const vr={title:"Molecules/DropZone",component:B,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Size of the drop zone"},variant:{control:"select",options:["default","success","error"],description:"Visual variant for different states"},accept:{control:"text",description:"Accepted file types (MIME types or extensions)"},multiple:{control:"boolean",description:"Allow multiple file selection"},maxFiles:{control:"number",description:"Maximum number of files allowed"},maxSize:{control:"number",description:"Maximum file size in bytes"},disabled:{control:"boolean",description:"Disable the drop zone"},loading:{control:"boolean",description:"Show loading state"}},args:{onDrop:()=>{},onDropRejected:()=>{}}},S={args:{size:"md",variant:"default"}},T={args:{size:"sm",title:"Upload Image",description:"JPG, PNG up to 5MB"}},w={args:{size:"lg",title:"Drop Your Files",description:"Any file type, multiple files allowed",multiple:!0}},M={args:{multiple:!0,maxFiles:5,title:"Upload Multiple Images",description:"Select up to 5 images (JPG, PNG)",accept:"image/jpeg,image/png,.jpg,.png"}},I={args:{accept:"image/*",title:"Upload Image",description:"JPG, PNG, GIF, WebP images only",maxSize:5*1024*1024}},z={args:{accept:".pdf,.doc,.docx,.txt",title:"Upload Documents",description:"PDF, Word, or text files only",multiple:!0,maxFiles:10}},k={args:{variant:"success",title:"Files Uploaded Successfully",description:"3 files uploaded successfully"}},P={args:{variant:"error",title:"Upload Failed",description:"File too large. Maximum size: 10MB"}},N={args:{disabled:!0,title:"Upload Disabled",description:"File upload is currently disabled"}},U={args:{loading:!0,title:"Uploading Files...",description:"Please wait while files are being processed"}},j={args:{title:"Custom Styled Upload",description:"This drop zone has custom styling",className:"border-purple-300 bg-purple-50",iconClassName:"text-purple-500",size:"lg"}},q={args:{title:"Interactive Upload",description:"Drop files to see console output",multiple:!0,maxSize:1024*1024,onDrop:s=>{console.log("Files accepted:",Array.from(s).map(r=>r.name))},onDropRejected:(s,r)=>{console.log("Files rejected:",Array.from(s).map(t=>t.name)),console.log("Error:",r)}},parameters:{docs:{description:{story:"Open the browser console to see file drop events."}}}};var oe,ae,ne;S.parameters={...S.parameters,docs:{...(oe=S.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    size: 'md',
    variant: 'default'
  }
}`,...(ne=(ae=S.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var ie,le,ce;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    title: 'Upload Image',
    description: 'JPG, PNG up to 5MB'
  }
}`,...(ce=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var pe,ue,de;w.parameters={...w.parameters,docs:{...(pe=w.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    size: 'lg',
    title: 'Drop Your Files',
    description: 'Any file type, multiple files allowed',
    multiple: true
  }
}`,...(de=(ue=w.parameters)==null?void 0:ue.docs)==null?void 0:de.source}}};var me,fe,ge;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  args: {
    multiple: true,
    maxFiles: 5,
    title: 'Upload Multiple Images',
    description: 'Select up to 5 images (JPG, PNG)',
    accept: 'image/jpeg,image/png,.jpg,.png'
  }
}`,...(ge=(fe=M.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};var ye,xe,be;I.parameters={...I.parameters,docs:{...(ye=I.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  args: {
    accept: 'image/*',
    title: 'Upload Image',
    description: 'JPG, PNG, GIF, WebP images only',
    maxSize: 5 * 1024 * 1024 // 5MB
  }
}`,...(be=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var he,ve,Ce;z.parameters={...z.parameters,docs:{...(he=z.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    accept: '.pdf,.doc,.docx,.txt',
    title: 'Upload Documents',
    description: 'PDF, Word, or text files only',
    multiple: true,
    maxFiles: 10
  }
}`,...(Ce=(ve=z.parameters)==null?void 0:ve.docs)==null?void 0:Ce.source}}};var De,Fe,Se;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    title: 'Files Uploaded Successfully',
    description: '3 files uploaded successfully'
  }
}`,...(Se=(Fe=k.parameters)==null?void 0:Fe.docs)==null?void 0:Se.source}}};var Te,we,Me;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    title: 'Upload Failed',
    description: 'File too large. Maximum size: 10MB'
  }
}`,...(Me=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Me.source}}};var Ie,ze,ke;N.parameters={...N.parameters,docs:{...(Ie=N.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
  args: {
    disabled: true,
    title: 'Upload Disabled',
    description: 'File upload is currently disabled'
  }
}`,...(ke=(ze=N.parameters)==null?void 0:ze.docs)==null?void 0:ke.source}}};var Pe,Ne,Ue;U.parameters={...U.parameters,docs:{...(Pe=U.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    loading: true,
    title: 'Uploading Files...',
    description: 'Please wait while files are being processed'
  }
}`,...(Ue=(Ne=U.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};var je,qe,Le;j.parameters={...j.parameters,docs:{...(je=j.parameters)==null?void 0:je.docs,source:{originalSource:`{
  args: {
    title: 'Custom Styled Upload',
    description: 'This drop zone has custom styling',
    className: 'border-purple-300 bg-purple-50',
    iconClassName: 'text-purple-500',
    size: 'lg'
  }
}`,...(Le=(qe=j.parameters)==null?void 0:qe.docs)==null?void 0:Le.source}}};var Ee,Ge,Ae;q.parameters={...q.parameters,docs:{...(Ee=q.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    title: 'Interactive Upload',
    description: 'Drop files to see console output',
    multiple: true,
    maxSize: 1024 * 1024,
    // 1MB
    onDrop: (files: FileList) => {
      console.log('Files accepted:', Array.from(files).map(f => f.name));
    },
    onDropRejected: (files: FileList, error: string) => {
      console.log('Files rejected:', Array.from(files).map(f => f.name));
      console.log('Error:', error);
    }
  },
  parameters: {
    docs: {
      description: {
        story: 'Open the browser console to see file drop events.'
      }
    }
  }
}`,...(Ae=(Ge=q.parameters)==null?void 0:Ge.docs)==null?void 0:Ae.source}}};const Cr=["Default","Small","Large","MultipleFiles","ImageOnly","DocumentsOnly","Success","Error","Disabled","Loading","CustomStyling","WithCallbacks"];export{j as CustomStyling,S as Default,N as Disabled,z as DocumentsOnly,P as Error,I as ImageOnly,w as Large,U as Loading,M as MultipleFiles,T as Small,k as Success,q as WithCallbacks,Cr as __namedExportsOrder,vr as default};
