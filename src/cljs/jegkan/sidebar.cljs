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
            [times.api :as ta]))

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
  [:input {:outline :none
           :font-size "var(--font-size-2)"
           :color   "var(--text1)"}]
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
      [:input {:id id
               :placeholder "placeholder"
               :type      :text
               :value     value
               :on-change on-change}]]
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

(defn navigation []
  (let [selection (rf/subscribe [:tab-selection])]
    [:div
     ;[l/ppre-x @re-frame.db/app-db]
     [sc/padded
      (into [grid5-with-gap] (map (fn [idx e] [sc/tabsquare {:style    {:border-radius (str "var(--radius-blob-" (inc idx) ")")
                                                                        :background    (if (= @selection e) "var(--button2)" "none")}
                                                             :on-click #(rf/dispatch [:tab-selection e])} e])
                                  (range)
                                  ["A" "B" "C" "1" "2"]))]
     [sc/padded
      (case @selection
        "A" [cloud-content]
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

