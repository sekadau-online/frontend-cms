(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{395:function(t,e,r){"use strict";r.r(e);var n=r(23),c=(r(59),{data:function(){return{sliders:[]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/api/web/sliders").then((function(e){t.sliders=e.data.data}));case 2:case"end":return e.stop()}}),e)})))()}}),o=r(35),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",[e("b-container",{staticClass:"mt-3"},[e("b-carousel",{staticStyle:{"text-shadow":"0px 0px 2px #000"},attrs:{id:"carousel-fade",fade:"",indicators:"","img-width":"1024","img-height":"300"}},t._l(t.sliders,(function(t){return e("b-carousel-slide",{key:t.id,attrs:{"img-src":t.image}})})),1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);