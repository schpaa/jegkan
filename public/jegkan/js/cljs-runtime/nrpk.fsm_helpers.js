goog.provide('nrpk.fsm_helpers');
nrpk.fsm_helpers.send = (function nrpk$fsm_helpers$send(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70028 = arguments.length;
var i__4865__auto___70029 = (0);
while(true){
if((i__4865__auto___70029 < len__4864__auto___70028)){
args__4870__auto__.push((arguments[i__4865__auto___70029]));

var G__70030 = (i__4865__auto___70029 + (1));
i__4865__auto___70029 = G__70030;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic = (function (event){
return re_frame.core.dispatch(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","transition","re-statecharts.core/transition",491330984),new cljs.core.Keyword(null,"main-fsm","main-fsm",-1719256745)], null),event));
}));

(nrpk.fsm_helpers.send.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(nrpk.fsm_helpers.send.cljs$lang$applyTo = (function (seq70027){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70027));
}));


//# sourceMappingURL=nrpk.fsm_helpers.js.map
