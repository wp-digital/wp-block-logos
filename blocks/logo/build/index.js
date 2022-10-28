(()=>{"use strict";var e,t={295:()=>{const e=window.wp.blocks;function t(){return t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},t.apply(this,arguments)}const o=window.wp.element,n=window.lodash,l=window.wp.blockEditor,i=window.wp.components,a=window.wp.primitives,c=(0,o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.Path,{d:"M15.6 7.2H14v1.5h1.6c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.8 0 5.2-2.3 5.2-5.2 0-2.9-2.3-5.2-5.2-5.2zM4.7 12.4c0-2 1.7-3.7 3.7-3.7H10V7.2H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H10v-1.5H8.4c-2 0-3.7-1.7-3.7-3.7zm4.6.9h5.3v-1.5H9.3v1.5z"})),r=(0,o.createElement)(a.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,o.createElement)(a.Path,{d:"M15.6 7.3h-.7l1.6-3.5-.9-.4-3.9 8.5H9v1.5h2l-1.3 2.8H8.4c-2 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7H10V7.3H8.4c-2.9 0-5.2 2.3-5.2 5.2 0 2.9 2.3 5.2 5.2 5.2H9l-1.4 3.2.9.4 5.7-12.5h1.4c2 0 3.7 1.7 3.7 3.7s-1.7 3.7-3.7 3.7H14v1.5h1.6c2.9 0 5.2-2.3 5.2-5.2 0-2.9-2.4-5.2-5.2-5.2z"})),s=window.wp.i18n;function u(e){const{label:t,icons:l,value:a,onChange:c}=e,[r,u]=(0,o.useState)(!1),[d,g]=(0,o.useState)(a);return l.length?(0,o.createElement)(i.BaseControl,null,(0,o.createElement)("legend",null,(0,o.createElement)(i.BaseControl.VisualLabel,null,t)),(0,o.createElement)(i.Flex,{justify:"flex-start"},(0,o.createElement)(i.FlexItem,null,(0,o.createElement)(i.Button,{isTertiary:!0,isPressed:r,onClick:()=>{u(!r)}},a?(0,s.__)("Update","innocode-components"):(0,s.__)("Add","innocode-components"))),!!a&&(0,o.createElement)(i.FlexItem,null,(0,o.createElement)(i.Button,{isDestructive:!0,onClick:()=>{c()}},(0,s.__)("Remove","innocode-components")))),r&&(0,o.createElement)(i.Modal,{title:t,onRequestClose:()=>{u(!1)}},(0,n.chunk)(l,5).map((e=>(0,o.createElement)(i.Flex,{key:e.map((e=>e.value)).join("|"),justify:"flex-start"},e.map((e=>(0,o.createElement)(i.FlexItem,{key:e.value,style:{marginBottom:8}},(0,o.createElement)(i.Button,{isPressed:e.value===d,onClick:()=>{g(e.value!==d?e.value:void 0)}},(0,o.createElement)(i.Icon,{icon:(0,n.has)(e,"icon")?e.icon:e.value})))))))),(0,o.createElement)(i.Flex,{justify:"flex-end"},(0,o.createElement)(i.FlexItem,null,(0,o.createElement)(i.Button,{isPrimary:!0,variant:"primary",onClick:()=>{c(d),u(!1)}},(0,s.__)("Set Icon","innocode-component-icons-picker")))))):null}const d="innocode-block-logo",g="noreferrer noopener",p=window.wp.hooks,m=(0,p.applyFilters)("innocode.block-logo.size","innocode-block-logo"),h=(0,p.applyFilters)("innocode.block-logo.allowed_types",["image"]),b=(0,p.applyFilters)("innocode.block-logo.width_base",75),k=(0,p.applyFilters)("innocode.block-logo.has_caption.default",!1),v=(0,p.applyFilters)("innocode.block-logo.caption_alignment.default","none"),_=(0,p.applyFilters)("innocode.block-logo.has_icon.default",!1),w=(0,p.applyFilters)("innocode.block-logo.icons",(0,p.applyFilters)("innocode.block.icons",[])),f=e=>{let{size:t}=e;return(0,o.createElement)(a.SVG,{width:t,height:t,viewBox:"0 0 36 36",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)(a.Path,{fillRule:"evenodd",d:"M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33ZM18 36C27.9411 36 36 27.9411 36 18C36 8.05887 27.9411 0 18 0C8.05887 0 0 8.05887 0 18C0 27.9411 8.05887 36 18 36Z"}),(0,o.createElement)(a.Path,{d:"M13 28V9.00002H16.096V25H23V28H13Z"}),(0,o.createElement)(a.Path,{d:"M23 10.5C23 11.3284 22.3284 12 21.5 12C20.6716 12 20 11.3284 20 10.5C20 9.67157 20.6716 9 21.5 9C22.3284 9 23 9.67157 23 10.5Z"}))},E={href:{type:"string",source:"attribute",selector:"a",attribute:"href"},target:{type:"string",source:"attribute",selector:"a",attribute:"target"},rel:{type:"string",source:"attribute",selector:"a",attribute:"rel"},title:{type:"string",source:"attribute",selector:"a",attribute:"title"},attachmentId:{type:"integer",default:0},url:{type:"string",source:"attribute",selector:"img",attribute:"src"},naturalWidth:{type:"number"},naturalHeight:{type:"number"},width:{type:"string",source:"attribute",selector:"img",attribute:"width"},height:{type:"string",source:"attribute",selector:"img",attribute:"height"},alt:{type:"string",source:"attribute",selector:"img",attribute:"alt"},hasCaption:{type:"boolean",default:k},caption:{type:"string",source:"html",selector:".innocode-block-logo__caption"},captionAlignment:{type:"string",default:v},backgroundColor:{type:"string"},color:{type:"string"},invert:{type:"number",default:0},hasIcon:{type:"boolean",default:_},icon:{type:"string"}};(0,e.registerBlockType)("innocode/block-logo",{apiVersion:2,supports:{className:!1},attributes:E,usesContext:["innocode/block-logos-scaleFactor","innocode/block-logos-backgroundColor","innocode/block-logos-color"],edit:function(e){let{attributes:a,setAttributes:p,isSelected:E,context:y}=e;const{href:C,target:x,rel:I,attachmentId:F,url:H,alt:B,title:P,naturalWidth:T,naturalHeight:N,width:S,height:O,hasCaption:M=k,caption:R,captionAlignment:z=v,invert:V,hasIcon:j=_,icon:A}=a,{"innocode/block-logos-scaleFactor":L,"innocode/block-logos-backgroundColor":$,"innocode/block-logos-color":U}=y,[G,W]=(0,o.useState)(!1),Z="_blank"===x,D=(e,t)=>{p({[e]:t})},q=()=>{p({href:void 0,target:void 0,rel:void 0}),W(!1)};(0,o.useEffect)((()=>{T&&N&&((e,t)=>{const o=e/t,n=Math.floor(Math.pow(o,L/1e3)*b).toString(),l=Math.floor(n/o).toString();p({width:n,height:l})})(T,N),p({backgroundColor:$,color:U})}));let J=null;if(w.length&&j){if(A){const e=w.find((e=>e.value===A));J=(0,o.createElement)(i.Icon,{icon:(0,n.has)(e,"icon")?e.icon:e.value,className:"innocode-block-logo__icon",style:V?{filter:`invert(${V}%)`}:void 0})}}else J=F&&H?(0,o.createElement)("img",{src:H,alt:B,width:S,height:O,title:P,className:"innocode-block-logo__image",style:V?{filter:`invert(${V}%)`}:void 0}):(0,o.createElement)(l.MediaUploadCheck,null,(0,o.createElement)(l.MediaUpload,{onSelect:e=>{const t={attachmentId:e.id,alt:e.alt||e.filename};(0,n.has)(e,["sizes",m])?(t.url=e.sizes[m].url,t.naturalWidth=e.sizes[m].width,t.naturalHeight=e.sizes[m].height):(t.url=e.url,t.naturalWidth=e.width,t.naturalHeight=e.height),p(t)},allowedTypes:h,value:F,render:e=>{let{open:t}=e;return(0,o.createElement)(i.Button,{onClick:t,icon:(0,o.createElement)(i.Icon,{icon:F?i.Spinner:f}),iconSize:46,text:(0,s.__)("Set logo","innocode-blocks"),label:(0,s.__)("Logo placeholder","innocode-blocks"),className:"innocode-block-logo__upload"})}}));let K="innocode-block-logo__caption";return"none"!==z&&(K+=` innocode-block-logo__caption_${z}`),(0,o.createElement)("figure",t({},(0,l.useBlockProps)({className:d}),{style:$?{backgroundColor:$}:void 0}),(0,o.createElement)(l.InspectorControls,null,(0,o.createElement)(i.PanelBody,{title:(0,s.__)("Settings","innocode-blocks"),initialOpen:!1},(0,o.createElement)(i.PanelRow,null,(0,o.createElement)(i.ToggleControl,{label:(0,s.__)("Show caption","innocode-blocks"),checked:M,onChange:()=>D("hasCaption",!M)})),!(!A&&!F)&&(0,o.createElement)(i.PanelRow,null,(0,o.createElement)(i.RangeControl,{label:(0,s.__)("Invert","innocode-blocks"),value:V,onChange:e=>D("invert",e),withInputField:!1,allowReset:!0,resetFallbackValue:0,min:0,max:100,step:1})),!!w.length&&(0,o.createElement)(i.PanelRow,null,(0,o.createElement)(i.ToggleControl,{label:(0,s.__)("Use icon","innocode-blocks"),checked:j,onChange:()=>D("hasIcon",!j)})),!!w.length&&j&&(0,o.createElement)(i.PanelRow,null,(0,o.createElement)(u,{label:(0,s.__)("Icon","innocode-blocks"),icons:w,value:A,onChange:e=>D("icon",e)})))),(0,o.createElement)(l.BlockControls,null,(0,o.createElement)(i.ToolbarGroup,null,!C&&(0,o.createElement)(i.ToolbarButton,{icon:c,title:(0,s.__)("Link","innocode-blocks"),onClick:()=>{W(!0)}}),!!C&&(0,o.createElement)(i.ToolbarButton,{icon:r,title:(0,s.__)("Unlink","innocode-blocks"),onClick:q,isActive:!0}))),(G||E&&C)&&(0,o.createElement)(i.Popover,{position:"bottom center",onClose:()=>{W(!1)}},(0,o.createElement)(l.__experimentalLinkControl,{value:{url:C,opensInNewTab:Z},onChange:e=>{let{url:t="",opensInNewTab:o}=e;D("href",t),Z!==o&&(e=>{const t=e?"_blank":void 0;let o=I;t&&!I?o=g:t||I!==g||(o=void 0),p({target:t,rel:o})})(o)},onRemove:q,forceIsEditingLink:G})),C?(0,o.createElement)("a",{href:C,target:x,rel:(0,n.isEmpty)(I)?void 0:I,className:"innocode-block-logo__link",onClick:e=>{e.preventDefault()}},J):J,M&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(l.BlockControls,null,(0,o.createElement)(l.AlignmentToolbar,{value:z,onChange:e=>D("captionAlignment",e)})),(0,o.createElement)(l.RichText,{tagName:"figcaption",value:R,"aria-label":(0,s.__)("Logo caption text","innocode-blocks"),placeholder:(0,s.__)("Add caption","innocode-blocks"),onChange:e=>D("caption",e),inlineToolbar:!0,className:K,style:U?{color:U}:void 0})))},save:function(e){let{attributes:a}=e;const{href:c,target:r,rel:s,url:u,alt:g,title:p,width:m,height:h,hasCaption:b=k,caption:f,captionAlignment:E=v,backgroundColor:y,color:C,invert:x,hasIcon:I=_,icon:F}=a;let H=null;if(I){if(F){const e=w.find((e=>e.value===F));H=(0,o.createElement)(i.Icon,{icon:(0,n.has)(e,"icon")?e.icon:e.value,className:"innocode-block-logo__icon",style:x?{filter:`invert(${x}%)`}:void 0})}}else u&&(H=(0,o.createElement)("img",{src:u,alt:g,width:m,height:h,title:p,className:"innocode-block-logo__image",style:x?{filter:`invert(${x}%)`}:void 0}));let B="innocode-block-logo__caption";return"none"!==E&&(B+=` innocode-block-logo__caption_${E}`),(0,o.createElement)("figure",t({},l.useBlockProps.save({className:d}),{style:y?{backgroundColor:y}:void 0}),c?(0,o.createElement)("a",{href:c,target:r,rel:(0,n.isEmpty)(s)?void 0:s,className:"innocode-block-logo__link"},H):H,b&&!l.RichText.isEmpty(f)&&(0,o.createElement)(l.RichText.Content,{tagName:"figcaption",value:f,className:B,style:C?{color:C}:void 0}))},icon:f,parent:["innocode/block-logos","innocode/block-slide"]})}},o={};function n(e){var l=o[e];if(void 0!==l)return l.exports;var i=o[e]={exports:{}};return t[e](i,i.exports,n),i.exports}n.m=t,e=[],n.O=(t,o,l,i)=>{if(!o){var a=1/0;for(u=0;u<e.length;u++){for(var[o,l,i]=e[u],c=!0,r=0;r<o.length;r++)(!1&i||a>=i)&&Object.keys(n.O).every((e=>n.O[e](o[r])))?o.splice(r--,1):(c=!1,i<a&&(a=i));if(c){e.splice(u--,1);var s=l();void 0!==s&&(t=s)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,l,i]},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={826:0,431:0};n.O.j=t=>0===e[t];var t=(t,o)=>{var l,i,[a,c,r]=o,s=0;if(a.some((t=>0!==e[t]))){for(l in c)n.o(c,l)&&(n.m[l]=c[l]);if(r)var u=r(n)}for(t&&t(o);s<a.length;s++)i=a[s],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=globalThis.webpackChunkwp_block_logos=globalThis.webpackChunkwp_block_logos||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var l=n.O(void 0,[431],(()=>n(295)));l=n.O(l)})();