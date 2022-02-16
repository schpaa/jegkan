goog.provide('re_statecharts.core');
if((typeof re_statecharts !== 'undefined') && (typeof re_statecharts.core !== 'undefined') && (typeof re_statecharts.core.get_state !== 'undefined')){
} else {
re_statecharts.core.get_state = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__68078 = cljs.core.get_global_hierarchy;
return (fexpr__68078.cljs$core$IFn$_invoke$arity$0 ? fexpr__68078.cljs$core$IFn$_invoke$arity$0() : fexpr__68078.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-statecharts.core","get-state"),(function (db__$1,id){
return cljs.core.type(id);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
if((typeof re_statecharts !== 'undefined') && (typeof re_statecharts.core !== 'undefined') && (typeof re_statecharts.core.set_state !== 'undefined')){
} else {
re_statecharts.core.set_state = (function (){var method_table__4747__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4748__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4749__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4750__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4751__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__68080 = cljs.core.get_global_hierarchy;
return (fexpr__68080.cljs$core$IFn$_invoke$arity$0 ? fexpr__68080.cljs$core$IFn$_invoke$arity$0() : fexpr__68080.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("re-statecharts.core","set-state"),(function (db__$1,id,new_state){
return cljs.core.type(id);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4751__auto__,method_table__4747__auto__,prefer_table__4748__auto__,method_cache__4749__auto__,cached_hierarchy__4750__auto__));
})();
}
re_statecharts.core.get_state.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (db__$1,id){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","fsm-state","re-statecharts.core/fsm-state",1916399430),id], null));
}));
re_statecharts.core.set_state.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (db__$1,id,new_state){
if(cljs.core.truth_(new_state)){
return cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","fsm-state","re-statecharts.core/fsm-state",1916399430),id], null),new_state);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(db__$1,new cljs.core.Keyword("re-statecharts.core","fsm-state","re-statecharts.core/fsm-state",1916399430),cljs.core.dissoc,id);
}
}));
if((typeof re_statecharts !== 'undefined') && (typeof re_statecharts.core !== 'undefined') && (typeof re_statecharts.core.epochs !== 'undefined')){
} else {
re_statecharts.core.epochs = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
re_statecharts.core.new_epoch = (function re_statecharts$core$new_epoch(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(re_statecharts.core.epochs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(re_statecharts.core.epochs.cljs$core$IDeref$_deref$arity$1(null),id,statecharts.integrations.re_frame.safe_inc)),id);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-statecharts.core","init","re-statecharts.core/init",-2068854053),(function (p__68084,p__68085){
var map__68086 = p__68084;
var map__68086__$1 = cljs.core.__destructure_map(map__68086);
var db__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68086__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68087 = p__68085;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68087,(0),null);
var map__68090 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68087,(1),null);
var map__68090__$1 = cljs.core.__destructure_map(map__68090);
var machine = map__68090__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var initialize_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68087,(2),null);
if(cljs.core.truth_(re_statecharts.core.get_state.cljs$core$IFn$_invoke$arity$2(db__$1,id))){
return null;
} else {
var new_state = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((statecharts.core.initialize.cljs$core$IFn$_invoke$arity$2 ? statecharts.core.initialize.cljs$core$IFn$_invoke$arity$2(machine,initialize_args) : statecharts.core.initialize.call(null,machine,initialize_args)),new cljs.core.Keyword(null,"_epoch","_epoch",-971185504),re_statecharts.core.new_epoch(id));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),re_statecharts.core.set_state.cljs$core$IFn$_invoke$arity$3(db__$1,id,new_state)], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-statecharts.core","restart","re-statecharts.core/restart",-2056498077),(function (db__$1,p__68092){
var vec__68093 = p__68092;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68093,(0),null);
var map__68096 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68093,(1),null);
var map__68096__$1 = cljs.core.__destructure_map(map__68096);
var machine = map__68096__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68096__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return re_statecharts.core.set_state.cljs$core$IFn$_invoke$arity$3(db__$1,id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((statecharts.core.initialize.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.initialize.cljs$core$IFn$_invoke$arity$1(machine) : statecharts.core.initialize.call(null,machine)),new cljs.core.Keyword(null,"_epoch","_epoch",-971185504),re_statecharts.core.new_epoch(id)));
}));
re_statecharts.core.transition = (function re_statecharts$core$transition(db__$1,p__68100,opts,fsm_event,data,more_data){
var map__68102 = p__68100;
var map__68102__$1 = cljs.core.__destructure_map(map__68102);
var machine = map__68102__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68102__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var epoch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68102__$1,new cljs.core.Keyword(null,"epoch?","epoch?",-1215065268));
var temp__5753__auto__ = re_statecharts.core.get_state.cljs$core$IFn$_invoke$arity$2(db__$1,id);
if(cljs.core.truth_(temp__5753__auto__)){
var current_state = temp__5753__auto__;
var fsm_event__$1 = statecharts.utils.ensure_event_map(fsm_event);
if(cljs.core.truth_((function (){var and__4251__auto__ = epoch_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return statecharts.integrations.re_frame.should_discard(fsm_event__$1,new cljs.core.Keyword(null,"_epoch","_epoch",-971185504).cljs$core$IFn$_invoke$arity$1(current_state));
} else {
return and__4251__auto__;
}
})())){
statecharts.integrations.re_frame.log_discarded_event(fsm_event__$1);

return db__$1;
} else {
var next_state = (function (){var G__68103 = machine;
var G__68104 = current_state;
var G__68105 = (function (){var G__68107 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fsm_event__$1,new cljs.core.Keyword(null,"data","data",-232669377),data);
if((!((more_data == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68107,new cljs.core.Keyword(null,"more-data","more-data",-1255260775),more_data);
} else {
return G__68107;
}
})();
var G__68106 = opts;
return (statecharts.core.transition.cljs$core$IFn$_invoke$arity$4 ? statecharts.core.transition.cljs$core$IFn$_invoke$arity$4(G__68103,G__68104,G__68105,G__68106) : statecharts.core.transition.call(null,G__68103,G__68104,G__68105,G__68106));
})();
return re_statecharts.core.set_state.cljs$core$IFn$_invoke$arity$3(db__$1,id,next_state);
}
} else {
return null;
}
});
re_statecharts.core.open_interceptor = (function re_statecharts$core$open_interceptor(id,fsm,transition_opts){
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"before","before",-1633692388),(function re_statecharts$core$open_interceptor_$_intercept_init(context){
var vec__68108 = re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var seq__68109 = cljs.core.seq(vec__68108);
var first__68110 = cljs.core.first(seq__68109);
var seq__68109__$1 = cljs.core.next(seq__68109);
var event_id = first__68110;
var first__68110__$1 = cljs.core.first(seq__68109__$1);
var seq__68109__$2 = cljs.core.next(seq__68109__$1);
var fsm_id = first__68110__$1;
var first__68110__$2 = cljs.core.first(seq__68109__$2);
var seq__68109__$3 = cljs.core.next(seq__68109__$2);
var data = first__68110__$2;
var more_data = seq__68109__$3;
var G__68111 = context;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","restart","re-statecharts.core/restart",-2056498077),fsm_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,id], null))){
return re_frame.core.assoc_coeffect(G__68111,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,fsm], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(data,more_data)));
} else {
return G__68111;
}
}),new cljs.core.Keyword(null,"after","after",594996914),(function re_statecharts$core$open_interceptor_$_open_interceptor(context){
var vec__68112 = re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var seq__68113 = cljs.core.seq(vec__68112);
var first__68114 = cljs.core.first(seq__68113);
var seq__68113__$1 = cljs.core.next(seq__68113);
var event_id = first__68114;
var first__68114__$1 = cljs.core.first(seq__68113__$1);
var seq__68113__$2 = cljs.core.next(seq__68113__$1);
var fsm_id = first__68114__$1;
var first__68114__$2 = cljs.core.first(seq__68113__$2);
var seq__68113__$3 = cljs.core.next(seq__68113__$2);
var data = first__68114__$2;
var more_data = seq__68113__$3;
var db__$1 = (function (){var or__4253__auto__ = re_frame.core.get_effect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
}
})();
var G__68117 = context;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,fsm_id)) && (cljs.core.not((function (){var fexpr__68120 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("re-statecharts.core","restart","re-statecharts.core/restart",-2056498077),null,new cljs.core.Keyword("re-statecharts.core","start","re-statecharts.core/start",-631812690),null,new cljs.core.Keyword("re-statecharts.core","stop","re-statecharts.core/stop",1888085459),null,new cljs.core.Keyword("re-statecharts.core","init","re-statecharts.core/init",-2068854053),null], null), null);
return (fexpr__68120.cljs$core$IFn$_invoke$arity$1 ? fexpr__68120.cljs$core$IFn$_invoke$arity$1(event_id) : fexpr__68120.call(null,event_id));
})())))){
return re_frame.core.assoc_effect(G__68117,new cljs.core.Keyword(null,"db","db",993250759),re_statecharts.core.transition(db__$1,fsm,transition_opts,event_id,data,more_data));
} else {
return G__68117;
}
})], 0));
});
re_statecharts.core.closed_interceptor = (function re_statecharts$core$closed_interceptor(id,fsm,transition_opts){
return re_frame.core.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"before","before",-1633692388),(function re_statecharts$core$closed_interceptor_$_closed_interceptor(context){
var vec__68140 = re_frame.core.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var seq__68141 = cljs.core.seq(vec__68140);
var first__68142 = cljs.core.first(seq__68141);
var seq__68141__$1 = cljs.core.next(seq__68141);
var event_id = first__68142;
var first__68142__$1 = cljs.core.first(seq__68141__$1);
var seq__68141__$2 = cljs.core.next(seq__68141__$1);
var fsm_id = first__68142__$1;
var args = seq__68141__$2;
var G__68149 = context;
var G__68149__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","transition","re-statecharts.core/transition",491330984),fsm_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,id], null)))?re_frame.core.assoc_coeffect(G__68149,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,fsm,transition_opts], null),args)):G__68149);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","restart","re-statecharts.core/restart",-2056498077),fsm_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,id], null))){
return re_frame.core.assoc_coeffect(G__68149__$1,new cljs.core.Keyword(null,"event","event",301435442),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_id,fsm], null),args));
} else {
return G__68149__$1;
}
})], 0));
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-statecharts.core","transition","re-statecharts.core/transition",491330984),(function (p__68172,p__68173){
var map__68178 = p__68172;
var map__68178__$1 = cljs.core.__destructure_map(map__68178);
var db__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68178__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68179 = p__68173;
var seq__68180 = cljs.core.seq(vec__68179);
var first__68181 = cljs.core.first(seq__68180);
var seq__68180__$1 = cljs.core.next(seq__68180);
var _ = first__68181;
var first__68181__$1 = cljs.core.first(seq__68180__$1);
var seq__68180__$2 = cljs.core.next(seq__68180__$1);
var machine = first__68181__$1;
var first__68181__$2 = cljs.core.first(seq__68180__$2);
var seq__68180__$3 = cljs.core.next(seq__68180__$2);
var opts = first__68181__$2;
var first__68181__$3 = cljs.core.first(seq__68180__$3);
var seq__68180__$4 = cljs.core.next(seq__68180__$3);
var fsm_event = first__68181__$3;
var first__68181__$4 = cljs.core.first(seq__68180__$4);
var seq__68180__$5 = cljs.core.next(seq__68180__$4);
var data = first__68181__$4;
var more_data = seq__68180__$5;
var temp__5753__auto__ = re_statecharts.core.transition(db__$1,machine,opts,fsm_event,data,more_data);
if(cljs.core.truth_(temp__5753__auto__)){
var new_db = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
} else {
return null;
}
}));

/**
* @constructor
 * @implements {statecharts.delayed.IScheduler}
*/
re_statecharts.core.Scheduler = (function (fsm_id,ids,clock,open_QMARK_){
this.fsm_id = fsm_id;
this.ids = ids;
this.clock = clock;
this.open_QMARK_ = open_QMARK_;
});
(re_statecharts.core.Scheduler.prototype.statecharts$delayed$IScheduler$ = cljs.core.PROTOCOL_SENTINEL);

(re_statecharts.core.Scheduler.prototype.statecharts$delayed$IScheduler$schedule$arity$3 = (function (_,event,delay){
var self__ = this;
var ___$1 = this;
var id = statecharts.clock.setTimeout(self__.clock,(function (){
return re_frame.core.dispatch((cljs.core.truth_(self__.open_QMARK_)?event:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","transition","re-statecharts.core/transition",491330984),self__.fsm_id,event], null)));
}),delay);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.ids,cljs.core.assoc,event,id);
}));

(re_statecharts.core.Scheduler.prototype.statecharts$delayed$IScheduler$unschedule$arity$2 = (function (_,event){
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

(re_statecharts.core.Scheduler.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fsm-id","fsm-id",247636757,null),new cljs.core.Symbol(null,"ids","ids",641995731,null),new cljs.core.Symbol(null,"clock","clock",746230400,null),new cljs.core.Symbol(null,"open?","open?",-1415992644,null)], null);
}));

(re_statecharts.core.Scheduler.cljs$lang$type = true);

(re_statecharts.core.Scheduler.cljs$lang$ctorStr = "re-statecharts.core/Scheduler");

(re_statecharts.core.Scheduler.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"re-statecharts.core/Scheduler");
}));

/**
 * Positional factory function for re-statecharts.core/Scheduler.
 */
re_statecharts.core.__GT_Scheduler = (function re_statecharts$core$__GT_Scheduler(fsm_id,ids,clock,open_QMARK_){
return (new re_statecharts.core.Scheduler(fsm_id,ids,clock,open_QMARK_));
});

re_statecharts.core.integrate = (function re_statecharts$core$integrate(var_args){
var G__68195 = arguments.length;
switch (G__68195) {
case 1:
return re_statecharts.core.integrate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return re_statecharts.core.integrate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(re_statecharts.core.integrate.cljs$core$IFn$_invoke$arity$1 = (function (machine){
return re_statecharts.core.integrate.cljs$core$IFn$_invoke$arity$2(machine,statecharts.integrations.re_frame.default_opts);
}));

(re_statecharts.core.integrate.cljs$core$IFn$_invoke$arity$2 = (function (p__68198,p__68199){
var map__68200 = p__68198;
var map__68200__$1 = cljs.core.__destructure_map(map__68200);
var machine = map__68200__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68200__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__68201 = p__68199;
var map__68201__$1 = cljs.core.__destructure_map(map__68201);
var opts = map__68201__$1;
var open_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68201__$1,new cljs.core.Keyword("re-statecharts.core","open?","re-statecharts.core/open?",961310774));
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68201__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var clock__$1 = (function (){var or__4253__auto__ = clock;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return statecharts.clock.wall_clock();
}
})();
var machine__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(machine,new cljs.core.Keyword(null,"scheduler","scheduler",-1882870208),(new re_statecharts.core.Scheduler(id,cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY),clock__$1,open_QMARK_)));
var transition_opts = new cljs.core.Keyword(null,"transition-opts","transition-opts",1273763494).cljs$core$IFn$_invoke$arity$1(opts);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","init","re-statecharts.core/init",-2068854053),machine__$1], null));

return re_frame.core.reg_global_interceptor((cljs.core.truth_(open_QMARK_)?re_statecharts.core.open_interceptor(id,machine__$1,transition_opts):re_statecharts.core.closed_interceptor(id,machine__$1,transition_opts)));
}));

(re_statecharts.core.integrate.cljs$lang$maxFixedArity = 2);

re_frame.core.reg_fx(new cljs.core.Keyword("re-statecharts.core","start","re-statecharts.core/start",-631812690),(function (fsm){
var machine = (statecharts.core.machine.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.machine.cljs$core$IFn$_invoke$arity$1(fsm) : statecharts.core.machine.call(null,fsm));
var temp__5751__auto__ = cljs.core.meta(fsm);
if(cljs.core.truth_(temp__5751__auto__)){
var opts = temp__5751__auto__;
return re_statecharts.core.integrate.cljs$core$IFn$_invoke$arity$2(machine,opts);
} else {
return re_statecharts.core.integrate.cljs$core$IFn$_invoke$arity$1(machine);
}
}));
re_frame.core.reg_fx(new cljs.core.Keyword("re-statecharts.core","stop","re-statecharts.core/stop",1888085459),(function (id){
return re_frame.core.clear_global_interceptor.cljs$core$IFn$_invoke$arity$1(id);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-statecharts.core","start","re-statecharts.core/start",-631812690),(function (_,p__68203){
var vec__68204 = p__68203;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68204,(0),null);
var fsm = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68204,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("re-statecharts.core","start","re-statecharts.core/start",-631812690),fsm], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("re-statecharts.core","stop","re-statecharts.core/stop",1888085459),(function (p__68209,p__68210){
var map__68212 = p__68209;
var map__68212__$1 = cljs.core.__destructure_map(map__68212);
var db__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68212__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__68213 = p__68210;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68213,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68213,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),re_statecharts.core.set_state.cljs$core$IFn$_invoke$arity$3(db__$1,id,null),new cljs.core.Keyword("re-statecharts.core","stop","re-statecharts.core/stop",1888085459),id], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("re-statecharts.core","state","re-statecharts.core/state",-1711442096),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__68217){
var vec__68218 = p__68217;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68218,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68218,(1),null);
return new cljs.core.Keyword(null,"_state","_state",-791882382).cljs$core$IFn$_invoke$arity$1(re_statecharts.core.get_state.cljs$core$IFn$_invoke$arity$2(db__$1,id));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("re-statecharts.core","state-full","re-statecharts.core/state-full",1766118627),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__68222){
var vec__68226 = p__68222;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68226,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68226,(1),null);
return re_statecharts.core.get_state.cljs$core$IFn$_invoke$arity$2(db__$1,id);
})], 0));
re_statecharts.core.match_state = (function re_statecharts$core$match_state(var_args){
var args__4870__auto__ = [];
var len__4864__auto___68284 = arguments.length;
var i__4865__auto___68285 = (0);
while(true){
if((i__4865__auto___68285 < len__4864__auto___68284)){
args__4870__auto__.push((arguments[i__4865__auto___68285]));

var G__68286 = (i__4865__auto___68285 + (1));
i__4865__auto___68285 = G__68286;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return re_statecharts.core.match_state.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(re_statecharts.core.match_state.cljs$core$IFn$_invoke$arity$variadic = (function (state,pairs){
var G__68239 = cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),pairs);
var vec__68241 = G__68239;
var seq__68242 = cljs.core.seq(vec__68241);
var first__68243 = cljs.core.first(seq__68242);
var seq__68242__$1 = cljs.core.next(seq__68242);
var first_pair = first__68243;
var rest_pairs = seq__68242__$1;
var G__68239__$1 = G__68239;
while(true){
var vec__68244 = G__68239__$1;
var seq__68245 = cljs.core.seq(vec__68244);
var first__68246 = cljs.core.first(seq__68245);
var seq__68245__$1 = cljs.core.next(seq__68245);
var first_pair__$1 = first__68246;
var rest_pairs__$1 = seq__68245__$1;
if(cljs.core.truth_((function (){var G__68247 = first_pair__$1;
var G__68247__$1 = (((G__68247 == null))?null:cljs.core.seq(G__68247));
var G__68247__$2 = (((G__68247__$1 == null))?null:cljs.core.count(G__68247__$1));
if((G__68247__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__68247__$2,(2));
}
})())){
var vec__68249 = first_pair__$1;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68249,(0),null);
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68249,(1),null);
if(statecharts.core.matches(state,value)){
return component;
} else {
var G__68288 = rest_pairs__$1;
G__68239__$1 = G__68288;
continue;
}
} else {
if(cljs.core.truth_((function (){var G__68253 = first_pair__$1;
var G__68253__$1 = (((G__68253 == null))?null:cljs.core.seq(G__68253));
var G__68253__$2 = (((G__68253__$1 == null))?null:cljs.core.count(G__68253__$1));
if((G__68253__$2 == null)){
return null;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__68253__$2,(1));
}
})())){
return cljs.core.first(first_pair__$1);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not find a component to match state.",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"state","state",-1988618099),state,new cljs.core.Keyword(null,"pairs","pairs",614609779),pairs], null));

}
}
break;
}
}));

(re_statecharts.core.match_state.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(re_statecharts.core.match_state.cljs$lang$applyTo = (function (seq68230){
var G__68231 = cljs.core.first(seq68230);
var seq68230__$1 = cljs.core.next(seq68230);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__68231,seq68230__$1);
}));

cljs.spec.alpha.def_impl(new cljs.core.Keyword("re-statecharts.core","binding","re-statecharts.core/binding",1336674802),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","and","cljs.spec.alpha/and",-2060279705,null),new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"subscription-symbol","subscription-symbol",379237322),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"fsm","fsm",937922990),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))),cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"subscription-symbol","subscription-symbol",379237322),new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Keyword(null,"fsm","fsm",937922990),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,cljs.spec.alpha.cat_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subscription-symbol","subscription-symbol",379237322),new cljs.core.Keyword(null,"fsm","fsm",937922990)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol_QMARK_,cljs.core.any_QMARK_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","symbol?","cljs.core/symbol?",1422196122,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)], null))], null),null));

//# sourceMappingURL=re_statecharts.core.js.map
