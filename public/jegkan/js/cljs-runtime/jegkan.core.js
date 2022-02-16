goog.provide('jegkan.core');
jegkan.core.kee_start = (function jegkan$core$kee_start(){
return kee_frame.core.start_BANG_(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"routes","routes",457900162),jegkan.appdata.routes,new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),jegkan.appdata.initial_db,new cljs.core.Keyword(null,"screen","screen",1990059748),jegkan.appdata.screen_breakpoints,new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nrpk.spa.app_wrapper,jegkan.spa.route_table], null),new cljs.core.Keyword(null,"not-found","not-found",-629079980),"/not-found",new cljs.core.Keyword(null,"hash-routing?","hash-routing?",471914732),false], null));
});
jegkan.core.reload_BANG_ = (function jegkan$core$reload_BANG_(){
console.log("loaded!");

re_frame.core.clear_subscription_cache_BANG_();

jegkan.core.kee_start();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","setup-handlers","app/setup-handlers",-1727688477)], null));
});
jegkan.core.init_BANG_ = (function jegkan$core$init_BANG_(){
db.core.init_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"config","config",994861415),jegkan.appdata.jegkan_firebaseconfig], null));

jegkan.core.reload_BANG_();

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("re-statecharts.core","transition","re-statecharts.core/transition",491330984),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.Keyword(null,"e.restart","e.restart",759066048)], null));
});

//# sourceMappingURL=jegkan.core.js.map
