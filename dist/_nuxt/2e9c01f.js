(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{407:function(t,n,o){"use strict";o.r(n);var c=o(23),e=(o(59),{layout:"admin",head:function(){return{title:"Dashboard - Marimoli.com - Portal Informasi ini didukung oleh PT. Borneo Global Persada"}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function n(){var o,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o=t.$axios,n.next=3,o.$get("/api/admin/dashboard");case 3:return c=n.sent,n.abrupt("return",{users:c.data.users,posts:c.data.posts,categories:c.data.categories,comments:c.data.comments});case 5:case"end":return n.stop()}}),n)})))()}}),r=e,l=o(35),component=Object(l.a)(r,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"content-wrapper"},[t._m(0),t._v(" "),n("section",{staticClass:"content"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3 col-sm-6 col-12"},[n("div",{staticClass:"info-box"},[t._m(1),t._v(" "),n("div",{staticClass:"info-box-content"},[n("span",{staticClass:"info-box-text"},[t._v("USERS")]),t._v(" "),t._m(2),t._v(" "),n("span",{staticClass:"info-box-number"},[t._v(t._s(t.users))])])])]),t._v(" "),n("div",{staticClass:"col-md-3 col-sm-6 col-12"},[n("div",{staticClass:"info-box"},[t._m(3),t._v(" "),n("div",{staticClass:"info-box-content"},[n("span",{staticClass:"info-box-text"},[t._v("CATEGORIES")]),t._v(" "),t._m(4),t._v(" "),n("span",{staticClass:"info-box-number"},[t._v(t._s(t.categories))])])])]),t._v(" "),n("div",{staticClass:"col-md-3 col-sm-6 col-12"},[n("div",{staticClass:"info-box"},[t._m(5),t._v(" "),n("div",{staticClass:"info-box-content"},[n("span",{staticClass:"info-box-text"},[t._v("POSTS")]),t._v(" "),t._m(6),t._v(" "),n("span",{staticClass:"info-box-number"},[t._v(t._s(t.posts))])])])]),t._v(" "),n("div",{staticClass:"col-md-3 col-sm-6 col-12"},[n("div",{staticClass:"info-box"},[t._m(7),t._v(" "),n("div",{staticClass:"info-box-content"},[n("span",{staticClass:"info-box-text"},[t._v("COMMENTS")]),t._v(" "),t._m(8),t._v(" "),n("span",{staticClass:"info-box-number"},[t._v(t._s(t.comments))])])])])])])])}),[function(){var t=this._self._c;return t("section",{staticClass:"content-header"},[t("div",{staticClass:"container-fluid"})])},function(){var t=this._self._c;return t("span",{staticClass:"info-box-icon bg-info"},[t("i",{staticClass:"fa fa-users"})])},function(){var t=this._self._c;return t("span",[t("hr")])},function(){var t=this._self._c;return t("span",{staticClass:"info-box-icon bg-success"},[t("i",{staticClass:"fa fa-folder"})])},function(){var t=this._self._c;return t("span",[t("hr")])},function(){var t=this._self._c;return t("span",{staticClass:"info-box-icon bg-primary"},[t("i",{staticClass:"fa fa-book-open"})])},function(){var t=this._self._c;return t("span",[t("hr")])},function(){var t=this._self._c;return t("span",{staticClass:"info-box-icon bg-danger"},[t("i",{staticClass:"fa fa-comments"})])},function(){var t=this._self._c;return t("span",[t("hr")])}],!1,null,null,null);n.default=component.exports}}]);