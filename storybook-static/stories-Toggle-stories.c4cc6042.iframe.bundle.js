/*! For license information please see stories-Toggle-stories.c4cc6042.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[107],{"./src/stories/Toggle.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Checked:()=>Checked,CustomBackgroundColor:()=>CustomBackgroundColor,Default:()=>Default,LabelsColor:()=>LabelsColor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Toggle_stories});const Toggle_module={switch:"Toggle_switch__Gz19L",slider:"Toggle_slider__L15vw",label:"Toggle_label__HmpF+","toggle-container":"Toggle_toggle-container__HOzpR"};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toggle=_ref=>{let{labels,isChecked,handleChange,toggleBackgroundColor,labelsColor}=_ref;return(0,jsx_runtime.jsx)("div",{className:Toggle_module["toggle-container"],role:"switch","aria-checked":isChecked,children:(0,jsx_runtime.jsxs)("div",{className:Toggle_module["label-container"],children:[(0,jsx_runtime.jsx)("span",{className:Toggle_module.label,style:{color:labelsColor},children:labels[0]}),(0,jsx_runtime.jsxs)("label",{className:Toggle_module.switch,children:[(0,jsx_runtime.jsx)("input",{type:"checkbox",checked:isChecked,onChange:handleChange}),(0,jsx_runtime.jsx)("span",{className:Toggle_module.slider,style:{backgroundColor:toggleBackgroundColor}})]}),(0,jsx_runtime.jsx)("span",{className:Toggle_module.label,style:{color:labelsColor},children:labels[1]})]})})};Toggle.__docgenInfo={description:"",methods:[],displayName:"Toggle"};const Template=_ref=>{let{...args}=_ref;return(0,jsx_runtime.jsx)(Toggle,{...args})},Toggle_stories={title:"Components/Toggle",component:Toggle,decorators:[Story=>(0,jsx_runtime.jsx)("div",{style:{backgroundColor:"black",padding:"20px"},children:(0,jsx_runtime.jsx)(Story,{})})],argTypes:{handleChange:{action:"handleChange"}}},Default=Template.bind({});Default.args={labels:["Off","On"],labelsColor:"#fff",isChecked:!1,handleChange:()=>{}};const Checked=Template.bind({});Checked.args={labels:["Off","On"],labelsColor:"#fff",isChecked:!0,handleChange:()=>{}};const CustomBackgroundColor=Template.bind({});CustomBackgroundColor.args={labels:["Inactive","Active"],isChecked:!1,handleChange:()=>{},toggleBackgroundColor:"#A0CDD9",labelsColor:"white"};const LabelsColor=Template.bind({});LabelsColor.args={labels:["Off","On"],isChecked:!0,labelsColor:"#A0CDD9"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => <Toggle {...args} />",...Default.parameters?.docs?.source}}},Checked.parameters={...Checked.parameters,docs:{...Checked.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => <Toggle {...args} />",...Checked.parameters?.docs?.source}}},CustomBackgroundColor.parameters={...CustomBackgroundColor.parameters,docs:{...CustomBackgroundColor.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => <Toggle {...args} />",...CustomBackgroundColor.parameters?.docs?.source}}},LabelsColor.parameters={...LabelsColor.parameters,docs:{...LabelsColor.parameters?.docs,source:{originalSource:"({\n  ...args\n}) => <Toggle {...args} />",...LabelsColor.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Checked","CustomBackgroundColor","LabelsColor"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);