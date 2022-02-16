goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_61066 = (function (this$,type){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (malli.registry._schema[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4551__auto__.call(null,this$,type));
} else {
var m__4549__auto__ = (malli.registry._schema["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__4549__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_61066(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_61067 = (function (this$){
var x__4550__auto__ = (((this$ == null))?null:this$);
var m__4551__auto__ = (malli.registry._schemas[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4551__auto__.call(null,this$));
} else {
var m__4549__auto__ = (malli.registry._schemas["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4549__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_61067(this$);
}
});

malli.registry.simple_registry = (function malli$registry$simple_registry(schemas){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry60934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry60934 = (function (schemas,meta60935){
this.schemas = schemas;
this.meta60935 = meta60935;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry60934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60936,meta60935__$1){
var self__ = this;
var _60936__$1 = this;
return (new malli.registry.t_malli$registry60934(self__.schemas,meta60935__$1));
}));

(malli.registry.t_malli$registry60934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60936){
var self__ = this;
var _60936__$1 = this;
return self__.meta60935;
}));

(malli.registry.t_malli$registry60934.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry60934.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.schemas,type);
}));

(malli.registry.t_malli$registry60934.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.schemas;
}));

(malli.registry.t_malli$registry60934.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schemas","schemas",-2079365190,null),new cljs.core.Symbol(null,"meta60935","meta60935",1897154304,null)], null);
}));

(malli.registry.t_malli$registry60934.cljs$lang$type = true);

(malli.registry.t_malli$registry60934.cljs$lang$ctorStr = "malli.registry/t_malli$registry60934");

(malli.registry.t_malli$registry60934.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry60934");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry60934.
 */
malli.registry.__GT_t_malli$registry60934 = (function malli$registry$simple_registry_$___GT_t_malli$registry60934(schemas__$1,meta60935){
return (new malli.registry.t_malli$registry60934(schemas__$1,meta60935));
});

}

return (new malli.registry.t_malli$registry60934(schemas,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
return null;
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((malli.registry.type === "custom")){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});
malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry60950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry60950 = (function (meta60951){
this.meta60951 = meta60951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry60950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60952,meta60951__$1){
var self__ = this;
var _60952__$1 = this;
return (new malli.registry.t_malli$registry60950(meta60951__$1));
}));

(malli.registry.t_malli$registry60950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60952){
var self__ = this;
var _60952__$1 = this;
return self__.meta60951;
}));

(malli.registry.t_malli$registry60950.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry60950.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry60950.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry60950.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta60951","meta60951",-228194485,null)], null);
}));

(malli.registry.t_malli$registry60950.cljs$lang$type = true);

(malli.registry.t_malli$registry60950.cljs$lang$ctorStr = "malli.registry/t_malli$registry60950");

(malli.registry.t_malli$registry60950.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry60950");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry60950.
 */
malli.registry.__GT_t_malli$registry60950 = (function malli$registry$custom_default_registry_$___GT_t_malli$registry60950(meta60951){
return (new malli.registry.t_malli$registry60950(meta60951));
});

}

return (new malli.registry.t_malli$registry60950(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__4870__auto__ = [];
var len__4864__auto___61083 = arguments.length;
var i__4865__auto___61084 = (0);
while(true){
if((i__4865__auto___61084 < len__4864__auto___61083)){
args__4870__auto__.push((arguments[i__4865__auto___61084]));

var G__61085 = (i__4865__auto___61084 + (1));
i__4865__auto___61084 = G__61085;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((0) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__4871__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry60976 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry60976 = (function (_QMARK_registries,registries,meta60977){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta60977 = meta60977;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry60976.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60978,meta60977__$1){
var self__ = this;
var _60978__$1 = this;
return (new malli.registry.t_malli$registry60976(self__._QMARK_registries,self__.registries,meta60977__$1));
}));

(malli.registry.t_malli$registry60976.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60978){
var self__ = this;
var _60978__$1 = this;
return self__.meta60977;
}));

(malli.registry.t_malli$registry60976.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry60976.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__60969_SHARP_){
return malli.registry._schema(p1__60969_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry60976.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry60976.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta60977","meta60977",992802975,null)], null);
}));

(malli.registry.t_malli$registry60976.cljs$lang$type = true);

(malli.registry.t_malli$registry60976.cljs$lang$ctorStr = "malli.registry/t_malli$registry60976");

(malli.registry.t_malli$registry60976.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry60976");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry60976.
 */
malli.registry.__GT_t_malli$registry60976 = (function malli$registry$__GT_t_malli$registry60976(_QMARK_registries__$1,registries__$1,meta60977){
return (new malli.registry.t_malli$registry60976(_QMARK_registries__$1,registries__$1,meta60977));
});

}

return (new malli.registry.t_malli$registry60976(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq60970){
var self__4852__auto__ = this;
return self__4852__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq60970));
}));

malli.registry.mutable_registry = (function malli$registry$mutable_registry(db__$1){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry60995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry60995 = (function (db,meta60996){
this.db = db;
this.meta60996 = meta60996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry60995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60997,meta60996__$1){
var self__ = this;
var _60997__$1 = this;
return (new malli.registry.t_malli$registry60995(self__.db,meta60996__$1));
}));

(malli.registry.t_malli$registry60995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60997){
var self__ = this;
var _60997__$1 = this;
return self__.meta60996;
}));

(malli.registry.t_malli$registry60995.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry60995.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry60995.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry60995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta60996","meta60996",517776994,null)], null);
}));

(malli.registry.t_malli$registry60995.cljs$lang$type = true);

(malli.registry.t_malli$registry60995.cljs$lang$ctorStr = "malli.registry/t_malli$registry60995");

(malli.registry.t_malli$registry60995.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry60995");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry60995.
 */
malli.registry.__GT_t_malli$registry60995 = (function malli$registry$mutable_registry_$___GT_t_malli$registry60995(db__$2,meta60996){
return (new malli.registry.t_malli$registry60995(db__$2,meta60996));
});

}

return (new malli.registry.t_malli$registry60995(db__$1,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry61027 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry61027 = (function (meta61028){
this.meta61028 = meta61028;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry61027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61029,meta61028__$1){
var self__ = this;
var _61029__$1 = this;
return (new malli.registry.t_malli$registry61027(meta61028__$1));
}));

(malli.registry.t_malli$registry61027.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61029){
var self__ = this;
var _61029__$1 = this;
return self__.meta61028;
}));

(malli.registry.t_malli$registry61027.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry61027.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry61027.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry61027.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta61028","meta61028",-851799204,null)], null);
}));

(malli.registry.t_malli$registry61027.cljs$lang$type = true);

(malli.registry.t_malli$registry61027.cljs$lang$ctorStr = "malli.registry/t_malli$registry61027");

(malli.registry.t_malli$registry61027.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry61027");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry61027.
 */
malli.registry.__GT_t_malli$registry61027 = (function malli$registry$dynamic_registry_$___GT_t_malli$registry61027(meta61028){
return (new malli.registry.t_malli$registry61027(meta61028));
});

}

return (new malli.registry.t_malli$registry61027(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(function (){
if((typeof malli !== 'undefined') && (typeof malli.registry !== 'undefined') && (typeof malli.registry.t_malli$registry61038 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry61038 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta61039){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta61039 = meta61039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry61038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61040,meta61039__$1){
var self__ = this;
var _61040__$1 = this;
return (new malli.registry.t_malli$registry61038(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta61039__$1));
}));

(malli.registry.t_malli$registry61038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61040){
var self__ = this;
var _61040__$1 = this;
return self__.meta61039;
}));

(malli.registry.t_malli$registry61038.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry61038.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4253__auto__ = (function (){var fexpr__61049 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__61049.cljs$core$IFn$_invoke$arity$1 ? fexpr__61049.cljs$core$IFn$_invoke$arity$1(name) : fexpr__61049.call(null,name));
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
var temp__5753__auto__ = (function (){var G__61052 = name;
var G__61053 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__61052,G__61053) : self__.provider.call(null,G__61052,G__61053));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var schema = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry61038.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry61038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta61039","meta61039",1731447800,null)], null);
}));

(malli.registry.t_malli$registry61038.cljs$lang$type = true);

(malli.registry.t_malli$registry61038.cljs$lang$ctorStr = "malli.registry/t_malli$registry61038");

(malli.registry.t_malli$registry61038.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"malli.registry/t_malli$registry61038");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry61038.
 */
malli.registry.__GT_t_malli$registry61038 = (function malli$registry$lazy_registry_$___GT_t_malli$registry61038(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta61039){
return (new malli.registry.t_malli$registry61038(default_registry__$1,provider__$1,cache_STAR___$1,registry_STAR___$1,meta61039));
});

}

return (new malli.registry.t_malli$registry61038(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY));
})()
], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
