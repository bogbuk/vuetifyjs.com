webpackJsonp([85],{1035:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:"",sm6:""}},[r("v-card",[r("v-toolbar",{staticClass:"teal"},[r("v-btn",{attrs:{icon:""}},[r("v-icon",{staticClass:"white--text"},[t._v("arrow_back")])],1),r("v-spacer"),r("v-btn",{attrs:{icon:""}},[r("v-icon",{staticClass:"white--text"},[t._v("more_vert")])],1)],1),r("v-card-text",[r("v-container",{attrs:{fluid:""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"Title",counter:"",max:"15",rules:[t.rules.required]},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),r("v-flex",{attrs:{xs12:""}},[r("v-text-field",{attrs:{label:"E-mail",rules:[t.rules.required,t.rules.email]},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1)],1)],1)],1)],1)],1)],1)},staticRenderFns:[]}},329:function(t,e,r){var a=r(0)(r(571),r(1035),null,null,null);t.exports=a.exports},571:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"Preliminary report",email:"",rules:{required:function(t){return!!t||"Required."},email:function(t){return/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t)||"Invalid e-mail."}}}}}}});