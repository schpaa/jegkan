goog.provide('accountant.core');
accountant.core.transformer_create_url = (function accountant$core$transformer_create_url(token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
});
accountant.core.transformer_retrieve_token = (function accountant$core$transformer_retrieve_token(path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.hash)].join('');
});
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.history !== 'undefined')){
} else {
accountant.core.history = (function (){var transformer = (new goog.history.Html5History.TokenTransformer());
(transformer.retrieveToken = accountant.core.transformer_retrieve_token);

(transformer.createUrl = accountant.core.transformer_create_url);

return (new goog.history.Html5History(window,transformer));
})();
}
accountant.core.dispatch_on_navigate = (function accountant$core$dispatch_on_navigate(history,nav_handler){
return goog.events.listen(history,goog.history.EventType.NAVIGATE,(function (e){
var token = e.token;
return (nav_handler.cljs$core$IFn$_invoke$arity$1 ? nav_handler.cljs$core$IFn$_invoke$arity$1(token) : nav_handler.call(null,token));
}));
});
/**
 * Given a DOM node, if it is an element node, return its href attribute.
 *   Otherwise, return nil.
 */
accountant.core.get_href_attribute = (function accountant$core$get_href_attribute(node){
if(cljs.core.truth_((function (){var and__4251__auto__ = node;
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.nodeType,Node.ELEMENT_NODE);
} else {
return and__4251__auto__;
}
})())){
return node.getAttribute("href");
} else {
return null;
}
});
/**
 * Given a DOM element that may or may not be a link, traverse up the DOM tree
 *   to see if any of its parents are links. If so, return the href content, if
 *   it does not have an explicit `data-trigger` attribute to signify a non-navigational
 *   link element.
 */
accountant.core.find_href_node = (function accountant$core$find_href_node(e){
while(true){
var href = accountant.core.get_href_attribute(e);
var attrs = e.attributes;
var navigation_link_QMARK_ = (function (){var and__4251__auto__ = href;
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = attrs;
if(cljs.core.truth_(and__4251__auto____$1)){
return cljs.core.not((attrs["data-trigger"]));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(navigation_link_QMARK_)){
return e;
} else {
var temp__5753__auto__ = e.parentNode;
if(cljs.core.truth_(temp__5753__auto__)){
var parent = temp__5753__auto__;
var G__56227 = parent;
e = G__56227;
continue;
} else {
return null;
}
}
break;
}
});
accountant.core.uri__GT_query = (function accountant$core$uri__GT_query(uri){
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return null;
} else {
return ["?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
accountant.core.uri__GT_fragment = (function accountant$core$uri__GT_fragment(uri){
var fragment = uri.getFragment();
if(cljs.core.empty_QMARK_(fragment)){
return null;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fragment)].join('');
}
});
/**
 * Create a click handler that blocks page reloads for known routes
 */
accountant.core.prevent_reload_on_known_path = (function accountant$core$prevent_reload_on_known_path(history,path_exists_QMARK_,reload_same_path_QMARK_){
return goog.events.listen(document,"click",(function (e){
var target = e.target;
var button = e.button;
var meta_key = e.metaKey;
var alt_key = e.altKey;
var ctrl_key = e.ctrlKey;
var shift_key = e.shiftKey;
var any_key = (function (){var or__4253__auto__ = meta_key;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = alt_key;
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = ctrl_key;
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
return shift_key;
}
}
}
})();
var href_node = accountant.core.find_href_node(target);
var href = (cljs.core.truth_(href_node)?href_node.href:null);
var link_target = (cljs.core.truth_(href_node)?href_node.target:null);
var uri = goog.Uri.parse(href);
var path = uri.getPath();
var query = accountant.core.uri__GT_query(uri);
var fragment = accountant.core.uri__GT_fragment(uri);
var relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),query,fragment].join('');
var title = target.title;
var host = uri.getDomain();
var port = uri.getPort();
var current_host = window.location.hostname;
var current_port = window.location.port;
var loc = window.location;
var current_relative_href = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.search),cljs.core.str.cljs$core$IFn$_invoke$arity$1(loc.hash)].join('');
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.not(any_key);
if(and__4251__auto__){
var and__4251__auto____$1 = (function (){var fexpr__56168 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["",null,"_self",null], null), null);
return (fexpr__56168.cljs$core$IFn$_invoke$arity$1 ? fexpr__56168.cljs$core$IFn$_invoke$arity$1(link_target) : fexpr__56168.call(null,link_target));
})();
if(cljs.core.truth_(and__4251__auto____$1)){
var and__4251__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(button,(0));
if(and__4251__auto____$2){
var and__4251__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(host,current_host);
if(and__4251__auto____$3){
var and__4251__auto____$4 = ((cljs.core.not(port)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(port),cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_port))));
if(and__4251__auto____$4){
return (path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1 ? path_exists_QMARK_.cljs$core$IFn$_invoke$arity$1(path) : path_exists_QMARK_.call(null,path));
} else {
return and__4251__auto____$4;
}
} else {
return and__4251__auto____$3;
}
} else {
return and__4251__auto____$2;
}
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
})())){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_relative_href,relative_href)){
history.setToken(relative_href,title);
} else {
}

e.preventDefault();

if(cljs.core.truth_(reload_same_path_QMARK_)){
return goog.events.dispatchEvent(history,(new goog.history.Event(path,true)));
} else {
return null;
}
} else {
return null;
}
}));
});
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.nav_handler !== 'undefined')){
} else {
accountant.core.nav_handler = null;
}
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.path_exists_QMARK_ !== 'undefined')){
} else {
accountant.core.path_exists_QMARK_ = null;
}
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.document_click_handler_listener_key !== 'undefined')){
} else {
accountant.core.document_click_handler_listener_key = null;
}
if((typeof accountant !== 'undefined') && (typeof accountant.core !== 'undefined') && (typeof accountant.core.navigate_listener_key !== 'undefined')){
} else {
accountant.core.navigate_listener_key = null;
}
/**
 * Create and configure HTML5 history navigation.
 * 
 *   nav-handler: a fn of one argument, a path. Called when we've decided
 *   to navigate to another page. You'll want to make your app draw the
 *   new page here.
 * 
 *   path-exists?: a fn of one argument, a path. Return truthy if this path is handled by the SPA
 */
accountant.core.configure_navigation_BANG_ = (function accountant$core$configure_navigation_BANG_(p__56178){
var map__56179 = p__56178;
var map__56179__$1 = cljs.core.__destructure_map(map__56179);
var nav_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56179__$1,new cljs.core.Keyword(null,"nav-handler","nav-handler",2039495484));
var path_exists_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56179__$1,new cljs.core.Keyword(null,"path-exists?","path-exists?",1473384514));
var reload_same_path_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56179__$1,new cljs.core.Keyword(null,"reload-same-path?","reload-same-path?",1981904231));
accountant.core.history.setUseFragment(false);

accountant.core.history.setPathPrefix("");

accountant.core.history.setEnabled(true);

(accountant.core.nav_handler = nav_handler);

(accountant.core.path_exists_QMARK_ = path_exists_QMARK_);

(accountant.core.document_click_handler_listener_key = accountant.core.dispatch_on_navigate(accountant.core.history,nav_handler));

return (accountant.core.navigate_listener_key = accountant.core.prevent_reload_on_known_path(accountant.core.history,path_exists_QMARK_,reload_same_path_QMARK_));
});
/**
 * Teardown HTML5 history navigation.
 * 
 *   Undoes all of the stateful changes, including unlistening to events, that are setup as part of
 *   the call to `configure-navigation!`.
 */
accountant.core.unconfigure_navigation_BANG_ = (function accountant$core$unconfigure_navigation_BANG_(){
(accountant.core.nav_handler = null);

(accountant.core.path_exists_QMARK_ = null);

var seq__56185 = cljs.core.seq(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [accountant.core.document_click_handler_listener_key,accountant.core.navigate_listener_key], null));
var chunk__56186 = null;
var count__56187 = (0);
var i__56188 = (0);
while(true){
if((i__56188 < count__56187)){
var key = chunk__56186.cljs$core$IIndexed$_nth$arity$2(null,i__56188);
if(cljs.core.truth_(key)){
goog.events.unlistenByKey(key);
} else {
}


var G__56246 = seq__56185;
var G__56247 = chunk__56186;
var G__56248 = count__56187;
var G__56249 = (i__56188 + (1));
seq__56185 = G__56246;
chunk__56186 = G__56247;
count__56187 = G__56248;
i__56188 = G__56249;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56185);
if(temp__5753__auto__){
var seq__56185__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56185__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56185__$1);
var G__56252 = cljs.core.chunk_rest(seq__56185__$1);
var G__56253 = c__4679__auto__;
var G__56254 = cljs.core.count(c__4679__auto__);
var G__56255 = (0);
seq__56185 = G__56252;
chunk__56186 = G__56253;
count__56187 = G__56254;
i__56188 = G__56255;
continue;
} else {
var key = cljs.core.first(seq__56185__$1);
if(cljs.core.truth_(key)){
goog.events.unlistenByKey(key);
} else {
}


var G__56257 = cljs.core.next(seq__56185__$1);
var G__56258 = null;
var G__56259 = (0);
var G__56260 = (0);
seq__56185 = G__56257;
chunk__56186 = G__56258;
count__56187 = G__56259;
i__56188 = G__56260;
continue;
}
} else {
return null;
}
}
break;
}
});
accountant.core.map__GT_params = (function accountant$core$map__GT_params(query){
var params = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56212_SHARP_){
return cljs.core.name(p1__56212_SHARP_);
}),cljs.core.keys(query));
var values = cljs.core.vals(query);
var pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),cljs.core.interleave.cljs$core$IFn$_invoke$arity$2(params,values));
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56213_SHARP_){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("=",p1__56213_SHARP_);
}),pairs));
});
/**
 * add a browser history entry. updates window/location
 */
accountant.core.navigate_BANG_ = (function accountant$core$navigate_BANG_(var_args){
var G__56217 = arguments.length;
switch (G__56217) {
case 1:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (route){
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2(route,cljs.core.PersistentArrayMap.EMPTY);
}));

(accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (route,query){
if(cljs.core.truth_(accountant.core.nav_handler)){
var token = accountant.core.history.getToken();
var old_route = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(token,"?"));
var query_string = accountant.core.map__GT_params(cljs.core.reduce_kv((function (valid,k,v){
if(cljs.core.truth_(v)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(valid,k,v);
} else {
return valid;
}
}),cljs.core.PersistentArrayMap.EMPTY,query));
var with_params = ((cljs.core.empty_QMARK_(query_string))?route:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(route),"?",query_string].join(''));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_route,route)){
return accountant.core.history.replaceToken(with_params);
} else {
return accountant.core.history.setToken(with_params);
}
} else {
return console.error("can't navigate! until configure-navigation! called");
}
}));

(accountant.core.navigate_BANG_.cljs$lang$maxFixedArity = 2);

accountant.core.dispatch_current_BANG_ = (function accountant$core$dispatch_current_BANG_(){

var path = window.location.pathname;
var query = window.location.search;
var hash = window.location.hash;
if(cljs.core.truth_(accountant.core.nav_handler)){
var G__56222 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query),cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join('');
return (accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1 ? accountant.core.nav_handler.cljs$core$IFn$_invoke$arity$1(G__56222) : accountant.core.nav_handler.call(null,G__56222));
} else {
return console.error("can't dispatch-current until configure-navigation! called");
}
});

//# sourceMappingURL=accountant.core.js.map
