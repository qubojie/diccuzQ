(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{537:function(e,t){e.exports={data:function(){return{title:"‎"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},head:function(){return{title:"‎"!==this.title&&this.forums&&this.forums.set_site&&this.forums.set_site.site_name?this.title+" - "+this.forums.set_site.site_name:this.title}}}},550:function(e,t,r){},602:function(e,t,r){"use strict";var o=r(550);r.n(o).a},604:function(e,t,r){"use strict";r.r(t);var o={name:"RegAgreement",props:{check:{type:Boolean,default:!0}},data:function(){return{forums:"",popTitle:"",popDetail:"",showagree:!1,checked:!0}},mounted:function(){this.getAttachMent()},methods:{getAttachMent:function(){var e=this;this.$store.dispatch("jv/get",["forum",{params:{include:"users","filter[tag]":"agreement"}}]).then((function(t){e.forums=t}))},open:function(e){this.$router.push("/user/agreement?type=".concat(e))},rcheck:function(){this.$emit("check",this.checked)}}},n=(r(602),r(12)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.forums.agreement&&e.forums.agreement.register||e.forums.agreement&&e.forums.agreement.privacy?r("div",{staticClass:"reg-agreement"},[e.check?r("el-checkbox",{on:{change:e.rcheck},model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}}):e._e(),e._v(" "),r("span",{staticClass:"agree"},[e._v(e._s(e.$t("permission.user.agreement")))]),e._v(" "),e.forums.agreement&&e.forums.agreement.register?r("span",{staticClass:"regagree",on:{click:function(t){return e.open("register")}}},[e._v(e._s("《"+this.$t("permission.user.agreementRegister")+"》")+"\n  ")]):e._e(),e._v(" "),e.forums.agreement&&e.forums.agreement.privacy?r("span",{staticClass:"regagree",on:{click:function(t){return e.open("privacy")}}},[e._v(e._s("《"+this.$t("permission.user.agreementPrivacy")+"》")+"\n  ")]):e._e()],1):e._e()}),[],!1,null,"4d9c6d12",null);t.default=component.exports},735:function(e,t,r){},886:function(e,t,r){"use strict";var o=r(735);r.n(o).a},970:function(e,t,r){"use strict";r.r(t);var head=r(537),o=r.n(head),n=r(536),c=r.n(n),d=r(177),h=r.n(d),l=r(601),m={name:"Register",mixins:[o.a,c.a,l,h.a],data:function(){return{title:this.$t("profile.register"),userName:"",passWord:"",repeatPassWord:"",activeName:"0",Reason:"",validate:!1,code:"",register_captcha:!1,site_mode:"",isPaid:!1,captcha:null,ticket:"",randstr:"",ischeck:!0,loading:!1,passerror:!1,preurl:"/"}},computed:{forums:function(){return this.$store.state.site.info.attributes||{}}},mounted:function(){var e=this.$route.query,t=e.validate,code=e.code,r=e.preurl;r&&(this.preurl=r),t&&(this.validate=JSON.parse(t)),"undefined"!==code&&(this.code=code),this.forums&&this.forums.set_reg&&this.forums.set_reg.register_captcha&&(this.register_captcha=this.forums.set_reg.register_captcha),this.forums&&this.forums.set_site&&this.forums.set_site.site_mode&&(this.site_mode=this.forums.set_site.site_mode),this.forums&&this.forums.set_reg&&(this.validate=this.forums.set_reg.register_validate)},methods:{notsame:function(){this.passWord!==this.repeatPassWord?this.passerror=!0:this.passerror=!1},check:function(e){this.ischeck=e},register:function(){""===this.userName?this.$message.error("用户名不能为空"):""===this.passWord?this.$message.error("密码不能为空"):this.passWord!==this.repeatPassWord?(this.$message.error("两次输入的密码不一致,请重新输入"),this.passWord="",this.repeatPassWord="",this.passerror=!0):this.ischeck?this.forums&&this.forums.set_reg&&this.forums.set_reg.register_captcha?this.validate&&""===this.Reason?this.$message.error("注册原因不能为空"):this.toTCaptcha():this.registerClick():this.$message.error("请同意协议")},toTCaptcha:function(){var e=this;this.forums&&this.forums.qcloud&&this.forums.qcloud.qcloud_captcha_app_id&&(this.captcha=new TencentCaptcha(this.forums.qcloud.qcloud_captcha_app_id,(function(t){0===t.ret&&(e.ticket=t.ticket,e.randstr=t.randstr,e.registerClick())})),this.captcha.show())},registerClick:function(){var e=this;this.loading=!0;var t={data:{attributes:{username:this.userName,password:this.passWord}}};this.register_captcha&&this.validate&&(t.data.attributes.register_reason=this.Reason,t.data.attributes.captcha_ticket=this.ticket,t.data.attributes.captcha_rand_str=this.randstr),this.validate&&(t.data.attributes.register_reason=this.Reason),this.register_captcha&&(t.data.attributes.captcha_ticket=this.ticket,t.data.attributes.captcha_rand_str=this.randstr),""!==this.code&&(t.data.attributes.code=this.code),this.$store.dispatch("session/h5Register",t).then((function(t){if(e.loading=!1,t&&t.data&&t.data.data&&t.data.data.id&&e.logind(t),t&&t.data&&t.data.errors&&"register_validate"===t.data.errors[0].code)e.$router.push("/user/warning?username=".concat(e.userName));else if(t&&t.data&&t.data.errors&&"content_banned"===t.data.errors[0].code)e.$message.error("当前用户名包含禁止注册的词语");else if(t&&t.data&&t.data.errors&&t.data.errors[0]){var r=t.data.errors[0].detail?t.data.errors[0].detail[0]:t.data.errors[0].code,o=t.data.errors[0].detail?t.data.errors[0].detail[0]:e.$t("core.".concat(r));e.$message.error(o)}})).catch((function(t){e.loading=!1,e.passWord="",e.repeatPassWord=""}))},jump2Login:function(){this.$router.push("/user/login?&validate=".concat(this.validate,"&code=").concat(this.code,"&preurl=").concat(this.preurl))}}},f=(r(886),r(12)),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.forums?r("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"register"},[r("el-tabs",{staticClass:"register-select",attrs:{type:"border-card"},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"用户名注册",name:"0"}},[r("form",[r("div",[r("span",{staticClass:"title"},[e._v(e._s(e.$t("profile.username")))]),e._v(" "),r("el-input",{staticClass:"reg-input",attrs:{placeholder:e.$t("user.username")},model:{value:e.userName,callback:function(t){e.userName=t},expression:"userName"}})],1),e._v(" "),r("div",[r("span",{staticClass:"title2"},[e._v(e._s(e.$t("user.passwd")))]),e._v(" "),r("el-input",{staticClass:"reg-input",attrs:{placeholder:e.$t("user.password"),type:"password","show-password":""},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}})],1),e._v(" "),r("div",{class:e.passerror?"rep passerr":"rep"},[r("span",{staticClass:"title2"},[e._v(e._s(e.$t("user.repeatpasswd")))]),e._v(" "),r("el-input",{class:e.passerror?"reg-input inputerr":"reg-input",attrs:{placeholder:e.$t("user.password"),type:"password","show-password":""},on:{input:e.notsame},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}},model:{value:e.repeatPassWord,callback:function(t){e.repeatPassWord=t},expression:"repeatPassWord"}}),e._v(" "),e.passerror?r("div",{staticClass:"passerror"},[e._v(e._s(e.$t("modify.reenter")))]):e._e()],1),e._v(" "),r("div",{staticClass:"agreement"},[r("reg-agreement",{on:{check:e.check}})],1),e._v(" "),r("el-button",{staticClass:"r-button",attrs:{type:"primary"},on:{click:e.register}},[e._v(e._s(e.$t("profile.registernext")))]),e._v(" "),r("div",{staticClass:"tologin"},[r("span",{on:{click:e.jump2Login}},[e._v(e._s(e.$t("user.exist"))),r("nuxt-link",{attrs:{to:"/user/login"}},[e._v(e._s(e.$t("user.login")))])],1)])],1)])],1)],1):e._e()}),[],!1,null,"3f26fe2a",null);t.default=component.exports;installComponents(component,{RegAgreement:r(604).default})}}]);