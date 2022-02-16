goog.provide('schpaa.time');
schpaa.time.flex_date = (function schpaa$time$flex_date(var_args){
var G__75449 = arguments.length;
switch (G__75449) {
case 3:
return schpaa.time.flex_date.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 1:
return schpaa.time.flex_date.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schpaa.time.flex_date.cljs$core$IFn$_invoke$arity$3 = (function (p__75451,dt,time_fn){
var map__75452 = p__75451;
var map__75452__$1 = cljs.core.__destructure_map(map__75452);
var time_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75452__$1,new cljs.core.Keyword(null,"time-class","time-class",917364935));
var if_never = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75452__$1,new cljs.core.Keyword(null,"if-never","if-never",663314866));
var with_let75455 = reagent.ratom.with_let_values(new cljs.core.Keyword(null,"with-let75455","with-let75455",-670184089));
var temp__5757__auto___75485 = reagent.ratom._STAR_ratom_context_STAR_;
if((temp__5757__auto___75485 == null)){
} else {
var c__51926__auto___75488 = temp__5757__auto___75485;
if((with_let75455.generation === c__51926__auto___75488.ratomGeneration)){
if(reagent.debug.has_console){
((reagent.debug.tracking)?reagent.debug.track_console:console).error(["Warning: The same with-let is being used more ","than once in the same reactive context."].join(''));
} else {
}
} else {
}

(with_let75455.generation = c__51926__auto___75488.ratomGeneration);
}

var init75456 = (with_let75455.length === (0));
var current_time = ((((init75456) || (cljs.core.not(with_let75455.hasOwnProperty((0))))))?(with_let75455[(0)] = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(tick.core.now())):(with_let75455[(0)]));
var state = ((((init75456) || (cljs.core.not(with_let75455.hasOwnProperty((1))))))?(with_let75455[(1)] = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","show-relative-time","app/show-relative-time",780345640)], null))):(with_let75455[(1)]));
var timer = ((((init75456) || (cljs.core.not(with_let75455.hasOwnProperty((2))))))?(with_let75455[(2)] = setInterval((function (){
return cljs.core.reset_BANG_(current_time,tick.core.now());
}),(1000))):(with_let75455[(2)]));
var res75457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.truncate.inline","div.truncate.inline",1019220339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__75447_SHARP_){
p1__75447_SHARP_.stopPropagation();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","show-relative-time-toggle","app/show-relative-time-toggle",-681358743)], null));
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor-pointer","cursor-pointer",1756742679),new cljs.core.Keyword(null,"hover:underline","hover:underline",-1738337581)], null),time_class)], null),(((!((dt == null))))?(cljs.core.truth_(cljs.core.deref(state))?tick.core.format.cljs$core$IFn$_invoke$arity$2("YYYY-MM-dd 'kl' HH:mm:SS",dt):(function (){var G__75467 = cljs.core.deref(current_time);
return (time_fn.cljs$core$IFn$_invoke$arity$1 ? time_fn.cljs$core$IFn$_invoke$arity$1(G__75467) : time_fn.call(null,G__75467));
})()):if_never)], null)], null);
var destroy__51925__auto___75493 = (function (){
clearInterval;

return timer;
});
if(reagent.ratom.reactive_QMARK_()){
if((with_let75455.destroy == null)){
(with_let75455.destroy = destroy__51925__auto___75493);
} else {
}
} else {
destroy__51925__auto___75493();
}

return res75457;
}));

(schpaa.time.flex_date.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.time.flex_date,cljs.core.PersistentArrayMap.EMPTY,dt], null);
}));

(schpaa.time.flex_date.cljs$lang$maxFixedArity = 3);

schpaa.time.x = (function schpaa$time$x(timestamp){
var temp__5753__auto__ = (function (){var G__75471 = timestamp;
var G__75471__$1 = (((G__75471 == null))?null:G__75471.toDate());
if((G__75471__$1 == null)){
return null;
} else {
return times.api.ms__GT_local_time(G__75471__$1);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var tm = temp__5753__auto__;
return schpaa.time.flex_date.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,tm,(function (_i){
return times.api.relative_local_time(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"past-prefix","past-prefix",-669580776),"",new cljs.core.Keyword(null,"progressive-rounding?","progressive-rounding?",-1892210030),true], null),tm);
}));
} else {
return null;
}
});
schpaa.time.x_SINGLEQUOTE_ = (function schpaa$time$x_SINGLEQUOTE_(timestamp){
var temp__5753__auto__ = (function (){var G__75476 = timestamp;
var G__75476__$1 = (((G__75476 == null))?null:G__75476.toDate());
if((G__75476__$1 == null)){
return null;
} else {
return times.api.ms__GT_local_time(G__75476__$1);
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var tm = temp__5753__auto__;
return schpaa.time.flex_date.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,tm,(function (_i){
return times.api.relative_local_time(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"past-prefix","past-prefix",-669580776),"endret for",new cljs.core.Keyword(null,"progressive-rounding?","progressive-rounding?",-1892210030),true], null),tm);
}));
} else {
return null;
}
});
schpaa.time.y = (function schpaa$time$y(timeinstant){
var temp__5753__auto__ = timeinstant;
if(cljs.core.truth_(temp__5753__auto__)){
var tm = temp__5753__auto__;
return schpaa.time.flex_date.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,tm,(function (_i){
return times.api.relative_local_time(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"past-prefix","past-prefix",-669580776),"for",new cljs.core.Keyword(null,"progressive-rounding?","progressive-rounding?",-1892210030),true], null),tm);
}));
} else {
return null;
}
});
schpaa.time.y_SINGLEQUOTE_ = (function schpaa$time$y_SINGLEQUOTE_(timeinstant){
var temp__5753__auto__ = timeinstant;
if(cljs.core.truth_(temp__5753__auto__)){
var tm = temp__5753__auto__;
return schpaa.time.flex_date.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,tm,(function (_i){
return times.api.relative_local_time(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"past-prefix","past-prefix",-669580776),"Oppdatert for",new cljs.core.Keyword(null,"progressive-rounding?","progressive-rounding?",-1892210030),true], null),tm);
}));
} else {
return null;
}
});

//# sourceMappingURL=schpaa.time.js.map
