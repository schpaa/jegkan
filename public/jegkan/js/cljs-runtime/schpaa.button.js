goog.provide('schpaa.button');
schpaa.button.cta_button = (function schpaa$button$cta_button(attr,content){
var map__70086 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"button-cta","button-cta",-1492060475));
var map__70086__$1 = cljs.core.__destructure_map(map__70086);
var fg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70086__$1,new cljs.core.Keyword(null,"fg+","fg+",512668122));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70086__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70086__$1,new cljs.core.Keyword(null,"p","p",151049309));
var hd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70086__$1,new cljs.core.Keyword(null,"hd","hd",242175935));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70086__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var p_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70086__$1,new cljs.core.Keyword(null,"p-","p-",-1938098196));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70086__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70086__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var he = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70086__$1,new cljs.core.Keyword(null,"he","he",1913907192));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.rounded.shadow-sm","button.btn.rounded.shadow-sm",117428942),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bg_,fg_):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bg,fg))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.regular_hollow_button = (function schpaa$button$regular_hollow_button(attr,content){
var map__70089 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"button","button",1456579943));
var map__70089__$1 = cljs.core.__destructure_map(map__70089);
var bgt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70089__$1,new cljs.core.Keyword(null,"bgt","bgt",1988673423));
var bgb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70089__$1,new cljs.core.Keyword(null,"bgb","bgb",1937892865));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70089__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70089__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70089__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var bgc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70089__$1,new cljs.core.Keyword(null,"bgc","bgc",1938164440));
var br = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70089__$1,new cljs.core.Keyword(null,"br","br",934104792));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.xbtn","button.xbtn",-1754923792),cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(cljs.core.into,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fg,bgt):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fg,bg))], null)], 0)),(((content instanceof cljs.core.Keyword))?schpaa.icon.touch(content):content)], null);
});
schpaa.button.regular_button = (function schpaa$button$regular_button(attr,content){
var map__70090 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"button","button",1456579943));
var map__70090__$1 = cljs.core.__destructure_map(map__70090);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70090__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70090__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70090__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70090__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var brb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70090__$1,new cljs.core.Keyword(null,"brb","brb",-1594660392));
var br = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70090__$1,new cljs.core.Keyword(null,"br","br",934104792));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.rounded.shadow-sm","button.btn.rounded.shadow-sm",117428942),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bg_,fg_):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bg,fg))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.listitem_button_danger_small = (function schpaa$button$listitem_button_danger_small(attr,content){
var map__70091 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"listitem-button-danger","listitem-button-danger",-881803298));
var map__70091__$1 = cljs.core.__destructure_map(map__70091);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70091__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70091__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var bg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70091__$1,new cljs.core.Keyword(null,"bg+","bg+",-1302453137));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70091__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70091__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var brb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70091__$1,new cljs.core.Keyword(null,"brb","brb",-1594660392));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btnx.btn-smallx.w-12.h-12.shrink-0","button.btnx.btn-smallx.w-12.h-12.shrink-0",-1826513204),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg_,fg_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bg,fg))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.listitem_button_small_clear = (function schpaa$button$listitem_button_small_clear(attr,content){
var map__70092 = new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(attr);
var map__70092__$1 = cljs.core.__destructure_map(map__70092);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var bg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"bg+","bg+",-1302453137));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var br = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"br","br",934104792));
var brb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70092__$1,new cljs.core.Keyword(null,"brb","brb",-1594660392));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-10.h-10.shrink-0.m-1.rounded-md","button.w-10.h-10.shrink-0.m-1.rounded-md",1385464011),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(attr,new cljs.core.Keyword(null,"color-map","color-map",-207789684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"class","class",-2030961996)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(attr),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg_,fg_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg,fg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([br], 0))))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.listitem_button_small_justclear = (function schpaa$button$listitem_button_small_justclear(attr,content){
var map__70093 = new cljs.core.Keyword(null,"color-map","color-map",-207789684).cljs$core$IFn$_invoke$arity$1(attr);
var map__70093__$1 = cljs.core.__destructure_map(map__70093);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70093__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70093__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var bg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70093__$1,new cljs.core.Keyword(null,"bg+","bg+",-1302453137));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70093__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70093__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var br = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70093__$1,new cljs.core.Keyword(null,"br","br",934104792));
var brb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70093__$1,new cljs.core.Keyword(null,"brb","brb",-1594660392));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.w-10.h-10.shrink-0.rounded-md","button.w-10.h-10.shrink-0.rounded-md",-1304489900),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"color-map","color-map",-207789684)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg_,fg_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg,fg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([br], 0)))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.listitem_button_small = (function schpaa$button$listitem_button_small(attr,content){
var map__70094 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"listitem-button","listitem-button",936789424));
var map__70094__$1 = cljs.core.__destructure_map(map__70094);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70094__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70094__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var bg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70094__$1,new cljs.core.Keyword(null,"bg+","bg+",-1302453137));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70094__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70094__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var brb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70094__$1,new cljs.core.Keyword(null,"brb","brb",-1594660392));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btnx.btn-smallx.w-12.h-12.shrink-0","button.btnx.btn-smallx.w-12.h-12.shrink-0",-1826513204),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg_,fg_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bg,fg))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.regular_button_small = (function schpaa$button$regular_button_small(attr,content){
var map__70095 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"button","button",1456579943));
var map__70095__$1 = cljs.core.__destructure_map(map__70095);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var bg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"bg+","bg+",-1302453137));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var brb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70095__$1,new cljs.core.Keyword(null,"brb","brb",-1594660392));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btnx.btn-small.w-12.h-12.shrink-0","button.btnx.btn-small.w-12.h-12.shrink-0",1287280455),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg_,fg_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg_PLUS_,fg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.regular_button_small_toggled_off = (function schpaa$button$regular_button_small_toggled_off(attr,content){
var map__70096 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"button","button",1456579943));
var map__70096__$1 = cljs.core.__destructure_map(map__70096);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70096__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70096__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var bg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70096__$1,new cljs.core.Keyword(null,"bg+","bg+",-1302453137));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70096__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70096__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var brb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70096__$1,new cljs.core.Keyword(null,"brb","brb",-1594660392));
var bgc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70096__$1,new cljs.core.Keyword(null,"bgc","bgc",1938164440));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btnx.btn-small.shrink-0.w-12.h-12","button.btnx.btn-small.shrink-0.w-12.h-12",1673352608),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg_,fg_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bgc,fg_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.hollow_button_small = (function schpaa$button$hollow_button_small(attr,content){
var map__70097 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"button","button",1456579943));
var map__70097__$1 = cljs.core.__destructure_map(map__70097);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70097__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70097__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70097__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70097__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var br = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70097__$1,new cljs.core.Keyword(null,"br","br",934104792));
var brb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70097__$1,new cljs.core.Keyword(null,"brb","brb",-1594660392));
var bgc = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70097__$1,new cljs.core.Keyword(null,"bgc","bgc",1938164440));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.xbtn.btn-small.bg-transparent.shrink-0.w-12.h-12","button.xbtn.btn-small.bg-transparent.shrink-0.w-12.h-12",251806693),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg_,fg_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bgc,fg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([br], 0)))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.danger_button_small = (function schpaa$button$danger_button_small(attr,content){
var map__70098 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"button-danger","button-danger",-1724446248));
var map__70098__$1 = cljs.core.__destructure_map(map__70098);
var fg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"fg+","fg+",512668122));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"p","p",151049309));
var hd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"hd","hd",242175935));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var p_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"p-","p-",-1938098196));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var brb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"brb","brb",-1594660392));
var he = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70098__$1,new cljs.core.Keyword(null,"he","he",1913907192));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btnx.btn-small.w-12.h-12.shrink-0","button.btnx.btn-small.w-12.h-12.shrink-0",1287280455),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(bg_,fg_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([brb], 0)):cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(brb,bg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fg_PLUS_], 0)))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.danger_button = (function schpaa$button$danger_button(attr,content){
var map__70099 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"button-danger","button-danger",-1724446248));
var map__70099__$1 = cljs.core.__destructure_map(map__70099);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70099__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70099__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70099__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70099__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn","button.btn",-661984613),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled","disabled",-1529784218).cljs$core$IFn$_invoke$arity$1(attr))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bg_,fg_):cljs.core.concat.cljs$core$IFn$_invoke$arity$2(bg,fg))], null)),(((content instanceof cljs.core.Keyword))?schpaa.icon.small(content):content)], null);
});
schpaa.button.just_buttons = (function schpaa$button$just_buttons(vbuttons){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.gap-2.justify-end","div.flex.gap-2.justify-end",-1553276558),(function (){var iter__4652__auto__ = (function schpaa$button$just_buttons_$_iter__70100(s__70101){
return (new cljs.core.LazySeq(null,(function (){
var s__70101__$1 = s__70101;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__70101__$1);
if(temp__5753__auto__){
var s__70101__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__70101__$2)){
var c__4650__auto__ = cljs.core.chunk_first(s__70101__$2);
var size__4651__auto__ = cljs.core.count(c__4650__auto__);
var b__70103 = cljs.core.chunk_buffer(size__4651__auto__);
if((function (){var i__70102 = (0);
while(true){
if((i__70102 < size__4651__auto__)){
var e = cljs.core._nth(c__4650__auto__,i__70102);
cljs.core.chunk_append(b__70103,((cljs.core.vector_QMARK_(e))?(function (){var vec__70104 = e;
var caption = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70104,(0),null);
var color_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70104,(1),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70104,(2),null);
var G__70107 = color_class;
var G__70107__$1 = (((G__70107 instanceof cljs.core.Keyword))?G__70107.fqn:null);
switch (G__70107__$1) {
case "button-danger":
return schpaa.button.danger_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),action], null),caption);

break;
case "button-cta":
return schpaa.button.cta_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),action], null),caption);

break;
default:
return schpaa.button.regular_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),action], null),caption);

}
})():(function (){var G__70108 = e;
var G__70108__$1 = (((G__70108 instanceof cljs.core.Keyword))?G__70108.fqn:null);
switch (G__70108__$1) {
case "grow":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-grow","div.flex-grow",651082791)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
})()
));

var G__70161 = (i__70102 + (1));
i__70102 = G__70161;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__70103),schpaa$button$just_buttons_$_iter__70100(cljs.core.chunk_rest(s__70101__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__70103),null);
}
} else {
var e = cljs.core.first(s__70101__$2);
return cljs.core.cons(((cljs.core.vector_QMARK_(e))?(function (){var vec__70109 = e;
var caption = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70109,(0),null);
var color_class = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70109,(1),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__70109,(2),null);
var G__70112 = color_class;
var G__70112__$1 = (((G__70112 instanceof cljs.core.Keyword))?G__70112.fqn:null);
switch (G__70112__$1) {
case "button-danger":
return schpaa.button.danger_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),action], null),caption);

break;
case "button-cta":
return schpaa.button.cta_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),action], null),caption);

break;
default:
return schpaa.button.regular_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),action], null),caption);

}
})():(function (){var G__70113 = e;
var G__70113__$1 = (((G__70113 instanceof cljs.core.Keyword))?G__70113.fqn:null);
switch (G__70113__$1) {
case "grow":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex-grow","div.flex-grow",651082791)], null);

break;
default:
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null);

}
})()
),schpaa$button$just_buttons_$_iter__70100(cljs.core.rest(s__70101__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4652__auto__(vbuttons);
})()], null);
});
});
schpaa.button.build_buttonbar_content = (function schpaa$button$build_buttonbar_content(p__70114){
var map__70115 = p__70114;
var map__70115__$1 = cljs.core.__destructure_map(map__70115);
var buttons = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70115__$1,new cljs.core.Keyword(null,"buttons","buttons",-1953831197));
var button_captions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70115__$1,new cljs.core.Keyword(null,"button-captions","button-captions",1267399636));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70115__$1,new cljs.core.Keyword(null,"ok","ok",967785236));
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70115__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
var G__70116 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.gap-4","div.flex.justify-end.gap-4",1524649759)], null);
var G__70116__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(buttons))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70116,schpaa.button.regular_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
})], null),(function (){var or__4253__auto__ = (function (){var and__4251__auto__ = button_captions;
if(cljs.core.truth_(and__4251__auto__)){
return (button_captions.cljs$core$IFn$_invoke$arity$1 ? button_captions.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"close","close",1835149582)) : button_captions.call(null,new cljs.core.Keyword(null,"close","close",1835149582)));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "Ok";
}
})())):G__70116);
var G__70116__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"submit","submit",-49315317).cljs$core$IFn$_invoke$arity$1(buttons))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70116__$1,schpaa.button.regular_button(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"form","form",-1624062471),form_id,new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
})], null),(function (){var or__4253__auto__ = (function (){var and__4251__auto__ = button_captions;
if(cljs.core.truth_(and__4251__auto__)){
return (button_captions.cljs$core$IFn$_invoke$arity$1 ? button_captions.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"submit","submit",-49315317)) : button_captions.call(null,new cljs.core.Keyword(null,"submit","submit",-49315317)));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "Submit";
}
})())):G__70116__$1);
var G__70116__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"ok","ok",967785236).cljs$core$IFn$_invoke$arity$1(buttons))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70116__$2,schpaa.button.danger_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(ok.cljs$core$IFn$_invoke$arity$0 ? ok.cljs$core$IFn$_invoke$arity$0() : ok.call(null));

return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
})], null),(function (){var or__4253__auto__ = (function (){var and__4251__auto__ = button_captions;
if(cljs.core.truth_(and__4251__auto__)){
return (button_captions.cljs$core$IFn$_invoke$arity$1 ? button_captions.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"ok","ok",967785236)) : button_captions.call(null,new cljs.core.Keyword(null,"ok","ok",967785236)));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "Ok";
}
})())):G__70116__$2);
if(cljs.core.truth_(new cljs.core.Keyword(null,"cancel","cancel",-1964088360).cljs$core$IFn$_invoke$arity$1(buttons))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70116__$3,schpaa.button.regular_button(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
})], null),(function (){var or__4253__auto__ = (function (){var and__4251__auto__ = button_captions;
if(cljs.core.truth_(and__4251__auto__)){
return (button_captions.cljs$core$IFn$_invoke$arity$1 ? button_captions.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"cancel","cancel",-1964088360)) : button_captions.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360)));
} else {
return and__4251__auto__;
}
})();
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return "Avbryt";
}
})()));
} else {
return G__70116__$3;
}
});

//# sourceMappingURL=schpaa.button.js.map
