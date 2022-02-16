goog.provide('re_frame_fx.dispatch');
re_frame_fx.dispatch.deferred_actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_fx.dispatch.dispatch_debounce = (function re_frame_fx$dispatch$dispatch_debounce(dispatch_map_or_seq){
var cancel_timeout = (function (id){
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5753__auto__)){
var deferred = temp__5753__auto__;
clearTimeout(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(deferred));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame_fx.dispatch.deferred_actions,cljs.core.dissoc,id);
} else {
return null;
}
});
var run_action = (function (action,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),action)){
return re_frame.core.dispatch(event);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),action)){
var seq__56889 = cljs.core.seq(event);
var chunk__56890 = null;
var count__56891 = (0);
var i__56892 = (0);
while(true){
if((i__56892 < count__56891)){
var e = chunk__56890.cljs$core$IIndexed$_nth$arity$2(null,i__56892);
re_frame.core.dispatch(e);


var G__56951 = seq__56889;
var G__56952 = chunk__56890;
var G__56953 = count__56891;
var G__56954 = (i__56892 + (1));
seq__56889 = G__56951;
chunk__56890 = G__56952;
count__56891 = G__56953;
i__56892 = G__56954;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56889);
if(temp__5753__auto__){
var seq__56889__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56889__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56889__$1);
var G__56955 = cljs.core.chunk_rest(seq__56889__$1);
var G__56956 = c__4679__auto__;
var G__56957 = cljs.core.count(c__4679__auto__);
var G__56958 = (0);
seq__56889 = G__56955;
chunk__56890 = G__56956;
count__56891 = G__56957;
i__56892 = G__56958;
continue;
} else {
var e = cljs.core.first(seq__56889__$1);
re_frame.core.dispatch(e);


var G__56960 = cljs.core.next(seq__56889__$1);
var G__56961 = null;
var G__56962 = (0);
var G__56963 = (0);
seq__56889 = G__56960;
chunk__56890 = G__56961;
count__56891 = G__56962;
i__56892 = G__56963;
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
}
});
var seq__56895 = cljs.core.seq((function (){var G__56910 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__56910],null));
} else {
return G__56910;
}
})());
var chunk__56896 = null;
var count__56897 = (0);
var i__56898 = (0);
while(true){
if((i__56898 < count__56897)){
var map__56912 = chunk__56896.cljs$core$IIndexed$_nth$arity$2(null,i__56898);
var map__56912__$1 = cljs.core.__destructure_map(map__56912);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56912__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__56913 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__56913.cljs$core$IFn$_invoke$arity$1 ? fexpr__56913.cljs$core$IFn$_invoke$arity$1(action) : fexpr__56913.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__56895,chunk__56896,count__56897,i__56898,map__56912,map__56912__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__56895,chunk__56896,count__56897,i__56898,map__56912,map__56912__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5753__auto___56977 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5753__auto___56977)){
var map__56917_56978 = temp__5753__auto___56977;
var map__56917_56979__$1 = cljs.core.__destructure_map(map__56917_56978);
var action_56980__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56917_56979__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_56981__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56917_56979__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_56980__$1,event_56981__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__56985 = seq__56895;
var G__56986 = chunk__56896;
var G__56987 = count__56897;
var G__56988 = (i__56898 + (1));
seq__56895 = G__56985;
chunk__56896 = G__56986;
count__56897 = G__56987;
i__56898 = G__56988;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__56895);
if(temp__5753__auto__){
var seq__56895__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__56895__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__56895__$1);
var G__56989 = cljs.core.chunk_rest(seq__56895__$1);
var G__56990 = c__4679__auto__;
var G__56991 = cljs.core.count(c__4679__auto__);
var G__56992 = (0);
seq__56895 = G__56989;
chunk__56896 = G__56990;
count__56897 = G__56991;
i__56898 = G__56992;
continue;
} else {
var map__56930 = cljs.core.first(seq__56895__$1);
var map__56930__$1 = cljs.core.__destructure_map(map__56930);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56930__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__56936 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__56936.cljs$core$IFn$_invoke$arity$1 ? fexpr__56936.cljs$core$IFn$_invoke$arity$1(action) : fexpr__56936.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__56895,chunk__56896,count__56897,i__56898,map__56930,map__56930__$1,id,timeout,action,event,seq__56895__$1,temp__5753__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__56895,chunk__56896,count__56897,i__56898,map__56930,map__56930__$1,id,timeout,action,event,seq__56895__$1,temp__5753__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5753__auto___56994__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5753__auto___56994__$1)){
var map__56939_56999 = temp__5753__auto___56994__$1;
var map__56939_57000__$1 = cljs.core.__destructure_map(map__56939_56999);
var action_57001__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939_57000__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_57002__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56939_57000__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_57001__$1,event_57002__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__57008 = cljs.core.next(seq__56895__$1);
var G__57009 = null;
var G__57010 = (0);
var G__57011 = (0);
seq__56895 = G__57008;
chunk__56896 = G__57009;
count__56897 = G__57010;
i__56898 = G__57011;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),re_frame_fx.dispatch.dispatch_debounce);

//# sourceMappingURL=re_frame_fx.dispatch.js.map
