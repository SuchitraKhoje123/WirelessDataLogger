(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0b889c17"],{"013b":function(e,t,r){"use strict";r("e9fb")},e9fb:function(e,t,r){},eec5:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("b-tabs",{attrs:{"content-class":"mt-3"}},[r("b-tab",{attrs:{title:"Login",active:""}},[r("LoginForm")],1),r("b-tab",{attrs:{title:"Register"}},[r("RegisterForm")],1)],1)],1)},a=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("h1",[e._v(" Login ")]),r("bForm",[r("b-form-group",{attrs:{label:"Username:","label-for":"uname"}},[r("b-form-input",{attrs:{id:"uname",placeholder:"Enter username",required:""},model:{value:e.form.uname,callback:function(t){e.$set(e.form,"uname",t)},expression:"form.uname"}})],1),r("b-form-group",{attrs:{label:"Password","label-for":"pwd"}},[r("b-form-input",{attrs:{id:"pwd",placeholder:"Enter Password",type:"password",required:""},model:{value:e.form.pwd,callback:function(t){e.$set(e.form,"pwd",t)},expression:"form.pwd"}})],1),r("router-link",{attrs:{to:"/forgot-password"}},[e._v("Forgot Password?")]),r("hr"),r("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.login()}}},[e._v("Submit ")])],1),r("bModal",{ref:"resp",attrs:{title:"Server Response","hide-footer":""}},[r("AlertBox",{attrs:{message:e.message}})],1)],1)},s=[],i=(r("96cf"),r("1da1")),u=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("b-alert",{attrs:{variant:"danger",show:""}},[e._v(" "+e._s(e.message)+" ")])],1)},l=[],c={name:"AlertBox",props:{message:{type:String,default:"There was an error"}}},m=c,f=r("2877"),p=Object(f["a"])(m,u,l,!1,null,"0a915346",null),d=p.exports,b={name:"LoginForm",components:{AlertBox:d},methods:{login:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e.form.uname,n=e.form.pwd,e.$store.dispatch("login",{uname:r,pwd:n}).then((function(){return e.$router.push({name:"Dashboard"})})).catch((function(t){e.message=t,e.$refs["resp"].show(),e.form={uname:"",pwd:""}}));case 3:case"end":return t.stop()}}),t)})))()}},data:function(){return{show:!0,form:{uname:"",pwd:""},message:""}}},w=b,g=(r("013b"),Object(f["a"])(w,o,s,!1,null,null,null)),h=g.exports,v=r("349f"),_={name:"Welcome",components:{LoginForm:h,RegisterForm:v["a"]}},x=_,k=Object(f["a"])(x,n,a,!1,null,null,null);t["default"]=k.exports}}]);
//# sourceMappingURL=chunk-0b889c17.356db34c.js.map