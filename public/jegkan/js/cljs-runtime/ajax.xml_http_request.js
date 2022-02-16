goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__56811 = e.target.readyState;
var fexpr__56810 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__56810.cljs$core$IFn$_invoke$arity$1 ? fexpr__56810.cljs$core$IFn$_invoke$arity$1(G__56811) : fexpr__56810.call(null,G__56811));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
ajax.xml_http_request.goog$module$goog$object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__56813,handler){
var map__56814 = p__56813;
var map__56814__$1 = cljs.core.__destructure_map(map__56814);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56814__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56814__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56814__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__56812_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__56812_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___56835 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___56835)){
var response_type_56836 = temp__5753__auto___56835;
(this$__$1.responseType = cljs.core.name(response_type_56836));
} else {
}

var seq__56816_56837 = cljs.core.seq(headers);
var chunk__56817_56838 = null;
var count__56818_56839 = (0);
var i__56819_56840 = (0);
while(true){
if((i__56819_56840 < count__56818_56839)){
var vec__56826_56841 = chunk__56817_56838.cljs$core$IIndexed$_nth$arity$2(null,i__56819_56840);
var k_56842 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56826_56841,(0),null);
var v_56843 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56826_56841,(1),null);
this$__$1.setRequestHeader(k_56842,v_56843);


var G__56844 = seq__56816_56837;
var G__56845 = chunk__56817_56838;
var G__56846 = count__56818_56839;
var G__56847 = (i__56819_56840 + (1));
seq__56816_56837 = G__56844;
chunk__56817_56838 = G__56845;
count__56818_56839 = G__56846;
i__56819_56840 = G__56847;
continue;
} else {
var temp__5753__auto___56848 = cljs.core.seq(seq__56816_56837);
if(temp__5753__auto___56848){
var seq__56816_56849__$1 = temp__5753__auto___56848;
if(cljs.core.chunked_seq_QMARK_(seq__56816_56849__$1)){
var c__4679__auto___56850 = cljs.core.chunk_first(seq__56816_56849__$1);
var G__56851 = cljs.core.chunk_rest(seq__56816_56849__$1);
var G__56852 = c__4679__auto___56850;
var G__56853 = cljs.core.count(c__4679__auto___56850);
var G__56854 = (0);
seq__56816_56837 = G__56851;
chunk__56817_56838 = G__56852;
count__56818_56839 = G__56853;
i__56819_56840 = G__56854;
continue;
} else {
var vec__56832_56855 = cljs.core.first(seq__56816_56849__$1);
var k_56856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56832_56855,(0),null);
var v_56857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56832_56855,(1),null);
this$__$1.setRequestHeader(k_56856,v_56857);


var G__56858 = cljs.core.next(seq__56816_56849__$1);
var G__56859 = null;
var G__56860 = (0);
var G__56861 = (0);
seq__56816_56837 = G__56858;
chunk__56817_56838 = G__56859;
count__56818_56839 = G__56860;
i__56819_56840 = G__56861;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4253__auto__ = body;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
