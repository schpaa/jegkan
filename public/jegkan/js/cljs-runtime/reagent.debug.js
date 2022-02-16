goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__51578__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51578 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51579__i = 0, G__51579__a = new Array(arguments.length -  0);
while (G__51579__i < G__51579__a.length) {G__51579__a[G__51579__i] = arguments[G__51579__i + 0]; ++G__51579__i;}
  args = new cljs.core.IndexedSeq(G__51579__a,0,null);
} 
return G__51578__delegate.call(this,args);};
G__51578.cljs$lang$maxFixedArity = 0;
G__51578.cljs$lang$applyTo = (function (arglist__51580){
var args = cljs.core.seq(arglist__51580);
return G__51578__delegate(args);
});
G__51578.cljs$core$IFn$_invoke$arity$variadic = G__51578__delegate;
return G__51578;
})()
);

(o.error = (function() { 
var G__51581__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__51581 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__51582__i = 0, G__51582__a = new Array(arguments.length -  0);
while (G__51582__i < G__51582__a.length) {G__51582__a[G__51582__i] = arguments[G__51582__i + 0]; ++G__51582__i;}
  args = new cljs.core.IndexedSeq(G__51582__a,0,null);
} 
return G__51581__delegate.call(this,args);};
G__51581.cljs$lang$maxFixedArity = 0;
G__51581.cljs$lang$applyTo = (function (arglist__51583){
var args = cljs.core.seq(arglist__51583);
return G__51581__delegate(args);
});
G__51581.cljs$core$IFn$_invoke$arity$variadic = G__51581__delegate;
return G__51581;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
