(ns jegkan.sidebar
  (:require [styles.core :as sc]
            [reagent.core :as r]
            [shadow.resource :refer [inline]]
            [db.core :as db]
            [db.auth :as auth]
            [db.signin :as signin]
            [tick.core :as t]
            [re-frame.core :as rf]
            [schpaa.modal.readymade :as readymade]
            [schpaa.debug :as l]
            [lambdaisland.ornament :as o]))

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
  :sticky :bottom-0    sc/padded
  {:background-color "var(--surface1)"})

(o/defstyled small-grid :div
   :grid :gap-1 {:grid-template-columns "repeat(auto-fill,minmax(4rem,1fr))"})

(o/defstyled grid5 :div
  {:width "100%"
   :display :grid
   :grid-gap "8px"
   :grid-template-columns "repeat(5,minmax(min-content,1fr))"})


(o/defstyled textfield :input
  :h-full :px-2
  {:border-radius "var(--radius-1)"
   :box-shadow "var(--inner-shadow-1)"})

(o/defstyled label :label
  {:font-size "var(--font-size-0)"
   :color "var(--text2)"})

(defn navigation []
  [:<>
   [header              
    [sc/row-eq
     [sc/buttonsquare  [sc/small-icon :clock]]
     [sc/buttonsquare  [sc/small-icon :plus]]
     [sc/button-cta "CTA"]]

    [grid5
     [sc/buttonsquare  [sc/small-icon :clock]]
     [sc/buttonsquare  [sc/small-icon :clock]]
     [sc/button {:style {:grid-column "span 2"}} [sc/small-icon :plus]]
     [sc/buttonsquare  [sc/small-icon :plus]]]

    (r/with-let [v (r/atom "value")]
      [grid5
       [label {:style {:grid-column "span 5"}} "Label on top"]
       [textfield {:style     {;:min-height "4rem"
                               :grid-column "span 4"}
                   :label     "label"
                   :on-change #(reset! v (-> % .-target .-value))
                   :value     @v}]
       [sc/buttonsquare {:style {:grid-column "span 1"}} [sc/small-icon :three-vertical-dots]]
       #_[sc/button [sc/small-icon :plus]]])


    [grid5
     [sc/buttonsquare  [sc/small-icon :plus]]
     [sc/buttonsquare  [sc/small-icon :plus]]
     [sc/buttonsquare  [sc/small-icon :plus]]
     [sc/button {:style {:grid-column "4 / -1"
                         :background-color "var(--surface1)"}} [sc/small-icon :plus]]]
    
    [:div {:style {:width "100%"
                   :display :grid
                   :grid-gap "8px"
                   :grid-template-columns "repeat(5,minmax(min-content,1fr))"}}
     [sc/buttonsquare  [sc/small-icon :plus]]
     [sc/buttonsquare  [sc/small-icon :plus]]
     [sc/button-danger {:style {:padding "var(--size-1)"
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
   [sc/padded-red [contents (for [e (range 4)]
                              [sc/listitem-content "Top" "Bottom" {:with-before [sc/fronticon {:on-click #(do
                                                                                                            ;(three-dot-click k)
                                                                                                            (.stopPropagation %))}
                                                                                 [sc/small-icon :chevron-right]]}])]]
   #_[footer (into [small-grid]
                   (for [i (range 4)]
                     [sc/small-base-button [sc/small-icon :chat-square]]))]])

(def tabs-data
  {:list      {:icon    :compass
               :content navigation}
   :bar-chart {:icon    :command
               :content help}
   :cloud     {:icon    :cloud
               :content content}
   :brygge    {:icon    :circle-user
               :content user}})

