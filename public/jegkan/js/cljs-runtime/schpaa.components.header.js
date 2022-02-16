goog.provide('schpaa.components.header');
schpaa.components.header.header_id = new cljs.core.Keyword(null,"header","header",119441134);
schpaa.components.header.icon_switch = (function schpaa$components$header$icon_switch(menu_direction,p__75603,p__75604){
var map__75608 = p__75603;
var map__75608__$1 = cljs.core.__destructure_map(map__75608);
var icon_a = map__75608__$1;
var map__75609 = p__75604;
var map__75609__$1 = cljs.core.__destructure_map(map__75609);
var icon_b = map__75609__$1;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative.text-white.p-4","div.relative.text-white.p-4",-84451293),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(icon_a))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.touch,new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(icon_a)], null)], null)], null);
});
schpaa.components.header.left_icon = (function schpaa$components$header$left_icon(p__75618){
var map__75619 = p__75618;
var map__75619__$1 = cljs.core.__destructure_map(map__75619);
var user_auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75619__$1,new cljs.core.Keyword(null,"user-auth","user-auth",605869084));
var navigate_to_user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75619__$1,new cljs.core.Keyword(null,"navigate-to-user","navigate-to-user",605684985));
var navigate_to_home = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75619__$1,new cljs.core.Keyword(null,"navigate-to-home","navigate-to-home",519585018));
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75619__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var map__75624 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"master-header","master-header",264661964));
var map__75624__$1 = cljs.core.__destructure_map(map__75624);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75624__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75624__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var br = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75624__$1,new cljs.core.Keyword(null,"br","br",934104792));
var frontpage_QMARK_ = (function (){var or__4253__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([(current_page.cljs$core$IFn$_invoke$arity$0 ? current_page.cljs$core$IFn$_invoke$arity$0() : current_page.call(null))]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r.new-booking","r.new-booking",-1197445412),new cljs.core.Keyword(null,"r.forsiden","r.forsiden",353619513),new cljs.core.Keyword(null,"r.booking-blog","r.booking-blog",208102425)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([(current_page.cljs$core$IFn$_invoke$arity$0 ? current_page.cljs$core$IFn$_invoke$arity$0() : current_page.call(null))]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r.forsiden","r.forsiden",353619513),new cljs.core.Keyword(null,"r.kalender","r.kalender",-1509690959),new cljs.core.Keyword(null,"r.annet","r.annet",-1738734535)], null));
}
})();
if(cljs.core.truth_(frontpage_QMARK_)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex.flex-center","div.flex.flex.flex-center",-2000132846),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (navigate_to_user.cljs$core$IFn$_invoke$arity$0 ? navigate_to_user.cljs$core$IFn$_invoke$arity$0() : navigate_to_user.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rounded-md","rounded-md",-93392870),new cljs.core.Keyword(null,"hover:bg-gray-200","hover:bg-gray-200",-1238934462),new cljs.core.Keyword(null,"m-2","m-2",1487145233)], null),br,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fg,bg_], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.relative","div.relative",430334058),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (navigate_to_user.cljs$core$IFn$_invoke$arity$0 ? navigate_to_user.cljs$core$IFn$_invoke$arity$0() : navigate_to_user.call(null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.touch,new cljs.core.Keyword(null,"circle-user","circle-user",-1059372007)], null)], null),(cljs.core.truth_((user_auth.cljs$core$IFn$_invoke$arity$0 ? user_auth.cljs$core$IFn$_invoke$arity$0() : user_auth.call(null)))?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.absolute.inset-0.animate-slow-ping.text-alt","div.absolute.inset-0.animate-slow-ping.text-alt",1444684369),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (navigate_to_user.cljs$core$IFn$_invoke$arity$0 ? navigate_to_user.cljs$core$IFn$_invoke$arity$0() : navigate_to_user.call(null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.touch,new cljs.core.Keyword(null,"circle-filled","circle-filled",-1592467524)], null)], null))], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.flex.flex-center","div.flex.flex.flex-center",-2000132846),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (navigate_to_home.cljs$core$IFn$_invoke$arity$0 ? navigate_to_home.cljs$core$IFn$_invoke$arity$0() : navigate_to_home.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rounded-md","rounded-md",-93392870),new cljs.core.Keyword(null,"hover:bg-gray-200","hover:bg-gray-200",-1238934462),new cljs.core.Keyword(null,"m-2","m-2",1487145233)], null),br,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fg,bg_], 0))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (navigate_to_home.cljs$core$IFn$_invoke$arity$0 ? navigate_to_home.cljs$core$IFn$_invoke$arity$0() : navigate_to_home.call(null));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.touch,new cljs.core.Keyword(null,"house","house",1139589178)], null)], null)], null);
}
});
schpaa.components.header.right_icon = (function schpaa$components$header$right_icon(p__75638){
var map__75639 = p__75638;
var map__75639__$1 = cljs.core.__destructure_map(map__75639);
var menu_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75639__$1,new cljs.core.Keyword(null,"menu-direction","menu-direction",-285147796));
var get_menuopen_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75639__$1,new cljs.core.Keyword(null,"get-menuopen-fn","get-menuopen-fn",-419991884));
var toggle_menu_open = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75639__$1,new cljs.core.Keyword(null,"toggle-menu-open","toggle-menu-open",1049902975));
var map__75643 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"master-header","master-header",264661964));
var map__75643__$1 = cljs.core.__destructure_map(map__75643);
var bg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75643__$1,new cljs.core.Keyword(null,"bg-","bg-",-1571991340));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75643__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var br = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75643__$1,new cljs.core.Keyword(null,"br","br",934104792));
if(cljs.core.truth_((get_menuopen_fn.cljs$core$IFn$_invoke$arity$0 ? get_menuopen_fn.cljs$core$IFn$_invoke$arity$0() : get_menuopen_fn.call(null)))){
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.xw-16.xh-16.flex.flex.flex-center","div.xw-16.xh-16.flex.flex.flex-center",-482928966),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rounded-md","rounded-md",-93392870),new cljs.core.Keyword(null,"xgroup-hover:border-2","xgroup-hover:border-2",-2038584646),new cljs.core.Keyword(null,"m-2","m-2",1487145233)], null),br,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([bg_,fg], 0)),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__75634_SHARP_){
p1__75634_SHARP_.stopPropagation();

return (toggle_menu_open.cljs$core$IFn$_invoke$arity$0 ? toggle_menu_open.cljs$core$IFn$_invoke$arity$0() : toggle_menu_open.call(null));
})], null),(function (){var icon = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1((function (){var G__75644 = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("schpaa.components.widgets","get-tab","schpaa.components.widgets/get-tab",-474259190)], null)));
return (schpaa.style.color_map.cljs$core$IFn$_invoke$arity$1 ? schpaa.style.color_map.cljs$core$IFn$_invoke$arity$1(G__75644) : schpaa.style.color_map.call(null,G__75644));
})());
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.touch,(cljs.core.truth_((get_menuopen_fn.cljs$core$IFn$_invoke$arity$0 ? get_menuopen_fn.cljs$core$IFn$_invoke$arity$0() : get_menuopen_fn.call(null)))?null:(function (){var or__4253__auto__ = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(icon);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"hamburger","hamburger",1868602494);
}
})())], null);
})()], null);
});
schpaa.components.header.home_icon = (function schpaa$components$header$home_icon(current_page){
var icon = (cljs.core.truth_((function (){var or__4253__auto__ = cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([(current_page.cljs$core$IFn$_invoke$arity$0 ? current_page.cljs$core$IFn$_invoke$arity$0() : current_page.call(null))]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r.new-booking","r.new-booking",-1197445412),new cljs.core.Keyword(null,"r.forsiden","r.forsiden",353619513),new cljs.core.Keyword(null,"r.booking-blog","r.booking-blog",208102425)], null));
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([(current_page.cljs$core$IFn$_invoke$arity$0 ? current_page.cljs$core$IFn$_invoke$arity$0() : current_page.call(null))]),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r.forsiden","r.forsiden",353619513),new cljs.core.Keyword(null,"r.kalender","r.kalender",-1509690959),new cljs.core.Keyword(null,"r.annet","r.annet",-1738734535)], null));
}
})())?new cljs.core.Keyword(null,"house","house",1139589178):new cljs.core.Keyword(null,"circle-user","circle-user",-1059372007));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.w-5.h-5","div.w-5.h-5",-953415096),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-alt","text-alt",-54173741)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.adapt,icon,1.4], null)], null);
});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app","name","app/name",1843771984),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"->","->",514830339),new cljs.core.Keyword("app","name","app/name",1843771984)], 0));
schpaa.components.header.title = (function schpaa$components$header$title(p__75658){
var map__75659 = p__75658;
var map__75659__$1 = cljs.core.__destructure_map(map__75659);
var m = map__75659__$1;
var current_page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75659__$1,new cljs.core.Keyword(null,"current-page","current-page",-101294180));
var menu_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75659__$1,new cljs.core.Keyword(null,"menu-direction","menu-direction",-285147796));
var current_page_title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75659__$1,new cljs.core.Keyword(null,"current-page-title","current-page-title",209597702));
var current_page_subtitle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75659__$1,new cljs.core.Keyword(null,"current-page-subtitle","current-page-subtitle",690433829));
var user_auth = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75659__$1,new cljs.core.Keyword(null,"user-auth","user-auth",605869084));
var map__75660 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"master-header","master-header",264661964));
var map__75660__$1 = cljs.core.__destructure_map(map__75660);
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75660__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75660__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var fg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75660__$1,new cljs.core.Keyword(null,"fg+","fg+",512668122));
var p_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75660__$1,new cljs.core.Keyword(null,"p+","p+",-661111684));
var p_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75660__$1,new cljs.core.Keyword(null,"p-","p-",-1938098196));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75660__$1,new cljs.core.Keyword(null,"p","p",151049309));
var sub_text = (cljs.core.truth_((user_auth.cljs$core$IFn$_invoke$arity$0 ? user_auth.cljs$core$IFn$_invoke$arity$0() : user_auth.call(null)))?new cljs.core.Keyword(null,"display-name","display-name",694513143).cljs$core$IFn$_invoke$arity$1((user_auth.cljs$core$IFn$_invoke$arity$0 ? user_auth.cljs$core$IFn$_invoke$arity$0() : user_auth.call(null))):"Registrer deg / Logg inn");
var app_name = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app","name","app/name",1843771984)], null)));
var title = (current_page_title.cljs$core$IFn$_invoke$arity$0 ? current_page_title.cljs$core$IFn$_invoke$arity$0() : current_page_title.call(null));
var vec__75661 = ((cljs.core.vector_QMARK_(title))?title:new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [title,null], null));
var long_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75661,(0),null);
var short_form = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75661,(1),null);
var sub_header = (cljs.core.truth_((user_auth.cljs$core$IFn$_invoke$arity$0 ? user_auth.cljs$core$IFn$_invoke$arity$0() : user_auth.call(null)))?(current_page_subtitle.cljs$core$IFn$_invoke$arity$0 ? current_page_subtitle.cljs$core$IFn$_invoke$arity$0() : current_page_subtitle.call(null)):"Velkommen");
if(cljs.core.truth_(menu_direction)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.antialiased","div.flex.items-center.antialiased",977295576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"justify-start","justify-start",-1744087115),new cljs.core.Keyword(null,"text-lg","text-lg",-766687513),new cljs.core.Keyword(null,"antialiased","antialiased",-788347243),new cljs.core.Keyword(null,"leading-snug","leading-snug",1391476157),new cljs.core.Keyword(null,"font-bold","font-bold",272258030)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.leading-none.whitespace-nowrap","div.leading-none.whitespace-nowrap",-1207508278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-left","text-left",-1347161610)], null),fg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-0.flex.items-center.divide-dotted.divide-x-2.divide-gray-400","div.py-0.flex.items-center.divide-dotted.divide-x-2.divide-gray-400",793610205),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(fg,p_PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leading-5","leading-5",-416161606)], null)], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-2","span.pr-2",1899405119),schpaa.components.header.home_icon(current_page)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-2","span.pl-2",1759026535),sub_header," \u00B7 ",app_name], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.leading-5","div.leading-5",-323171411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fg_PLUS_,p_)], null),sub_text], null)], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.items-center.antialiased","div.flex.items-center.antialiased",977295576),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"justify-end","justify-end",-1748597057),new cljs.core.Keyword(null,"text-lg","text-lg",-766687513),new cljs.core.Keyword(null,"antialiased","antialiased",-788347243),new cljs.core.Keyword(null,"leading-snug","leading-snug",1391476157),new cljs.core.Keyword(null,"font-bold","font-bold",272258030)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.leading-none.whitespace-nowrap","div.leading-none.whitespace-nowrap",-1207508278),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-right","text-right",1665019378)], null),fg,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p_], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.py-0.flex.items-center.divide-dotted.divide-x-2.divide-gray-400","div.py-0.flex.items-center.divide-dotted.divide-x-2.divide-gray-400",793610205),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(fg,p_PLUS_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leading-5","leading-5",-416161606)], null)], 0))], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pr-2","span.pr-2",1899405119),app_name," \u00B7 ",sub_header], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.pl-2","span.pl-2",1759026535),schpaa.components.header.home_icon(current_page)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.leading-5","div.leading-5",-323171411),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fg_PLUS_,p_)], null),sub_text], null)], null)], null);
}
});
schpaa.components.header.render = (function schpaa$components$header$render(p__75677){
var map__75678 = p__75677;
var map__75678__$1 = cljs.core.__destructure_map(map__75678);
var m = map__75678__$1;
var menu_direction = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75678__$1,new cljs.core.Keyword(null,"menu-direction","menu-direction",-285147796));
var map__75681 = schpaa.style.fbg_SINGLEQUOTE_(new cljs.core.Keyword(null,"master-header","master-header",264661964));
var map__75681__$1 = cljs.core.__destructure_map(map__75681);
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75681__$1,new cljs.core.Keyword(null,"bg","bg",-206688421));
var fg_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75681__$1,new cljs.core.Keyword(null,"fg-","fg-",1482026450));
var fg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75681__$1,new cljs.core.Keyword(null,"fg","fg",-101797208));
var fg_PLUS_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75681__$1,new cljs.core.Keyword(null,"fg+","fg+",512668122));
var hd = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75681__$1,new cljs.core.Keyword(null,"hd","hd",242175935));
var p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75681__$1,new cljs.core.Keyword(null,"p","p",151049309));
var p_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75681__$1,new cljs.core.Keyword(null,"p-","p-",-1938098196));
var he = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75681__$1,new cljs.core.Keyword(null,"he","he",1913907192));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.w-full.group","div.grid.w-full.group",-343928059),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),bg,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),(cljs.core.truth_(menu_direction)?"4rem 1fr 4rem":"4rem 1fr 4rem"),new cljs.core.Keyword(null,"grid-auto-rows","grid-auto-rows",-113194069),"4rem"], null)], null),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386)], null),(function (){var G__75685 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.components.header.right_icon,m], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.self-center","div.self-center",-33666552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.components.header.title,m], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.components.header.left_icon,m], null)], null);
if(cljs.core.truth_(menu_direction)){
return cljs.core.reverse(G__75685);
} else {
return G__75685;
}
})())], null);
});

//# sourceMappingURL=schpaa.components.header.js.map
