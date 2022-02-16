goog.provide('tick.alpha.interval');
tick.alpha.interval.make_interval = (function tick$alpha$interval$make_interval(beginning,end){
if(cljs.core.truth_(tick.protocols._LT_(beginning,end))){
} else {
throw (new Error("Assert failed: (p/< beginning end)"));
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning,new cljs.core.Keyword("tick","end","tick/end",-269896517),end], null);
});

/**
 * @interface
 */
tick.alpha.interval.ITimeSpanable = function(){};

var tick$alpha$interval$ITimeSpanable$temporal_value$dyn_75279 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (tick.alpha.interval.temporal_value[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (tick.alpha.interval.temporal_value["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("ITimeSpanable.temporal-value",_);
}
}
});
/**
 * Return a value of a type that satisfies p/ITimeSpan
 */
tick.alpha.interval.temporal_value = (function tick$alpha$interval$temporal_value(_){
if((((!((_ == null)))) && ((!((_.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 == null)))))){
return _.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1(_);
} else {
return tick$alpha$interval$ITimeSpanable$temporal_value$dyn_75279(_);
}
});

(java.time.YearMonth.prototype.tick$alpha$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 = (function (ym){
var ym__$1 = this;
return ym__$1;
}));

(java.time.Year.prototype.tick$alpha$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 = (function (y){
var y__$1 = this;
return y__$1;
}));

(java.time.ZonedDateTime.prototype.tick$alpha$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.ZonedDateTime.prototype.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 = (function (zdt){
var zdt__$1 = this;
return zdt__$1;
}));

(java.time.Instant.prototype.tick$alpha$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Instant.prototype.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 = (function (i){
var i__$1 = this;
return i__$1;
}));

(Date.prototype.tick$alpha$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return tick.protocols.instant(d__$1);
}));

(java.time.LocalDate.prototype.tick$alpha$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 = (function (d){
var d__$1 = this;
return d__$1;
}));

(tick.alpha.interval.ITimeSpanable["string"] = true);

(tick.alpha.interval.temporal_value["string"] = (function (s){
return tick.alpha.interval.temporal_value(tick.protocols.parse(s));
}));

(tick.alpha.interval.ITimeSpanable["function"] = true);

(tick.alpha.interval.temporal_value["function"] = (function (f){
return tick.alpha.interval.temporal_value((f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
}));

(java.time.LocalTime.prototype.tick$alpha$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalTime.prototype.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 = (function (t){
var t__$1 = this;
return t__$1;
}));

(java.time.OffsetDateTime.prototype.tick$alpha$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.OffsetDateTime.prototype.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 = (function (odt){
var odt__$1 = this;
return odt__$1;
}));

(java.time.LocalDateTime.prototype.tick$alpha$interval$ITimeSpanable$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDateTime.prototype.tick$alpha$interval$ITimeSpanable$temporal_value$arity$1 = (function (ldt){
var ldt__$1 = this;
return ldt__$1;
}));
tick.alpha.interval.new_interval = (function tick$alpha$interval$new_interval(v1,v2){
var t1 = tick.protocols.beginning(tick.alpha.interval.temporal_value(v1));
var t2 = tick.protocols.end(tick.alpha.interval.temporal_value(v2));
if(cljs.core.truth_(tick.protocols._LT_(t1,t2))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),t1,new cljs.core.Keyword("tick","end","tick/end",-269896517),t2], null);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Interval must span between two times, the first must be before the second",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),v1,new cljs.core.Keyword("tick","end","tick/end",-269896517),v2], null));
}
});
tick.alpha.interval.extend = (function tick$alpha$interval$extend(ival,dur){
return tick.alpha.interval.make_interval(tick.protocols.beginning(ival),tick.protocols.forward_duration(tick.protocols.end(ival),dur));
});
tick.alpha.interval.scale = (function tick$alpha$interval$scale(ival,factor){
return tick.alpha.interval.make_interval(tick.protocols.beginning(ival),tick.protocols.forward_duration(tick.protocols.beginning(ival),cljc.java_time.duration.multiplied_by(tick.core.duration(ival),factor)));
});
(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeShift$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeShift$forward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),(function (p1__75008_SHARP_){
return tick.protocols.forward_duration(p1__75008_SHARP_,d);
})),new cljs.core.Keyword("tick","end","tick/end",-269896517),(function (p1__75009_SHARP_){
return tick.protocols.forward_duration(p1__75009_SHARP_,d);
}));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeShift$backward_duration$arity$2 = (function (ival,d){
var ival__$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(ival__$1,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),(function (p1__75010_SHARP_){
return tick.protocols.backward_duration(p1__75010_SHARP_,d);
})),new cljs.core.Keyword("tick","end","tick/end",-269896517),(function (p1__75011_SHARP_){
return tick.protocols.backward_duration(p1__75011_SHARP_,d);
}));
}));
(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeReify$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeReify$on$arity$2 = (function (i,date){
var i__$1 = this;
return tick.alpha.interval.new_interval(tick.protocols.on(tick.protocols.beginning(i__$1),date),tick.protocols.on(tick.protocols.end(i__$1),date));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeReify$in$arity$2 = (function (i,zone){
var i__$1 = this;
return tick.alpha.interval.new_interval(tick.protocols.in$(tick.protocols.beginning(i__$1),zone),tick.protocols.in$(tick.protocols.end(i__$1),zone));
}));
tick.alpha.interval.bounds = (function tick$alpha$interval$bounds(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75283 = arguments.length;
var i__4865__auto___75284 = (0);
while(true){
if((i__4865__auto___75284 < len__4864__auto___75283)){
args__4870__auto__.push((arguments[i__4865__auto___75284]));

var G__75285 = (i__4865__auto___75284 + (1));
i__4865__auto___75284 = G__75285;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tick.alpha.interval.bounds.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tick.alpha.interval.bounds.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return tick.alpha.interval.make_interval(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.min,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning,args)),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.protocols.end,args)));
}));

(tick.alpha.interval.bounds.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.alpha.interval.bounds.cljs$lang$applyTo = (function (seq75019){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75019));
}));

tick.alpha.interval.am = (function tick$alpha$interval$am(date){
return tick.alpha.interval.new_interval(tick.protocols.beginning(date),tick.core.noon.cljs$core$IFn$_invoke$arity$1(date));
});
tick.alpha.interval.pm = (function tick$alpha$interval$pm(date){
return tick.alpha.interval.new_interval(tick.core.noon.cljs$core$IFn$_invoke$arity$1(date),tick.protocols.end(date));
});
tick.alpha.interval.precedes_QMARK_ = (function tick$alpha$interval$precedes_QMARK_(x,y){
return tick.protocols._LT_(tick.protocols.end(x),tick.protocols.beginning(y));
});
tick.alpha.interval.equals_QMARK_ = (function tick$alpha$interval$equals_QMARK_(x,y){
var and__4251__auto__ = tick.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4251__auto__)){
return tick.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.end(y));
} else {
return and__4251__auto__;
}
});
tick.alpha.interval.meets_QMARK_ = (function tick$alpha$interval$meets_QMARK_(x,y){
return tick.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.beginning(y));
});
tick.alpha.interval.overlaps_QMARK_ = (function tick$alpha$interval$overlaps_QMARK_(x,y){
var and__4251__auto__ = tick.core._LT_.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4251__auto__)){
var and__4251__auto____$1 = tick.core._GT_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4251__auto____$1)){
return tick.core._LT_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.end(y));
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
});
tick.alpha.interval.during_QMARK_ = (function tick$alpha$interval$during_QMARK_(x,y){
var and__4251__auto__ = tick.core._GT_.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4251__auto__)){
return tick.core._LT_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.end(y));
} else {
return and__4251__auto__;
}
});
tick.alpha.interval.starts_QMARK_ = (function tick$alpha$interval$starts_QMARK_(x,y){
var and__4251__auto__ = tick.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4251__auto__)){
return tick.core._LT_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.end(y));
} else {
return and__4251__auto__;
}
});
tick.alpha.interval.finishes_QMARK_ = (function tick$alpha$interval$finishes_QMARK_(x,y){
var and__4251__auto__ = tick.core._GT_.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning(x),tick.protocols.beginning(y));
if(cljs.core.truth_(and__4251__auto__)){
return tick.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(x),tick.protocols.end(y));
} else {
return and__4251__auto__;
}
});
/**
 * The converse of a basic relation.
 */
tick.alpha.interval.conv = (function tick$alpha$interval$conv(f){
return (function (x,y){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(y,x) : f.call(null,y,x));
});
});
tick.alpha.interval.preceded_by_QMARK_ = (function tick$alpha$interval$preceded_by_QMARK_(x,y){
return tick.alpha.interval.conv(tick.alpha.interval.precedes_QMARK_)(x,y);
});
tick.alpha.interval.met_by_QMARK_ = (function tick$alpha$interval$met_by_QMARK_(x,y){
return tick.alpha.interval.conv(tick.alpha.interval.meets_QMARK_)(x,y);
});
tick.alpha.interval.overlapped_by_QMARK_ = (function tick$alpha$interval$overlapped_by_QMARK_(x,y){
return tick.alpha.interval.conv(tick.alpha.interval.overlaps_QMARK_)(x,y);
});
tick.alpha.interval.finished_by_QMARK_ = (function tick$alpha$interval$finished_by_QMARK_(x,y){
return tick.alpha.interval.conv(tick.alpha.interval.finishes_QMARK_)(x,y);
});
tick.alpha.interval.contains_QMARK_ = (function tick$alpha$interval$contains_QMARK_(x,y){
return tick.alpha.interval.conv(tick.alpha.interval.during_QMARK_)(x,y);
});
tick.alpha.interval.started_by_QMARK_ = (function tick$alpha$interval$started_by_QMARK_(x,y){
return tick.alpha.interval.conv(tick.alpha.interval.starts_QMARK_)(x,y);
});
tick.alpha.interval.relation__GT_kw = cljs.core.PersistentHashMap.fromArrays([tick.alpha.interval.contains_QMARK_,tick.alpha.interval.starts_QMARK_,tick.alpha.interval.started_by_QMARK_,tick.alpha.interval.overlaps_QMARK_,tick.alpha.interval.equals_QMARK_,tick.alpha.interval.meets_QMARK_,tick.alpha.interval.met_by_QMARK_,tick.alpha.interval.finished_by_QMARK_,tick.alpha.interval.preceded_by_QMARK_,tick.alpha.interval.precedes_QMARK_,tick.alpha.interval.during_QMARK_,tick.alpha.interval.overlapped_by_QMARK_,tick.alpha.interval.finishes_QMARK_],[new cljs.core.Keyword(null,"contains","contains",676899812),new cljs.core.Keyword(null,"starts","starts",-1501572425),new cljs.core.Keyword(null,"started-by","started-by",1211835163),new cljs.core.Keyword(null,"overlaps","overlaps",1398230580),new cljs.core.Keyword(null,"equals","equals",-463033970),new cljs.core.Keyword(null,"meets","meets",-1936224493),new cljs.core.Keyword(null,"met-by","met-by",-2020460159),new cljs.core.Keyword(null,"finished-by","finished-by",-1361081637),new cljs.core.Keyword(null,"preceded-by","preceded-by",1381560976),new cljs.core.Keyword(null,"precedes","precedes",-1540274203),new cljs.core.Keyword(null,"during","during",351301349),new cljs.core.Keyword(null,"overlapped-by","overlapped-by",1890442040),new cljs.core.Keyword(null,"finishes","finishes",-431359586)]);
tick.alpha.interval.basic_relations = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.alpha.interval.precedes_QMARK_,tick.alpha.interval.meets_QMARK_,tick.alpha.interval.overlaps_QMARK_,tick.alpha.interval.finished_by_QMARK_,tick.alpha.interval.contains_QMARK_,tick.alpha.interval.starts_QMARK_,tick.alpha.interval.equals_QMARK_,tick.alpha.interval.started_by_QMARK_,tick.alpha.interval.during_QMARK_,tick.alpha.interval.finishes_QMARK_,tick.alpha.interval.overlapped_by_QMARK_,tick.alpha.interval.met_by_QMARK_,tick.alpha.interval.preceded_by_QMARK_], null);

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IFn}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
tick.alpha.interval.GeneralRelation = (function (relations,__meta,__extmap,__hash){
this.relations = relations;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716171;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(tick.alpha.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k75026,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__75035 = k75026;
var G__75035__$1 = (((G__75035 instanceof cljs.core.Keyword))?G__75035.fqn:null);
switch (G__75035__$1) {
case "relations":
return self__.relations;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k75026,else__4505__auto__);

}
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__75038){
var vec__75039 = p__75038;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75039,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75039,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#tick.alpha.interval.GeneralRelation{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations],null))], null),self__.__extmap));
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__75025){
var self__ = this;
var G__75025__$1 = this;
return (new cljs.core.RecordIter((0),G__75025__$1,1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"relations","relations",-427124442)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(tick.alpha.interval.GeneralRelation.prototype.call = (function (unused__10796__auto__){
var self__ = this;
var self__ = this;
var G__75045 = (arguments.length - (1));
switch (G__75045) {
case (2):
return self__.cljs$core$IFn$_invoke$arity$2((arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((arguments.length - (1)))].join('')));

}
}));

(tick.alpha.interval.GeneralRelation.prototype.apply = (function (self__,args75031){
var self__ = this;
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args75031)));
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var self__ = this;
var _ = this;
return cljs.core.some((function (f){
if(cljs.core.truth_((f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(x,y) : f.call(null,x,y)))){
return f;
} else {
return null;
}
}),self__.relations);
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new tick.alpha.interval.GeneralRelation(self__.relations,self__.__meta,self__.__extmap,self__.__hash));
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1008814550 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this75027,other75028){
var self__ = this;
var this75027__$1 = this;
return (((!((other75028 == null)))) && ((((this75027__$1.constructor === other75028.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75027__$1.relations,other75028.relations)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this75027__$1.__extmap,other75028.__extmap)))))));
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"relations","relations",-427124442),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new tick.alpha.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k75026){
var self__ = this;
var this__4509__auto____$1 = this;
var G__75053 = k75026;
var G__75053__$1 = (((G__75053 instanceof cljs.core.Keyword))?G__75053.fqn:null);
switch (G__75053__$1) {
case "relations":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k75026);

}
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__75025){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__75054 = cljs.core.keyword_identical_QMARK_;
var expr__75055 = k__4511__auto__;
if(cljs.core.truth_((pred__75054.cljs$core$IFn$_invoke$arity$2 ? pred__75054.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"relations","relations",-427124442),expr__75055) : pred__75054.call(null,new cljs.core.Keyword(null,"relations","relations",-427124442),expr__75055)))){
return (new tick.alpha.interval.GeneralRelation(G__75025,self__.__meta,self__.__extmap,null));
} else {
return (new tick.alpha.interval.GeneralRelation(self__.relations,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__75025),null));
}
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relations","relations",-427124442),self__.relations,null))], null),self__.__extmap));
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__75025){
var self__ = this;
var this__4501__auto____$1 = this;
return (new tick.alpha.interval.GeneralRelation(self__.relations,G__75025,self__.__extmap,self__.__hash));
}));

(tick.alpha.interval.GeneralRelation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(tick.alpha.interval.GeneralRelation.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"relations","relations",1213407085,null)], null);
}));

(tick.alpha.interval.GeneralRelation.cljs$lang$type = true);

(tick.alpha.interval.GeneralRelation.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"tick.alpha.interval/GeneralRelation",null,(1),null));
}));

(tick.alpha.interval.GeneralRelation.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"tick.alpha.interval/GeneralRelation");
}));

/**
 * Positional factory function for tick.alpha.interval/GeneralRelation.
 */
tick.alpha.interval.__GT_GeneralRelation = (function tick$alpha$interval$__GT_GeneralRelation(relations){
return (new tick.alpha.interval.GeneralRelation(relations,null,null,null));
});

/**
 * Factory function for tick.alpha.interval/GeneralRelation, taking a map of keywords to field values.
 */
tick.alpha.interval.map__GT_GeneralRelation = (function tick$alpha$interval$map__GT_GeneralRelation(G__75029){
var extmap__4542__auto__ = (function (){var G__75058 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__75029,new cljs.core.Keyword(null,"relations","relations",-427124442));
if(cljs.core.record_QMARK_(G__75029)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__75058);
} else {
return G__75058;
}
})();
return (new tick.alpha.interval.GeneralRelation(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(G__75029),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

tick.alpha.interval.new_relation = (function tick$alpha$interval$new_relation(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75296 = arguments.length;
var i__4865__auto___75297 = (0);
while(true){
if((i__4865__auto___75297 < len__4864__auto___75296)){
args__4870__auto__.push((arguments[i__4865__auto___75297]));

var G__75298 = (i__4865__auto___75297 + (1));
i__4865__auto___75297 = G__75298;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tick.alpha.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tick.alpha.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic = (function (basic_relations){
return tick.alpha.interval.__GT_GeneralRelation(basic_relations);
}));

(tick.alpha.interval.new_relation.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.alpha.interval.new_relation.cljs$lang$applyTo = (function (seq75059){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75059));
}));

/**
 * A function to determine the (basic) relation between two intervals.
 */
tick.alpha.interval.basic_relation = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.alpha.interval.new_relation,tick.alpha.interval.basic_relations);
tick.alpha.interval.relation = (function tick$alpha$interval$relation(x,y){
var G__75062 = (tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x,y) : tick.alpha.interval.basic_relation.call(null,x,y));
return (tick.alpha.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1 ? tick.alpha.interval.relation__GT_kw.cljs$core$IFn$_invoke$arity$1(G__75062) : tick.alpha.interval.relation__GT_kw.call(null,G__75062));
});
/**
 * Return the complement of the general relation. The complement ~r of
 *   a relation r is the relation consisting of all basic relations not
 *   in r.
 */
tick.alpha.interval.complement_r = (function tick$alpha$interval$complement_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)),tick.alpha.interval.basic_relations));
});
tick.alpha.interval.not_yet_implemented = (function tick$alpha$interval$not_yet_implemented(){
return (new Error("Not yet implemented"));
});
/**
 * Return the composition of r and s
 */
tick.alpha.interval.compose_r = (function tick$alpha$interval$compose_r(_r,_s){
throw tick.alpha.interval.not_yet_implemented();
});
/**
 * Return the converse of the given general relation. The converse !r
 *   of a relation r is the relation consisting of the converses of all
 *   basic relations in r.
 */
tick.alpha.interval.converse_r = (function tick$alpha$interval$converse_r(r){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(r,new cljs.core.Keyword(null,"relations","relations",-427124442),cljs.core.map.cljs$core$IFn$_invoke$arity$2(tick.alpha.interval.conv,new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r)));
});
/**
 * Return the intersection of the r with s
 */
tick.alpha.interval.intersection_r = (function tick$alpha$interval$intersection_r(r,_s){
if((r instanceof tick.alpha.interval.GeneralRelation)){
} else {
throw (new Error("Assert failed: (instance? GeneralRelation r)"));
}

tick.alpha.interval.__GT_GeneralRelation(clojure.set.intersection.cljs$core$IFn$_invoke$arity$1(cljs.core.set(new cljs.core.Keyword(null,"relations","relations",-427124442).cljs$core$IFn$_invoke$arity$1(r))));

throw tick.alpha.interval.not_yet_implemented();
});
tick.alpha.interval.disjoint_QMARK_ = tick.alpha.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.interval.precedes_QMARK_,tick.alpha.interval.preceded_by_QMARK_,tick.alpha.interval.meets_QMARK_,tick.alpha.interval.met_by_QMARK_], 0));
tick.alpha.interval.concur_QMARK_ = tick.alpha.interval.complement_r(tick.alpha.interval.disjoint_QMARK_);
tick.alpha.interval.precedes_or_meets_QMARK_ = tick.alpha.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.interval.precedes_QMARK_,tick.alpha.interval.meets_QMARK_], 0));

/**
 * @interface
 */
tick.alpha.interval.IIntervalOps = function(){};

var tick$alpha$interval$IIntervalOps$slice$dyn_75299 = (function (this$,beginning,end){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (tick.alpha.interval.slice[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4551__auto__.call(null,this$,beginning,end));
} else {
var m__4549__auto__ = (tick.alpha.interval.slice["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,beginning,end) : m__4549__auto__.call(null,this$,beginning,end));
} else {
throw cljs.core.missing_protocol("IIntervalOps.slice",this$);
}
}
});
/**
 * Fit the interval between beginning and end, slicing off one or both ends as necessary
 */
tick.alpha.interval.slice = (function tick$alpha$interval$slice(this$,beginning,end){
if((((!((this$ == null)))) && ((!((this$.tick$alpha$interval$IIntervalOps$slice$arity$3 == null)))))){
return this$.tick$alpha$interval$IIntervalOps$slice$arity$3(this$,beginning,end);
} else {
return tick$alpha$interval$IIntervalOps$slice$dyn_75299(this$,beginning,end);
}
});

var tick$alpha$interval$IIntervalOps$splice$dyn_75300 = (function (this$,ival){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (tick.alpha.interval.splice[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4551__auto__.call(null,this$,ival));
} else {
var m__4549__auto__ = (tick.alpha.interval.splice["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,ival) : m__4549__auto__.call(null,this$,ival));
} else {
throw cljs.core.missing_protocol("IIntervalOps.splice",this$);
}
}
});
/**
 * Splice another interval on to this one
 */
tick.alpha.interval.splice = (function tick$alpha$interval$splice(this$,ival){
if((((!((this$ == null)))) && ((!((this$.tick$alpha$interval$IIntervalOps$splice$arity$2 == null)))))){
return this$.tick$alpha$interval$IIntervalOps$splice$arity$2(this$,ival);
} else {
return tick$alpha$interval$IIntervalOps$splice$dyn_75300(this$,ival);
}
});

var tick$alpha$interval$IIntervalOps$split$dyn_75301 = (function (this$,t){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (tick.alpha.interval.split[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4551__auto__.call(null,this$,t));
} else {
var m__4549__auto__ = (tick.alpha.interval.split["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,t) : m__4549__auto__.call(null,this$,t));
} else {
throw cljs.core.missing_protocol("IIntervalOps.split",this$);
}
}
});
/**
 * Split ival into 2 intervals at t, returned as a 2-element vector
 */
tick.alpha.interval.split = (function tick$alpha$interval$split(this$,t){
if((((!((this$ == null)))) && ((!((this$.tick$alpha$interval$IIntervalOps$split$arity$2 == null)))))){
return this$.tick$alpha$interval$IIntervalOps$split$arity$2(this$,t);
} else {
return tick$alpha$interval$IIntervalOps$split$dyn_75301(this$,t);
}
});

tick.alpha.interval.split_with_assert = (function tick$alpha$interval$split_with_assert(ival,t){
if(cljs.core.truth_((function (){var and__4251__auto__ = tick.protocols._LT_(tick.protocols.beginning(ival),t);
if(cljs.core.truth_(and__4251__auto__)){
return tick.protocols._LT_(t,tick.protocols.end(ival));
} else {
return and__4251__auto__;
}
})())){
} else {
throw (new Error("Assert failed: (and (p/< (p/beginning ival) t) (p/< t (p/end ival)))"));
}

return tick.alpha.interval.split(ival,t);
});
tick.alpha.interval.slice_interval = (function tick$alpha$interval$slice_interval(ival,beginning,end){
var beginning__$1 = tick.core.max.cljs$core$IFn$_invoke$arity$variadic(tick.protocols.beginning(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([beginning], 0));
var end__$1 = tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.protocols.end(ival),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([end], 0));
if(cljs.core.truth_(tick.protocols._LT_(beginning__$1,end__$1))){
if(cljs.core.associative_QMARK_(ival)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(ival,new cljs.core.Keyword("tick","beginning","tick/beginning",82659968),beginning__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("tick","end","tick/end",-269896517),end__$1], 0));
} else {
return tick.alpha.interval.make_interval(beginning__$1,end__$1);
}
} else {
return null;
}
});
tick.alpha.interval.split_interval = (function tick$alpha$interval$split_interval(ival,t){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.alpha.interval.slice_interval(ival,tick.protocols.beginning(ival),t),tick.alpha.interval.slice_interval(ival,t,tick.protocols.end(ival))], null);
});
tick.alpha.interval.flatten = (function tick$alpha$interval$flatten(s){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (x){
var temp__5751__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(temp__5751__auto__)){
var ivals = temp__5751__auto__;
return ivals;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([s], 0));
});
(cljs.core.PersistentArrayMap.prototype.tick$alpha$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$alpha$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
var temp__5751__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var intervals = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__75079_SHARP_){
return tick.alpha.interval.slice(p1__75079_SHARP_,beginning,end);
}),intervals)));
} else {
return tick.alpha.interval.slice_interval(this$__$1,beginning,end);
}
}));

(cljs.core.PersistentArrayMap.prototype.tick$alpha$interval$IIntervalOps$splice$arity$2 = (function (this$,other){
var this$__$1 = this;
var this_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
var other_intervals = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(other);
if(cljs.core.truth_((function (){var and__4251__auto__ = this_intervals;
if(cljs.core.truth_(and__4251__auto__)){
return other_intervals;
} else {
return and__4251__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.concat,other_intervals);
} else {
if(cljs.core.truth_(this_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,other);
} else {
if(cljs.core.truth_(other_intervals)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(other,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.conj,this$__$1);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1,other], null)], null);

}
}
}
}));

(cljs.core.PersistentArrayMap.prototype.tick$alpha$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
var temp__5751__auto__ = new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(this$__$1);
if(cljs.core.truth_(temp__5751__auto__)){
var intervals = temp__5751__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__75080_SHARP_){
return tick.alpha.interval.slice(p1__75080_SHARP_,tick.protocols.beginning(this$__$1),t);
}),intervals))),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(this$__$1,new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__75081_SHARP_){
return tick.alpha.interval.slice(p1__75081_SHARP_,t,tick.protocols.end(this$__$1));
}),intervals)))], null);
} else {
return tick.alpha.interval.split_interval(this$__$1,t);
}
}));

(java.time.LocalDate.prototype.tick$alpha$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$alpha$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.alpha.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.LocalDate.prototype.tick$alpha$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.LocalDate.prototype.tick$alpha$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.alpha.interval.split_interval(this$__$1,t);
}));

(java.time.YearMonth.prototype.tick$alpha$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$alpha$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.alpha.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.YearMonth.prototype.tick$alpha$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.YearMonth.prototype.tick$alpha$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.alpha.interval.split_interval(this$__$1,t);
}));

(java.time.Year.prototype.tick$alpha$interval$IIntervalOps$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$alpha$interval$IIntervalOps$slice$arity$3 = (function (this$,beginning,end){
var this$__$1 = this;
return tick.alpha.interval.slice_interval(this$__$1,beginning,end);
}));

(java.time.Year.prototype.tick$alpha$interval$IIntervalOps$splice$arity$2 = (function (this$,ival){
var this$__$1 = this;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("splice not implemented",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"this","this",-611633625),this$__$1,new cljs.core.Keyword(null,"interval","interval",1708495417),ival], null));
}));

(java.time.Year.prototype.tick$alpha$interval$IIntervalOps$split$arity$2 = (function (this$,t){
var this$__$1 = this;
return tick.alpha.interval.split_interval(this$__$1,t);
}));
/**
 * Return the interval representing the interval, if there is one,
 *   representing the interval of time the given intervals are
 *   concurrent.
 */
tick.alpha.interval.concur = (function tick$alpha$interval$concur(var_args){
var G__75086 = arguments.length;
switch (G__75086) {
case 2:
return tick.alpha.interval.concur.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___75306 = arguments.length;
var i__4865__auto___75307 = (0);
while(true){
if((i__4865__auto___75307 < len__4864__auto___75306)){
args_arr__4885__auto__.push((arguments[i__4865__auto___75307]));

var G__75308 = (i__4865__auto___75307 + (1));
i__4865__auto___75307 = G__75308;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return tick.alpha.interval.concur.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(tick.alpha.interval.concur.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
var G__75087 = tick.alpha.interval.relation(x,y);
var G__75087__$1 = (((G__75087 instanceof cljs.core.Keyword))?G__75087.fqn:null);
switch (G__75087__$1) {
case "overlaps":
return tick.alpha.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(x));

break;
case "overlapped-by":
return tick.alpha.interval.slice(x,tick.protocols.beginning(x),tick.protocols.end(y));

break;
case "starts":
case "finishes":
case "during":
case "equals":
return x;

break;
case "started-by":
case "finished-by":
case "contains":
return tick.alpha.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(y));

break;
default:
return null;

}
}));

(tick.alpha.interval.concur.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,args){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.alpha.interval.concur,tick.alpha.interval.concur.cljs$core$IFn$_invoke$arity$2(x,y),args);
}));

/** @this {Function} */
(tick.alpha.interval.concur.cljs$lang$applyTo = (function (seq75083){
var G__75084 = cljs.core.first(seq75083);
var seq75083__$1 = cljs.core.next(seq75083);
var G__75085 = cljs.core.first(seq75083__$1);
var seq75083__$2 = cljs.core.next(seq75083__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75084,G__75085,seq75083__$2);
}));

(tick.alpha.interval.concur.cljs$lang$maxFixedArity = (2));

/**
 * Return a sequence of occurances where intervals coincide (having
 *   non-nil concur intervals).
 */
tick.alpha.interval.concurrencies = (function tick$alpha$interval$concurrencies(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75311 = arguments.length;
var i__4865__auto___75312 = (0);
while(true){
if((i__4865__auto___75312 < len__4864__auto___75311)){
args__4870__auto__.push((arguments[i__4865__auto___75312]));

var G__75313 = (i__4865__auto___75312 + (1));
i__4865__auto___75312 = G__75313;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tick.alpha.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tick.alpha.interval.concurrencies.cljs$core$IFn$_invoke$arity$variadic = (function (intervals){
var intervals__$1 = cljs.core.vec(intervals);
var iter__4652__auto__ = (function tick$alpha$interval$iter__75089(s__75090){
return (new cljs.core.LazySeq(null,(function (){
var s__75090__$1 = s__75090;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75090__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var xi = cljs.core.first(xs__6308__auto__);
var iterys__4648__auto__ = ((function (s__75090__$1,xi,xs__6308__auto__,temp__5753__auto__,intervals__$1){
return (function tick$alpha$interval$iter__75089_$_iter__75091(s__75092){
return (new cljs.core.LazySeq(null,((function (s__75090__$1,xi,xs__6308__auto__,temp__5753__auto__,intervals__$1){
return (function (){
var s__75092__$1 = s__75092;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__75092__$1);
if(temp__5753__auto____$1){
var s__75092__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__75092__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75092__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75094 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75093 = (0);
while(true){
if((i__75093 < size__4651__auto__)){
var yi = cljs.core._nth(c__4650__auto__,i__75093);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.alpha.interval.concur.cljs$core$IFn$_invoke$arity$2(x,y);
if(cljs.core.truth_(conc)){
cljs.core.chunk_append(b__75094,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.alpha.interval.relation(x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null));

var G__75315 = (i__75093 + (1));
i__75093 = G__75315;
continue;
} else {
var G__75316 = (i__75093 + (1));
i__75093 = G__75316;
continue;
}
} else {
var G__75317 = (i__75093 + (1));
i__75093 = G__75317;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75094),tick$alpha$interval$iter__75089_$_iter__75091(cljs.core.chunk_rest(s__75092__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75094),null);
}
} else {
var yi = cljs.core.first(s__75092__$2);
if((xi < yi)){
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,xi);
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(intervals__$1,yi);
var conc = tick.alpha.interval.concur.cljs$core$IFn$_invoke$arity$2(x,y);
if(cljs.core.truth_(conc)){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.alpha.interval.relation(x,y),new cljs.core.Keyword(null,"concur","concur",4812827),conc], null),tick$alpha$interval$iter__75089_$_iter__75091(cljs.core.rest(s__75092__$2)));
} else {
var G__75318 = cljs.core.rest(s__75092__$2);
s__75092__$1 = G__75318;
continue;
}
} else {
var G__75319 = cljs.core.rest(s__75092__$2);
s__75092__$1 = G__75319;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__75090__$1,xi,xs__6308__auto__,temp__5753__auto__,intervals__$1))
,null,null));
});})(s__75090__$1,xi,xs__6308__auto__,temp__5753__auto__,intervals__$1))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1))));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,tick$alpha$interval$iter__75089(cljs.core.rest(s__75090__$1)));
} else {
var G__75320 = cljs.core.rest(s__75090__$1);
s__75090__$1 = G__75320;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(intervals__$1)));
}));

(tick.alpha.interval.concurrencies.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.alpha.interval.concurrencies.cljs$lang$applyTo = (function (seq75088){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75088));
}));

tick.alpha.interval.interval = (function tick$alpha$interval$interval(t){
return tick.alpha.interval.new_interval(tick.protocols.beginning(t),tick.protocols.end(t));
});
(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$_EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var and__4251__auto__ = tick.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.beginning(x__$1),tick.core.beginning(y));
if(cljs.core.truth_(and__4251__auto__)){
return tick.core._EQ_.cljs$core$IFn$_invoke$arity$2(tick.core.end(x__$1),tick.core.end(y));
} else {
return and__4251__auto__;
}
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$_LT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__75100 = (tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.alpha.interval.basic_relation.call(null,x__$1,y));
var fexpr__75099 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.alpha.interval.meets_QMARK_,tick.alpha.interval.precedes_QMARK_]);
return (fexpr__75099.cljs$core$IFn$_invoke$arity$1 ? fexpr__75099.cljs$core$IFn$_invoke$arity$1(G__75100) : fexpr__75099.call(null,G__75100));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$_LT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__75104 = (tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.alpha.interval.basic_relation.call(null,x__$1,y));
var fexpr__75103 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.alpha.interval.starts_QMARK_,tick.alpha.interval.overlaps_QMARK_,tick.alpha.interval.equals_QMARK_,tick.alpha.interval.meets_QMARK_,tick.alpha.interval.finished_by_QMARK_,tick.alpha.interval.precedes_QMARK_]);
return (fexpr__75103.cljs$core$IFn$_invoke$arity$1 ? fexpr__75103.cljs$core$IFn$_invoke$arity$1(G__75104) : fexpr__75103.call(null,G__75104));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$_GT_$arity$2 = (function (x,y){
var x__$1 = this;
var G__75106 = (tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.alpha.interval.basic_relation.call(null,x__$1,y));
var fexpr__75105 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.alpha.interval.met_by_QMARK_,tick.alpha.interval.preceded_by_QMARK_]);
return (fexpr__75105.cljs$core$IFn$_invoke$arity$1 ? fexpr__75105.cljs$core$IFn$_invoke$arity$1(G__75106) : fexpr__75105.call(null,G__75106));
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$ITimeComparison$_GT__EQ_$arity$2 = (function (x,y){
var x__$1 = this;
var G__75108 = (tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2 ? tick.alpha.interval.basic_relation.cljs$core$IFn$_invoke$arity$2(x__$1,y) : tick.alpha.interval.basic_relation.call(null,x__$1,y));
var fexpr__75107 = cljs.core.PersistentHashSet.createAsIfByAssoc([tick.alpha.interval.started_by_QMARK_,tick.alpha.interval.equals_QMARK_,tick.alpha.interval.met_by_QMARK_,tick.alpha.interval.preceded_by_QMARK_,tick.alpha.interval.overlapped_by_QMARK_,tick.alpha.interval.finishes_QMARK_]);
return (fexpr__75107.cljs$core$IFn$_invoke$arity$1 ? fexpr__75107.cljs$core$IFn$_invoke$arity$1(G__75108) : fexpr__75107.call(null,G__75108));
}));
/**
 * Are all the intervals in the given set time-ordered and
 *   disjoint? This is a useful property of a collection of
 *   intervals. The given collection must contain proper intervals (that
 *   is, intervals that have finite greater-than-zero durations).
 */
tick.alpha.interval.ordered_disjoint_intervals_QMARK_ = (function tick$alpha$interval$ordered_disjoint_intervals_QMARK_(s){
var rel = tick.alpha.interval.new_relation.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.alpha.interval.precedes_QMARK_,tick.alpha.interval.meets_QMARK_], 0));
return (!(((function (){var G__75112 = s;
var vec__75113 = G__75112;
var seq__75114 = cljs.core.seq(vec__75113);
var first__75115 = cljs.core.first(seq__75114);
var seq__75114__$1 = cljs.core.next(seq__75114);
var x = first__75115;
var xs = seq__75114__$1;
var G__75112__$1 = G__75112;
while(true){
var vec__75116 = G__75112__$1;
var seq__75117 = cljs.core.seq(vec__75116);
var first__75118 = cljs.core.first(seq__75117);
var seq__75117__$1 = cljs.core.next(seq__75117);
var x__$1 = first__75118;
var xs__$1 = seq__75117__$1;
if((((x__$1 == null)) || ((cljs.core.first(xs__$1) == null)))){
return true;
} else {
if(cljs.core.truth_((function (){var G__75119 = x__$1;
var G__75120 = cljs.core.first(xs__$1);
return (rel.cljs$core$IFn$_invoke$arity$2 ? rel.cljs$core$IFn$_invoke$arity$2(G__75119,G__75120) : rel.call(null,G__75119,G__75120));
})())){
var G__75323 = xs__$1;
G__75112__$1 = G__75323;
continue;
} else {
return null;
}
}
break;
}
})() == null)));
});
/**
 * Is the first interval in a sequence time-ordered and disjoint with
 *   respect to the second? Note, only compares first two in a
 *   sequence. Used by functions to ensure the head of the (possibly
 *   lazy) sequence satisfies this invariant.
 */
tick.alpha.interval.assert_proper_head = (function tick$alpha$interval$assert_proper_head(s){
var vec__75121 = s;
var initial = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75121,(0),null);
var subsequent = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75121,(1),null);
if(cljs.core.truth_((function (){var and__4251__auto__ = (initial == null);
if(and__4251__auto__){
return subsequent;
} else {
return and__4251__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected nil in sequence",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"nil-before","nil-before",1412757500),subsequent], null));
} else {
}

if(cljs.core.truth_(subsequent)){
if(cljs.core.truth_((tick.alpha.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.alpha.interval.precedes_or_meets_QMARK_.cljs$core$IFn$_invoke$arity$2(initial,subsequent) : tick.alpha.interval.precedes_or_meets_QMARK_.call(null,initial,subsequent)))){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered and disjoint",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),initial,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),subsequent], null));
}
} else {
}

return s;
});
/**
 * Unite concurrent intervals. Intervals must be ordered by beginning
 *   but not necessarily disjoint (the purpose of this function is to
 *   splice together intervals that are concurrent resulting in a
 *   time-ordered sequence of disjoint intervals that is returned.
 */
tick.alpha.interval.unite = (function tick$alpha$interval$unite(intervals){
var unite = (function tick$alpha$interval$unite_$_unite(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__75129 = intervals__$1;
var seq__75130 = cljs.core.seq(vec__75129);
var first__75131 = cljs.core.first(seq__75130);
var seq__75130__$1 = cljs.core.next(seq__75130);
var ival1 = first__75131;
var first__75131__$1 = cljs.core.first(seq__75130__$1);
var seq__75130__$2 = cljs.core.next(seq__75130__$1);
var ival2 = first__75131__$1;
var r = seq__75130__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,ival1,null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__75133 = tick.alpha.interval.relation(ival1,ival2);
var G__75133__$1 = (((G__75133 instanceof cljs.core.Keyword))?G__75133.fqn:null);
switch (G__75133__$1) {
case "precedes":
case "meets":
return cljs.core.cons(ival1,tick$alpha$interval$unite_$_unite(cljs.core.rest(intervals__$1)));

break;
case "overlaps":
case "contains":
case "starts":
case "started-by":
case "finished-by":
return tick$alpha$interval$unite_$_unite(cljs.core.cons(tick.alpha.interval.splice(ival1,ival2),r));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Intervals in sequence violate requirement that intervals are time-ordered",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"interval1","interval1",1775723179),ival1,new cljs.core.Keyword(null,"interval2","interval2",-1652593797),ival2,new cljs.core.Keyword(null,"relation","relation",-693437925),tick.alpha.interval.relation(ival1,ival2)], null));

}

}
}),null,null));
});
return unite(intervals);
});
/**
 * Return an interval group. Interval groups are maps with
 *   a :tick/intervals entry that contain a time-ordered sequence of
 *   disjoint intervals.
 */
tick.alpha.interval.new_interval_group = (function tick$alpha$interval$new_interval_group(x){
if(cljs.core.truth_(new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314).cljs$core$IFn$_invoke$arity$1(x))){
return x;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("tick","intervals","tick/intervals",2091945314),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null)], null);
}
});
/**
 * Within a time-ordered sequence of disjoint intervals, return a
 *   sequence of interval groups, splicing together meeting intervals.
 */
tick.alpha.interval.normalize = (function tick$alpha$interval$normalize(intervals){
var normalize = (function tick$alpha$interval$normalize_$_normalize(intervals__$1){
return (new cljs.core.LazySeq(null,(function (){
var vec__75145 = intervals__$1;
var seq__75146 = cljs.core.seq(vec__75145);
var first__75147 = cljs.core.first(seq__75146);
var seq__75146__$1 = cljs.core.next(seq__75146);
var ival1 = first__75147;
var first__75147__$1 = cljs.core.first(seq__75146__$1);
var seq__75146__$2 = cljs.core.next(seq__75146__$1);
var ival2 = first__75147__$1;
var r = seq__75146__$2;
if((ival2 == null)){
if(cljs.core.truth_(ival1)){
return (new cljs.core.List(null,tick.alpha.interval.new_interval_group(ival1),null,(1),null));
} else {
return cljs.core.List.EMPTY;
}
} else {
var G__75152 = tick.alpha.interval.relation(ival1,ival2);
var G__75152__$1 = (((G__75152 instanceof cljs.core.Keyword))?G__75152.fqn:null);
switch (G__75152__$1) {
case "meets":
return tick$alpha$interval$normalize_$_normalize(cljs.core.cons(tick.alpha.interval.splice(ival1,ival2),r));

break;
default:
return cljs.core.cons(tick.alpha.interval.new_interval_group(ival1),tick$alpha$interval$normalize_$_normalize(tick.alpha.interval.assert_proper_head(cljs.core.rest(intervals__$1))));

}
}
}),null,null));
});
return normalize(tick.alpha.interval.assert_proper_head(intervals));
});
/**
 * Merge multiple time-ordered sequences of disjoint intervals into a
 *   single sequence of time-ordered disjoint intervals.
 */
tick.alpha.interval.union = (function tick$alpha$interval$union(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75327 = arguments.length;
var i__4865__auto___75328 = (0);
while(true){
if((i__4865__auto___75328 < len__4864__auto___75327)){
args__4870__auto__.push((arguments[i__4865__auto___75328]));

var G__75329 = (i__4865__auto___75328 + (1));
i__4865__auto___75328 = G__75329;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return tick.alpha.interval.union.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(tick.alpha.interval.union.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
var union = (function tick$alpha$interval$union(colls__$1){
return (new cljs.core.LazySeq(null,(function (){
if((cljs.core.count(colls__$1) <= (1))){
return cljs.core.first(colls__$1);
} else {
var vec__75187 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__75157_SHARP_){
return tick.protocols.beginning(cljs.core.first(p1__75157_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,colls__$1));
var seq__75188 = cljs.core.seq(vec__75187);
var first__75189 = cljs.core.first(seq__75188);
var seq__75188__$1 = cljs.core.next(seq__75188);
var c1 = first__75189;
var first__75189__$1 = cljs.core.first(seq__75188__$1);
var seq__75188__$2 = cljs.core.next(seq__75188__$1);
var c2 = first__75189__$1;
var r = seq__75188__$2;
if((c2 == null)){
return c1;
} else {
if(cljs.core.truth_((function (){var G__75191 = cljs.core.first(c1);
var G__75192 = cljs.core.first(c2);
return (tick.alpha.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2 ? tick.alpha.interval.disjoint_QMARK_.cljs$core$IFn$_invoke$arity$2(G__75191,G__75192) : tick.alpha.interval.disjoint_QMARK_.call(null,G__75191,G__75192));
})())){
return cljs.core.cons(cljs.core.first(c1),tick$alpha$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.next(c1),c2,r)));
} else {
return tick$alpha$interval$union(cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.list,cljs.core.cons(tick.alpha.interval.splice(cljs.core.first(c1),cljs.core.first(c2)),cljs.core.next(c1)),cljs.core.next(c2),r));
}
}
}
}),null,null));
});
return union((function (){var iter__4652__auto__ = (function tick$alpha$interval$iter__75196(s__75197){
return (new cljs.core.LazySeq(null,(function (){
var s__75197__$1 = s__75197;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__75197__$1);
if(temp__5753__auto__){
var s__75197__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__75197__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__75197__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__75199 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__75198 = (0);
while(true){
if((i__75198 < size__4651__auto__)){
var coll = cljs.core._nth(c__4650__auto__,i__75198);
if(cljs.core.truth_(coll)){
cljs.core.chunk_append(b__75199,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning,coll));

var G__75333 = (i__75198 + (1));
i__75198 = G__75333;
continue;
} else {
var G__75334 = (i__75198 + (1));
i__75198 = G__75334;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__75199),tick$alpha$interval$iter__75196(cljs.core.chunk_rest(s__75197__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__75199),null);
}
} else {
var coll = cljs.core.first(s__75197__$2);
if(cljs.core.truth_(coll)){
return cljs.core.cons(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning,coll),tick$alpha$interval$iter__75196(cljs.core.rest(s__75197__$2)));
} else {
var G__75335 = cljs.core.rest(s__75197__$2);
s__75197__$1 = G__75335;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(colls);
})());
}));

(tick.alpha.interval.union.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(tick.alpha.interval.union.cljs$lang$applyTo = (function (seq75161){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq75161));
}));

tick.alpha.interval.conj = (function tick$alpha$interval$conj(coll,interval){
return tick.alpha.interval.union.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([coll,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)], 0));
});
/**
 * Return a time-ordered sequence of disjoint intervals where two or
 *   more intervals of the given sequences are concurrent. Arguments must
 *   be time-ordered sequences of disjoint intervals.
 */
tick.alpha.interval.intersection = (function tick$alpha$interval$intersection(var_args){
var G__75210 = arguments.length;
switch (G__75210) {
case 1:
return tick.alpha.interval.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.interval.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___75337 = arguments.length;
var i__4865__auto___75339 = (0);
while(true){
if((i__4865__auto___75339 < len__4864__auto___75337)){
args_arr__4885__auto__.push((arguments[i__4865__auto___75339]));

var G__75340 = (i__4865__auto___75339 + (1));
i__4865__auto___75339 = G__75340;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return tick.alpha.interval.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(tick.alpha.interval.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.alpha.interval.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var intersection = (function tick$alpha$interval$intersection(xs,ys){
return (new cljs.core.LazySeq(null,(function (){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
if(cljs.core.truth_((function (){var and__4251__auto__ = x;
if(cljs.core.truth_(and__4251__auto__)){
return y;
} else {
return and__4251__auto__;
}
})())){
var G__75212 = tick.alpha.interval.relation(x,y);
var G__75212__$1 = (((G__75212 instanceof cljs.core.Keyword))?G__75212.fqn:null);
switch (G__75212__$1) {
case "precedes":
case "meets":
return tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "preceded-by":
case "met-by":
return tick$alpha$interval$intersection(xs,tick.alpha.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "started-by":
return cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(y)),tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.alpha.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finished-by":
return cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(y)),tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),tick.alpha.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(x)),tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.alpha.interval.assert_proper_head(cljs.core.cons(tick.alpha.interval.slice(y,tick.protocols.end(x),tick.protocols.end(y)),cljs.core.next(ys)))));

break;
case "overlapped-by":
return cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.beginning(x),tick.protocols.end(y)),tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.alpha.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "contains":
return cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.beginning(y),tick.protocols.end(y)),tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.alpha.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "during":
return cljs.core.cons(x,tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),tick.alpha.interval.assert_proper_head(cljs.core.cons(tick.alpha.interval.slice(y,tick.protocols.end(x),tick.protocols.end(y)),cljs.core.next(ys)))));

break;
case "equals":
return cljs.core.cons(x,tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),tick.alpha.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "finishes":
return cljs.core.cons(x,tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),tick.alpha.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "starts":
return cljs.core.cons(x,tick$alpha$interval$intersection(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),tick.alpha.interval.assert_proper_head(cljs.core.cons(tick.alpha.interval.slice(y,tick.protocols.end(x),tick.protocols.end(y)),cljs.core.next(ys)))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75212__$1)].join('')));

}
} else {
return cljs.core.List.EMPTY;
}
}),null,null));
});
return intersection(tick.alpha.interval.assert_proper_head(s1),tick.alpha.interval.assert_proper_head(s2));
}));

(tick.alpha.interval.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.alpha.interval.intersection,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.alpha.interval.intersection.cljs$lang$applyTo = (function (seq75207){
var G__75208 = cljs.core.first(seq75207);
var seq75207__$1 = cljs.core.next(seq75207);
var G__75209 = cljs.core.first(seq75207__$1);
var seq75207__$2 = cljs.core.next(seq75207__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75208,G__75209,seq75207__$2);
}));

(tick.alpha.interval.intersection.cljs$lang$maxFixedArity = (2));

tick.alpha.interval.intersects_QMARK_ = (function tick$alpha$interval$intersects_QMARK_(ivals,interval){
return cljs.core.not_empty(tick.alpha.interval.intersection.cljs$core$IFn$_invoke$arity$2(ivals,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [interval], null)));
});
/**
 * Return an interval set that is the first set without elements of
 *   the remaining sets.
 */
tick.alpha.interval.difference = (function tick$alpha$interval$difference(var_args){
var G__75217 = arguments.length;
switch (G__75217) {
case 1:
return tick.alpha.interval.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.interval.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___75346 = arguments.length;
var i__4865__auto___75347 = (0);
while(true){
if((i__4865__auto___75347 < len__4864__auto___75346)){
args_arr__4885__auto__.push((arguments[i__4865__auto___75347]));

var G__75348 = (i__4865__auto___75347 + (1));
i__4865__auto___75347 = G__75348;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return tick.alpha.interval.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(tick.alpha.interval.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.alpha.interval.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var difference = (function tick$alpha$interval$difference(xs,ys){
var vec__75225 = xs;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75225,(0),null);
var vec__75228 = ys;
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75228,(0),null);
if(cljs.core.truth_(x)){
if(cljs.core.truth_(y)){
return (new cljs.core.LazySeq(null,(function (){
var G__75231 = tick.alpha.interval.relation(x,y);
var G__75231__$1 = (((G__75231 instanceof cljs.core.Keyword))?G__75231.fqn:null);
switch (G__75231__$1) {
case "precedes":
case "meets":
return cljs.core.cons(x,tick$alpha$interval$difference(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "preceded-by":
case "met-by":
return tick$alpha$interval$difference(xs,tick.alpha.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finishes":
case "during":
case "equals":
return tick$alpha$interval$difference(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),tick.alpha.interval.assert_proper_head(ys));

break;
case "starts":
return tick$alpha$interval$difference(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),ys);

break;
case "started-by":
case "overlapped-by":
return tick$alpha$interval$difference(tick.alpha.interval.assert_proper_head(cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.alpha.interval.assert_proper_head(cljs.core.next(ys)));

break;
case "finished-by":
return cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.beginning(x),tick.protocols.beginning(y)),tick$alpha$interval$difference(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),tick.alpha.interval.assert_proper_head(cljs.core.next(ys))));

break;
case "overlaps":
return cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.beginning(x),tick.protocols.beginning(y)),tick$alpha$interval$difference(tick.alpha.interval.assert_proper_head(cljs.core.next(xs)),ys));

break;
case "contains":
return cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.beginning(x),tick.protocols.beginning(y)),tick$alpha$interval$difference(tick.alpha.interval.assert_proper_head(cljs.core.cons(tick.alpha.interval.slice(x,tick.protocols.end(y),tick.protocols.end(x)),cljs.core.next(xs))),tick.alpha.interval.assert_proper_head(cljs.core.next(ys))));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75231__$1)].join('')));

}
}),null,null));
} else {
return xs;
}
} else {
return cljs.core.List.EMPTY;
}
});
tick.alpha.interval.assert_proper_head(s1);

tick.alpha.interval.assert_proper_head(s2);

return difference(s1,s2);
}));

(tick.alpha.interval.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.alpha.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.alpha.interval.difference.cljs$lang$applyTo = (function (seq75214){
var G__75215 = cljs.core.first(seq75214);
var seq75214__$1 = cljs.core.next(seq75214);
var G__75216 = cljs.core.first(seq75214__$1);
var seq75214__$2 = cljs.core.next(seq75214__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75215,G__75216,seq75214__$2);
}));

(tick.alpha.interval.difference.cljs$lang$maxFixedArity = (2));

tick.alpha.interval.complement = (function tick$alpha$interval$complement(coll){
if(cljs.core.empty_QMARK_(coll)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.alpha.interval.new_interval(tick.protocols.min_of_type(tick.core.now()),tick.protocols.max_of_type(tick.core.now()))], null);
} else {
var r = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__75234){
var vec__75235 = p__75234;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75235,(0),null);
var y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75235,(1),null);
if(cljs.core.truth_(tick.alpha.interval.meets_QMARK_(x,y))){
return null;
} else {
return tick.alpha.interval.new_interval(tick.protocols.end(x),tick.protocols.beginning(y));
}
}),cljs.core.partition.cljs$core$IFn$_invoke$arity$3((2),(1),coll));
var G__75238 = r;
var G__75238__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.beginning(cljs.core.first(coll)),tick.protocols.min_of_type(tick.protocols.beginning(cljs.core.first(coll)))))?(function (p1__75232_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.alpha.interval.new_interval(tick.protocols.min_of_type(tick.protocols.beginning(cljs.core.first(coll))),tick.protocols.beginning(cljs.core.first(coll)))], null),p1__75232_SHARP_);
})(G__75238):G__75238);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(tick.protocols.end(cljs.core.last(coll)),tick.protocols.max_of_type(tick.protocols.end(cljs.core.last(coll))))){
return (function (p1__75233_SHARP_){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(p1__75233_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.alpha.interval.new_interval(tick.protocols.end(cljs.core.last(coll)),tick.protocols.max_of_type(tick.protocols.end(cljs.core.last(coll))))], null));
})(G__75238__$1);
} else {
return G__75238__$1;
}
}
});
/**
 * Split s1 across the grating defined by s2
 */
tick.alpha.interval.disjoin = (function tick$alpha$interval$disjoin(var_args){
var G__75243 = arguments.length;
switch (G__75243) {
case 1:
return tick.alpha.interval.disjoin.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return tick.alpha.interval.disjoin.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4885__auto__ = [];
var len__4864__auto___75355 = arguments.length;
var i__4865__auto___75356 = (0);
while(true){
if((i__4865__auto___75356 < len__4864__auto___75355)){
args_arr__4885__auto__.push((arguments[i__4865__auto___75356]));

var G__75357 = (i__4865__auto___75356 + (1));
i__4865__auto___75356 = G__75357;
continue;
} else {
}
break;
}

var argseq__4886__auto__ = (new cljs.core.IndexedSeq(args_arr__4885__auto__.slice((2)),(0),null));
return tick.alpha.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4886__auto__);

}
});

(tick.alpha.interval.disjoin.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
}));

(tick.alpha.interval.disjoin.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
var xs = s1;
var ys = s2;
var result = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(xs))){
if(cljs.core.truth_(cljs.core.not_empty(ys))){
var x = cljs.core.first(xs);
var y = cljs.core.first(ys);
var G__75245 = tick.alpha.interval.relation(x,y);
var G__75245__$1 = (((G__75245 instanceof cljs.core.Keyword))?G__75245.fqn:null);
switch (G__75245__$1) {
case "precedes":
case "meets":
var G__75359 = cljs.core.next(xs);
var G__75360 = ys;
var G__75361 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,x);
xs = G__75359;
ys = G__75360;
result = G__75361;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75245__$1)].join('')));

}
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,result,xs);
}
} else {
return result;
}
break;
}
}));

(tick.alpha.interval.disjoin.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(tick.alpha.interval.difference,s1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(sets,s2));
}));

/** @this {Function} */
(tick.alpha.interval.disjoin.cljs$lang$applyTo = (function (seq75240){
var G__75241 = cljs.core.first(seq75240);
var seq75240__$1 = cljs.core.next(seq75240);
var G__75242 = cljs.core.first(seq75240__$1);
var seq75240__$2 = cljs.core.next(seq75240__$1);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75241,G__75242,seq75240__$2);
}));

(tick.alpha.interval.disjoin.cljs$lang$maxFixedArity = (2));

/**
 * Return a lazy sequence of java.time.Temporal instances over the
 *   given (local) interval.
 */
tick.alpha.interval.divide_by_apply = (function tick$alpha$interval$divide_by_apply(ival,f){
var G__75246 = tick.protocols.range((function (){var G__75247 = tick.protocols.beginning(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75247) : f.call(null,G__75247));
})(),(function (){var G__75248 = tick.protocols.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75248) : f.call(null,G__75248));
})());
if(cljs.core.truth_(tick.alpha.interval.concur.cljs$core$IFn$_invoke$arity$2((function (){var G__75249 = tick.protocols.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75249) : f.call(null,G__75249));
})(),ival))){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(G__75246,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__75250 = tick.protocols.end(ival);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75250) : f.call(null,G__75250));
})()], null));
} else {
return G__75246;
}
});
/**
 * Divide an interval by a duration, returning a sequence of
 *   intervals. If the interval cannot be wholly sub-divided by the
 *   duration divisor, the last interval will represent the 'remainder'
 *   of the division and not be as long as the other preceeding
 *   intervals.
 */
tick.alpha.interval.divide_by_duration = (function tick$alpha$interval$divide_by_duration(ival,dur){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__75251_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.protocols.forward_duration(p1__75251_SHARP_,dur),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.protocols.end(ival)], 0));
})),tick.protocols.range(tick.protocols.beginning(ival),tick.protocols.end(ival),dur));
});
tick.alpha.interval.divide_by_period = (function tick$alpha$interval$divide_by_period(ival,period){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,(function (p1__75252_SHARP_){
return tick.core.min.cljs$core$IFn$_invoke$arity$variadic(tick.protocols.forward_duration(p1__75252_SHARP_,period),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tick.protocols.end(ival)], 0));
})),tick.protocols.range(tick.protocols.beginning(ival),tick.protocols.end(ival),period));
});
tick.alpha.interval.divide_by_divisor = (function tick$alpha$interval$divide_by_divisor(ival,divisor){
return tick.alpha.interval.divide_by_duration(ival,cljc.java_time.duration.divided_by(tick.core.duration(ival),divisor));
});

/**
 * @interface
 */
tick.alpha.interval.IDivisibleInterval = function(){};

var tick$alpha$interval$IDivisibleInterval$divide_interval$dyn_75364 = (function (divisor,ival){
var x__4550__auto__ = (((divisor == null))?null:divisor);
var m__4551__auto__ = (tick.alpha.interval.divide_interval[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4551__auto__.call(null,divisor,ival));
} else {
var m__4549__auto__ = (tick.alpha.interval.divide_interval["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(divisor,ival) : m__4549__auto__.call(null,divisor,ival));
} else {
throw cljs.core.missing_protocol("IDivisibleInterval.divide-interval",divisor);
}
}
});
/**
 * Divide an interval by a given divisor
 */
tick.alpha.interval.divide_interval = (function tick$alpha$interval$divide_interval(divisor,ival){
if((((!((divisor == null)))) && ((!((divisor.tick$alpha$interval$IDivisibleInterval$divide_interval$arity$2 == null)))))){
return divisor.tick$alpha$interval$IDivisibleInterval$divide_interval$arity$2(divisor,ival);
} else {
return tick$alpha$interval$IDivisibleInterval$divide_interval$dyn_75364(divisor,ival);
}
});

(tick.alpha.interval.IDivisibleInterval["function"] = true);

(tick.alpha.interval.divide_interval["function"] = (function (f,ival){
return tick.alpha.interval.divide_by_apply(ival,f);
}));

(java.time.Duration.prototype.tick$alpha$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Duration.prototype.tick$alpha$interval$IDivisibleInterval$divide_interval$arity$2 = (function (dur,ival){
var dur__$1 = this;
return tick.alpha.interval.divide_by_duration(ival,dur__$1);
}));

(java.time.Period.prototype.tick$alpha$interval$IDivisibleInterval$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Period.prototype.tick$alpha$interval$IDivisibleInterval$divide_interval$arity$2 = (function (period,ival){
var period__$1 = this;
return tick.alpha.interval.divide_by_period(ival,period__$1);
}));

(tick.alpha.interval.IDivisibleInterval["number"] = true);

(tick.alpha.interval.divide_interval["number"] = (function (divisor,ival){
return tick.alpha.interval.divide_by_divisor(ival,divisor);
}));
(java.time.LocalDate.prototype.tick$protocols$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.LocalDate.prototype.tick$protocols$IDivisible$divide$arity$2 = (function (ld,d){
var ld__$1 = this;
return tick.alpha.interval.divide_interval(d,ld__$1);
}));

(java.time.Year.prototype.tick$protocols$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.Year.prototype.tick$protocols$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.alpha.interval.divide_interval(d,n__$1);
}));

(java.time.YearMonth.prototype.tick$protocols$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(java.time.YearMonth.prototype.tick$protocols$IDivisible$divide$arity$2 = (function (n,d){
var n__$1 = this;
return tick.alpha.interval.divide_interval(d,n__$1);
}));

(cljs.core.PersistentArrayMap.prototype.tick$protocols$IDivisible$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.tick$protocols$IDivisible$divide$arity$2 = (function (ival,o){
var ival__$1 = this;
return tick.alpha.interval.divide_interval(o,ival__$1);
}));
/**
 * Divide intervals in s1 by (disjoint ordered) intervals in s2,
 *   splitting if necessary, grouping by s2. Complexity is O(n) rather
 *   than O(n^2)
 */
tick.alpha.interval.group_by_intervals = (function tick$alpha$interval$group_by_intervals(intervals_to_group_by,ivals){
if(tick.alpha.interval.ordered_disjoint_intervals_QMARK_(intervals_to_group_by)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? intervals-to-group-by)"));
}

if(tick.alpha.interval.ordered_disjoint_intervals_QMARK_(ivals)){
} else {
throw (new Error("Assert failed: (ordered-disjoint-intervals? ivals)"));
}

var intervals = ivals;
var groups = intervals_to_group_by;
var result = cljs.core.PersistentArrayMap.EMPTY;
var current_intervals = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(cljs.core.not_empty(intervals))){
if(cljs.core.truth_(cljs.core.not_empty(groups))){
var ival = cljs.core.first(intervals);
var group = cljs.core.first(groups);
var G__75265 = tick.alpha.interval.relation(ival,group);
var G__75265__$1 = (((G__75265 instanceof cljs.core.Keyword))?G__75265.fqn:null);
switch (G__75265__$1) {
case "precedes":
case "meets":
var G__75367 = cljs.core.next(intervals);
var G__75368 = groups;
var G__75369 = result;
var G__75370 = current_intervals;
intervals = G__75367;
groups = G__75368;
result = G__75369;
current_intervals = G__75370;
continue;

break;
case "preceded-by":
case "met-by":
var G__75371 = intervals;
var G__75372 = cljs.core.next(groups);
var G__75373 = (function (){var G__75266 = result;
if(cljs.core.truth_(cljs.core.not_empty(current_intervals))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75266,group,current_intervals);
} else {
return G__75266;
}
})();
var G__75374 = cljs.core.PersistentVector.EMPTY;
intervals = G__75371;
groups = G__75372;
result = G__75373;
current_intervals = G__75374;
continue;

break;
case "finishes":
var G__75375 = cljs.core.next(intervals);
var G__75376 = cljs.core.next(groups);
var G__75377 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__75378 = cljs.core.PersistentVector.EMPTY;
intervals = G__75375;
groups = G__75376;
result = G__75377;
current_intervals = G__75378;
continue;

break;
case "equals":
var G__75379 = cljs.core.next(intervals);
var G__75380 = cljs.core.next(groups);
var G__75381 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival));
var G__75382 = cljs.core.PersistentVector.EMPTY;
intervals = G__75379;
groups = G__75380;
result = G__75381;
current_intervals = G__75382;
continue;

break;
case "finished-by":
var vec__75267 = tick.alpha.interval.split_with_assert(ival,tick.protocols.beginning(group));
var _seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75267,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75267,(1),null);
var G__75384 = cljs.core.next(intervals);
var G__75385 = cljs.core.next(groups);
var G__75386 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg2));
var G__75387 = cljs.core.PersistentVector.EMPTY;
intervals = G__75384;
groups = G__75385;
result = G__75386;
current_intervals = G__75387;
continue;

break;
case "started-by":
var vec__75270 = tick.alpha.interval.split_with_assert(ival,tick.protocols.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75270,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75270,(1),null);
var G__75388 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__75389 = cljs.core.next(groups);
var G__75390 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__75391 = cljs.core.PersistentVector.EMPTY;
intervals = G__75388;
groups = G__75389;
result = G__75390;
current_intervals = G__75391;
continue;

break;
case "overlapped-by":
var vec__75273 = tick.alpha.interval.split_with_assert(ival,tick.protocols.end(group));
var seg1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75273,(0),null);
var seg2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75273,(1),null);
var G__75392 = cljs.core.cons(seg2,cljs.core.next(intervals));
var G__75393 = cljs.core.next(groups);
var G__75394 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,seg1));
var G__75395 = cljs.core.PersistentVector.EMPTY;
intervals = G__75392;
groups = G__75393;
result = G__75394;
current_intervals = G__75395;
continue;

break;
case "starts":
case "during":
var G__75396 = cljs.core.next(intervals);
var G__75397 = groups;
var G__75398 = result;
var G__75399 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,ival);
intervals = G__75396;
groups = G__75397;
result = G__75398;
current_intervals = G__75399;
continue;

break;
case "contains":
var G__75400 = cljs.core.next(intervals);
var G__75401 = cljs.core.next(groups);
var G__75402 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,group,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tick.alpha.interval.slice(ival,tick.protocols.beginning(group),tick.protocols.end(group))], null));
var G__75403 = cljs.core.PersistentVector.EMPTY;
intervals = G__75400;
groups = G__75401;
result = G__75402;
current_intervals = G__75403;
continue;

break;
case "overlaps":
var G__75404 = cljs.core.next(intervals);
var G__75405 = groups;
var G__75406 = result;
var G__75407 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(current_intervals,tick.alpha.interval.slice(ival,tick.protocols.beginning(group),tick.protocols.end(ival)));
intervals = G__75404;
groups = G__75405;
result = G__75406;
current_intervals = G__75407;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75265__$1)].join('')));

}
} else {
return result;
}
} else {
var G__75276 = result;
if(cljs.core.truth_((function (){var and__4251__auto__ = cljs.core.first(groups);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not_empty(current_intervals);
} else {
return and__4251__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75276,cljs.core.first(groups),current_intervals);
} else {
return G__75276;
}
}
break;
}
});

/**
 * @interface
 */
tick.alpha.interval.IGroupable = function(){};

var tick$alpha$interval$IGroupable$group_by$dyn_75409 = (function (grouping,ivals){
var x__4550__auto__ = (((grouping == null))?null:grouping);
var m__4551__auto__ = (tick.alpha.interval.group_by[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4551__auto__.call(null,grouping,ivals));
} else {
var m__4549__auto__ = (tick.alpha.interval.group_by["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(grouping,ivals) : m__4549__auto__.call(null,grouping,ivals));
} else {
throw cljs.core.missing_protocol("IGroupable.group-by",grouping);
}
}
});
tick.alpha.interval.group_by = (function tick$alpha$interval$group_by(grouping,ivals){
if((((!((grouping == null)))) && ((!((grouping.tick$alpha$interval$IGroupable$group_by$arity$2 == null)))))){
return grouping.tick$alpha$interval$IGroupable$group_by$arity$2(grouping,ivals);
} else {
return tick$alpha$interval$IGroupable$group_by$dyn_75409(grouping,ivals);
}
});

(tick.alpha.interval.IGroupable["function"] = true);

(tick.alpha.interval.group_by["function"] = (function (f,ivals){
if(cljs.core.empty_QMARK_(ivals)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
var r = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(tick.alpha.interval.bounds,ivals);
var b = (function (){var G__75277 = tick.protocols.beginning(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75277) : f.call(null,G__75277));
})();
var e = (function (){var G__75278 = tick.protocols.end(r);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__75278) : f.call(null,G__75278));
})();
var groups = tick.protocols.range(b,tick.core.inc(e));
return tick.alpha.interval.group_by(groups,ivals);
}
}));

(cljs.core.LazySeq.prototype.tick$alpha$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.tick$alpha$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.alpha.interval.group_by_intervals(groups__$1,ivals);
}));

(cljs.core.PersistentVector.prototype.tick$alpha$interval$IGroupable$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.tick$alpha$interval$IGroupable$group_by$arity$2 = (function (groups,ivals){
var groups__$1 = this;
return tick.alpha.interval.group_by_intervals(groups__$1,ivals);
}));
tick.alpha.interval.divide_by = (function tick$alpha$interval$divide_by(divisor,t){
return tick.protocols.divide(t,divisor);
});
tick.alpha.interval.divide = (function tick$alpha$interval$divide(t,divisor){
return tick.protocols.divide(t,divisor);
});

//# sourceMappingURL=tick.alpha.interval.js.map
