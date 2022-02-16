goog.provide('re_chain.core');
re_chain.core._STAR_replace_pointers_STAR_ = false;
re_chain.core.links = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
re_chain.core.seqify = (function re_chain$core$seqify(x){
if(((cljs.core.sequential_QMARK_(x)) || (cljs.core.set_QMARK_(x)))){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
});
re_chain.core.step_id = (function re_chain$core$step_id(event_id,counter){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),counter)){
return event_id;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1([cljs.core.namespace(event_id),(cljs.core.truth_(cljs.core.namespace(event_id))?"/":null),cljs.core.name(event_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(counter)].join(''));
}
});
re_chain.core.replace_pointers = (function re_chain$core$replace_pointers(next_event,effects){
return clojure.walk.postwalk((function (x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,new cljs.core.Keyword("kee-frame.core","next","kee-frame.core/next",-2058375215))){
re_frame.core.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Keyword :kee-frame.core/next is deprecated, use :chain/next instead."], 0));
} else {
}

if(cljs.core.truth_((function (){var fexpr__56028 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("kee-frame.core","next","kee-frame.core/next",-2058375215),null,new cljs.core.Keyword("chain","next","chain/next",-480219822),null], null), null);
return (fexpr__56028.cljs$core$IFn$_invoke$arity$1 ? fexpr__56028.cljs$core$IFn$_invoke$arity$1(x) : fexpr__56028.call(null,x));
})())){
return next_event;
} else {
return x;
}
}),effects);
});
re_chain.core.single_valid_link = (function re_chain$core$single_valid_link(effects){
var links = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56029){
var map__56030 = p__56029;
var map__56030__$1 = cljs.core.__destructure_map(map__56030);
var get_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56030__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
var effect_present_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56030__$1,new cljs.core.Keyword(null,"effect-present?","effect-present?",131752804));
var and__4251__auto__ = (effect_present_QMARK_.cljs$core$IFn$_invoke$arity$1 ? effect_present_QMARK_.cljs$core$IFn$_invoke$arity$1(effects) : effect_present_QMARK_.call(null,effects));
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not((get_dispatch.cljs$core$IFn$_invoke$arity$1 ? get_dispatch.cljs$core$IFn$_invoke$arity$1(effects) : get_dispatch.call(null,effects)));
} else {
return and__4251__auto__;
}
}),cljs.core.deref(re_chain.core.links));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(links))){
return cljs.core.first(links);
} else {
return null;
}
});
re_chain.core.dispatch_empty_or_next = (function re_chain$core$dispatch_empty_or_next(effects,next_event_id){
if(((cljs.core.not(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects)),next_event_id)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401),(function (effects__$1,event){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(effects__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),event);
})], null);
} else {
return null;
}
});
re_chain.core.single_valid_next = (function re_chain$core$single_valid_next(next_event_id,effects){
var xs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__56035){
var map__56036 = p__56035;
var map__56036__$1 = cljs.core.__destructure_map(map__56036);
var get_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56036__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_event_id,cljs.core.first((get_dispatch.cljs$core$IFn$_invoke$arity$1 ? get_dispatch.cljs$core$IFn$_invoke$arity$1(effects) : get_dispatch.call(null,effects))));
}),cljs.core.deref(re_chain.core.links));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(xs))){
return cljs.core.first(xs);
} else {
return null;
}
});
re_chain.core.select_link = (function re_chain$core$select_link(next_event_id,effects){
var or__4253__auto__ = re_chain.core.single_valid_next(next_event_id,effects);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = re_chain.core.single_valid_link(effects);
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var or__4253__auto____$2 = re_chain.core.dispatch_empty_or_next(effects,next_event_id);
if(cljs.core.truth_(or__4253__auto____$2)){
return or__4253__auto____$2;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Not possible to select next in chain",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_event_id,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$1(effects),new cljs.core.Keyword(null,"links","links",-654507394),cljs.core.deref(re_chain.core.links)], null));
}
}
}
});
re_chain.core.make_event = (function re_chain$core$make_event(next_event_id,previous_event_params,p__56042){
var vec__56043 = p__56042;
var seq__56044 = cljs.core.seq(vec__56043);
var first__56045 = cljs.core.first(seq__56044);
var seq__56044__$1 = cljs.core.next(seq__56044);
var _ = first__56045;
var params = seq__56044__$1;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [next_event_id], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(previous_event_params,params));
});
re_chain.core.link_effects = (function re_chain$core$link_effects(next_event_id,event_params,effects){
if(cljs.core.truth_(next_event_id)){
var temp__5751__auto__ = re_chain.core.select_link(next_event_id,effects);
if(cljs.core.truth_(temp__5751__auto__)){
var map__56048 = temp__5751__auto__;
var map__56048__$1 = cljs.core.__destructure_map(map__56048);
var set_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56048__$1,new cljs.core.Keyword(null,"set-dispatch","set-dispatch",2115263401));
var get_dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56048__$1,new cljs.core.Keyword(null,"get-dispatch","get-dispatch",-807865793));
var G__56049 = effects;
var G__56050 = re_chain.core.make_event(next_event_id,event_params,(get_dispatch.cljs$core$IFn$_invoke$arity$1 ? get_dispatch.cljs$core$IFn$_invoke$arity$1(effects) : get_dispatch.call(null,effects)));
return (set_dispatch.cljs$core$IFn$_invoke$arity$2 ? set_dispatch.cljs$core$IFn$_invoke$arity$2(G__56049,G__56050) : set_dispatch.call(null,G__56049,G__56050));
} else {
return effects;
}
} else {
return effects;
}
});
re_chain.core.effect_postprocessor = (function re_chain$core$effect_postprocessor(next_event_id){
return (function (ctx){
var event_params = cljs.core.rest(re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(ctx,new cljs.core.Keyword(null,"event","event",301435442)));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ctx,new cljs.core.Keyword(null,"effects","effects",-282369292),(function (p1__56051_SHARP_){
var G__56054 = p1__56051_SHARP_;
var G__56054__$1 = (cljs.core.truth_(re_chain.core._STAR_replace_pointers_STAR_)?re_chain.core.replace_pointers(next_event_id,G__56054):G__56054);
return re_chain.core.link_effects(next_event_id,event_params,G__56054__$1);

}));
});
});
re_chain.core.chain_interceptor = (function re_chain$core$chain_interceptor(current_event_id,next_event_id){
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),current_event_id,new cljs.core.Keyword(null,"after","after",594996914),re_chain.core.effect_postprocessor(next_event_id)], 0));
});
re_chain.core.conform_named_handlers = (function re_chain$core$conform_named_handlers(handlers){
var G__56064 = handlers;
var vec__56065 = G__56064;
var seq__56066 = cljs.core.seq(vec__56065);
var first__56067 = cljs.core.first(seq__56066);
var seq__56066__$1 = cljs.core.next(seq__56066);
var id = first__56067;
var first__56067__$1 = cljs.core.first(seq__56066__$1);
var seq__56066__$2 = cljs.core.next(seq__56066__$1);
var interceptors_or_handler = first__56067__$1;
var rest = seq__56066__$2;
var matches = cljs.core.PersistentVector.EMPTY;
var G__56064__$1 = G__56064;
var matches__$1 = matches;
while(true){
var vec__56077 = G__56064__$1;
var seq__56078 = cljs.core.seq(vec__56077);
var first__56079 = cljs.core.first(seq__56078);
var seq__56078__$1 = cljs.core.next(seq__56078);
var id__$1 = first__56079;
var first__56079__$1 = cljs.core.first(seq__56078__$1);
var seq__56078__$2 = cljs.core.next(seq__56078__$1);
var interceptors_or_handler__$1 = first__56079__$1;
var rest__$1 = seq__56078__$2;
var matches__$2 = matches__$1;
if(cljs.core.truth_(id__$1)){
if(cljs.core.fn_QMARK_(interceptors_or_handler__$1)){
var G__56218 = rest__$1;
var G__56219 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matches__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),interceptors_or_handler__$1], null));
G__56064__$1 = G__56218;
matches__$1 = G__56219;
continue;
} else {
var vec__56080 = rest__$1;
var seq__56081 = cljs.core.seq(vec__56080);
var first__56082 = cljs.core.first(seq__56081);
var seq__56081__$1 = cljs.core.next(seq__56081);
var handler = first__56082;
var rest__$2 = seq__56081__$1;
if(cljs.core.fn_QMARK_(handler)){
var G__56220 = rest__$2;
var G__56221 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matches__$2,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),handler], null));
G__56064__$1 = G__56220;
matches__$1 = G__56221;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("No valid handler found for ",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}
}
} else {
return matches__$2;
}
break;
}
});
re_chain.core.collect_named_event_instructions = (function re_chain$core$collect_named_event_instructions(step_fns){
var chain_handlers = re_chain.core.conform_named_handlers(step_fns);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56083){
var vec__56084 = p__56083;
var map__56087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56084,(0),null);
var map__56087__$1 = cljs.core.__destructure_map(map__56087);
var handler_1 = map__56087__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56087__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56087__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var handler_2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56084,(1),null);
var next_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(handler_2);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(handler_1,new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),(function (){var G__56088 = interceptors;
if((G__56088 == null)){
return null;
} else {
return re_chain.core.seqify(G__56088);
}
})(),new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(handler_1),new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),re_chain.core.chain_interceptor(id,next_id)], 0));
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),chain_handlers));
});
re_chain.core.conform_handlers = (function re_chain$core$conform_handlers(handlers){
var G__56095 = handlers;
var vec__56096 = G__56095;
var seq__56097 = cljs.core.seq(vec__56096);
var first__56098 = cljs.core.first(seq__56097);
var seq__56097__$1 = cljs.core.next(seq__56097);
var interceptors_or_handler = first__56098;
var rest = seq__56097__$1;
var matches = cljs.core.PersistentVector.EMPTY;
var G__56095__$1 = G__56095;
var matches__$1 = matches;
while(true){
var vec__56105 = G__56095__$1;
var seq__56106 = cljs.core.seq(vec__56105);
var first__56107 = cljs.core.first(seq__56106);
var seq__56106__$1 = cljs.core.next(seq__56106);
var interceptors_or_handler__$1 = first__56107;
var rest__$1 = seq__56106__$1;
var matches__$2 = matches__$1;
if(cljs.core.truth_(interceptors_or_handler__$1)){
if(cljs.core.fn_QMARK_(interceptors_or_handler__$1)){
var G__56223 = rest__$1;
var G__56224 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matches__$2,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fn","fn",-1175266204),interceptors_or_handler__$1], null));
G__56095__$1 = G__56223;
matches__$1 = G__56224;
continue;
} else {
var vec__56108 = rest__$1;
var seq__56109 = cljs.core.seq(vec__56108);
var first__56110 = cljs.core.first(seq__56109);
var seq__56109__$1 = cljs.core.next(seq__56109);
var handler = first__56110;
var rest__$2 = seq__56109__$1;
if(cljs.core.fn_QMARK_(handler)){
var G__56225 = rest__$2;
var G__56226 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(matches__$2,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204),handler], null));
G__56095__$1 = G__56225;
matches__$1 = G__56226;
continue;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Interceptor without matching handler",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors_or_handler__$1,new cljs.core.Keyword(null,"handler","handler",-195596612),handler], null));
}
}
} else {
return matches__$2;
}
break;
}
});
re_chain.core.collect_event_instructions = (function re_chain$core$collect_event_instructions(key,step_fns){
var chain_handlers = re_chain.core.conform_handlers(step_fns);
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (counter,p__56114){
var vec__56115 = p__56114;
var current_handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56115,(0),null);
var next_handler = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56115,(1),null);
var map__56118 = current_handler;
var map__56118__$1 = cljs.core.__destructure_map(map__56118);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56118__$1,new cljs.core.Keyword(null,"fn","fn",-1175266204));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56118__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
var id = re_chain.core.step_id(key,counter);
var next_id = (cljs.core.truth_(next_handler)?re_chain.core.step_id(key,(counter + (1))):null);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"next-id","next-id",-224240762),next_id,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843),fn,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951),interceptors,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076),re_chain.core.chain_interceptor(id,next_id)], null);
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$4((2),(1),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null),chain_handlers));
});
re_chain.core.register_chain_handlers_BANG_ = (function re_chain$core$register_chain_handlers_BANG_(instructions,user_interceptors){
var seq__56119 = cljs.core.seq(instructions);
var chunk__56120 = null;
var count__56121 = (0);
var i__56122 = (0);
while(true){
if((i__56122 < count__56121)){
var map__56129 = chunk__56120.cljs$core$IIndexed$_nth$arity$2(null,i__56122);
var map__56129__$1 = cljs.core.__destructure_map(map__56129);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56129__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56129__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56129__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56129__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(user_interceptors,interceptors)),event_handler);


var G__56228 = seq__56119;
var G__56229 = chunk__56120;
var G__56230 = count__56121;
var G__56231 = (i__56122 + (1));
seq__56119 = G__56228;
chunk__56120 = G__56229;
count__56121 = G__56230;
i__56122 = G__56231;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56119);
if(temp__5753__auto__){
var seq__56119__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56119__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56119__$1);
var G__56232 = cljs.core.chunk_rest(seq__56119__$1);
var G__56233 = c__4679__auto__;
var G__56234 = cljs.core.count(c__4679__auto__);
var G__56235 = (0);
seq__56119 = G__56232;
chunk__56120 = G__56233;
count__56121 = G__56234;
i__56122 = G__56235;
continue;
} else {
var map__56131 = cljs.core.first(seq__56119__$1);
var map__56131__$1 = cljs.core.__destructure_map(map__56131);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56131__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var event_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56131__$1,new cljs.core.Keyword(null,"event-handler","event-handler",-487718843));
var interceptor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56131__$1,new cljs.core.Keyword(null,"interceptor","interceptor",1127739076));
var interceptors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56131__$1,new cljs.core.Keyword(null,"interceptors","interceptors",-1546782951));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(id,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interceptor], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(user_interceptors,interceptors)),event_handler);


var G__56236 = cljs.core.next(seq__56119__$1);
var G__56237 = null;
var G__56238 = (0);
var G__56239 = (0);
seq__56119 = G__56236;
chunk__56120 = G__56237;
count__56121 = G__56238;
i__56122 = G__56239;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Same as `reg-chain-named`, but with a vector of interceptors as the first parameter. The interceptors specified
 *   will be appended to each event's interceptors.
 */
re_chain.core.reg_chain_named_STAR_ = (function re_chain$core$reg_chain_named_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56240 = arguments.length;
var i__4865__auto___56241 = (0);
while(true){
if((i__4865__auto___56241 < len__4864__auto___56240)){
args__4870__auto__.push((arguments[i__4865__auto___56241]));

var G__56242 = (i__4865__auto___56241 + (1));
i__4865__auto___56241 = G__56242;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return re_chain.core.reg_chain_named_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(re_chain.core.reg_chain_named_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (interceptors,step_fns){
var instructions = re_chain.core.collect_named_event_instructions(step_fns);
return re_chain.core.register_chain_handlers_BANG_(instructions,(function (){var G__56139 = interceptors;
if((G__56139 == null)){
return null;
} else {
return re_chain.core.seqify(G__56139);
}
})());
}));

(re_chain.core.reg_chain_named_STAR_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_chain.core.reg_chain_named_STAR_.cljs$lang$applyTo = (function (seq56137){
var G__56138 = cljs.core.first(seq56137);
var seq56137__$1 = cljs.core.next(seq56137);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56138,seq56137__$1);
}));

/**
 * Same as `reg-chain`, but with a vector of interceptors as the second parameter. The interceptors specified
 *   will be appended to each event's interceptors.
 */
re_chain.core.reg_chain_STAR_ = (function re_chain$core$reg_chain_STAR_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56243 = arguments.length;
var i__4865__auto___56244 = (0);
while(true){
if((i__4865__auto___56244 < len__4864__auto___56243)){
args__4870__auto__.push((arguments[i__4865__auto___56244]));

var G__56245 = (i__4865__auto___56244 + (1));
i__4865__auto___56244 = G__56245;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((2) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((2)),(0),null)):null);
return re_chain.core.reg_chain_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4871__auto__);
});

(re_chain.core.reg_chain_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (id,interceptors,step_fns){
var instructions = re_chain.core.collect_event_instructions(id,step_fns);
return re_chain.core.register_chain_handlers_BANG_(instructions,(function (){var G__56152 = interceptors;
if((G__56152 == null)){
return null;
} else {
return re_chain.core.seqify(G__56152);
}
})());
}));

(re_chain.core.reg_chain_STAR_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(re_chain.core.reg_chain_STAR_.cljs$lang$applyTo = (function (seq56144){
var G__56145 = cljs.core.first(seq56144);
var seq56144__$1 = cljs.core.next(seq56144);
var G__56146 = cljs.core.first(seq56144__$1);
var seq56144__$2 = cljs.core.next(seq56144__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56145,G__56146,seq56144__$2);
}));

/**
 * re-chain only supports the `dispatch` effect out of the box. To add more effects, call this function at the startup
 *   of your app.
 * 
 *   Parameters:
 * 
 *   `chain-links`: Vector of maps. Each map describes how to chain together events using a certain effect. The map should
 *   contain 3 keys:
 *   - `:effect-present?` : Is the effect present in the effects map returned from an event function?
 *   - `:get-dispatch` : Try to lookup the dispatch value from the effects map
 *   - `:set-dispatch` : Set the dispatch value in the effects map
 * 
 *   Usage:
 *   ```
 *   (chain/configure! [{:effect-present? (fn [effects] (:http-xhrio effects))
 *                    :get-dispatch    (fn [effects] (get-in effects [:http-xhrio :on-success]))
 *                    :set-dispatch    (fn [effects dispatch] (assoc-in effects [:http-xhrio :on-success] dispatch))}])
 *   ```
 *   
 */
re_chain.core.configure_BANG_ = (function re_chain$core$configure_BANG_(chain_links){
return cljs.core.reset_BANG_(re_chain.core.links,chain_links);
});
/**
 * Same as `reg-chain`, but with manually named event handlers. Useful when you need more meaningful names in your
 *   event log.
 * 
 *   Parameters:
 * 
 *   `handlers`: pairs of id and event handler. Optionally with interceptors between id and handler.
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain-named
 * 
 *  :load-customer-data
 *  (fn [ctx [customer-id]]
 *    {:http-xhrio {:uri "..."}})
 * 
 *  :receive-customer-data
 *   (fn [ctx [customer-id customer-data]]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
re_chain.core.reg_chain_named = (function re_chain$core$reg_chain_named(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56250 = arguments.length;
var i__4865__auto___56251 = (0);
while(true){
if((i__4865__auto___56251 < len__4864__auto___56250)){
args__4870__auto__.push((arguments[i__4865__auto___56251]));

var G__56256 = (i__4865__auto___56251 + (1));
i__4865__auto___56251 = G__56256;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return re_chain.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(re_chain.core.reg_chain_named.cljs$core$IFn$_invoke$arity$variadic = (function (handlers){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(re_chain.core.reg_chain_named_STAR_,null,handlers);
}));

(re_chain.core.reg_chain_named.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(re_chain.core.reg_chain_named.cljs$lang$applyTo = (function (seq56161){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq56161));
}));

/**
 * Register a list of re-frame fx handlers, chained together.
 * 
 *   The chaining is done through dispatch inference. https://github.com/Day8/re-frame-http-fx is supported by default,
 *   you can easily add your own like this: https://github.com/ingesolvoll/kee-frame#configuring-chains-since-020.
 * 
 *   Each handler's event vector is prepended with accumulated event vectors of previous handlers. So if the first handler
 *   receives [a b], and the second handler normally would receive [c], it will actually receive [a b c]. The purpose is
 *   to make all context available to the entire chain, without a complex framework or crazy scope tricks.
 * 
 *   Parameters:
 * 
 *   `id`: the id of the first re-frame event. The next events in the chain will get the same id followed by an index, so
 *   if your id is `add-todo`, the next one in chain will be called `add-todo-1`.
 * 
 *   `handlers`: re-frame event handler functions, registered with `re-frame.core/reg-event-fx`. Interceptors can be
 *            specified before the handler, same as with normal event handlers.
 * 
 * 
 *   Usage:
 *   ```
 *   (k/reg-chain
 *  :load-customer-data
 * 
 *  (fn {ctx [customer-id]]
 *    {:http-xhrio {:uri    (str "/customer/" customer-id)
 *                  :method :get}})
 * 
 *  (fn [cxt [customer-id customer-data]
 *    (assoc-in ctx [:db :customers customer-id] customer-data)))
 *   ```
 */
re_chain.core.reg_chain = (function re_chain$core$reg_chain(var_args){
var args__4870__auto__ = [];
var len__4864__auto___56261 = arguments.length;
var i__4865__auto___56262 = (0);
while(true){
if((i__4865__auto___56262 < len__4864__auto___56261)){
args__4870__auto__.push((arguments[i__4865__auto___56262]));

var G__56264 = (i__4865__auto___56262 + (1));
i__4865__auto___56262 = G__56264;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(re_chain.core.reg_chain.cljs$core$IFn$_invoke$arity$variadic = (function (id,handlers){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(re_chain.core.reg_chain_STAR_,id,null,handlers);
}));

(re_chain.core.reg_chain.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_chain.core.reg_chain.cljs$lang$applyTo = (function (seq56172){
var G__56173 = cljs.core.first(seq56172);
var seq56172__$1 = cljs.core.next(seq56172);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56173,seq56172__$1);
}));


//# sourceMappingURL=re_chain.core.js.map
