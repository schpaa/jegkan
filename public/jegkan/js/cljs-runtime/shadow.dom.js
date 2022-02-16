goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_46714 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_46714(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_46715 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_46715(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__45649 = coll;
var G__45650 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__45649,G__45650) : shadow.dom.lazy_native_coll_seq.call(null,G__45649,G__45650));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4253__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__45661 = arguments.length;
switch (G__45661) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__45671 = arguments.length;
switch (G__45671) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__45673 = arguments.length;
switch (G__45673) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__45681 = arguments.length;
switch (G__45681) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__45689 = arguments.length;
switch (G__45689) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__45702 = arguments.length;
switch (G__45702) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e45711){if((e45711 instanceof Object)){
var e = e45711;
return console.log("didnt support attachEvent",el,e);
} else {
throw e45711;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4253__auto__ = (!((typeof document !== 'undefined')));
if(or__4253__auto__){
return or__4253__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__45717 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__45718 = null;
var count__45719 = (0);
var i__45720 = (0);
while(true){
if((i__45720 < count__45719)){
var el = chunk__45718.cljs$core$IIndexed$_nth$arity$2(null,i__45720);
var handler_46731__$1 = ((function (seq__45717,chunk__45718,count__45719,i__45720,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45717,chunk__45718,count__45719,i__45720,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46731__$1);


var G__46733 = seq__45717;
var G__46734 = chunk__45718;
var G__46735 = count__45719;
var G__46736 = (i__45720 + (1));
seq__45717 = G__46733;
chunk__45718 = G__46734;
count__45719 = G__46735;
i__45720 = G__46736;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45717);
if(temp__5753__auto__){
var seq__45717__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45717__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45717__$1);
var G__46737 = cljs.core.chunk_rest(seq__45717__$1);
var G__46738 = c__4679__auto__;
var G__46739 = cljs.core.count(c__4679__auto__);
var G__46740 = (0);
seq__45717 = G__46737;
chunk__45718 = G__46738;
count__45719 = G__46739;
i__45720 = G__46740;
continue;
} else {
var el = cljs.core.first(seq__45717__$1);
var handler_46742__$1 = ((function (seq__45717,chunk__45718,count__45719,i__45720,el,seq__45717__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__45717,chunk__45718,count__45719,i__45720,el,seq__45717__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_46742__$1);


var G__46743 = cljs.core.next(seq__45717__$1);
var G__46744 = null;
var G__46745 = (0);
var G__46746 = (0);
seq__45717 = G__46743;
chunk__45718 = G__46744;
count__45719 = G__46745;
i__45720 = G__46746;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__45730 = arguments.length;
switch (G__45730) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__45738 = cljs.core.seq(events);
var chunk__45739 = null;
var count__45740 = (0);
var i__45741 = (0);
while(true){
if((i__45741 < count__45740)){
var vec__45751 = chunk__45739.cljs$core$IIndexed$_nth$arity$2(null,i__45741);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45751,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45751,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46753 = seq__45738;
var G__46754 = chunk__45739;
var G__46755 = count__45740;
var G__46756 = (i__45741 + (1));
seq__45738 = G__46753;
chunk__45739 = G__46754;
count__45740 = G__46755;
i__45741 = G__46756;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45738);
if(temp__5753__auto__){
var seq__45738__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45738__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45738__$1);
var G__46757 = cljs.core.chunk_rest(seq__45738__$1);
var G__46758 = c__4679__auto__;
var G__46759 = cljs.core.count(c__4679__auto__);
var G__46760 = (0);
seq__45738 = G__46757;
chunk__45739 = G__46758;
count__45740 = G__46759;
i__45741 = G__46760;
continue;
} else {
var vec__45756 = cljs.core.first(seq__45738__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45756,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45756,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__46766 = cljs.core.next(seq__45738__$1);
var G__46767 = null;
var G__46768 = (0);
var G__46769 = (0);
seq__45738 = G__46766;
chunk__45739 = G__46767;
count__45740 = G__46768;
i__45741 = G__46769;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__45761 = cljs.core.seq(styles);
var chunk__45763 = null;
var count__45764 = (0);
var i__45765 = (0);
while(true){
if((i__45765 < count__45764)){
var vec__45784 = chunk__45763.cljs$core$IIndexed$_nth$arity$2(null,i__45765);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45784,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45784,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46771 = seq__45761;
var G__46772 = chunk__45763;
var G__46773 = count__45764;
var G__46774 = (i__45765 + (1));
seq__45761 = G__46771;
chunk__45763 = G__46772;
count__45764 = G__46773;
i__45765 = G__46774;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__45761);
if(temp__5753__auto__){
var seq__45761__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45761__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__45761__$1);
var G__46775 = cljs.core.chunk_rest(seq__45761__$1);
var G__46776 = c__4679__auto__;
var G__46777 = cljs.core.count(c__4679__auto__);
var G__46778 = (0);
seq__45761 = G__46775;
chunk__45763 = G__46776;
count__45764 = G__46777;
i__45765 = G__46778;
continue;
} else {
var vec__45798 = cljs.core.first(seq__45761__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45798,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45798,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__46791 = cljs.core.next(seq__45761__$1);
var G__46792 = null;
var G__46793 = (0);
var G__46794 = (0);
seq__45761 = G__46791;
chunk__45763 = G__46792;
count__45764 = G__46793;
i__45765 = G__46794;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__45807_46796 = key;
var G__45807_46797__$1 = (((G__45807_46796 instanceof cljs.core.Keyword))?G__45807_46796.fqn:null);
switch (G__45807_46797__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_46802 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4253__auto__ = goog.string.startsWith(ks_46802,"data-");
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return goog.string.startsWith(ks_46802,"aria-");
}
})())){
el.setAttribute(ks_46802,value);
} else {
(el[ks_46802] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__45826){
var map__45827 = p__45826;
var map__45827__$1 = cljs.core.__destructure_map(map__45827);
var props = map__45827__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45827__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__45830 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45830,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45830,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45830,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__45837 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__45837,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__45837;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__45847 = arguments.length;
switch (G__45847) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__45867){
var vec__45871 = p__45867;
var seq__45872 = cljs.core.seq(vec__45871);
var first__45873 = cljs.core.first(seq__45872);
var seq__45872__$1 = cljs.core.next(seq__45872);
var nn = first__45873;
var first__45873__$1 = cljs.core.first(seq__45872__$1);
var seq__45872__$2 = cljs.core.next(seq__45872__$1);
var np = first__45873__$1;
var nc = seq__45872__$2;
var node = vec__45871;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45878 = nn;
var G__45879 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45878,G__45879) : create_fn.call(null,G__45878,G__45879));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__45884 = nn;
var G__45885 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__45884,G__45885) : create_fn.call(null,G__45884,G__45885));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__45892 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45892,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45892,(1),null);
var seq__45895_46820 = cljs.core.seq(node_children);
var chunk__45896_46821 = null;
var count__45897_46822 = (0);
var i__45898_46823 = (0);
while(true){
if((i__45898_46823 < count__45897_46822)){
var child_struct_46824 = chunk__45896_46821.cljs$core$IIndexed$_nth$arity$2(null,i__45898_46823);
var children_46825 = shadow.dom.dom_node(child_struct_46824);
if(cljs.core.seq_QMARK_(children_46825)){
var seq__45959_46826 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46825));
var chunk__45961_46827 = null;
var count__45962_46828 = (0);
var i__45963_46829 = (0);
while(true){
if((i__45963_46829 < count__45962_46828)){
var child_46830 = chunk__45961_46827.cljs$core$IIndexed$_nth$arity$2(null,i__45963_46829);
if(cljs.core.truth_(child_46830)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46830);


var G__46831 = seq__45959_46826;
var G__46832 = chunk__45961_46827;
var G__46833 = count__45962_46828;
var G__46834 = (i__45963_46829 + (1));
seq__45959_46826 = G__46831;
chunk__45961_46827 = G__46832;
count__45962_46828 = G__46833;
i__45963_46829 = G__46834;
continue;
} else {
var G__46835 = seq__45959_46826;
var G__46836 = chunk__45961_46827;
var G__46837 = count__45962_46828;
var G__46838 = (i__45963_46829 + (1));
seq__45959_46826 = G__46835;
chunk__45961_46827 = G__46836;
count__45962_46828 = G__46837;
i__45963_46829 = G__46838;
continue;
}
} else {
var temp__5753__auto___46839 = cljs.core.seq(seq__45959_46826);
if(temp__5753__auto___46839){
var seq__45959_46840__$1 = temp__5753__auto___46839;
if(cljs.core.chunked_seq_QMARK_(seq__45959_46840__$1)){
var c__4679__auto___46841 = cljs.core.chunk_first(seq__45959_46840__$1);
var G__46842 = cljs.core.chunk_rest(seq__45959_46840__$1);
var G__46843 = c__4679__auto___46841;
var G__46844 = cljs.core.count(c__4679__auto___46841);
var G__46845 = (0);
seq__45959_46826 = G__46842;
chunk__45961_46827 = G__46843;
count__45962_46828 = G__46844;
i__45963_46829 = G__46845;
continue;
} else {
var child_46846 = cljs.core.first(seq__45959_46840__$1);
if(cljs.core.truth_(child_46846)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46846);


var G__46847 = cljs.core.next(seq__45959_46840__$1);
var G__46848 = null;
var G__46849 = (0);
var G__46850 = (0);
seq__45959_46826 = G__46847;
chunk__45961_46827 = G__46848;
count__45962_46828 = G__46849;
i__45963_46829 = G__46850;
continue;
} else {
var G__46851 = cljs.core.next(seq__45959_46840__$1);
var G__46852 = null;
var G__46853 = (0);
var G__46854 = (0);
seq__45959_46826 = G__46851;
chunk__45961_46827 = G__46852;
count__45962_46828 = G__46853;
i__45963_46829 = G__46854;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46825);
}


var G__46855 = seq__45895_46820;
var G__46856 = chunk__45896_46821;
var G__46857 = count__45897_46822;
var G__46858 = (i__45898_46823 + (1));
seq__45895_46820 = G__46855;
chunk__45896_46821 = G__46856;
count__45897_46822 = G__46857;
i__45898_46823 = G__46858;
continue;
} else {
var temp__5753__auto___46859 = cljs.core.seq(seq__45895_46820);
if(temp__5753__auto___46859){
var seq__45895_46860__$1 = temp__5753__auto___46859;
if(cljs.core.chunked_seq_QMARK_(seq__45895_46860__$1)){
var c__4679__auto___46861 = cljs.core.chunk_first(seq__45895_46860__$1);
var G__46862 = cljs.core.chunk_rest(seq__45895_46860__$1);
var G__46863 = c__4679__auto___46861;
var G__46864 = cljs.core.count(c__4679__auto___46861);
var G__46865 = (0);
seq__45895_46820 = G__46862;
chunk__45896_46821 = G__46863;
count__45897_46822 = G__46864;
i__45898_46823 = G__46865;
continue;
} else {
var child_struct_46866 = cljs.core.first(seq__45895_46860__$1);
var children_46867 = shadow.dom.dom_node(child_struct_46866);
if(cljs.core.seq_QMARK_(children_46867)){
var seq__45984_46868 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_46867));
var chunk__45986_46869 = null;
var count__45987_46870 = (0);
var i__45988_46871 = (0);
while(true){
if((i__45988_46871 < count__45987_46870)){
var child_46872 = chunk__45986_46869.cljs$core$IIndexed$_nth$arity$2(null,i__45988_46871);
if(cljs.core.truth_(child_46872)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46872);


var G__46873 = seq__45984_46868;
var G__46874 = chunk__45986_46869;
var G__46875 = count__45987_46870;
var G__46876 = (i__45988_46871 + (1));
seq__45984_46868 = G__46873;
chunk__45986_46869 = G__46874;
count__45987_46870 = G__46875;
i__45988_46871 = G__46876;
continue;
} else {
var G__46877 = seq__45984_46868;
var G__46878 = chunk__45986_46869;
var G__46879 = count__45987_46870;
var G__46880 = (i__45988_46871 + (1));
seq__45984_46868 = G__46877;
chunk__45986_46869 = G__46878;
count__45987_46870 = G__46879;
i__45988_46871 = G__46880;
continue;
}
} else {
var temp__5753__auto___46881__$1 = cljs.core.seq(seq__45984_46868);
if(temp__5753__auto___46881__$1){
var seq__45984_46882__$1 = temp__5753__auto___46881__$1;
if(cljs.core.chunked_seq_QMARK_(seq__45984_46882__$1)){
var c__4679__auto___46883 = cljs.core.chunk_first(seq__45984_46882__$1);
var G__46884 = cljs.core.chunk_rest(seq__45984_46882__$1);
var G__46885 = c__4679__auto___46883;
var G__46886 = cljs.core.count(c__4679__auto___46883);
var G__46887 = (0);
seq__45984_46868 = G__46884;
chunk__45986_46869 = G__46885;
count__45987_46870 = G__46886;
i__45988_46871 = G__46887;
continue;
} else {
var child_46888 = cljs.core.first(seq__45984_46882__$1);
if(cljs.core.truth_(child_46888)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_46888);


var G__46889 = cljs.core.next(seq__45984_46882__$1);
var G__46890 = null;
var G__46891 = (0);
var G__46892 = (0);
seq__45984_46868 = G__46889;
chunk__45986_46869 = G__46890;
count__45987_46870 = G__46891;
i__45988_46871 = G__46892;
continue;
} else {
var G__46893 = cljs.core.next(seq__45984_46882__$1);
var G__46894 = null;
var G__46895 = (0);
var G__46896 = (0);
seq__45984_46868 = G__46893;
chunk__45986_46869 = G__46894;
count__45987_46870 = G__46895;
i__45988_46871 = G__46896;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_46867);
}


var G__46897 = cljs.core.next(seq__45895_46860__$1);
var G__46898 = null;
var G__46899 = (0);
var G__46900 = (0);
seq__45895_46820 = G__46897;
chunk__45896_46821 = G__46898;
count__45897_46822 = G__46899;
i__45898_46823 = G__46900;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__46019 = cljs.core.seq(node);
var chunk__46020 = null;
var count__46021 = (0);
var i__46022 = (0);
while(true){
if((i__46022 < count__46021)){
var n = chunk__46020.cljs$core$IIndexed$_nth$arity$2(null,i__46022);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46902 = seq__46019;
var G__46903 = chunk__46020;
var G__46904 = count__46021;
var G__46905 = (i__46022 + (1));
seq__46019 = G__46902;
chunk__46020 = G__46903;
count__46021 = G__46904;
i__46022 = G__46905;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46019);
if(temp__5753__auto__){
var seq__46019__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46019__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46019__$1);
var G__46907 = cljs.core.chunk_rest(seq__46019__$1);
var G__46908 = c__4679__auto__;
var G__46909 = cljs.core.count(c__4679__auto__);
var G__46910 = (0);
seq__46019 = G__46907;
chunk__46020 = G__46908;
count__46021 = G__46909;
i__46022 = G__46910;
continue;
} else {
var n = cljs.core.first(seq__46019__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__46912 = cljs.core.next(seq__46019__$1);
var G__46913 = null;
var G__46914 = (0);
var G__46915 = (0);
seq__46019 = G__46912;
chunk__46020 = G__46913;
count__46021 = G__46914;
i__46022 = G__46915;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__46042 = arguments.length;
switch (G__46042) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__46056 = arguments.length;
switch (G__46056) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__46080 = arguments.length;
switch (G__46080) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4253__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4870__auto__ = [];
var len__4864__auto___46920 = arguments.length;
var i__4865__auto___46921 = (0);
while(true){
if((i__4865__auto___46921 < len__4864__auto___46920)){
args__4870__auto__.push((arguments[i__4865__auto___46921]));

var G__46922 = (i__4865__auto___46921 + (1));
i__4865__auto___46921 = G__46922;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__46108_46923 = cljs.core.seq(nodes);
var chunk__46109_46924 = null;
var count__46110_46925 = (0);
var i__46111_46926 = (0);
while(true){
if((i__46111_46926 < count__46110_46925)){
var node_46927 = chunk__46109_46924.cljs$core$IIndexed$_nth$arity$2(null,i__46111_46926);
fragment.appendChild(shadow.dom._to_dom(node_46927));


var G__46928 = seq__46108_46923;
var G__46929 = chunk__46109_46924;
var G__46930 = count__46110_46925;
var G__46931 = (i__46111_46926 + (1));
seq__46108_46923 = G__46928;
chunk__46109_46924 = G__46929;
count__46110_46925 = G__46930;
i__46111_46926 = G__46931;
continue;
} else {
var temp__5753__auto___46932 = cljs.core.seq(seq__46108_46923);
if(temp__5753__auto___46932){
var seq__46108_46933__$1 = temp__5753__auto___46932;
if(cljs.core.chunked_seq_QMARK_(seq__46108_46933__$1)){
var c__4679__auto___46934 = cljs.core.chunk_first(seq__46108_46933__$1);
var G__46935 = cljs.core.chunk_rest(seq__46108_46933__$1);
var G__46936 = c__4679__auto___46934;
var G__46937 = cljs.core.count(c__4679__auto___46934);
var G__46938 = (0);
seq__46108_46923 = G__46935;
chunk__46109_46924 = G__46936;
count__46110_46925 = G__46937;
i__46111_46926 = G__46938;
continue;
} else {
var node_46939 = cljs.core.first(seq__46108_46933__$1);
fragment.appendChild(shadow.dom._to_dom(node_46939));


var G__46940 = cljs.core.next(seq__46108_46933__$1);
var G__46941 = null;
var G__46942 = (0);
var G__46943 = (0);
seq__46108_46923 = G__46940;
chunk__46109_46924 = G__46941;
count__46110_46925 = G__46942;
i__46111_46926 = G__46943;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq46095){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq46095));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__46129_46945 = cljs.core.seq(scripts);
var chunk__46130_46946 = null;
var count__46131_46947 = (0);
var i__46132_46948 = (0);
while(true){
if((i__46132_46948 < count__46131_46947)){
var vec__46146_46950 = chunk__46130_46946.cljs$core$IIndexed$_nth$arity$2(null,i__46132_46948);
var script_tag_46951 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46146_46950,(0),null);
var script_body_46952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46146_46950,(1),null);
eval(script_body_46952);


var G__46953 = seq__46129_46945;
var G__46954 = chunk__46130_46946;
var G__46955 = count__46131_46947;
var G__46956 = (i__46132_46948 + (1));
seq__46129_46945 = G__46953;
chunk__46130_46946 = G__46954;
count__46131_46947 = G__46955;
i__46132_46948 = G__46956;
continue;
} else {
var temp__5753__auto___46957 = cljs.core.seq(seq__46129_46945);
if(temp__5753__auto___46957){
var seq__46129_46958__$1 = temp__5753__auto___46957;
if(cljs.core.chunked_seq_QMARK_(seq__46129_46958__$1)){
var c__4679__auto___46959 = cljs.core.chunk_first(seq__46129_46958__$1);
var G__46960 = cljs.core.chunk_rest(seq__46129_46958__$1);
var G__46961 = c__4679__auto___46959;
var G__46962 = cljs.core.count(c__4679__auto___46959);
var G__46963 = (0);
seq__46129_46945 = G__46960;
chunk__46130_46946 = G__46961;
count__46131_46947 = G__46962;
i__46132_46948 = G__46963;
continue;
} else {
var vec__46159_46964 = cljs.core.first(seq__46129_46958__$1);
var script_tag_46965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46159_46964,(0),null);
var script_body_46966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46159_46964,(1),null);
eval(script_body_46966);


var G__46967 = cljs.core.next(seq__46129_46958__$1);
var G__46968 = null;
var G__46969 = (0);
var G__46970 = (0);
seq__46129_46945 = G__46967;
chunk__46130_46946 = G__46968;
count__46131_46947 = G__46969;
i__46132_46948 = G__46970;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__46163){
var vec__46164 = p__46163;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46164,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46164,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__46185 = arguments.length;
switch (G__46185) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__46213 = cljs.core.seq(style_keys);
var chunk__46214 = null;
var count__46215 = (0);
var i__46216 = (0);
while(true){
if((i__46216 < count__46215)){
var it = chunk__46214.cljs$core$IIndexed$_nth$arity$2(null,i__46216);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46976 = seq__46213;
var G__46977 = chunk__46214;
var G__46978 = count__46215;
var G__46979 = (i__46216 + (1));
seq__46213 = G__46976;
chunk__46214 = G__46977;
count__46215 = G__46978;
i__46216 = G__46979;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__46213);
if(temp__5753__auto__){
var seq__46213__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__46213__$1)){
var c__4679__auto__ = cljs.core.chunk_first(seq__46213__$1);
var G__46981 = cljs.core.chunk_rest(seq__46213__$1);
var G__46982 = c__4679__auto__;
var G__46983 = cljs.core.count(c__4679__auto__);
var G__46984 = (0);
seq__46213 = G__46981;
chunk__46214 = G__46982;
count__46215 = G__46983;
i__46216 = G__46984;
continue;
} else {
var it = cljs.core.first(seq__46213__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__46986 = cljs.core.next(seq__46213__$1);
var G__46987 = null;
var G__46988 = (0);
var G__46989 = (0);
seq__46213 = G__46986;
chunk__46214 = G__46987;
count__46215 = G__46988;
i__46216 = G__46989;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k46230,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__46251 = k46230;
var G__46251__$1 = (((G__46251 instanceof cljs.core.Keyword))?G__46251.fqn:null);
switch (G__46251__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46230,else__4505__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__46256){
var vec__46257 = p__46256;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46257,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46257,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46229){
var self__ = this;
var G__46229__$1 = this;
return (new cljs.core.RecordIter((0),G__46229__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46231,other46232){
var self__ = this;
var this46231__$1 = this;
return (((!((other46232 == null)))) && ((((this46231__$1.constructor === other46232.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46231__$1.x,other46232.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46231__$1.y,other46232.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46231__$1.__extmap,other46232.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k46230){
var self__ = this;
var this__4509__auto____$1 = this;
var G__46295 = k46230;
var G__46295__$1 = (((G__46295 instanceof cljs.core.Keyword))?G__46295.fqn:null);
switch (G__46295__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46230);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__46229){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__46298 = cljs.core.keyword_identical_QMARK_;
var expr__46299 = k__4511__auto__;
if(cljs.core.truth_((pred__46298.cljs$core$IFn$_invoke$arity$2 ? pred__46298.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__46299) : pred__46298.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__46299)))){
return (new shadow.dom.Coordinate(G__46229,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46298.cljs$core$IFn$_invoke$arity$2 ? pred__46298.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__46299) : pred__46298.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__46299)))){
return (new shadow.dom.Coordinate(self__.x,G__46229,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__46229),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__46229){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__46229,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__46239){
var extmap__4542__auto__ = (function (){var G__46326 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46239,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__46239)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46326);
} else {
return G__46326;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__46239),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__46239),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4502__auto__,k__4503__auto__){
var self__ = this;
var this__4502__auto____$1 = this;
return this__4502__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4503__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4504__auto__,k46341,else__4505__auto__){
var self__ = this;
var this__4504__auto____$1 = this;
var G__46355 = k46341;
var G__46355__$1 = (((G__46355 instanceof cljs.core.Keyword))?G__46355.fqn:null);
switch (G__46355__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k46341,else__4505__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4522__auto__,f__4523__auto__,init__4524__auto__){
var self__ = this;
var this__4522__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4525__auto__,p__46366){
var vec__46367 = p__46366;
var k__4526__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46367,(0),null);
var v__4527__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46367,(1),null);
return (f__4523__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4523__auto__.cljs$core$IFn$_invoke$arity$3(ret__4525__auto__,k__4526__auto__,v__4527__auto__) : f__4523__auto__.call(null,ret__4525__auto__,k__4526__auto__,v__4527__auto__));
}),init__4524__auto__,this__4522__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4517__auto__,writer__4518__auto__,opts__4519__auto__){
var self__ = this;
var this__4517__auto____$1 = this;
var pr_pair__4520__auto__ = (function (keyval__4521__auto__){
return cljs.core.pr_sequential_writer(writer__4518__auto__,cljs.core.pr_writer,""," ","",opts__4519__auto__,keyval__4521__auto__);
});
return cljs.core.pr_sequential_writer(writer__4518__auto__,pr_pair__4520__auto__,"#shadow.dom.Size{",", ","}",opts__4519__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__46340){
var self__ = this;
var G__46340__$1 = this;
return (new cljs.core.RecordIter((0),G__46340__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4500__auto__){
var self__ = this;
var this__4500__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4497__auto__){
var self__ = this;
var this__4497__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4506__auto__){
var self__ = this;
var this__4506__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4498__auto__){
var self__ = this;
var this__4498__auto____$1 = this;
var h__4360__auto__ = self__.__hash;
if((!((h__4360__auto__ == null)))){
return h__4360__auto__;
} else {
var h__4360__auto____$1 = (function (coll__4499__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4499__auto__));
})(this__4498__auto____$1);
(self__.__hash = h__4360__auto____$1);

return h__4360__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this46342,other46343){
var self__ = this;
var this46342__$1 = this;
return (((!((other46343 == null)))) && ((((this46342__$1.constructor === other46343.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46342__$1.w,other46343.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46342__$1.h,other46343.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this46342__$1.__extmap,other46343.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4512__auto__,k__4513__auto__){
var self__ = this;
var this__4512__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4513__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4512__auto____$1),self__.__meta),k__4513__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4513__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4509__auto__,k46341){
var self__ = this;
var this__4509__auto____$1 = this;
var G__46400 = k46341;
var G__46400__$1 = (((G__46400 instanceof cljs.core.Keyword))?G__46400.fqn:null);
switch (G__46400__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k46341);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4510__auto__,k__4511__auto__,G__46340){
var self__ = this;
var this__4510__auto____$1 = this;
var pred__46404 = cljs.core.keyword_identical_QMARK_;
var expr__46405 = k__4511__auto__;
if(cljs.core.truth_((pred__46404.cljs$core$IFn$_invoke$arity$2 ? pred__46404.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__46405) : pred__46404.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__46405)))){
return (new shadow.dom.Size(G__46340,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__46404.cljs$core$IFn$_invoke$arity$2 ? pred__46404.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__46405) : pred__46404.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__46405)))){
return (new shadow.dom.Size(self__.w,G__46340,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4511__auto__,G__46340),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4515__auto__){
var self__ = this;
var this__4515__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4501__auto__,G__46340){
var self__ = this;
var this__4501__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__46340,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4507__auto__,entry__4508__auto__){
var self__ = this;
var this__4507__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4508__auto__)){
return this__4507__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4508__auto__,(0)),cljs.core._nth(entry__4508__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4507__auto____$1,entry__4508__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4546__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4546__auto__,writer__4547__auto__){
return cljs.core._write(writer__4547__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__46346){
var extmap__4542__auto__ = (function (){var G__46427 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__46346,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__46346)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__46427);
} else {
return G__46427;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__46346),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__46346),null,cljs.core.not_empty(extmap__4542__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4738__auto__ = opts;
var l__4739__auto__ = a__4738__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4739__auto__)){
var G__47008 = (i + (1));
var G__47009 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__47008;
ret = G__47009;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__46467){
var vec__46468 = p__46467;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46468,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46468,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__46477 = arguments.length;
switch (G__46477) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__47014 = ps;
var G__47015 = (i + (1));
el__$1 = G__47014;
i = G__47015;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__46527 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46527,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46527,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46527,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__46535_47016 = cljs.core.seq(props);
var chunk__46536_47017 = null;
var count__46537_47018 = (0);
var i__46538_47019 = (0);
while(true){
if((i__46538_47019 < count__46537_47018)){
var vec__46557_47020 = chunk__46536_47017.cljs$core$IIndexed$_nth$arity$2(null,i__46538_47019);
var k_47021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46557_47020,(0),null);
var v_47022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46557_47020,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_47021);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47021),v_47022);


var G__47026 = seq__46535_47016;
var G__47027 = chunk__46536_47017;
var G__47028 = count__46537_47018;
var G__47029 = (i__46538_47019 + (1));
seq__46535_47016 = G__47026;
chunk__46536_47017 = G__47027;
count__46537_47018 = G__47028;
i__46538_47019 = G__47029;
continue;
} else {
var temp__5753__auto___47030 = cljs.core.seq(seq__46535_47016);
if(temp__5753__auto___47030){
var seq__46535_47031__$1 = temp__5753__auto___47030;
if(cljs.core.chunked_seq_QMARK_(seq__46535_47031__$1)){
var c__4679__auto___47032 = cljs.core.chunk_first(seq__46535_47031__$1);
var G__47033 = cljs.core.chunk_rest(seq__46535_47031__$1);
var G__47034 = c__4679__auto___47032;
var G__47035 = cljs.core.count(c__4679__auto___47032);
var G__47036 = (0);
seq__46535_47016 = G__47033;
chunk__46536_47017 = G__47034;
count__46537_47018 = G__47035;
i__46538_47019 = G__47036;
continue;
} else {
var vec__46566_47037 = cljs.core.first(seq__46535_47031__$1);
var k_47038 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46566_47037,(0),null);
var v_47039 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46566_47037,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_47038);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_47038),v_47039);


var G__47040 = cljs.core.next(seq__46535_47031__$1);
var G__47041 = null;
var G__47042 = (0);
var G__47043 = (0);
seq__46535_47016 = G__47040;
chunk__46536_47017 = G__47041;
count__46537_47018 = G__47042;
i__46538_47019 = G__47043;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__46584 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46584,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46584,(1),null);
var seq__46591_47044 = cljs.core.seq(node_children);
var chunk__46593_47045 = null;
var count__46594_47046 = (0);
var i__46595_47047 = (0);
while(true){
if((i__46595_47047 < count__46594_47046)){
var child_struct_47048 = chunk__46593_47045.cljs$core$IIndexed$_nth$arity$2(null,i__46595_47047);
if((!((child_struct_47048 == null)))){
if(typeof child_struct_47048 === 'string'){
var text_47049 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47049),child_struct_47048].join(''));
} else {
var children_47050 = shadow.dom.svg_node(child_struct_47048);
if(cljs.core.seq_QMARK_(children_47050)){
var seq__46639_47051 = cljs.core.seq(children_47050);
var chunk__46641_47052 = null;
var count__46642_47053 = (0);
var i__46643_47054 = (0);
while(true){
if((i__46643_47054 < count__46642_47053)){
var child_47055 = chunk__46641_47052.cljs$core$IIndexed$_nth$arity$2(null,i__46643_47054);
if(cljs.core.truth_(child_47055)){
node.appendChild(child_47055);


var G__47056 = seq__46639_47051;
var G__47057 = chunk__46641_47052;
var G__47058 = count__46642_47053;
var G__47059 = (i__46643_47054 + (1));
seq__46639_47051 = G__47056;
chunk__46641_47052 = G__47057;
count__46642_47053 = G__47058;
i__46643_47054 = G__47059;
continue;
} else {
var G__47060 = seq__46639_47051;
var G__47061 = chunk__46641_47052;
var G__47062 = count__46642_47053;
var G__47063 = (i__46643_47054 + (1));
seq__46639_47051 = G__47060;
chunk__46641_47052 = G__47061;
count__46642_47053 = G__47062;
i__46643_47054 = G__47063;
continue;
}
} else {
var temp__5753__auto___47064 = cljs.core.seq(seq__46639_47051);
if(temp__5753__auto___47064){
var seq__46639_47065__$1 = temp__5753__auto___47064;
if(cljs.core.chunked_seq_QMARK_(seq__46639_47065__$1)){
var c__4679__auto___47066 = cljs.core.chunk_first(seq__46639_47065__$1);
var G__47067 = cljs.core.chunk_rest(seq__46639_47065__$1);
var G__47068 = c__4679__auto___47066;
var G__47069 = cljs.core.count(c__4679__auto___47066);
var G__47070 = (0);
seq__46639_47051 = G__47067;
chunk__46641_47052 = G__47068;
count__46642_47053 = G__47069;
i__46643_47054 = G__47070;
continue;
} else {
var child_47071 = cljs.core.first(seq__46639_47065__$1);
if(cljs.core.truth_(child_47071)){
node.appendChild(child_47071);


var G__47072 = cljs.core.next(seq__46639_47065__$1);
var G__47073 = null;
var G__47074 = (0);
var G__47075 = (0);
seq__46639_47051 = G__47072;
chunk__46641_47052 = G__47073;
count__46642_47053 = G__47074;
i__46643_47054 = G__47075;
continue;
} else {
var G__47076 = cljs.core.next(seq__46639_47065__$1);
var G__47077 = null;
var G__47078 = (0);
var G__47079 = (0);
seq__46639_47051 = G__47076;
chunk__46641_47052 = G__47077;
count__46642_47053 = G__47078;
i__46643_47054 = G__47079;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47050);
}
}


var G__47080 = seq__46591_47044;
var G__47081 = chunk__46593_47045;
var G__47082 = count__46594_47046;
var G__47083 = (i__46595_47047 + (1));
seq__46591_47044 = G__47080;
chunk__46593_47045 = G__47081;
count__46594_47046 = G__47082;
i__46595_47047 = G__47083;
continue;
} else {
var G__47084 = seq__46591_47044;
var G__47085 = chunk__46593_47045;
var G__47086 = count__46594_47046;
var G__47087 = (i__46595_47047 + (1));
seq__46591_47044 = G__47084;
chunk__46593_47045 = G__47085;
count__46594_47046 = G__47086;
i__46595_47047 = G__47087;
continue;
}
} else {
var temp__5753__auto___47088 = cljs.core.seq(seq__46591_47044);
if(temp__5753__auto___47088){
var seq__46591_47089__$1 = temp__5753__auto___47088;
if(cljs.core.chunked_seq_QMARK_(seq__46591_47089__$1)){
var c__4679__auto___47090 = cljs.core.chunk_first(seq__46591_47089__$1);
var G__47091 = cljs.core.chunk_rest(seq__46591_47089__$1);
var G__47092 = c__4679__auto___47090;
var G__47093 = cljs.core.count(c__4679__auto___47090);
var G__47094 = (0);
seq__46591_47044 = G__47091;
chunk__46593_47045 = G__47092;
count__46594_47046 = G__47093;
i__46595_47047 = G__47094;
continue;
} else {
var child_struct_47095 = cljs.core.first(seq__46591_47089__$1);
if((!((child_struct_47095 == null)))){
if(typeof child_struct_47095 === 'string'){
var text_47096 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_47096),child_struct_47095].join(''));
} else {
var children_47097 = shadow.dom.svg_node(child_struct_47095);
if(cljs.core.seq_QMARK_(children_47097)){
var seq__46662_47098 = cljs.core.seq(children_47097);
var chunk__46664_47099 = null;
var count__46665_47100 = (0);
var i__46666_47101 = (0);
while(true){
if((i__46666_47101 < count__46665_47100)){
var child_47102 = chunk__46664_47099.cljs$core$IIndexed$_nth$arity$2(null,i__46666_47101);
if(cljs.core.truth_(child_47102)){
node.appendChild(child_47102);


var G__47103 = seq__46662_47098;
var G__47104 = chunk__46664_47099;
var G__47105 = count__46665_47100;
var G__47106 = (i__46666_47101 + (1));
seq__46662_47098 = G__47103;
chunk__46664_47099 = G__47104;
count__46665_47100 = G__47105;
i__46666_47101 = G__47106;
continue;
} else {
var G__47107 = seq__46662_47098;
var G__47108 = chunk__46664_47099;
var G__47109 = count__46665_47100;
var G__47110 = (i__46666_47101 + (1));
seq__46662_47098 = G__47107;
chunk__46664_47099 = G__47108;
count__46665_47100 = G__47109;
i__46666_47101 = G__47110;
continue;
}
} else {
var temp__5753__auto___47111__$1 = cljs.core.seq(seq__46662_47098);
if(temp__5753__auto___47111__$1){
var seq__46662_47112__$1 = temp__5753__auto___47111__$1;
if(cljs.core.chunked_seq_QMARK_(seq__46662_47112__$1)){
var c__4679__auto___47113 = cljs.core.chunk_first(seq__46662_47112__$1);
var G__47114 = cljs.core.chunk_rest(seq__46662_47112__$1);
var G__47115 = c__4679__auto___47113;
var G__47116 = cljs.core.count(c__4679__auto___47113);
var G__47117 = (0);
seq__46662_47098 = G__47114;
chunk__46664_47099 = G__47115;
count__46665_47100 = G__47116;
i__46666_47101 = G__47117;
continue;
} else {
var child_47118 = cljs.core.first(seq__46662_47112__$1);
if(cljs.core.truth_(child_47118)){
node.appendChild(child_47118);


var G__47119 = cljs.core.next(seq__46662_47112__$1);
var G__47120 = null;
var G__47121 = (0);
var G__47122 = (0);
seq__46662_47098 = G__47119;
chunk__46664_47099 = G__47120;
count__46665_47100 = G__47121;
i__46666_47101 = G__47122;
continue;
} else {
var G__47123 = cljs.core.next(seq__46662_47112__$1);
var G__47124 = null;
var G__47125 = (0);
var G__47126 = (0);
seq__46662_47098 = G__47123;
chunk__46664_47099 = G__47124;
count__46665_47100 = G__47125;
i__46666_47101 = G__47126;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_47097);
}
}


var G__47127 = cljs.core.next(seq__46591_47089__$1);
var G__47128 = null;
var G__47129 = (0);
var G__47130 = (0);
seq__46591_47044 = G__47127;
chunk__46593_47045 = G__47128;
count__46594_47046 = G__47129;
i__46595_47047 = G__47130;
continue;
} else {
var G__47131 = cljs.core.next(seq__46591_47089__$1);
var G__47132 = null;
var G__47133 = (0);
var G__47134 = (0);
seq__46591_47044 = G__47131;
chunk__46593_47045 = G__47132;
count__46594_47046 = G__47133;
i__46595_47047 = G__47134;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4870__auto__ = [];
var len__4864__auto___47137 = arguments.length;
var i__4865__auto___47138 = (0);
while(true){
if((i__4865__auto___47138 < len__4864__auto___47137)){
args__4870__auto__.push((arguments[i__4865__auto___47138]));

var G__47139 = (i__4865__auto___47138 + (1));
i__4865__auto___47138 = G__47139;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq46691){
var G__46692 = cljs.core.first(seq46691);
var seq46691__$1 = cljs.core.next(seq46691);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46692,seq46691__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__46701 = arguments.length;
switch (G__46701) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4251__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4251__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4251__auto__;
}
})())){
var c__41125__auto___47143 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_46706){
var state_val_46707 = (state_46706[(1)]);
if((state_val_46707 === (1))){
var state_46706__$1 = state_46706;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46706__$1,(2),once_or_cleanup);
} else {
if((state_val_46707 === (2))){
var inst_46703 = (state_46706[(2)]);
var inst_46704 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_46706__$1 = (function (){var statearr_46708 = state_46706;
(statearr_46708[(7)] = inst_46703);

return statearr_46708;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46706__$1,inst_46704);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__40848__auto__ = null;
var shadow$dom$state_machine__40848__auto____0 = (function (){
var statearr_46709 = [null,null,null,null,null,null,null,null];
(statearr_46709[(0)] = shadow$dom$state_machine__40848__auto__);

(statearr_46709[(1)] = (1));

return statearr_46709;
});
var shadow$dom$state_machine__40848__auto____1 = (function (state_46706){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_46706);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e46710){var ex__40851__auto__ = e46710;
var statearr_46711_47146 = state_46706;
(statearr_46711_47146[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_46706[(4)]))){
var statearr_46712_47147 = state_46706;
(statearr_46712_47147[(1)] = cljs.core.first((state_46706[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47148 = state_46706;
state_46706 = G__47148;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
shadow$dom$state_machine__40848__auto__ = function(state_46706){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__40848__auto____0.call(this);
case 1:
return shadow$dom$state_machine__40848__auto____1.call(this,state_46706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__40848__auto____0;
shadow$dom$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__40848__auto____1;
return shadow$dom$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_46713 = f__41126__auto__();
(statearr_46713[(6)] = c__41125__auto___47143);

return statearr_46713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
