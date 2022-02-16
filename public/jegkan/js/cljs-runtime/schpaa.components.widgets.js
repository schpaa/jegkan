goog.provide('schpaa.components.widgets');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("schpaa.components.widgets","set-tab","schpaa.components.widgets/set-tab",-1252764900),(function (db__$1,p__74401){
var vec__74402 = p__74401;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74402,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74402,(1),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74402,(2),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"tab","tab",-559583621),tab_id);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("schpaa.components.widgets","get-tab","schpaa.components.widgets/get-tab",-474259190),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__74405){
var vec__74406 = p__74405;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74406,(0),null);
var tab_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74406,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74406,(2),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.Keyword(null,"tab","tab",-559583621));
})], 0));
schpaa.components.widgets.render_tabs = (function schpaa$components$widgets$render_tabs(p__74409,p__74410){
var map__74411 = p__74409;
var map__74411__$1 = cljs.core.__destructure_map(map__74411);
var opts = map__74411__$1;
var selected_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74411__$1,new cljs.core.Keyword(null,"selected-classes","selected-classes",-1345999101));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74411__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var normal_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74411__$1,new cljs.core.Keyword(null,"normal-classes","normal-classes",1434412810));
var current_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74411__$1,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577));
var tabs_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74411__$1,new cljs.core.Keyword(null,"tabs-id","tabs-id",1300326497));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74411__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var map__74412 = p__74410;
var map__74412__$1 = cljs.core.__destructure_map(map__74412);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74412__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74412__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.h-12","button.h-12",-1366186185),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,current_tab))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(selected_classes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor-default","cursor-default",1852052276),new cljs.core.Keyword(null,"btn-tab-sel","btn-tab-sel",-1188924737)], null)):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(normal_classes,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"btn-tab","btn-tab",687639725),new cljs.core.Keyword(null,"cursor-pointer","cursor-pointer",1756742679)], null)))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("schpaa.components.widgets","set-tab","schpaa.components.widgets/set-tab",-1252764900),tabs_id,id], null));

if(cljs.core.truth_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(data) : on_click.call(null,data));
} else {
return null;
}
})], null),text], null);
});
schpaa.components.widgets.tab_machine = (function schpaa$components$widgets$tab_machine(p__74418,data){
var map__74419 = p__74418;
var map__74419__$1 = cljs.core.__destructure_map(map__74419);
var opts = map__74419__$1;
var selected_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74419__$1,new cljs.core.Keyword(null,"selected-classes","selected-classes",-1345999101));
var normal_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74419__$1,new cljs.core.Keyword(null,"normal-classes","normal-classes",1434412810));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__74419__$1,new cljs.core.Keyword(null,"render","render",-1408033454),schpaa.components.widgets.render_tabs);
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74419__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74419__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var current_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74419__$1,new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577));
var tabs_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74419__$1,new cljs.core.Keyword(null,"tabs-id","tabs-id",1300326497));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.pt-4.px-3.overflow-x-auto","div.flex.gap-2.pt-4.px-3.overflow-x-auto",-1575983314),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),class$], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74421){
var vec__74422 = p__74421;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74422,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74422,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [render,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"id","id",-1388402092),id),m], null);
}),data));
});

//# sourceMappingURL=schpaa.components.widgets.js.map
