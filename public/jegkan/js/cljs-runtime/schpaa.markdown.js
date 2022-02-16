goog.provide('schpaa.markdown');
/**
 * Change special characters into HTML character entities.
 */
schpaa.markdown.escape_html = (function schpaa$markdown$escape_html(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.not((function (){var or__4253__auto__ = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4253__auto__)){
return or__4253__auto__;
} else {
return new cljs.core.Keyword(null,"codeblock","codeblock",-851153855).cljs$core$IFn$_invoke$arity$1(state);
}
})()))?clojure.string.escape(text,new cljs.core.PersistentArrayMap(null, 4, ["&","&amp;","<","&lt;","\"","&quot;","'","&#39;"], null)):text),state], null);
});
schpaa.markdown.capitalize = (function schpaa$markdown$capitalize(text,state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [text.toUpperCase(),state], null);
});
schpaa.markdown.md__GT_html_SINGLEQUOTE_ = (function schpaa$markdown$md__GT_html_SINGLEQUOTE_(content){
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic(content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845),true,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.markdown.capitalize], null),new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schpaa.markdown.escape_html], null),markdown.transformers.transformer_vector),new cljs.core.Keyword(null,"heading-anchors","heading-anchors",1713527866),true], 0));
});
schpaa.markdown.md__GT_html = (function schpaa$markdown$md__GT_html(md){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dangerouslySetInnerHTML","dangerouslySetInnerHTML",-554971138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"__html","__html",674048345),markdown.core.md__GT_html(md)], null)], null)], null);
});

//# sourceMappingURL=schpaa.markdown.js.map
