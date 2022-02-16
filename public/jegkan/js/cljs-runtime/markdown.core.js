goog.provide('markdown.core');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__74769){
var map__74770 = p__74769;
var map__74770__$1 = cljs.core.__destructure_map(map__74770);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74770__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74770__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74770__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__74773 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__74774 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__74774);

try{var vec__74775 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__74778,transformer){
var vec__74780 = p__74778;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74780,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74780,(1),null);
var G__74784 = text;
var G__74785 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__74784,G__74785) : transformer.call(null,G__74784,G__74785));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4253__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74775,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74775,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__74773);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4870__auto__ = [];
var len__4864__auto___74839 = arguments.length;
var i__4865__auto___74840 = (0);
while(true){
if((i__4865__auto___74840 < len__4864__auto___74839)){
args__4870__auto__.push((arguments[i__4865__auto___74840]));

var G__74841 = (i__4865__auto___74840 + (1));
i__4865__auto___74840 = G__74841;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq74788){
var G__74789 = cljs.core.first(seq74788);
var seq74788__$1 = cljs.core.next(seq74788);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74789,seq74788__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__74792_74842 = cljs.core.seq(lines);
var chunk__74793_74843 = null;
var count__74794_74844 = (0);
var i__74795_74845 = (0);
while(true){
if((i__74795_74845 < count__74794_74844)){
var line_74846 = chunk__74793_74843.cljs$core$IIndexed$_nth$arity$2(null,i__74795_74845);
markdown.links.parse_reference_link(line_74846,references);


var G__74847 = seq__74792_74842;
var G__74848 = chunk__74793_74843;
var G__74849 = count__74794_74844;
var G__74850 = (i__74795_74845 + (1));
seq__74792_74842 = G__74847;
chunk__74793_74843 = G__74848;
count__74794_74844 = G__74849;
i__74795_74845 = G__74850;
continue;
} else {
var temp__5753__auto___74851 = cljs.core.seq(seq__74792_74842);
if(temp__5753__auto___74851){
var seq__74792_74852__$1 = temp__5753__auto___74851;
if(cljs.core.chunked_seq_QMARK_(seq__74792_74852__$1)){
var c__4679__auto___74853 = cljs.core.chunk_first(seq__74792_74852__$1);
var G__74854 = cljs.core.chunk_rest(seq__74792_74852__$1);
var G__74855 = c__4679__auto___74853;
var G__74856 = cljs.core.count(c__4679__auto___74853);
var G__74857 = (0);
seq__74792_74842 = G__74854;
chunk__74793_74843 = G__74855;
count__74794_74844 = G__74856;
i__74795_74845 = G__74857;
continue;
} else {
var line_74858 = cljs.core.first(seq__74792_74852__$1);
markdown.links.parse_reference_link(line_74858,references);


var G__74859 = cljs.core.next(seq__74792_74852__$1);
var G__74860 = null;
var G__74861 = (0);
var G__74862 = (0);
seq__74792_74842 = G__74859;
chunk__74793_74843 = G__74860;
count__74794_74844 = G__74861;
i__74795_74845 = G__74862;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__74800_74863 = cljs.core.seq(lines);
var chunk__74801_74864 = null;
var count__74802_74865 = (0);
var i__74803_74866 = (0);
while(true){
if((i__74803_74866 < count__74802_74865)){
var line_74867 = chunk__74801_74864.cljs$core$IIndexed$_nth$arity$2(null,i__74803_74866);
markdown.links.parse_footnote_link(line_74867,footnotes);


var G__74868 = seq__74800_74863;
var G__74869 = chunk__74801_74864;
var G__74870 = count__74802_74865;
var G__74871 = (i__74803_74866 + (1));
seq__74800_74863 = G__74868;
chunk__74801_74864 = G__74869;
count__74802_74865 = G__74870;
i__74803_74866 = G__74871;
continue;
} else {
var temp__5753__auto___74872 = cljs.core.seq(seq__74800_74863);
if(temp__5753__auto___74872){
var seq__74800_74873__$1 = temp__5753__auto___74872;
if(cljs.core.chunked_seq_QMARK_(seq__74800_74873__$1)){
var c__4679__auto___74874 = cljs.core.chunk_first(seq__74800_74873__$1);
var G__74875 = cljs.core.chunk_rest(seq__74800_74873__$1);
var G__74876 = c__4679__auto___74874;
var G__74877 = cljs.core.count(c__4679__auto___74874);
var G__74878 = (0);
seq__74800_74863 = G__74875;
chunk__74801_74864 = G__74876;
count__74802_74865 = G__74877;
i__74803_74866 = G__74878;
continue;
} else {
var line_74879 = cljs.core.first(seq__74800_74873__$1);
markdown.links.parse_footnote_link(line_74879,footnotes);


var G__74880 = cljs.core.next(seq__74800_74873__$1);
var G__74881 = null;
var G__74882 = (0);
var G__74883 = (0);
seq__74800_74863 = G__74880;
chunk__74801_74864 = G__74881;
count__74802_74865 = G__74882;
i__74803_74866 = G__74883;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__74807 = cljs.core.split_with((function (p1__74806_SHARP_){
return cljs.core.not_empty(p1__74806_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74807,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74807,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__74810 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__74811 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__74812 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__74813 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__74812);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__74813);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__74814 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74814,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74814,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__74820_74884 = lines__$1;
var vec__74821_74885 = G__74820_74884;
var seq__74822_74886 = cljs.core.seq(vec__74821_74885);
var first__74823_74887 = cljs.core.first(seq__74822_74886);
var seq__74822_74888__$1 = cljs.core.next(seq__74822_74886);
var line_74889 = first__74823_74887;
var more_74890 = seq__74822_74888__$1;
var state_74891 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__74820_74892__$1 = G__74820_74884;
var state_74893__$1 = state_74891;
while(true){
var vec__74830_74894 = G__74820_74892__$1;
var seq__74831_74895 = cljs.core.seq(vec__74830_74894);
var first__74832_74896 = cljs.core.first(seq__74831_74895);
var seq__74831_74897__$1 = cljs.core.next(seq__74831_74895);
var line_74898__$1 = first__74832_74896;
var more_74899__$1 = seq__74831_74897__$1;
var state_74900__$2 = state_74893__$1;
var line_74901__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_74900__$2))?"":line_74898__$1);
var state_74902__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_74900__$2))?transformer(html,new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_74900__$2),new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_74900__$2),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_74900__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true)):state_74900__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_74899__$1))){
var G__74903 = more_74899__$1;
var G__74904 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(transformer(html,line_74901__$2,cljs.core.first(more_74899__$1),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_74902__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749))),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_74901__$2.trim()));
G__74820_74892__$1 = G__74903;
state_74893__$1 = G__74904;
continue;
} else {
transformer(html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_74902__$3))),line_74901__$2,"",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_74902__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__74811);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__74810);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4870__auto__ = [];
var len__4864__auto___74905 = arguments.length;
var i__4865__auto___74906 = (0);
while(true){
if((i__4865__auto___74906 < len__4864__auto___74905)){
args__4870__auto__.push((arguments[i__4865__auto___74906]));

var G__74907 = (i__4865__auto___74906 + (1));
i__4865__auto___74906 = G__74907;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq74833){
var G__74834 = cljs.core.first(seq74833);
var seq74833__$1 = cljs.core.next(seq74833);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74834,seq74833__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___74908 = arguments.length;
var i__4865__auto___74909 = (0);
while(true){
if((i__4865__auto___74909 < len__4864__auto___74908)){
args__4870__auto__.push((arguments[i__4865__auto___74909]));

var G__74910 = (i__4865__auto___74909 + (1));
i__4865__auto___74909 = G__74910;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq74835){
var G__74836 = cljs.core.first(seq74835);
var seq74835__$1 = cljs.core.next(seq74835);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__74836,seq74835__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4870__auto__ = [];
var len__4864__auto___74911 = arguments.length;
var i__4865__auto___74912 = (0);
while(true){
if((i__4865__auto___74912 < len__4864__auto___74911)){
args__4870__auto__.push((arguments[i__4865__auto___74912]));

var G__74913 = (i__4865__auto___74912 + (1));
i__4865__auto___74912 = G__74913;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq74837){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74837));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4870__auto__ = [];
var len__4864__auto___74914 = arguments.length;
var i__4865__auto___74915 = (0);
while(true){
if((i__4865__auto___74915 < len__4864__auto___74914)){
args__4870__auto__.push((arguments[i__4865__auto___74915]));

var G__74917 = (i__4865__auto___74915 + (1));
i__4865__auto___74915 = G__74917;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq74838){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq74838));
}));


//# sourceMappingURL=markdown.core.js.map
