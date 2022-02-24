(ns styles.components
  (:require [headlessui-reagent.core :as ui]
            [lambdaisland.ornament :as o]
            [db.core :as db]
            [reagent.core :as r]
            [schpaa.debug :as l]
            [styles.core :as sc]
            ["@heroicons/react/solid" :as solid]
            ["@heroicons/react/outline" :as outline]
            [clojure.string :as string]))

(o/defstyled listbox-item :div
  :px-4 :h-12 :w-full :flex :items-center :justify-between :select-none
  sc/outlined)

(o/defstyled listbox :div
  :rounded-xl :w-full
  [:& :bg-gray-100 :text-base :relative]
  [:.small :text-xs]
  ([attr & c]
   [:<>
    [ui/listbox attr
     (fn [{:keys [] :as m}]
       [:div
        ;[:div {:class :small} (l/ppre m)]
        c])]]))

(o/defstyled listbox-button :div
  :border-black :border-2
  [:div.item :w-full]
  [:.opens sc/outlined]
  ([caption]
   [ui/listbox-button
    (fn [{:keys [open disabled]}]
      [:div.item [listbox-item {:class (if open :opens)} caption]])]))

(o/defstyled listbox-options :div
  :w-full :bg-green-500 :shadow-xl
  ;:absolute :w-full :py-1 :mt-1 :overflow-auto :text-base :bg-white :rounded-md :shadow-lg :max-h-60 :ring-1 :ring-black :ring-opacity-5 :focus:outline-none :sm:text-sm
  ;:bg-orange-500
  #_{:max-height       "10rem"
     :background-color :black
     :margins          "4rem"
     :overflow-y       :hidden}
  ([attr c]
   [ui/listbox-options attr
    (fn [{:keys [open] :as m}] [:div (l/ppre m) c])]))

(o/defstyled listbox-option :div
  [:.listbox-item :bg-gray-200]
  [:.listbox-disabled :text-gray-500 :text-opacity-50]
  [:.listbox-active :bg-black :text-white]
  [:.listbox-selected :font-bold]
  ([attr c]
   [:<> [ui/listbox-option attr
         (fn [{:keys [active selected disabled] :as m}]
           [:div
            {:class (cond-> [:listbox-item]
                      disabled (conj :listbox-disabled)
                      active (conj :listbox-active)
                      selected (conj :listbox-selected))}
            [listbox-item c]])]]))


#_(defn listbox-example []
    (reagent.core/with-let [people [{:id 1, :name "Wade Cooper"}
                                    {:id 2, :name "Arlene Mccoy"}
                                    {:id 3, :name "Devon Webb" :disabled true}
                                    {:id 4, :name "Tom Cook"}
                                    {:id 5, :name "Tanya Fox"}
                                    {:id 6, :name "Hellen Schmidt"}]
                            person-by-id (zipmap (map :id people) people)
                            !selected-person (reagent.core/atom (first people))]
      (let [selected-person @!selected-person]
        [ui/listbox
         {:value     (:id selected-person)
          :on-change #(reset! !selected-person (get person-by-id %1))}
         [ui/listbox-button (:name selected-person)]
         [ui/listbox-options
          {:static true}
          (for [person people]
            ^{:key (:id person)}
            [ui/listbox-option
             {:value    (:id person)
              :disabled (:disabled person)}
             (:name person)])]])))


(def people [{:id "1", :name "Wade Cooper"}
             {:id "2", :name "Arlene Mccoy"}
             {:id "3", :name "Devon Webb" :disabled true}
             {:id "4", :name "Tom Cook"}
             {:id "5", :name "Tanya Fox"}
             {:id "6", :name "Hellen Schmidt"}])

(def person-by-id (zipmap (map :id people) people))

(def people' (sort-by :name < (mapv (fn [[k v]] {:id (name k) :name (:navn v)}) @(db/on-value-reaction {:path ["users"]}))))

(def person-by-id' (zipmap (map :id people') people'))

;region combobox

(defn listbox-example []
  (r/with-let [!selected (r/atom (first people'))]
    (let [selected @!selected]
      [:div.relative.h-96 ;.xh-48.w-32.relative.overflow-visible
       [ui/listbox {:value     (:id selected)
                    :on-change #(reset! !selected (get person-by-id' %))}
        (fn [{:keys [open]}] [:div.relative.mt-1
                              ;[l/ppre open]
                              [ui/listbox-button
                               {:class "relative w-full py-2 pl-3 pr-10 text-left bg-white rounded shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm"}
                               [:span.block.truncate (:name selected)]
                               [:span.absolute.inset-y-0.right-0.flex.items-center.pr-2.pointer-events-none
                                [:> solid/SelectorIcon {:class "w-5 h-5 text-gray-400" :aria-hidden true}]]]
                              [ui/transition
                               {;:show true
                                :leave      "transition ease-in duration-100"
                                :leave-from "opacity-100"
                                :leave-to   "opacity-0"}

                               [ui/listbox-options
                                {:static false
                                 :class  "absolute  h-32 w-64 py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"}
                                (for [person people']
                                  ^{:key (:id person)}
                                  [ui/listbox-option
                                   {:value    (:id person)
                                    :disabled (:disabled person)
                                    :class    (fn [{:keys [active disabled]}]
                                                (concat [:cursor-default :select-none :relative :py-2 :pl-10 :pr-4]
                                                        (if disabled [:text-gray-400])
                                                        (if active
                                                          [:text-amber-900 :bg-amber-100]
                                                          [:text-gray-900])))}
                                   (fn [{:keys [selected]}]
                                     [:<>
                                      [:span.block.truncate {:class (if selected :font-medium :font-normal)}
                                       (:name person)]
                                      (when selected
                                        [:span.absolute.inset-y-0.left-0.flex.items-center.pl-3.text-amber-600
                                         [:> solid/CheckIcon {:class "w-5 h-5" :aria-hidden "true"}]])])])]]])]])))

(defn string->query [s]
  (string/replace (string/lower-case s) #"\s+" ""))

(defn combobox-example []
  (let []
    [:div
     ;[l/ppre (take 10 people)]
     (r/with-let [!selected (r/atom (first people'))
                  !query (r/atom "zxc")
                  !filtered-people (r/reaction
                                     (let [query @!query]
                                       (if (string/blank? query)
                                         people'
                                         (filter #(string/includes? (string->query (:name %)) query)
                                                 people'))))]
       (let [selected @!selected
             filtered-people @!filtered-people]
         [:div.w-72.h-72
          [ui/combobox {:value     (:id selected)
                        :on-change #(reset! !selected (get person-by-id' %))}
           [:div.relative.mt-1
            [:div.relative.w-full.text-left.bg-white.rounded-lg.shadow-md.cursor-default.focus:outline-none.focus-visible:ring-2.focus-visible:ring-opacity-75.focus-visible:ring-white.focus-visible:ring-offset-teal-300.focus-visible:ring-offset-2.sm:text-sm.overflow-hidden
             [ui/combobox-input {:class         "w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                                 :display-value (fn [id] (:name (get person-by-id' id)))
                                 :on-change     #(do
                                                   (tap> {:on-change (.-value (.-target %))})
                                                   (reset! !query (string->query (.-value (.-target %)))))}]
             [ui/combobox-button {:class "absolute inset-y-0 right-0 flex items-center pr-2"}
              [:> solid/SelectorIcon
               {:class       "w-5 h-5 text-gray-400"
                :aria-hidden true}]]]
            [ui/transition
             {:leave      "transition ease-in duration-100"
              :leave-from "opacity-100"
              :leave-to   "opacity-0"}
             [ui/combobox-options {:class "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"}
              [:<>
               (if (empty? filtered-people)
                 [:div {:class [:pr-4 :pl-10 :py-2]} "Finner ikke"]
                 (for [person filtered-people]
                   ^{:key (:id person)}
                   [ui/combobox-option
                    {:value (:id person)
                     :class (fn [{:keys [active]}]
                              (concat [:cursor-default :select-none :relative :py-2 :pl-10 :pr-4]
                                      (if active
                                        [:text-white :bg-blue-600]
                                        [:text-gray-900])))}
                    (fn [{:keys [selected active]}]
                      [:<>
                       [:span.block.truncate {:class (if selected :font-medium :font-normal)}
                        (:name person)]
                       (when selected
                         [:span.absolute.inset-y-0.left-0.flex.items-center.pl-3
                          {:class (if active :text-white :text-teal-600)}
                          [:> solid/CheckIcon {:class "w-5 h-5" :aria-hidden "true"}]])])]))]]]]]]))]))


;region popover

(def solutions
  [{:name        "Insights"
    :description "Measure actions your users take"
    :href        "##"
    :icon        outline/LightBulbIcon}
   {:name        "Automations"
    :description "Create your own targeted content"
    :href        "##"
    :icon        outline/CogIcon}
   {:name        "Reports"
    :description "Keep track of your growth"
    :href        "##"
    :icon        outline/ChartBarIcon}])

(defn popover-example []
  [:div.w-full.max-w-sm.pointer-events-auto
   {:style {:height "400px"}}
   [ui/popover {:class :relative}
    (fn [{:keys [open]}]
      [:<>
       [ui/popover-button {:class [:text-white :group :bg-orange-700 :px-3 :py-2 :rounded-md :inline-flex :items-center :text-base :font-medium :hover:text-opacity-100 :focus:outline-none :focus-visible:ring-2 :focus-visible:ring-white :focus-visible:ring-opacity-75
                                   (when open :text-opacity-90)]}
        [:span "Solutions"]
        [:> solid/ChevronDownIcon
         {:class       [:ml-2 :h-5 :w-5 :text-orange-300 :group-hover:text-opacity-80 :transition :ease-in-out :duration-150
                        (when open :text-opacity-70)]
          :aria-hidden true}]]
       [ui/transition
        {:enter      "transition ease-out duration-200"
         :enter-from "opacity-0 translate-y-1"
         :enter-to   "opacity-100 translate-y-0"
         :leave      "transition ease-in duration-150"
         :leave-from "opacity-100 translate-y-0"
         :leave-to   "opacity-0 translate-y-1"}
        [ui/popover-panel
         {:class "absolute z-10 w-screen max-w-sm px-4 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0 lg:max-w-3xl"}
         [:div.overflow-hidden.rounded-lg.shadow-lg.ring-1.ring-black.ring-opacity-5
          [:div.relative.grid.gap-8.bg-white.p-7.lg:grid-cols-2
           (for [{:keys [name description href icon]} solutions]
             ^{:key name}
             [:a.flex.items-center.p-2.-m-3.transition.duration-150.ease-in-out.rounded-lg.hover:bg-gray-50.focus:outline-none.focus-visible:ring.focus-visible:ring-orange-500.focus-visible:ring-opacity-50
              {:href href}
              [:div.flex.items-center.justify-center.flex-shrink-0.text-white
               [:div.w-10.h-10.sm:h-12.sm:w-12.rounded-md.bg-orange-100.flex.items-center.justify-center
                [:> icon {:class [:text-orange-800 :w-8 :h-8 :sm:w-10 :sm:h-10] :aria-hidden true}]]]
              [:div.ml-4
               [:p.text-sm.font-medium.text-gray-900 name]
               [:p.text-sm.text-gray-500 description]]])]
          [:div.p-4.bg-gray-50
           [:a.flow-root.px-2.py-2.transition.duration-150.ease-in-out.rounded-md.hover:bg-gray-100.focus:outline-none.focus-visible:ring.focus-visible:ring-orange-500.focus-visible:ring-opacity-50
            {:href "##"}
            [:span.flex.items-center
             [:span.text-sm.font-medium.text-gray-900 "Documentation"]]
            [:span.block.text-sm.text-gray-500 "Start integrating products and tools"]]]]]]])]])

;region menu

(defn menu-item [icon label]
  [ui/menu-item
   (fn [{:keys [active]}]
     [:button {:class (into [:group :flex :rounded-md :items-center :w-full :px-2 :py-2 :text-sm]
                            (if active [:bg-gray-500 :text-white] [:text-gray-900]))}
      [:> icon
       {:class       [:h-5 :w-5 :mr-2 (if active :text-violet-100 :text-violet-900)]
        :aria-hidden true}]
      label])])

(defn menu-example []
  #_[:div.relativex.absolute.overflow-visible "START"
     [:div.bg-white.h-64.w-64.absolute.overflow-visible  [:div "content"]]]
  [:div.relative.xh-12.overflow-visible {:style {:z-indexx 1000}} ;.w-56.h-72.text-left.-debug
   [ui/menu {:as :div.relative.inline-block.text-left.overflow-visible}
    [ui/menu-button {:as :div :class [:xabsolute :w-32]}  #_{:as :div} #_{:class "outline-none focus:outline-none "} ;{:class "inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-50 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"}
     (fn [{:keys [open]}]
       [sc/button
        {:class [:w-full]}
        (if open "Close" "Options")
        [:> solid/ChevronDownIcon
         {:class       "w-5 h-5 ml-2 -mr-1 text-green-200 hover:text-violet-100"
          :aria-hidden true}]])]
    #_[ui/transition
       {;:show true
        :enter      "transition ease-out duration-100"
        :enter-from "opacity-0 scale-95"
        :enter-to   "opacity-100 scale-100"
        :leave      "transition ease-in duration-75"
        :leave-from "opacity-100 scale-100"
        :leave-to   "opacity-0 scale-95"}]
    [ui/menu-items {;:static true
                    :class "z-1 absolute bottom-12 pb-2 right-0 overflow-visible xh-72 w-56 mb-2 origin-top-right
     bg-white divide-y divide-gray-300 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"}
     [:div.p-1
      [menu-item solid/ClockIcon "Book nå"]
      [menu-item solid/PencilIcon "Edit"]
      [menu-item solid/DuplicateIcon "Duplicate"]]
     [:div.p-1
      [menu-item solid/ArchiveIcon "Archive"]
      [menu-item solid/DownloadIcon "Download"]]
     [:div.p-1
      [menu-item solid/TrashIcon "Delete"]]]]])

;region modal

(def zero-width-space-props
  {:dangerouslySetInnerHTML {:__html "&#8203;"}})

(defonce a (r/atom false))
;(defonce _ (js/setInterval #(swap! a not) 2000))

(defn modal-example []
  (r/with-let [!open? (r/atom false)
               open #(reset! !open? true)
               close #(reset! !open? false)]
    (let [open? @!open?]
      [:<>
       [:div.flex                                           ;.items-center.justify-center
        [sc/button                                          ;:button.px-4.py-2.text-sm.font-medium.text-white.bg-black.rounded-md.bg-opacity-20.hover:bg-opacity-30.focus:outline-none.focus-visible:ring-2.focus-visible:ring-white.focus-visible:ring-opacity-75
         {:type     "button"
          :on-click open}
         "Open dialog"]]

       [ui/transition
        {:appear true
         :show   open?}
        [ui/dialog {:on-close close}
         [:div.fixed.inset-0.overflow-y-auto
          {:style {:z-index 1000}}
          [:div.min-h-screenx.px-4.text-center
           ;; NOTE: the structure of this HTML is delicate and has subtle
           ;; interactions to keep the modal centered. The structure we use is
           ;; slightly different from the headlessui.dev example. There the
           ;; Transition.Children are rendered as fragments. Here, since we
           ;; don't support fragments, we move some of the structural styles to
           ;; the Transition.Children, which seems to have the same effect.
           [ui/transition-child
            {:enter      "ease-out duration-300"
             :enter-from "opacity-0"
             :enter-to   "opacity-100"
             :leave      "ease-in duration-200"
             :leave-from "opacity-100"
             :leave-to   "opacity-0"}
            [ui/dialog-overlay {:class "fixed inset-0 bg-gray-900 bg-opacity-75"}]]
           ;; trick browser into centering modal contents
           [:span.inline-block.xh-screen.align-middlex
            (assoc zero-width-space-props :aria-hidden true)]
           [ui/transition-child
            {:class      "inline-block align-middlex text-left transform"
             :enter      "ease-out duration-200"
             :enter-from "xopacity-0 xscale-95 -translate-y-full"
             :enter-to   "xopacity-100 xscale-100 translate-y-0"
             :leave      "ease-in duration-200"
             :leave-from "opacity-100 xscale-100 translate-y-0"
             :leave-to   "opacity-0 xscale-95 -translate-y-full"}
            [:div.max-w-md.p-6.my-8x.bg-white.shadow-xl.rounded-b
             [ui/dialog-title {:as :div.text-lg.font-medium.leading-6.text-gray-900}
              "Payment successful"]
             [:div.mt-2
              [:p.text-sm.text-gray-500 "Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."]]
             [:div.mt-4 [sc/row-end
                         [sc/button-cta
                          #_:button.inline-flex.justify-center.px-4.py-2.text-sm.font-medium.text-blue-900.bg-blue-100.border.border-transparent.rounded-md.hover:bg-blue-200.focus:outline-none.focus-visible:ring-2.focus-visible:ring-offset-2.focus-visible:ring-blue-500
                          {:type     "button"
                           :on-click close}
                          "Got it, thanks!"]
                         [sc/button-danger
                          #_:button.inline-flex.justify-center.px-4.py-2.text-sm.font-medium.text-blue-900.bg-blue-100.border.border-transparent.rounded-md.hover:bg-blue-200.focus:outline-none.focus-visible:ring-2.focus-visible:ring-offset-2.focus-visible:ring-blue-500
                          {:type     "button"
                           :on-click close}
                          "A"]]]]]]]]]])))