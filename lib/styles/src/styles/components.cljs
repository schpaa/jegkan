(ns styles.components)

(comment
  (ns styles.components
    (:require [headlessui-reagent.core :as ui]
              [lambdaisland.ornament :as o]
              [fork.re-frame :as fork]
              [db.core :as db]
              [reagent.core :as r]
              [schpaa.debug :as l]
              [styles.core :as sc]
              [schpaa.components.fields :as fields]
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

  (defn people' [] (sort-by :name < (mapv (fn [[k v]] {:id (name k) :name (:navn v)}) @(db/on-value-reaction {:path ["users"]}))))

  (def person-by-id' (zipmap (map :id (people')) (people')))

  ;region combobox

  (defn listbox-example []
    (r/with-let [!selected (r/atom (first (people')))]
                (let [selected @!selected]
                  [:div.relative.h-96                       ;.xh-48.w-32.relative.overflow-visible
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
                                            (for [person (people')]
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

  (o/defstyled popover-panel :div
               :rounded :absolute :z-10 :w-screen :max-w-sm :mb-2 :transform :bottom-12 :left-0 :sm:px-0 :lg:max-w-3xl
               [:& {:background-color "var(--surface1)"
                    :color            "var(--text1)"}]
               ([attr c]
                [:<> [ui/popover-panel attr c]]))

  (defn popover-example []
    [:div.w-full.max-w-sm.pointer-events-auto
     [ui/popover {:class :relative}
      (fn [{:keys [open]}]
        [:<>
         [ui/popover-button

          [sc/button-cta
           [:div.flex
            {:class [:w-32]}
            [:> (if open solid/ChevronDownIcon solid/ChevronUpIcon)
             {:class       [:mr-2 :h-5 :w-5 :text-black :group-hover:text-opacity-80 :transition :ease-in-out :duration-150
                            (when open :text-opacity-70)]
              :aria-hidden true}]
            [:span (if open "Lukk" "Solutions")]]]]

         [ui/transition
          {:show open}

          [ui/transition-child
           {:enter      "transition-opacity ease-out duration-200"
            :enter-from "opacity-0"
            :enter-to   "opacity-100"
            :leave      "transition-opacity ease-in duration-200"
            :leave-from "opacity-100 "
            :leave-to   "opacity-0"}
           [ui/popover-overlay
            {:class "fixed inset-0 bg-gray-900 bg-opacity-75"}]]

          [ui/transition-child
           {:enter      "transition ease-out duration-200"
            :enter-from "opacity-0 translate-y-1"
            :enter-to   "opacity-100 translate-y-0"
            :leave      "transition ease-in duration-150"
            :leave-from "opacity-100 translate-y-0"
            :leave-to   "opacity-0 translate-y-1"}

           [popover-panel
            ;{:static true}

            [:div.overflow-hidden.rounded-lg.shadow-lg.ring-1.ring-black.ring-opacity-5
             [:div.relative.grid.gap-8.p-7.lg:grid-cols-2
              (for [{:keys [name description href icon]} solutions]
                ^{:key name}
                [:a.flex.items-center.p-2.-m-3.transition.duration-150.ease-in-out.rounded-lg.hover:bg-gray-50.focus:outline-none.focus-visible:ring.focus-visible:ring-orange-500.focus-visible:ring-opacity-50
                 {:href href}
                 [:div.flex.items-center.justify-center.flex-shrink-0.text-white
                  [:div.w-10.h-10.sm:h-12.sm:w-12.rounded-md.bg-orange-100.flex.items-center.justify-center
                   [:> icon {:class [:text-orange-800 :w-8 :h-8 :sm:w-10 :sm:h-10] :aria-hidden true}]]]
                 [:div.ml-4
                  [:p.text-sm.font-medium.text-gray-900x name]
                  [:p.text-sm.text-gray-500x description]]])]
             [:div.p-4.bg-gray-50
              [:a.flow-root.px-2.py-2.transition.duration-150.ease-in-out.rounded-md.hover:bg-gray-100.focus:outline-none.focus-visible:ring.focus-visible:ring-orange-500.focus-visible:ring-opacity-50
               {:href "##"}
               [:span.flex.items-center
                [:span.text-sm.font-medium.text-gray-900x "Documentation"]]
               [:span.block.text-sm.text-gray-500x "Start integrating products and tools"]]]]]]]])]])

  ;region menu

  (o/defstyled menu-item :div
               [:&:focus :outline-none]
               {:background "var(--surface2)"
                :color      "var(--text1)"}
               [:.icon-color {:color "var(--text1)"}]
               [:button.active-color {:background-color "var(--surface3)"}]
               ([icon label]
                [:<> [ui/menu-item
                      (fn [{:keys [active]}]
                        [:button {:class (into [:group :flex :rounded-md :items-center :w-full :px-2 :py-2 :text-sm]
                                               (if active [:active-color] [:xtext-gray-900]))}
                         [:> icon
                          {:class       [:h-5 :w-5 :mr-2 (if active :text-violet-100 :icon-color)]
                           :aria-hidden true}]
                         label])]]))

  (o/defstyled menu-items :div
               [:& :z-1 :absolute :bottom-12 :right-0 :overflow-visible :w-56 :mb-2 :origin-top-right
                :rounded-md :shadow-lg :ring-1 :ring-black :ring-opacity-5 :focus:outline-none]
               {:background "var(--surface2)"
                :color      "var(--text1)"}
               ([attr & c]
                [:<> [ui/menu-items attr c]]))

  (defn menu-example []
    #_[:div.relativex.absolute.overflow-visible "START"
       [:div.bg-white.h-64.w-64.absolute.overflow-visible [:div "content"]]]
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
      [ui/transition
       {;:show true
        :enter      "transition ease-out duration-100"
        :enter-from "opacity-0 scale-95"
        :enter-to   "opacity-100 scale-100"
        :leave      "transition ease-in duration-75"
        :leave-from "opacity-100 scale-100"
        :leave-to   "opacity-0 scale-95"}
       [menu-items
        [:div.p-1
         [menu-item solid/ClockIcon "Book nå"]
         [menu-item solid/PencilIcon "Rediger"]
         [menu-item solid/DuplicateIcon "Dupliser"]]
        [:div.p-1
         {:style {:background         "var(--surface2)"
                  :color              "var(--text2)"
                  :border-color       "var(--surface3)"
                  :border-width       "1px"
                  :border-right-width "0px"
                  :border-left-width  "0px"}}
         [menu-item solid/ArchiveIcon "Arkiv"]
         [menu-item solid/DownloadIcon "Avbryt"]]
        [:div.p-1
         [menu-item solid/TrashIcon "Slett"]]]]]])

  ;region modal

  (def zero-width-space-props
    {:dangerouslySetInnerHTML {:__html "&#8203;"}})

  (defonce a (r/atom false))
  ;(defonce _ (js/setInterval #(swap! a not) 2000))

  (defn simple-form []
    [fork/form {:keywordize-keys  true
                :prevent-default? true
                :initial-values   {:a "A"
                                   :b "B"}
                :on-submit        (fn [v])}
     (fn [{:keys [form-id handle-submit] :as props}]
       [:form
        {:id        form-id
         :on-submit handle-submit}
        [schpaa.components.fields/text props :label "label 1" :name :a]
        [schpaa.components.fields/text props :label "label 2" :name :b]])])


  ;with fields
  (defn modal-example []
    (r/with-let [!open? (r/atom false)
                 open #(reset! !open? true)
                 close #(reset! !open? false)]
                (let [open? @!open?]
                  [:<>
                   [:div.flex                               ;.items-center.justify-center
                    [sc/button                              ;:button.px-4.py-2.text-sm.font-medium.text-white.bg-black.rounded-md.bg-opacity-20.hover:bg-opacity-30.focus:outline-none.focus-visible:ring-2.focus-visible:ring-white.focus-visible:ring-opacity-75
                     {:type     "button"
                      :on-click open}
                     "Open dialog"]]

                   [ui/transition
                    {:appear true
                     :show   open?}
                    [ui/dialog {:on-close #(fn [e] false)}
                     [:div.fixed.inset-0.overflow-y-autox

                      ;{:style {:z-index 1000}}
                      [:div.px-4.text-center
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
                        {:class       "inline-block align-middlex text-left transform"
                         :enter       "ease-out duration-200"
                         :enter-from  "xopacity-0 scale-95 -translate-y-full"
                         :enter-to    "xopacity-100 scale-100 translate-y-0"
                         :leave       "ease-in duration-200"
                         :leave-from  "opacity-100 scale-100 translate-y-0"
                         :leave-to    "opacity-0 scale-95 -translate-y-full"
                         :after-leave #(tap> "After leaving")}

                        [sc/dialog
                         [:div.pt-4 [sc/dialog-title "Payment successful"]]
                         [ui/dialog-description "Descriptions"]
                         [fork/form {:keywordize-keys  true
                                     :form-id          "id"
                                     :prevent-default? true
                                     #_#_:validation (fn [vs] {:a ["mangler noe her" "mangler noe her"]
                                                               :d ["hmm"]
                                                               :c ["mangler noe her" "mangler noe her"]})
                                     :initial-values   {:a "A"
                                                        :b "B"
                                                        :c nil
                                                        :d ""}
                                     :on-submit        (fn [v]
                                                         (tap> "Submittet")
                                                         (tap> v)
                                                         (close))}
                          (fn [{:keys [form-id handle-submit errors] :as props}]
                            [:form.space-y-4
                             {:id        form-id
                              :on-submit handle-submit}
                             [:div.py-2.space-y-4

                              [sc/field-label "Label 1"
                               [fields/text props :name :a]
                               [sc/validation-error errors :a]]
                              [sc/field-label "Label 2"
                               [fields/text props :name :b]
                               [sc/validation-error errors :b]]

                              [:div.flex.gap-4

                               [sc/field-label-date "Some field"
                                [fields/date props :name :c]
                                [sc/validation-error errors :c]]

                               [sc/field-label-short "Label 4"
                                [fields/text (fields/small-field props) :name :d]
                                [sc/validation-error errors :d]]]

                              [:p.text-sm "Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."]]
                             [:div.mt-4 [sc/row-end
                                         [sc/button-danger
                                          {:type     "button"
                                           :on-click close}
                                          "Avbryt"]
                                         [sc/button-cta
                                          {:type "submit"}
                                          "Lagre"]]]])]]]]]]]])))

  ;with timeout
  (defn modal-example-2 []
    (r/with-let [!open? (r/atom false)
                 tm (r/atom nil)
                 counter (r/atom 0)
                 close #(do
                          (js/clearInterval @tm)
                          (reset! !open? false))
                 each #(do
                         (if (pos? @counter)
                           (do
                             (tap> {:tick @tm})
                             (swap! counter dec))
                           (do
                             (tap> {:interval @tm})
                             (close))))
                 open #(do
                         (js/clearInterval @tm)
                         (reset! counter 50)
                         (reset! tm (js/setInterval each 100))
                         (reset! !open? true))]
                (let [open? @!open?]
                  [:<>
                   [:div.flex                               ;.items-center.justify-center
                    [sc/button                              ;:button.px-4.py-2.text-sm.font-medium.text-white.bg-black.rounded-md.bg-opacity-20.hover:bg-opacity-30.focus:outline-none.focus-visible:ring-2.focus-visible:ring-white.focus-visible:ring-opacity-75
                     {:type     "button"
                      :on-click open}
                     "Open dialog-2"]]

                   [ui/transition
                    {:appear true
                     :show   open?}
                    [ui/dialog {:on-close #(fn [e] false)}
                     [:div.fixed.inset-0.overflow-y-autox

                      ;{:style {:z-index 1000}}
                      [:div.px-4.text-center
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
                        {:class       "inline-block align-middlex text-left transform"
                         :enter       "ease-out duration-200"
                         :enter-from  "xopacity-0 scale-95 -translate-y-full"
                         :enter-to    "xopacity-100 scale-100 translate-y-0"
                         :leave       "ease-in duration-200"
                         :leave-from  "opacity-100 scale-100 translate-y-0"
                         :leave-to    "opacity-0 scale-95 -translate-y-full"
                         :after-leave #(tap> "After leaving")}

                        [sc/dialog
                         ;[:div @counter]
                         [:svg.-mx-4 {:style   {:height :4px
                                                :width  "100%"}
                                      :viewBox "0 0 49 1" :preserveAspectRatio "none"}
                          [:line {:stroke       :red
                                  :stroke-width 4
                                  :x1           0 :y1 0 :x2 50 :y2 0}
                           [:animate {:fill          "freeze"
                                      :attributeName "x2" :from "50" :to "0" :dur "6s"}]]]

                         [sc/dialog-title "Autoclosing message"]
                         [ui/dialog-description "Descriptions"]
                         [:p.text-sm "Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order."]
                         [:div.mt-4 [sc/row-end
                                     #_[sc/button
                                        {:type     "button"
                                         :on-click #(do
                                                      ;(js/clearInterval @tm)
                                                      (open))}
                                        "Reset"]
                                     [sc/button
                                      {:type     "button"
                                       :on-click #(do
                                                    (js/clearInterval @tm)
                                                    (close))}
                                      "Close"]]]]]]]]]])))

  ;region tab-example

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
               :share-count   12}]}
     {:name  "T"
      :posts [{:id            1
               :title         "Ask Me Anything: 10 answers to your questions about coffee"
               :date          "2d ago"
               :comment-count 9
               :share-count   5}
              {:id            2
               :title         "The worst advice we've ever heard about coffee"
               :date          "4d ago"
               :comment-count 1
               :share-count   2}]}])

  (def middot-props
    {:dangerouslySetInnerHTML {:__html "&middot;"}})

  (defn tabs-example []
    [:div.w-full.max-w-md.px-2.sm:px-0
     [ui/tab-group

      [ui/tab-list {:class "flex p-1 space-x-1 bg-blue-900/20 rounded-xl"}
       (for [category (map :name categories)]
         ^{:key category}
         [ui/tab {:class (fn [{:keys [selected]}]
                           (concat [:w-full :py-3 :text-sm :leading-5 :font-medium :text-blue-700 :rounded-lg]
                                   [:focus:outline-none :focus:ring-2 :ring-offset-2 :ring-offset-blue-400 :ring-white :ring-opacity-60]
                                   (if selected
                                     [:bg-white :shadow]
                                     [:text-blue-100 "hover:bg-white/10" :hover:text-white])))}
          category])]

      [ui/tab-panels {:class :mt-2}
       (for [{:keys [posts name]} categories]
         ^{:key name}
         [ui/tab-panel {:class (concat [:bg-white :rounded-xl :p-3]
                                       [:focus:outline-none :focus:ring-2 :ring-offset-2 :ring-offset-blue-400 :ring-white :ring-opacity-60])}
          [:ul
           (for [{:keys [id title date comment-count share-count]} posts]
             ^{:key id}
             [:li.relative.p-3.rounded-md.hover:bg-gray-200
              [:h3.text-sm.font-medium.leading-5.text-black
               title]
              [:ul.flex.mt-1.space-x-1.text-xs.font-normal.leading-4.text-gray-500
               [:li date]
               [:li middot-props]
               [:li comment-count " comments"]
               [:li middot-props]
               [:li share-count " shares"]]
              [:a {:href  "##"
                   :class "absolute inset-0 rounded-md focus:z-10 focus:outline-none focus:ring-2 ring-blue-400"}]])]])]]])


  (o/defstyled tab-group :div
               ([{:as m} & ch]
                [ui/tab-group m ch]))

  (o/defstyled tab-list :div
               :flex :p-1 :space-x-1 :bg-blue-900-20 :rounded-xl
               :gap-4
               [:.my-w-full {:width "100%"}]
               ([xs content]
                (for [each xs]
                  ^{:key each}
                  [ui/tab                                   ;todo -> tab and move selected to tab (above)
                   {:as    "div"
                    :class [:my-w-full]}
                   (fn [{:keys [selected]}] [content selected each])])))

  (o/defstyled tab-panel :div
               [:.spacer :space-y-8]
               ([xs selectedIndex tabpanel-render]
                [ui/tab-panel
                 {:class [:spacer]}
                 (for [each xs]
                   [tabpanel-render selectedIndex each])]))

  (o/defstyled tab-panels :div
               :bg-white :rounded-xl :p-6
               ([xs tabpanel-render]
                [ui/tab-panels
                 {:as "div"}
                 (fn [{:keys [selectedIndex]}]
                   (for [{:keys [posts name] :as each} xs]
                     ^{:key name}
                     [tab-panel posts selectedIndex tabpanel-render]))]))

  ;region render

  (o/defstyled tab-render :button
               :w-full
               [:div :py-4 :rounded-lg]
               [:.selected :shadow :bg-white {:color "var(--brand)"}]
               [:.regular {:color "white"}]
               ([selected content]
                [:div {:class [(if selected :selected :regular)]}
                 content]))

  (o/defstyled tabpanel-render :div
               :overflow-y-autox :xw-full :bg-pink-200 :shrink-0 :grow-1
               [:.title :text-sm :font-medium]
               [:.subtitle :text-xs :opacity-50]
               ([selectedIndex e]
                ;[:div [l/ppre-x e"e"]]
                [:div
                 [:div selectedIndex]
                 [:div.title (:title e)]
                 [:div.subtitle (:date e)]]))

  (o/defstyled tab-render-2 :button
               :w-full
               [:div :py-2 :rounded-lg]
               [:.selected :shadow :bg-black {:color "var(--brand)"}]
               [:.regular {:color "white"}]
               ([selected content]
                [:div {:class [(if selected :selected :regular)]}
                 content]))

  ;region vertical tabs

  (defn tab-list-proper
    [xs content]
    (for [each xs]
      ^{:key each}
      [ui/tab
       {:as    "div"
        ;:class [:sticky :top-0]
        :style {:width "100%"}}
       (fn [{:keys [selected]}] [content selected each])]))

  (o/defstyled tab-list-styled :div
               :flex :flex-col :w-auto :overflow-y-auto :w-fullx
               :flex-shrink-0
               :p-1 :rounded :justify-start :gap-4 :bg-red-500)

  (o/defstyled tab-render-styled :button
               [:div :rounded :shrink-0 :w-16]
               [:.selected :shadow :bg-black {:color "var(--brand)"}]
               [:.regular {:color "white"}]
               ([selected content]
                [:div {:class [(if selected :selected :regular)]}
                 [:> content {:class [:w-16]}]]))

  (o/defstyled tab-panels-styled :div
               :rounded :p-6 :h-full :w-fullx
               ;{:height "100vh"}
               ([xs tabpanel-render]
                [ui/tab-panels
                 {:as    "div"
                  :class []}
                 (fn [{:keys [selectedIndex]}]
                   (for [{:keys [posts name] :as each} xs]
                     ^{:key name}
                     [tab-panel posts selectedIndex tabpanel-render]))]))

  ;endregion temp

  (defn tabs-example'' []
    [tab-group {:vertical true}
     [:div.fixed.inset-0.bg-gray-300
      [:div.grid.h-full
       {:style {:grid-template-columns "min-content 1fr"
                :grid-auto-rows        "1fr"}}
       [:div.bg-red-500.h-full.overflow-y-auto
        [tab-list-styled (tab-list-proper [solid/CollectionIcon
                                           solid/ClockIcon
                                           solid/CogIcon
                                           solid/ArchiveIcon] tab-render-styled)]]
       [:div.bg-white.h-full.overflow-y-auto
        [tab-panels-styled categories tabpanel-render]
        #_(for [e (range 100)]
            [:div e])]]]])


  #_(defn tabs-example'' []
      ;vertical style
      [:div                                                 ;.absolutex.xfixed.xinset-20.bottom-0x.bg-blue-400.xm-12.overflow-hidden.h-fullx.xrelative.flexx
       #_{:style {:height     "21rem"
                  :min-height "21rem"
                  :max-height "21rem"}}
       #_[:div.absolute.inset-12.overflow-auto
          [:div.overflow-clip
           (for [e (range 100)]
             [:div e])]]

       ;[:div.h-full>div.overflow-clip]

       [tab-group {:vertical true}
        [:div.flex.gap-2.w-full.justify-between.h-full
         #_{:style {:max-height "24rem"}}
         [tab-list-styled (tab-list-proper [solid/CollectionIcon
                                            solid/ClockIcon
                                            solid/CogIcon
                                            solid/ArchiveIcon] tab-render-styled)]
         [:div.flex-grow-1.w-full.h-full.overflow-auto.bg-white
          [tab-panels-styled categories tabpanel-render]]]]])


  (defn tabs-example' []
    [:div.w-full.max-w-md.px-2.sm:px-0
     [tab-group {:vertical false}
      [tab-list (map :name categories) (fn [a b] [tab-render a b])]
      [tab-panels categories tabpanel-render]]]))
