goog.provide('db.rtdb');
var module$node_modules$firebase$database$dist$index_esm=shadow.js.require("module$node_modules$firebase$database$dist$index_esm", {});
/**
 * returns a reagent atom that will always have the latest value at 'path' in the Firebase database
 */
db.rtdb.on_value_reaction = (function db$rtdb$on_value_reaction(p__69454){
var map__69455 = p__69454;
var map__69455__$1 = cljs.core.__destructure_map(map__69455);
var args = map__69455__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69455__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var ref = module$node_modules$firebase$database$dist$index_esm.ref(module$node_modules$firebase$database$dist$index_esm.getDatabase(),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",path)));
var reaction = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var callback = (function (snap){
return cljs.core.reset_BANG_(reaction,(function (){var G__69457 = snap;
var G__69457__$1 = (((G__69457 == null))?null:G__69457.val());
if((G__69457__$1 == null)){
return null;
} else {
return cljs_bean.core.__GT_clj(G__69457__$1);
}
})());
});
module$node_modules$firebase$database$dist$index_esm.onValue(ref,callback);

return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((function (){
return cljs.core.deref(reaction);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),(function (){
return module$node_modules$firebase$database$dist$index_esm.off(ref,"value",callback);
})], 0));
});
db.rtdb.ref_get = (function db$rtdb$ref_get(p__69459){
var map__69460 = p__69459;
var map__69460__$1 = cljs.core.__destructure_map(map__69460);
var args = map__69460__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69460__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",path));
var value = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
module$node_modules$firebase$database$dist$index_esm.get(module$node_modules$firebase$database$dist$index_esm.ref(module$node_modules$firebase$database$dist$index_esm.getDatabase(),path__$1),cljs_bean.core.__GT_js(value)).then((function (snapshot){
if(cljs.core.truth_(snapshot.exists())){
var result = cljs_bean.core.__GT_clj(snapshot.val());
return cljs.core.reset_BANG_(value,result);
} else {
return cljs.core.reset_BANG_(value,null);
}
}));

return reagent.ratom.make_reaction.cljs$core$IFn$_invoke$arity$variadic((function (){
return cljs.core.deref(value);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-dispose","on-dispose",2105306360),(function (){
return cljs.core.tap_GT_("disposed");
})], 0));
});
db.rtdb.ref_set = (function db$rtdb$ref_set(p__69463){
var map__69465 = p__69463;
var map__69465__$1 = cljs.core.__destructure_map(map__69465);
var args = map__69465__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69465__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69465__$1,new cljs.core.Keyword(null,"value","value",305978217));
var path__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",path));
return module$node_modules$firebase$database$dist$index_esm.set(module$node_modules$firebase$database$dist$index_esm.ref(module$node_modules$firebase$database$dist$index_esm.getDatabase(),path__$1),cljs_bean.core.__GT_js(value));
});
db.rtdb.ref_update = (function db$rtdb$ref_update(p__69469){
var map__69470 = p__69469;
var map__69470__$1 = cljs.core.__destructure_map(map__69470);
var args = map__69470__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69470__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69470__$1,new cljs.core.Keyword(null,"value","value",305978217));
var path__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",path));
return module$node_modules$firebase$database$dist$index_esm.update(module$node_modules$firebase$database$dist$index_esm.ref(module$node_modules$firebase$database$dist$index_esm.getDatabase(),path__$1),cljs_bean.core.__GT_js(value));
});
db.rtdb.ref_push = (function db$rtdb$ref_push(p__69478){
var map__69479 = p__69478;
var map__69479__$1 = cljs.core.__destructure_map(map__69479);
var args = map__69479__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69479__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69479__$1,new cljs.core.Keyword(null,"value","value",305978217));
var path__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("/",path));
return module$node_modules$firebase$database$dist$index_esm.push(module$node_modules$firebase$database$dist$index_esm.ref(module$node_modules$firebase$database$dist$index_esm.getDatabase(),path__$1),cljs_bean.core.__GT_js(value));
});

//# sourceMappingURL=db.rtdb.js.map
