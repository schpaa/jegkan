goog.provide('nrpk.spa');
var module$node_modules$body_scroll_lock$lib$bodyScrollLock_min=shadow.js.require("module$node_modules$body_scroll_lock$lib$bodyScrollLock_min", {});
nrpk.spa.forced_scroll_lock = (function nrpk$spa$forced_scroll_lock(locked_QMARK_,target){
var body = document.getElementById((function (){var or__4253__auto__ = target;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "body";
}
})());
if(cljs.core.truth_(locked_QMARK_)){
return module$node_modules$body_scroll_lock$lib$bodyScrollLock_min.disableBodyScroll(body);
} else {
module$node_modules$body_scroll_lock$lib$bodyScrollLock_min.enableBodyScroll(body);

return module$node_modules$body_scroll_lock$lib$bodyScrollLock_min.clearAllBodyScrollLocks();
}
});
nrpk.spa.dispatch_main = (function nrpk$spa$dispatch_main(web_content){
var s = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","state-full","re-statecharts.core/state-full",1766118627),new cljs.core.Keyword(null,"main-fsm","main-fsm",-1719256745)], null));
var expose_app_db = cljs.core.deref(schpaa.state.listen(new cljs.core.Keyword("app","expose-app-db","app/expose-app-db",1842880903)));
var get_menuopen_fn = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","menu-open?","app/menu-open?",-1909943954)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.h-full","div.h-full",-94699962),(cljs.core.truth_(expose_app_db)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.debug.ppre_x,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(re_frame.db.app_db),new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("re-statecharts.core","fsm-state","re-statecharts.core/fsm-state",1916399430)], 0))], null):null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.modal.overlay_with,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"short-timeout","short-timeout",632822522),new cljs.core.Keyword(null,"modal-short-timeout","modal-short-timeout",951333762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),new cljs.core.Keyword(null,"modal-dim","modal-dim",-1067828639),new cljs.core.Keyword(null,"modal-dim","modal-dim",-1067828639).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)),new cljs.core.Keyword(null,"modal?","modal?",2146094679),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"modal-forced","modal-forced",-1484743667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
}
})(),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"modal-dirty","modal-dirty",-1963211376).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"modal-forced","modal-forced",-1484743667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
}
})())?null:(function (){
return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
}))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.modal.render,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show?","show?",1543842127),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"modal-forced","modal-forced",-1484743667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
}
})(),new cljs.core.Keyword(null,"config-fn","config-fn",1600215301),new cljs.core.Keyword(null,"modal-config-fn","modal-config-fn",366888271).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.components.screen.render,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"current-page-subtitle","current-page-subtitle",690433829),new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702),new cljs.core.Keyword(null,"menu-direction","menu-direction",-285147796),new cljs.core.Keyword(null,"get-menuopen-fn","get-menuopen-fn",-419991884),new cljs.core.Keyword(null,"navigate-to-user","navigate-to-user",605684985),new cljs.core.Keyword(null,"navigate-to-home","navigate-to-home",519585018),new cljs.core.Keyword(null,"user-auth","user-auth",605869084),new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"toggle-menu-open","toggle-menu-open",1049902975)],[(function (){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","current-page-subtitle","app/current-page-subtitle",690325702)], null)));
}),(function (){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","current-page-title","app/current-page-title",209157927)], null)));
}),cljs.core.deref(schpaa.state.listen(new cljs.core.Keyword("app","menu-direction","app/menu-direction",-282164405))),(function (){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","menu-open?","app/menu-open?",-1909943954)], null)));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","navigate-to","app/navigate-to",-1161483871),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","previous","app/previous",-719538285),new cljs.core.Keyword(null,"active-back","active-back",1963487388),new cljs.core.Keyword(null,"r.user","r.user",-1180884506)], null)))], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","navigate-to","app/navigate-to",-1161483871),cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","previous","app/previous",-719538285),new cljs.core.Keyword(null,"active-front","active-front",-419593776),new cljs.core.Keyword(null,"r.forsiden","r.forsiden",353619513)], null)))], null));
}),(function (){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.core","user-auth","db.core/user-auth",-1883386069)], null)));
}),(function (){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","current-page","app/current-page",-101458565)], null)));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-menu-open","toggle-menu-open",1049902975)], null));
})]),web_content], null)], null)], null);
});
nrpk.spa.app_wrapper = (function nrpk$spa$app_wrapper(route_table){
var route_name = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"route-name","route-name",-932603717)], null));
var route_entry = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null));
var user_screenmode = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","user-screenmode","app/user-screenmode",-358157672)], null));
var html = (document.getElementsByTagName("html")[(0)]);
var body = (document.getElementsByTagName("body")[(0)]);
var menu_open_QMARK_ = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","menu-open?","app/menu-open?",-1909943954)], null));
var s = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","state-full","re-statecharts.core/state-full",1766118627),new cljs.core.Keyword(null,"main-fsm","main-fsm",-1719256745)], null));
html.setAttribute("class",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dark","dark",1818973999),cljs.core.deref(user_screenmode)))?"dark":""));

body.setAttribute("class","font-sans bg-gray-600 dark:bg-gray-800 ");

nrpk.spa.forced_scroll_lock((function (){var or__4253__auto__ = cljs.core.deref(menu_open_QMARK_);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = (function (){var or__4253__auto____$1 = new cljs.core.Keyword(null,"modal","modal",-1031880850).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
return new cljs.core.Keyword(null,"modal-forced","modal-forced",-1484743667).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s));
}
})();
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"modal-short-timeout","modal-short-timeout",951333762).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(s)));
} else {
return and__4251__auto__;
}
}
})(),"maint");

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nrpk.spa.dispatch_main,(function (){var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(route_table,cljs.core.deref(route_name));
if(cljs.core.truth_(temp__5753__auto__)){
var page = temp__5753__auto__;
return kee_frame.router.make_route_component(page,cljs.core.deref(route_entry));
} else {
return null;
}
})()], null);
});

//# sourceMappingURL=nrpk.spa.js.map
