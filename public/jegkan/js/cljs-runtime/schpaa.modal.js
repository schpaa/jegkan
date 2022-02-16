goog.provide('schpaa.modal');
schpaa.modal.default_dialog_timeout = (5000);
schpaa.modal.default_dialog_short_timeout = (2000);
schpaa.modal.animation_duration = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"duration-300","duration-300",36110880)], null);
schpaa.modal.clear_modal_state = (function schpaa$modal$clear_modal_state(){
var G__70117 = (function (st,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(st,new cljs.core.Keyword(null,"modal","modal",-1031880850),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modal-forced","modal-forced",-1484743667),false], 0));
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__70117) : statecharts.core.assign.call(null,G__70117));
});
schpaa.modal.set_dirty_modal_state = (function schpaa$modal$set_dirty_modal_state(){
var G__70118 = (function (st,_){
cljs.core.tap_GT_("set-dirty-modal-state");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"modal-dirty","modal-dirty",-1963211376),true);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__70118) : statecharts.core.assign.call(null,G__70118));
});
schpaa.modal.set_clean_modal_state = (function schpaa$modal$set_clean_modal_state(){
var G__70119 = (function (st,_){
cljs.core.tap_GT_("set-clean-modal-state");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(st,new cljs.core.Keyword(null,"modal-dirty","modal-dirty",-1963211376),false);
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__70119) : statecharts.core.assign.call(null,G__70119));
});
/**
 * short-timeout ec55a6a
 */
schpaa.modal.set_brief_modal_state = (function schpaa$modal$set_brief_modal_state(){
var G__70121 = (function (st,p__70123){
var map__70124 = p__70123;
var map__70124__$1 = cljs.core.__destructure_map(map__70124);
var _event = map__70124__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70124__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var more_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70124__$1,new cljs.core.Keyword(null,"more-data","more-data",-1255260775));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(st,new cljs.core.Keyword(null,"modal-short-timeout","modal-short-timeout",951333762),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modal-dim","modal-dim",-1067828639),data,new cljs.core.Keyword(null,"modal-config-fn","modal-config-fn",366888271),new cljs.core.Keyword(null,"modal-config-fn","modal-config-fn",366888271).cljs$core$IFn$_invoke$arity$1(cljs.core.first(more_data)),new cljs.core.Keyword(null,"modal-forced","modal-forced",-1484743667),false,new cljs.core.Keyword(null,"modal","modal",-1031880850),true], 0));
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__70121) : statecharts.core.assign.call(null,G__70121));
});
schpaa.modal.set_normal_modal_state = (function schpaa$modal$set_normal_modal_state(){
var G__70129 = (function (st,p__70130){
var map__70131 = p__70130;
var map__70131__$1 = cljs.core.__destructure_map(map__70131);
var _event = map__70131__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70131__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var more_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70131__$1,new cljs.core.Keyword(null,"more-data","more-data",-1255260775));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(st,new cljs.core.Keyword(null,"modal-short-timeout","modal-short-timeout",951333762),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modal-dim","modal-dim",-1067828639),data,new cljs.core.Keyword(null,"modal-config-fn","modal-config-fn",366888271),new cljs.core.Keyword(null,"modal-config-fn","modal-config-fn",366888271).cljs$core$IFn$_invoke$arity$1(cljs.core.first(more_data)),new cljs.core.Keyword(null,"modal-forced","modal-forced",-1484743667),false,new cljs.core.Keyword(null,"modal","modal",-1031880850),true], 0));
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__70129) : statecharts.core.assign.call(null,G__70129));
});
schpaa.modal.set_forced_modal_state = (function schpaa$modal$set_forced_modal_state(){
var G__70133 = (function (st,p__70136){
var map__70137 = p__70136;
var map__70137__$1 = cljs.core.__destructure_map(map__70137);
var _event = map__70137__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70137__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var more_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70137__$1,new cljs.core.Keyword(null,"more-data","more-data",-1255260775));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(st,new cljs.core.Keyword(null,"modal-short-timeout","modal-short-timeout",951333762),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modal-dim","modal-dim",-1067828639),data,new cljs.core.Keyword(null,"modal-config-fn","modal-config-fn",366888271),new cljs.core.Keyword(null,"modal-config-fn","modal-config-fn",366888271).cljs$core$IFn$_invoke$arity$1(cljs.core.first(more_data)),new cljs.core.Keyword(null,"modal-forced","modal-forced",-1484743667),true], 0));
});
return (statecharts.core.assign.cljs$core$IFn$_invoke$arity$1 ? statecharts.core.assign.cljs$core$IFn$_invoke$arity$1(G__70133) : statecharts.core.assign.call(null,G__70133));
});
schpaa.modal.modal_machine = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial","initial",1854648214),new cljs.core.Keyword(null,"s.initial","s.initial",1277199970),new cljs.core.Keyword(null,"states","states",1389013542),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"s.initial","s.initial",1277199970),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),schpaa.modal.clear_modal_state(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"e.show-locked","e.show-locked",2114957007),new cljs.core.Keyword(null,"s.locked","s.locked",1059799312),new cljs.core.Keyword(null,"e.show-with-timeout","e.show-with-timeout",123803750),new cljs.core.Keyword(null,"s.timeout","s.timeout",-754506344),new cljs.core.Keyword(null,"e.show-with-short-timeout","e.show-with-short-timeout",-1943944901),new cljs.core.Keyword(null,"s.short-timeout","s.short-timeout",-1414354556),new cljs.core.Keyword(null,"e.show","e.show",760156070),new cljs.core.Keyword(null,"s.visible","s.visible",466789858)], null)], null),new cljs.core.Keyword(null,"s.visible","s.visible",466789858),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),schpaa.modal.set_normal_modal_state(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"e.dirty","e.dirty",-1025110067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),schpaa.modal.set_dirty_modal_state()], null),new cljs.core.Keyword(null,"e.clean","e.clean",-836971414),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"actions","actions",-812656882),schpaa.modal.set_clean_modal_state()], null),new cljs.core.Keyword(null,"e.hide","e.hide",1337726301),new cljs.core.Keyword(null,"s.initial","s.initial",1277199970)], null)], null),new cljs.core.Keyword(null,"s.locked","s.locked",1059799312),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"entry","entry",505168823),schpaa.modal.set_forced_modal_state(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e.hide","e.hide",1337726301),new cljs.core.Keyword(null,"s.initial","s.initial",1277199970)], null)], null),new cljs.core.Keyword(null,"s.short-timeout","s.short-timeout",-1414354556),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry","entry",505168823),schpaa.modal.set_brief_modal_state(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e.hide","e.hide",1337726301),new cljs.core.Keyword(null,"s.initial","s.initial",1277199970)], null),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),(function (_,p__70141){
var map__70142 = p__70141;
var map__70142__$1 = cljs.core.__destructure_map(map__70142);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70142__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$2(data,schpaa.modal.default_dialog_short_timeout);
}),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"s.initial","s.initial",1277199970)], null)], null)], null),new cljs.core.Keyword(null,"s.timeout","s.timeout",-754506344),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"entry","entry",505168823),schpaa.modal.set_normal_modal_state(),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"e.hide","e.hide",1337726301),new cljs.core.Keyword(null,"s.initial","s.initial",1277199970)], null),new cljs.core.Keyword(null,"after","after",594996914),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delay","delay",-574225219),(function (_,p__70144){
var map__70145 = p__70144;
var map__70145__$1 = cljs.core.__destructure_map(map__70145);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70145__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$2(data,schpaa.modal.default_dialog_timeout);
}),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"s.initial","s.initial",1277199970)], null)], null)], null)], null)], null);
schpaa.modal.overlay_with = (function schpaa$modal$overlay_with(var_args){
var args__4870__auto__ = [];
var len__4864__auto___70180 = arguments.length;
var i__4865__auto___70181 = (0);
while(true){
if((i__4865__auto___70181 < len__4864__auto___70180)){
args__4870__auto__.push((arguments[i__4865__auto___70181]));

var G__70182 = (i__4865__auto___70181 + (1));
i__4865__auto___70181 = G__70182;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return schpaa.modal.overlay_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(schpaa.modal.overlay_with.cljs$core$IFn$_invoke$arity$variadic = (function (p__70154,content){
var map__70155 = p__70154;
var map__70155__$1 = cljs.core.__destructure_map(map__70155);
var short_timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70155__$1,new cljs.core.Keyword(null,"short-timeout","short-timeout",632822522));
var modal_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70155__$1,new cljs.core.Keyword(null,"modal?","modal?",2146094679));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70155__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var modal_dim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70155__$1,new cljs.core.Keyword(null,"modal-dim","modal-dim",-1067828639));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.h-full.cursor-default","div.relative.h-full.cursor-default",791231209),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.inset-0","div.fixed.inset-0",-854381768),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(schpaa.modal.animation_duration,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"bg-black","bg-black",2110303851)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(modal_QMARK_)?(cljs.core.truth_(short_timeout)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-opacity-0","bg-opacity-0",1751151037),new cljs.core.Keyword(null,"pointer-events-none","pointer-events-none",-386971300),new cljs.core.Keyword(null,"z-300","z-300",989853405)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__70156 = modal_dim;
var G__70156__$1 = (((G__70156 instanceof cljs.core.Keyword))?G__70156.fqn:null);
switch (G__70156__$1) {
case "weak-dim":
return new cljs.core.Keyword(null,"bg-opacity-30","bg-opacity-30",2088538279);

break;
default:
return new cljs.core.Keyword(null,"bg-opacity-80","bg-opacity-80",-303480357);

}
})(),new cljs.core.Keyword(null,"pointer-events-auto","pointer-events-auto",566281466),new cljs.core.Keyword(null,"z-300","z-300",989853405)], null)):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-opacity-0","bg-opacity-0",1751151037),new cljs.core.Keyword(null,"pointer-events-none","pointer-events-none",-386971300),new cljs.core.Keyword(null,"z-300","z-300",989853405)], null))], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_close], null)], null),content], null);
}));

(schpaa.modal.overlay_with.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schpaa.modal.overlay_with.cljs$lang$applyTo = (function (seq70150){
var G__70151 = cljs.core.first(seq70150);
var seq70150__$1 = cljs.core.next(seq70150);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__70151,seq70150__$1);
}));

schpaa.modal.color_map = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bgt","bgt",1988673423),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-300","bg-gray-300",-139653407),new cljs.core.Keyword(null,"text-gray-700","text-gray-700",1101796788),new cljs.core.Keyword(null,"dark:bg-gray-600","dark:bg-gray-600",1877910847),new cljs.core.Keyword(null,"dark:text-gray-100","dark:text-gray-100",861787767)], null),new cljs.core.Keyword(null,"bgp","bgp",-2004304401),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-300","bg-gray-300",-139653407),new cljs.core.Keyword(null,"text-gray-700","text-gray-700",1101796788),new cljs.core.Keyword(null,"dark:bg-gray-600","dark:bg-gray-600",1877910847),new cljs.core.Keyword(null,"dark:text-100","dark:text-100",2112373776)], null),new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-rose-400","bg-rose-400",-332407309),new cljs.core.Keyword(null,"text-gray-700","text-gray-700",1101796788),new cljs.core.Keyword(null,"dark:bg-gray-600","dark:bg-gray-600",1877910847),new cljs.core.Keyword(null,"dark:text-100","dark:text-100",2112373776)], null),new cljs.core.Keyword(null,"bgf","bgf",-896327011),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-600","bg-gray-600",-1204897057),new cljs.core.Keyword(null,"text-gray-200","text-gray-200",-814985907),new cljs.core.Keyword(null,"dark:bg-gray-700","dark:bg-gray-700",-807666632),new cljs.core.Keyword(null,"dark:text-gray-100","dark:text-gray-100",861787767)], null)], null),new cljs.core.Keyword(null,"cover","cover",-823541365),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bgt","bgt",1988673423),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-300","bg-gray-300",-139653407),new cljs.core.Keyword(null,"text-black","text-black",-1990796629),new cljs.core.Keyword(null,"font-bold","font-bold",272258030),new cljs.core.Keyword(null,"text-2xl","text-2xl",1852264753)], null),new cljs.core.Keyword(null,"bgp","bgp",-2004304401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-300","bg-gray-300",-139653407),new cljs.core.Keyword(null,"text-gray-700","text-gray-700",1101796788)], null),new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-300","bg-gray-300",-139653407),new cljs.core.Keyword(null,"text-gray-700","text-gray-700",1101796788)], null),new cljs.core.Keyword(null,"bgf","bgf",-896327011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-900","bg-gray-900",-1916121301),new cljs.core.Keyword(null,"text-gray-200","text-gray-200",-814985907)], null)], null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bgt","bgt",1988673423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-rose-500","bg-rose-500",1857746376),new cljs.core.Keyword(null,"text-rose-300","text-rose-300",1386822921)], null),new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-rose-500","bg-rose-500",1857746376),new cljs.core.Keyword(null,"text-rose-200","text-rose-200",979233048)], null),new cljs.core.Keyword(null,"bgp","bgp",-2004304401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-rose-500","bg-rose-500",1857746376),new cljs.core.Keyword(null,"text-rose-100","text-rose-100",-573961474)], null),new cljs.core.Keyword(null,"bgf","bgf",-896327011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-rose-900","bg-rose-900",75728770),new cljs.core.Keyword(null,"text-rose-200","text-rose-200",979233048)], null)], null),new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bgt","bgt",1988673423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-sky-500","bg-sky-500",-523809984),new cljs.core.Keyword(null,"text-sky-50","text-sky-50",-1474036384)], null),new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-alt","bg-alt",1108747320),new cljs.core.Keyword(null,"text-gray-100","text-gray-100",1074950007)], null),new cljs.core.Keyword(null,"bgp","bgp",-2004304401),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-alt","bg-alt",1108747320),new cljs.core.Keyword(null,"text-gray-100","text-gray-100",1074950007),new cljs.core.Keyword(null,"dark:bg-gray-500","dark:bg-gray-500",-2032540930),new cljs.core.Keyword(null,"dark:text-gray-100","dark:text-gray-100",861787767)], null),new cljs.core.Keyword(null,"bgf","bgf",-896327011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-white","text-white",-1261600697),new cljs.core.Keyword(null,"bg-black","bg-black",2110303851)], null)], null),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"bgt","bgt",1988673423),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-50","bg-gray-50",-1366035773),new cljs.core.Keyword(null,"text-gray-700","text-gray-700",1101796788)], null),new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-50","bg-gray-50",-1366035773),new cljs.core.Keyword(null,"text-gray-700","text-gray-700",1101796788)], null),new cljs.core.Keyword(null,"bgp","bgp",-2004304401),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg-gray-500","bg-gray-500",1670167350),new cljs.core.Keyword(null,"text-gray-100","text-gray-100",1074950007)], null),new cljs.core.Keyword(null,"bgf","bgf",-896327011),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-white","text-white",-1261600697),new cljs.core.Keyword(null,"bg-alt","bg-alt",1108747320)], null)], null)], null);
schpaa.modal.form_action = (function schpaa$modal$form_action(p__70158){
var map__70159 = p__70158;
var map__70159__$1 = cljs.core.__destructure_map(map__70159);
var m = map__70159__$1;
var button_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70159__$1,new cljs.core.Keyword(null,"button-bar","button-bar",-1962583847));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70159__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var close_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70159__$1,new cljs.core.Keyword(null,"close-fn","close-fn",-1779772512),(function (){
return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
}));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70159__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70159__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var form_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70159__$1,new cljs.core.Keyword(null,"form-fn","form-fn",813273806));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70159__$1,new cljs.core.Keyword(null,"header","header",119441134));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70159__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70159__$1,new cljs.core.Keyword(null,"title","title",636505583));
var flags__$1 = (function (){var G__70163 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,flags);
if(cljs.core.contains_QMARK_(type,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"popup","popup",635890211),new cljs.core.Keyword(null,"message","message",-406056002)], null))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70163,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
} else {
return G__70163;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(nrpk.fsm_helpers.send,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(new cljs.core.Keyword(null,"forced","forced",-1044342851).cljs$core$IFn$_invoke$arity$1(flags__$1))?new cljs.core.Keyword(null,"e.show-locked","e.show-locked",2114957007):(cljs.core.truth_(new cljs.core.Keyword(null,"short-timeout","short-timeout",632822522).cljs$core$IFn$_invoke$arity$1(flags__$1))?new cljs.core.Keyword(null,"e.show-with-short-timeout","e.show-with-short-timeout",-1943944901):(cljs.core.truth_(new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(flags__$1))?new cljs.core.Keyword(null,"e.show-with-timeout","e.show-with-timeout",123803750):new cljs.core.Keyword(null,"e.show","e.show",760156070)
))),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weak-dim","weak-dim",1759988152),null], null), null),flags__$1))?new cljs.core.Keyword(null,"weak-dim","weak-dim",1759988152):new cljs.core.Keyword(null,"normal-dim","normal-dim",1599102331)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"modal-config-fn","modal-config-fn",366888271),(function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"final-position","final-position",-1037091954),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"-translate-y-100","-translate-y-100",-1050925768)], null)], null),new cljs.core.Keyword(null,"dialog-type","dialog-type",383091538),(function (){var or__4253__auto__ = type;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"form","form",-1624062471);
}
})(),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(flags__$1,new cljs.core.Keyword(null,"wide","wide",-151772487))], null),m,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(title)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.gap-2.p-4.text-base.font-normal.w-full","div.grid.gap-2.p-4.text-base.font-normal.w-full",-323594763),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"2rem 1fr min-content"], null)], null),(cljs.core.truth_(icon)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.self-center.justify-self-start","div.self-center.justify-self-start",1168494494),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.touch,icon], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.self-center","div.self-center",-33666552),title], null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2.self-center.font-bold","div.col-span-2.self-center.font-bold",-1336353594),title], null)),(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-button","close-button",1885538121),null], null), null),flags__$1))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),close_fn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.small,new cljs.core.Keyword(null,"cross-out","cross-out",2056969544)], null)], null):null)], null)], null):((typeof header === 'string')?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"dialog-header","dialog-header",-539199508)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bg","bg",-206688421),new cljs.core.Keyword(null,"fg","fg",-101797208),new cljs.core.Keyword(null,"hd","hd",242175935)], null))], 0))], null),header], null)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"header","header",119441134),header], null))),(cljs.core.truth_(footer)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"footer","footer",1606445390),((typeof footer === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-4.text-sm.space-y-2","div.px-4.py-4.text-sm.space-y-2",-499456752),footer], null):cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-4.py-4.text-sm.space-y-2","div.px-4.py-4.text-sm.space-y-2",-499456752)], null),footer)
)], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"button-bar","button-bar",-1962583847),button_bar,new cljs.core.Keyword(null,"form-fn","form-fn",813273806),form_fn], null)], 0));
})], null)], null));
});
schpaa.modal.form = (function schpaa$modal$form(p__70170){
var map__70171 = p__70170;
var map__70171__$1 = cljs.core.__destructure_map(map__70171);
var m = map__70171__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"header","header",119441134));
var form_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"form-fn","form-fn",813273806));
var footer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"footer","footer",1606445390));
var dialog_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"dialog-type","dialog-type",383091538));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70171__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var map__70173 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(schpaa.modal.color_map,dialog_type);
var map__70173__$1 = cljs.core.__destructure_map(map__70173);
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70173__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var bgp = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70173__$1,new cljs.core.Keyword(null,"bgp","bgp",-2004304401));
var bgf = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70173__$1,new cljs.core.Keyword(null,"bgf","bgf",-896327011));
var bgt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70173__$1,new cljs.core.Keyword(null,"bgt","bgt",1988673423));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.top-0","div.relative.top-0",823168769),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bg], null),(cljs.core.truth_(header)?header:null),(cljs.core.truth_(form_fn)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),bgp], null),(form_fn.cljs$core$IFn$_invoke$arity$1 ? form_fn.cljs$core$IFn$_invoke$arity$1(m) : form_fn.call(null,m))], null):null),(cljs.core.truth_(footer)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bgf,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"items-center","items-center",2056701063),new cljs.core.Keyword(null,"justify-between","justify-between",1651302654),new cljs.core.Keyword(null,"xpx-2","xpx-2",-1781250973)], null))], null),footer], null):null)], null);
});
/**
 * add facilities to unmount a component when a transition is completed and
 *   the component is (supposedly) off-screen after the animation.
 */
schpaa.modal.render = (function schpaa$modal$render(p__70174){
var map__70175 = p__70174;
var map__70175__$1 = cljs.core.__destructure_map(map__70175);
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70175__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var config_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70175__$1,new cljs.core.Keyword(null,"config-fn","config-fn",1600215301));
var node = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var show_status = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var end_transition = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hiding","hiding",-520965124));
return reagent.core.create_class.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"modal-presenting-layer",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (c){
var _ = cljs.core.reset_BANG_(node,reagent.dom.dom_node(c));
cljs.core.deref(node).addEventListener("transitioncancel",(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hiding","hiding",-520965124),cljs.core.deref(end_transition))){
return cljs.core.reset_BANG_(show_status,false);
} else {
return cljs.core.reset_BANG_(show_status,true);
}
}));

return cljs.core.deref(node).addEventListener("transitionend",(function (){
if(cljs.core.truth_(cljs.core.deref(show_status))){
return cljs.core.reset_BANG_(end_transition,new cljs.core.Keyword(null,"showing","showing",798009604));
} else {
return cljs.core.reset_BANG_(end_transition,new cljs.core.Keyword(null,"hiding","hiding",-520965124));
}
}));
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (p__70176){
var map__70177 = p__70176;
var map__70177__$1 = cljs.core.__destructure_map(map__70177);
var show_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70177__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var config_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70177__$1,new cljs.core.Keyword(null,"config-fn","config-fn",1600215301));
var map__70178 = (((!((config_fn__$1 == null))))?(config_fn__$1.cljs$core$IFn$_invoke$arity$0 ? config_fn__$1.cljs$core$IFn$_invoke$arity$0() : config_fn__$1.call(null)):null);
var map__70178__$1 = cljs.core.__destructure_map(map__70178);
var m = map__70178__$1;
var dialog_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"dialog-type","dialog-type",383091538));
var flags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"flags","flags",1775418075));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70178__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var map__70179 = style;
var map__70179__$1 = cljs.core.__destructure_map(map__70179);
var final_position = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__70179__$1,new cljs.core.Keyword(null,"final-position","final-position",-1037091954),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"translate-y-100","translate-y-100",-283565320)], null));
cljs.core.reset_BANG_(show_status,show_QMARK___$1);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fixed.inset-x-1.select-none","div.fixed.inset-x-1.select-none",2079486729),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cover","cover",-823541365),null], null), null),flags))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-w-sm","max-w-sm",1597997403),new cljs.core.Keyword(null,"top-32","top-32",-846548275),new cljs.core.Keyword(null,"rounded","rounded",85415706)], null):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),source))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bottom-0","bottom-0",-1538325664),new cljs.core.Keyword(null,"rounded-t-lg","rounded-t-lg",1342804202)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top-0","top-0",-272332339),new cljs.core.Keyword(null,"rounded-b-lg","rounded-b-lg",-1282230843)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wide","wide",-151772487),null], null), null),flags))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-w-sm","max-w-sm",1597997403)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-w-xs","max-w-xs",-1931717501)], null)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"overflow-hidden","overflow-hidden",977968944),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"transform","transform",1381301764)], null),schpaa.modal.animation_duration,(cljs.core.truth_((function (){var or__4253__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"showing","showing",798009604),cljs.core.deref(end_transition));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return cljs.core.deref(show_status);
}
})())?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z-400","z-400",893810712),new cljs.core.Keyword(null,"h-auto","h-auto",-465880378),new cljs.core.Keyword(null,"mx-auto","mx-auto",796863543),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"drop-shadow-xl","drop-shadow-xl",-1983721786),new cljs.core.Keyword(null,"filter","filter",-948537934)], null):null),(cljs.core.truth_(cljs.core.deref(show_status))?final_position:null)], 0)),new cljs.core.Keyword(null,"style","style",-496642736),(cljs.core.truth_(cljs.core.deref(show_status))?null:(cljs.core.truth_(cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cover","cover",-823541365),null], null), null),flags))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,-150%)"], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bottom","bottom",-1550509018),source))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,110%)"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(0,-110%)"], null))))], null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,cljs.core.deref(show_status))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hiding","hiding",-520965124),cljs.core.deref(end_transition)))))?null:schpaa.modal.form(m))], null);
})], null));
});

//# sourceMappingURL=schpaa.modal.js.map
