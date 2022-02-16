goog.provide('breaking_point.core');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__57028){
var vec__57029 = p__57028;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57029,(0),null);
var map__57032 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57029,(1),null);
var map__57032__$1 = cljs.core.__destructure_map(map__57032);
var opts = map__57032__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57032__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57032__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
re_frame.core.reg_cofx(new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814),(function (coeffect){
var screen_width = (function (){var or__4253__auto__ = (function (){var G__57033 = window;
if((G__57033 == null)){
return null;
} else {
return G__57033.innerWidth;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var G__57034 = document;
var G__57034__$1 = (((G__57034 == null))?null:G__57034.documentElement);
if((G__57034__$1 == null)){
return null;
} else {
return G__57034__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var G__57035 = document;
var G__57035__$1 = (((G__57035 == null))?null:G__57035.body);
if((G__57035__$1 == null)){
return null;
} else {
return G__57035__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__4253__auto__ = (function (){var G__57037 = window;
if((G__57037 == null)){
return null;
} else {
return G__57037.innerHeight;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var or__4253__auto____$1 = (function (){var G__57038 = document;
var G__57038__$1 = (((G__57038 == null))?null:G__57038.documentElement);
if((G__57038__$1 == null)){
return null;
} else {
return G__57038__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__4253__auto____$1)){
return or__4253__auto____$1;
} else {
var G__57039 = document;
var G__57039__$1 = (((G__57039 == null))?null:G__57039.body);
if((G__57039__$1 == null)){
return null;
} else {
return G__57039__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height], 0));
}));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__57040,_){
var map__57041 = p__57040;
var map__57041__$1 = cljs.core.__destructure_map(map__57041);
var db__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57041__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57041__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57041__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814))], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__57042){
var vec__57043 = p__57042;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57043,(0),null);
var debounce_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57043,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("breaking-point.core","calcaulate-width-after-resize","breaking-point.core/calcaulate-width-after-resize",1288445004),new cljs.core.Keyword(null,"timeout","timeout",-318625318),debounce_ms,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null)], null)], null)], null);
}));
breaking_point.core.get_screen_width = (function breaking_point$core$get_screen_width(db__$1,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null));
});
breaking_point.core.get_screen_height = (function breaking_point$core$get_screen_height(db__$1,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null));
});
breaking_point.core.__GT_get_screen = (function breaking_point$core$__GT_get_screen(breakpoints){
return (function breaking_point$core$__GT_get_screen_$_get_screen(screen_width,_){
if(cljs.core.truth_(screen_width)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev_breakpoint,p__57046){
var vec__57047 = p__57046;
var screen_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57047,(0),null);
var breakpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57047,(1),null);
if((((breakpoint == null)) || ((((screen_width < breakpoint)) && ((screen_width >= prev_breakpoint)))))){
return cljs.core.reduced(screen_key);
} else {
return breakpoint;
}
}),(0),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),breakpoints));
} else {
return null;
}
});
});
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__57050,_){
var vec__57051 = p__57050;
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57051,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57051,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([breaking_point.core.get_screen_width], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([breaking_point.core.get_screen_height], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null),breaking_point.core.__GT_get_screen(breakpoints)], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null),new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null),breaking_point.core.get_orientation], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null),(function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
})], 0));

re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null),(function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
})], 0));

var screen_keys = (function (){var G__57057 = breakpoints;
var G__57057__$1 = (((G__57057 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__57057));
var G__57057__$2 = (((G__57057__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__57058){
var vec__57059 = p__57058;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57059,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57059,(1),null);
return cljs.core.even_QMARK_(i);
}),G__57057__$1));
if((G__57057__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__57057__$2);
}
})();
var seq__57062 = cljs.core.seq(screen_keys);
var chunk__57063 = null;
var count__57064 = (0);
var i__57065 = (0);
while(true){
if((i__57065 < count__57064)){
var screen_key = chunk__57063.cljs$core$IIndexed$_nth$arity$2(null,i__57065);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join('')),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null),((function (seq__57062,chunk__57063,count__57064,i__57065,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__57062,chunk__57063,count__57064,i__57065,screen_key,screen_keys))
], 0));


var G__57087 = seq__57062;
var G__57088 = chunk__57063;
var G__57089 = count__57064;
var G__57090 = (i__57065 + (1));
seq__57062 = G__57087;
chunk__57063 = G__57088;
count__57064 = G__57089;
i__57065 = G__57090;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__57062);
if(temp__5753__auto__){
var seq__57062__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__57062__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__57062__$1);
var G__57091 = cljs.core.chunk_rest(seq__57062__$1);
var G__57092 = c__4679__auto__;
var G__57093 = cljs.core.count(c__4679__auto__);
var G__57094 = (0);
seq__57062 = G__57091;
chunk__57063 = G__57092;
count__57064 = G__57093;
i__57065 = G__57094;
continue;
} else {
var screen_key = cljs.core.first(seq__57062__$1);
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join('')),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"<-","<-",760412998),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null),((function (seq__57062,chunk__57063,count__57064,i__57065,screen_key,seq__57062__$1,temp__5753__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__57062,chunk__57063,count__57064,i__57065,screen_key,seq__57062__$1,temp__5753__auto__,screen_keys))
], 0));


var G__57099 = cljs.core.next(seq__57062__$1);
var G__57100 = null;
var G__57101 = (0);
var G__57102 = (0);
seq__57062 = G__57099;
chunk__57063 = G__57100;
count__57064 = G__57101;
i__57065 = G__57102;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__57075){
var map__57076 = p__57075;
var map__57076__$1 = cljs.core.__destructure_map(map__57076);
var opts = map__57076__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57076__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57076__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs(breakpoints);

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null));

return window.addEventListener("resize",(function (){
if(cljs.core.truth_(debounce_ms)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null));
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null));
}
}),true);
});
re_frame.core.reg_fx(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),breaking_point.core.set_breakpoints);

//# sourceMappingURL=breaking_point.core.js.map
