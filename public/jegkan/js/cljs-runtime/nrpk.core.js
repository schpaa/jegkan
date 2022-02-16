goog.provide('nrpk.core');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"route-name","route-name",-932603717),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null),(function (route,_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","menu-open?","app/menu-open?",-1909943954),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203)], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","current-page","app/current-page",-101458565),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null),(function (r,_){
var G__54913 = r;
var G__54913__$1 = (((G__54913 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__54913));
if((G__54913__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__54913__$1);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","current-page-title","app/current-page-title",209157927),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null),(function (r,_){
var G__54914 = r;
var G__54914__$1 = (((G__54914 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__54914));
if((G__54914__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(G__54914__$1);
}
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","current-page-subtitle","app/current-page-subtitle",690325702),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null),(function (r,_){
var G__54915 = r;
var G__54915__$1 = (((G__54915 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__54915));
if((G__54915__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"subheader","subheader",-1028810273).cljs$core$IFn$_invoke$arity$1(G__54915__$1);
}
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"toggle-menu-open","toggle-menu-open",1049902975),(function (db__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.not,false));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","open-menu-at","app/open-menu-at",-1350298800),(function (db__$1,p__54916){
var vec__54917 = p__54916;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54917,(0),null);
var tab = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54917,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db__$1,new cljs.core.Keyword(null,"menu-open?","menu-open?",-1909849203),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"tab","tab",-559583621),tab], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("app","navigate-to","app/navigate-to",-1161483871),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.trim_v], null),(function (_,p__54920){
var vec__54921 = p__54920;
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54921,(0),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"navigate-to","navigate-to",-1161651312),page], null)], null)], null);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","menu-direction","app/menu-direction",-282164405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(db__$1,new cljs.core.Keyword(null,"menu-direction","menu-direction",-285147796),true);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","previous","app/previous",-719538285),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db__$1,p__54924){
var vec__54925 = p__54924;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54925,(0),null);
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54925,(1),null);
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54925,(2),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([context]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-front","active-front",-419593776),new cljs.core.Keyword(null,"active-back","active-back",1963487388)], null)))){
} else {
throw (new Error("Assert failed: (some #{context} [:active-front :active-back])"));
}

return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$3(db__$1,context,default$)], null);
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app","register-entry","app/register-entry",1006323870),(function (db__$1,p__54928){
var vec__54929 = p__54928;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54929,(0),null);
var context = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54929,(1),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54929,(2),null);
if(cljs.core.truth_(cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([context]),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-front","active-front",-419593776),new cljs.core.Keyword(null,"active-back","active-back",1963487388)], null)))){
} else {
throw (new Error("Assert failed: (some #{context} [:active-front :active-back])"));
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db__$1,context,page);
}));

//# sourceMappingURL=nrpk.core.js.map
