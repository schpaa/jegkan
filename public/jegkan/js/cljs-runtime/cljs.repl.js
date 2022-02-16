goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50081){
var map__50082 = p__50081;
var map__50082__$1 = cljs.core.__destructure_map(map__50082);
var m = map__50082__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50082__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50082__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50114_50616 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50119_50617 = null;
var count__50120_50618 = (0);
var i__50121_50619 = (0);
while(true){
if((i__50121_50619 < count__50120_50618)){
var f_50620 = chunk__50119_50617.cljs$core$IIndexed$_nth$arity$2(null,i__50121_50619);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50620], 0));


var G__50621 = seq__50114_50616;
var G__50622 = chunk__50119_50617;
var G__50623 = count__50120_50618;
var G__50624 = (i__50121_50619 + (1));
seq__50114_50616 = G__50621;
chunk__50119_50617 = G__50622;
count__50120_50618 = G__50623;
i__50121_50619 = G__50624;
continue;
} else {
var temp__5753__auto___50625 = cljs.core.seq(seq__50114_50616);
if(temp__5753__auto___50625){
var seq__50114_50626__$1 = temp__5753__auto___50625;
if(cljs.core.chunked_seq_QMARK_(seq__50114_50626__$1)){
var c__4679__auto___50627 = cljs.core.chunk_first(seq__50114_50626__$1);
var G__50628 = cljs.core.chunk_rest(seq__50114_50626__$1);
var G__50629 = c__4679__auto___50627;
var G__50630 = cljs.core.count(c__4679__auto___50627);
var G__50631 = (0);
seq__50114_50616 = G__50628;
chunk__50119_50617 = G__50629;
count__50120_50618 = G__50630;
i__50121_50619 = G__50631;
continue;
} else {
var f_50634 = cljs.core.first(seq__50114_50626__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_50634], 0));


var G__50635 = cljs.core.next(seq__50114_50626__$1);
var G__50636 = null;
var G__50637 = (0);
var G__50638 = (0);
seq__50114_50616 = G__50635;
chunk__50119_50617 = G__50636;
count__50120_50618 = G__50637;
i__50121_50619 = G__50638;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_50643 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_50643], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_50643)))?cljs.core.second(arglists_50643):arglists_50643)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50186_50651 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__50187_50652 = null;
var count__50188_50653 = (0);
var i__50189_50654 = (0);
while(true){
if((i__50189_50654 < count__50188_50653)){
var vec__50210_50656 = chunk__50187_50652.cljs$core$IIndexed$_nth$arity$2(null,i__50189_50654);
var name_50657 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50210_50656,(0),null);
var map__50213_50658 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50210_50656,(1),null);
var map__50213_50659__$1 = cljs.core.__destructure_map(map__50213_50658);
var doc_50660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50213_50659__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50661 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50213_50659__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50657], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50661], 0));

if(cljs.core.truth_(doc_50660)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50660], 0));
} else {
}


var G__50668 = seq__50186_50651;
var G__50669 = chunk__50187_50652;
var G__50670 = count__50188_50653;
var G__50671 = (i__50189_50654 + (1));
seq__50186_50651 = G__50668;
chunk__50187_50652 = G__50669;
count__50188_50653 = G__50670;
i__50189_50654 = G__50671;
continue;
} else {
var temp__5753__auto___50672 = cljs.core.seq(seq__50186_50651);
if(temp__5753__auto___50672){
var seq__50186_50673__$1 = temp__5753__auto___50672;
if(cljs.core.chunked_seq_QMARK_(seq__50186_50673__$1)){
var c__4679__auto___50674 = cljs.core.chunk_first(seq__50186_50673__$1);
var G__50675 = cljs.core.chunk_rest(seq__50186_50673__$1);
var G__50676 = c__4679__auto___50674;
var G__50677 = cljs.core.count(c__4679__auto___50674);
var G__50678 = (0);
seq__50186_50651 = G__50675;
chunk__50187_50652 = G__50676;
count__50188_50653 = G__50677;
i__50189_50654 = G__50678;
continue;
} else {
var vec__50234_50679 = cljs.core.first(seq__50186_50673__$1);
var name_50680 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50234_50679,(0),null);
var map__50237_50681 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50234_50679,(1),null);
var map__50237_50682__$1 = cljs.core.__destructure_map(map__50237_50681);
var doc_50683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50237_50682__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_50684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50237_50682__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_50680], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_50684], 0));

if(cljs.core.truth_(doc_50683)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_50683], 0));
} else {
}


var G__50686 = cljs.core.next(seq__50186_50673__$1);
var G__50687 = null;
var G__50688 = (0);
var G__50689 = (0);
seq__50186_50651 = G__50686;
chunk__50187_50652 = G__50687;
count__50188_50653 = G__50688;
i__50189_50654 = G__50689;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__50265 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__50269 = null;
var count__50270 = (0);
var i__50271 = (0);
while(true){
if((i__50271 < count__50270)){
var role = chunk__50269.cljs$core$IIndexed$_nth$arity$2(null,i__50271);
var temp__5753__auto___50693__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50693__$1)){
var spec_50694 = temp__5753__auto___50693__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50694)], 0));
} else {
}


var G__50696 = seq__50265;
var G__50697 = chunk__50269;
var G__50698 = count__50270;
var G__50699 = (i__50271 + (1));
seq__50265 = G__50696;
chunk__50269 = G__50697;
count__50270 = G__50698;
i__50271 = G__50699;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__50265);
if(temp__5753__auto____$1){
var seq__50265__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__50265__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__50265__$1);
var G__50703 = cljs.core.chunk_rest(seq__50265__$1);
var G__50704 = c__4679__auto__;
var G__50705 = cljs.core.count(c__4679__auto__);
var G__50706 = (0);
seq__50265 = G__50703;
chunk__50269 = G__50704;
count__50270 = G__50705;
i__50271 = G__50706;
continue;
} else {
var role = cljs.core.first(seq__50265__$1);
var temp__5753__auto___50707__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___50707__$2)){
var spec_50708 = temp__5753__auto___50707__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_50708)], 0));
} else {
}


var G__50709 = cljs.core.next(seq__50265__$1);
var G__50710 = null;
var G__50711 = (0);
var G__50712 = (0);
seq__50265 = G__50709;
chunk__50269 = G__50710;
count__50270 = G__50711;
i__50271 = G__50712;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__50713 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__50714 = cljs.core.ex_cause(t);
via = G__50713;
t = G__50714;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__50326 = datafied_throwable;
var map__50326__$1 = cljs.core.__destructure_map(map__50326);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50326__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50326__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50326__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__50327 = cljs.core.last(via);
var map__50327__$1 = cljs.core.__destructure_map(map__50327);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50327__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50327__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50327__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__50328 = data;
var map__50328__$1 = cljs.core.__destructure_map(map__50328);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50328__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50328__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50328__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__50329 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__50329__$1 = cljs.core.__destructure_map(map__50329);
var top_data = map__50329__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50329__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__50337 = phase;
var G__50337__$1 = (((G__50337 instanceof cljs.core.Keyword))?G__50337.fqn:null);
switch (G__50337__$1) {
case "read-source":
var map__50338 = data;
var map__50338__$1 = cljs.core.__destructure_map(map__50338);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50338__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50338__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__50343 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__50343__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50343,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50343);
var G__50343__$2 = (cljs.core.truth_((function (){var fexpr__50354 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50354.cljs$core$IFn$_invoke$arity$1 ? fexpr__50354.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50354.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50343__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50343__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50343__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50343__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__50358 = top_data;
var G__50358__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50358,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__50358);
var G__50358__$2 = (cljs.core.truth_((function (){var fexpr__50368 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50368.cljs$core$IFn$_invoke$arity$1 ? fexpr__50368.cljs$core$IFn$_invoke$arity$1(source) : fexpr__50368.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__50358__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__50358__$1);
var G__50358__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50358__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50358__$2);
var G__50358__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50358__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50358__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50358__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50358__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__50385 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50385,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50385,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50385,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50385,(3),null);
var G__50388 = top_data;
var G__50388__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50388,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__50388);
var G__50388__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50388__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__50388__$1);
var G__50388__$3 = (cljs.core.truth_((function (){var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50388__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__50388__$2);
var G__50388__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50388__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__50388__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50388__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__50388__$4;
}

break;
case "execution":
var vec__50410 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50410,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50410,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50410,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50410,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50304_SHARP_){
var or__4253__auto__ = (p1__50304_SHARP_ == null);
if(or__4253__auto__){
return or__4253__auto__;
} else {
var fexpr__50423 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__50423.cljs$core$IFn$_invoke$arity$1 ? fexpr__50423.cljs$core$IFn$_invoke$arity$1(p1__50304_SHARP_) : fexpr__50423.call(null,p1__50304_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4253__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return line;
}
})();
var G__50427 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__50427__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50427,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__50427);
var G__50427__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50427__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__50427__$1);
var G__50427__$3 = (cljs.core.truth_((function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var and__4251__auto__ = source__$1;
if(cljs.core.truth_(and__4251__auto__)){
return method;
} else {
return and__4251__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50427__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4253__auto__ = fn;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__50427__$2);
var G__50427__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50427__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__50427__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50427__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__50427__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50337__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__50439){
var map__50440 = p__50439;
var map__50440__$1 = cljs.core.__destructure_map(map__50440);
var triage_data = map__50440__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50440__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50440__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50440__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50440__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50440__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50440__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50440__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50440__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = source;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4253__auto__ = line;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4253__auto__ = class$;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__50449 = phase;
var G__50449__$1 = (((G__50449 instanceof cljs.core.Keyword))?G__50449.fqn:null);
switch (G__50449__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__50457 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__50458 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50459 = loc;
var G__50460 = (cljs.core.truth_(spec)?(function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50469_50728 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50470_50729 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50471_50730 = true;
var _STAR_print_fn_STAR__temp_val__50472_50731 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50471_50730);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50472_50731);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50434_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50434_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50470_50729);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50469_50728);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50457,G__50458,G__50459,G__50460) : format.call(null,G__50457,G__50458,G__50459,G__50460));

break;
case "macroexpansion":
var G__50493 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__50494 = cause_type;
var G__50495 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50496 = loc;
var G__50497 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50493,G__50494,G__50495,G__50496,G__50497) : format.call(null,G__50493,G__50494,G__50495,G__50496,G__50497));

break;
case "compile-syntax-check":
var G__50503 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__50504 = cause_type;
var G__50506 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50509 = loc;
var G__50511 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50503,G__50504,G__50506,G__50509,G__50511) : format.call(null,G__50503,G__50504,G__50506,G__50509,G__50511));

break;
case "compilation":
var G__50519 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__50520 = cause_type;
var G__50521 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50522 = loc;
var G__50523 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50519,G__50520,G__50521,G__50522,G__50523) : format.call(null,G__50519,G__50520,G__50521,G__50522,G__50523));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__50537 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__50538 = symbol;
var G__50539 = loc;
var G__50540 = (function (){var sb__4795__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__50548_50735 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__50549_50736 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__50551_50737 = true;
var _STAR_print_fn_STAR__temp_val__50552_50738 = (function (x__4796__auto__){
return sb__4795__auto__.append(x__4796__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__50551_50737);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__50552_50738);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50437_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__50437_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__50549_50736);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__50548_50735);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4795__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__50537,G__50538,G__50539,G__50540) : format.call(null,G__50537,G__50538,G__50539,G__50540));
} else {
var G__50587 = "Execution error%s at %s(%s).\n%s\n";
var G__50588 = cause_type;
var G__50589 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__50590 = loc;
var G__50591 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__50587,G__50588,G__50589,G__50590,G__50591) : format.call(null,G__50587,G__50588,G__50589,G__50590,G__50591));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50449__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
