(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{412:function(t,e,n){"use strict";n.r(e);n(11),n(89);var r=n(23),o=(n(59),n(14),{layout:"admin",head:function(){return{title:"Users - Marimoli.com - Portal Informasi ini didukung oleh PT. Borneo Global Persada"}},data:function(){return{fields:[{label:"Nama User",key:"name"},{label:"Email",key:"email"},{label:"Actions",key:"actions",tdClass:"text-center"}],search:""}},watchQuery:["q","page"],asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o,c,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$axios,r=t.query,o=r.page?parseInt(r.page):"",c=r.q?r.q:"",e.next=5,n.$get("/api/admin/users?q=".concat(c,"&page=").concat(o));case 5:return l=e.sent,e.abrupt("return",{users:l.data.data,pagination:l.data});case 7:case"end":return e.stop()}}),e)})))()},methods:{changePage:function(t){this.$router.push({path:this.$route.path,query:{q:this.$route.query.q,page:t}})},searchData:function(){this.$router.push({path:this.$route.path,query:{q:this.search}})},deleteUser:function(t){var e=this;this.$swal.fire({title:"APAKAH ANDA YAKIN ?",text:"INGIN MENGHAPUS DATA INI !",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"YA, HAPUS!",cancelButtonText:"TIDAK"}).then((function(n){n.isConfirmed&&e.$axios.delete("/api/admin/users/".concat(t)).then((function(){e.$nuxt.refresh(),e.$swal.fire({title:"BERHASIL!",text:"Data Berhasil Dihapus!",icon:"success",showConfirmButton:!1,timer:2e3})}))}))}}}),c=n(35),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"content-wrapper mb-5"},[t._m(0),t._v(" "),e("section",{staticClass:"content"},[e("div",{staticClass:"card card-outline card-info"},[t._m(1),t._v(" "),e("div",{staticClass:"card-body"},[e("div",{staticClass:"form-group"},[e("div",{staticClass:"input-group mb-3"},[e("div",{staticClass:"input-group-prepend"},[e("nuxt-link",{staticClass:"btn btn-info btn-sm",staticStyle:{"padding-top":"8px"},attrs:{to:{name:"admin-user-create"}}},[e("i",{staticClass:"fa fa-plus-circle"}),t._v(" TAMBAH")])],1),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",placeholder:"cari berdasarkan nama user"},domProps:{value:t.search},on:{keypress:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData.apply(null,arguments)},input:function(e){e.target.composing||(t.search=e.target.value)}}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-info",on:{click:t.searchData}},[e("i",{staticClass:"fa fa-search"}),t._v("\n                CARI\n              ")])])])]),t._v(" "),e("b-table",{attrs:{striped:"",bordered:"",hover:"",items:t.users,fields:t.fields,"show-empty":""},scopedSlots:t._u([{key:"cell(actions)",fn:function(n){return[e("b-button",{attrs:{to:{name:"admin-user-edit-id",params:{id:n.item.id}},variant:"warning",size:"sm"}},[t._v("EDIT")]),t._v(" "),e("b-button",{attrs:{variant:"danger",size:"sm"},on:{click:function(e){return t.deleteUser(n.item.id)}}},[t._v("DELETE")])]}}])}),t._v(" "),e("b-pagination",{staticClass:"mt-3",attrs:{"total-rows":t.pagination.total,"per-page":t.pagination.per_page,align:"right"},on:{change:t.changePage},model:{value:t.pagination.current_page,callback:function(e){t.$set(t.pagination,"current_page",e)},expression:"pagination.current_page"}})],1)])])])}),[function(){var t=this._self._c;return t("section",{staticClass:"content-header"},[t("div",{staticClass:"container-fluid"})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-header"},[e("h3",{staticClass:"card-title"},[e("i",{staticClass:"nav-icon fas fa-users"}),t._v(" USERS")]),t._v(" "),e("div",{staticClass:"card-tools"},[e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"collapse",title:"Collapse"}},[e("i",{staticClass:"fas fa-minus"})]),t._v(" "),e("button",{staticClass:"btn btn-tool",attrs:{type:"button","data-card-widget":"remove",title:"Remove"}},[e("i",{staticClass:"fas fa-times"})])])])}],!1,null,null,null);e.default=component.exports}}]);