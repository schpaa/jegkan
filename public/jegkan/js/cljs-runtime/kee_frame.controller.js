goog.provide('kee_frame.controller');
kee_frame.controller.process_params = (function kee_frame$controller$process_params(params,route){
if(cljs.core.vector_QMARK_(params)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,params);
} else {
if(cljs.core.ifn_QMARK_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(route) : params.call(null,route));
} else {
return null;
}
}
});
kee_frame.controller.validate_and_dispatch_BANG_ = (function kee_frame$controller$validate_and_dispatch_BANG_(dispatch){
if(cljs.core.truth_(dispatch)){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kee-frame.controller",null,21,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dispatch returned from controller function ",dispatch], null);
}),null)),null,226525948,null);

if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch)){
} else {
expound.alpha.expound.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid dispatch value",cljs.spec.alpha.explain_data(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch));
}

return dispatch;
} else {
return null;
}
});
kee_frame.controller.stop_controller = (function kee_frame$controller$stop_controller(ctx,p__60689){
var map__60690 = p__60689;
var map__60690__$1 = cljs.core.__destructure_map(map__60690);
var controller = map__60690__$1;
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60690__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kee-frame.controller",null,30,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"controller-stop","controller-stop",549799298),new cljs.core.Keyword(null,"controller","controller",2013778659),controller,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx], null)], null);
}),null)),null,273758047,null);

if(cljs.core.vector_QMARK_(stop)){
return stop;
} else {
if(cljs.core.ifn_QMARK_(stop)){
return kee_frame.controller.validate_and_dispatch_BANG_((stop.cljs$core$IFn$_invoke$arity$1 ? stop.cljs$core$IFn$_invoke$arity$1(ctx) : stop.call(null,ctx)));
} else {
return null;
}
}
});
kee_frame.controller.start_controller = (function kee_frame$controller$start_controller(ctx,p__60693){
var map__60694 = p__60693;
var map__60694__$1 = cljs.core.__destructure_map(map__60694);
var controller = map__60694__$1;
var last_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60694__$1,new cljs.core.Keyword(null,"last-params","last-params",1293824707));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60694__$1,new cljs.core.Keyword(null,"start","start",-355208981));
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"kee-frame.controller",null,38,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"controller-start","controller-start",-1635703237),new cljs.core.Keyword(null,"controller","controller",2013778659),controller,new cljs.core.Keyword(null,"ctx","ctx",-493610118),ctx], null)], null);
}),null)),null,-259365365,null);

if(cljs.core.truth_(start)){
if(cljs.core.vector_QMARK_(start)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(start,last_params);
} else {
if(cljs.core.ifn_QMARK_(start)){
return kee_frame.controller.validate_and_dispatch_BANG_((start.cljs$core$IFn$_invoke$arity$2 ? start.cljs$core$IFn$_invoke$arity$2(ctx,last_params) : start.call(null,ctx,last_params)));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.controller_actions = (function kee_frame$controller$controller_actions(controllers,route){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (actions,p__60697){
var map__60698 = p__60697;
var map__60698__$1 = cljs.core.__destructure_map(map__60698);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var last_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"last-params","last-params",1293824707));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"params","params",710516235));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60698__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current_params = kee_frame.controller.process_params(params,route);
var controller = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"start","start",-355208981),start,new cljs.core.Keyword(null,"stop","stop",-2140911342),stop,new cljs.core.Keyword(null,"last-params","last-params",1293824707),current_params], null);
var last_params__$1 = last_params;
var current_params__$1 = current_params;
var ocr_60706 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_params__$1,current_params__$1);
try{if((ocr_60706 === true)){
return actions;
} else {
throw cljs.core.match.backtrack;

}
}catch (e60725){if((e60725 instanceof Error)){
var e__59767__auto__ = e60725;
if((e__59767__auto__ === cljs.core.match.backtrack)){
try{if((ocr_60706 === false)){
try{if((last_params__$1 === null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(actions,new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.conj,controller);
} else {
throw cljs.core.match.backtrack;

}
}catch (e60731){if((e60731 instanceof Error)){
var e__59767__auto____$1 = e60731;
if((e__59767__auto____$1 === cljs.core.match.backtrack)){
try{if((current_params__$1 === null)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(actions,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.conj,controller);
} else {
throw cljs.core.match.backtrack;

}
}catch (e60732){if((e60732 instanceof Error)){
var e__59767__auto____$2 = e60732;
if((e__59767__auto____$2 === cljs.core.match.backtrack)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(actions,new cljs.core.Keyword(null,"stop","stop",-2140911342),cljs.core.conj,controller),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.conj,controller);
} else {
throw e__59767__auto____$2;
}
} else {
throw e60732;

}
}} else {
throw e__59767__auto____$1;
}
} else {
throw e60731;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e60727){if((e60727 instanceof Error)){
var e__59767__auto____$1 = e60727;
if((e__59767__auto____$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_params__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_params__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_60706)].join('')));
} else {
throw e__59767__auto____$1;
}
} else {
throw e60727;

}
}} else {
throw e__59767__auto__;
}
} else {
throw e60725;

}
}}),cljs.core.PersistentArrayMap.EMPTY,controllers);
});
kee_frame.controller.update_controllers = (function kee_frame$controller$update_controllers(controllers,new_controllers){
var id__GT_new_controller = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.identity),new_controllers));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__60734){
var map__60735 = p__60734;
var map__60735__$1 = cljs.core.__destructure_map(map__60735);
var controller = map__60735__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60735__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var temp__5751__auto__ = (id__GT_new_controller.cljs$core$IFn$_invoke$arity$1 ? id__GT_new_controller.cljs$core$IFn$_invoke$arity$1(id) : id__GT_new_controller.call(null,id));
if(cljs.core.truth_(temp__5751__auto__)){
var updated_controller = temp__5751__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword(null,"last-params","last-params",1293824707),new cljs.core.Keyword(null,"last-params","last-params",1293824707).cljs$core$IFn$_invoke$arity$1(updated_controller));
} else {
return controller;
}
}),controllers);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.controller","start-controllers","kee-frame.controller/start-controllers",488030820),(function (_,p__60736){
var vec__60737 = p__60736;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60737,(0),null);
var dispatches = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__60737,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),dispatches], null);
}));
kee_frame.controller.controller_effects = (function kee_frame$controller$controller_effects(controllers,ctx,route){
var map__60742 = kee_frame.controller.controller_actions(controllers,route);
var map__60742__$1 = cljs.core.__destructure_map(map__60742);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60742__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60742__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var start_dispatches = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60740_SHARP_){
return kee_frame.controller.start_controller(ctx,p1__60740_SHARP_);
}),start);
var stop_dispatches = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__60741_SHARP_){
return kee_frame.controller.stop_controller(ctx,p1__60741_SHARP_);
}),stop);
var dispatch_n = ((((cljs.core.seq(start)) && (cljs.core.seq(stop))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(stop_dispatches,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame.controller","start-controllers","kee-frame.controller/start-controllers",488030820),start_dispatches], null)):((cljs.core.seq(start))?start_dispatches:((cljs.core.seq(stop))?stop_dispatches:null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"update-controllers","update-controllers",2036761559),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(start,stop),new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),dispatch_n], null);
});
re_frame.core.reg_fx(new cljs.core.Keyword(null,"update-controllers","update-controllers",2036761559),(function (new_controllers){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(kee_frame.state.controllers,kee_frame.controller.update_controllers,new_controllers);
}));

//# sourceMappingURL=kee_frame.controller.js.map