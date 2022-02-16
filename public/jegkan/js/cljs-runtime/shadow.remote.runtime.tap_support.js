goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__50928,p__50929){
var map__50930 = p__50928;
var map__50930__$1 = cljs.core.__destructure_map(map__50930);
var svc = map__50930__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50930__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50930__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50930__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50931 = p__50929;
var map__50931__$1 = cljs.core.__destructure_map(map__50931);
var msg = map__50931__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50931__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50931__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50931__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50931__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__50941,p__50942){
var map__50944 = p__50941;
var map__50944__$1 = cljs.core.__destructure_map(map__50944);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50944__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__50945 = p__50942;
var map__50945__$1 = cljs.core.__destructure_map(map__50945);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50945__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__50948,p__50949){
var map__50951 = p__50948;
var map__50951__$1 = cljs.core.__destructure_map(map__50951);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50951__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50951__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__50952 = p__50949;
var map__50952__$1 = cljs.core.__destructure_map(map__50952);
var msg = map__50952__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50952__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__50958,tid){
var map__50963 = p__50958;
var map__50963__$1 = cljs.core.__destructure_map(map__50963);
var svc = map__50963__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50963__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__50974 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__50976 = null;
var count__50977 = (0);
var i__50978 = (0);
while(true){
if((i__50978 < count__50977)){
var vec__50989 = chunk__50976.cljs$core$IIndexed$_nth$arity$2(null,i__50978);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50989,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50989,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51008 = seq__50974;
var G__51009 = chunk__50976;
var G__51010 = count__50977;
var G__51011 = (i__50978 + (1));
seq__50974 = G__51008;
chunk__50976 = G__51009;
count__50977 = G__51010;
i__50978 = G__51011;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__50974);
if(temp__5753__auto__){
var seq__50974__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__50974__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50974__$1);
var G__51012 = cljs.core.chunk_rest(seq__50974__$1);
var G__51013 = c__4679__auto__;
var G__51014 = cljs.core.count(c__4679__auto__);
var G__51015 = (0);
seq__50974 = G__51012;
chunk__50976 = G__51013;
count__50977 = G__51014;
i__50978 = G__51015;
continue;
} else {
var vec__50992 = cljs.core.first(seq__50974__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50992,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50992,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__51016 = cljs.core.next(seq__50974__$1);
var G__51017 = null;
var G__51018 = (0);
var G__51019 = (0);
seq__50974 = G__51016;
chunk__50976 = G__51017;
count__50977 = G__51018;
i__50978 = G__51019;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__50965_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__50965_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__50968_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__50968_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__50969_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__50969_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__50970_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__50970_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__50999){
var map__51004 = p__50999;
var map__51004__$1 = cljs.core.__destructure_map(map__51004);
var svc = map__51004__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51004__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51004__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
