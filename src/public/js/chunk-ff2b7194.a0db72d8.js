(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff2b7194"],{"0813":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("Reset Password")]),s("bForm",[s("bFormGroup",{attrs:{label:"New Password: ","label-for":"pwd"}},[s("bFormInput",{attrs:{type:"password",id:"pwd",placeholder:"Enter New password",required:""},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}})],1),s("bFormGroup",{attrs:{label:"Confirm New Password: ","label-for":"cpwd"}},[s("bFormInput",{attrs:{type:"password",id:"cpwd",placeholder:"Re enter New password",required:""},on:{keyup:function(e){return t.checkMatch()}},model:{value:t.cpwd,callback:function(e){t.cpwd=e},expression:"cpwd"}})],1),t.nomatch?s("small",{staticClass:"red"},[s("li",[t._v(" Passwords do not match ")])]):t._e(),s("hr"),s("bButton",{on:{click:function(e){return t.changePwd()}}},[t._v("Submit")])],1)],1)},o=[],a={name:"Reset",data:function(){return{pwd:"",cpwd:"",token:this.$route.params.token,nomatch:!1}},methods:{changePwd:function(){var t=this;this.pwd===this.cpwd&&""!=this.pwd?this.$store.dispatch("resetPassword",{token:this.token,pwd:this.pwd}).then((function(e){e&&t.$router.push({name:"Home"})})):(alert("Passwords do not match and cannot be empty"),this.pwd="",this.cpwd="")},checkMatch:function(){this.pwd!=this.cpwd?this.nomatch=!0:this.nomatch=!1}}},r=a,c=(s("b1e6"),s("2877")),d=Object(c["a"])(r,n,o,!1,null,"5cf8bfd9",null);e["default"]=d.exports},b1e6:function(t,e,s){"use strict";s("b6be")},b6be:function(t,e,s){}}]);
//# sourceMappingURL=chunk-ff2b7194.a0db72d8.js.map