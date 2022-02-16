goog.provide('schpaa.components.sidebar_mock');
schpaa.components.sidebar_mock.gr = (function schpaa$components$sidebar_mock$gr(var_args){
var args__4870__auto__ = [];
var len__4864__auto___75553 = arguments.length;
var i__4865__auto___75554 = (0);
while(true){
if((i__4865__auto___75554 < len__4864__auto___75553)){
args__4870__auto__.push((arguments[i__4865__auto___75554]));

var G__75555 = (i__4865__auto___75554 + (1));
i__4865__auto___75554 = G__75555;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return schpaa.components.sidebar_mock.gr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(schpaa.components.sidebar_mock.gr.cljs$core$IFn$_invoke$arity$variadic = (function (attr,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-lora.text-base.truncate.space-y-1","div.font-lora.text-base.truncate.space-y-1",-971202448),attr,content], null);
}));

(schpaa.components.sidebar_mock.gr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(schpaa.components.sidebar_mock.gr.cljs$lang$applyTo = (function (seq75501){
var G__75502 = cljs.core.first(seq75501);
var seq75501__$1 = cljs.core.next(seq75501);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__75502,seq75501__$1);
}));

schpaa.components.sidebar_mock.re = (function schpaa$components$sidebar_mock$re(s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.font-redacted.text-xl","div.font-redacted.text-xl",578759720),s], null);
});
schpaa.components.sidebar_mock.tr = (function schpaa$components$sidebar_mock$tr(var_args){
var G__75512 = arguments.length;
switch (G__75512) {
case 1:
return schpaa.components.sidebar_mock.tr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return schpaa.components.sidebar_mock.tr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(schpaa.components.sidebar_mock.tr.cljs$core$IFn$_invoke$arity$1 = (function (s){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.truncate.font-redacted.font-sansx.text-base","div.truncate.font-redacted.font-sansx.text-base",-2002324222),s], null);
}));

(schpaa.components.sidebar_mock.tr.cljs$core$IFn$_invoke$arity$2 = (function (s,p__75516){
var vec__75517 = p__75516;
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75517,(0),null);
var r = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("kee-frame","route","kee-frame/route",-106555640)], null)));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.truncate.font-sans.text-base","div.truncate.font-sans.text-base",-2002163791),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,(function (){var G__75520 = r;
var G__75520__$1 = (((G__75520 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__75520));
if((G__75520__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__75520__$1);
}
})()))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor-pointer","cursor-pointer",1756742679),new cljs.core.Keyword(null,"underline","underline",2018066703)], null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","navigate-to","app/navigate-to",-1161483871),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [route], null)], null));
})], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route,(function (){var G__75524 = r;
var G__75524__$1 = (((G__75524 == null))?null:new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__75524));
if((G__75524__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__75524__$1);
}
})()))?"-> ":null),s], null);
}));

(schpaa.components.sidebar_mock.tr.cljs$lang$maxFixedArity = 2);

schpaa.components.sidebar_mock.h2 = (function schpaa$components$sidebar_mock$h2(attr,s,p__75526){
var map__75527 = p__75526;
var map__75527__$1 = cljs.core.__destructure_map(map__75527);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75527__$1,new cljs.core.Keyword(null,"group","group",582596132));
var ingress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75527__$1,new cljs.core.Keyword(null,"ingress","ingress",1410723428));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-1","div.space-y-1",706550497),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),attr,s], null),(cljs.core.truth_(ingress)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),schpaa.style.std_header_color], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.components.sidebar_mock.re,ingress], null)], null):(cljs.core.truth_(group)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-4","div.space-y-4",-437067713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.components.sidebar_mock.gr,group], null)], null):null))], null);
});
schpaa.components.sidebar_mock.link = (function schpaa$components$sidebar_mock$link(s){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-sans","font-sans",867971242),new cljs.core.Keyword(null,"text-sm","text-sm",-2048931397),new cljs.core.Keyword(null,"underline","underline",2018066703)], null),schpaa.style.sidebar_header_color)], null),s], null);
});
schpaa.components.sidebar_mock.content_content_fn = (function schpaa$components$sidebar_mock$content_content_fn(p__75535){
var map__75536 = p__75535;
var map__75536__$1 = cljs.core.__destructure_map(map__75536);
var selected_tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75536__$1,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
var color_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75536__$1,new cljs.core.Keyword(null,"color-map","color-map",-207789684));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-8.m-3","div.space-y-8.m-3",745675343),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-4","div.space-y-4",-437067713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.px-2.-mx-2.rounded.shadow-sm.space-y-4.text-xl.font-thin","div.px-2.-mx-2.rounded.shadow-sm.space-y-4.text-xl.font-thin",-912801291),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xl.flex.justify-between.gap-4","div.text-xl.flex.justify-between.gap-4",-46979256),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-baseline.py-2.px-4.rounded.flex-grow","div.flex.items-baseline.py-2.px-4.rounded.flex-grow",1340324258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.space-y-2.items-center.flex-grow.slashed-zero","div.flex.flex-col.space-y-2.items-center.flex-grow.slashed-zero",-468195851),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"vann"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-4xl.font-bold.relative.filter.drop-shadow-md","div.text-4xl.font-bold.relative.filter.drop-shadow-md",458225483),"0.2",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"\u00BAc"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-baseline.py-2.px-4.rounded.flex-grow","div.flex.items-baseline.py-2.px-4.rounded.flex-grow",1340324258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex-col.space-y-2.items-center.flex-grow","div.flex.flex-col.space-y-2.items-center.flex-grow",661649221),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"luft"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-4xl.font-bold.relativex.filter.drop-shadow-md","div.text-4xl.font-bold.relativex.filter.drop-shadow-md",-1893964411),"5.0",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sup","sup",-2039492346),"\u00BAc"], null)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.truncate.flex.justify-between","div.truncate.flex.justify-between",-516581248),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white/50"], null),schpaa.time.y_SINGLEQUOTE_(tick.core.at(tick.core.date.cljs$core$IFn$_invoke$arity$1("2021-11-11"),"11:01")),"-->"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-2","div.space-y-2",-924002995),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-base","div.text-base",-480420551),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"text-white/50"], null),"Registrerte utl\u00E5n i dag"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4.rounded.justify-around.flex","div.p-4.rounded.justify-around.flex",374991210),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"bg-black/20"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-4xl.font-bold","div.text-4xl.font-bold",-1730381984),"\u2013"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-4xl.font-bold","div.text-4xl.font-bold",-1730381984),"\u2013"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-4xl.font-bold","div.text-4xl.font-bold",-1730381984),"\u2013"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-4xl.font-bold","div.text-4xl.font-bold",-1730381984),"\u2013"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.prose.overflow-y-auto","div.prose.overflow-y-auto",578731894),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"prose-h3:text-base","prose-h3:text-base",-1503686108),new cljs.core.Keyword(null,"prose-h3:font-bold","prose-h3:font-bold",1053611728),new cljs.core.Keyword(null,"prose-h3:uppercase","prose-h3:uppercase",-495794664),new cljs.core.Keyword(null,"prose-p:leading-relaxed","prose-p:leading-relaxed",-748688548),"prose-p:text-white/90","prose-a:text-white/50",new cljs.core.Keyword(null,"prose-a:leading-snug","prose-a:leading-snug",-2018833298),new cljs.core.Keyword(null,"prose-a:text-lg","prose-a:text-lg",1242508705),new cljs.core.Keyword(null,"prose-p:m-0","prose-p:m-0",1032704481),new cljs.core.Keyword(null,"prose-p:mb-2","prose-p:mb-2",-945210051),new cljs.core.Keyword(null,"prose-p:p-0","prose-p:p-0",-1955748104),new cljs.core.Keyword(null,"prose-ul:list-decimal","prose-ul:list-decimal",-91723195),new cljs.core.Keyword(null,"prose-ul:list-outside","prose-ul:list-outside",1501055987)], null)], null),schpaa.markdown.md__GT_html("Liste med overskrifter og div annet av det siste og her kommer litt mer tekst.\n\n### Ofte lest\n\n- [Innhold](https://test)\n- [Vaktkalender](https://test)\n- [Oversikt](https://test)\n- [V\u00E6r](https://test)\n- [Brygge](https://test)\n- [Status](https://test)\n\n### Annet\n\n- [Forsiden](x)\n- [Vaktkalender](x)\n- [Sikkerhet](x)\n- [Klubbregler](x)\n- [N\u00F8kkelvakter](x)\n- [Utstyr](x)\n- [Sj\u00F8basen](x)\n- [Status](x)\n- [Mine innlegg](x)\n")], null)], null);
});
schpaa.components.sidebar_mock.content_tab_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Innhold",new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"\u00D8kter"], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Ekstra",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"Lord Blimey"], null),new cljs.core.Keyword(null,"uid","uid",-1447769400),"second-fake-user"], null)], null);
/**
 * docstring
 */
schpaa.components.sidebar_mock.content_below_fn = (function schpaa$components$sidebar_mock$content_below_fn(arglist){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-xs","div.text-xs",978150553),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("torv.pages.calendar.views","summary-proper","torv.pages.calendar.views/summary-proper",138806631,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"base","base",185279322),cljs.core.list(new cljs.core.Symbol("torv.pages.calendar","routine","torv.pages.calendar/routine",679450883,null),cljs.core.list(new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),cljs.core.list(new cljs.core.Symbol("db","on-value-reaction","db/on-value-reaction",1646062576,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["calendar"], null)], null)))),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.list(new cljs.core.Symbol("torv.pages.calendar","expand-date-range","torv.pages.calendar/expand-date-range",-656652950,null))], null)], null)], null);
});
schpaa.components.sidebar_mock.barchart_panel_data = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),"Config",new cljs.core.Keyword(null,"data","data",-232669377),null], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"B",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"Fakey Usery"], null),new cljs.core.Keyword(null,"uid","uid",-1447769400),"sample-uid-fake-user"], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"C",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"Lord Blimey"], null),new cljs.core.Keyword(null,"uid","uid",-1447769400),"second-fake-user"], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),"Extra",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"Chris"], null),new cljs.core.Keyword(null,"uid","uid",-1447769400),"CHRIS"], null)], null);
schpaa.components.sidebar_mock.brygge_panel_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"A"], null),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"B"], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"C"], null)], null);

//# sourceMappingURL=schpaa.components.sidebar_mock.js.map
