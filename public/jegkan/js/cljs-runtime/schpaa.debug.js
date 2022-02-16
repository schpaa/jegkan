goog.provide('schpaa.debug');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("debug","in-debug-cancel","debug/in-debug-cancel",1418836672),(function (db__$1,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"in-debug","in-debug",290605356),false);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("debug","in-debug?","debug/in-debug?",-770874151),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1){
return new cljs.core.Keyword(null,"in-debug","in-debug",290605356).cljs$core$IFn$_invoke$arity$2(db__$1,false);
})], 0));
schpaa.debug.ppr = (function schpaa$debug$ppr(x){
var _STAR_print_pprint_dispatch_STAR__orig_val__70031 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__70032 = cljs.pprint.code_dispatch;
(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__70032);

try{var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70033_70055 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70034_70056 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70035_70057 = true;
var _STAR_print_fn_STAR__temp_val__70036_70058 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70035_70057);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70036_70058);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(x);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70034_70056);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70033_70055);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
}finally {(cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__70031);
}});
schpaa.debug.ppre = (function schpaa$debug$ppre(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70059 = arguments.length;
var i__4865__auto___70060 = (0);
while(true){
if((i__4865__auto___70060 < len__4864__auto___70059)){
args__4870__auto__.push((arguments[i__4865__auto___70060]));

var G__70061 = (i__4865__auto___70060 + (1));
i__4865__auto___70060 = G__70061;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return schpaa.debug.ppre.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(schpaa.debug.ppre.cljs$core$IFn$_invoke$arity$variadic = (function (p){
if(cljs.core.seq(p)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.pre-wrap.text-xs.bg-black.text-yellow-300","pre.pre-wrap.text-xs.bg-black.text-yellow-300",-774616823),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre-wrap","pre-wrap",979551718)], null)], null),schpaa.debug.ppr(cljs.core.first(p))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.text-xs.bg-blackblack.text-amber-300","pre.text-xs.bg-blackblack.text-amber-300",-1084847278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre-wrap","pre-wrap",979551718)], null)], null),schpaa.debug.ppr(p)], null);
}
}));

(schpaa.debug.ppre.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schpaa.debug.ppre.cljs$lang$applyTo = (function (seq70037){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70037));
}));

schpaa.debug.ppre_x = (function schpaa$debug$ppre_x(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70062 = arguments.length;
var i__4865__auto___70063 = (0);
while(true){
if((i__4865__auto___70063 < len__4864__auto___70062)){
args__4870__auto__.push((arguments[i__4865__auto___70063]));

var G__70064 = (i__4865__auto___70063 + (1));
i__4865__auto___70063 = G__70064;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return schpaa.debug.ppre_x.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(schpaa.debug.ppre_x.cljs$core$IFn$_invoke$arity$variadic = (function (p){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-black/90",new cljs.core.Keyword(null,"text-amber-300","text-amber-300",-286424251),new cljs.core.Keyword(null,"text-xs","text-xs",1250326458),new cljs.core.Keyword(null,"p-1","p-1",190484676)], null)], null),((cljs.core.seq(p))?(function (){var iter__4652__auto__ = (function schpaa$debug$iter__70039(s__70040){
return (new cljs.core.LazySeq(null,(function (){
var s__70040__$1 = s__70040;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__70040__$1);
if(temp__5753__auto__){
var s__70040__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70040__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70040__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70042 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70041 = (0);
while(true){
if((i__70041 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__70041);
cljs.core.chunk_append(b__70042,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre-wrap","pre-wrap",979551718)], null)], null),(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70043_70065 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70044_70066 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70045_70067 = true;
var _STAR_print_fn_STAR__temp_val__70046_70068 = ((function (i__70041,_STAR_print_newline_STAR__orig_val__70043_70065,_STAR_print_fn_STAR__orig_val__70044_70066,_STAR_print_newline_STAR__temp_val__70045_70067,sb__4795__auto__,e,c__4650__auto__,size__4651__auto__,b__70042,s__70040__$2,temp__5753__auto__){
return (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});})(i__70041,_STAR_print_newline_STAR__orig_val__70043_70065,_STAR_print_fn_STAR__orig_val__70044_70066,_STAR_print_newline_STAR__temp_val__70045_70067,sb__4795__auto__,e,c__4650__auto__,size__4651__auto__,b__70042,s__70040__$2,temp__5753__auto__))
;
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70045_70067);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70046_70068);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(e);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70044_70066);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70043_70065);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()], null));

var G__70069 = (i__70041 + (1));
i__70041 = G__70069;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70042),schpaa$debug$iter__70039(cljs.core.chunk_rest(s__70040__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70042),null);
}
} else {
var e = cljs.core.first(s__70040__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre-wrap","pre-wrap",979551718)], null)], null),(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70047_70070 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70048_70071 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70049_70072 = true;
var _STAR_print_fn_STAR__temp_val__70050_70073 = ((function (_STAR_print_newline_STAR__orig_val__70047_70070,_STAR_print_fn_STAR__orig_val__70048_70071,_STAR_print_newline_STAR__temp_val__70049_70072,sb__4795__auto__,e,s__70040__$2,temp__5753__auto__){
return (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});})(_STAR_print_newline_STAR__orig_val__70047_70070,_STAR_print_fn_STAR__orig_val__70048_70071,_STAR_print_newline_STAR__temp_val__70049_70072,sb__4795__auto__,e,s__70040__$2,temp__5753__auto__))
;
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70049_70072);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70050_70073);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(e);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70048_70071);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70047_70070);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()], null),schpaa$debug$iter__70039(cljs.core.rest(s__70040__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(p);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"white-space","white-space",-707351930),new cljs.core.Keyword(null,"pre-wrap","pre-wrap",979551718)], null)], null),(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__70051_70074 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__70052_70075 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__70053_70076 = true;
var _STAR_print_fn_STAR__temp_val__70054_70077 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__70053_70076);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__70054_70077);

try{cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(p);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__70052_70075);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__70051_70074);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})()], null))], null);
}));

(schpaa.debug.ppre_x.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(schpaa.debug.ppre_x.cljs$lang$applyTo = (function (seq70038){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq70038));
}));


//# sourceMappingURL=schpaa.debug.js.map
