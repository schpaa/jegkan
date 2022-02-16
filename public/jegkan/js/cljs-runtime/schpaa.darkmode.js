goog.provide('schpaa.darkmode');
if((typeof schpaa !== 'undefined') && (typeof schpaa.darkmode !== 'undefined') && (typeof schpaa.darkmode.listeners_STAR_ !== 'undefined')){
} else {
schpaa.darkmode.listeners_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
schpaa.darkmode.stop_listener_BANG_ = (function schpaa$darkmode$stop_listener_BANG_(event_type,id,k){
var temp__5753__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(schpaa.darkmode.listeners_STAR_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,k], null));
if(cljs.core.truth_(temp__5753__auto__)){
var key = temp__5753__auto__;
goog.events.unlistenByKey(key);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(schpaa.darkmode.listeners_STAR_,cljs.core.update,event_type,(function (p1__56032_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56032_SHARP_,k);
}));
} else {
return null;
}
});
schpaa.darkmode.setup_listener_BANG_ = (function schpaa$darkmode$setup_listener_BANG_(event_type,callback,source,k){
if((!((callback == null)))){
} else {
throw (new Error("Assert failed: (some? callback)"));
}

if(cljs.core.fn_QMARK_(callback)){
} else {
throw (new Error("Assert failed: (fn? callback)"));
}

var key = goog.events.listen(source,event_type,((cljs.core.fn_QMARK_(callback))?(function (){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(source) : callback.call(null,source));
}):(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [callback,source], null));
})));
if(cljs.core.truth_(source)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(schpaa.darkmode.listeners_STAR_,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_type,k], null),key);
} else {
return null;
}
});
schpaa.darkmode.clear_all_listeners_BANG_ = (function schpaa$darkmode$clear_all_listeners_BANG_(handler){
return schpaa.darkmode.stop_listener_BANG_(goog.events.EventType.CHANGE,handler,"screenmode");
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"os-screenmode-changed","os-screenmode-changed",937645287),(function (db__$1,p__56033){
var vec__56034 = p__56033;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56034,(0),null);
var arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56034,(1),null);
cljs.core.tap_GT_(new cljs.core.Keyword(null,"os-screenmode-changed","os-screenmode-changed",937645287));

return cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"system-screenmode-setting","system-screenmode-setting",-955557248),arg),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"pref-screenmode","pref-screenmode",-902099247)], null),arg);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"listen-to-screenmode-change","listen-to-screenmode-change",1112747773),(function (p__56037){
var map__56038 = p__56037;
var map__56038__$1 = cljs.core.__destructure_map(map__56038);
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56038__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56038__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var k = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56038__$1,new cljs.core.Keyword(null,"k","k",-2146297393));
return schpaa.darkmode.setup_listener_BANG_(goog.events.EventType.CHANGE,dispatch,source,k);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","user-screenmode","app/user-screenmode",-358157672),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1){
if(cljs.core.truth_(cljs.core.deref(schpaa.state.listen(new cljs.core.Keyword("app","dark-mode","app/dark-mode",491585094))))){
return new cljs.core.Keyword(null,"dark","dark",1818973999);
} else {
return new cljs.core.Keyword(null,"light","light",1918998747);
}
})], 0));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","setup-handlers","app/setup-handlers",-1727688477),(function (p__56040,_){
var map__56041 = p__56040;
var map__56041__$1 = cljs.core.__destructure_map(map__56041);
var db__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56041__$1,new cljs.core.Keyword(null,"db","db",993250759));
var darkmode_handler = window.matchMedia("(prefers-color-scheme: dark)");
schpaa.darkmode.clear_all_listeners_BANG_(darkmode_handler);

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"system-screenmode-setting","system-screenmode-setting",-955557248),(cljs.core.truth_(darkmode_handler.matches)?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747))),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"listen-to-screenmode-change","listen-to-screenmode-change",1112747773),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"source","source",-433931539),darkmode_handler,new cljs.core.Keyword(null,"k","k",-2146297393),"screenmode",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (p1__56039_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"os-screenmode-changed","os-screenmode-changed",937645287),(cljs.core.truth_(p1__56039_SHARP_.matches)?new cljs.core.Keyword(null,"dark","dark",1818973999):new cljs.core.Keyword(null,"light","light",1918998747))], null));
})], null)], null)], null)], null);
}));

//# sourceMappingURL=schpaa.darkmode.js.map
