goog.provide('kee_frame.log');
kee_frame.log.config = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (p1__60773_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__60773_SHARP_,new cljs.core.Keyword(null,"raw-console?","raw-console?",-2061489061),true);
})], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"appenders","appenders",1245583998),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"console","console",1228072057),(taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$0 ? taoensso.timbre.console_appender.cljs$core$IFn$_invoke$arity$0() : taoensso.timbre.console_appender.call(null))], null)], null)], 0));
kee_frame.log.init_BANG_ = (function kee_frame$log$init_BANG_(user_config){
return taoensso.timbre.set_config_BANG_(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([kee_frame.log.config,user_config], 0)));
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"log","log",-1595516004),(function (p__60774){
var vec__60775 = p__60774;
var seq__60776 = cljs.core.seq(vec__60775);
var first__60777 = cljs.core.first(seq__60776);
var seq__60776__$1 = cljs.core.next(seq__60776);
var level = first__60777;
var vargs = seq__60776__$1;
var arg = vec__60775;
if(cljs.core.truth_(arg)){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,level,"kee-frame.log",null,17,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vargs], null);
}),null)),null,208452859,null);
} else {
return null;
}
}));

//# sourceMappingURL=kee_frame.log.js.map