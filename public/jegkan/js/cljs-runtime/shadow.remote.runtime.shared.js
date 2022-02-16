goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__47168,res){
var map__47169 = p__47168;
var map__47169__$1 = cljs.core.__destructure_map(map__47169);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47169__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__47172 = res;
var G__47172__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47172,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__47172);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__47172__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__47172__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__47178 = arguments.length;
switch (G__47178) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__47182,msg,handlers,timeout_after_ms){
var map__47183 = p__47182;
var map__47183__$1 = cljs.core.__destructure_map(map__47183);
var runtime = map__47183__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47183__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47426 = arguments.length;
var i__4865__auto___47427 = (0);
while(true){
if((i__4865__auto___47427 < len__4864__auto___47426)){
args__4870__auto__.push((arguments[i__4865__auto___47427]));

var G__47428 = (i__4865__auto___47427 + (1));
i__4865__auto___47427 = G__47428;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__47196,ev,args){
var map__47197 = p__47196;
var map__47197__$1 = cljs.core.__destructure_map(map__47197);
var runtime = map__47197__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47197__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__47200 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47203 = null;
var count__47204 = (0);
var i__47205 = (0);
while(true){
if((i__47205 < count__47204)){
var ext = chunk__47203.cljs$core$IIndexed$_nth$arity$2(null,i__47205);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47432 = seq__47200;
var G__47433 = chunk__47203;
var G__47434 = count__47204;
var G__47435 = (i__47205 + (1));
seq__47200 = G__47432;
chunk__47203 = G__47433;
count__47204 = G__47434;
i__47205 = G__47435;
continue;
} else {
var G__47436 = seq__47200;
var G__47437 = chunk__47203;
var G__47438 = count__47204;
var G__47439 = (i__47205 + (1));
seq__47200 = G__47436;
chunk__47203 = G__47437;
count__47204 = G__47438;
i__47205 = G__47439;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47200);
if(temp__5753__auto__){
var seq__47200__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47200__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47200__$1);
var G__47440 = cljs.core.chunk_rest(seq__47200__$1);
var G__47441 = c__4679__auto__;
var G__47442 = cljs.core.count(c__4679__auto__);
var G__47443 = (0);
seq__47200 = G__47440;
chunk__47203 = G__47441;
count__47204 = G__47442;
i__47205 = G__47443;
continue;
} else {
var ext = cljs.core.first(seq__47200__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__47445 = cljs.core.next(seq__47200__$1);
var G__47446 = null;
var G__47447 = (0);
var G__47448 = (0);
seq__47200 = G__47445;
chunk__47203 = G__47446;
count__47204 = G__47447;
i__47205 = G__47448;
continue;
} else {
var G__47449 = cljs.core.next(seq__47200__$1);
var G__47450 = null;
var G__47451 = (0);
var G__47452 = (0);
seq__47200 = G__47449;
chunk__47203 = G__47450;
count__47204 = G__47451;
i__47205 = G__47452;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq47187){
var G__47188 = cljs.core.first(seq47187);
var seq47187__$1 = cljs.core.next(seq47187);
var G__47189 = cljs.core.first(seq47187__$1);
var seq47187__$2 = cljs.core.next(seq47187__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47188,G__47189,seq47187__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__47263,p__47264){
var map__47265 = p__47263;
var map__47265__$1 = cljs.core.__destructure_map(map__47265);
var runtime = map__47265__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47265__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47266 = p__47264;
var map__47266__$1 = cljs.core.__destructure_map(map__47266);
var msg = map__47266__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47266__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__47272 = cljs.core.deref(state_ref);
var map__47272__$1 = cljs.core.__destructure_map(map__47272);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47272__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47272__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__47290){
var map__47291 = p__47290;
var map__47291__$1 = cljs.core.__destructure_map(map__47291);
var runtime = map__47291__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47291__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4253__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__47294,msg){
var map__47295 = p__47294;
var map__47295__$1 = cljs.core.__destructure_map(map__47295);
var runtime = map__47295__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47295__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__47299,key,p__47300){
var map__47302 = p__47299;
var map__47302__$1 = cljs.core.__destructure_map(map__47302);
var state = map__47302__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47302__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__47303 = p__47300;
var map__47303__$1 = cljs.core.__destructure_map(map__47303);
var spec = map__47303__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47303__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__47312,key,spec){
var map__47318 = p__47312;
var map__47318__$1 = cljs.core.__destructure_map(map__47318);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47318__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__47333_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__47333_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__47334_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__47334_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__47335_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__47335_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__47336_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__47336_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__47337_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__47337_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__47358,key){
var map__47360 = p__47358;
var map__47360__$1 = cljs.core.__destructure_map(map__47360);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47360__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__47363,msg){
var map__47364 = p__47363;
var map__47364__$1 = cljs.core.__destructure_map(map__47364);
var runtime = map__47364__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47364__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__47370,p__47371){
var map__47373 = p__47370;
var map__47373__$1 = cljs.core.__destructure_map(map__47373);
var runtime = map__47373__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47373__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__47374 = p__47371;
var map__47374__$1 = cljs.core.__destructure_map(map__47374);
var msg = map__47374__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47374__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47374__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__47380 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__47382 = null;
var count__47383 = (0);
var i__47384 = (0);
while(true){
if((i__47384 < count__47383)){
var map__47411 = chunk__47382.cljs$core$IIndexed$_nth$arity$2(null,i__47384);
var map__47411__$1 = cljs.core.__destructure_map(map__47411);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47411__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47474 = seq__47380;
var G__47475 = chunk__47382;
var G__47476 = count__47383;
var G__47477 = (i__47384 + (1));
seq__47380 = G__47474;
chunk__47382 = G__47475;
count__47383 = G__47476;
i__47384 = G__47477;
continue;
} else {
var G__47478 = seq__47380;
var G__47479 = chunk__47382;
var G__47480 = count__47383;
var G__47481 = (i__47384 + (1));
seq__47380 = G__47478;
chunk__47382 = G__47479;
count__47383 = G__47480;
i__47384 = G__47481;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__47380);
if(temp__5753__auto__){
var seq__47380__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47380__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__47380__$1);
var G__47483 = cljs.core.chunk_rest(seq__47380__$1);
var G__47484 = c__4679__auto__;
var G__47485 = cljs.core.count(c__4679__auto__);
var G__47486 = (0);
seq__47380 = G__47483;
chunk__47382 = G__47484;
count__47383 = G__47485;
i__47384 = G__47486;
continue;
} else {
var map__47414 = cljs.core.first(seq__47380__$1);
var map__47414__$1 = cljs.core.__destructure_map(map__47414);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47414__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__47491 = cljs.core.next(seq__47380__$1);
var G__47492 = null;
var G__47493 = (0);
var G__47494 = (0);
seq__47380 = G__47491;
chunk__47382 = G__47492;
count__47383 = G__47493;
i__47384 = G__47494;
continue;
} else {
var G__47495 = cljs.core.next(seq__47380__$1);
var G__47496 = null;
var G__47497 = (0);
var G__47498 = (0);
seq__47380 = G__47495;
chunk__47382 = G__47496;
count__47383 = G__47497;
i__47384 = G__47498;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
