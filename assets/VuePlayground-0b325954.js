import{g as p,i as v,h as c,s as n,j as g,k as f,l as m,m as a,n as y,_ as w}from"./app-10809f45.js";const R=e=>JSON.parse(decodeURIComponent(e));var h=p({name:"VuePlayground",props:{title:{type:String,default:""},files:{type:String,required:!0},settings:{type:String,default:"{}"}},setup(e){const i=v(),o=c(!0),t=n(),l=n(),s=g(()=>f({},i,R(e.settings))),u=async()=>{const{ReplStore:r,Repl:d}=await w(()=>import("./vue-repl-b4bd8db5.js"),["assets/vue-repl-b4bd8db5.js","assets/app-10809f45.js","assets/commonjs-dynamic-modules-302442b1.js","assets/commonjsHelpers-87174ba5.js"]);t.value=d,l.value=new r({serializedState:decodeURIComponent(e.files)}),s.value.vueVersion&&await l.value.setVueVersion(s.value.vueVersion)};return m(async()=>{await u(),o.value=!1}),()=>[a("div",{class:"vue-playground-wrapper"},[e.title?a("div",{class:"header"},decodeURIComponent(e.title)):null,a("div",{class:"repl-container"},[o.value?a(y,{class:"preview-loading",height:192}):null,t.value?a(t.value,{store:l.value,autoResize:!0,...s.value,layout:"horizontal"}):null])])]}});export{h as default};
