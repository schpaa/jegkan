goog.provide('promesa.impl');
promesa.impl._STAR_default_promise_STAR_ = Promise;
promesa.impl.resolved = (function promesa$impl$resolved(v){
return promesa.impl._STAR_default_promise_STAR_.resolve(v);
});
promesa.impl.rejected = (function promesa$impl$rejected(v){
return promesa.impl._STAR_default_promise_STAR_.reject(v);
});
promesa.impl.deferred = (function promesa$impl$deferred(){
var state = ({});
var obj = (new promesa.impl._STAR_default_promise_STAR_((function (resolve,reject){
(state.resolve = resolve);

return (state.reject = reject);
})));
var x68293 = obj;
(x68293.promesa$protocols$ICompletable$ = cljs.core.PROTOCOL_SENTINEL);

(x68293.promesa$protocols$ICompletable$_resolve_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.resolve(v);
}));

(x68293.promesa$protocols$ICompletable$_reject_BANG_$arity$2 = (function (_,v){
var ___$1 = this;
return state.reject(v);
}));

return x68293;
});
promesa.impl.extend_promise_BANG_ = (function promesa$impl$extend_promise_BANG_(t){
(t.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (p){
var p__$1 = this;
return p__$1;
}));

(t.prototype.promesa$protocols$IPromise$ = cljs.core.PROTOCOL_SENTINEL);

(t.prototype.promesa$protocols$IPromise$_map$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__68294_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68294_SHARP_) : f.call(null,p1__68294_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_map$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__68295_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68295_SHARP_) : f.call(null,p1__68295_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__68296_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68296_SHARP_) : f.call(null,p1__68296_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_bind$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__68297_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68297_SHARP_) : f.call(null,p1__68297_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__68298_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68298_SHARP_) : f.call(null,p1__68298_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_then$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__68299_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68299_SHARP_) : f.call(null,p1__68299_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__68300_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68300_SHARP_) : f.call(null,p1__68300_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_mapErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__68301_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68301_SHARP_) : f.call(null,p1__68301_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.catch((function (p1__68302_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68302_SHARP_) : f.call(null,p1__68302_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_thenErr$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.catch((function (p1__68303_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__68303_SHARP_) : f.call(null,p1__68303_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$2 = (function (it,f){
var it__$1 = this;
return it__$1.then((function (p1__68304_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__68304_SHARP_,null) : f.call(null,p1__68304_SHARP_,null));
}),(function (p1__68305_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__68305_SHARP_) : f.call(null,null,p1__68305_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_handle$arity$3 = (function (it,f,e){
var it__$1 = this;
return it__$1.then((function (p1__68306_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__68306_SHARP_,null) : f.call(null,p1__68306_SHARP_,null));
}),(function (p1__68307_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__68307_SHARP_) : f.call(null,null,p1__68307_SHARP_));
}));
}));

(t.prototype.promesa$protocols$IPromise$_finally$arity$2 = (function (it,f){
var it__$1 = this;
it__$1.then((function (p1__68308_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__68308_SHARP_,null) : f.call(null,p1__68308_SHARP_,null));
}),(function (p1__68309_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__68309_SHARP_) : f.call(null,null,p1__68309_SHARP_));
}));

return it__$1;
}));

return (t.prototype.promesa$protocols$IPromise$_finally$arity$3 = (function (it,f,executor){
var it__$1 = this;
it__$1.then((function (p1__68310_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__68310_SHARP_,null) : f.call(null,p1__68310_SHARP_,null));
}),(function (p1__68311_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(null,p1__68311_SHARP_) : f.call(null,null,p1__68311_SHARP_));
}));

return it__$1;
}));
});
promesa.impl.extend_promise_BANG_(Promise);
(promesa.protocols.IPromise["_"] = true);

(promesa.protocols._map["_"] = (function() {
var G__68328 = null;
var G__68328__2 = (function (it,f){
return promesa.protocols._map(promesa.protocols._promise(it),f);
});
var G__68328__3 = (function (it,f,e){
return promesa.protocols._map(promesa.protocols._promise(it),f,e);
});
G__68328 = function(it,f,e){
switch(arguments.length){
case 2:
return G__68328__2.call(this,it,f);
case 3:
return G__68328__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68328.cljs$core$IFn$_invoke$arity$2 = G__68328__2;
G__68328.cljs$core$IFn$_invoke$arity$3 = G__68328__3;
return G__68328;
})()
);

(promesa.protocols._bind["_"] = (function() {
var G__68331 = null;
var G__68331__2 = (function (it,f){
return promesa.protocols._bind(promesa.protocols._promise(it),f);
});
var G__68331__3 = (function (it,f,e){
return promesa.protocols._bind(promesa.protocols._promise(it),f,e);
});
G__68331 = function(it,f,e){
switch(arguments.length){
case 2:
return G__68331__2.call(this,it,f);
case 3:
return G__68331__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68331.cljs$core$IFn$_invoke$arity$2 = G__68331__2;
G__68331.cljs$core$IFn$_invoke$arity$3 = G__68331__3;
return G__68331;
})()
);

(promesa.protocols._then["_"] = (function() {
var G__68333 = null;
var G__68333__2 = (function (it,f){
return promesa.protocols._then(promesa.protocols._promise(it),f);
});
var G__68333__3 = (function (it,f,e){
return promesa.protocols._then(promesa.protocols._promise(it),f,e);
});
G__68333 = function(it,f,e){
switch(arguments.length){
case 2:
return G__68333__2.call(this,it,f);
case 3:
return G__68333__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68333.cljs$core$IFn$_invoke$arity$2 = G__68333__2;
G__68333.cljs$core$IFn$_invoke$arity$3 = G__68333__3;
return G__68333;
})()
);

(promesa.protocols._mapErr["_"] = (function() {
var G__68338 = null;
var G__68338__2 = (function (it,f){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f);
});
var G__68338__3 = (function (it,f,e){
return promesa.protocols._mapErr(promesa.protocols._promise(it),f,e);
});
G__68338 = function(it,f,e){
switch(arguments.length){
case 2:
return G__68338__2.call(this,it,f);
case 3:
return G__68338__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68338.cljs$core$IFn$_invoke$arity$2 = G__68338__2;
G__68338.cljs$core$IFn$_invoke$arity$3 = G__68338__3;
return G__68338;
})()
);

(promesa.protocols._thenErr["_"] = (function() {
var G__68339 = null;
var G__68339__2 = (function (it,f){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f);
});
var G__68339__3 = (function (it,f,e){
return promesa.protocols._thenErr(promesa.protocols._promise(it),f,e);
});
G__68339 = function(it,f,e){
switch(arguments.length){
case 2:
return G__68339__2.call(this,it,f);
case 3:
return G__68339__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68339.cljs$core$IFn$_invoke$arity$2 = G__68339__2;
G__68339.cljs$core$IFn$_invoke$arity$3 = G__68339__3;
return G__68339;
})()
);

(promesa.protocols._handle["_"] = (function() {
var G__68357 = null;
var G__68357__2 = (function (it,f){
return promesa.protocols._handle(promesa.protocols._promise(it),f);
});
var G__68357__3 = (function (it,f,e){
return promesa.protocols._handle(promesa.protocols._promise(it),f,e);
});
G__68357 = function(it,f,e){
switch(arguments.length){
case 2:
return G__68357__2.call(this,it,f);
case 3:
return G__68357__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68357.cljs$core$IFn$_invoke$arity$2 = G__68357__2;
G__68357.cljs$core$IFn$_invoke$arity$3 = G__68357__3;
return G__68357;
})()
);

(promesa.protocols._finally["_"] = (function() {
var G__68358 = null;
var G__68358__2 = (function (it,f){
return promesa.protocols._finally(promesa.protocols._promise(it),f);
});
var G__68358__3 = (function (it,f,e){
return promesa.protocols._finally(promesa.protocols._promise(it),f,e);
});
G__68358 = function(it,f,e){
switch(arguments.length){
case 2:
return G__68358__2.call(this,it,f);
case 3:
return G__68358__3.call(this,it,f,e);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__68358.cljs$core$IFn$_invoke$arity$2 = G__68358__2;
G__68358.cljs$core$IFn$_invoke$arity$3 = G__68358__3;
return G__68358;
})()
);
(Error.prototype.promesa$protocols$IPromiseFactory$ = cljs.core.PROTOCOL_SENTINEL);

(Error.prototype.promesa$protocols$IPromiseFactory$_promise$arity$1 = (function (e){
var e__$1 = this;
return promesa.impl.rejected(e__$1);
}));

(promesa.protocols.IPromiseFactory["_"] = true);

(promesa.protocols._promise["_"] = (function (v){
return promesa.impl.resolved(v);
}));
promesa.impl.promise__GT_str = (function promesa$impl$promise__GT_str(p){
return "#<Promise[~]>";
});
(Promise.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL);

(Promise.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (p,writer,opts){
var p__$1 = this;
return cljs.core._write(writer,promesa.impl.promise__GT_str(p__$1));
}));

//# sourceMappingURL=promesa.impl.js.map
