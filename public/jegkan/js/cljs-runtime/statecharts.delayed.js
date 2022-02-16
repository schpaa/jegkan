goog.provide('statecharts.delayed');

/**
 * @interface
 */
statecharts.delayed.IScheduler = function(){};

var statecharts$delayed$IScheduler$schedule$dyn_66053 = (function (this$,event,delay){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (statecharts.delayed.schedule[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(this$,event,delay) : m__4551__auto__.call(null,this$,event,delay));
} else {
var m__4549__auto__ = (statecharts.delayed.schedule["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(this$,event,delay) : m__4549__auto__.call(null,this$,event,delay));
} else {
throw cljs.core.missing_protocol("IScheduler.schedule",this$);
}
}
});
statecharts.delayed.schedule = (function statecharts$delayed$schedule(this$,event,delay){
if((((!((this$ == null)))) && ((!((this$.statecharts$delayed$IScheduler$schedule$arity$3 == null)))))){
return this$.statecharts$delayed$IScheduler$schedule$arity$3(this$,event,delay);
} else {
return statecharts$delayed$IScheduler$schedule$dyn_66053(this$,event,delay);
}
});

var statecharts$delayed$IScheduler$unschedule$dyn_66054 = (function (this$,event){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (statecharts.delayed.unschedule[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4551__auto__.call(null,this$,event));
} else {
var m__4549__auto__ = (statecharts.delayed.unschedule["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,event) : m__4549__auto__.call(null,this$,event));
} else {
throw cljs.core.missing_protocol("IScheduler.unschedule",this$);
}
}
});
statecharts.delayed.unschedule = (function statecharts$delayed$unschedule(this$,event){
if((((!((this$ == null)))) && ((!((this$.statecharts$delayed$IScheduler$unschedule$arity$2 == null)))))){
return this$.statecharts$delayed$IScheduler$unschedule$arity$2(this$,event);
} else {
return statecharts$delayed$IScheduler$unschedule$dyn_66054(this$,event);
}
});


/**
* @constructor
 * @implements {statecharts.delayed.IScheduler}
*/
statecharts.delayed.Scheduler = (function (dispatch,ids,clock){
this.dispatch = dispatch;
this.ids = ids;
this.clock = clock;
});
(statecharts.delayed.Scheduler.prototype.statecharts$delayed$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(statecharts.delayed.Scheduler.prototype.statecharts$delayed$IScheduler$schedule$arity$3 = (function (_,event,delay){
var self__ = this;
var ___$1 = this;
var id = statecharts.clock.setTimeout(self__.clock,(function (){
return (self__.dispatch.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch.cljs$core$IFn$_invoke$arity$1(event) : self__.dispatch.call(null,event));
}),delay);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ids,cljs.core.assoc,event,id);
}));

(statecharts.delayed.Scheduler.prototype.statecharts$delayed$IScheduler$unschedule$arity$2 = (function (_,event){
var self__ = this;
var ___$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.ids),event);
if(cljs.core.truth_(temp__5753__auto__)){
var id = temp__5753__auto__;
statecharts.clock.clearTimeout(self__.clock,id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.ids,cljs.core.dissoc,event);
} else {
return null;
}
}));

(statecharts.delayed.Scheduler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"dispatch","dispatch",-1335098760,null),new cljs.core.Symbol(null,"ids","ids",641995731,null),new cljs.core.Symbol(null,"clock","clock",746230400,null)], null);
}));

(statecharts.delayed.Scheduler.cljs$lang$type = true);

(statecharts.delayed.Scheduler.cljs$lang$ctorStr = "statecharts.delayed/Scheduler");

(statecharts.delayed.Scheduler.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"statecharts.delayed/Scheduler");
}));

/**
 * Positional factory function for statecharts.delayed/Scheduler.
 */
statecharts.delayed.__GT_Scheduler = (function statecharts$delayed$__GT_Scheduler(dispatch,ids,clock){
return (new statecharts.delayed.Scheduler(dispatch,ids,clock));
});

statecharts.delayed.scheduler_QMARK_ = (function statecharts$delayed$scheduler_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.statecharts$delayed$IScheduler$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(statecharts.delayed.IScheduler,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(statecharts.delayed.IScheduler,x);
}
});
statecharts.delayed.make_scheduler = (function statecharts$delayed$make_scheduler(dispatch,clock){
return (new statecharts.delayed.Scheduler(dispatch,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),clock));
});
statecharts.delayed.path_placeholder = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<path>","<path>",329527414)], null);
statecharts.delayed.delay_fn_id = (function statecharts$delayed$delay_fn_id(d){
if(cljs.core.int_QMARK_(d)){
return d;
} else {
return (d["name"]);
}
});
statecharts.delayed.generate_delayed_events = (function statecharts$delayed$generate_delayed_events(delay,txs){
var event = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fsm","delay","fsm/delay",-574187523),statecharts.delayed.path_placeholder,statecharts.delayed.delay_fn_id(delay)], null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry","entry",505168823),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("fsm","schedule-event","fsm/schedule-event",1735252958),new cljs.core.Keyword(null,"event-delay","event-delay",-262476060),delay,new cljs.core.Keyword(null,"event","event",301435442),event], null),new cljs.core.Keyword(null,"exit","exit",351849638),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword("fsm","unschedule-event","fsm/unschedule-event",-1330804273),new cljs.core.Keyword(null,"event","event",301435442),event], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__66025_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66025_SHARP_,new cljs.core.Keyword(null,"delay","delay",-574225219));
}),txs)], null)], null);
});
statecharts.delayed.derived_delay_info = (function statecharts$delayed$derived_delay_info(delayed_transitions){
var seq__66026_66058 = cljs.core.seq(delayed_transitions);
var chunk__66027_66059 = null;
var count__66028_66060 = (0);
var i__66029_66061 = (0);
while(true){
if((i__66029_66061 < count__66028_66060)){
var dt_66062 = chunk__66027_66059.cljs$core$IIndexed$_nth$arity$2(null,i__66029_66061);
if(cljs.core.contains_QMARK_(dt_66062,new cljs.core.Keyword(null,"delay","delay",-574225219))){
} else {
throw (new Error(["Assert failed: ",["no :delay key found in",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_66062)].join(''),"\n","(contains? dt :delay)"].join('')));
}


var G__66063 = seq__66026_66058;
var G__66064 = chunk__66027_66059;
var G__66065 = count__66028_66060;
var G__66066 = (i__66029_66061 + (1));
seq__66026_66058 = G__66063;
chunk__66027_66059 = G__66064;
count__66028_66060 = G__66065;
i__66029_66061 = G__66066;
continue;
} else {
var temp__5753__auto___66067 = cljs.core.seq(seq__66026_66058);
if(temp__5753__auto___66067){
var seq__66026_66068__$1 = temp__5753__auto___66067;
if(cljs.core.chunked_seq_QMARK_(seq__66026_66068__$1)){
var c__4679__auto___66069 = cljs.core.chunk_first(seq__66026_66068__$1);
var G__66070 = cljs.core.chunk_rest(seq__66026_66068__$1);
var G__66071 = c__4679__auto___66069;
var G__66072 = cljs.core.count(c__4679__auto___66069);
var G__66073 = (0);
seq__66026_66058 = G__66070;
chunk__66027_66059 = G__66071;
count__66028_66060 = G__66072;
i__66029_66061 = G__66073;
continue;
} else {
var dt_66074 = cljs.core.first(seq__66026_66068__$1);
if(cljs.core.contains_QMARK_(dt_66074,new cljs.core.Keyword(null,"delay","delay",-574225219))){
} else {
throw (new Error(["Assert failed: ",["no :delay key found in",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dt_66074)].join(''),"\n","(contains? dt :delay)"].join('')));
}


var G__66075 = cljs.core.next(seq__66026_66068__$1);
var G__66076 = null;
var G__66077 = (0);
var G__66078 = (0);
seq__66026_66058 = G__66075;
chunk__66027_66059 = G__66076;
count__66028_66060 = G__66077;
i__66029_66061 = G__66078;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (accu,curr){
return cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([accu,curr], 0));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry","entry",505168823),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"exit","exit",351849638),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"on","on",173873944),cljs.core.PersistentVector.EMPTY], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__66041){
var vec__66042 = p__66041;
var delay = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66042,(0),null);
var txs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66042,(1),null);
return statecharts.delayed.generate_delayed_events(delay,txs);
}),cljs.core.group_by(new cljs.core.Keyword(null,"delay","delay",-574225219),delayed_transitions)));
});
/**
 * Translate delayed transitions into internal entry/exit actions and
 *   transitions.
 */
statecharts.delayed.insert_delayed_transitions = (function statecharts$delayed$insert_delayed_transitions(node){
var after = new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.not(after)){
return node;
} else {
var map__66045 = statecharts.delayed.derived_delay_info(after);
var map__66045__$1 = cljs.core.__destructure_map(map__66045);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66045__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var exit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66045__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var on = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66045__$1,new cljs.core.Keyword(null,"on","on",173873944));
var on__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,on);
var vconcat = (function (xs,ys){
return cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(xs,ys));
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(node,new cljs.core.Keyword(null,"entry","entry",505168823),vconcat,entry),new cljs.core.Keyword(null,"exit","exit",351849638),vconcat,exit),new cljs.core.Keyword(null,"on","on",173873944),cljs.core.merge,on__$1);
}
});
statecharts.delayed.replace_path = (function statecharts$delayed$replace_path(path,form){
if((form == null)){
return form;
} else {
return clojure.walk.postwalk((function (x){

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,statecharts.delayed.path_placeholder)){
return path;
} else {
return x;
}
}),form);
}
});
statecharts.delayed.replace_delayed_place_holder = (function statecharts$delayed$replace_delayed_place_holder(var_args){
var G__66047 = arguments.length;
switch (G__66047) {
case 1:
return statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$1 = (function (fsm){
return statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$2(fsm,cljs.core.PersistentVector.EMPTY);
}));

(statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$2 = (function (node,path){
var replace_path = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(statecharts.delayed.replace_path,path);
var G__66052 = node;
var G__66052__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"on","on",173873944).cljs$core$IFn$_invoke$arity$1(node))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__66052,new cljs.core.Keyword(null,"on","on",173873944),replace_path):G__66052);
var G__66052__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"entry","entry",505168823).cljs$core$IFn$_invoke$arity$1(node))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__66052__$1,new cljs.core.Keyword(null,"entry","entry",505168823),replace_path):G__66052__$1);
var G__66052__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"exit","exit",351849638).cljs$core$IFn$_invoke$arity$1(node))?cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__66052__$2,new cljs.core.Keyword(null,"exit","exit",351849638),replace_path):G__66052__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"states","states",1389013542).cljs$core$IFn$_invoke$arity$1(node))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__66052__$3,new cljs.core.Keyword(null,"states","states",1389013542),(function (states){
return statecharts.utils.map_kv((function (id,node__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,statecharts.delayed.replace_delayed_place_holder.cljs$core$IFn$_invoke$arity$2(node__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,id))], null);
}),states);
}));
} else {
return G__66052__$3;
}
}));

(statecharts.delayed.replace_delayed_place_holder.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=statecharts.delayed.js.map
