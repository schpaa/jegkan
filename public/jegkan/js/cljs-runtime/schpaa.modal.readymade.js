goog.provide('schpaa.modal.readymade');
schpaa.modal.readymade.modal_form = (function schpaa$modal$readymade$modal_form(p__56002){
var map__56003 = p__56002;
var map__56003__$1 = cljs.core.__destructure_map(map__56003);
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56003__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56003__$1,new cljs.core.Keyword(null,"ok","ok",967785236));
var ref = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.re_frame.form,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),true,new cljs.core.Keyword(null,"form-id","form-id",-158754567),form_id,new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"feilmelding","feilmelding",-860543946),""], null),new cljs.core.Keyword(null,"clean-on-unmount?","clean-on-unmount?",-1144411068),true,new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (_){
var temp__5753__auto__ = cljs.core.deref(ref);
if(cljs.core.truth_(temp__5753__auto__)){
var r = temp__5753__auto__;
return r.focus();
} else {
return null;
}
}),new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p__56004){
var map__56005 = p__56004;
var map__56005__$1 = cljs.core.__destructure_map(map__56005);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56005__$1,new cljs.core.Keyword(null,"values","values",372645556));
(ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(values) : ok.call(null,values));

return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
})], null),(function (p__56006){
var map__56007 = p__56006;
var map__56007__$1 = cljs.core.__destructure_map(map__56007);
var props = map__56007__$1;
var dirty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56007__$1,new cljs.core.Keyword(null,"dirty","dirty",729553281));
var handle_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56007__$1,new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917));
var form_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56007__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
if(cljs.core.truth_(dirty)){
nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.dirty","e.dirty",-1025110067)], 0));
} else {
nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.clean","e.clean",-836971414)], 0));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),form_id__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),handle_submit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-4","div.space-y-4",-437067713),schpaa.components.fields.textarea.cljs$core$IFn$_invoke$arity$variadic(schpaa.components.fields.placeholder(schpaa.components.fields.save_ref(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),(1)),ref),"Kort beskrivelse"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804),"Meld om feil",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"feilmelding","feilmelding",-860543946)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.gap-4","div.flex.justify-end.gap-4",1524649759),schpaa.button.danger_button(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),(!((!((dirty == null)))))], null),"Lagre"),schpaa.button.regular_button(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
})], null),"Avbryt")], null)], null)], null);
})], null);
});
/**
 * provide a store function
 */
schpaa.modal.readymade.modal_form2 = (function schpaa$modal$readymade$modal_form2(p__56008){
var map__56009 = p__56008;
var map__56009__$1 = cljs.core.__destructure_map(map__56009);
var form_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56009__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56009__$1,new cljs.core.Keyword(null,"ok","ok",967785236));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fork.re_frame.form,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"prevent-default?","prevent-default?",-1165567888),true,new cljs.core.Keyword(null,"initial-values","initial-values",1392120293),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),""], null),new cljs.core.Keyword(null,"form-id","form-id",-158754567),form_id,new cljs.core.Keyword(null,"clean-on-unmount?","clean-on-unmount?",-1144411068),true,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),(function (p__56010){
var map__56011 = p__56010;
var map__56011__$1 = cljs.core.__destructure_map(map__56011);
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56011__$1,new cljs.core.Keyword(null,"values","values",372645556));
(ok.cljs$core$IFn$_invoke$arity$1 ? ok.cljs$core$IFn$_invoke$arity$1(values) : ok.call(null,values));

return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
})], null),(function (p__56012){
var map__56013 = p__56012;
var map__56013__$1 = cljs.core.__destructure_map(map__56013);
var props = map__56013__$1;
var dirty = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56013__$1,new cljs.core.Keyword(null,"dirty","dirty",729553281));
var handle_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56013__$1,new cljs.core.Keyword(null,"handle-submit","handle-submit",1732326917));
var form_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56013__$1,new cljs.core.Keyword(null,"form-id","form-id",-158754567));
if(cljs.core.truth_(dirty)){
nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.dirty","e.dirty",-1025110067)], 0));
} else {
nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.clean","e.clean",-836971414)], 0));
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),form_id__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),handle_submit], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-4","div.space-y-4",-437067713),schpaa.components.fields.textarea.cljs$core$IFn$_invoke$arity$variadic(schpaa.components.fields.placeholder(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),(1)),"Kort beskrivelse"),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804),"Melding til turkamerater",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"description","description",-1428560544)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.flex.justify-end.gap-4","div.flex.justify-end.gap-4",1524649759),schpaa.button.regular_button(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return nrpk.fsm_helpers.send.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"e.hide","e.hide",1337726301)], 0));
})], null),"Avbryt"),schpaa.button.danger_button(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"submit","submit",-49315317),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),false], null),"Lagre")], null)], null)], null);
})], null);
});
schpaa.modal.readymade.toggle_favorite = (function schpaa$modal$readymade$toggle_favorite(id){
var user_auth = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.core","user-auth","db.core/user-auth",-1883386069)], null));
return alert(schpaa.debug.ppr(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["toggle-fav",id,new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(user_auth))], null)));
});
/**
 * A view that is a presentation of the boat with some details and a Star to click on
 */
schpaa.modal.readymade.modal_header = (function schpaa$modal$readymade$modal_header(p__56014){
var map__56015 = p__56014;
var map__56015__$1 = cljs.core.__destructure_map(map__56015);
var toggle_favorite_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56015__$1,new cljs.core.Keyword(null,"toggle-favorite-fn","toggle-favorite-fn",1863737762));
var read_db_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56015__$1,new cljs.core.Keyword(null,"read-db-fn","read-db-fn",-841687180));
var star = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (toggle_favorite_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_favorite_fn.cljs$core$IFn$_invoke$arity$0() : toggle_favorite_fn.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-amber-500"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.small,new cljs.core.Keyword(null,"star","star",279424429)], null)], null);
var map__56016 = (read_db_fn.cljs$core$IFn$_invoke$arity$0 ? read_db_fn.cljs$core$IFn$_invoke$arity$0() : read_db_fn.call(null));
var map__56016__$1 = cljs.core.__destructure_map(map__56016);
var slot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56016__$1,new cljs.core.Keyword(null,"slot","slot",240229571));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56016__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var navn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56016__$1,new cljs.core.Keyword(null,"navn","navn",1985693629));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56016__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56016__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.gap-2.p-4.w-full.bg-gray-300","div.grid.gap-2.p-4.w-full.bg-gray-300",2086755380),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"3rem 1fr min-content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.self-start.justify-self-center","div.self-start.justify-self-center",-1778785484),schpaa.components.views.number_view(number)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.leading-snug","div.leading-snug",-1092887337),schpaa.components.views.name_view(navn),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.text-sm","div.text-sm",1753784969),cljs.core.PersistentArrayMap.EMPTY,schpaa.components.views.normalize_kind(kind)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),schpaa.components.views.slot_view(slot)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.justify-self-center.self-start.pt-px","div.justify-self-center.self-start.pt-px",-506531784),star], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-2.font-normal.text-base","div.col-span-2.font-normal.text-base",-1044983973),description], null)], null);
});
/**
 * A view that is a presentation of a user with some details and a Star to click on?
 */
schpaa.modal.readymade.user_modal_header = (function schpaa$modal$readymade$user_modal_header(p__56017){
var map__56018 = p__56017;
var map__56018__$1 = cljs.core.__destructure_map(map__56018);
var toggle_favorite_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56018__$1,new cljs.core.Keyword(null,"toggle-favorite-fn","toggle-favorite-fn",1863737762));
var read_db_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56018__$1,new cljs.core.Keyword(null,"read-db-fn","read-db-fn",-841687180));
var star = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (toggle_favorite_fn.cljs$core$IFn$_invoke$arity$0 ? toggle_favorite_fn.cljs$core$IFn$_invoke$arity$0() : toggle_favorite_fn.call(null));
}),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-amber-500"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.icon.small,new cljs.core.Keyword(null,"star","star",279424429)], null)], null);
var map__56019 = (read_db_fn.cljs$core$IFn$_invoke$arity$0 ? read_db_fn.cljs$core$IFn$_invoke$arity$0() : read_db_fn.call(null));
var map__56019__$1 = cljs.core.__destructure_map(map__56019);
var m = map__56019__$1;
var nøkkelnummer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56019__$1,new cljs.core.Keyword(null,"n\u00F8kkelnummer","n\u00F8kkelnummer",222939941));
var telefon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56019__$1,new cljs.core.Keyword(null,"telefon","telefon",1235686342));
var navn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56019__$1,new cljs.core.Keyword(null,"navn","navn",1985693629));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56019__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56019__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.p-4","div.p-4",-165933168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),navn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),telefon], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),nøkkelnummer], null)], null);
});
/**
 * 
 */
schpaa.modal.readymade.modal_booking_details_dialogcontent = (function schpaa$modal$readymade$modal_booking_details_dialogcontent(id){
var read_db_fn = (function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (a,e){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(e),e);
}),cljs.core.PersistentArrayMap.EMPTY,booking.database.read()),id);
});
var map__56020 = read_db_fn();
var map__56020__$1 = cljs.core.__destructure_map(map__56020);
var m = map__56020__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var slot = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,new cljs.core.Keyword(null,"slot","slot",240229571));
var number = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,new cljs.core.Keyword(null,"number","number",1570378438));
var navn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,new cljs.core.Keyword(null,"navn","navn",1985693629));
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56020__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.gap-2.text-base.font-normal.w-full","div.grid.gap-2.text-base.font-normal.w-full",-1434706198),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dark:text-white",new cljs.core.Keyword(null,"text-black","text-black",-1990796629)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"3rem 1fr min-content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3","div.col-span-3",1985322016),"modal booking title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3","div.col-span-3",1985322016),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.debug.ppre,m], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3","div.col-span-3",1985322016),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),start], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),end], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),schpaa.debug.ppr(selected)], null)], null)], null);
});
/**
 * 
 */
schpaa.modal.readymade.modal_booking_title2 = (function schpaa$modal$readymade$modal_booking_title2(m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.grid.gap-2.text-base.font-normal.w-full.p-4","div.grid.gap-2.text-base.font-normal.w-full.p-4",2064914112),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["dark:text-white",new cljs.core.Keyword(null,"text-black","text-black",-1990796629)], null),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),"3rem 1fr min-content"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3","div.col-span-3",1985322016),"modal booking title"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-span-3","div.col-span-3",1985322016),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.debug.ppre,m], null)], null)], null);
});
schpaa.modal.readymade.confirm_booking = (function schpaa$modal$readymade$confirm_booking(p__56021){
var map__56022 = p__56021;
var map__56022__$1 = cljs.core.__destructure_map(map__56022);
var m = map__56022__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56022__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56022__$1,new cljs.core.Keyword(null,"end","end",-268185958));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56022__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var uid = new cljs.core.Keyword(null,"uid","uid",-1447769400).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.core","user-auth","db.core/user-auth",-1883386069)], null))));
return schpaa.modal.form_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"header","header",119441134),schpaa.modal.readymade.modal_booking_title2(m),new cljs.core.Keyword(null,"form-id","form-id",-158754567),"modal-form",new cljs.core.Keyword(null,"ok","ok",967785236),(function (values){
var values__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$variadic(m,values,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"uid","uid",-1447769400),uid], null)], 0));
cljs.core.tap_GT_(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["save settings ",values__$1], null));

return booking.database.write(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"uid","uid",-1447769400),uid,new cljs.core.Keyword(null,"value","value",305978217),values__$1], null));
}),new cljs.core.Keyword(null,"form-fn","form-fn",813273806),(function (m__$1){
return schpaa.modal.readymade.modal_form2(m__$1);
})], null));
});
schpaa.modal.readymade.details_dialog_fn = (function schpaa$modal$readymade$details_dialog_fn(id){
return schpaa.modal.form_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wide","wide",-151772487),null], null), null),new cljs.core.Keyword(null,"ok","ok",967785236),(function (p1__56023_SHARP_){
return alert(p1__56023_SHARP_);
}),new cljs.core.Keyword(null,"header","header",119441134),schpaa.modal.readymade.modal_header(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-db-fn","read-db-fn",-841687180),(function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(logg.database.boat_db(),id);
}),new cljs.core.Keyword(null,"toggle-favorite-fn","toggle-favorite-fn",1863737762),(function (){
return schpaa.modal.readymade.toggle_favorite(id);
})], null)),new cljs.core.Keyword(null,"form-fn","form-fn",813273806),schpaa.modal.readymade.modal_form,new cljs.core.Keyword(null,"footer","footer",1606445390),"Trykk p\u00E5 stjernen for \u00E5 markere som favoritt"], null));
});
schpaa.modal.readymade.user_details_dialog_fn = (function schpaa$modal$readymade$user_details_dialog_fn(id){
return schpaa.modal.form_action(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"wide","wide",-151772487),null], null), null),new cljs.core.Keyword(null,"ok","ok",967785236),(function (p1__56024_SHARP_){
return alert(p1__56024_SHARP_);
}),new cljs.core.Keyword(null,"header","header",119441134),schpaa.modal.readymade.user_modal_header(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-db-fn","read-db-fn",-841687180),(function (){
return user.database.lookup_userinfo(id);
}),new cljs.core.Keyword(null,"toggle-favorite-fn","toggle-favorite-fn",1863737762),(function (){
return schpaa.modal.readymade.toggle_favorite(id);
})], null)),new cljs.core.Keyword(null,"form-fn","form-fn",813273806),schpaa.modal.readymade.modal_form,new cljs.core.Keyword(null,"footer","footer",1606445390),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)], null));
});
schpaa.modal.readymade.popup = (function schpaa$modal$readymade$popup(p__56025){
var map__56026 = p__56025;
var map__56026__$1 = cljs.core.__destructure_map(map__56026);
var m = map__56026__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56026__$1,new cljs.core.Keyword(null,"content","content",15833224));
return schpaa.modal.form_action(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"short-timeout","short-timeout",632822522),null], null), null),new cljs.core.Keyword(null,"form-fn","form-fn",813273806),(function (_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-4.p-4x","div.space-y-4.p-4x",1957727209),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),content)], null);
})], null),m));
});
/**
 * high-level
 */
schpaa.modal.readymade.message = (function schpaa$modal$readymade$message(p__56027){
var map__56028 = p__56027;
var map__56028__$1 = cljs.core.__destructure_map(map__56028);
var m = map__56028__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56028__$1,new cljs.core.Keyword(null,"content","content",15833224));
return schpaa.modal.form_action(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"weak-dim","weak-dim",1759988152),null], null), null),new cljs.core.Keyword(null,"form-fn","form-fn",813273806),(function (x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-4","div.space-y-4",-437067713),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),content),schpaa.button.build_buttonbar_content(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"button-captions","button-captions",1267399636),(function (_){
return "Ok";
}),new cljs.core.Keyword(null,"buttons","buttons",-1953831197),(function (){var or__4253__auto__ = new cljs.core.Keyword(null,"buttons","buttons",-1953831197).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1835149582),null], null), null);
}
})()], null))], null);
})], null),m));
});
/**
 * high-level
 */
schpaa.modal.readymade.ok_cancel = (function schpaa$modal$readymade$ok_cancel(p__56029){
var map__56030 = p__56029;
var map__56030__$1 = cljs.core.__destructure_map(map__56030);
var m = map__56030__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56030__$1,new cljs.core.Keyword(null,"content","content",15833224));
var button_captions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56030__$1,new cljs.core.Keyword(null,"button-captions","button-captions",1267399636));
var ok = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56030__$1,new cljs.core.Keyword(null,"ok","ok",967785236));
return schpaa.modal.form_action(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(m,new cljs.core.Keyword(null,"content","content",15833224),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"button-captions","button-captions",1267399636),new cljs.core.Keyword(null,"ok","ok",967785236)], 0)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form-fn","form-fn",813273806),(function (_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-8","div.space-y-8",1331824603),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632)], null),content),schpaa.button.build_buttonbar_content(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"button-captions","button-captions",1267399636),button_captions,new cljs.core.Keyword(null,"ok","ok",967785236),ok,new cljs.core.Keyword(null,"buttons","buttons",-1953831197),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ok","ok",967785236),null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),null], null), null)], null))], null);
})], null)));
});
schpaa.modal.readymade.open_complex = (function schpaa$modal$readymade$open_complex(){
var ok_fn = (function (p1__56031_SHARP_){
return alert(schpaa.debug.ppr(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["OK",p1__56031_SHARP_], null)));
});
var m = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"-timeout","-timeout",-1760782838),null,new cljs.core.Keyword(null,"weak-dim","weak-dim",1759988152),null], null), null),new cljs.core.Keyword(null,"footer","footer",1606445390),"footer",new cljs.core.Keyword(null,"form-id","form-id",-158754567),"modal-form",new cljs.core.Keyword(null,"ok","ok",967785236),ok_fn,new cljs.core.Keyword(null,"form-fn","form-fn",813273806),(function (m){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.space-y-4","div.space-y-4",-437067713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Above"], null),schpaa.modal.readymade.modal_form(m),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Below"], null)], null);
}),new cljs.core.Keyword(null,"header","header",119441134),schpaa.modal.readymade.modal_header(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"toggle-favorite-fn","toggle-favorite-fn",1863737762),(function (){
return alert("!");
}),new cljs.core.Keyword(null,"read-db-fn","read-db-fn",-841687180),(function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"slot","slot",240229571),"XY",new cljs.core.Keyword(null,"number","number",1570378438),"123",new cljs.core.Keyword(null,"navn","navn",1985693629),"Boatname",new cljs.core.Keyword(null,"kind","kind",-717265803),"grkayak",new cljs.core.Keyword(null,"description","description",-1428560544),"Fin og fjong"], null);
})], null))], null);
return schpaa.modal.form_action(m);
});

//# sourceMappingURL=schpaa.modal.readymade.js.map
