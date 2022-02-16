goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__41183 = arguments.length;
switch (G__41183) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41184 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41184 = (function (f,blockable,meta41185){
this.f = f;
this.blockable = blockable;
this.meta41185 = meta41185;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41186,meta41185__$1){
var self__ = this;
var _41186__$1 = this;
return (new cljs.core.async.t_cljs$core$async41184(self__.f,self__.blockable,meta41185__$1));
}));

(cljs.core.async.t_cljs$core$async41184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41186){
var self__ = this;
var _41186__$1 = this;
return self__.meta41185;
}));

(cljs.core.async.t_cljs$core$async41184.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41184.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async41184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async41184.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta41185","meta41185",23923807,null)], null);
}));

(cljs.core.async.t_cljs$core$async41184.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41184.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41184");

(cljs.core.async.t_cljs$core$async41184.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41184");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41184.
 */
cljs.core.async.__GT_t_cljs$core$async41184 = (function cljs$core$async$__GT_t_cljs$core$async41184(f__$1,blockable__$1,meta41185){
return (new cljs.core.async.t_cljs$core$async41184(f__$1,blockable__$1,meta41185));
});

}

return (new cljs.core.async.t_cljs$core$async41184(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__41195 = arguments.length;
switch (G__41195) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__41212 = arguments.length;
switch (G__41212) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__41228 = arguments.length;
switch (G__41228) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_44036 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44036) : fn1.call(null,val_44036));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_44036) : fn1.call(null,val_44036));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__41247 = arguments.length;
switch (G__41247) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4741__auto___44045 = n;
var x_44046 = (0);
while(true){
if((x_44046 < n__4741__auto___44045)){
(a[x_44046] = x_44046);

var G__44047 = (x_44046 + (1));
x_44046 = G__44047;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41250 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41250 = (function (flag,meta41251){
this.flag = flag;
this.meta41251 = meta41251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41252,meta41251__$1){
var self__ = this;
var _41252__$1 = this;
return (new cljs.core.async.t_cljs$core$async41250(self__.flag,meta41251__$1));
}));

(cljs.core.async.t_cljs$core$async41250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41252){
var self__ = this;
var _41252__$1 = this;
return self__.meta41251;
}));

(cljs.core.async.t_cljs$core$async41250.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41250.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async41250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta41251","meta41251",-70189691,null)], null);
}));

(cljs.core.async.t_cljs$core$async41250.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41250");

(cljs.core.async.t_cljs$core$async41250.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41250");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41250.
 */
cljs.core.async.__GT_t_cljs$core$async41250 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async41250(flag__$1,meta41251){
return (new cljs.core.async.t_cljs$core$async41250(flag__$1,meta41251));
});

}

return (new cljs.core.async.t_cljs$core$async41250(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async41253 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async41253 = (function (flag,cb,meta41254){
this.flag = flag;
this.cb = cb;
this.meta41254 = meta41254;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41255,meta41254__$1){
var self__ = this;
var _41255__$1 = this;
return (new cljs.core.async.t_cljs$core$async41253(self__.flag,self__.cb,meta41254__$1));
}));

(cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41255){
var self__ = this;
var _41255__$1 = this;
return self__.meta41254;
}));

(cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async41253.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async41253.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta41254","meta41254",461354807,null)], null);
}));

(cljs.core.async.t_cljs$core$async41253.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async41253.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async41253");

(cljs.core.async.t_cljs$core$async41253.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async41253");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async41253.
 */
cljs.core.async.__GT_t_cljs$core$async41253 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async41253(flag__$1,cb__$1,meta41254){
return (new cljs.core.async.t_cljs$core$async41253(flag__$1,cb__$1,meta41254));
});

}

return (new cljs.core.async.t_cljs$core$async41253(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41256_SHARP_){
var G__41258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41256_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41258) : fret.call(null,G__41258));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__41257_SHARP_){
var G__41259 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41257_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__41259) : fret.call(null,G__41259));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4253__auto__ = wport;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return port;
}
})()], null));
} else {
var G__44074 = (i + (1));
i = G__44074;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4253__auto__ = ret;
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4251__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4251__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44083 = arguments.length;
var i__4865__auto___44085 = (0);
while(true){
if((i__4865__auto___44085 < len__4864__auto___44083)){
args__4870__auto__.push((arguments[i__4865__auto___44085]));

var G__44086 = (i__4865__auto___44085 + (1));
i__4865__auto___44085 = G__44086;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((1) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4871__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__41272){
var map__41273 = p__41272;
var map__41273__$1 = cljs.core.__destructure_map(map__41273);
var opts = map__41273__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq41264){
var G__41267 = cljs.core.first(seq41264);
var seq41264__$1 = cljs.core.next(seq41264);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41267,seq41264__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__41285 = arguments.length;
switch (G__41285) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41125__auto___44093 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_41309){
var state_val_41310 = (state_41309[(1)]);
if((state_val_41310 === (7))){
var inst_41305 = (state_41309[(2)]);
var state_41309__$1 = state_41309;
var statearr_41311_44094 = state_41309__$1;
(statearr_41311_44094[(2)] = inst_41305);

(statearr_41311_44094[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (1))){
var state_41309__$1 = state_41309;
var statearr_41312_44096 = state_41309__$1;
(statearr_41312_44096[(2)] = null);

(statearr_41312_44096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (4))){
var inst_41288 = (state_41309[(7)]);
var inst_41288__$1 = (state_41309[(2)]);
var inst_41289 = (inst_41288__$1 == null);
var state_41309__$1 = (function (){var statearr_41313 = state_41309;
(statearr_41313[(7)] = inst_41288__$1);

return statearr_41313;
})();
if(cljs.core.truth_(inst_41289)){
var statearr_41314_44098 = state_41309__$1;
(statearr_41314_44098[(1)] = (5));

} else {
var statearr_41315_44099 = state_41309__$1;
(statearr_41315_44099[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (13))){
var state_41309__$1 = state_41309;
var statearr_41316_44102 = state_41309__$1;
(statearr_41316_44102[(2)] = null);

(statearr_41316_44102[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (6))){
var inst_41288 = (state_41309[(7)]);
var state_41309__$1 = state_41309;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41309__$1,(11),to,inst_41288);
} else {
if((state_val_41310 === (3))){
var inst_41307 = (state_41309[(2)]);
var state_41309__$1 = state_41309;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41309__$1,inst_41307);
} else {
if((state_val_41310 === (12))){
var state_41309__$1 = state_41309;
var statearr_41317_44104 = state_41309__$1;
(statearr_41317_44104[(2)] = null);

(statearr_41317_44104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (2))){
var state_41309__$1 = state_41309;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41309__$1,(4),from);
} else {
if((state_val_41310 === (11))){
var inst_41298 = (state_41309[(2)]);
var state_41309__$1 = state_41309;
if(cljs.core.truth_(inst_41298)){
var statearr_41318_44105 = state_41309__$1;
(statearr_41318_44105[(1)] = (12));

} else {
var statearr_41319_44107 = state_41309__$1;
(statearr_41319_44107[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (9))){
var state_41309__$1 = state_41309;
var statearr_41320_44110 = state_41309__$1;
(statearr_41320_44110[(2)] = null);

(statearr_41320_44110[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (5))){
var state_41309__$1 = state_41309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41325_44111 = state_41309__$1;
(statearr_41325_44111[(1)] = (8));

} else {
var statearr_41327_44112 = state_41309__$1;
(statearr_41327_44112[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (14))){
var inst_41303 = (state_41309[(2)]);
var state_41309__$1 = state_41309;
var statearr_41331_44113 = state_41309__$1;
(statearr_41331_44113[(2)] = inst_41303);

(statearr_41331_44113[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (10))){
var inst_41295 = (state_41309[(2)]);
var state_41309__$1 = state_41309;
var statearr_41332_44117 = state_41309__$1;
(statearr_41332_44117[(2)] = inst_41295);

(statearr_41332_44117[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41310 === (8))){
var inst_41292 = cljs.core.async.close_BANG_(to);
var state_41309__$1 = state_41309;
var statearr_41333_44118 = state_41309__$1;
(statearr_41333_44118[(2)] = inst_41292);

(statearr_41333_44118[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_41338 = [null,null,null,null,null,null,null,null];
(statearr_41338[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_41338[(1)] = (1));

return statearr_41338;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_41309){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41309);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e41341){var ex__40851__auto__ = e41341;
var statearr_41342_44123 = state_41309;
(statearr_41342_44123[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41309[(4)]))){
var statearr_41343_44125 = state_41309;
(statearr_41343_44125[(1)] = cljs.core.first((state_41309[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44126 = state_41309;
state_41309 = G__44126;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_41309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_41309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_41348 = f__41126__auto__();
(statearr_41348[(6)] = c__41125__auto___44093);

return statearr_41348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__41358){
var vec__41359 = p__41358;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41359,(1),null);
var job = vec__41359;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__41125__auto___44131 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_41367){
var state_val_41368 = (state_41367[(1)]);
if((state_val_41368 === (1))){
var state_41367__$1 = state_41367;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41367__$1,(2),res,v);
} else {
if((state_val_41368 === (2))){
var inst_41364 = (state_41367[(2)]);
var inst_41365 = cljs.core.async.close_BANG_(res);
var state_41367__$1 = (function (){var statearr_41372 = state_41367;
(statearr_41372[(7)] = inst_41364);

return statearr_41372;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_41367__$1,inst_41365);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0 = (function (){
var statearr_41373 = [null,null,null,null,null,null,null,null];
(statearr_41373[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__);

(statearr_41373[(1)] = (1));

return statearr_41373;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1 = (function (state_41367){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41367);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e41376){var ex__40851__auto__ = e41376;
var statearr_41377_44137 = state_41367;
(statearr_41377_44137[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41367[(4)]))){
var statearr_41379_44139 = state_41367;
(statearr_41379_44139[(1)] = cljs.core.first((state_41367[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44143 = state_41367;
state_41367 = G__44143;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = function(state_41367){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1.call(this,state_41367);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_41381 = f__41126__auto__();
(statearr_41381[(6)] = c__41125__auto___44131);

return statearr_41381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__41386){
var vec__41388 = p__41386;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41388,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41388,(1),null);
var job = vec__41388;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4741__auto___44147 = n;
var __44148 = (0);
while(true){
if((__44148 < n__4741__auto___44147)){
var G__41394_44149 = type;
var G__41394_44150__$1 = (((G__41394_44149 instanceof cljs.core.Keyword))?G__41394_44149.fqn:null);
switch (G__41394_44150__$1) {
case "compute":
var c__41125__auto___44152 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44148,c__41125__auto___44152,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async){
return (function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = ((function (__44148,c__41125__auto___44152,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async){
return (function (state_41409){
var state_val_41410 = (state_41409[(1)]);
if((state_val_41410 === (1))){
var state_41409__$1 = state_41409;
var statearr_41413_44156 = state_41409__$1;
(statearr_41413_44156[(2)] = null);

(statearr_41413_44156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41410 === (2))){
var state_41409__$1 = state_41409;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41409__$1,(4),jobs);
} else {
if((state_val_41410 === (3))){
var inst_41407 = (state_41409[(2)]);
var state_41409__$1 = state_41409;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41409__$1,inst_41407);
} else {
if((state_val_41410 === (4))){
var inst_41399 = (state_41409[(2)]);
var inst_41400 = process(inst_41399);
var state_41409__$1 = state_41409;
if(cljs.core.truth_(inst_41400)){
var statearr_41418_44160 = state_41409__$1;
(statearr_41418_44160[(1)] = (5));

} else {
var statearr_41419_44161 = state_41409__$1;
(statearr_41419_44161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41410 === (5))){
var state_41409__$1 = state_41409;
var statearr_41420_44163 = state_41409__$1;
(statearr_41420_44163[(2)] = null);

(statearr_41420_44163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41410 === (6))){
var state_41409__$1 = state_41409;
var statearr_41421_44166 = state_41409__$1;
(statearr_41421_44166[(2)] = null);

(statearr_41421_44166[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41410 === (7))){
var inst_41405 = (state_41409[(2)]);
var state_41409__$1 = state_41409;
var statearr_41422_44167 = state_41409__$1;
(statearr_41422_44167[(2)] = inst_41405);

(statearr_41422_44167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44148,c__41125__auto___44152,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async))
;
return ((function (__44148,switch__40847__auto__,c__41125__auto___44152,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0 = (function (){
var statearr_41423 = [null,null,null,null,null,null,null];
(statearr_41423[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__);

(statearr_41423[(1)] = (1));

return statearr_41423;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1 = (function (state_41409){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41409);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e41426){var ex__40851__auto__ = e41426;
var statearr_41427_44175 = state_41409;
(statearr_41427_44175[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41409[(4)]))){
var statearr_41430_44176 = state_41409;
(statearr_41430_44176[(1)] = cljs.core.first((state_41409[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44177 = state_41409;
state_41409 = G__44177;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = function(state_41409){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1.call(this,state_41409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__;
})()
;})(__44148,switch__40847__auto__,c__41125__auto___44152,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async))
})();
var state__41127__auto__ = (function (){var statearr_41434 = f__41126__auto__();
(statearr_41434[(6)] = c__41125__auto___44152);

return statearr_41434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
});})(__44148,c__41125__auto___44152,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async))
);


break;
case "async":
var c__41125__auto___44178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__44148,c__41125__auto___44178,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async){
return (function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = ((function (__44148,c__41125__auto___44178,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async){
return (function (state_41448){
var state_val_41449 = (state_41448[(1)]);
if((state_val_41449 === (1))){
var state_41448__$1 = state_41448;
var statearr_41450_44183 = state_41448__$1;
(statearr_41450_44183[(2)] = null);

(statearr_41450_44183[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (2))){
var state_41448__$1 = state_41448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41448__$1,(4),jobs);
} else {
if((state_val_41449 === (3))){
var inst_41446 = (state_41448[(2)]);
var state_41448__$1 = state_41448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41448__$1,inst_41446);
} else {
if((state_val_41449 === (4))){
var inst_41438 = (state_41448[(2)]);
var inst_41439 = async(inst_41438);
var state_41448__$1 = state_41448;
if(cljs.core.truth_(inst_41439)){
var statearr_41459_44187 = state_41448__$1;
(statearr_41459_44187[(1)] = (5));

} else {
var statearr_41460_44188 = state_41448__$1;
(statearr_41460_44188[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (5))){
var state_41448__$1 = state_41448;
var statearr_41462_44189 = state_41448__$1;
(statearr_41462_44189[(2)] = null);

(statearr_41462_44189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (6))){
var state_41448__$1 = state_41448;
var statearr_41466_44190 = state_41448__$1;
(statearr_41466_44190[(2)] = null);

(statearr_41466_44190[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41449 === (7))){
var inst_41444 = (state_41448[(2)]);
var state_41448__$1 = state_41448;
var statearr_41471_44192 = state_41448__$1;
(statearr_41471_44192[(2)] = inst_41444);

(statearr_41471_44192[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__44148,c__41125__auto___44178,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async))
;
return ((function (__44148,switch__40847__auto__,c__41125__auto___44178,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0 = (function (){
var statearr_41477 = [null,null,null,null,null,null,null];
(statearr_41477[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__);

(statearr_41477[(1)] = (1));

return statearr_41477;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1 = (function (state_41448){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41448);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e41480){var ex__40851__auto__ = e41480;
var statearr_41481_44195 = state_41448;
(statearr_41481_44195[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41448[(4)]))){
var statearr_41483_44196 = state_41448;
(statearr_41483_44196[(1)] = cljs.core.first((state_41448[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44197 = state_41448;
state_41448 = G__44197;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = function(state_41448){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1.call(this,state_41448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__;
})()
;})(__44148,switch__40847__auto__,c__41125__auto___44178,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async))
})();
var state__41127__auto__ = (function (){var statearr_41492 = f__41126__auto__();
(statearr_41492[(6)] = c__41125__auto___44178);

return statearr_41492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
});})(__44148,c__41125__auto___44178,G__41394_44149,G__41394_44150__$1,n__4741__auto___44147,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41394_44150__$1)].join('')));

}

var G__44201 = (__44148 + (1));
__44148 = G__44201;
continue;
} else {
}
break;
}

var c__41125__auto___44202 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_41539){
var state_val_41540 = (state_41539[(1)]);
if((state_val_41540 === (7))){
var inst_41533 = (state_41539[(2)]);
var state_41539__$1 = state_41539;
var statearr_41552_44203 = state_41539__$1;
(statearr_41552_44203[(2)] = inst_41533);

(statearr_41552_44203[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (1))){
var state_41539__$1 = state_41539;
var statearr_41555_44205 = state_41539__$1;
(statearr_41555_44205[(2)] = null);

(statearr_41555_44205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (4))){
var inst_41518 = (state_41539[(7)]);
var inst_41518__$1 = (state_41539[(2)]);
var inst_41519 = (inst_41518__$1 == null);
var state_41539__$1 = (function (){var statearr_41557 = state_41539;
(statearr_41557[(7)] = inst_41518__$1);

return statearr_41557;
})();
if(cljs.core.truth_(inst_41519)){
var statearr_41559_44206 = state_41539__$1;
(statearr_41559_44206[(1)] = (5));

} else {
var statearr_41562_44207 = state_41539__$1;
(statearr_41562_44207[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (6))){
var inst_41523 = (state_41539[(8)]);
var inst_41518 = (state_41539[(7)]);
var inst_41523__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_41524 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_41525 = [inst_41518,inst_41523__$1];
var inst_41526 = (new cljs.core.PersistentVector(null,2,(5),inst_41524,inst_41525,null));
var state_41539__$1 = (function (){var statearr_41570 = state_41539;
(statearr_41570[(8)] = inst_41523__$1);

return statearr_41570;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41539__$1,(8),jobs,inst_41526);
} else {
if((state_val_41540 === (3))){
var inst_41535 = (state_41539[(2)]);
var state_41539__$1 = state_41539;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41539__$1,inst_41535);
} else {
if((state_val_41540 === (2))){
var state_41539__$1 = state_41539;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41539__$1,(4),from);
} else {
if((state_val_41540 === (9))){
var inst_41530 = (state_41539[(2)]);
var state_41539__$1 = (function (){var statearr_41586 = state_41539;
(statearr_41586[(9)] = inst_41530);

return statearr_41586;
})();
var statearr_41587_44210 = state_41539__$1;
(statearr_41587_44210[(2)] = null);

(statearr_41587_44210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (5))){
var inst_41521 = cljs.core.async.close_BANG_(jobs);
var state_41539__$1 = state_41539;
var statearr_41588_44212 = state_41539__$1;
(statearr_41588_44212[(2)] = inst_41521);

(statearr_41588_44212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41540 === (8))){
var inst_41523 = (state_41539[(8)]);
var inst_41528 = (state_41539[(2)]);
var state_41539__$1 = (function (){var statearr_41591 = state_41539;
(statearr_41591[(10)] = inst_41528);

return statearr_41591;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41539__$1,(9),results,inst_41523);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0 = (function (){
var statearr_41596 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_41596[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__);

(statearr_41596[(1)] = (1));

return statearr_41596;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1 = (function (state_41539){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41539);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e41599){var ex__40851__auto__ = e41599;
var statearr_41600_44221 = state_41539;
(statearr_41600_44221[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41539[(4)]))){
var statearr_41601_44222 = state_41539;
(statearr_41601_44222[(1)] = cljs.core.first((state_41539[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44223 = state_41539;
state_41539 = G__44223;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = function(state_41539){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1.call(this,state_41539);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_41603 = f__41126__auto__();
(statearr_41603[(6)] = c__41125__auto___44202);

return statearr_41603;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


var c__41125__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_41648){
var state_val_41649 = (state_41648[(1)]);
if((state_val_41649 === (7))){
var inst_41644 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41651_44225 = state_41648__$1;
(statearr_41651_44225[(2)] = inst_41644);

(statearr_41651_44225[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (20))){
var state_41648__$1 = state_41648;
var statearr_41652_44226 = state_41648__$1;
(statearr_41652_44226[(2)] = null);

(statearr_41652_44226[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (1))){
var state_41648__$1 = state_41648;
var statearr_41653_44228 = state_41648__$1;
(statearr_41653_44228[(2)] = null);

(statearr_41653_44228[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (4))){
var inst_41613 = (state_41648[(7)]);
var inst_41613__$1 = (state_41648[(2)]);
var inst_41614 = (inst_41613__$1 == null);
var state_41648__$1 = (function (){var statearr_41654 = state_41648;
(statearr_41654[(7)] = inst_41613__$1);

return statearr_41654;
})();
if(cljs.core.truth_(inst_41614)){
var statearr_41662_44229 = state_41648__$1;
(statearr_41662_44229[(1)] = (5));

} else {
var statearr_41663_44230 = state_41648__$1;
(statearr_41663_44230[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (15))){
var inst_41626 = (state_41648[(8)]);
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41648__$1,(18),to,inst_41626);
} else {
if((state_val_41649 === (21))){
var inst_41639 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41664_44232 = state_41648__$1;
(statearr_41664_44232[(2)] = inst_41639);

(statearr_41664_44232[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (13))){
var inst_41641 = (state_41648[(2)]);
var state_41648__$1 = (function (){var statearr_41666 = state_41648;
(statearr_41666[(9)] = inst_41641);

return statearr_41666;
})();
var statearr_41667_44234 = state_41648__$1;
(statearr_41667_44234[(2)] = null);

(statearr_41667_44234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (6))){
var inst_41613 = (state_41648[(7)]);
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41648__$1,(11),inst_41613);
} else {
if((state_val_41649 === (17))){
var inst_41634 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
if(cljs.core.truth_(inst_41634)){
var statearr_41668_44235 = state_41648__$1;
(statearr_41668_44235[(1)] = (19));

} else {
var statearr_41669_44236 = state_41648__$1;
(statearr_41669_44236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (3))){
var inst_41646 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41648__$1,inst_41646);
} else {
if((state_val_41649 === (12))){
var inst_41623 = (state_41648[(10)]);
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41648__$1,(14),inst_41623);
} else {
if((state_val_41649 === (2))){
var state_41648__$1 = state_41648;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41648__$1,(4),results);
} else {
if((state_val_41649 === (19))){
var state_41648__$1 = state_41648;
var statearr_41677_44238 = state_41648__$1;
(statearr_41677_44238[(2)] = null);

(statearr_41677_44238[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (11))){
var inst_41623 = (state_41648[(2)]);
var state_41648__$1 = (function (){var statearr_41679 = state_41648;
(statearr_41679[(10)] = inst_41623);

return statearr_41679;
})();
var statearr_41680_44239 = state_41648__$1;
(statearr_41680_44239[(2)] = null);

(statearr_41680_44239[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (9))){
var state_41648__$1 = state_41648;
var statearr_41681_44240 = state_41648__$1;
(statearr_41681_44240[(2)] = null);

(statearr_41681_44240[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (5))){
var state_41648__$1 = state_41648;
if(cljs.core.truth_(close_QMARK_)){
var statearr_41682_44241 = state_41648__$1;
(statearr_41682_44241[(1)] = (8));

} else {
var statearr_41683_44242 = state_41648__$1;
(statearr_41683_44242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (14))){
var inst_41628 = (state_41648[(11)]);
var inst_41626 = (state_41648[(8)]);
var inst_41626__$1 = (state_41648[(2)]);
var inst_41627 = (inst_41626__$1 == null);
var inst_41628__$1 = cljs.core.not(inst_41627);
var state_41648__$1 = (function (){var statearr_41692 = state_41648;
(statearr_41692[(11)] = inst_41628__$1);

(statearr_41692[(8)] = inst_41626__$1);

return statearr_41692;
})();
if(inst_41628__$1){
var statearr_41693_44244 = state_41648__$1;
(statearr_41693_44244[(1)] = (15));

} else {
var statearr_41695_44245 = state_41648__$1;
(statearr_41695_44245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (16))){
var inst_41628 = (state_41648[(11)]);
var state_41648__$1 = state_41648;
var statearr_41696_44246 = state_41648__$1;
(statearr_41696_44246[(2)] = inst_41628);

(statearr_41696_44246[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (10))){
var inst_41620 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41697_44247 = state_41648__$1;
(statearr_41697_44247[(2)] = inst_41620);

(statearr_41697_44247[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (18))){
var inst_41631 = (state_41648[(2)]);
var state_41648__$1 = state_41648;
var statearr_41698_44250 = state_41648__$1;
(statearr_41698_44250[(2)] = inst_41631);

(statearr_41698_44250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41649 === (8))){
var inst_41617 = cljs.core.async.close_BANG_(to);
var state_41648__$1 = state_41648;
var statearr_41706_44251 = state_41648__$1;
(statearr_41706_44251[(2)] = inst_41617);

(statearr_41706_44251[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0 = (function (){
var statearr_41707 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41707[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__);

(statearr_41707[(1)] = (1));

return statearr_41707;
});
var cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1 = (function (state_41648){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41648);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e41709){var ex__40851__auto__ = e41709;
var statearr_41710_44256 = state_41648;
(statearr_41710_44256[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41648[(4)]))){
var statearr_41711_44257 = state_41648;
(statearr_41711_44257[(1)] = cljs.core.first((state_41648[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44258 = state_41648;
state_41648 = G__44258;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__ = function(state_41648){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1.call(this,state_41648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__40848__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_41712 = f__41126__auto__();
(statearr_41712[(6)] = c__41125__auto__);

return statearr_41712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));

return c__41125__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__41724 = arguments.length;
switch (G__41724) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__41732 = arguments.length;
switch (G__41732) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__41741 = arguments.length;
switch (G__41741) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__41125__auto___44282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_41777){
var state_val_41778 = (state_41777[(1)]);
if((state_val_41778 === (7))){
var inst_41771 = (state_41777[(2)]);
var state_41777__$1 = state_41777;
var statearr_41783_44283 = state_41777__$1;
(statearr_41783_44283[(2)] = inst_41771);

(statearr_41783_44283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (1))){
var state_41777__$1 = state_41777;
var statearr_41787_44284 = state_41777__$1;
(statearr_41787_44284[(2)] = null);

(statearr_41787_44284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (4))){
var inst_41752 = (state_41777[(7)]);
var inst_41752__$1 = (state_41777[(2)]);
var inst_41753 = (inst_41752__$1 == null);
var state_41777__$1 = (function (){var statearr_41792 = state_41777;
(statearr_41792[(7)] = inst_41752__$1);

return statearr_41792;
})();
if(cljs.core.truth_(inst_41753)){
var statearr_41793_44289 = state_41777__$1;
(statearr_41793_44289[(1)] = (5));

} else {
var statearr_41795_44290 = state_41777__$1;
(statearr_41795_44290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (13))){
var state_41777__$1 = state_41777;
var statearr_41797_44293 = state_41777__$1;
(statearr_41797_44293[(2)] = null);

(statearr_41797_44293[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (6))){
var inst_41752 = (state_41777[(7)]);
var inst_41758 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_41752) : p.call(null,inst_41752));
var state_41777__$1 = state_41777;
if(cljs.core.truth_(inst_41758)){
var statearr_41802_44296 = state_41777__$1;
(statearr_41802_44296[(1)] = (9));

} else {
var statearr_41803_44298 = state_41777__$1;
(statearr_41803_44298[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (3))){
var inst_41773 = (state_41777[(2)]);
var state_41777__$1 = state_41777;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41777__$1,inst_41773);
} else {
if((state_val_41778 === (12))){
var state_41777__$1 = state_41777;
var statearr_41807_44301 = state_41777__$1;
(statearr_41807_44301[(2)] = null);

(statearr_41807_44301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (2))){
var state_41777__$1 = state_41777;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41777__$1,(4),ch);
} else {
if((state_val_41778 === (11))){
var inst_41752 = (state_41777[(7)]);
var inst_41762 = (state_41777[(2)]);
var state_41777__$1 = state_41777;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41777__$1,(8),inst_41762,inst_41752);
} else {
if((state_val_41778 === (9))){
var state_41777__$1 = state_41777;
var statearr_41810_44305 = state_41777__$1;
(statearr_41810_44305[(2)] = tc);

(statearr_41810_44305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (5))){
var inst_41755 = cljs.core.async.close_BANG_(tc);
var inst_41756 = cljs.core.async.close_BANG_(fc);
var state_41777__$1 = (function (){var statearr_41811 = state_41777;
(statearr_41811[(8)] = inst_41755);

return statearr_41811;
})();
var statearr_41812_44306 = state_41777__$1;
(statearr_41812_44306[(2)] = inst_41756);

(statearr_41812_44306[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (14))){
var inst_41769 = (state_41777[(2)]);
var state_41777__$1 = state_41777;
var statearr_41813_44310 = state_41777__$1;
(statearr_41813_44310[(2)] = inst_41769);

(statearr_41813_44310[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (10))){
var state_41777__$1 = state_41777;
var statearr_41814_44311 = state_41777__$1;
(statearr_41814_44311[(2)] = fc);

(statearr_41814_44311[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41778 === (8))){
var inst_41764 = (state_41777[(2)]);
var state_41777__$1 = state_41777;
if(cljs.core.truth_(inst_41764)){
var statearr_41815_44315 = state_41777__$1;
(statearr_41815_44315[(1)] = (12));

} else {
var statearr_41816_44316 = state_41777__$1;
(statearr_41816_44316[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_41823 = [null,null,null,null,null,null,null,null,null];
(statearr_41823[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_41823[(1)] = (1));

return statearr_41823;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_41777){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41777);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e41826){var ex__40851__auto__ = e41826;
var statearr_41827_44319 = state_41777;
(statearr_41827_44319[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41777[(4)]))){
var statearr_41829_44321 = state_41777;
(statearr_41829_44321[(1)] = cljs.core.first((state_41777[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44322 = state_41777;
state_41777 = G__44322;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_41777){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_41777);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_41834 = f__41126__auto__();
(statearr_41834[(6)] = c__41125__auto___44282);

return statearr_41834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41125__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_41869){
var state_val_41870 = (state_41869[(1)]);
if((state_val_41870 === (7))){
var inst_41865 = (state_41869[(2)]);
var state_41869__$1 = state_41869;
var statearr_41875_44326 = state_41869__$1;
(statearr_41875_44326[(2)] = inst_41865);

(statearr_41875_44326[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41870 === (1))){
var inst_41844 = init;
var inst_41845 = inst_41844;
var state_41869__$1 = (function (){var statearr_41877 = state_41869;
(statearr_41877[(7)] = inst_41845);

return statearr_41877;
})();
var statearr_41878_44327 = state_41869__$1;
(statearr_41878_44327[(2)] = null);

(statearr_41878_44327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41870 === (4))){
var inst_41848 = (state_41869[(8)]);
var inst_41848__$1 = (state_41869[(2)]);
var inst_41852 = (inst_41848__$1 == null);
var state_41869__$1 = (function (){var statearr_41883 = state_41869;
(statearr_41883[(8)] = inst_41848__$1);

return statearr_41883;
})();
if(cljs.core.truth_(inst_41852)){
var statearr_41885_44329 = state_41869__$1;
(statearr_41885_44329[(1)] = (5));

} else {
var statearr_41886_44331 = state_41869__$1;
(statearr_41886_44331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41870 === (6))){
var inst_41855 = (state_41869[(9)]);
var inst_41845 = (state_41869[(7)]);
var inst_41848 = (state_41869[(8)]);
var inst_41855__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_41845,inst_41848) : f.call(null,inst_41845,inst_41848));
var inst_41856 = cljs.core.reduced_QMARK_(inst_41855__$1);
var state_41869__$1 = (function (){var statearr_41891 = state_41869;
(statearr_41891[(9)] = inst_41855__$1);

return statearr_41891;
})();
if(inst_41856){
var statearr_41893_44335 = state_41869__$1;
(statearr_41893_44335[(1)] = (8));

} else {
var statearr_41894_44337 = state_41869__$1;
(statearr_41894_44337[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41870 === (3))){
var inst_41867 = (state_41869[(2)]);
var state_41869__$1 = state_41869;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41869__$1,inst_41867);
} else {
if((state_val_41870 === (2))){
var state_41869__$1 = state_41869;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41869__$1,(4),ch);
} else {
if((state_val_41870 === (9))){
var inst_41855 = (state_41869[(9)]);
var inst_41845 = inst_41855;
var state_41869__$1 = (function (){var statearr_41899 = state_41869;
(statearr_41899[(7)] = inst_41845);

return statearr_41899;
})();
var statearr_41901_44342 = state_41869__$1;
(statearr_41901_44342[(2)] = null);

(statearr_41901_44342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41870 === (5))){
var inst_41845 = (state_41869[(7)]);
var state_41869__$1 = state_41869;
var statearr_41904_44345 = state_41869__$1;
(statearr_41904_44345[(2)] = inst_41845);

(statearr_41904_44345[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41870 === (10))){
var inst_41863 = (state_41869[(2)]);
var state_41869__$1 = state_41869;
var statearr_41907_44347 = state_41869__$1;
(statearr_41907_44347[(2)] = inst_41863);

(statearr_41907_44347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41870 === (8))){
var inst_41855 = (state_41869[(9)]);
var inst_41858 = cljs.core.deref(inst_41855);
var state_41869__$1 = state_41869;
var statearr_41909_44349 = state_41869__$1;
(statearr_41909_44349[(2)] = inst_41858);

(statearr_41909_44349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__40848__auto__ = null;
var cljs$core$async$reduce_$_state_machine__40848__auto____0 = (function (){
var statearr_41914 = [null,null,null,null,null,null,null,null,null,null];
(statearr_41914[(0)] = cljs$core$async$reduce_$_state_machine__40848__auto__);

(statearr_41914[(1)] = (1));

return statearr_41914;
});
var cljs$core$async$reduce_$_state_machine__40848__auto____1 = (function (state_41869){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41869);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e41915){var ex__40851__auto__ = e41915;
var statearr_41916_44354 = state_41869;
(statearr_41916_44354[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41869[(4)]))){
var statearr_41918_44355 = state_41869;
(statearr_41918_44355[(1)] = cljs.core.first((state_41869[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44357 = state_41869;
state_41869 = G__44357;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__40848__auto__ = function(state_41869){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__40848__auto____1.call(this,state_41869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__40848__auto____0;
cljs$core$async$reduce_$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__40848__auto____1;
return cljs$core$async$reduce_$_state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_41923 = f__41126__auto__();
(statearr_41923[(6)] = c__41125__auto__);

return statearr_41923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));

return c__41125__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__41125__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_41939){
var state_val_41940 = (state_41939[(1)]);
if((state_val_41940 === (1))){
var inst_41932 = cljs.core.async.reduce(f__$1,init,ch);
var state_41939__$1 = state_41939;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_41939__$1,(2),inst_41932);
} else {
if((state_val_41940 === (2))){
var inst_41935 = (state_41939[(2)]);
var inst_41937 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_41935) : f__$1.call(null,inst_41935));
var state_41939__$1 = state_41939;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41939__$1,inst_41937);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__40848__auto__ = null;
var cljs$core$async$transduce_$_state_machine__40848__auto____0 = (function (){
var statearr_41947 = [null,null,null,null,null,null,null];
(statearr_41947[(0)] = cljs$core$async$transduce_$_state_machine__40848__auto__);

(statearr_41947[(1)] = (1));

return statearr_41947;
});
var cljs$core$async$transduce_$_state_machine__40848__auto____1 = (function (state_41939){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41939);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e41950){var ex__40851__auto__ = e41950;
var statearr_41951_44376 = state_41939;
(statearr_41951_44376[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41939[(4)]))){
var statearr_41954_44378 = state_41939;
(statearr_41954_44378[(1)] = cljs.core.first((state_41939[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44382 = state_41939;
state_41939 = G__44382;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__40848__auto__ = function(state_41939){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__40848__auto____1.call(this,state_41939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__40848__auto____0;
cljs$core$async$transduce_$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__40848__auto____1;
return cljs$core$async$transduce_$_state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_41956 = f__41126__auto__();
(statearr_41956[(6)] = c__41125__auto__);

return statearr_41956;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));

return c__41125__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__41966 = arguments.length;
switch (G__41966) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41125__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_41998){
var state_val_41999 = (state_41998[(1)]);
if((state_val_41999 === (7))){
var inst_41978 = (state_41998[(2)]);
var state_41998__$1 = state_41998;
var statearr_42001_44389 = state_41998__$1;
(statearr_42001_44389[(2)] = inst_41978);

(statearr_42001_44389[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (1))){
var inst_41972 = cljs.core.seq(coll);
var inst_41973 = inst_41972;
var state_41998__$1 = (function (){var statearr_42002 = state_41998;
(statearr_42002[(7)] = inst_41973);

return statearr_42002;
})();
var statearr_42003_44391 = state_41998__$1;
(statearr_42003_44391[(2)] = null);

(statearr_42003_44391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (4))){
var inst_41973 = (state_41998[(7)]);
var inst_41976 = cljs.core.first(inst_41973);
var state_41998__$1 = state_41998;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_41998__$1,(7),ch,inst_41976);
} else {
if((state_val_41999 === (13))){
var inst_41990 = (state_41998[(2)]);
var state_41998__$1 = state_41998;
var statearr_42007_44395 = state_41998__$1;
(statearr_42007_44395[(2)] = inst_41990);

(statearr_42007_44395[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (6))){
var inst_41981 = (state_41998[(2)]);
var state_41998__$1 = state_41998;
if(cljs.core.truth_(inst_41981)){
var statearr_42008_44397 = state_41998__$1;
(statearr_42008_44397[(1)] = (8));

} else {
var statearr_42010_44398 = state_41998__$1;
(statearr_42010_44398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (3))){
var inst_41994 = (state_41998[(2)]);
var state_41998__$1 = state_41998;
return cljs.core.async.impl.ioc_helpers.return_chan(state_41998__$1,inst_41994);
} else {
if((state_val_41999 === (12))){
var state_41998__$1 = state_41998;
var statearr_42017_44400 = state_41998__$1;
(statearr_42017_44400[(2)] = null);

(statearr_42017_44400[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (2))){
var inst_41973 = (state_41998[(7)]);
var state_41998__$1 = state_41998;
if(cljs.core.truth_(inst_41973)){
var statearr_42022_44402 = state_41998__$1;
(statearr_42022_44402[(1)] = (4));

} else {
var statearr_42024_44403 = state_41998__$1;
(statearr_42024_44403[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (11))){
var inst_41987 = cljs.core.async.close_BANG_(ch);
var state_41998__$1 = state_41998;
var statearr_42025_44406 = state_41998__$1;
(statearr_42025_44406[(2)] = inst_41987);

(statearr_42025_44406[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (9))){
var state_41998__$1 = state_41998;
if(cljs.core.truth_(close_QMARK_)){
var statearr_42026_44408 = state_41998__$1;
(statearr_42026_44408[(1)] = (11));

} else {
var statearr_42027_44409 = state_41998__$1;
(statearr_42027_44409[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (5))){
var inst_41973 = (state_41998[(7)]);
var state_41998__$1 = state_41998;
var statearr_42032_44410 = state_41998__$1;
(statearr_42032_44410[(2)] = inst_41973);

(statearr_42032_44410[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (10))){
var inst_41992 = (state_41998[(2)]);
var state_41998__$1 = state_41998;
var statearr_42033_44411 = state_41998__$1;
(statearr_42033_44411[(2)] = inst_41992);

(statearr_42033_44411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41999 === (8))){
var inst_41973 = (state_41998[(7)]);
var inst_41983 = cljs.core.next(inst_41973);
var inst_41973__$1 = inst_41983;
var state_41998__$1 = (function (){var statearr_42034 = state_41998;
(statearr_42034[(7)] = inst_41973__$1);

return statearr_42034;
})();
var statearr_42036_44412 = state_41998__$1;
(statearr_42036_44412[(2)] = null);

(statearr_42036_44412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_42038 = [null,null,null,null,null,null,null,null];
(statearr_42038[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_42038[(1)] = (1));

return statearr_42038;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_41998){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_41998);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e42041){var ex__40851__auto__ = e42041;
var statearr_42042_44413 = state_41998;
(statearr_42042_44413[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_41998[(4)]))){
var statearr_42043_44414 = state_41998;
(statearr_42043_44414[(1)] = cljs.core.first((state_41998[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44415 = state_41998;
state_41998 = G__44415;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_41998){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_41998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_42045 = f__41126__auto__();
(statearr_42045[(6)] = c__41125__auto__);

return statearr_42045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));

return c__41125__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__42051 = arguments.length;
switch (G__42051) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_44421 = (function (_){
var x__4550__auto__ = (((_ == null))?null:_);
var m__4551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4551__auto__.call(null,_));
} else {
var m__4549__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4549__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_44421(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_44427 = (function (m,ch,close_QMARK_){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4551__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4549__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_44427(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_44434 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_44434(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_44440 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_44440(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42121 = (function (ch,cs,meta42122){
this.ch = ch;
this.cs = cs;
this.meta42122 = meta42122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42123,meta42122__$1){
var self__ = this;
var _42123__$1 = this;
return (new cljs.core.async.t_cljs$core$async42121(self__.ch,self__.cs,meta42122__$1));
}));

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42123){
var self__ = this;
var _42123__$1 = this;
return self__.meta42122;
}));

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async42121.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async42121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta42122","meta42122",-1520173393,null)], null);
}));

(cljs.core.async.t_cljs$core$async42121.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42121");

(cljs.core.async.t_cljs$core$async42121.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42121");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42121.
 */
cljs.core.async.__GT_t_cljs$core$async42121 = (function cljs$core$async$mult_$___GT_t_cljs$core$async42121(ch__$1,cs__$1,meta42122){
return (new cljs.core.async.t_cljs$core$async42121(ch__$1,cs__$1,meta42122));
});

}

return (new cljs.core.async.t_cljs$core$async42121(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__41125__auto___44457 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_42298){
var state_val_42299 = (state_42298[(1)]);
if((state_val_42299 === (7))){
var inst_42294 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42300_44463 = state_42298__$1;
(statearr_42300_44463[(2)] = inst_42294);

(statearr_42300_44463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (20))){
var inst_42199 = (state_42298[(7)]);
var inst_42211 = cljs.core.first(inst_42199);
var inst_42212 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42211,(0),null);
var inst_42213 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42211,(1),null);
var state_42298__$1 = (function (){var statearr_42301 = state_42298;
(statearr_42301[(8)] = inst_42212);

return statearr_42301;
})();
if(cljs.core.truth_(inst_42213)){
var statearr_42302_44467 = state_42298__$1;
(statearr_42302_44467[(1)] = (22));

} else {
var statearr_42303_44468 = state_42298__$1;
(statearr_42303_44468[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (27))){
var inst_42248 = (state_42298[(9)]);
var inst_42243 = (state_42298[(10)]);
var inst_42241 = (state_42298[(11)]);
var inst_42164 = (state_42298[(12)]);
var inst_42248__$1 = cljs.core._nth(inst_42241,inst_42243);
var inst_42249 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42248__$1,inst_42164,done);
var state_42298__$1 = (function (){var statearr_42304 = state_42298;
(statearr_42304[(9)] = inst_42248__$1);

return statearr_42304;
})();
if(cljs.core.truth_(inst_42249)){
var statearr_42305_44469 = state_42298__$1;
(statearr_42305_44469[(1)] = (30));

} else {
var statearr_42306_44470 = state_42298__$1;
(statearr_42306_44470[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (1))){
var state_42298__$1 = state_42298;
var statearr_42307_44471 = state_42298__$1;
(statearr_42307_44471[(2)] = null);

(statearr_42307_44471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (24))){
var inst_42199 = (state_42298[(7)]);
var inst_42218 = (state_42298[(2)]);
var inst_42219 = cljs.core.next(inst_42199);
var inst_42177 = inst_42219;
var inst_42178 = null;
var inst_42179 = (0);
var inst_42180 = (0);
var state_42298__$1 = (function (){var statearr_42308 = state_42298;
(statearr_42308[(13)] = inst_42180);

(statearr_42308[(14)] = inst_42179);

(statearr_42308[(15)] = inst_42218);

(statearr_42308[(16)] = inst_42178);

(statearr_42308[(17)] = inst_42177);

return statearr_42308;
})();
var statearr_42309_44475 = state_42298__$1;
(statearr_42309_44475[(2)] = null);

(statearr_42309_44475[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (39))){
var state_42298__$1 = state_42298;
var statearr_42313_44478 = state_42298__$1;
(statearr_42313_44478[(2)] = null);

(statearr_42313_44478[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (4))){
var inst_42164 = (state_42298[(12)]);
var inst_42164__$1 = (state_42298[(2)]);
var inst_42167 = (inst_42164__$1 == null);
var state_42298__$1 = (function (){var statearr_42314 = state_42298;
(statearr_42314[(12)] = inst_42164__$1);

return statearr_42314;
})();
if(cljs.core.truth_(inst_42167)){
var statearr_42315_44481 = state_42298__$1;
(statearr_42315_44481[(1)] = (5));

} else {
var statearr_42316_44484 = state_42298__$1;
(statearr_42316_44484[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (15))){
var inst_42180 = (state_42298[(13)]);
var inst_42179 = (state_42298[(14)]);
var inst_42178 = (state_42298[(16)]);
var inst_42177 = (state_42298[(17)]);
var inst_42195 = (state_42298[(2)]);
var inst_42196 = (inst_42180 + (1));
var tmp42310 = inst_42179;
var tmp42311 = inst_42178;
var tmp42312 = inst_42177;
var inst_42177__$1 = tmp42312;
var inst_42178__$1 = tmp42311;
var inst_42179__$1 = tmp42310;
var inst_42180__$1 = inst_42196;
var state_42298__$1 = (function (){var statearr_42317 = state_42298;
(statearr_42317[(13)] = inst_42180__$1);

(statearr_42317[(14)] = inst_42179__$1);

(statearr_42317[(18)] = inst_42195);

(statearr_42317[(16)] = inst_42178__$1);

(statearr_42317[(17)] = inst_42177__$1);

return statearr_42317;
})();
var statearr_42318_44494 = state_42298__$1;
(statearr_42318_44494[(2)] = null);

(statearr_42318_44494[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (21))){
var inst_42222 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42322_44496 = state_42298__$1;
(statearr_42322_44496[(2)] = inst_42222);

(statearr_42322_44496[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (31))){
var inst_42248 = (state_42298[(9)]);
var inst_42252 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42248);
var state_42298__$1 = state_42298;
var statearr_42323_44498 = state_42298__$1;
(statearr_42323_44498[(2)] = inst_42252);

(statearr_42323_44498[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (32))){
var inst_42242 = (state_42298[(19)]);
var inst_42243 = (state_42298[(10)]);
var inst_42240 = (state_42298[(20)]);
var inst_42241 = (state_42298[(11)]);
var inst_42254 = (state_42298[(2)]);
var inst_42255 = (inst_42243 + (1));
var tmp42319 = inst_42242;
var tmp42320 = inst_42240;
var tmp42321 = inst_42241;
var inst_42240__$1 = tmp42320;
var inst_42241__$1 = tmp42321;
var inst_42242__$1 = tmp42319;
var inst_42243__$1 = inst_42255;
var state_42298__$1 = (function (){var statearr_42324 = state_42298;
(statearr_42324[(19)] = inst_42242__$1);

(statearr_42324[(10)] = inst_42243__$1);

(statearr_42324[(20)] = inst_42240__$1);

(statearr_42324[(11)] = inst_42241__$1);

(statearr_42324[(21)] = inst_42254);

return statearr_42324;
})();
var statearr_42325_44502 = state_42298__$1;
(statearr_42325_44502[(2)] = null);

(statearr_42325_44502[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (40))){
var inst_42267 = (state_42298[(22)]);
var inst_42271 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_42267);
var state_42298__$1 = state_42298;
var statearr_42326_44504 = state_42298__$1;
(statearr_42326_44504[(2)] = inst_42271);

(statearr_42326_44504[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (33))){
var inst_42258 = (state_42298[(23)]);
var inst_42260 = cljs.core.chunked_seq_QMARK_(inst_42258);
var state_42298__$1 = state_42298;
if(inst_42260){
var statearr_42327_44506 = state_42298__$1;
(statearr_42327_44506[(1)] = (36));

} else {
var statearr_42328_44507 = state_42298__$1;
(statearr_42328_44507[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (13))){
var inst_42189 = (state_42298[(24)]);
var inst_42192 = cljs.core.async.close_BANG_(inst_42189);
var state_42298__$1 = state_42298;
var statearr_42329_44510 = state_42298__$1;
(statearr_42329_44510[(2)] = inst_42192);

(statearr_42329_44510[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (22))){
var inst_42212 = (state_42298[(8)]);
var inst_42215 = cljs.core.async.close_BANG_(inst_42212);
var state_42298__$1 = state_42298;
var statearr_42330_44512 = state_42298__$1;
(statearr_42330_44512[(2)] = inst_42215);

(statearr_42330_44512[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (36))){
var inst_42258 = (state_42298[(23)]);
var inst_42262 = cljs.core.chunk_first(inst_42258);
var inst_42263 = cljs.core.chunk_rest(inst_42258);
var inst_42264 = cljs.core.count(inst_42262);
var inst_42240 = inst_42263;
var inst_42241 = inst_42262;
var inst_42242 = inst_42264;
var inst_42243 = (0);
var state_42298__$1 = (function (){var statearr_42331 = state_42298;
(statearr_42331[(19)] = inst_42242);

(statearr_42331[(10)] = inst_42243);

(statearr_42331[(20)] = inst_42240);

(statearr_42331[(11)] = inst_42241);

return statearr_42331;
})();
var statearr_42332_44517 = state_42298__$1;
(statearr_42332_44517[(2)] = null);

(statearr_42332_44517[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (41))){
var inst_42258 = (state_42298[(23)]);
var inst_42273 = (state_42298[(2)]);
var inst_42274 = cljs.core.next(inst_42258);
var inst_42240 = inst_42274;
var inst_42241 = null;
var inst_42242 = (0);
var inst_42243 = (0);
var state_42298__$1 = (function (){var statearr_42333 = state_42298;
(statearr_42333[(19)] = inst_42242);

(statearr_42333[(10)] = inst_42243);

(statearr_42333[(20)] = inst_42240);

(statearr_42333[(11)] = inst_42241);

(statearr_42333[(25)] = inst_42273);

return statearr_42333;
})();
var statearr_42334_44521 = state_42298__$1;
(statearr_42334_44521[(2)] = null);

(statearr_42334_44521[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (43))){
var state_42298__$1 = state_42298;
var statearr_42335_44524 = state_42298__$1;
(statearr_42335_44524[(2)] = null);

(statearr_42335_44524[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (29))){
var inst_42282 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42336_44527 = state_42298__$1;
(statearr_42336_44527[(2)] = inst_42282);

(statearr_42336_44527[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (44))){
var inst_42291 = (state_42298[(2)]);
var state_42298__$1 = (function (){var statearr_42337 = state_42298;
(statearr_42337[(26)] = inst_42291);

return statearr_42337;
})();
var statearr_42338_44529 = state_42298__$1;
(statearr_42338_44529[(2)] = null);

(statearr_42338_44529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (6))){
var inst_42232 = (state_42298[(27)]);
var inst_42231 = cljs.core.deref(cs);
var inst_42232__$1 = cljs.core.keys(inst_42231);
var inst_42233 = cljs.core.count(inst_42232__$1);
var inst_42234 = cljs.core.reset_BANG_(dctr,inst_42233);
var inst_42239 = cljs.core.seq(inst_42232__$1);
var inst_42240 = inst_42239;
var inst_42241 = null;
var inst_42242 = (0);
var inst_42243 = (0);
var state_42298__$1 = (function (){var statearr_42339 = state_42298;
(statearr_42339[(19)] = inst_42242);

(statearr_42339[(28)] = inst_42234);

(statearr_42339[(10)] = inst_42243);

(statearr_42339[(20)] = inst_42240);

(statearr_42339[(11)] = inst_42241);

(statearr_42339[(27)] = inst_42232__$1);

return statearr_42339;
})();
var statearr_42340_44537 = state_42298__$1;
(statearr_42340_44537[(2)] = null);

(statearr_42340_44537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (28))){
var inst_42258 = (state_42298[(23)]);
var inst_42240 = (state_42298[(20)]);
var inst_42258__$1 = cljs.core.seq(inst_42240);
var state_42298__$1 = (function (){var statearr_42341 = state_42298;
(statearr_42341[(23)] = inst_42258__$1);

return statearr_42341;
})();
if(inst_42258__$1){
var statearr_42342_44545 = state_42298__$1;
(statearr_42342_44545[(1)] = (33));

} else {
var statearr_42343_44546 = state_42298__$1;
(statearr_42343_44546[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (25))){
var inst_42242 = (state_42298[(19)]);
var inst_42243 = (state_42298[(10)]);
var inst_42245 = (inst_42243 < inst_42242);
var inst_42246 = inst_42245;
var state_42298__$1 = state_42298;
if(cljs.core.truth_(inst_42246)){
var statearr_42344_44551 = state_42298__$1;
(statearr_42344_44551[(1)] = (27));

} else {
var statearr_42345_44552 = state_42298__$1;
(statearr_42345_44552[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (34))){
var state_42298__$1 = state_42298;
var statearr_42346_44553 = state_42298__$1;
(statearr_42346_44553[(2)] = null);

(statearr_42346_44553[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (17))){
var state_42298__$1 = state_42298;
var statearr_42347_44554 = state_42298__$1;
(statearr_42347_44554[(2)] = null);

(statearr_42347_44554[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (3))){
var inst_42296 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42298__$1,inst_42296);
} else {
if((state_val_42299 === (12))){
var inst_42227 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42348_44555 = state_42298__$1;
(statearr_42348_44555[(2)] = inst_42227);

(statearr_42348_44555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (2))){
var state_42298__$1 = state_42298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42298__$1,(4),ch);
} else {
if((state_val_42299 === (23))){
var state_42298__$1 = state_42298;
var statearr_42349_44559 = state_42298__$1;
(statearr_42349_44559[(2)] = null);

(statearr_42349_44559[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (35))){
var inst_42280 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42350_44563 = state_42298__$1;
(statearr_42350_44563[(2)] = inst_42280);

(statearr_42350_44563[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (19))){
var inst_42199 = (state_42298[(7)]);
var inst_42203 = cljs.core.chunk_first(inst_42199);
var inst_42204 = cljs.core.chunk_rest(inst_42199);
var inst_42205 = cljs.core.count(inst_42203);
var inst_42177 = inst_42204;
var inst_42178 = inst_42203;
var inst_42179 = inst_42205;
var inst_42180 = (0);
var state_42298__$1 = (function (){var statearr_42351 = state_42298;
(statearr_42351[(13)] = inst_42180);

(statearr_42351[(14)] = inst_42179);

(statearr_42351[(16)] = inst_42178);

(statearr_42351[(17)] = inst_42177);

return statearr_42351;
})();
var statearr_42352_44568 = state_42298__$1;
(statearr_42352_44568[(2)] = null);

(statearr_42352_44568[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (11))){
var inst_42199 = (state_42298[(7)]);
var inst_42177 = (state_42298[(17)]);
var inst_42199__$1 = cljs.core.seq(inst_42177);
var state_42298__$1 = (function (){var statearr_42353 = state_42298;
(statearr_42353[(7)] = inst_42199__$1);

return statearr_42353;
})();
if(inst_42199__$1){
var statearr_42354_44569 = state_42298__$1;
(statearr_42354_44569[(1)] = (16));

} else {
var statearr_42355_44571 = state_42298__$1;
(statearr_42355_44571[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (9))){
var inst_42229 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42356_44573 = state_42298__$1;
(statearr_42356_44573[(2)] = inst_42229);

(statearr_42356_44573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (5))){
var inst_42175 = cljs.core.deref(cs);
var inst_42176 = cljs.core.seq(inst_42175);
var inst_42177 = inst_42176;
var inst_42178 = null;
var inst_42179 = (0);
var inst_42180 = (0);
var state_42298__$1 = (function (){var statearr_42357 = state_42298;
(statearr_42357[(13)] = inst_42180);

(statearr_42357[(14)] = inst_42179);

(statearr_42357[(16)] = inst_42178);

(statearr_42357[(17)] = inst_42177);

return statearr_42357;
})();
var statearr_42358_44577 = state_42298__$1;
(statearr_42358_44577[(2)] = null);

(statearr_42358_44577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (14))){
var state_42298__$1 = state_42298;
var statearr_42359_44583 = state_42298__$1;
(statearr_42359_44583[(2)] = null);

(statearr_42359_44583[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (45))){
var inst_42288 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42360_44584 = state_42298__$1;
(statearr_42360_44584[(2)] = inst_42288);

(statearr_42360_44584[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (26))){
var inst_42232 = (state_42298[(27)]);
var inst_42284 = (state_42298[(2)]);
var inst_42285 = cljs.core.seq(inst_42232);
var state_42298__$1 = (function (){var statearr_42361 = state_42298;
(statearr_42361[(29)] = inst_42284);

return statearr_42361;
})();
if(inst_42285){
var statearr_42362_44588 = state_42298__$1;
(statearr_42362_44588[(1)] = (42));

} else {
var statearr_42363_44589 = state_42298__$1;
(statearr_42363_44589[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (16))){
var inst_42199 = (state_42298[(7)]);
var inst_42201 = cljs.core.chunked_seq_QMARK_(inst_42199);
var state_42298__$1 = state_42298;
if(inst_42201){
var statearr_42364_44590 = state_42298__$1;
(statearr_42364_44590[(1)] = (19));

} else {
var statearr_42365_44591 = state_42298__$1;
(statearr_42365_44591[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (38))){
var inst_42277 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42366_44595 = state_42298__$1;
(statearr_42366_44595[(2)] = inst_42277);

(statearr_42366_44595[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (30))){
var state_42298__$1 = state_42298;
var statearr_42367_44597 = state_42298__$1;
(statearr_42367_44597[(2)] = null);

(statearr_42367_44597[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (10))){
var inst_42180 = (state_42298[(13)]);
var inst_42178 = (state_42298[(16)]);
var inst_42188 = cljs.core._nth(inst_42178,inst_42180);
var inst_42189 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42188,(0),null);
var inst_42190 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42188,(1),null);
var state_42298__$1 = (function (){var statearr_42368 = state_42298;
(statearr_42368[(24)] = inst_42189);

return statearr_42368;
})();
if(cljs.core.truth_(inst_42190)){
var statearr_42369_44598 = state_42298__$1;
(statearr_42369_44598[(1)] = (13));

} else {
var statearr_42370_44599 = state_42298__$1;
(statearr_42370_44599[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (18))){
var inst_42225 = (state_42298[(2)]);
var state_42298__$1 = state_42298;
var statearr_42371_44601 = state_42298__$1;
(statearr_42371_44601[(2)] = inst_42225);

(statearr_42371_44601[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (42))){
var state_42298__$1 = state_42298;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42298__$1,(45),dchan);
} else {
if((state_val_42299 === (37))){
var inst_42258 = (state_42298[(23)]);
var inst_42164 = (state_42298[(12)]);
var inst_42267 = (state_42298[(22)]);
var inst_42267__$1 = cljs.core.first(inst_42258);
var inst_42268 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_42267__$1,inst_42164,done);
var state_42298__$1 = (function (){var statearr_42372 = state_42298;
(statearr_42372[(22)] = inst_42267__$1);

return statearr_42372;
})();
if(cljs.core.truth_(inst_42268)){
var statearr_42373_44604 = state_42298__$1;
(statearr_42373_44604[(1)] = (39));

} else {
var statearr_42374_44605 = state_42298__$1;
(statearr_42374_44605[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42299 === (8))){
var inst_42180 = (state_42298[(13)]);
var inst_42179 = (state_42298[(14)]);
var inst_42182 = (inst_42180 < inst_42179);
var inst_42183 = inst_42182;
var state_42298__$1 = state_42298;
if(cljs.core.truth_(inst_42183)){
var statearr_42375_44608 = state_42298__$1;
(statearr_42375_44608[(1)] = (10));

} else {
var statearr_42376_44609 = state_42298__$1;
(statearr_42376_44609[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__40848__auto__ = null;
var cljs$core$async$mult_$_state_machine__40848__auto____0 = (function (){
var statearr_42383 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42383[(0)] = cljs$core$async$mult_$_state_machine__40848__auto__);

(statearr_42383[(1)] = (1));

return statearr_42383;
});
var cljs$core$async$mult_$_state_machine__40848__auto____1 = (function (state_42298){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_42298);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e42384){var ex__40851__auto__ = e42384;
var statearr_42385_44616 = state_42298;
(statearr_42385_44616[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_42298[(4)]))){
var statearr_42387_44618 = state_42298;
(statearr_42387_44618[(1)] = cljs.core.first((state_42298[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44620 = state_42298;
state_42298 = G__44620;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__40848__auto__ = function(state_42298){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__40848__auto____1.call(this,state_42298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__40848__auto____0;
cljs$core$async$mult_$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__40848__auto____1;
return cljs$core$async$mult_$_state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_42392 = f__41126__auto__();
(statearr_42392[(6)] = c__41125__auto___44457);

return statearr_42392;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__42402 = arguments.length;
switch (G__42402) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_44626 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_44626(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_44628 = (function (m,ch){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4551__auto__.call(null,m,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4549__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_44628(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_44632 = (function (m){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4551__auto__.call(null,m));
} else {
var m__4549__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4549__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_44632(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_44634 = (function (m,state_map){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4551__auto__.call(null,m,state_map));
} else {
var m__4549__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4549__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_44634(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_44635 = (function (m,mode){
var x__4550__auto__ = (((m == null))?null:m);
var m__4551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4551__auto__.call(null,m,mode));
} else {
var m__4549__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4549__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_44635(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4870__auto__ = [];
var len__4864__auto___44638 = arguments.length;
var i__4865__auto___44639 = (0);
while(true){
if((i__4865__auto___44639 < len__4864__auto___44638)){
args__4870__auto__.push((arguments[i__4865__auto___44639]));

var G__44640 = (i__4865__auto___44639 + (1));
i__4865__auto___44639 = G__44640;
continue;
} else {
}
break;
}

var argseq__4871__auto__ = ((((3) < args__4870__auto__.length))?(new cljs.core.IndexedSeq(args__4870__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4871__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__42457){
var map__42459 = p__42457;
var map__42459__$1 = cljs.core.__destructure_map(map__42459);
var opts = map__42459__$1;
var statearr_42460_44642 = state;
(statearr_42460_44642[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_42461_44643 = state;
(statearr_42461_44643[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_42463_44644 = state;
(statearr_42463_44644[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq42445){
var G__42446 = cljs.core.first(seq42445);
var seq42445__$1 = cljs.core.next(seq42445);
var G__42447 = cljs.core.first(seq42445__$1);
var seq42445__$2 = cljs.core.next(seq42445__$1);
var G__42448 = cljs.core.first(seq42445__$2);
var seq42445__$3 = cljs.core.next(seq42445__$2);
var self__4851__auto__ = this;
return self__4851__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42446,G__42447,G__42448,seq42445__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42493 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42494){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta42494 = meta42494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42495,meta42494__$1){
var self__ = this;
var _42495__$1 = this;
return (new cljs.core.async.t_cljs$core$async42493(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42494__$1));
}));

(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42495){
var self__ = this;
var _42495__$1 = this;
return self__.meta42494;
}));

(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42493.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async42493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta42494","meta42494",479661301,null)], null);
}));

(cljs.core.async.t_cljs$core$async42493.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42493.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42493");

(cljs.core.async.t_cljs$core$async42493.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42493");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42493.
 */
cljs.core.async.__GT_t_cljs$core$async42493 = (function cljs$core$async$mix_$___GT_t_cljs$core$async42493(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42494){
return (new cljs.core.async.t_cljs$core$async42493(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42494));
});

}

return (new cljs.core.async.t_cljs$core$async42493(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41125__auto___44661 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_42589){
var state_val_42590 = (state_42589[(1)]);
if((state_val_42590 === (7))){
var inst_42542 = (state_42589[(2)]);
var state_42589__$1 = state_42589;
if(cljs.core.truth_(inst_42542)){
var statearr_42594_44663 = state_42589__$1;
(statearr_42594_44663[(1)] = (8));

} else {
var statearr_42595_44664 = state_42589__$1;
(statearr_42595_44664[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (20))){
var inst_42533 = (state_42589[(7)]);
var state_42589__$1 = state_42589;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42589__$1,(23),out,inst_42533);
} else {
if((state_val_42590 === (1))){
var inst_42514 = calc_state();
var inst_42515 = cljs.core.__destructure_map(inst_42514);
var inst_42516 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42515,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42517 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42515,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42518 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42515,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_42520 = inst_42514;
var state_42589__$1 = (function (){var statearr_42597 = state_42589;
(statearr_42597[(8)] = inst_42518);

(statearr_42597[(9)] = inst_42520);

(statearr_42597[(10)] = inst_42516);

(statearr_42597[(11)] = inst_42517);

return statearr_42597;
})();
var statearr_42598_44667 = state_42589__$1;
(statearr_42598_44667[(2)] = null);

(statearr_42598_44667[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (24))){
var inst_42523 = (state_42589[(12)]);
var inst_42520 = inst_42523;
var state_42589__$1 = (function (){var statearr_42601 = state_42589;
(statearr_42601[(9)] = inst_42520);

return statearr_42601;
})();
var statearr_42602_44668 = state_42589__$1;
(statearr_42602_44668[(2)] = null);

(statearr_42602_44668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (4))){
var inst_42533 = (state_42589[(7)]);
var inst_42536 = (state_42589[(13)]);
var inst_42532 = (state_42589[(2)]);
var inst_42533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42532,(0),null);
var inst_42534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_42532,(1),null);
var inst_42536__$1 = (inst_42533__$1 == null);
var state_42589__$1 = (function (){var statearr_42609 = state_42589;
(statearr_42609[(7)] = inst_42533__$1);

(statearr_42609[(13)] = inst_42536__$1);

(statearr_42609[(14)] = inst_42534);

return statearr_42609;
})();
if(cljs.core.truth_(inst_42536__$1)){
var statearr_42613_44670 = state_42589__$1;
(statearr_42613_44670[(1)] = (5));

} else {
var statearr_42614_44671 = state_42589__$1;
(statearr_42614_44671[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (15))){
var inst_42563 = (state_42589[(15)]);
var inst_42524 = (state_42589[(16)]);
var inst_42563__$1 = cljs.core.empty_QMARK_(inst_42524);
var state_42589__$1 = (function (){var statearr_42615 = state_42589;
(statearr_42615[(15)] = inst_42563__$1);

return statearr_42615;
})();
if(inst_42563__$1){
var statearr_42616_44675 = state_42589__$1;
(statearr_42616_44675[(1)] = (17));

} else {
var statearr_42617_44676 = state_42589__$1;
(statearr_42617_44676[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (21))){
var inst_42523 = (state_42589[(12)]);
var inst_42520 = inst_42523;
var state_42589__$1 = (function (){var statearr_42620 = state_42589;
(statearr_42620[(9)] = inst_42520);

return statearr_42620;
})();
var statearr_42621_44679 = state_42589__$1;
(statearr_42621_44679[(2)] = null);

(statearr_42621_44679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (13))){
var inst_42552 = (state_42589[(2)]);
var inst_42554 = calc_state();
var inst_42520 = inst_42554;
var state_42589__$1 = (function (){var statearr_42624 = state_42589;
(statearr_42624[(9)] = inst_42520);

(statearr_42624[(17)] = inst_42552);

return statearr_42624;
})();
var statearr_42625_44680 = state_42589__$1;
(statearr_42625_44680[(2)] = null);

(statearr_42625_44680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (22))){
var inst_42583 = (state_42589[(2)]);
var state_42589__$1 = state_42589;
var statearr_42630_44681 = state_42589__$1;
(statearr_42630_44681[(2)] = inst_42583);

(statearr_42630_44681[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (6))){
var inst_42534 = (state_42589[(14)]);
var inst_42540 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_42534,change);
var state_42589__$1 = state_42589;
var statearr_42635_44682 = state_42589__$1;
(statearr_42635_44682[(2)] = inst_42540);

(statearr_42635_44682[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (25))){
var state_42589__$1 = state_42589;
var statearr_42640_44684 = state_42589__$1;
(statearr_42640_44684[(2)] = null);

(statearr_42640_44684[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (17))){
var inst_42525 = (state_42589[(18)]);
var inst_42534 = (state_42589[(14)]);
var inst_42565 = (inst_42525.cljs$core$IFn$_invoke$arity$1 ? inst_42525.cljs$core$IFn$_invoke$arity$1(inst_42534) : inst_42525.call(null,inst_42534));
var inst_42566 = cljs.core.not(inst_42565);
var state_42589__$1 = state_42589;
var statearr_42641_44686 = state_42589__$1;
(statearr_42641_44686[(2)] = inst_42566);

(statearr_42641_44686[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (3))){
var inst_42587 = (state_42589[(2)]);
var state_42589__$1 = state_42589;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42589__$1,inst_42587);
} else {
if((state_val_42590 === (12))){
var state_42589__$1 = state_42589;
var statearr_42642_44690 = state_42589__$1;
(statearr_42642_44690[(2)] = null);

(statearr_42642_44690[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (2))){
var inst_42523 = (state_42589[(12)]);
var inst_42520 = (state_42589[(9)]);
var inst_42523__$1 = cljs.core.__destructure_map(inst_42520);
var inst_42524 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42523__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_42525 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42523__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_42526 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42523__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_42589__$1 = (function (){var statearr_42643 = state_42589;
(statearr_42643[(18)] = inst_42525);

(statearr_42643[(12)] = inst_42523__$1);

(statearr_42643[(16)] = inst_42524);

return statearr_42643;
})();
return cljs.core.async.ioc_alts_BANG_(state_42589__$1,(4),inst_42526);
} else {
if((state_val_42590 === (23))){
var inst_42574 = (state_42589[(2)]);
var state_42589__$1 = state_42589;
if(cljs.core.truth_(inst_42574)){
var statearr_42644_44695 = state_42589__$1;
(statearr_42644_44695[(1)] = (24));

} else {
var statearr_42645_44696 = state_42589__$1;
(statearr_42645_44696[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (19))){
var inst_42569 = (state_42589[(2)]);
var state_42589__$1 = state_42589;
var statearr_42646_44697 = state_42589__$1;
(statearr_42646_44697[(2)] = inst_42569);

(statearr_42646_44697[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (11))){
var inst_42534 = (state_42589[(14)]);
var inst_42548 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_42534);
var state_42589__$1 = state_42589;
var statearr_42647_44698 = state_42589__$1;
(statearr_42647_44698[(2)] = inst_42548);

(statearr_42647_44698[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (9))){
var inst_42534 = (state_42589[(14)]);
var inst_42524 = (state_42589[(16)]);
var inst_42558 = (state_42589[(19)]);
var inst_42558__$1 = (inst_42524.cljs$core$IFn$_invoke$arity$1 ? inst_42524.cljs$core$IFn$_invoke$arity$1(inst_42534) : inst_42524.call(null,inst_42534));
var state_42589__$1 = (function (){var statearr_42648 = state_42589;
(statearr_42648[(19)] = inst_42558__$1);

return statearr_42648;
})();
if(cljs.core.truth_(inst_42558__$1)){
var statearr_42649_44704 = state_42589__$1;
(statearr_42649_44704[(1)] = (14));

} else {
var statearr_42650_44705 = state_42589__$1;
(statearr_42650_44705[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (5))){
var inst_42536 = (state_42589[(13)]);
var state_42589__$1 = state_42589;
var statearr_42651_44706 = state_42589__$1;
(statearr_42651_44706[(2)] = inst_42536);

(statearr_42651_44706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (14))){
var inst_42558 = (state_42589[(19)]);
var state_42589__$1 = state_42589;
var statearr_42652_44707 = state_42589__$1;
(statearr_42652_44707[(2)] = inst_42558);

(statearr_42652_44707[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (26))){
var inst_42579 = (state_42589[(2)]);
var state_42589__$1 = state_42589;
var statearr_42653_44709 = state_42589__$1;
(statearr_42653_44709[(2)] = inst_42579);

(statearr_42653_44709[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (16))){
var inst_42571 = (state_42589[(2)]);
var state_42589__$1 = state_42589;
if(cljs.core.truth_(inst_42571)){
var statearr_42654_44710 = state_42589__$1;
(statearr_42654_44710[(1)] = (20));

} else {
var statearr_42655_44711 = state_42589__$1;
(statearr_42655_44711[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (10))){
var inst_42585 = (state_42589[(2)]);
var state_42589__$1 = state_42589;
var statearr_42656_44712 = state_42589__$1;
(statearr_42656_44712[(2)] = inst_42585);

(statearr_42656_44712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (18))){
var inst_42563 = (state_42589[(15)]);
var state_42589__$1 = state_42589;
var statearr_42657_44714 = state_42589__$1;
(statearr_42657_44714[(2)] = inst_42563);

(statearr_42657_44714[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42590 === (8))){
var inst_42533 = (state_42589[(7)]);
var inst_42546 = (inst_42533 == null);
var state_42589__$1 = state_42589;
if(cljs.core.truth_(inst_42546)){
var statearr_42658_44715 = state_42589__$1;
(statearr_42658_44715[(1)] = (11));

} else {
var statearr_42659_44717 = state_42589__$1;
(statearr_42659_44717[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__40848__auto__ = null;
var cljs$core$async$mix_$_state_machine__40848__auto____0 = (function (){
var statearr_42660 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42660[(0)] = cljs$core$async$mix_$_state_machine__40848__auto__);

(statearr_42660[(1)] = (1));

return statearr_42660;
});
var cljs$core$async$mix_$_state_machine__40848__auto____1 = (function (state_42589){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_42589);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e42661){var ex__40851__auto__ = e42661;
var statearr_42662_44720 = state_42589;
(statearr_42662_44720[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_42589[(4)]))){
var statearr_42663_44721 = state_42589;
(statearr_42663_44721[(1)] = cljs.core.first((state_42589[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44722 = state_42589;
state_42589 = G__44722;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__40848__auto__ = function(state_42589){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__40848__auto____1.call(this,state_42589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__40848__auto____0;
cljs$core$async$mix_$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__40848__auto____1;
return cljs$core$async$mix_$_state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_42664 = f__41126__auto__();
(statearr_42664[(6)] = c__41125__auto___44661);

return statearr_42664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_44727 = (function (p,v,ch,close_QMARK_){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4551__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4549__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4549__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_44727(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_44731 = (function (p,v,ch){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4551__auto__.call(null,p,v,ch));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4549__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_44731(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_44737 = (function() {
var G__44738 = null;
var G__44738__1 = (function (p){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4551__auto__.call(null,p));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4549__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__44738__2 = (function (p,v){
var x__4550__auto__ = (((p == null))?null:p);
var m__4551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4550__auto__)]);
if((!((m__4551__auto__ == null)))){
return (m__4551__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4551__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4551__auto__.call(null,p,v));
} else {
var m__4549__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4549__auto__ == null)))){
return (m__4549__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4549__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4549__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__44738 = function(p,v){
switch(arguments.length){
case 1:
return G__44738__1.call(this,p);
case 2:
return G__44738__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__44738.cljs$core$IFn$_invoke$arity$1 = G__44738__1;
G__44738.cljs$core$IFn$_invoke$arity$2 = G__44738__2;
return G__44738;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__42666 = arguments.length;
switch (G__42666) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44737(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_44737(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__42669 = arguments.length;
switch (G__42669) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4253__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__42667_SHARP_){
if(cljs.core.truth_((p1__42667_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__42667_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__42667_SHARP_.call(null,topic)))){
return p1__42667_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__42667_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async42670 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async42670 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta42671){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta42671 = meta42671;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async42670.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42672,meta42671__$1){
var self__ = this;
var _42672__$1 = this;
return (new cljs.core.async.t_cljs$core$async42670(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta42671__$1));
}));

(cljs.core.async.t_cljs$core$async42670.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42672){
var self__ = this;
var _42672__$1 = this;
return self__.meta42671;
}));

(cljs.core.async.t_cljs$core$async42670.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42670.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async42670.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async42670.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async42670.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async42670.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async42670.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async42670.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta42671","meta42671",-562533943,null)], null);
}));

(cljs.core.async.t_cljs$core$async42670.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async42670.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async42670");

(cljs.core.async.t_cljs$core$async42670.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async42670");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async42670.
 */
cljs.core.async.__GT_t_cljs$core$async42670 = (function cljs$core$async$__GT_t_cljs$core$async42670(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42671){
return (new cljs.core.async.t_cljs$core$async42670(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta42671));
});

}

return (new cljs.core.async.t_cljs$core$async42670(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41125__auto___44759 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_42765){
var state_val_42766 = (state_42765[(1)]);
if((state_val_42766 === (7))){
var inst_42761 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
var statearr_42771_44761 = state_42765__$1;
(statearr_42771_44761[(2)] = inst_42761);

(statearr_42771_44761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (20))){
var state_42765__$1 = state_42765;
var statearr_42773_44762 = state_42765__$1;
(statearr_42773_44762[(2)] = null);

(statearr_42773_44762[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (1))){
var state_42765__$1 = state_42765;
var statearr_42776_44763 = state_42765__$1;
(statearr_42776_44763[(2)] = null);

(statearr_42776_44763[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (24))){
var inst_42743 = (state_42765[(7)]);
var inst_42752 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_42743);
var state_42765__$1 = state_42765;
var statearr_42780_44765 = state_42765__$1;
(statearr_42780_44765[(2)] = inst_42752);

(statearr_42780_44765[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (4))){
var inst_42691 = (state_42765[(8)]);
var inst_42691__$1 = (state_42765[(2)]);
var inst_42692 = (inst_42691__$1 == null);
var state_42765__$1 = (function (){var statearr_42785 = state_42765;
(statearr_42785[(8)] = inst_42691__$1);

return statearr_42785;
})();
if(cljs.core.truth_(inst_42692)){
var statearr_42786_44767 = state_42765__$1;
(statearr_42786_44767[(1)] = (5));

} else {
var statearr_42788_44768 = state_42765__$1;
(statearr_42788_44768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (15))){
var inst_42737 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
var statearr_42793_44769 = state_42765__$1;
(statearr_42793_44769[(2)] = inst_42737);

(statearr_42793_44769[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (21))){
var inst_42758 = (state_42765[(2)]);
var state_42765__$1 = (function (){var statearr_42794 = state_42765;
(statearr_42794[(9)] = inst_42758);

return statearr_42794;
})();
var statearr_42796_44771 = state_42765__$1;
(statearr_42796_44771[(2)] = null);

(statearr_42796_44771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (13))){
var inst_42716 = (state_42765[(10)]);
var inst_42720 = cljs.core.chunked_seq_QMARK_(inst_42716);
var state_42765__$1 = state_42765;
if(inst_42720){
var statearr_42798_44772 = state_42765__$1;
(statearr_42798_44772[(1)] = (16));

} else {
var statearr_42800_44774 = state_42765__$1;
(statearr_42800_44774[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (22))){
var inst_42749 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
if(cljs.core.truth_(inst_42749)){
var statearr_42804_44776 = state_42765__$1;
(statearr_42804_44776[(1)] = (23));

} else {
var statearr_42806_44777 = state_42765__$1;
(statearr_42806_44777[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (6))){
var inst_42691 = (state_42765[(8)]);
var inst_42743 = (state_42765[(7)]);
var inst_42745 = (state_42765[(11)]);
var inst_42743__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_42691) : topic_fn.call(null,inst_42691));
var inst_42744 = cljs.core.deref(mults);
var inst_42745__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42744,inst_42743__$1);
var state_42765__$1 = (function (){var statearr_42810 = state_42765;
(statearr_42810[(7)] = inst_42743__$1);

(statearr_42810[(11)] = inst_42745__$1);

return statearr_42810;
})();
if(cljs.core.truth_(inst_42745__$1)){
var statearr_42811_44779 = state_42765__$1;
(statearr_42811_44779[(1)] = (19));

} else {
var statearr_42812_44780 = state_42765__$1;
(statearr_42812_44780[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (25))){
var inst_42754 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
var statearr_42815_44781 = state_42765__$1;
(statearr_42815_44781[(2)] = inst_42754);

(statearr_42815_44781[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (17))){
var inst_42716 = (state_42765[(10)]);
var inst_42728 = cljs.core.first(inst_42716);
var inst_42729 = cljs.core.async.muxch_STAR_(inst_42728);
var inst_42730 = cljs.core.async.close_BANG_(inst_42729);
var inst_42731 = cljs.core.next(inst_42716);
var inst_42701 = inst_42731;
var inst_42702 = null;
var inst_42703 = (0);
var inst_42704 = (0);
var state_42765__$1 = (function (){var statearr_42823 = state_42765;
(statearr_42823[(12)] = inst_42730);

(statearr_42823[(13)] = inst_42703);

(statearr_42823[(14)] = inst_42704);

(statearr_42823[(15)] = inst_42702);

(statearr_42823[(16)] = inst_42701);

return statearr_42823;
})();
var statearr_42824_44784 = state_42765__$1;
(statearr_42824_44784[(2)] = null);

(statearr_42824_44784[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (3))){
var inst_42763 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42765__$1,inst_42763);
} else {
if((state_val_42766 === (12))){
var inst_42739 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
var statearr_42826_44785 = state_42765__$1;
(statearr_42826_44785[(2)] = inst_42739);

(statearr_42826_44785[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (2))){
var state_42765__$1 = state_42765;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42765__$1,(4),ch);
} else {
if((state_val_42766 === (23))){
var state_42765__$1 = state_42765;
var statearr_42831_44786 = state_42765__$1;
(statearr_42831_44786[(2)] = null);

(statearr_42831_44786[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (19))){
var inst_42691 = (state_42765[(8)]);
var inst_42745 = (state_42765[(11)]);
var inst_42747 = cljs.core.async.muxch_STAR_(inst_42745);
var state_42765__$1 = state_42765;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42765__$1,(22),inst_42747,inst_42691);
} else {
if((state_val_42766 === (11))){
var inst_42716 = (state_42765[(10)]);
var inst_42701 = (state_42765[(16)]);
var inst_42716__$1 = cljs.core.seq(inst_42701);
var state_42765__$1 = (function (){var statearr_42837 = state_42765;
(statearr_42837[(10)] = inst_42716__$1);

return statearr_42837;
})();
if(inst_42716__$1){
var statearr_42838_44792 = state_42765__$1;
(statearr_42838_44792[(1)] = (13));

} else {
var statearr_42839_44793 = state_42765__$1;
(statearr_42839_44793[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (9))){
var inst_42741 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
var statearr_42840_44794 = state_42765__$1;
(statearr_42840_44794[(2)] = inst_42741);

(statearr_42840_44794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (5))){
var inst_42698 = cljs.core.deref(mults);
var inst_42699 = cljs.core.vals(inst_42698);
var inst_42700 = cljs.core.seq(inst_42699);
var inst_42701 = inst_42700;
var inst_42702 = null;
var inst_42703 = (0);
var inst_42704 = (0);
var state_42765__$1 = (function (){var statearr_42844 = state_42765;
(statearr_42844[(13)] = inst_42703);

(statearr_42844[(14)] = inst_42704);

(statearr_42844[(15)] = inst_42702);

(statearr_42844[(16)] = inst_42701);

return statearr_42844;
})();
var statearr_42845_44796 = state_42765__$1;
(statearr_42845_44796[(2)] = null);

(statearr_42845_44796[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (14))){
var state_42765__$1 = state_42765;
var statearr_42853_44797 = state_42765__$1;
(statearr_42853_44797[(2)] = null);

(statearr_42853_44797[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (16))){
var inst_42716 = (state_42765[(10)]);
var inst_42723 = cljs.core.chunk_first(inst_42716);
var inst_42724 = cljs.core.chunk_rest(inst_42716);
var inst_42725 = cljs.core.count(inst_42723);
var inst_42701 = inst_42724;
var inst_42702 = inst_42723;
var inst_42703 = inst_42725;
var inst_42704 = (0);
var state_42765__$1 = (function (){var statearr_42855 = state_42765;
(statearr_42855[(13)] = inst_42703);

(statearr_42855[(14)] = inst_42704);

(statearr_42855[(15)] = inst_42702);

(statearr_42855[(16)] = inst_42701);

return statearr_42855;
})();
var statearr_42858_44800 = state_42765__$1;
(statearr_42858_44800[(2)] = null);

(statearr_42858_44800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (10))){
var inst_42703 = (state_42765[(13)]);
var inst_42704 = (state_42765[(14)]);
var inst_42702 = (state_42765[(15)]);
var inst_42701 = (state_42765[(16)]);
var inst_42709 = cljs.core._nth(inst_42702,inst_42704);
var inst_42710 = cljs.core.async.muxch_STAR_(inst_42709);
var inst_42711 = cljs.core.async.close_BANG_(inst_42710);
var inst_42712 = (inst_42704 + (1));
var tmp42849 = inst_42703;
var tmp42850 = inst_42702;
var tmp42851 = inst_42701;
var inst_42701__$1 = tmp42851;
var inst_42702__$1 = tmp42850;
var inst_42703__$1 = tmp42849;
var inst_42704__$1 = inst_42712;
var state_42765__$1 = (function (){var statearr_42864 = state_42765;
(statearr_42864[(13)] = inst_42703__$1);

(statearr_42864[(14)] = inst_42704__$1);

(statearr_42864[(15)] = inst_42702__$1);

(statearr_42864[(16)] = inst_42701__$1);

(statearr_42864[(17)] = inst_42711);

return statearr_42864;
})();
var statearr_42865_44804 = state_42765__$1;
(statearr_42865_44804[(2)] = null);

(statearr_42865_44804[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (18))){
var inst_42734 = (state_42765[(2)]);
var state_42765__$1 = state_42765;
var statearr_42870_44805 = state_42765__$1;
(statearr_42870_44805[(2)] = inst_42734);

(statearr_42870_44805[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42766 === (8))){
var inst_42703 = (state_42765[(13)]);
var inst_42704 = (state_42765[(14)]);
var inst_42706 = (inst_42704 < inst_42703);
var inst_42707 = inst_42706;
var state_42765__$1 = state_42765;
if(cljs.core.truth_(inst_42707)){
var statearr_42874_44811 = state_42765__$1;
(statearr_42874_44811[(1)] = (10));

} else {
var statearr_42877_44813 = state_42765__$1;
(statearr_42877_44813[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_42883 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42883[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_42883[(1)] = (1));

return statearr_42883;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_42765){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_42765);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e42886){var ex__40851__auto__ = e42886;
var statearr_42887_44814 = state_42765;
(statearr_42887_44814[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_42765[(4)]))){
var statearr_42889_44817 = state_42765;
(statearr_42889_44817[(1)] = cljs.core.first((state_42765[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44818 = state_42765;
state_42765 = G__44818;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_42765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_42765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_42892 = f__41126__auto__();
(statearr_42892[(6)] = c__41125__auto___44759);

return statearr_42892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__42898 = arguments.length;
switch (G__42898) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__42908 = arguments.length;
switch (G__42908) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__42915 = arguments.length;
switch (G__42915) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__41125__auto___44832 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_42976){
var state_val_42977 = (state_42976[(1)]);
if((state_val_42977 === (7))){
var state_42976__$1 = state_42976;
var statearr_42981_44833 = state_42976__$1;
(statearr_42981_44833[(2)] = null);

(statearr_42981_44833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (1))){
var state_42976__$1 = state_42976;
var statearr_42984_44835 = state_42976__$1;
(statearr_42984_44835[(2)] = null);

(statearr_42984_44835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (4))){
var inst_42928 = (state_42976[(7)]);
var inst_42929 = (state_42976[(8)]);
var inst_42931 = (inst_42929 < inst_42928);
var state_42976__$1 = state_42976;
if(cljs.core.truth_(inst_42931)){
var statearr_42989_44836 = state_42976__$1;
(statearr_42989_44836[(1)] = (6));

} else {
var statearr_42990_44837 = state_42976__$1;
(statearr_42990_44837[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (15))){
var inst_42960 = (state_42976[(9)]);
var inst_42965 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_42960);
var state_42976__$1 = state_42976;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_42976__$1,(17),out,inst_42965);
} else {
if((state_val_42977 === (13))){
var inst_42960 = (state_42976[(9)]);
var inst_42960__$1 = (state_42976[(2)]);
var inst_42961 = cljs.core.some(cljs.core.nil_QMARK_,inst_42960__$1);
var state_42976__$1 = (function (){var statearr_42995 = state_42976;
(statearr_42995[(9)] = inst_42960__$1);

return statearr_42995;
})();
if(cljs.core.truth_(inst_42961)){
var statearr_42996_44839 = state_42976__$1;
(statearr_42996_44839[(1)] = (14));

} else {
var statearr_42997_44840 = state_42976__$1;
(statearr_42997_44840[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (6))){
var state_42976__$1 = state_42976;
var statearr_42998_44841 = state_42976__$1;
(statearr_42998_44841[(2)] = null);

(statearr_42998_44841[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (17))){
var inst_42967 = (state_42976[(2)]);
var state_42976__$1 = (function (){var statearr_43005 = state_42976;
(statearr_43005[(10)] = inst_42967);

return statearr_43005;
})();
var statearr_43008_44842 = state_42976__$1;
(statearr_43008_44842[(2)] = null);

(statearr_43008_44842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (3))){
var inst_42972 = (state_42976[(2)]);
var state_42976__$1 = state_42976;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42976__$1,inst_42972);
} else {
if((state_val_42977 === (12))){
var _ = (function (){var statearr_43009 = state_42976;
(statearr_43009[(4)] = cljs.core.rest((state_42976[(4)])));

return statearr_43009;
})();
var state_42976__$1 = state_42976;
var ex43002 = (state_42976__$1[(2)]);
var statearr_43016_44845 = state_42976__$1;
(statearr_43016_44845[(5)] = ex43002);


if((ex43002 instanceof Object)){
var statearr_43020_44846 = state_42976__$1;
(statearr_43020_44846[(1)] = (11));

(statearr_43020_44846[(5)] = null);

} else {
throw ex43002;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (2))){
var inst_42927 = cljs.core.reset_BANG_(dctr,cnt);
var inst_42928 = cnt;
var inst_42929 = (0);
var state_42976__$1 = (function (){var statearr_43024 = state_42976;
(statearr_43024[(7)] = inst_42928);

(statearr_43024[(8)] = inst_42929);

(statearr_43024[(11)] = inst_42927);

return statearr_43024;
})();
var statearr_43026_44851 = state_42976__$1;
(statearr_43026_44851[(2)] = null);

(statearr_43026_44851[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (11))){
var inst_42938 = (state_42976[(2)]);
var inst_42939 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_42976__$1 = (function (){var statearr_43029 = state_42976;
(statearr_43029[(12)] = inst_42938);

return statearr_43029;
})();
var statearr_43032_44853 = state_42976__$1;
(statearr_43032_44853[(2)] = inst_42939);

(statearr_43032_44853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (9))){
var inst_42929 = (state_42976[(8)]);
var _ = (function (){var statearr_43033 = state_42976;
(statearr_43033[(4)] = cljs.core.cons((12),(state_42976[(4)])));

return statearr_43033;
})();
var inst_42945 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_42929) : chs__$1.call(null,inst_42929));
var inst_42946 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_42929) : done.call(null,inst_42929));
var inst_42947 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_42945,inst_42946);
var ___$1 = (function (){var statearr_43034 = state_42976;
(statearr_43034[(4)] = cljs.core.rest((state_42976[(4)])));

return statearr_43034;
})();
var state_42976__$1 = state_42976;
var statearr_43038_44859 = state_42976__$1;
(statearr_43038_44859[(2)] = inst_42947);

(statearr_43038_44859[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (5))){
var inst_42957 = (state_42976[(2)]);
var state_42976__$1 = (function (){var statearr_43039 = state_42976;
(statearr_43039[(13)] = inst_42957);

return statearr_43039;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42976__$1,(13),dchan);
} else {
if((state_val_42977 === (14))){
var inst_42963 = cljs.core.async.close_BANG_(out);
var state_42976__$1 = state_42976;
var statearr_43041_44866 = state_42976__$1;
(statearr_43041_44866[(2)] = inst_42963);

(statearr_43041_44866[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (16))){
var inst_42970 = (state_42976[(2)]);
var state_42976__$1 = state_42976;
var statearr_43044_44869 = state_42976__$1;
(statearr_43044_44869[(2)] = inst_42970);

(statearr_43044_44869[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (10))){
var inst_42929 = (state_42976[(8)]);
var inst_42950 = (state_42976[(2)]);
var inst_42951 = (inst_42929 + (1));
var inst_42929__$1 = inst_42951;
var state_42976__$1 = (function (){var statearr_43047 = state_42976;
(statearr_43047[(8)] = inst_42929__$1);

(statearr_43047[(14)] = inst_42950);

return statearr_43047;
})();
var statearr_43048_44870 = state_42976__$1;
(statearr_43048_44870[(2)] = null);

(statearr_43048_44870[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42977 === (8))){
var inst_42955 = (state_42976[(2)]);
var state_42976__$1 = state_42976;
var statearr_43049_44873 = state_42976__$1;
(statearr_43049_44873[(2)] = inst_42955);

(statearr_43049_44873[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_43055 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43055[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_43055[(1)] = (1));

return statearr_43055;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_42976){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_42976);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e43058){var ex__40851__auto__ = e43058;
var statearr_43059_44882 = state_42976;
(statearr_43059_44882[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_42976[(4)]))){
var statearr_43060_44885 = state_42976;
(statearr_43060_44885[(1)] = cljs.core.first((state_42976[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44887 = state_42976;
state_42976 = G__44887;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_42976){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_42976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_43064 = f__41126__auto__();
(statearr_43064[(6)] = c__41125__auto___44832);

return statearr_43064;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__43075 = arguments.length;
switch (G__43075) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41125__auto___44894 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_43124){
var state_val_43125 = (state_43124[(1)]);
if((state_val_43125 === (7))){
var inst_43101 = (state_43124[(7)]);
var inst_43102 = (state_43124[(8)]);
var inst_43101__$1 = (state_43124[(2)]);
var inst_43102__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43101__$1,(0),null);
var inst_43103 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_43101__$1,(1),null);
var inst_43104 = (inst_43102__$1 == null);
var state_43124__$1 = (function (){var statearr_43129 = state_43124;
(statearr_43129[(9)] = inst_43103);

(statearr_43129[(7)] = inst_43101__$1);

(statearr_43129[(8)] = inst_43102__$1);

return statearr_43129;
})();
if(cljs.core.truth_(inst_43104)){
var statearr_43131_44895 = state_43124__$1;
(statearr_43131_44895[(1)] = (8));

} else {
var statearr_43132_44897 = state_43124__$1;
(statearr_43132_44897[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43125 === (1))){
var inst_43090 = cljs.core.vec(chs);
var inst_43091 = inst_43090;
var state_43124__$1 = (function (){var statearr_43134 = state_43124;
(statearr_43134[(10)] = inst_43091);

return statearr_43134;
})();
var statearr_43135_44901 = state_43124__$1;
(statearr_43135_44901[(2)] = null);

(statearr_43135_44901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43125 === (4))){
var inst_43091 = (state_43124[(10)]);
var state_43124__$1 = state_43124;
return cljs.core.async.ioc_alts_BANG_(state_43124__$1,(7),inst_43091);
} else {
if((state_val_43125 === (6))){
var inst_43119 = (state_43124[(2)]);
var state_43124__$1 = state_43124;
var statearr_43140_44903 = state_43124__$1;
(statearr_43140_44903[(2)] = inst_43119);

(statearr_43140_44903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43125 === (3))){
var inst_43121 = (state_43124[(2)]);
var state_43124__$1 = state_43124;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43124__$1,inst_43121);
} else {
if((state_val_43125 === (2))){
var inst_43091 = (state_43124[(10)]);
var inst_43093 = cljs.core.count(inst_43091);
var inst_43094 = (inst_43093 > (0));
var state_43124__$1 = state_43124;
if(cljs.core.truth_(inst_43094)){
var statearr_43146_44907 = state_43124__$1;
(statearr_43146_44907[(1)] = (4));

} else {
var statearr_43147_44908 = state_43124__$1;
(statearr_43147_44908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43125 === (11))){
var inst_43091 = (state_43124[(10)]);
var inst_43111 = (state_43124[(2)]);
var tmp43141 = inst_43091;
var inst_43091__$1 = tmp43141;
var state_43124__$1 = (function (){var statearr_43148 = state_43124;
(statearr_43148[(10)] = inst_43091__$1);

(statearr_43148[(11)] = inst_43111);

return statearr_43148;
})();
var statearr_43149_44910 = state_43124__$1;
(statearr_43149_44910[(2)] = null);

(statearr_43149_44910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43125 === (9))){
var inst_43102 = (state_43124[(8)]);
var state_43124__$1 = state_43124;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43124__$1,(11),out,inst_43102);
} else {
if((state_val_43125 === (5))){
var inst_43117 = cljs.core.async.close_BANG_(out);
var state_43124__$1 = state_43124;
var statearr_43158_44915 = state_43124__$1;
(statearr_43158_44915[(2)] = inst_43117);

(statearr_43158_44915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43125 === (10))){
var inst_43114 = (state_43124[(2)]);
var state_43124__$1 = state_43124;
var statearr_43162_44917 = state_43124__$1;
(statearr_43162_44917[(2)] = inst_43114);

(statearr_43162_44917[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43125 === (8))){
var inst_43103 = (state_43124[(9)]);
var inst_43091 = (state_43124[(10)]);
var inst_43101 = (state_43124[(7)]);
var inst_43102 = (state_43124[(8)]);
var inst_43106 = (function (){var cs = inst_43091;
var vec__43097 = inst_43101;
var v = inst_43102;
var c = inst_43103;
return (function (p1__43068_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__43068_SHARP_);
});
})();
var inst_43107 = cljs.core.filterv(inst_43106,inst_43091);
var inst_43091__$1 = inst_43107;
var state_43124__$1 = (function (){var statearr_43169 = state_43124;
(statearr_43169[(10)] = inst_43091__$1);

return statearr_43169;
})();
var statearr_43172_44919 = state_43124__$1;
(statearr_43172_44919[(2)] = null);

(statearr_43172_44919[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_43178 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43178[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_43178[(1)] = (1));

return statearr_43178;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_43124){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_43124);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e43184){var ex__40851__auto__ = e43184;
var statearr_43185_44927 = state_43124;
(statearr_43185_44927[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_43124[(4)]))){
var statearr_43186_44928 = state_43124;
(statearr_43186_44928[(1)] = cljs.core.first((state_43124[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44931 = state_43124;
state_43124 = G__44931;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_43124){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_43124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_43193 = f__41126__auto__();
(statearr_43193[(6)] = c__41125__auto___44894);

return statearr_43193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__43203 = arguments.length;
switch (G__43203) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41125__auto___44934 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_43231){
var state_val_43232 = (state_43231[(1)]);
if((state_val_43232 === (7))){
var inst_43213 = (state_43231[(7)]);
var inst_43213__$1 = (state_43231[(2)]);
var inst_43214 = (inst_43213__$1 == null);
var inst_43215 = cljs.core.not(inst_43214);
var state_43231__$1 = (function (){var statearr_43238 = state_43231;
(statearr_43238[(7)] = inst_43213__$1);

return statearr_43238;
})();
if(inst_43215){
var statearr_43239_44939 = state_43231__$1;
(statearr_43239_44939[(1)] = (8));

} else {
var statearr_43241_44940 = state_43231__$1;
(statearr_43241_44940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (1))){
var inst_43208 = (0);
var state_43231__$1 = (function (){var statearr_43243 = state_43231;
(statearr_43243[(8)] = inst_43208);

return statearr_43243;
})();
var statearr_43244_44942 = state_43231__$1;
(statearr_43244_44942[(2)] = null);

(statearr_43244_44942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (4))){
var state_43231__$1 = state_43231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43231__$1,(7),ch);
} else {
if((state_val_43232 === (6))){
var inst_43226 = (state_43231[(2)]);
var state_43231__$1 = state_43231;
var statearr_43249_44945 = state_43231__$1;
(statearr_43249_44945[(2)] = inst_43226);

(statearr_43249_44945[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (3))){
var inst_43228 = (state_43231[(2)]);
var inst_43229 = cljs.core.async.close_BANG_(out);
var state_43231__$1 = (function (){var statearr_43250 = state_43231;
(statearr_43250[(9)] = inst_43228);

return statearr_43250;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43231__$1,inst_43229);
} else {
if((state_val_43232 === (2))){
var inst_43208 = (state_43231[(8)]);
var inst_43210 = (inst_43208 < n);
var state_43231__$1 = state_43231;
if(cljs.core.truth_(inst_43210)){
var statearr_43254_44946 = state_43231__$1;
(statearr_43254_44946[(1)] = (4));

} else {
var statearr_43255_44947 = state_43231__$1;
(statearr_43255_44947[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (11))){
var inst_43208 = (state_43231[(8)]);
var inst_43218 = (state_43231[(2)]);
var inst_43219 = (inst_43208 + (1));
var inst_43208__$1 = inst_43219;
var state_43231__$1 = (function (){var statearr_43258 = state_43231;
(statearr_43258[(10)] = inst_43218);

(statearr_43258[(8)] = inst_43208__$1);

return statearr_43258;
})();
var statearr_43261_44948 = state_43231__$1;
(statearr_43261_44948[(2)] = null);

(statearr_43261_44948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (9))){
var state_43231__$1 = state_43231;
var statearr_43262_44949 = state_43231__$1;
(statearr_43262_44949[(2)] = null);

(statearr_43262_44949[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (5))){
var state_43231__$1 = state_43231;
var statearr_43264_44950 = state_43231__$1;
(statearr_43264_44950[(2)] = null);

(statearr_43264_44950[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (10))){
var inst_43223 = (state_43231[(2)]);
var state_43231__$1 = state_43231;
var statearr_43266_44951 = state_43231__$1;
(statearr_43266_44951[(2)] = inst_43223);

(statearr_43266_44951[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43232 === (8))){
var inst_43213 = (state_43231[(7)]);
var state_43231__$1 = state_43231;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43231__$1,(11),out,inst_43213);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_43270 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43270[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_43270[(1)] = (1));

return statearr_43270;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_43231){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_43231);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e43273){var ex__40851__auto__ = e43273;
var statearr_43274_44952 = state_43231;
(statearr_43274_44952[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_43231[(4)]))){
var statearr_43276_44953 = state_43231;
(statearr_43276_44953[(1)] = cljs.core.first((state_43231[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44954 = state_43231;
state_43231 = G__44954;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_43231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_43231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_43280 = f__41126__auto__();
(statearr_43280[(6)] = c__41125__auto___44934);

return statearr_43280;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43286 = (function (f,ch,meta43287){
this.f = f;
this.ch = ch;
this.meta43287 = meta43287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43288,meta43287__$1){
var self__ = this;
var _43288__$1 = this;
return (new cljs.core.async.t_cljs$core$async43286(self__.f,self__.ch,meta43287__$1));
}));

(cljs.core.async.t_cljs$core$async43286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43288){
var self__ = this;
var _43288__$1 = this;
return self__.meta43287;
}));

(cljs.core.async.t_cljs$core$async43286.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43286.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43286.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43299 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43299 = (function (f,ch,meta43287,_,fn1,meta43300){
this.f = f;
this.ch = ch;
this.meta43287 = meta43287;
this._ = _;
this.fn1 = fn1;
this.meta43300 = meta43300;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43301,meta43300__$1){
var self__ = this;
var _43301__$1 = this;
return (new cljs.core.async.t_cljs$core$async43299(self__.f,self__.ch,self__.meta43287,self__._,self__.fn1,meta43300__$1));
}));

(cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43301){
var self__ = this;
var _43301__$1 = this;
return self__.meta43300;
}));

(cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async43299.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__43283_SHARP_){
var G__43314 = (((p1__43283_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__43283_SHARP_) : self__.f.call(null,p1__43283_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__43314) : f1.call(null,G__43314));
});
}));

(cljs.core.async.t_cljs$core$async43299.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43287","meta43287",-699519932,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async43286","cljs.core.async/t_cljs$core$async43286",-1125676801,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta43300","meta43300",-1124742106,null)], null);
}));

(cljs.core.async.t_cljs$core$async43299.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43299.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43299");

(cljs.core.async.t_cljs$core$async43299.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43299");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43299.
 */
cljs.core.async.__GT_t_cljs$core$async43299 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43299(f__$1,ch__$1,meta43287__$1,___$2,fn1__$1,meta43300){
return (new cljs.core.async.t_cljs$core$async43299(f__$1,ch__$1,meta43287__$1,___$2,fn1__$1,meta43300));
});

}

return (new cljs.core.async.t_cljs$core$async43299(self__.f,self__.ch,self__.meta43287,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4251__auto__ = ret;
if(cljs.core.truth_(and__4251__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4251__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__43329 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__43329) : self__.f.call(null,G__43329));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async43286.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async43286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43287","meta43287",-699519932,null)], null);
}));

(cljs.core.async.t_cljs$core$async43286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43286");

(cljs.core.async.t_cljs$core$async43286.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43286.
 */
cljs.core.async.__GT_t_cljs$core$async43286 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async43286(f__$1,ch__$1,meta43287){
return (new cljs.core.async.t_cljs$core$async43286(f__$1,ch__$1,meta43287));
});

}

return (new cljs.core.async.t_cljs$core$async43286(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43342 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43342 = (function (f,ch,meta43343){
this.f = f;
this.ch = ch;
this.meta43343 = meta43343;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43342.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43344,meta43343__$1){
var self__ = this;
var _43344__$1 = this;
return (new cljs.core.async.t_cljs$core$async43342(self__.f,self__.ch,meta43343__$1));
}));

(cljs.core.async.t_cljs$core$async43342.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43344){
var self__ = this;
var _43344__$1 = this;
return self__.meta43343;
}));

(cljs.core.async.t_cljs$core$async43342.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43342.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43342.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43342.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43342.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43342.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async43342.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43343","meta43343",-1221810312,null)], null);
}));

(cljs.core.async.t_cljs$core$async43342.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43342.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43342");

(cljs.core.async.t_cljs$core$async43342.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43342");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43342.
 */
cljs.core.async.__GT_t_cljs$core$async43342 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async43342(f__$1,ch__$1,meta43343){
return (new cljs.core.async.t_cljs$core$async43342(f__$1,ch__$1,meta43343));
});

}

return (new cljs.core.async.t_cljs$core$async43342(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async43368 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async43368 = (function (p,ch,meta43369){
this.p = p;
this.ch = ch;
this.meta43369 = meta43369;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async43368.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_43370,meta43369__$1){
var self__ = this;
var _43370__$1 = this;
return (new cljs.core.async.t_cljs$core$async43368(self__.p,self__.ch,meta43369__$1));
}));

(cljs.core.async.t_cljs$core$async43368.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_43370){
var self__ = this;
var _43370__$1 = this;
return self__.meta43369;
}));

(cljs.core.async.t_cljs$core$async43368.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43368.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43368.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async43368.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43368.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async43368.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async43368.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async43368.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta43369","meta43369",-1699653352,null)], null);
}));

(cljs.core.async.t_cljs$core$async43368.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async43368.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async43368");

(cljs.core.async.t_cljs$core$async43368.cljs$lang$ctorPrWriter = (function (this__4491__auto__,writer__4492__auto__,opt__4493__auto__){
return cljs.core._write(writer__4492__auto__,"cljs.core.async/t_cljs$core$async43368");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async43368.
 */
cljs.core.async.__GT_t_cljs$core$async43368 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async43368(p__$1,ch__$1,meta43369){
return (new cljs.core.async.t_cljs$core$async43368(p__$1,ch__$1,meta43369));
});

}

return (new cljs.core.async.t_cljs$core$async43368(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__43390 = arguments.length;
switch (G__43390) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41125__auto___44984 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_43424){
var state_val_43426 = (state_43424[(1)]);
if((state_val_43426 === (7))){
var inst_43420 = (state_43424[(2)]);
var state_43424__$1 = state_43424;
var statearr_43430_44986 = state_43424__$1;
(statearr_43430_44986[(2)] = inst_43420);

(statearr_43430_44986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43426 === (1))){
var state_43424__$1 = state_43424;
var statearr_43431_44991 = state_43424__$1;
(statearr_43431_44991[(2)] = null);

(statearr_43431_44991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43426 === (4))){
var inst_43402 = (state_43424[(7)]);
var inst_43402__$1 = (state_43424[(2)]);
var inst_43404 = (inst_43402__$1 == null);
var state_43424__$1 = (function (){var statearr_43434 = state_43424;
(statearr_43434[(7)] = inst_43402__$1);

return statearr_43434;
})();
if(cljs.core.truth_(inst_43404)){
var statearr_43435_44993 = state_43424__$1;
(statearr_43435_44993[(1)] = (5));

} else {
var statearr_43436_44994 = state_43424__$1;
(statearr_43436_44994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43426 === (6))){
var inst_43402 = (state_43424[(7)]);
var inst_43408 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_43402) : p.call(null,inst_43402));
var state_43424__$1 = state_43424;
if(cljs.core.truth_(inst_43408)){
var statearr_43438_44996 = state_43424__$1;
(statearr_43438_44996[(1)] = (8));

} else {
var statearr_43439_45000 = state_43424__$1;
(statearr_43439_45000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43426 === (3))){
var inst_43422 = (state_43424[(2)]);
var state_43424__$1 = state_43424;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43424__$1,inst_43422);
} else {
if((state_val_43426 === (2))){
var state_43424__$1 = state_43424;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43424__$1,(4),ch);
} else {
if((state_val_43426 === (11))){
var inst_43412 = (state_43424[(2)]);
var state_43424__$1 = state_43424;
var statearr_43443_45003 = state_43424__$1;
(statearr_43443_45003[(2)] = inst_43412);

(statearr_43443_45003[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43426 === (9))){
var state_43424__$1 = state_43424;
var statearr_43446_45009 = state_43424__$1;
(statearr_43446_45009[(2)] = null);

(statearr_43446_45009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43426 === (5))){
var inst_43406 = cljs.core.async.close_BANG_(out);
var state_43424__$1 = state_43424;
var statearr_43448_45011 = state_43424__$1;
(statearr_43448_45011[(2)] = inst_43406);

(statearr_43448_45011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43426 === (10))){
var inst_43415 = (state_43424[(2)]);
var state_43424__$1 = (function (){var statearr_43450 = state_43424;
(statearr_43450[(8)] = inst_43415);

return statearr_43450;
})();
var statearr_43451_45012 = state_43424__$1;
(statearr_43451_45012[(2)] = null);

(statearr_43451_45012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43426 === (8))){
var inst_43402 = (state_43424[(7)]);
var state_43424__$1 = state_43424;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43424__$1,(11),out,inst_43402);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_43454 = [null,null,null,null,null,null,null,null,null];
(statearr_43454[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_43454[(1)] = (1));

return statearr_43454;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_43424){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_43424);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e43457){var ex__40851__auto__ = e43457;
var statearr_43458_45022 = state_43424;
(statearr_43458_45022[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_43424[(4)]))){
var statearr_43459_45025 = state_43424;
(statearr_43459_45025[(1)] = cljs.core.first((state_43424[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45026 = state_43424;
state_43424 = G__45026;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_43424){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_43424);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_43462 = f__41126__auto__();
(statearr_43462[(6)] = c__41125__auto___44984);

return statearr_43462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__43466 = arguments.length;
switch (G__43466) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41125__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_43544){
var state_val_43545 = (state_43544[(1)]);
if((state_val_43545 === (7))){
var inst_43538 = (state_43544[(2)]);
var state_43544__$1 = state_43544;
var statearr_43548_45042 = state_43544__$1;
(statearr_43548_45042[(2)] = inst_43538);

(statearr_43548_45042[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (20))){
var inst_43506 = (state_43544[(7)]);
var inst_43519 = (state_43544[(2)]);
var inst_43520 = cljs.core.next(inst_43506);
var inst_43492 = inst_43520;
var inst_43493 = null;
var inst_43494 = (0);
var inst_43495 = (0);
var state_43544__$1 = (function (){var statearr_43549 = state_43544;
(statearr_43549[(8)] = inst_43492);

(statearr_43549[(9)] = inst_43494);

(statearr_43549[(10)] = inst_43495);

(statearr_43549[(11)] = inst_43519);

(statearr_43549[(12)] = inst_43493);

return statearr_43549;
})();
var statearr_43552_45046 = state_43544__$1;
(statearr_43552_45046[(2)] = null);

(statearr_43552_45046[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (1))){
var state_43544__$1 = state_43544;
var statearr_43553_45047 = state_43544__$1;
(statearr_43553_45047[(2)] = null);

(statearr_43553_45047[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (4))){
var inst_43479 = (state_43544[(13)]);
var inst_43479__$1 = (state_43544[(2)]);
var inst_43480 = (inst_43479__$1 == null);
var state_43544__$1 = (function (){var statearr_43554 = state_43544;
(statearr_43554[(13)] = inst_43479__$1);

return statearr_43554;
})();
if(cljs.core.truth_(inst_43480)){
var statearr_43556_45048 = state_43544__$1;
(statearr_43556_45048[(1)] = (5));

} else {
var statearr_43558_45049 = state_43544__$1;
(statearr_43558_45049[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (15))){
var state_43544__$1 = state_43544;
var statearr_43563_45052 = state_43544__$1;
(statearr_43563_45052[(2)] = null);

(statearr_43563_45052[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (21))){
var state_43544__$1 = state_43544;
var statearr_43566_45053 = state_43544__$1;
(statearr_43566_45053[(2)] = null);

(statearr_43566_45053[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (13))){
var inst_43492 = (state_43544[(8)]);
var inst_43494 = (state_43544[(9)]);
var inst_43495 = (state_43544[(10)]);
var inst_43493 = (state_43544[(12)]);
var inst_43502 = (state_43544[(2)]);
var inst_43503 = (inst_43495 + (1));
var tmp43559 = inst_43492;
var tmp43560 = inst_43494;
var tmp43561 = inst_43493;
var inst_43492__$1 = tmp43559;
var inst_43493__$1 = tmp43561;
var inst_43494__$1 = tmp43560;
var inst_43495__$1 = inst_43503;
var state_43544__$1 = (function (){var statearr_43573 = state_43544;
(statearr_43573[(8)] = inst_43492__$1);

(statearr_43573[(9)] = inst_43494__$1);

(statearr_43573[(10)] = inst_43495__$1);

(statearr_43573[(14)] = inst_43502);

(statearr_43573[(12)] = inst_43493__$1);

return statearr_43573;
})();
var statearr_43576_45058 = state_43544__$1;
(statearr_43576_45058[(2)] = null);

(statearr_43576_45058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (22))){
var state_43544__$1 = state_43544;
var statearr_43580_45059 = state_43544__$1;
(statearr_43580_45059[(2)] = null);

(statearr_43580_45059[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (6))){
var inst_43479 = (state_43544[(13)]);
var inst_43488 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43479) : f.call(null,inst_43479));
var inst_43489 = cljs.core.seq(inst_43488);
var inst_43492 = inst_43489;
var inst_43493 = null;
var inst_43494 = (0);
var inst_43495 = (0);
var state_43544__$1 = (function (){var statearr_43583 = state_43544;
(statearr_43583[(8)] = inst_43492);

(statearr_43583[(9)] = inst_43494);

(statearr_43583[(10)] = inst_43495);

(statearr_43583[(12)] = inst_43493);

return statearr_43583;
})();
var statearr_43587_45064 = state_43544__$1;
(statearr_43587_45064[(2)] = null);

(statearr_43587_45064[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (17))){
var inst_43506 = (state_43544[(7)]);
var inst_43512 = cljs.core.chunk_first(inst_43506);
var inst_43513 = cljs.core.chunk_rest(inst_43506);
var inst_43514 = cljs.core.count(inst_43512);
var inst_43492 = inst_43513;
var inst_43493 = inst_43512;
var inst_43494 = inst_43514;
var inst_43495 = (0);
var state_43544__$1 = (function (){var statearr_43591 = state_43544;
(statearr_43591[(8)] = inst_43492);

(statearr_43591[(9)] = inst_43494);

(statearr_43591[(10)] = inst_43495);

(statearr_43591[(12)] = inst_43493);

return statearr_43591;
})();
var statearr_43592_45069 = state_43544__$1;
(statearr_43592_45069[(2)] = null);

(statearr_43592_45069[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (3))){
var inst_43541 = (state_43544[(2)]);
var state_43544__$1 = state_43544;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43544__$1,inst_43541);
} else {
if((state_val_43545 === (12))){
var inst_43528 = (state_43544[(2)]);
var state_43544__$1 = state_43544;
var statearr_43596_45070 = state_43544__$1;
(statearr_43596_45070[(2)] = inst_43528);

(statearr_43596_45070[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (2))){
var state_43544__$1 = state_43544;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43544__$1,(4),in$);
} else {
if((state_val_43545 === (23))){
var inst_43536 = (state_43544[(2)]);
var state_43544__$1 = state_43544;
var statearr_43598_45071 = state_43544__$1;
(statearr_43598_45071[(2)] = inst_43536);

(statearr_43598_45071[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (19))){
var inst_43523 = (state_43544[(2)]);
var state_43544__$1 = state_43544;
var statearr_43599_45075 = state_43544__$1;
(statearr_43599_45075[(2)] = inst_43523);

(statearr_43599_45075[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (11))){
var inst_43492 = (state_43544[(8)]);
var inst_43506 = (state_43544[(7)]);
var inst_43506__$1 = cljs.core.seq(inst_43492);
var state_43544__$1 = (function (){var statearr_43601 = state_43544;
(statearr_43601[(7)] = inst_43506__$1);

return statearr_43601;
})();
if(inst_43506__$1){
var statearr_43602_45078 = state_43544__$1;
(statearr_43602_45078[(1)] = (14));

} else {
var statearr_43603_45079 = state_43544__$1;
(statearr_43603_45079[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (9))){
var inst_43530 = (state_43544[(2)]);
var inst_43531 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_43544__$1 = (function (){var statearr_43605 = state_43544;
(statearr_43605[(15)] = inst_43530);

return statearr_43605;
})();
if(cljs.core.truth_(inst_43531)){
var statearr_43606_45083 = state_43544__$1;
(statearr_43606_45083[(1)] = (21));

} else {
var statearr_43607_45084 = state_43544__$1;
(statearr_43607_45084[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (5))){
var inst_43482 = cljs.core.async.close_BANG_(out);
var state_43544__$1 = state_43544;
var statearr_43609_45086 = state_43544__$1;
(statearr_43609_45086[(2)] = inst_43482);

(statearr_43609_45086[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (14))){
var inst_43506 = (state_43544[(7)]);
var inst_43508 = cljs.core.chunked_seq_QMARK_(inst_43506);
var state_43544__$1 = state_43544;
if(inst_43508){
var statearr_43610_45087 = state_43544__$1;
(statearr_43610_45087[(1)] = (17));

} else {
var statearr_43611_45088 = state_43544__$1;
(statearr_43611_45088[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (16))){
var inst_43526 = (state_43544[(2)]);
var state_43544__$1 = state_43544;
var statearr_43614_45089 = state_43544__$1;
(statearr_43614_45089[(2)] = inst_43526);

(statearr_43614_45089[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43545 === (10))){
var inst_43495 = (state_43544[(10)]);
var inst_43493 = (state_43544[(12)]);
var inst_43500 = cljs.core._nth(inst_43493,inst_43495);
var state_43544__$1 = state_43544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43544__$1,(13),out,inst_43500);
} else {
if((state_val_43545 === (18))){
var inst_43506 = (state_43544[(7)]);
var inst_43517 = cljs.core.first(inst_43506);
var state_43544__$1 = state_43544;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43544__$1,(20),out,inst_43517);
} else {
if((state_val_43545 === (8))){
var inst_43494 = (state_43544[(9)]);
var inst_43495 = (state_43544[(10)]);
var inst_43497 = (inst_43495 < inst_43494);
var inst_43498 = inst_43497;
var state_43544__$1 = state_43544;
if(cljs.core.truth_(inst_43498)){
var statearr_43618_45095 = state_43544__$1;
(statearr_43618_45095[(1)] = (10));

} else {
var statearr_43620_45096 = state_43544__$1;
(statearr_43620_45096[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__40848__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__40848__auto____0 = (function (){
var statearr_43623 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43623[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__40848__auto__);

(statearr_43623[(1)] = (1));

return statearr_43623;
});
var cljs$core$async$mapcat_STAR__$_state_machine__40848__auto____1 = (function (state_43544){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_43544);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e43624){var ex__40851__auto__ = e43624;
var statearr_43625_45098 = state_43544;
(statearr_43625_45098[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_43544[(4)]))){
var statearr_43632_45099 = state_43544;
(statearr_43632_45099[(1)] = cljs.core.first((state_43544[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45100 = state_43544;
state_43544 = G__45100;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__40848__auto__ = function(state_43544){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__40848__auto____1.call(this,state_43544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__40848__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__40848__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_43634 = f__41126__auto__();
(statearr_43634[(6)] = c__41125__auto__);

return statearr_43634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));

return c__41125__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__43637 = arguments.length;
switch (G__43637) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__43659 = arguments.length;
switch (G__43659) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__43675 = arguments.length;
switch (G__43675) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41125__auto___45111 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_43711){
var state_val_43712 = (state_43711[(1)]);
if((state_val_43712 === (7))){
var inst_43706 = (state_43711[(2)]);
var state_43711__$1 = state_43711;
var statearr_43716_45116 = state_43711__$1;
(statearr_43716_45116[(2)] = inst_43706);

(statearr_43716_45116[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43712 === (1))){
var inst_43685 = null;
var state_43711__$1 = (function (){var statearr_43718 = state_43711;
(statearr_43718[(7)] = inst_43685);

return statearr_43718;
})();
var statearr_43720_45119 = state_43711__$1;
(statearr_43720_45119[(2)] = null);

(statearr_43720_45119[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43712 === (4))){
var inst_43688 = (state_43711[(8)]);
var inst_43688__$1 = (state_43711[(2)]);
var inst_43691 = (inst_43688__$1 == null);
var inst_43692 = cljs.core.not(inst_43691);
var state_43711__$1 = (function (){var statearr_43723 = state_43711;
(statearr_43723[(8)] = inst_43688__$1);

return statearr_43723;
})();
if(inst_43692){
var statearr_43725_45123 = state_43711__$1;
(statearr_43725_45123[(1)] = (5));

} else {
var statearr_43728_45125 = state_43711__$1;
(statearr_43728_45125[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43712 === (6))){
var state_43711__$1 = state_43711;
var statearr_43729_45127 = state_43711__$1;
(statearr_43729_45127[(2)] = null);

(statearr_43729_45127[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43712 === (3))){
var inst_43708 = (state_43711[(2)]);
var inst_43709 = cljs.core.async.close_BANG_(out);
var state_43711__$1 = (function (){var statearr_43731 = state_43711;
(statearr_43731[(9)] = inst_43708);

return statearr_43731;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_43711__$1,inst_43709);
} else {
if((state_val_43712 === (2))){
var state_43711__$1 = state_43711;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43711__$1,(4),ch);
} else {
if((state_val_43712 === (11))){
var inst_43688 = (state_43711[(8)]);
var inst_43699 = (state_43711[(2)]);
var inst_43685 = inst_43688;
var state_43711__$1 = (function (){var statearr_43732 = state_43711;
(statearr_43732[(7)] = inst_43685);

(statearr_43732[(10)] = inst_43699);

return statearr_43732;
})();
var statearr_43733_45138 = state_43711__$1;
(statearr_43733_45138[(2)] = null);

(statearr_43733_45138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43712 === (9))){
var inst_43688 = (state_43711[(8)]);
var state_43711__$1 = state_43711;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43711__$1,(11),out,inst_43688);
} else {
if((state_val_43712 === (5))){
var inst_43685 = (state_43711[(7)]);
var inst_43688 = (state_43711[(8)]);
var inst_43694 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43688,inst_43685);
var state_43711__$1 = state_43711;
if(inst_43694){
var statearr_43736_45146 = state_43711__$1;
(statearr_43736_45146[(1)] = (8));

} else {
var statearr_43737_45147 = state_43711__$1;
(statearr_43737_45147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43712 === (10))){
var inst_43703 = (state_43711[(2)]);
var state_43711__$1 = state_43711;
var statearr_43739_45151 = state_43711__$1;
(statearr_43739_45151[(2)] = inst_43703);

(statearr_43739_45151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43712 === (8))){
var inst_43685 = (state_43711[(7)]);
var tmp43735 = inst_43685;
var inst_43685__$1 = tmp43735;
var state_43711__$1 = (function (){var statearr_43748 = state_43711;
(statearr_43748[(7)] = inst_43685__$1);

return statearr_43748;
})();
var statearr_43752_45154 = state_43711__$1;
(statearr_43752_45154[(2)] = null);

(statearr_43752_45154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_43754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_43754[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_43754[(1)] = (1));

return statearr_43754;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_43711){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_43711);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e43757){var ex__40851__auto__ = e43757;
var statearr_43758_45156 = state_43711;
(statearr_43758_45156[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_43711[(4)]))){
var statearr_43761_45157 = state_43711;
(statearr_43761_45157[(1)] = cljs.core.first((state_43711[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45160 = state_43711;
state_43711 = G__45160;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_43711){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_43711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_43762 = f__41126__auto__();
(statearr_43762[(6)] = c__41125__auto___45111);

return statearr_43762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__43769 = arguments.length;
switch (G__43769) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41125__auto___45173 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_43813){
var state_val_43814 = (state_43813[(1)]);
if((state_val_43814 === (7))){
var inst_43809 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
var statearr_43820_45174 = state_43813__$1;
(statearr_43820_45174[(2)] = inst_43809);

(statearr_43820_45174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (1))){
var inst_43775 = (new Array(n));
var inst_43776 = inst_43775;
var inst_43777 = (0);
var state_43813__$1 = (function (){var statearr_43823 = state_43813;
(statearr_43823[(7)] = inst_43777);

(statearr_43823[(8)] = inst_43776);

return statearr_43823;
})();
var statearr_43826_45180 = state_43813__$1;
(statearr_43826_45180[(2)] = null);

(statearr_43826_45180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (4))){
var inst_43780 = (state_43813[(9)]);
var inst_43780__$1 = (state_43813[(2)]);
var inst_43781 = (inst_43780__$1 == null);
var inst_43782 = cljs.core.not(inst_43781);
var state_43813__$1 = (function (){var statearr_43827 = state_43813;
(statearr_43827[(9)] = inst_43780__$1);

return statearr_43827;
})();
if(inst_43782){
var statearr_43829_45183 = state_43813__$1;
(statearr_43829_45183[(1)] = (5));

} else {
var statearr_43830_45184 = state_43813__$1;
(statearr_43830_45184[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (15))){
var inst_43803 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
var statearr_43835_45187 = state_43813__$1;
(statearr_43835_45187[(2)] = inst_43803);

(statearr_43835_45187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (13))){
var state_43813__$1 = state_43813;
var statearr_43836_45188 = state_43813__$1;
(statearr_43836_45188[(2)] = null);

(statearr_43836_45188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (6))){
var inst_43777 = (state_43813[(7)]);
var inst_43799 = (inst_43777 > (0));
var state_43813__$1 = state_43813;
if(cljs.core.truth_(inst_43799)){
var statearr_43838_45189 = state_43813__$1;
(statearr_43838_45189[(1)] = (12));

} else {
var statearr_43839_45191 = state_43813__$1;
(statearr_43839_45191[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (3))){
var inst_43811 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43813__$1,inst_43811);
} else {
if((state_val_43814 === (12))){
var inst_43776 = (state_43813[(8)]);
var inst_43801 = cljs.core.vec(inst_43776);
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43813__$1,(15),out,inst_43801);
} else {
if((state_val_43814 === (2))){
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43813__$1,(4),ch);
} else {
if((state_val_43814 === (11))){
var inst_43793 = (state_43813[(2)]);
var inst_43794 = (new Array(n));
var inst_43776 = inst_43794;
var inst_43777 = (0);
var state_43813__$1 = (function (){var statearr_43846 = state_43813;
(statearr_43846[(7)] = inst_43777);

(statearr_43846[(10)] = inst_43793);

(statearr_43846[(8)] = inst_43776);

return statearr_43846;
})();
var statearr_43847_45202 = state_43813__$1;
(statearr_43847_45202[(2)] = null);

(statearr_43847_45202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (9))){
var inst_43776 = (state_43813[(8)]);
var inst_43791 = cljs.core.vec(inst_43776);
var state_43813__$1 = state_43813;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43813__$1,(11),out,inst_43791);
} else {
if((state_val_43814 === (5))){
var inst_43777 = (state_43813[(7)]);
var inst_43780 = (state_43813[(9)]);
var inst_43776 = (state_43813[(8)]);
var inst_43785 = (state_43813[(11)]);
var inst_43784 = (inst_43776[inst_43777] = inst_43780);
var inst_43785__$1 = (inst_43777 + (1));
var inst_43786 = (inst_43785__$1 < n);
var state_43813__$1 = (function (){var statearr_43849 = state_43813;
(statearr_43849[(12)] = inst_43784);

(statearr_43849[(11)] = inst_43785__$1);

return statearr_43849;
})();
if(cljs.core.truth_(inst_43786)){
var statearr_43851_45209 = state_43813__$1;
(statearr_43851_45209[(1)] = (8));

} else {
var statearr_43852_45210 = state_43813__$1;
(statearr_43852_45210[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (14))){
var inst_43806 = (state_43813[(2)]);
var inst_43807 = cljs.core.async.close_BANG_(out);
var state_43813__$1 = (function (){var statearr_43854 = state_43813;
(statearr_43854[(13)] = inst_43806);

return statearr_43854;
})();
var statearr_43856_45213 = state_43813__$1;
(statearr_43856_45213[(2)] = inst_43807);

(statearr_43856_45213[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (10))){
var inst_43797 = (state_43813[(2)]);
var state_43813__$1 = state_43813;
var statearr_43857_45217 = state_43813__$1;
(statearr_43857_45217[(2)] = inst_43797);

(statearr_43857_45217[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43814 === (8))){
var inst_43776 = (state_43813[(8)]);
var inst_43785 = (state_43813[(11)]);
var tmp43853 = inst_43776;
var inst_43776__$1 = tmp43853;
var inst_43777 = inst_43785;
var state_43813__$1 = (function (){var statearr_43859 = state_43813;
(statearr_43859[(7)] = inst_43777);

(statearr_43859[(8)] = inst_43776__$1);

return statearr_43859;
})();
var statearr_43860_45218 = state_43813__$1;
(statearr_43860_45218[(2)] = null);

(statearr_43860_45218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_43862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43862[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_43862[(1)] = (1));

return statearr_43862;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_43813){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_43813);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e43863){var ex__40851__auto__ = e43863;
var statearr_43864_45221 = state_43813;
(statearr_43864_45221[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_43813[(4)]))){
var statearr_43865_45224 = state_43813;
(statearr_43865_45224[(1)] = cljs.core.first((state_43813[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45228 = state_43813;
state_43813 = G__45228;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_43813){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_43813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_43867 = f__41126__auto__();
(statearr_43867[(6)] = c__41125__auto___45173);

return statearr_43867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__43871 = arguments.length;
switch (G__43871) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41125__auto___45235 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41126__auto__ = (function (){var switch__40847__auto__ = (function (state_43920){
var state_val_43921 = (state_43920[(1)]);
if((state_val_43921 === (7))){
var inst_43916 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
var statearr_43924_45236 = state_43920__$1;
(statearr_43924_45236[(2)] = inst_43916);

(statearr_43924_45236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (1))){
var inst_43874 = [];
var inst_43875 = inst_43874;
var inst_43876 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_43920__$1 = (function (){var statearr_43927 = state_43920;
(statearr_43927[(7)] = inst_43876);

(statearr_43927[(8)] = inst_43875);

return statearr_43927;
})();
var statearr_43932_45238 = state_43920__$1;
(statearr_43932_45238[(2)] = null);

(statearr_43932_45238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (4))){
var inst_43879 = (state_43920[(9)]);
var inst_43879__$1 = (state_43920[(2)]);
var inst_43880 = (inst_43879__$1 == null);
var inst_43881 = cljs.core.not(inst_43880);
var state_43920__$1 = (function (){var statearr_43933 = state_43920;
(statearr_43933[(9)] = inst_43879__$1);

return statearr_43933;
})();
if(inst_43881){
var statearr_43934_45239 = state_43920__$1;
(statearr_43934_45239[(1)] = (5));

} else {
var statearr_43935_45240 = state_43920__$1;
(statearr_43935_45240[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (15))){
var inst_43875 = (state_43920[(8)]);
var inst_43907 = cljs.core.vec(inst_43875);
var state_43920__$1 = state_43920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43920__$1,(18),out,inst_43907);
} else {
if((state_val_43921 === (13))){
var inst_43902 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
var statearr_43937_45256 = state_43920__$1;
(statearr_43937_45256[(2)] = inst_43902);

(statearr_43937_45256[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (6))){
var inst_43875 = (state_43920[(8)]);
var inst_43904 = inst_43875.length;
var inst_43905 = (inst_43904 > (0));
var state_43920__$1 = state_43920;
if(cljs.core.truth_(inst_43905)){
var statearr_43941_45257 = state_43920__$1;
(statearr_43941_45257[(1)] = (15));

} else {
var statearr_43945_45258 = state_43920__$1;
(statearr_43945_45258[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (17))){
var inst_43913 = (state_43920[(2)]);
var inst_43914 = cljs.core.async.close_BANG_(out);
var state_43920__$1 = (function (){var statearr_43947 = state_43920;
(statearr_43947[(10)] = inst_43913);

return statearr_43947;
})();
var statearr_43948_45261 = state_43920__$1;
(statearr_43948_45261[(2)] = inst_43914);

(statearr_43948_45261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (3))){
var inst_43918 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43920__$1,inst_43918);
} else {
if((state_val_43921 === (12))){
var inst_43875 = (state_43920[(8)]);
var inst_43895 = cljs.core.vec(inst_43875);
var state_43920__$1 = state_43920;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_43920__$1,(14),out,inst_43895);
} else {
if((state_val_43921 === (2))){
var state_43920__$1 = state_43920;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43920__$1,(4),ch);
} else {
if((state_val_43921 === (11))){
var inst_43883 = (state_43920[(11)]);
var inst_43875 = (state_43920[(8)]);
var inst_43879 = (state_43920[(9)]);
var inst_43892 = inst_43875.push(inst_43879);
var tmp43958 = inst_43875;
var inst_43875__$1 = tmp43958;
var inst_43876 = inst_43883;
var state_43920__$1 = (function (){var statearr_43962 = state_43920;
(statearr_43962[(7)] = inst_43876);

(statearr_43962[(12)] = inst_43892);

(statearr_43962[(8)] = inst_43875__$1);

return statearr_43962;
})();
var statearr_43963_45274 = state_43920__$1;
(statearr_43963_45274[(2)] = null);

(statearr_43963_45274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (9))){
var inst_43876 = (state_43920[(7)]);
var inst_43888 = cljs.core.keyword_identical_QMARK_(inst_43876,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_43920__$1 = state_43920;
var statearr_43969_45279 = state_43920__$1;
(statearr_43969_45279[(2)] = inst_43888);

(statearr_43969_45279[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (5))){
var inst_43876 = (state_43920[(7)]);
var inst_43883 = (state_43920[(11)]);
var inst_43879 = (state_43920[(9)]);
var inst_43885 = (state_43920[(13)]);
var inst_43883__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_43879) : f.call(null,inst_43879));
var inst_43885__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43883__$1,inst_43876);
var state_43920__$1 = (function (){var statearr_43971 = state_43920;
(statearr_43971[(11)] = inst_43883__$1);

(statearr_43971[(13)] = inst_43885__$1);

return statearr_43971;
})();
if(inst_43885__$1){
var statearr_43972_45291 = state_43920__$1;
(statearr_43972_45291[(1)] = (8));

} else {
var statearr_43973_45293 = state_43920__$1;
(statearr_43973_45293[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (14))){
var inst_43883 = (state_43920[(11)]);
var inst_43879 = (state_43920[(9)]);
var inst_43897 = (state_43920[(2)]);
var inst_43898 = [];
var inst_43899 = inst_43898.push(inst_43879);
var inst_43875 = inst_43898;
var inst_43876 = inst_43883;
var state_43920__$1 = (function (){var statearr_43975 = state_43920;
(statearr_43975[(7)] = inst_43876);

(statearr_43975[(8)] = inst_43875);

(statearr_43975[(14)] = inst_43897);

(statearr_43975[(15)] = inst_43899);

return statearr_43975;
})();
var statearr_43977_45302 = state_43920__$1;
(statearr_43977_45302[(2)] = null);

(statearr_43977_45302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (16))){
var state_43920__$1 = state_43920;
var statearr_43979_45305 = state_43920__$1;
(statearr_43979_45305[(2)] = null);

(statearr_43979_45305[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (10))){
var inst_43890 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
if(cljs.core.truth_(inst_43890)){
var statearr_43980_45310 = state_43920__$1;
(statearr_43980_45310[(1)] = (11));

} else {
var statearr_43982_45311 = state_43920__$1;
(statearr_43982_45311[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (18))){
var inst_43909 = (state_43920[(2)]);
var state_43920__$1 = state_43920;
var statearr_43983_45316 = state_43920__$1;
(statearr_43983_45316[(2)] = inst_43909);

(statearr_43983_45316[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43921 === (8))){
var inst_43885 = (state_43920[(13)]);
var state_43920__$1 = state_43920;
var statearr_43984_45319 = state_43920__$1;
(statearr_43984_45319[(2)] = inst_43885);

(statearr_43984_45319[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__40848__auto__ = null;
var cljs$core$async$state_machine__40848__auto____0 = (function (){
var statearr_43986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43986[(0)] = cljs$core$async$state_machine__40848__auto__);

(statearr_43986[(1)] = (1));

return statearr_43986;
});
var cljs$core$async$state_machine__40848__auto____1 = (function (state_43920){
while(true){
var ret_value__40849__auto__ = (function (){try{while(true){
var result__40850__auto__ = switch__40847__auto__(state_43920);
if(cljs.core.keyword_identical_QMARK_(result__40850__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__40850__auto__;
}
break;
}
}catch (e43987){var ex__40851__auto__ = e43987;
var statearr_43988_45329 = state_43920;
(statearr_43988_45329[(2)] = ex__40851__auto__);


if(cljs.core.seq((state_43920[(4)]))){
var statearr_43990_45331 = state_43920;
(statearr_43990_45331[(1)] = cljs.core.first((state_43920[(4)])));

} else {
throw ex__40851__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__40849__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45336 = state_43920;
state_43920 = G__45336;
continue;
} else {
return ret_value__40849__auto__;
}
break;
}
});
cljs$core$async$state_machine__40848__auto__ = function(state_43920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__40848__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__40848__auto____1.call(this,state_43920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__40848__auto____0;
cljs$core$async$state_machine__40848__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__40848__auto____1;
return cljs$core$async$state_machine__40848__auto__;
})()
})();
var state__41127__auto__ = (function (){var statearr_43991 = f__41126__auto__();
(statearr_43991[(6)] = c__41125__auto___45235);

return statearr_43991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41127__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
