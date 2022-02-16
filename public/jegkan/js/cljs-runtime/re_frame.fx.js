goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__53762 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__53763 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__53763);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___53924 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___53924)){
var new_db_53925 = temp__5753__auto___53924;
var fexpr__53770_53926 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53770_53926.cljs$core$IFn$_invoke$arity$1 ? fexpr__53770_53926.cljs$core$IFn$_invoke$arity$1(new_db_53925) : fexpr__53770_53926.call(null,new_db_53925));
} else {
}

var seq__53778 = cljs.core.seq(effects_without_db);
var chunk__53779 = null;
var count__53780 = (0);
var i__53781 = (0);
while(true){
if((i__53781 < count__53780)){
var vec__53805 = chunk__53779.cljs$core$IIndexed$_nth$arity$2(null,i__53781);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53805,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53805,(1),null);
var temp__5751__auto___53929 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___53929)){
var effect_fn_53930 = temp__5751__auto___53929;
(effect_fn_53930.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53930.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53930.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53931 = seq__53778;
var G__53932 = chunk__53779;
var G__53933 = count__53780;
var G__53934 = (i__53781 + (1));
seq__53778 = G__53931;
chunk__53779 = G__53932;
count__53780 = G__53933;
i__53781 = G__53934;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53778);
if(temp__5753__auto__){
var seq__53778__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53778__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53778__$1);
var G__53935 = cljs.core.chunk_rest(seq__53778__$1);
var G__53936 = c__4679__auto__;
var G__53937 = cljs.core.count(c__4679__auto__);
var G__53938 = (0);
seq__53778 = G__53935;
chunk__53779 = G__53936;
count__53780 = G__53937;
i__53781 = G__53938;
continue;
} else {
var vec__53813 = cljs.core.first(seq__53778__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53813,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53813,(1),null);
var temp__5751__auto___53939 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___53939)){
var effect_fn_53940 = temp__5751__auto___53939;
(effect_fn_53940.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53940.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53940.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53941 = cljs.core.next(seq__53778__$1);
var G__53942 = null;
var G__53943 = (0);
var G__53944 = (0);
seq__53778 = G__53941;
chunk__53779 = G__53942;
count__53780 = G__53943;
i__53781 = G__53944;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__53231__auto___53945 = re_frame.interop.now();
var duration__53232__auto___53946 = (end__53231__auto___53945 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__53232__auto___53946,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__53231__auto___53945);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__53762);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5753__auto___53947 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5753__auto___53947)){
var new_db_53948 = temp__5753__auto___53947;
var fexpr__53817_53949 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__53817_53949.cljs$core$IFn$_invoke$arity$1 ? fexpr__53817_53949.cljs$core$IFn$_invoke$arity$1(new_db_53948) : fexpr__53817_53949.call(null,new_db_53948));
} else {
}

var seq__53818 = cljs.core.seq(effects_without_db);
var chunk__53819 = null;
var count__53820 = (0);
var i__53821 = (0);
while(true){
if((i__53821 < count__53820)){
var vec__53832 = chunk__53819.cljs$core$IIndexed$_nth$arity$2(null,i__53821);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53832,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53832,(1),null);
var temp__5751__auto___53953 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___53953)){
var effect_fn_53954 = temp__5751__auto___53953;
(effect_fn_53954.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53954.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53954.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53956 = seq__53818;
var G__53957 = chunk__53819;
var G__53958 = count__53820;
var G__53959 = (i__53821 + (1));
seq__53818 = G__53956;
chunk__53819 = G__53957;
count__53820 = G__53958;
i__53821 = G__53959;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53818);
if(temp__5753__auto__){
var seq__53818__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53818__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53818__$1);
var G__53960 = cljs.core.chunk_rest(seq__53818__$1);
var G__53961 = c__4679__auto__;
var G__53962 = cljs.core.count(c__4679__auto__);
var G__53963 = (0);
seq__53818 = G__53960;
chunk__53819 = G__53961;
count__53820 = G__53962;
i__53821 = G__53963;
continue;
} else {
var vec__53839 = cljs.core.first(seq__53818__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53839,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53839,(1),null);
var temp__5751__auto___53964 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___53964)){
var effect_fn_53965 = temp__5751__auto___53964;
(effect_fn_53965.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53965.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53965.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__53966 = cljs.core.next(seq__53818__$1);
var G__53967 = null;
var G__53968 = (0);
var G__53969 = (0);
seq__53818 = G__53966;
chunk__53819 = G__53967;
count__53820 = G__53968;
i__53821 = G__53969;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__53846){
var map__53847 = p__53846;
var map__53847__$1 = cljs.core.__destructure_map(map__53847);
var effect = map__53847__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53847__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53847__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__53852 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53853 = null;
var count__53854 = (0);
var i__53855 = (0);
while(true){
if((i__53855 < count__53854)){
var effect = chunk__53853.cljs$core$IIndexed$_nth$arity$2(null,i__53855);
re_frame.fx.dispatch_later(effect);


var G__53971 = seq__53852;
var G__53972 = chunk__53853;
var G__53973 = count__53854;
var G__53974 = (i__53855 + (1));
seq__53852 = G__53971;
chunk__53853 = G__53972;
count__53854 = G__53973;
i__53855 = G__53974;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53852);
if(temp__5753__auto__){
var seq__53852__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53852__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53852__$1);
var G__53976 = cljs.core.chunk_rest(seq__53852__$1);
var G__53977 = c__4679__auto__;
var G__53978 = cljs.core.count(c__4679__auto__);
var G__53979 = (0);
seq__53852 = G__53976;
chunk__53853 = G__53977;
count__53854 = G__53978;
i__53855 = G__53979;
continue;
} else {
var effect = cljs.core.first(seq__53852__$1);
re_frame.fx.dispatch_later(effect);


var G__53980 = cljs.core.next(seq__53852__$1);
var G__53981 = null;
var G__53982 = (0);
var G__53983 = (0);
seq__53852 = G__53980;
chunk__53853 = G__53981;
count__53854 = G__53982;
i__53855 = G__53983;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__53858 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__53859 = null;
var count__53860 = (0);
var i__53861 = (0);
while(true){
if((i__53861 < count__53860)){
var vec__53872 = chunk__53859.cljs$core$IIndexed$_nth$arity$2(null,i__53861);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53872,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53872,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___53984 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___53984)){
var effect_fn_53985 = temp__5751__auto___53984;
(effect_fn_53985.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53985.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53985.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53986 = seq__53858;
var G__53987 = chunk__53859;
var G__53988 = count__53860;
var G__53989 = (i__53861 + (1));
seq__53858 = G__53986;
chunk__53859 = G__53987;
count__53860 = G__53988;
i__53861 = G__53989;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53858);
if(temp__5753__auto__){
var seq__53858__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53858__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53858__$1);
var G__53990 = cljs.core.chunk_rest(seq__53858__$1);
var G__53991 = c__4679__auto__;
var G__53992 = cljs.core.count(c__4679__auto__);
var G__53993 = (0);
seq__53858 = G__53990;
chunk__53859 = G__53991;
count__53860 = G__53992;
i__53861 = G__53993;
continue;
} else {
var vec__53879 = cljs.core.first(seq__53858__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53879,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53879,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5751__auto___53995 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___53995)){
var effect_fn_53996 = temp__5751__auto___53995;
(effect_fn_53996.cljs$core$IFn$_invoke$arity$1 ? effect_fn_53996.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_53996.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__53998 = cljs.core.next(seq__53858__$1);
var G__53999 = null;
var G__54000 = (0);
var G__54001 = (0);
seq__53858 = G__53998;
chunk__53859 = G__53999;
count__53860 = G__54000;
i__53861 = G__54001;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__53883 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__53884 = null;
var count__53885 = (0);
var i__53886 = (0);
while(true){
if((i__53886 < count__53885)){
var event = chunk__53884.cljs$core$IIndexed$_nth$arity$2(null,i__53886);
re_frame.router.dispatch(event);


var G__54002 = seq__53883;
var G__54003 = chunk__53884;
var G__54004 = count__53885;
var G__54005 = (i__53886 + (1));
seq__53883 = G__54002;
chunk__53884 = G__54003;
count__53885 = G__54004;
i__53886 = G__54005;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53883);
if(temp__5753__auto__){
var seq__53883__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53883__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53883__$1);
var G__54006 = cljs.core.chunk_rest(seq__53883__$1);
var G__54007 = c__4679__auto__;
var G__54008 = cljs.core.count(c__4679__auto__);
var G__54009 = (0);
seq__53883 = G__54006;
chunk__53884 = G__54007;
count__53885 = G__54008;
i__53886 = G__54009;
continue;
} else {
var event = cljs.core.first(seq__53883__$1);
re_frame.router.dispatch(event);


var G__54010 = cljs.core.next(seq__53883__$1);
var G__54011 = null;
var G__54012 = (0);
var G__54013 = (0);
seq__53883 = G__54010;
chunk__53884 = G__54011;
count__53885 = G__54012;
i__53886 = G__54013;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__53914 = cljs.core.seq(value);
var chunk__53915 = null;
var count__53916 = (0);
var i__53917 = (0);
while(true){
if((i__53917 < count__53916)){
var event = chunk__53915.cljs$core$IIndexed$_nth$arity$2(null,i__53917);
clear_event(event);


var G__54014 = seq__53914;
var G__54015 = chunk__53915;
var G__54016 = count__53916;
var G__54017 = (i__53917 + (1));
seq__53914 = G__54014;
chunk__53915 = G__54015;
count__53916 = G__54016;
i__53917 = G__54017;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53914);
if(temp__5753__auto__){
var seq__53914__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53914__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53914__$1);
var G__54018 = cljs.core.chunk_rest(seq__53914__$1);
var G__54019 = c__4679__auto__;
var G__54020 = cljs.core.count(c__4679__auto__);
var G__54021 = (0);
seq__53914 = G__54018;
chunk__53915 = G__54019;
count__53916 = G__54020;
i__53917 = G__54021;
continue;
} else {
var event = cljs.core.first(seq__53914__$1);
clear_event(event);


var G__54023 = cljs.core.next(seq__53914__$1);
var G__54024 = null;
var G__54025 = (0);
var G__54026 = (0);
seq__53914 = G__54023;
chunk__53915 = G__54024;
count__53916 = G__54025;
i__53917 = G__54026;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
