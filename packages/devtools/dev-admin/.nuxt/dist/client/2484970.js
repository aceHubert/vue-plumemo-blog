(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{773:function(t,e,n){"use strict";n.r(e);var r=n(244),l=n(786),c={name:"ArticleSearch",props:{title:{type:String,default:""},status:{type:Number,default:null},createTime:{type:Number,default:null}},data:function(){return{advanced:!1,queryParam:{title:this.title,status:this.status,createTime:this.createTime}}},computed:{statusOptions:function(){return[{value:null,label:this.$t("article.status.all")},{value:l.a.published,label:this.$t("article.status.published")},{value:l.a.draft,label:this.$t("article.status.draft")}]}},methods:{toggleAdvanced:function(){this.advanced=!this.advanced},dateChange:function(t,e){this.queryParam.createTime=""!==e?new Date(e[0]).getTime():null},handleReset:function(){this.queryParam={title:this.title,status:this.status,createTime:this.createTime}},handlerSearch:function(){this.$emit("search",this.queryParam)}}},o=n(23),d=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"table-page-search-wrapper"},[n("a-form",{attrs:{layout:"inline"}},[n("a-row",{attrs:{gutter:48}},[n("a-col",{attrs:{md:8,sm:24}},[n("a-form-item",{attrs:{label:t.$t("article.search.title")}},[n("a-input",{attrs:{placeholder:t.$t("article.search.titlePlaceholder")},model:{value:t.queryParam.title,callback:function(e){t.$set(t.queryParam,"title",e)},expression:"queryParam.title"}})],1)],1),t._v(" "),n("a-col",{attrs:{md:8,sm:24}},[n("a-form-item",{attrs:{label:t.$t("article.search.status")}},[n("a-select",{attrs:{placeholder:t.$t("article.search.statusPlaceholder")},model:{value:t.queryParam.status,callback:function(e){t.$set(t.queryParam,"status",e)},expression:"queryParam.status"}},t._l(t.statusOptions,(function(option){return n("a-select-option",{key:option.value,attrs:{value:option.value}},[t._v(t._s(option.label))])})),1)],1)],1),t._v(" "),[n("a-col",{attrs:{md:8,sm:24}})],t._v(" "),n("a-col",{attrs:{md:t.advanced?24:8,sm:24}},[n("span",{staticClass:"table-page-search-submitButtons",style:t.advanced&&{float:"right",overflow:"hidden"}||{}},[n("a-button",{attrs:{type:"primary"},on:{click:t.handlerSearch}},[t._v(t._s(t.$t("common.btn.search")))]),t._v(" "),n("a-button",{staticStyle:{"margin-left":"8px"},on:{click:t.handleReset}},[t._v(t._s(t.$t("common.btn.reset")))]),t._v(" "),n("a",{staticStyle:{"margin-left":"8px"},on:{click:t.toggleAdvanced}},[t._v("\n            "+t._s(t.$t("common.btn."+(t.advanced?"collapse":"expand")))+"\n            "),n("a-icon",{attrs:{type:t.advanced?"up":"down"}})],1)],1)])],2)],1)],1)}),[],!1,null,null,null).exports,f=n(50),h=n(787),m={name:"ArticleIndex",meta:{keepAlive:!0},components:{STable:r.e,Ellipsis:r.a,SearchForm:d},filters:h.a,data:function(){var t=this;return{queryParam:{},options:{alert:{show:!0,clear:function(){t.selectedRowKeys=[]}},rowSelection:{selectedRowKeys:this.selectedRowKeys,onChange:this.onSelectChange}},columns:h.c.columns}},methods:{i18nRender:function(t){return this.$i18n.t("".concat(t))},loadData:function(t){return f.a.getList(Object.assign(t,this.queryParam))},refreshTable:function(){this.$refs.table.refresh()},handleCreate:function(){this.$router.push({name:"articles-create"})},handleEdit:function(t){this.$router.push({name:"articles-id",params:{id:t.id}})},handleSearch:function(t){this.queryParam=t,this.refreshTable()},handleModifyStatus:function(t,e){var n=this;f.a.updateStatus(t.id,e).then((function(){n.$notification.success({message:"更新状态成功"}),n.$refs.table.refresh()})).catch((function(){n.$notification.error({message:"更新失败，请稍后重试"})}))},handleDelete:function(t){var e=this;f.a.delete(t.id).then((function(){e.$notification.success({message:"删除成功"}),e.$refs.table.refresh()})).catch((function(){e.$notification.error({message:"删除失败，请稍后重试"})}))}}},v=(n(792),Object(o.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a-card",{attrs:{bordered:!1}},[n("SearchForm",{ref:"searchForm",on:{search:t.handleSearch}}),t._v(" "),n("STable",{ref:"table",attrs:{size:"small",rowKey:"id",scroll:{x:1300},columns:t.columns,data:t.loadData,alert:t.options.alert,rowSelection:t.options.rowSelection,i18nRender:t.i18nRender,showPagination:"auto"},scopedSlots:t._u([{key:"titles",fn:function(text){return[n("ellipsis",{attrs:{length:15,tooltip:""}},[t._v(t._s(text))])]}},{key:"summary",fn:function(text){return[n("ellipsis",{attrs:{length:10,tooltip:""}},[t._v(t._s(text))])]}},{key:"status",fn:function(text){return[n("a-badge",{attrs:{status:t._f("statusTypeFilter")(text),text:t._f("statusFilter")(text,t.i18nRender)}})]}},{key:"createTime",fn:function(text){return[t._v("\n      "+t._s(t._f("dateFormat")(text))+"\n    ")]}},{key:"actions",fn:function(text,e){return[n("a",{on:{click:function(n){return t.handleEdit(e)}}},[t._v(t._s(t.$t("article.btn.edit")))]),t._v(" "),n("a-divider",{attrs:{type:"vertical"}}),t._v(" "),1===e.status?n("a",{on:{click:function(n){return t.handleModifyStatus(e,2)}}},[t._v(t._s(t.$t("article.btn.publish")))]):2===e.status?n("a",{on:{click:function(n){return t.handleModifyStatus(e,1)}}},[t._v(t._s(t.$t("article.btn.draft")))]):t._e(),t._v(" "),n("a-divider",{attrs:{type:"vertical"}}),t._v(" "),n("a-popconfirm",{attrs:{title:t.$t("article.dialog.delete.content"),okText:t.$t("article.dialog.delete.okBtn"),cancelText:t.$t("article.dialog.delete.cancelBtn")},on:{confirm:function(n){return t.handleDelete(e)}}},[n("a",{attrs:{href:"#none"}},[t._v(t._s(t.$t("article.btn.delete")))])])]}}])})],1)}),[],!1,null,"bf58c678",null));e.default=v.exports},786:function(t,e,n){"use strict";var r;n.d(e,"a",(function(){return r})),function(t){t[t.draft=1]="draft",t[t.published=2]="published"}(r||(r={}))},787:function(t,e,n){"use strict";n.d(e,"c",(function(){return table})),n.d(e,"a",(function(){return l})),n.d(e,"b",(function(){return c}));var r=n(786),table={columns:[{title:"article.column.title",align:"left",dataIndex:"title",scopedSlots:{customRender:"titles"}},{title:"article.column.summary",dataIndex:"summary",align:"left",scopedSlots:{customRender:"summary"}},{title:"article.column.status",dataIndex:"status",align:"left",scopedSlots:{customRender:"status"}},{title:"article.column.views",align:"left",dataIndex:"views",needTotal:!0},{title:"article.column.createTime",align:"left",dataIndex:"createTime",width:"250px",scopedSlots:{customRender:"createTime"}},{title:"article.column.actions",dataIndex:"actions",align:"left",fixed:"right",width:"250px",scopedSlots:{customRender:"actions"}}]},l={statusFilter:function(t,e){return e("article.status.".concat(r.a[t]))},statusTypeFilter:function(t){var e;return function(t){t[t.error=r.a.draft]="error",t[t.success=r.a.published]="success"}(e||(e={})),e[t]}},c={bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!1,mark:!0,superscript:!1,subscript:!1,quote:!0,ol:!0,ul:!0,link:!0,imagelink:!0,code:!0,table:!0,fullscreen:!1,readmodel:!1,help:!0,undo:!0,redo:!0,trash:!0,save:!0,navigation:!0,subfield:!0,preview:!0,htmlcode:!0}},788:function(t,e,n){},792:function(t,e,n){"use strict";n(788)}}]);