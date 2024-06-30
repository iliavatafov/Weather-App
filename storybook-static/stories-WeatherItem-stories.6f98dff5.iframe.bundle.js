/*! For license information please see stories-WeatherItem-stories.6f98dff5.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[908],{"./src/stories/WeatherItem.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Active:()=>Active,BorderColor:()=>BorderColor,Default:()=>Default,TextColor:()=>TextColor,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _components_WeatherItems_WeatherItem__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/WeatherItems/WeatherItem.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/WeatherItem",component:_components_WeatherItems_WeatherItem__WEBPACK_IMPORTED_MODULE_0__.I,argTypes:{handleCardClick:{action:"handleCardClick"}},decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div",{style:{backgroundColor:"black",padding:"20px"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Story,{})})]},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components_WeatherItems_WeatherItem__WEBPACK_IMPORTED_MODULE_0__.I,{...args}),Default=Template.bind({});Default.args={day:{dt_txt:"2023-06-30 12:00:00",weather:[{description:"clear sky",icon:"01d"}],main:{temp:25}},index:0,isActive:!1,metricSymbol:"°C",handleCardClick:()=>{}};const Active=Template.bind({});Active.args={day:{dt_txt:"2023-06-30 12:00:00",weather:[{description:"clear sky",icon:"01d"}],main:{temp:25}},index:0,isActive:!0,metricSymbol:"°C",handleCardClick:()=>{}};const TextColor=Template.bind({});TextColor.args={day:{dt_txt:"2023-06-30 12:00:00",weather:[{description:"clear sky",icon:"01d"}],main:{temp:25}},index:0,isActive:!0,metricSymbol:"°C",textColor:"#A0CDD9",handleCardClick:()=>{}};const BorderColor=Template.bind({});BorderColor.args={day:{dt_txt:"2023-06-30 12:00:00",weather:[{description:"clear sky",icon:"01d"}],main:{temp:25}},index:0,isActive:!0,metricSymbol:"°C",borderColor:"#A0CDD9",handleCardClick:()=>{}},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <WeatherItem {...args} />",...Default.parameters?.docs?.source}}},Active.parameters={...Active.parameters,docs:{...Active.parameters?.docs,source:{originalSource:"args => <WeatherItem {...args} />",...Active.parameters?.docs?.source}}},TextColor.parameters={...TextColor.parameters,docs:{...TextColor.parameters?.docs,source:{originalSource:"args => <WeatherItem {...args} />",...TextColor.parameters?.docs?.source}}},BorderColor.parameters={...BorderColor.parameters,docs:{...BorderColor.parameters?.docs,source:{originalSource:"args => <WeatherItem {...args} />",...BorderColor.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Active","TextColor","BorderColor"]},"./src/components/WeatherItems/WeatherItem.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>WeatherItem});const WeatherItem_module_weather_item="WeatherItem_weather-item__o9cvK",WeatherItem_module_active="WeatherItem_active__nWwVd",WeatherItem_module_highlight_line="WeatherItem_highlight-line__V79EK";var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const WeatherItem=_ref=>{let{day,index,isActive,metricSymbol,handleCardClick,textColor="#fff",borderColor="#fff"}=_ref;const formattedDate=new Date(day.dt_txt).toLocaleDateString("en-US",{weekday:"long"}),weatherDescription=day.weather[0].description,iconUrl="http://openweathermap.org/img/wn/".concat(day.weather[0].icon,".png"),temperature=Math.round(day.main.temp);return(0,jsx_runtime.jsxs)("article",{className:"".concat(WeatherItem_module_weather_item," ").concat(isActive?WeatherItem_module_active:""),onClick:()=>{handleCardClick(index)},role:"article","aria-label":"click-the-card-to-select",children:[(0,jsx_runtime.jsx)("div",{className:WeatherItem_module_highlight_line,style:{backgroundColor:borderColor}}),(0,jsx_runtime.jsx)("header",{children:(0,jsx_runtime.jsx)("h3",{style:{color:textColor},children:formattedDate})}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)("img",{src:iconUrl,alt:weatherDescription})}),(0,jsx_runtime.jsx)("footer",{children:(0,jsx_runtime.jsxs)("p",{style:{color:textColor},children:[temperature,metricSymbol]})})]})};WeatherItem.__docgenInfo={description:"",methods:[],displayName:"WeatherItem",props:{textColor:{defaultValue:{value:'"#fff"',computed:!1},required:!1},borderColor:{defaultValue:{value:'"#fff"',computed:!1},required:!1}}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);