goog.provide('statecharts.integrations.re_frame');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("statecharts.integrations.re-frame","sync-state-update","statecharts.integrations.re-frame/sync-state-update",980472765),(function (db__$1,p__68012){
var vec__68013 = p__68012;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68013,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68013,(1),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68013,(2),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68013,(3),null);
return cljs.core.assoc_in(db__$1,path,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(state) : f.call(null,state)));
}));
/**
 * Update the given path of re-frame app-db whenever the state of the
 *   fsm service changes.
 */
statecharts.integrations.re_frame.connect_rf_db = (function statecharts$integrations$re_frame$connect_rf_db(var_args){
var G__68020 = arguments.length;
switch (G__68020) {
case 2:
return statecharts.integrations.re_frame.connect_rf_db.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return statecharts.integrations.re_frame.connect_rf_db.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.integrations.re_frame.connect_rf_db.cljs$core$IFn$_invoke$arity$2 = (function (service,path){
return statecharts.integrations.re_frame.connect_rf_db.cljs$core$IFn$_invoke$arity$3(service,path,cljs.core.identity);
}));

(statecharts.integrations.re_frame.connect_rf_db.cljs$core$IFn$_invoke$arity$3 = (function (service,path,f){
return statecharts.service.add_listener(service,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("statecharts.integrations.re-frame","connect-rf-db","statecharts.integrations.re-frame/connect-rf-db",106770420),path], null),(function (_,new_state){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("statecharts.integrations.re-frame","sync-state-update","statecharts.integrations.re-frame/sync-state-update",980472765),path,new_state,f], null));
}));
}));

(statecharts.integrations.re_frame.connect_rf_db.cljs$lang$maxFixedArity = 3);

re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("statecharts.integrations.re-frame","call-fx","statecharts.integrations.re-frame/call-fx",512655823),(function (_,p__68024){
var vec__68025 = p__68024;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68025,(0),null);
var fx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68025,(1),null);
return fx;
}));
/**
 * Create an action that when called would dispatch the provided
 *   effects.
 */
statecharts.integrations.re_frame.call_fx = (function statecharts$integrations$re_frame$call_fx(effects){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("statecharts.integrations.re-frame","call-fx","statecharts.integrations.re-frame/call-fx",512655823),effects], null));
});
/**
 * Create an action that when called would dispatch the provided
 *   effects.
 */
statecharts.integrations.re_frame.fx_action = (function statecharts$integrations$re_frame$fx_action(effects){
return (function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("statecharts.integrations.re-frame","call-fx","statecharts.integrations.re-frame/call-fx",512655823),effects], null));
});
});
statecharts.integrations.re_frame.make_rf_scheduler = (function statecharts$integrations$re_frame$make_rf_scheduler(transition_event,clock){
return statecharts.delayed.make_scheduler((function (p1__68033_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [transition_event,p1__68033_SHARP_], null));
}),clock);
});
statecharts.integrations.re_frame.default_opts = (function statecharts$integrations$re_frame$default_opts(){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clock","clock",-894301127),statecharts.clock.wall_clock()], null);
});
if((typeof statecharts !== 'undefined') && (typeof statecharts.integrations !== 'undefined') && (typeof statecharts.integrations.re_frame !== 'undefined') && (typeof statecharts.integrations.re_frame.epochs !== 'undefined')){
} else {
statecharts.integrations.re_frame.epochs = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
}
statecharts.integrations.re_frame.safe_inc = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.inc,(0));
statecharts.integrations.re_frame.new_epoch = (function statecharts$integrations$re_frame$new_epoch(id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(statecharts.integrations.re_frame.epochs.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.update.cljs$core$IFn$_invoke$arity$3(statecharts.integrations.re_frame.epochs.cljs$core$IDeref$_deref$arity$1(null),id,statecharts.integrations.re_frame.safe_inc)),id);
});
statecharts.integrations.re_frame.should_discard = (function statecharts$integrations$re_frame$should_discard(event,current_epoch){
var temp__5751__auto__ = new cljs.core.Keyword(null,"epoch","epoch",1435633666).cljs$core$IFn$_invoke$arity$1(event);
if(cljs.core.truth_(temp__5751__auto__)){
var event_epoch = temp__5751__auto__;
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(event_epoch,current_epoch);
} else {
return false;
}
});
statecharts.integrations.re_frame.canon_event = (function statecharts$integrations$re_frame$canon_event(event,data){
if((event instanceof cljs.core.Keyword)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
if(cljs.core.map_QMARK_(event)){
} else {
throw (new Error("Assert failed: (map? event)"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(event,new cljs.core.Keyword(null,"data","data",-232669377),data);
}
});
statecharts.integrations.re_frame.log_discarded_event = (function statecharts$integrations$re_frame$log_discarded_event(p__68039){
var map__68040 = p__68039;
var map__68040__$1 = cljs.core.__destructure_map(map__68040);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68040__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var msg = ["event ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)," ignored in new epoch"].join('');
if(goog.DEBUG){
return console.log(msg);
} else {
return null;
}
});
statecharts.integrations.re_frame.integrate = (function statecharts$integrations$re_frame$integrate(var_args){
var G__68044 = arguments.length;
switch (G__68044) {
case 1:
return statecharts.integrations.re_frame.integrate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return statecharts.integrations.re_frame.integrate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(statecharts.integrations.re_frame.integrate.cljs$core$IFn$_invoke$arity$1 = (function (machine){
return statecharts.integrations.re_frame.integrate.cljs$core$IFn$_invoke$arity$2(machine,statecharts.integrations.re_frame.default_opts);
}));

(statecharts.integrations.re_frame.integrate.cljs$core$IFn$_invoke$arity$2 = (function (p__68045,p__68046){
var map__68047 = p__68045;
var map__68047__$1 = cljs.core.__destructure_map(map__68047);
var machine = map__68047__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68047__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__68048 = p__68046;
var map__68048__$1 = cljs.core.__destructure_map(map__68048);
var clock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68048__$1,new cljs.core.Keyword(null,"clock","clock",-894301127));
var machine_STAR_ = cljs.core.volatile_BANG_(machine);
var clock__$1 = (function (){var or__4253__auto__ = clock;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return statecharts.clock.wall_clock();
}
})();
var map__68049 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(machine,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"integrations","integrations",1844532423),new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033)], null));
var map__68049__$1 = cljs.core.__destructure_map(map__68049);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68049__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var initialize_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68049__$1,new cljs.core.Keyword(null,"initialize-event","initialize-event",-1064386772));
var transition_event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68049__$1,new cljs.core.Keyword(null,"transition-event","transition-event",-127562483));
var epoch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68049__$1,new cljs.core.Keyword(null,"epoch?","epoch?",-1215065268));
var path__$1 = (function (){var G__68050 = path;
if((G__68050 == null)){
return null;
} else {
return statecharts.utils.ensure_vector(G__68050);
}
})();
if(cljs.core.truth_(initialize_event)){
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(initialize_event,path__$1,(function (_,p__68051){
var vec__68052 = p__68051;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68052,(0),null);
var initialize_args = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68052,(1),null);
var G__68055 = (function (){var G__68056 = cljs.core.deref(machine_STAR_);
var G__68057 = initialize_args;
return (statecharts.core.initialize.cljs$core$IFn$_invoke$arity$2 ? statecharts.core.initialize.cljs$core$IFn$_invoke$arity$2(G__68056,G__68057) : statecharts.core.initialize.call(null,G__68056,G__68057));
})();
if(cljs.core.truth_(epoch_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68055,new cljs.core.Keyword(null,"_epoch","_epoch",-971185504),statecharts.integrations.re_frame.new_epoch(id));
} else {
return G__68055;
}
}));
} else {
}

if(cljs.core.truth_(transition_event)){
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$3(transition_event,path__$1,(function (db__$1,p__68060){
var vec__68061 = p__68060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68061,(0),null);
var fsm_event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68061,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68061,(2),null);
var args = vec__68061;
var fsm_event__$1 = statecharts.utils.ensure_event_map(fsm_event);
var more_data = (((cljs.core.count(args) > (3)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(args,(2)):null);
if(cljs.core.truth_((function (){var and__4251__auto__ = epoch_QMARK_;
if(cljs.core.truth_(and__4251__auto__)){
return statecharts.integrations.re_frame.should_discard(fsm_event__$1,new cljs.core.Keyword(null,"_epoch","_epoch",-971185504).cljs$core$IFn$_invoke$arity$1(db__$1));
} else {
return and__4251__auto__;
}
})())){
statecharts.integrations.re_frame.log_discarded_event(fsm_event__$1);

return db__$1;
} else {
var G__68065 = cljs.core.deref(machine_STAR_);
var G__68066 = db__$1;
var G__68067 = (function (){var G__68068 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(fsm_event__$1,new cljs.core.Keyword(null,"data","data",-232669377),data);
if((!((more_data == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__68068,new cljs.core.Keyword(null,"more-data","more-data",-1255260775),more_data);
} else {
return G__68068;
}
})();
return (statecharts.core.transition.cljs$core$IFn$_invoke$arity$3 ? statecharts.core.transition.cljs$core$IFn$_invoke$arity$3(G__68065,G__68066,G__68067) : statecharts.core.transition.call(null,G__68065,G__68066,G__68067));
}
}));
} else {
}

var scheduler_68082 = statecharts.integrations.re_frame.make_rf_scheduler(transition_event,clock__$1);
machine_STAR_.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(machine_STAR_.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"scheduler","scheduler",-1882870208),scheduler_68082));

return cljs.core.deref(machine_STAR_);
}));

(statecharts.integrations.re_frame.integrate.cljs$lang$maxFixedArity = 2);

statecharts.integrations.re_frame.with_epoch = (function statecharts$integrations$re_frame$with_epoch(event,epoch){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),event,new cljs.core.Keyword(null,"epoch","epoch",1435633666),epoch], null);
});

//# sourceMappingURL=statecharts.integrations.re_frame.js.map
