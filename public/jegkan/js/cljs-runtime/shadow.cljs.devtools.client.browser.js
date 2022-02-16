goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___54797 = arguments.length;
var i__4865__auto___54798 = (0);
while(true){
if((i__4865__auto___54798 < len__4864__auto___54797)){
args__4870__auto__.push((arguments[i__4865__auto___54798]));

var G__54799 = (i__4865__auto___54798 + (1));
i__4865__auto___54798 = G__54799;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq53761){
var G__53762 = cljs.core.first(seq53761);
var seq53761__$1 = cljs.core.next(seq53761);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53762,seq53761__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__53772 = cljs.core.seq(sources);
var chunk__53773 = null;
var count__53774 = (0);
var i__53775 = (0);
while(true){
if((i__53775 < count__53774)){
var map__53792 = chunk__53773.cljs$core$IIndexed$_nth$arity$2(null,i__53775);
var map__53792__$1 = cljs.core.__destructure_map(map__53792);
var src = map__53792__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53792__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53792__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53792__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53792__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53793){var e_54802 = e53793;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54802);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54802.message)].join('')));
}

var G__54803 = seq__53772;
var G__54804 = chunk__53773;
var G__54805 = count__53774;
var G__54806 = (i__53775 + (1));
seq__53772 = G__54803;
chunk__53773 = G__54804;
count__53774 = G__54805;
i__53775 = G__54806;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53772);
if(temp__5753__auto__){
var seq__53772__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53772__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53772__$1);
var G__54807 = cljs.core.chunk_rest(seq__53772__$1);
var G__54808 = c__4679__auto__;
var G__54809 = cljs.core.count(c__4679__auto__);
var G__54810 = (0);
seq__53772 = G__54807;
chunk__53773 = G__54808;
count__53774 = G__54809;
i__53775 = G__54810;
continue;
} else {
var map__53796 = cljs.core.first(seq__53772__$1);
var map__53796__$1 = cljs.core.__destructure_map(map__53796);
var src = map__53796__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53796__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53796__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53796__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53796__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e53797){var e_54811 = e53797;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_54811);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_54811.message)].join('')));
}

var G__54812 = cljs.core.next(seq__53772__$1);
var G__54813 = null;
var G__54814 = (0);
var G__54815 = (0);
seq__53772 = G__54812;
chunk__53773 = G__54813;
count__53774 = G__54814;
i__53775 = G__54815;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__53800 = cljs.core.seq(js_requires);
var chunk__53801 = null;
var count__53802 = (0);
var i__53803 = (0);
while(true){
if((i__53803 < count__53802)){
var js_ns = chunk__53801.cljs$core$IIndexed$_nth$arity$2(null,i__53803);
var require_str_54821 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54821);


var G__54822 = seq__53800;
var G__54823 = chunk__53801;
var G__54824 = count__53802;
var G__54825 = (i__53803 + (1));
seq__53800 = G__54822;
chunk__53801 = G__54823;
count__53802 = G__54824;
i__53803 = G__54825;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53800);
if(temp__5753__auto__){
var seq__53800__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53800__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53800__$1);
var G__54827 = cljs.core.chunk_rest(seq__53800__$1);
var G__54828 = c__4679__auto__;
var G__54829 = cljs.core.count(c__4679__auto__);
var G__54830 = (0);
seq__53800 = G__54827;
chunk__53801 = G__54828;
count__53802 = G__54829;
i__53803 = G__54830;
continue;
} else {
var js_ns = cljs.core.first(seq__53800__$1);
var require_str_54831 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_54831);


var G__54832 = cljs.core.next(seq__53800__$1);
var G__54833 = null;
var G__54834 = (0);
var G__54835 = (0);
seq__53800 = G__54832;
chunk__53801 = G__54833;
count__53802 = G__54834;
i__53803 = G__54835;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__53808){
var map__53810 = p__53808;
var map__53810__$1 = cljs.core.__destructure_map(map__53810);
var msg = map__53810__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53810__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53810__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4652__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53811(s__53812){
return (new cljs.core.LazySeq(null,(function (){
var s__53812__$1 = s__53812;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__53812__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__53820 = cljs.core.first(xs__6308__auto__);
var map__53820__$1 = cljs.core.__destructure_map(map__53820);
var src = map__53820__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53820__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53820__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4648__auto__ = ((function (s__53812__$1,map__53820,map__53820__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53810,map__53810__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53811_$_iter__53813(s__53814){
return (new cljs.core.LazySeq(null,((function (s__53812__$1,map__53820,map__53820__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53810,map__53810__$1,msg,info,reload_info){
return (function (){
var s__53814__$1 = s__53814;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__53814__$1);
if(temp__5753__auto____$1){
var s__53814__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53814__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__53814__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__53816 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__53815 = (0);
while(true){
if((i__53815 < size__4651__auto__)){
var warning = cljs.core._nth(c__4650__auto__,i__53815);
cljs.core.chunk_append(b__53816,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__54837 = (i__53815 + (1));
i__53815 = G__54837;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53816),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53811_$_iter__53813(cljs.core.chunk_rest(s__53814__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53816),null);
}
} else {
var warning = cljs.core.first(s__53814__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53811_$_iter__53813(cljs.core.rest(s__53814__$2)));
}
} else {
return null;
}
break;
}
});})(s__53812__$1,map__53820,map__53820__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53810,map__53810__$1,msg,info,reload_info))
,null,null));
});})(s__53812__$1,map__53820,map__53820__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__53810,map__53810__$1,msg,info,reload_info))
;
var fs__4649__auto__ = cljs.core.seq(iterys__4648__auto__(warnings));
if(fs__4649__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4649__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__53811(cljs.core.rest(s__53812__$1)));
} else {
var G__54839 = cljs.core.rest(s__53812__$1);
s__53812__$1 = G__54839;
continue;
}
} else {
var G__54840 = cljs.core.rest(s__53812__$1);
s__53812__$1 = G__54840;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__53824_54842 = cljs.core.seq(warnings);
var chunk__53825_54843 = null;
var count__53826_54844 = (0);
var i__53827_54845 = (0);
while(true){
if((i__53827_54845 < count__53826_54844)){
var map__53830_54846 = chunk__53825_54843.cljs$core$IIndexed$_nth$arity$2(null,i__53827_54845);
var map__53830_54847__$1 = cljs.core.__destructure_map(map__53830_54846);
var w_54848 = map__53830_54847__$1;
var msg_54849__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53830_54847__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53830_54847__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54851 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53830_54847__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53830_54847__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54852)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54850),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54851),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54849__$1)].join(''));


var G__54854 = seq__53824_54842;
var G__54855 = chunk__53825_54843;
var G__54856 = count__53826_54844;
var G__54857 = (i__53827_54845 + (1));
seq__53824_54842 = G__54854;
chunk__53825_54843 = G__54855;
count__53826_54844 = G__54856;
i__53827_54845 = G__54857;
continue;
} else {
var temp__5753__auto___54859 = cljs.core.seq(seq__53824_54842);
if(temp__5753__auto___54859){
var seq__53824_54860__$1 = temp__5753__auto___54859;
if(cljs.core.chunked_seq_QMARK_(seq__53824_54860__$1)){
var c__4679__auto___54861 = cljs.core.chunk_first(seq__53824_54860__$1);
var G__54862 = cljs.core.chunk_rest(seq__53824_54860__$1);
var G__54863 = c__4679__auto___54861;
var G__54864 = cljs.core.count(c__4679__auto___54861);
var G__54865 = (0);
seq__53824_54842 = G__54862;
chunk__53825_54843 = G__54863;
count__53826_54844 = G__54864;
i__53827_54845 = G__54865;
continue;
} else {
var map__53831_54868 = cljs.core.first(seq__53824_54860__$1);
var map__53831_54869__$1 = cljs.core.__destructure_map(map__53831_54868);
var w_54870 = map__53831_54869__$1;
var msg_54871__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53831_54869__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_54872 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53831_54869__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_54873 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53831_54869__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_54874 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53831_54869__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_54874)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_54872),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_54873),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_54871__$1)].join(''));


var G__54876 = cljs.core.next(seq__53824_54860__$1);
var G__54877 = null;
var G__54878 = (0);
var G__54879 = (0);
seq__53824_54842 = G__54876;
chunk__53825_54843 = G__54877;
count__53826_54844 = G__54878;
i__53827_54845 = G__54879;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__53805_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__53805_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4251__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4251__auto__){
var and__4251__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4251__auto____$1){
return new$;
} else {
return and__4251__auto____$1;
}
} else {
return and__4251__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__53832){
var map__53833 = p__53832;
var map__53833__$1 = cljs.core.__destructure_map(map__53833);
var msg = map__53833__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53833__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53833__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__53834 = cljs.core.seq(updates);
var chunk__53836 = null;
var count__53837 = (0);
var i__53838 = (0);
while(true){
if((i__53838 < count__53837)){
var path = chunk__53836.cljs$core$IIndexed$_nth$arity$2(null,i__53838);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54346_54886 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54351_54887 = null;
var count__54352_54888 = (0);
var i__54353_54889 = (0);
while(true){
if((i__54353_54889 < count__54352_54888)){
var node_54890 = chunk__54351_54887.cljs$core$IIndexed$_nth$arity$2(null,i__54353_54889);
if(cljs.core.not(node_54890.shadow$old)){
var path_match_54891 = shadow.cljs.devtools.client.browser.match_paths(node_54890.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54891)){
var new_link_54892 = (function (){var G__54443 = node_54890.cloneNode(true);
G__54443.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54891),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54443;
})();
(node_54890.shadow$old = true);

(new_link_54892.onload = ((function (seq__54346_54886,chunk__54351_54887,count__54352_54888,i__54353_54889,seq__53834,chunk__53836,count__53837,i__53838,new_link_54892,path_match_54891,node_54890,path,map__53833,map__53833__$1,msg,updates,reload_info){
return (function (e){
var seq__54447_54894 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54449_54895 = null;
var count__54450_54896 = (0);
var i__54451_54897 = (0);
while(true){
if((i__54451_54897 < count__54450_54896)){
var map__54465_54898 = chunk__54449_54895.cljs$core$IIndexed$_nth$arity$2(null,i__54451_54897);
var map__54465_54899__$1 = cljs.core.__destructure_map(map__54465_54898);
var task_54900 = map__54465_54899__$1;
var fn_str_54901 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54465_54899__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54902 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54465_54899__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54903 = goog.getObjectByName(fn_str_54901,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54902)].join(''));

(fn_obj_54903.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54903.cljs$core$IFn$_invoke$arity$2(path,new_link_54892) : fn_obj_54903.call(null,path,new_link_54892));


var G__54906 = seq__54447_54894;
var G__54907 = chunk__54449_54895;
var G__54908 = count__54450_54896;
var G__54909 = (i__54451_54897 + (1));
seq__54447_54894 = G__54906;
chunk__54449_54895 = G__54907;
count__54450_54896 = G__54908;
i__54451_54897 = G__54909;
continue;
} else {
var temp__5753__auto___54911 = cljs.core.seq(seq__54447_54894);
if(temp__5753__auto___54911){
var seq__54447_54912__$1 = temp__5753__auto___54911;
if(cljs.core.chunked_seq_QMARK_(seq__54447_54912__$1)){
var c__4679__auto___54913 = cljs.core.chunk_first(seq__54447_54912__$1);
var G__54914 = cljs.core.chunk_rest(seq__54447_54912__$1);
var G__54915 = c__4679__auto___54913;
var G__54916 = cljs.core.count(c__4679__auto___54913);
var G__54917 = (0);
seq__54447_54894 = G__54914;
chunk__54449_54895 = G__54915;
count__54450_54896 = G__54916;
i__54451_54897 = G__54917;
continue;
} else {
var map__54468_54918 = cljs.core.first(seq__54447_54912__$1);
var map__54468_54919__$1 = cljs.core.__destructure_map(map__54468_54918);
var task_54920 = map__54468_54919__$1;
var fn_str_54921 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54468_54919__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54922 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54468_54919__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54923 = goog.getObjectByName(fn_str_54921,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54922)].join(''));

(fn_obj_54923.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54923.cljs$core$IFn$_invoke$arity$2(path,new_link_54892) : fn_obj_54923.call(null,path,new_link_54892));


var G__54925 = cljs.core.next(seq__54447_54912__$1);
var G__54926 = null;
var G__54927 = (0);
var G__54928 = (0);
seq__54447_54894 = G__54925;
chunk__54449_54895 = G__54926;
count__54450_54896 = G__54927;
i__54451_54897 = G__54928;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54890);
});})(seq__54346_54886,chunk__54351_54887,count__54352_54888,i__54353_54889,seq__53834,chunk__53836,count__53837,i__53838,new_link_54892,path_match_54891,node_54890,path,map__53833,map__53833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54891], 0));

goog.dom.insertSiblingAfter(new_link_54892,node_54890);


var G__54929 = seq__54346_54886;
var G__54930 = chunk__54351_54887;
var G__54931 = count__54352_54888;
var G__54932 = (i__54353_54889 + (1));
seq__54346_54886 = G__54929;
chunk__54351_54887 = G__54930;
count__54352_54888 = G__54931;
i__54353_54889 = G__54932;
continue;
} else {
var G__54933 = seq__54346_54886;
var G__54934 = chunk__54351_54887;
var G__54935 = count__54352_54888;
var G__54936 = (i__54353_54889 + (1));
seq__54346_54886 = G__54933;
chunk__54351_54887 = G__54934;
count__54352_54888 = G__54935;
i__54353_54889 = G__54936;
continue;
}
} else {
var G__54937 = seq__54346_54886;
var G__54938 = chunk__54351_54887;
var G__54939 = count__54352_54888;
var G__54940 = (i__54353_54889 + (1));
seq__54346_54886 = G__54937;
chunk__54351_54887 = G__54938;
count__54352_54888 = G__54939;
i__54353_54889 = G__54940;
continue;
}
} else {
var temp__5753__auto___54941 = cljs.core.seq(seq__54346_54886);
if(temp__5753__auto___54941){
var seq__54346_54942__$1 = temp__5753__auto___54941;
if(cljs.core.chunked_seq_QMARK_(seq__54346_54942__$1)){
var c__4679__auto___54943 = cljs.core.chunk_first(seq__54346_54942__$1);
var G__54944 = cljs.core.chunk_rest(seq__54346_54942__$1);
var G__54945 = c__4679__auto___54943;
var G__54946 = cljs.core.count(c__4679__auto___54943);
var G__54947 = (0);
seq__54346_54886 = G__54944;
chunk__54351_54887 = G__54945;
count__54352_54888 = G__54946;
i__54353_54889 = G__54947;
continue;
} else {
var node_54948 = cljs.core.first(seq__54346_54942__$1);
if(cljs.core.not(node_54948.shadow$old)){
var path_match_54954 = shadow.cljs.devtools.client.browser.match_paths(node_54948.getAttribute("href"),path);
if(cljs.core.truth_(path_match_54954)){
var new_link_54955 = (function (){var G__54480 = node_54948.cloneNode(true);
G__54480.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_54954),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54480;
})();
(node_54948.shadow$old = true);

(new_link_54955.onload = ((function (seq__54346_54886,chunk__54351_54887,count__54352_54888,i__54353_54889,seq__53834,chunk__53836,count__53837,i__53838,new_link_54955,path_match_54954,node_54948,seq__54346_54942__$1,temp__5753__auto___54941,path,map__53833,map__53833__$1,msg,updates,reload_info){
return (function (e){
var seq__54481_54958 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54483_54959 = null;
var count__54484_54960 = (0);
var i__54485_54961 = (0);
while(true){
if((i__54485_54961 < count__54484_54960)){
var map__54497_54964 = chunk__54483_54959.cljs$core$IIndexed$_nth$arity$2(null,i__54485_54961);
var map__54497_54965__$1 = cljs.core.__destructure_map(map__54497_54964);
var task_54966 = map__54497_54965__$1;
var fn_str_54967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54497_54965__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54497_54965__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54969 = goog.getObjectByName(fn_str_54967,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54968)].join(''));

(fn_obj_54969.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54969.cljs$core$IFn$_invoke$arity$2(path,new_link_54955) : fn_obj_54969.call(null,path,new_link_54955));


var G__54971 = seq__54481_54958;
var G__54972 = chunk__54483_54959;
var G__54973 = count__54484_54960;
var G__54974 = (i__54485_54961 + (1));
seq__54481_54958 = G__54971;
chunk__54483_54959 = G__54972;
count__54484_54960 = G__54973;
i__54485_54961 = G__54974;
continue;
} else {
var temp__5753__auto___54977__$1 = cljs.core.seq(seq__54481_54958);
if(temp__5753__auto___54977__$1){
var seq__54481_54978__$1 = temp__5753__auto___54977__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54481_54978__$1)){
var c__4679__auto___54979 = cljs.core.chunk_first(seq__54481_54978__$1);
var G__54980 = cljs.core.chunk_rest(seq__54481_54978__$1);
var G__54981 = c__4679__auto___54979;
var G__54982 = cljs.core.count(c__4679__auto___54979);
var G__54983 = (0);
seq__54481_54958 = G__54980;
chunk__54483_54959 = G__54981;
count__54484_54960 = G__54982;
i__54485_54961 = G__54983;
continue;
} else {
var map__54505_54985 = cljs.core.first(seq__54481_54978__$1);
var map__54505_54986__$1 = cljs.core.__destructure_map(map__54505_54985);
var task_54987 = map__54505_54986__$1;
var fn_str_54988 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54505_54986__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_54989 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54505_54986__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_54990 = goog.getObjectByName(fn_str_54988,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_54989)].join(''));

(fn_obj_54990.cljs$core$IFn$_invoke$arity$2 ? fn_obj_54990.cljs$core$IFn$_invoke$arity$2(path,new_link_54955) : fn_obj_54990.call(null,path,new_link_54955));


var G__54991 = cljs.core.next(seq__54481_54978__$1);
var G__54992 = null;
var G__54993 = (0);
var G__54994 = (0);
seq__54481_54958 = G__54991;
chunk__54483_54959 = G__54992;
count__54484_54960 = G__54993;
i__54485_54961 = G__54994;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_54948);
});})(seq__54346_54886,chunk__54351_54887,count__54352_54888,i__54353_54889,seq__53834,chunk__53836,count__53837,i__53838,new_link_54955,path_match_54954,node_54948,seq__54346_54942__$1,temp__5753__auto___54941,path,map__53833,map__53833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_54954], 0));

goog.dom.insertSiblingAfter(new_link_54955,node_54948);


var G__54996 = cljs.core.next(seq__54346_54942__$1);
var G__54997 = null;
var G__54998 = (0);
var G__54999 = (0);
seq__54346_54886 = G__54996;
chunk__54351_54887 = G__54997;
count__54352_54888 = G__54998;
i__54353_54889 = G__54999;
continue;
} else {
var G__55001 = cljs.core.next(seq__54346_54942__$1);
var G__55002 = null;
var G__55003 = (0);
var G__55004 = (0);
seq__54346_54886 = G__55001;
chunk__54351_54887 = G__55002;
count__54352_54888 = G__55003;
i__54353_54889 = G__55004;
continue;
}
} else {
var G__55005 = cljs.core.next(seq__54346_54942__$1);
var G__55006 = null;
var G__55007 = (0);
var G__55008 = (0);
seq__54346_54886 = G__55005;
chunk__54351_54887 = G__55006;
count__54352_54888 = G__55007;
i__54353_54889 = G__55008;
continue;
}
}
} else {
}
}
break;
}


var G__55009 = seq__53834;
var G__55010 = chunk__53836;
var G__55011 = count__53837;
var G__55012 = (i__53838 + (1));
seq__53834 = G__55009;
chunk__53836 = G__55010;
count__53837 = G__55011;
i__53838 = G__55012;
continue;
} else {
var G__55013 = seq__53834;
var G__55014 = chunk__53836;
var G__55015 = count__53837;
var G__55016 = (i__53838 + (1));
seq__53834 = G__55013;
chunk__53836 = G__55014;
count__53837 = G__55015;
i__53838 = G__55016;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__53834);
if(temp__5753__auto__){
var seq__53834__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53834__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__53834__$1);
var G__55017 = cljs.core.chunk_rest(seq__53834__$1);
var G__55018 = c__4679__auto__;
var G__55019 = cljs.core.count(c__4679__auto__);
var G__55020 = (0);
seq__53834 = G__55017;
chunk__53836 = G__55018;
count__53837 = G__55019;
i__53838 = G__55020;
continue;
} else {
var path = cljs.core.first(seq__53834__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__54511_55021 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__54515_55022 = null;
var count__54516_55023 = (0);
var i__54517_55024 = (0);
while(true){
if((i__54517_55024 < count__54516_55023)){
var node_55028 = chunk__54515_55022.cljs$core$IIndexed$_nth$arity$2(null,i__54517_55024);
if(cljs.core.not(node_55028.shadow$old)){
var path_match_55029 = shadow.cljs.devtools.client.browser.match_paths(node_55028.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55029)){
var new_link_55031 = (function (){var G__54580 = node_55028.cloneNode(true);
G__54580.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55029),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54580;
})();
(node_55028.shadow$old = true);

(new_link_55031.onload = ((function (seq__54511_55021,chunk__54515_55022,count__54516_55023,i__54517_55024,seq__53834,chunk__53836,count__53837,i__53838,new_link_55031,path_match_55029,node_55028,path,seq__53834__$1,temp__5753__auto__,map__53833,map__53833__$1,msg,updates,reload_info){
return (function (e){
var seq__54583_55035 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54585_55036 = null;
var count__54586_55037 = (0);
var i__54587_55038 = (0);
while(true){
if((i__54587_55038 < count__54586_55037)){
var map__54597_55040 = chunk__54585_55036.cljs$core$IIndexed$_nth$arity$2(null,i__54587_55038);
var map__54597_55041__$1 = cljs.core.__destructure_map(map__54597_55040);
var task_55042 = map__54597_55041__$1;
var fn_str_55043 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54597_55041__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55044 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54597_55041__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55046 = goog.getObjectByName(fn_str_55043,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55044)].join(''));

(fn_obj_55046.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55046.cljs$core$IFn$_invoke$arity$2(path,new_link_55031) : fn_obj_55046.call(null,path,new_link_55031));


var G__55048 = seq__54583_55035;
var G__55049 = chunk__54585_55036;
var G__55050 = count__54586_55037;
var G__55051 = (i__54587_55038 + (1));
seq__54583_55035 = G__55048;
chunk__54585_55036 = G__55049;
count__54586_55037 = G__55050;
i__54587_55038 = G__55051;
continue;
} else {
var temp__5753__auto___55052__$1 = cljs.core.seq(seq__54583_55035);
if(temp__5753__auto___55052__$1){
var seq__54583_55053__$1 = temp__5753__auto___55052__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54583_55053__$1)){
var c__4679__auto___55055 = cljs.core.chunk_first(seq__54583_55053__$1);
var G__55056 = cljs.core.chunk_rest(seq__54583_55053__$1);
var G__55057 = c__4679__auto___55055;
var G__55058 = cljs.core.count(c__4679__auto___55055);
var G__55059 = (0);
seq__54583_55035 = G__55056;
chunk__54585_55036 = G__55057;
count__54586_55037 = G__55058;
i__54587_55038 = G__55059;
continue;
} else {
var map__54602_55062 = cljs.core.first(seq__54583_55053__$1);
var map__54602_55063__$1 = cljs.core.__destructure_map(map__54602_55062);
var task_55064 = map__54602_55063__$1;
var fn_str_55065 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54602_55063__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55066 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54602_55063__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55068 = goog.getObjectByName(fn_str_55065,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55066)].join(''));

(fn_obj_55068.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55068.cljs$core$IFn$_invoke$arity$2(path,new_link_55031) : fn_obj_55068.call(null,path,new_link_55031));


var G__55069 = cljs.core.next(seq__54583_55053__$1);
var G__55070 = null;
var G__55071 = (0);
var G__55072 = (0);
seq__54583_55035 = G__55069;
chunk__54585_55036 = G__55070;
count__54586_55037 = G__55071;
i__54587_55038 = G__55072;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55028);
});})(seq__54511_55021,chunk__54515_55022,count__54516_55023,i__54517_55024,seq__53834,chunk__53836,count__53837,i__53838,new_link_55031,path_match_55029,node_55028,path,seq__53834__$1,temp__5753__auto__,map__53833,map__53833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55029], 0));

goog.dom.insertSiblingAfter(new_link_55031,node_55028);


var G__55075 = seq__54511_55021;
var G__55076 = chunk__54515_55022;
var G__55077 = count__54516_55023;
var G__55078 = (i__54517_55024 + (1));
seq__54511_55021 = G__55075;
chunk__54515_55022 = G__55076;
count__54516_55023 = G__55077;
i__54517_55024 = G__55078;
continue;
} else {
var G__55079 = seq__54511_55021;
var G__55080 = chunk__54515_55022;
var G__55081 = count__54516_55023;
var G__55082 = (i__54517_55024 + (1));
seq__54511_55021 = G__55079;
chunk__54515_55022 = G__55080;
count__54516_55023 = G__55081;
i__54517_55024 = G__55082;
continue;
}
} else {
var G__55083 = seq__54511_55021;
var G__55084 = chunk__54515_55022;
var G__55085 = count__54516_55023;
var G__55086 = (i__54517_55024 + (1));
seq__54511_55021 = G__55083;
chunk__54515_55022 = G__55084;
count__54516_55023 = G__55085;
i__54517_55024 = G__55086;
continue;
}
} else {
var temp__5753__auto___55087__$1 = cljs.core.seq(seq__54511_55021);
if(temp__5753__auto___55087__$1){
var seq__54511_55088__$1 = temp__5753__auto___55087__$1;
if(cljs.core.chunked_seq_QMARK_(seq__54511_55088__$1)){
var c__4679__auto___55090 = cljs.core.chunk_first(seq__54511_55088__$1);
var G__55091 = cljs.core.chunk_rest(seq__54511_55088__$1);
var G__55092 = c__4679__auto___55090;
var G__55093 = cljs.core.count(c__4679__auto___55090);
var G__55094 = (0);
seq__54511_55021 = G__55091;
chunk__54515_55022 = G__55092;
count__54516_55023 = G__55093;
i__54517_55024 = G__55094;
continue;
} else {
var node_55097 = cljs.core.first(seq__54511_55088__$1);
if(cljs.core.not(node_55097.shadow$old)){
var path_match_55098 = shadow.cljs.devtools.client.browser.match_paths(node_55097.getAttribute("href"),path);
if(cljs.core.truth_(path_match_55098)){
var new_link_55100 = (function (){var G__54609 = node_55097.cloneNode(true);
G__54609.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_55098),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__54609;
})();
(node_55097.shadow$old = true);

(new_link_55100.onload = ((function (seq__54511_55021,chunk__54515_55022,count__54516_55023,i__54517_55024,seq__53834,chunk__53836,count__53837,i__53838,new_link_55100,path_match_55098,node_55097,seq__54511_55088__$1,temp__5753__auto___55087__$1,path,seq__53834__$1,temp__5753__auto__,map__53833,map__53833__$1,msg,updates,reload_info){
return (function (e){
var seq__54612_55102 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__54614_55103 = null;
var count__54615_55104 = (0);
var i__54616_55105 = (0);
while(true){
if((i__54616_55105 < count__54615_55104)){
var map__54642_55107 = chunk__54614_55103.cljs$core$IIndexed$_nth$arity$2(null,i__54616_55105);
var map__54642_55108__$1 = cljs.core.__destructure_map(map__54642_55107);
var task_55109 = map__54642_55108__$1;
var fn_str_55110 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54642_55108__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54642_55108__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55112 = goog.getObjectByName(fn_str_55110,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55111)].join(''));

(fn_obj_55112.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55112.cljs$core$IFn$_invoke$arity$2(path,new_link_55100) : fn_obj_55112.call(null,path,new_link_55100));


var G__55113 = seq__54612_55102;
var G__55114 = chunk__54614_55103;
var G__55115 = count__54615_55104;
var G__55116 = (i__54616_55105 + (1));
seq__54612_55102 = G__55113;
chunk__54614_55103 = G__55114;
count__54615_55104 = G__55115;
i__54616_55105 = G__55116;
continue;
} else {
var temp__5753__auto___55117__$2 = cljs.core.seq(seq__54612_55102);
if(temp__5753__auto___55117__$2){
var seq__54612_55118__$1 = temp__5753__auto___55117__$2;
if(cljs.core.chunked_seq_QMARK_(seq__54612_55118__$1)){
var c__4679__auto___55119 = cljs.core.chunk_first(seq__54612_55118__$1);
var G__55120 = cljs.core.chunk_rest(seq__54612_55118__$1);
var G__55121 = c__4679__auto___55119;
var G__55122 = cljs.core.count(c__4679__auto___55119);
var G__55123 = (0);
seq__54612_55102 = G__55120;
chunk__54614_55103 = G__55121;
count__54615_55104 = G__55122;
i__54616_55105 = G__55123;
continue;
} else {
var map__54649_55124 = cljs.core.first(seq__54612_55118__$1);
var map__54649_55125__$1 = cljs.core.__destructure_map(map__54649_55124);
var task_55126 = map__54649_55125__$1;
var fn_str_55127 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54649_55125__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_55128 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54649_55125__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_55130 = goog.getObjectByName(fn_str_55127,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_55128)].join(''));

(fn_obj_55130.cljs$core$IFn$_invoke$arity$2 ? fn_obj_55130.cljs$core$IFn$_invoke$arity$2(path,new_link_55100) : fn_obj_55130.call(null,path,new_link_55100));


var G__55131 = cljs.core.next(seq__54612_55118__$1);
var G__55132 = null;
var G__55133 = (0);
var G__55134 = (0);
seq__54612_55102 = G__55131;
chunk__54614_55103 = G__55132;
count__54615_55104 = G__55133;
i__54616_55105 = G__55134;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_55097);
});})(seq__54511_55021,chunk__54515_55022,count__54516_55023,i__54517_55024,seq__53834,chunk__53836,count__53837,i__53838,new_link_55100,path_match_55098,node_55097,seq__54511_55088__$1,temp__5753__auto___55087__$1,path,seq__53834__$1,temp__5753__auto__,map__53833,map__53833__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_55098], 0));

goog.dom.insertSiblingAfter(new_link_55100,node_55097);


var G__55135 = cljs.core.next(seq__54511_55088__$1);
var G__55136 = null;
var G__55137 = (0);
var G__55138 = (0);
seq__54511_55021 = G__55135;
chunk__54515_55022 = G__55136;
count__54516_55023 = G__55137;
i__54517_55024 = G__55138;
continue;
} else {
var G__55139 = cljs.core.next(seq__54511_55088__$1);
var G__55140 = null;
var G__55141 = (0);
var G__55142 = (0);
seq__54511_55021 = G__55139;
chunk__54515_55022 = G__55140;
count__54516_55023 = G__55141;
i__54517_55024 = G__55142;
continue;
}
} else {
var G__55143 = cljs.core.next(seq__54511_55088__$1);
var G__55144 = null;
var G__55145 = (0);
var G__55146 = (0);
seq__54511_55021 = G__55143;
chunk__54515_55022 = G__55144;
count__54516_55023 = G__55145;
i__54517_55024 = G__55146;
continue;
}
}
} else {
}
}
break;
}


var G__55147 = cljs.core.next(seq__53834__$1);
var G__55148 = null;
var G__55149 = (0);
var G__55150 = (0);
seq__53834 = G__55147;
chunk__53836 = G__55148;
count__53837 = G__55149;
i__53838 = G__55150;
continue;
} else {
var G__55151 = cljs.core.next(seq__53834__$1);
var G__55152 = null;
var G__55153 = (0);
var G__55154 = (0);
seq__53834 = G__55151;
chunk__53836 = G__55152;
count__53837 = G__55153;
i__53838 = G__55154;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__54667){
var map__54668 = p__54667;
var map__54668__$1 = cljs.core.__destructure_map(map__54668);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54668__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__54712){
var map__54714 = p__54712;
var map__54714__$1 = cljs.core.__destructure_map(map__54714);
var _ = map__54714__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54714__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__54724,done,error){
var map__54726 = p__54724;
var map__54726__$1 = cljs.core.__destructure_map(map__54726);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54726__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__54731,done,error){
var map__54732 = p__54731;
var map__54732__$1 = cljs.core.__destructure_map(map__54732);
var msg = map__54732__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54732__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54732__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54732__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__54741){
var map__54742 = p__54741;
var map__54742__$1 = cljs.core.__destructure_map(map__54742);
var src = map__54742__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54742__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4251__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4251__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4251__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__54747 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__54747) : done.call(null,G__54747));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__54750){
var map__54751 = p__54750;
var map__54751__$1 = cljs.core.__destructure_map(map__54751);
var msg__$1 = map__54751__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54751__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e54752){var ex = e54752;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__54755){
var map__54756 = p__54755;
var map__54756__$1 = cljs.core.__destructure_map(map__54756);
var env = map__54756__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54756__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__54788){
var map__54790 = p__54788;
var map__54790__$1 = cljs.core.__destructure_map(map__54790);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54790__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54790__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__54792){
var map__54793 = p__54792;
var map__54793__$1 = cljs.core.__destructure_map(map__54793);
var svc = map__54793__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54793__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
