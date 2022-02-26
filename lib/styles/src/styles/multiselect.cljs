(ns styles.multiselect
  (:require [reagent.core :as r]
            [lambdaisland.ornament :as o]
            [headlessui-reagent.core :as ui]
            ["@heroicons/react/solid" :as solid]
            ["@heroicons/react/outline" :as outline]
            [styles.utils :refer [grid5]]
            [clojure.string :as string]
            [schpaa.debug :as l]
            [schpaa.components.fields :as fields]
            [styles.menu]
            [styles.core :as sc]
            [re-frame.core :as rf]))

(defn string->query [s]
  (string/replace (string/lower-case s) #"\s+" ""))

(defn switch-example []
  (r/with-let [!enabled (r/atom false)]
    (let [enabled @!enabled]
      [ui/switch
       {:checked   enabled
        :on-change #(swap! !enabled not)
        :class     (str "relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
                        (if enabled "bg-green-500" "bg-gray-500"))
        :style     {:background (if enabled "var(--green-5)" "var(--gray-5)")
                    :height     "38px"
                    :width      "74px"}}
       [:span.sr-only "Use setting"]
       [:span {:aria-hidden true
               :class       (str "pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 "
                                 (if enabled "translate-x-9" "translate-x-0"))
               :style       {:height "34px"
                             :width  "34px"}}]])))

(defn combobox-example []
  (let [people' (fn [] [{:id 1 :name "ugkjh" :state false}
                        {:id 2 :name "agh" :state true}])
        person-by-id' (zipmap (map :id (people')) (people'))]
    [:div
     ;[l/ppre (take 10 people)]
     (r/with-let [!toggle-state (r/atom {})
                  !selected (r/atom nil #_(first (people')))
                  !query (r/atom "")
                  !filtered-people (r/reaction
                                     (let [query @!query]
                                       (if (string/blank? query)
                                         (people')
                                         (filter #(string/includes? (string->query (:name %)) query)
                                                 (people')))))]
       (let [selected @!selected
             filtered-people @!filtered-people]
         [:div.w-72.h-72
          [ui/combobox {:active-index nil
                        :open         true
                        :value        (:id selected)
                        #_#_:on-change #(reset! !selected (get person-by-id' %))}
           (fn [{:keys [activeOption open]}]
             [:div.relative.mt-1
              [l/ppre-x open activeOption]
              (when activeOption
                [:div.mt-32 "Some activeOption " (l/ppr activeOption)])
              [:div.relative.w-full.text-left.bg-white.rounded-lg.shadow-md.cursor-default.focus:outline-none.focus-visible:ring-2.focus-visible:ring-opacity-75.focus-visible:ring-white.focus-visible:ring-offset-teal-300.focus-visible:ring-offset-2.sm:text-sm.overflow-hidden
               [ui/combobox-input {:class         "w-full border-none focus:ring-0 py-2 pl-3 pr-10 text-sm leading-5 text-gray-900"
                                   :display-value (fn [id] (:name (get person-by-id' id)))
                                   :on-change     #(do
                                                     (tap> {:on-change (.-value (.-target %))})
                                                     (reset! !query (string->query (.-value (.-target %)))))}]
               [ui/combobox-button {
                                    :class "absolute inset-y-0 right-0 flex items-center pr-2"}
                [:> solid/SelectorIcon
                 {:class       "w-5 h-5 text-gray-400"
                  :aria-hidden true}]]]
              [ui/combobox-options
               {:static true
                ;:hold   true
                :class  "absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"}
               [:<>
                (if (and (seq @!query) (empty? filtered-people))
                  [:div {:class [:pr-4 :pl-10 :py-2]} "Finner ikke"]
                  (for [person filtered-people]
                    ^{:key (:id person)}
                    [ui/combobox-option
                     {:key   (:id person)
                      :value person
                      :class (fn [{:keys [active]}]
                               (concat [:cursor-default :select-none :relative :py-2 :pl-10 :pr-4]
                                       (if active
                                         [:text-white :bg-blue-600]
                                         [:text-gray-900])))}

                     (fn [{:keys [selected active]}]
                       [:<>
                        [ui/switch-group
                         [ui/switch-label [:div "Label " (str (:state person))]]
                         [ui/switch {:checked   (get @!toggle-state (:id person) false)
                                     :on-change #(swap! !toggle-state update (:id person) (fnil not false))
                                     :class     (str "relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 "
                                                     (if (get @!toggle-state (:id person) false) "bg-green-500" "bg-red-700"))
                                     :style     {:height "38px"
                                                 :width  "74px"}}
                          [:span.sr-only "Use setting"]
                          [:span {:aria-hidden true
                                  :class       (str "pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 "
                                                    (if (get @!toggle-state (:id person) false) "translate-x-9" "translate-x-0"))
                                  :style       {:height "34px"
                                                :width  "34px"}}]]]

                        [:span.block.truncate {:class (if selected :font-medium :font-normal)}
                         (:name person)]
                        (when selected
                          [:span.absolute.inset-y-0.left-0.flex.items-center.pl-3
                           {:class (if active :text-white :text-teal-600)}
                           [:> solid/CheckIcon {:class "w-5 h-5" :aria-hidden "true"}]])])]))]]])]]))]))

(o/defstyled switch :div
  ([id !data]
   (let [checked (get-in @!data [id :st])]
     [ui/switch-group
      {:as "div"}
      [:div.flex.items-center.gap-4
       {:style {:background (if checked "var(--surface1")}}
       [ui/switch {:checked   checked
                   :on-change #(do
                                 (tap> %)
                                 (swap! !data assoc-in [id :st] %))
                   :class     (str "relative inline-flex flex-shrink-0 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ")
                   :style     {:background (if (get-in @!data [id :st]) "var(--green-5)" "var(--gray-5)")
                               :height     "19px"
                               :width      "37px"}}
        [:span.sr-only "Use setting"]
        [:span {:aria-hidden true
                :class       (str "pointer-events-none inline-block rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200 "
                                  (if (get-in @!data [id :st]) "translate-x-4" "translate-x-0"))
                :style       {:height "15px"
                              :width  "17px"}}]]
       [ui/switch-label
        [:div (get-in @!data [id :name])]]]])))

(o/defstyled grid2 :div
  {:width                 "100%"
   :display               :grid
   :grid-gap              "4px"
   :grid-template-columns "repeat(auto-fit,minmax(15rem,1fr))"})

(defn filter-query [query]
  (filter (fn [[k v]] (string/includes? (string->query (:name v)) query))))

(defn standard-menu [data]
  [[solid/TrashIcon "Fjern alle" #(reset! data (reduce (fn [a [k v]] (assoc-in a [k :st] false)) @data @data))]
   [solid/CursorClickIcon "Velg alle" #(reset! data (reduce (fn [a [k v]] (assoc-in a [k :st] true)) @data @data))]
   nil
   [solid/PencilIcon "Rediger" #()]
   nil
   [solid/DuplicateIcon "Dupliser" #()]])

(defn list-exampole []
  (let [data (r/atom (into {} (for [e (range 32)]
                                {e {:st   (< (rand-int 3) 1)
                                    :name (str "test-" e)}})))
        query (r/atom "")]
    (fn []
      (let [result (transduce (comp (filter-query @query)) conj {} @data)]
        [:div.space-y-2.p-4
         [:div.flex.gap-4.items-end
          [sc/field-label "Label 1"
           [fields/text (fields/small-field {:placeholder   "Search"
                                             :values        #(-> @query)
                                             :handle-change #(reset! query (-> % .-target .-value))}) :name :query]]

          [styles.menu/menu-example-with-args
           (standard-menu data)]]

         (if (empty? result)
           [:div "Finner ingen"]
           [grid2 (for [[id _] result]
                    [switch id data])])
         #_[l/ppre (filter (comp :st val) @data)]]))))

(defn date-input []
  (let [fld (r/atom {:start-dato nil
                     :start-kl nil
                     :slutt-dato nil
                     :slutt-kl nil})]
    [:div.p-4
     [sc/col
      [:div.grid {:style {:grid-gap              "16px"
                          :grid-template-columns "min-content min-content"}}
       ;todo dateify the fields - until then they wont work
       [sc/field-label "Start"
        [fields/date (fields/date-field {:naked?        true
                                         :values        #(-> @fld :start)
                                         :handle-change #(swap! fld assoc :start-dato (-> % .-target .-value))}) :name :start]]
       [sc/field-label "Kl"
        [fields/time (fields/time-field {:naked?        true
                                         :values        #(-> @fld :start-kl)
                                         :handle-change #(swap! fld assoc :start-kl (-> % .-target .-value))}) :name :start]]]


      [:div.grid {:style {:grid-gap              "16px"
                          :grid-template-columns "min-content min-content"}}
       [sc/field-label "Slutt"
        [fields/date (fields/date-field {:naked?        true
                                         :values        #(-> @fld :slutt)
                                         :handle-change #(swap! fld assoc :slutt-dato (-> % .-target .-value))}) :name :slutt]]
       [sc/field-label "Kl"
        [fields/time (fields/time-field {:naked?        true
                                         :values        #(-> @fld :slutt-kl)
                                         :handle-change #(swap! fld assoc :slutt-kl (-> % .-target .-value))}) :name :slutt]]]]]))

(rf/reg-event-db :show-modal-dialog (fn [db] (assoc db :show-modal-dialog true)))
(rf/reg-event-fx :ok-modal-dialog (fn [{db :db}] (do
                                                   (tap> "ugh")
                                                   {:db (assoc db :show-modal-dialog false)
                                                    :fx [[:dispatch [:app/navigate-to [:r.topic {:id "123"}]]]]})))
(rf/reg-event-db :cancel-modal-dialog (fn [db] (assoc db :show-modal-dialog false)))

(rf/reg-sub :show-modal-dialog (fn [db] (:show-modal-dialog db false)))

(defn multiselect-example []
  (let [data [{}]]
    [:<>
     [date-input]
     [list-exampole]

     [sc/button-cta {:on-click #(rf/dispatch [:show-modal-dialog])} "go"]
     [styles.dialog/modal-example-from-event {:show :show-modal-dialog
                                              :ok :ok-modal-dialog
                                              :cancel :cancel-modal-dialog}]]))
