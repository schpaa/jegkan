(ns jegkan.sidebar
  (:require [reagent.core :as r]
            [shadow.resource :refer [inline]]
            [db.core :as db]
            [db.auth :as auth]
            [db.signin :as signin]
            [tick.core :as t]
            [re-frame.core :as rf]
            [schpaa.modal.readymade :as readymade]
            [schpaa.debug :as l]
            [lambdaisland.ornament :as o]
            [styles.core :as sc]
            [styles.utils :as su :refer [grid5 grid5-with-gap label]]
            [times.api :as ta]
            ["react" :refer [Fragment]]
            ["@headlessui/react" :refer [Menu Menu.Button Menu.Items Menu.Item
                                         Popover Popover.Button Popover.Panel Popover.Overlay
                                         Combobox Combobox.Option Combobox.Options Combobox.Input
                                         Disclosure Disclosure.Button Disclosure.Panel]]

            [headlessui-reagent.core :as ui]

            [clojure.string :as str]
            [styles.components :as sco]))

(defn help []
  [sc/markdown (schpaa.markdown/md->html (inline "./intro.md"))])

(defn user []
  (if-let [user @(rf/subscribe [::db/user-auth])]
    (let [db-values (db/on-value-reaction {:path ["jegkan-users" (:uid user)]})]
      (if-let [v @db-values]
        (r/with-let [st (r/atom (get v :anonymous))
                     username (r/atom (get v :display-name))
                     alias (r/atom (get v :alias))]
          [sc/padded
           (sc/col2
             (sc/col
               (sc/image (:photo-url user))
               ;(sc/field (:display-name user))
               (sc/field (:email user)))
             (sc/col
               (sc/row (sc/flexed [sc/textinput {:placeholder "Navn"
                                                 :value       @username
                                                 :on-blur     #(let [path ["jegkan-users" (:uid user)]]
                                                                 (db/database-update {:path path :value {"display-name" %}}))} username]))
               (sc/row [:div] (sc/checkbox {:on-change #(let [path ["jegkan-users" (:uid user)]]
                                                          (db/database-update {:path path :value {"anonymous" %}}))
                                            :reverse   true} st (sc/col-end
                                                                  [:div "Skjul min identitet"]
                                                                  [sc/small "Bare aliaset ditt blir synlig"])))
               (sc/row (sc/flexed [sc/textinput {:placeholder "Alias"
                                                 :disabled    (not @st)
                                                 :value       @alias
                                                 :on-blur     #(let [path ["jegkan-users" (:uid user)]]
                                                                 (db/database-update {:path path :value {"alias" %}}))} alias])))
             (sc/row
               [:div] [sc/button {:on-click #(auth/sign-out)} "Logg ut"]))])
        [sc/padded
         (sc/row
           [:div] [sc/button {:on-click #(let [path ["jegkan-users" (:uid user)]]
                                           (db/database-update {:path path :value {"registered" (str (t/now))}}))} "Init"])]))

    [sc/padded-red [signin/login]]))

(defn content []
  (let [active-user (:uid @(rf/subscribe [::db/user-auth]))
        path ["topics" active-user]
        active-item (some-> (rf/subscribe [:kee-frame/route]) deref :path-params :id)]
    (r/with-let [value (r/atom "")]
      [sc/padded
       [sc/row-eq
        [sc/textinput {:value @value} value]
        [sc/button-cta {:disabled (empty? @value)
                        :on-click #(let [path ["root"]
                                         data {:uid         active-user
                                               :date        (str (t/now))
                                               :description @value}]
                                     (let [id (.-key (db/database-push
                                                       {:path  path
                                                        :value data}))]
                                       (db/database-update {:path  ["tapas" active-user id]
                                                            :value data})))}
         "Lag ny"]]
       (let [path ["tapas" active-user]
             data (db/on-value-reaction {:path path})]
         [sc/list-list active-item @data {:three-dot-click #(readymade/message {:title   %
                                                                                :content "show more in a popup!"})}])
       (let [active-item (if (keyword? active-item) (name active-item) active-item)]
         (when active-item
           [sc/qr-code active-item]))])))

(o/defstyled header :div
  :sticky :top-0 :h-auto sc/padded
  {:xbackground-color "var(--surface2)"})

(o/defstyled contents :main
  :space-y-px
  {:background-color "var(--surface2)"})

(o/defstyled footer :footer
  :sticky :bottom-0 sc/padded
  {:background-color "var(--surface1)"})

(o/defstyled small-grid :div
  :grid :gap-1 {:grid-template-columns "repeat(auto-fill,minmax(4rem,1fr))"})


(o/defstyled textfield :div
  [:input {:outline   :none
           :font-size "var(--font-size-2)"
           :color     "var(--text1)"}]
  [:div.with-label :flex :flex-col :justify-between :h-full :w-full :p-2 :bg-white
   {:border-radius "var(--radius-1)"
    :box-shadow    "var(--inner-shadow-1)"}
   #_[:input {:outline :none
              :color   "var(--text1)"}]]
  [:div.no-label :flex :flex-col :justify-center :h-full :w-full :p-2 :bg-white
   {:border-radius "var(--radius-1)"
    :box-shadow    "var(--inner-shadow-1)"}
   #_[:input {:outline :none
              :color   "var(--brand)"}]]
  ([{:keys [id value on-change label]}]
   (if label
     [:div.with-label
      [su/label {:style {:text-align :right}
                 :for   id} label]
      [:input {:id          id
               :placeholder "placeholder"
               :type        :text
               :value       value
               :on-change   on-change}]]
     [:div.no-label
      [:input {:type      :text
               :value     value
               :on-change on-change}]])))

(defn navigation' []
  [:<>
   [sc/padded
    [grid5 {:style {:grid-gap "8px"}}
     [sc/buttonsquare [sc/small-icon :clock]]
     [sc/buttonsquare [sc/small-icon :plus]]
     [sc/button-cta {:style {:grid-column "span 3"}} "CTA"]]

    [grid5 {:style {:grid-gap "8px"}}
     [sc/buttonsquare [sc/small-icon :clock]]
     [sc/buttonsquare [sc/small-icon :clock]]
     [sc/button {:style {:grid-column "span 2"}} [sc/small-icon :plus]]
     [sc/buttonsquare [sc/small-icon :plus]]]

    (r/with-let [v (r/atom "value")]
      [grid5 {:style {:row-gap    "4px"
                      :column-gap "8px"}}
       #_[label {:for   "some1"
                 :style {:grid-column "span 5"}} "Label on top"]
       [textfield {:id        "some1"
                   :style     {;:min-height "4rem"
                               :grid-column "span 4"}
                   :label     "label inside the field"
                   :on-change #(reset! v (-> % .-target .-value))
                   :value     @v}]
       [sc/buttonsquare {:style {:grid-column "span 1"}} [sc/small-icon :three-vertical-dots]]
       #_[sc/button [sc/small-icon :plus]]])

    (r/with-let [v (r/atom "value")]
      [grid5-with-gap {:style {:row-gap "4px"}}
       [:div]
       [label {:style {:grid-column "2/-1"}} "Label on top"]
       [sc/buttonsquare {:style {:grid-column "span 1"}} [sc/small-icon :three-vertical-dots]]
       [textfield {:style     {;:min-height "4rem"
                               :grid-column "2/-1"}

                   :on-change #(reset! v (-> % .-target .-value))
                   :value     @v}]
       #_[sc/button [sc/small-icon :plus]]])


    [grid5-with-gap
     [sc/buttonsquare [sc/small-icon :plus]]
     ;[sc/buttonsquare  [sc/small-icon :plus]]
     ;[sc/buttonsquare  [sc/small-icon :plus]]
     [sc/button {:style {:grid-column      "4 / -1"
                         :background-color "var(--brand)"}} [sc/small-icon :question]]]

    [grid5-with-gap {:style {:width                 "100%"
                             :display               :grid
                             :grid-gap              "8px"
                             :grid-template-columns "repeat(5,minmax(min-content,1fr))"}}
     [sc/buttonsquare [sc/small-icon :plus]]
     [sc/buttonsquare [sc/small-icon :plus]]
     [sc/button-danger {:style {:padding     "var(--size-1)"
                                :grid-column "3 / -1"}} [sc/small-icon :plus]]]]


   #_[sc/padded
      [sc/col
       [sc/row-eq
        [sc/button-danger
         {:disabled false
          :style    {:flex "1 1 0px"}}
         "Danger"]
        [sc/button-cta
         {:disabled false
          :style    {:flex "1 1 0px"}}

         "CTA"]]
       [sc/row-eq
        [sc/button
         {:disabled false
          :style    {:flex "1 1 0px"}}
         "Ok"]
        #_[sc/button
           {:disabled false
            :style    {:flex "1 1 0px"}}
           "Ok hit is it from all of us"]
        [sc/button
         {:disabled false
          :style    {:flex "1 1 0px"}}
         [sc/small-icon :circle]]
        [sc/button
         {:disabled false
          :style    {:flex "1 1 0px"}}
         [sc/small-icon :square]]]]]
   [sc/padded-red [contents (for [e (range 3)]
                              [sc/listitem-content "Top" "Bottom" {:with-before [sc/fronticon {:on-click #(do
                                                                                                            ;(three-dot-click k)
                                                                                                            (.stopPropagation %))}
                                                                                 [sc/small-icon :chevron-right]]}])]]
   #_[footer (into [small-grid]
                   (for [i (range 4)]
                     [sc/small-base-button [sc/small-icon :chat-square]]))]])

(rf/reg-event-db :tab-selection (fn [db [_ v]] (assoc db :tab-selection v)))
(rf/reg-sub :tab-selection :-> :tab-selection)

(defn get-username [uid]
  (let [u (db/on-value-reaction {:path ["users" uid]})]
    (or (some-> u deref :alias)
        (some-> u deref :navn)
        (subs uid 0 10))))

(def get-username-memoed (memoize get-username))

(o/defstyled heading :div
  :space-y-1 :p-2 sc/outlined)

(o/defstyled content-item :div
  :bg-orange-100)

(defn cloud-content []
  (let [path ["presence"]
        data @(db/on-value-reaction {:path path})
        presence-state @(rf/subscribe [::db/presence-status])]
    [:div
     [heading (ta/format "%d offline" (count (:offline presence-state)))]

     (for [[k v] (:offline presence-state)]
       (let [instant (t/instant (js/Date. (:lastOnline v)))
             date (ta/date-format instant)
             time (ta/time-format instant)]
         [sc/listitem-content
          (get-username (name k))
          [sc/row date time]]))

     [heading (ta/format "%d online" (count (:online presence-state)))]

     [:div {:style {:display :grid
                    :row-gap "1px"}}
      (for [[k v] (:online presence-state)]
        [sc/listitem-content
         (get-username (name k))
         (:connections v)])]]))

(o/defstyled sample-open :div
  :bg-red-500 :text-white :px-4 :py-2 :rounded)

(o/defstyled sample-item :div
  :bg-blue-500 :text-white :px-4 :py-2 :rounded)

(o/defstyled popover-button :div)
(o/defstyled popover-panel :div)
(o/defstyled overlay :div
  {:position         :fixed
   :top              0
   :bottom           0
   :left             0
   :right            "-10px"
   :opacity          0.75
   :background-color "red"})

(o/defstyled nice-textinput :input
  :px-4 :py-2 :rounded :border :border-black)

(o/defstyled nice-listitem :div
  [:& :bg-white :select-none
   [:.item :py-4 :px-4]
   [:>.highlighted :bg-orange-500]
   [:>.disabled :text-gray-500 :opacity-50]
   [:>.selected :bg-green-500]]
  ([{:keys [selected highlighted disabled]} content]
   [:div.item
    {:class [(if selected :selected)
             (if disabled :disabled)
             (if highlighted :highlighted)]}
    content]))

(o/defstyled nice-combo :div
  :bg-red-500 :py-4)

(def people [{:id "1" :navn "Arne Bo"}
             {:id "2" :navn "Arvid Carlsen"}
             {:id       "3" :navn "Peter Pan"
              :disabled true}
             {:id "4" :navn "Siggurd Sverd"}])

(def person-by-id (zipmap (map :id people) people))

(o/defstyled disco-button :div
  :bg-blue-500 :h-12 :flex :items-center :px-2
  ([props children]
   [:> Disclosure.Button props (fn [e] (r/as-element [:div [l/ppre e]
                                                      [:div "DIOS"]
                                                      children]))]))

(o/defstyled disclosure :div
  :bg-pink-200 :h-16
  ([props children]
   [:> Disclosure props children #_(fn [_] (r/as-element [:div
                                                          children
                                                          "x"]))]))

(o/defstyled disco :div
  :bg-orange-500
  ([]
   [:> Disclosure.Panel {:static true} (fn [e] (r/as-element [:div [l/ppre e] [:div "Stuff"]]))]))

(defn panel-ul [props children]
  (into [:ul.bg-red-500 props] children))

(o/defstyled disclosure-button :div
  [:& :w-full :px-4 :py-2 :text-sm :font-medium :text-purple-900 :bg-purple-100 :rounded-lg]
  ([text]
   [ui/disclosure-button text]))

(o/defstyled disclosure-panel :div
  [:& :px-4 :pt-4 :pb-2 :text-sm :text-gray-500]
  ([content]
   [ui/disclosure-panel content]))

(o/defstyled disclosure-panel' :div
  [:& :px-4 :pt-4 :pb-2 :text-sm :text-gray-500])


(defn navigation []
  (let [selection (rf/subscribe [:tab-selection])]
    [:div.h-screen
     ;{:style {:position :static}}
     ;[l/ppre-x @re-frame.db/app-db]
     [sc/padded
      (into [grid5-with-gap] (map (fn [idx e] [sc/tabsquare {:style    {:border-radius (str "var(--radius-blob-" (inc idx) ")")
                                                                        :background    (if (= @selection e) "var(--button2)" "none")}
                                                             :on-click #(rf/dispatch [:tab-selection e])} e])
                                  (range)
                                  ["A" "B" "C" "1" "2"]))]
     #_[sc/padded
        (case @selection
          "A" [cloud-content]
          "B" [:div
               [:div ">"]
               [:> Menu
                [:> Menu.Button (fn [e] (r/as-element [sample-open "more" (str (.-open e))]))]
                [:> Menu.Items {:xstatic true} (fn [e] (r/as-element [:div "xx"]))
                 [:> Menu.Item {:disabled false} (fn [e] (r/as-element [sample-item "A" (str (.-disabled e)
                                                                                             (.-active e))]))]
                 [:> Menu.Item {:disabled true} (fn [e] (r/as-element [sample-item "A" (str (.-disabled e)
                                                                                            (.-active e))]))]
                 [:> Menu.Item (fn [e] (r/as-element [sample-item "A" (str (.-active e))]))]]]]
          "C" [:> Popover (fn [e] (r/as-element
                                    [:div ">" (str e.open)
                                     [:> Popover.Button [popover-button "POP" (str e.open)]]
                                     [:> Popover.Overlay (fn [] (r/as-element [overlay]))]
                                     [:> Popover.Panel {:static false} [popover-panel "stuff"]]]))]
          "11" (r/with-let [query (r/atom "Ar")
                            !selected (r/atom (last people))]
                 (let [filteredPeople (filter (fn [person] (clojure.string/includes? (:navn person) @query)) people)
                       selected @!selected]
                   [:div
                    [l/ppre @!selected]
                    [:> Combobox {:value     (:id selected)
                                  :on-change #(do
                                                (tap> %)
                                                (reset! !selected (get person-by-id %)))}
                     [:> Combobox.Input {:as            Fragment
                                         :on-change     (fn [e] (reset! query (-> e .-target .-value)))
                                         :display-value (fn [id] (:navn (get person-by-id id))) #_(fn [person] (:navn person))}
                      (fn [e] (r/as-element [:div
                                             (l/ppre e)
                                             [nice-textinput {:placeholder "søk"}]]))]
                     [nice-combo
                      [:> Combobox.Options {:static true}
                       (fn [e] (r/as-element
                                 [:div
                                  (l/ppre e)
                                  (for [person filteredPeople]
                                    ^{:key (str (:id person))}
                                    [:div
                                     ;[:div (str e.open) "_" (str (.-activeIndex e))]
                                     [:> Combobox.Option
                                      {;:key      (:id person)
                                       :value    person
                                       :disabled (:disabled person)}
                                      (fn [e] (r/as-element [:div
                                                             (l/ppre e)
                                                             [nice-listitem
                                                              {:selected    (.-selected e)
                                                               :disabled    (.-disabled e)
                                                               :highlighted (.-active e)}
                                                              [:div
                                                               (l/ppr person)
                                                               (str (:active (js->clj e)) (:selected (js->clj e)))]]]))]])]))]]]]))
          "22" [:div
                {:style {:height "200px"}}

                [ui/disclosure
                 ;[disclosure-button "Explain"]
                 ;[disclosure-panel [:p "Some explanation."]]
                 ;[disclosure-button "Explain"]
                 ;[disclosure-panel [:p "Some explanation."]]
                 [disclosure-button "Explain"]
                 [ui/disclosure-panel {:as :ul :class disclosure-panel'}
                  [:li "Note this."]
                  [:li "This too."]]]]

          "2" [sco/listbox-example]
          "1" [:div.absolute.relative.space-y-4.h-32.border-black.border.overflow-visible
               {:style {:width "400px" :height "200px"}} ;.relative.-debug.xmin-h-screen.overflow-visible
               #_[:div.relative.h-12.w-full                     ;.-debug.z-100
                  [:div.absolute.z-200 [sco/menu-example]]]
               #_[:div.relative
                  [:div.absolute [sco/popover-example]]]
               #_[:div.w-full.h-12 {:style {:z-index 5000}}
                  [sco/popover-example]]
               #_[:div "Under"]
               [sco/menu-example]
               #_[sco/modal-example]]


          nil)]]))

(def tabs-data
  {:list      {:icon    :compass
               :content navigation}
   :bar-chart {:icon    :command
               :content help}
   :cloud     {:icon    :cloud
               :content content}
   :brygge    {:icon    :circle-user
               :content user}})

