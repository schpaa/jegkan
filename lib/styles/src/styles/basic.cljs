(ns styles.basic
  (:require [lambdaisland.ornament :as o]
            ["@heroicons/react/solid" :as solid]
            ["@heroicons/react/outline" :as outline]
            [headlessui-reagent.core :as ui]
            [schpaa.debug :as l]
            [styles.dialog]
            [styles.menu]
            [styles.core :as sc]
            [styles.multiselect]
            [jegkan.spa]
            [re-frame.core :as rf]
            [kee-frame.core]))

(def categories
  [{:name  "R"
    :posts [{:id            1
             :title         "Does drinking coffee make you smarter? asd asd asd asd asd as dasd"
             :date          "5h ago"
             :comment-count 5
             :share-count   2}
            {:id            2
             :title         "So you've bought coffee... now what?"
             :date          "2h ago"
             :comment-count 3
             :share-count   2}
            {:id            2
             :title         "So you've bought coffee... now what?"
             :date          "2h ago"
             :comment-count 3
             :share-count   2}
            {:id            2
             :title         "So you've bought coffee... now what?"
             :date          "2h ago"
             :comment-count 3
             :share-count   2}]}
   {:name  "P"
    :posts [{:id            1
             :title         "Is tech making coffee better or worse?"
             :date          "Jan 7"
             :comment-count 29
             :share-count   16}
            {:id            2
             :title         "The most innovative things happening in coffee"
             :date          "Mar 19"
             :comment-count 24
             :content-fn    [:div
                             [:div "combobox with selectable elements"]
                             [styles.multiselect/multiselect-example]]
             :share-count   12}]}
   {:name  "T"
    :posts [{:id         2
             :title      "The worst advice we've ever heard about coffee"
             :content-fn [sc/row-end
                          [styles.menu/menu-example] [styles.menu/menu-example]]}
            ;:date          "4d ago"
            ;:comment-count 1
            ;:share-count   2}
            {:id            1
             :title         "Ask Mea Anything: 10 answers to your questions about coffee"
             :date          "2d ago"
             :comment-count 9
             :share-count   5}]}
   {:name  "X"
    :posts [{:id    1
             :title "ugh"}]}
   {:name  "X"
    :posts [{:id         1
             :title      "no title"
             :content-fn [:div.space-y-4
                          [styles.dialog/modal-example]
                          [styles.dialog/modal-example-with-timeout]]}]}
   {:name  "X"
    :posts [{:id         1
             :title      "no title"
             :content-fn [:div.space-y-4
                          [jegkan.spa/topic {:path-params {:id "123"}}]
                          #_[styles.dialog/modal-example-with-timeout]]}]}])

(o/defstyled tab-group :div
  ([{:as m} & ch]
   [ui/tab-group m ch]))

(o/defstyled tab-list-styled :div
  :flex :flex-col :w-auto :overflow-y-autox :h-auto :space-y-4
  :flex-shrink-0
  :p-1 :rounded :justify-start :gap-2
  {:background "var(--surface3)"})

(o/defstyled tab-panel :div
  [:.spacer :space-y-8]
  ([xs selectedIndex tabpanel-render]
   [ui/tab-panel
    {:class [:spacer]}
    (for [each xs]
      [tabpanel-render selectedIndex each])]))

(o/defstyled tab-panels-styled :div
  :rounded :p-4 :h-full
  ([xs tabpanel-render]
   [ui/tab-panels
    {:as    "div"
     :class []}
    (fn [{:keys [selectedIndex]}]
      (for [{:keys [posts name] :as each} xs]
        ^{:key name}
        [tab-panel posts selectedIndex tabpanel-render]))]))

(o/defstyled tabpanel-render :div
  :overflow-y-autox :xw-full :bg-pink-200 :shrink-0 :grow-1
  [:.title :text-sm :font-medium]
  [:.subtitle :text-xs :opacity-50]
  ([selectedIndex e]
   [:<>
    ;[:div [l/ppre-x e "e"]]
    [:div
     ;[:div selectedIndex]
     [:div.title (:title e)]
     [:div.subtitle (:date e)]
     (:content-fn e)]]))

(defn tab-list-proper
  [xs content]
  (for [each xs]
    ^{:key each}
    [ui/tab
     {:as "div"}
     (fn [{:keys [selected]}] [content selected each])]))

(o/defstyled tab-render-styled :button
  [:div :rounded :shrink-0 :w-auto :h-auto :p-1]
  [:.selected :shadow {:background "var(--surface2)"
                       :color      "var(--text1)"}]
  [:.regular {:color "var(--text2)"}]
  ([selected content]
   [:div {:class [(if selected :selected :regular)]}
    [:> content {:class [:w-auto]}]
    [:div.text-xs "label"]]))

(defn tabs-example'' []
  [tab-group {:default-index 1
              :vertical      true}
   [:div.fixed.inset-0
    [:div.grid.h-full
     {:style {:column-gap            "var(--size-0)"
              :grid-template-columns "min-content 1fr"
              :grid-auto-rows        "1fr"}}
     [:div.h-full.p-px
      [tab-list-styled (tab-list-proper [solid/CollectionIcon
                                         solid/ClockIcon
                                         outline/HomeIcon
                                         solid/CogIcon
                                         solid/ArchiveIcon
                                         solid/CalendarIcon] tab-render-styled)]]
     [:div.bg-white.h-full.overflow-y-auto
      [tab-panels-styled categories tabpanel-render]]]]])

;region use this version

(o/defstyled nicer-tab :div
  [:& :select-none]
  [:div.selected :p-2 :bg-red-500]
  [:div.regular :p-2]
  ([{:keys [selected]} ch]
   [:<>
    [:div {:class (if selected :selected :regular)} ch]]))

(defn tabs-example'''
  "tabs-example'' does not use urls, this one does"
  []
  (let [route @(rf/subscribe [:kee-frame/route])
        data [{:id 0 :route-name :r.forsiden :icon solid/CollectionIcon :text "clock"}
              {:id 1 :route-name :r.baksiden :icon solid/ClockIcon :text "stuff"}
              {:id 2 :route-name :r.oppsett :icon solid/CogIcon :text "cog"}]
        data-get (fn [id] (get (zipmap (map :id data) data) id))
        tab (fn [id] (let [{:keys [icon text route-name]} (data-get id)]
                       (nicer-tab
                         {:selected (= route-name (-> route :data :name))}
                         [sc/col
                          {:on-click #(rf/dispatch [:app/navigate-to [route-name]])}
                          [:> icon]
                          [:div.text-center text]])))]
    [:div.fixed.inset-0
     [:div.grid.h-full
      {:style {:column-gap            "var(--size-0)"
               :grid-template-columns "min-content 1fr"
               :grid-auto-rows        "1fr"}}
      (into [:div.h-full.p-px.space-y-2] (map tab (keys (zipmap (map :id data) data))))

      [:div.bg-white.h-full.overflow-y-auto
       [kee-frame.core/case-route (fn [route] (-> route :data :name))
        :r.forsiden [styles.multiselect/multiselect-example]
        :r.baksiden [:div.space-y-4
                     [styles.dialog/modal-example]
                     [styles.dialog/modal-example-with-timeout]]
        :r.oppsett [:div.space-y-4 [:div "oppsett"]]
        [:div.space-y-4 "?"]]
       #_[:div
          [:div "Panels"]
          [l/ppre route]]]]]))

(comment
  (do
    (let [data [{:id 0 :name :r.front :icon solid/CollectionIcon}
                {:id 1 :name :r.topic :icon solid/ClockIcon}]
          tab (fn [id] [:div [:> (:icon (get (zipmap (map :id data) data) id))]])]
      (zipmap (map :id data) data))))
