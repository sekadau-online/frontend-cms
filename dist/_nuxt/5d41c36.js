(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{418:function(t,e,r){"use strict";r.r(e);r(22);var n=r(23),o=(r(59),{layout:"admin",head:function(){return{title:"Tambah User - Marimoli.com - Portal Informasi ini didukung oleh PT. Borneo Global Persada"}},data:function(){return{user:{name:"",email:"",password:""},validation:[]}},methods:{storeUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("/api/admin/users",{name:t.user.name,email:t.user.email,password:t.user.password}).then((function(){t.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Disimpan!",icon:"success",showConfirmButton:!1,timer:2e3}),t.$router.push({name:"admin-user"})})).catch((function(e){t.validation=e.response.data}));case 2:case"end":return e.stop()}}),e)})))()}}}),l=r(35),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"card card-outline card-info"},[t._m(1),t._v(" "),e("div",{staticClass:"card-body"},[e("form",{on:{submit:function(e){return e.preventDefault(),t.storeUser.apply(null,arguments)}}},[e("div",{staticClass:"form-group"},[e("label",[t._v("NAMA USER")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Masukkan Nama User"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}}),t._v(" "),t.validation.name?e("div",{staticClass:"mt-2"},[e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(t.validation.name[0]))])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("ALAMAT EMAIL")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",placeholder:"Masukkan Alamat Email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),t.validation.email?e("div",{staticClass:"mt-2"},[e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(t.validation.email[0]))])],1):t._e()]),t._v(" "),e("div",{staticClass:"form-group"},[e("label",[t._v("PASSWORD")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",placeholder:"Masukkan Password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||t.$set(t.user,"password",e.target.value)}}}),t._v(" "),t.validation.password?e("div",{staticClass:"mt-2"},[e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v(t._s(t.validation.password[0]))])],1):t._e()]),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])])])}),[function(){var t=this._self._c;return t("section",{staticClass:"content-header"},[t("div",{staticClass:"container-fluid"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[e("i",{staticClass:"nav-icon fas fa-users"}),t._v(" TAMBAH USER")]),t._v(" "),e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse",title:"Collapse"}},[e("i",{staticClass:"fas fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"remove",title:"Remove"}},[e("i",{staticClass:"fas fa-times"})])])])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-info mr-1 btn-submit",attrs:{type:"submit"}},[t("i",{staticClass:"fa fa-paper-plane"}),this._v("\n            SIMPAN")])},function(){var t=this._self._c;return t("button",{staticClass:"btn btn-warning btn-reset",attrs:{type:"reset"}},[t("i",{staticClass:"fa fa-redo"}),this._v("\n            RESET")])}],!1,null,null,null);e.default=component.exports}}]);