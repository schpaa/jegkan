goog.provide('schpaa.components.screen');
schpaa.components.screen.overlay = (function schpaa$components$screen$overlay(_STAR_menu_open_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.xmob:invisible.fixed.inset-0.z-200","div.xmob:invisible.fixed.inset-0.z-200",-2040098033),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.truth_(_STAR_menu_open_QMARK_)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"toggle-menu-open","toggle-menu-open",1049902975)], null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(_STAR_menu_open_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bg-gray-900/40",new cljs.core.Keyword(null,"duration-500","duration-500",36681312),new cljs.core.Keyword(null,"pointer-events-auto","pointer-events-auto",566281466)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"xduration-200","xduration-200",-1347034624),new cljs.core.Keyword(null,"bg-opacity-0","bg-opacity-0",1751151037),new cljs.core.Keyword(null,"duration-500","duration-500",36681312),new cljs.core.Keyword(null,"pointer-events-none","pointer-events-none",-386971300)], null))], null)], null);
});
schpaa.components.screen.render = (function schpaa$components$screen$render(p__54905,web_content){
var map__54906 = p__54905;
var map__54906__$1 = cljs.core.__destructure_map(map__54906);
var m = map__54906__$1;
var get_menuopen_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"get-menuopen-fn","get-menuopen-fn",-419991884));
var menu_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54906__$1,new cljs.core.Keyword(null,"menu-direction","menu-direction",-285147796));
var direction = (cljs.core.truth_(menu_direction)?new cljs.core.Keyword(null,"-translate-x-80","-translate-x-80",-1955146763):new cljs.core.Keyword(null,"translate-x-80","translate-x-80",875165103));
var route = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__54907 = cljs.core.deref(route);
var G__54907__$1 = (((G__54907 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__54907));
if((G__54907__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__54907__$1);
}
})(),new cljs.core.Keyword(null,"r.page-not-found","r.page-not-found",1745676033)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.sticky.top-0.z-200","div.sticky.top-0.z-200",435039852),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration-200","duration-200",1449692592),(cljs.core.truth_((get_menuopen_fn.cljs$core$IFn$_invoke$arity$0 ? get_menuopen_fn.cljs$core$IFn$_invoke$arity$0() : get_menuopen_fn.call(null)))?direction:null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.components.header.render,m], null)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration-200","duration-200",1449692592),(cljs.core.truth_((get_menuopen_fn.cljs$core$IFn$_invoke$arity$0 ? get_menuopen_fn.cljs$core$IFn$_invoke$arity$0() : get_menuopen_fn.call(null)))?direction:null)], null)], null),web_content], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.components.screen.overlay,(get_menuopen_fn.cljs$core$IFn$_invoke$arity$0 ? get_menuopen_fn.cljs$core$IFn$_invoke$arity$0() : get_menuopen_fn.call(null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.components.sidebar.render,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"uid","uid",-1447769400),(function (){
return (123);
}),new cljs.core.Keyword(null,"set-selected-tab","set-selected-tab",469679517),(function (e){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("schpaa.components.widgets","set-tab","schpaa.components.widgets/set-tab",-1252764900),e], null));
}),new cljs.core.Keyword(null,"get-selected-tab","get-selected-tab",-356363427),(function (){
return cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("schpaa.components.widgets","get-tab","schpaa.components.widgets/get-tab",-474259190)], null)));
}),new cljs.core.Keyword(null,"current-tab","current-tab",-1305174577),(function (){
return (0);
})], null))], null)], null);
});

//# sourceMappingURL=schpaa.components.screen.js.map
