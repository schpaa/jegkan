(ns schpaa.components.sidebar
  (:require [schpaa.style :as s]
            [schpaa.components.widgets :as widgets]
            [schpaa.components.sidebar-mock :as sidebar.mock]
            [re-frame.core :as rf]
            [garden.selectors]
            [schpaa.icon :as icon]
            [schpaa.debug :as l]
            [schpaa.markdown :as markdown]
            [shadow.resource :refer [inline]]
            [schpaa.components.sidebar.toolbar :as sidebar.toolbar]
            [nrpk.fsm-helpers :refer [send]]
            [schpaa.components.tab :refer [tab]]
            [schpaa.modal :as modal]
            [reagent.core :as r]
            [schpaa.button :as bu]
            [schpaa.style :as st]
            [schpaa.components.views]
            [nrpk.database]
            [schpaa.modal.readymade]
            [db.core :as db]
            [db.signin :as signin]
            [db.auth :as auth]
            [tick.core :as t]
            [lambdaisland.ornament :as o]
            [styles.core :as sc]
            [girouette.core :refer [css]]))


(declare brygge-content)

(def tabs-data
  {:list      {:local-tab-data sidebar.mock/content-tab-data
               :content-fn     sidebar.mock/content-content-fn
               :below-fn       (fn [_] [:div "Below"]) #_sidebar.mock/content-below-fn}
   :bar-chart {:local-tab-data sidebar.mock/barchart-panel-data
               :content-fn
               (fn [_]
                 [sc/markdown
                  (markdown/md->html (inline "./retningslinjer.md"))])


               :abelow-fn      (fn [_] [:div.bg-alt.h-32.flex-shrink-0 "Below"])}
   :cloud     {:local-tab-data sidebar.mock/brygge-panel-data
               :content-fn     (fn [e] [nrpk.database/cloud-content])
               :below-fn       (fn [_] [:div "Belows"])}
   :brygge    {:local-tab-data sidebar.mock/brygge-panel-data
               :content-fn     (fn [{:keys [selected-tab]}]
                                 #_(case selected-tab
                                     :a
                                     [:div.text-xl "Active -> " selected-tab
                                      (for [e (range 20)]
                                        [:div e])]
                                     [brygge-content])
                                 [brygge-content])

               :-below-fn      (fn [_] [:div "Below"])}})

(defn tab-content-fn [selected-tab tabs-data]
  [:div#maint.overflow-y-auto
   {:style {:height "calc(100vh - (4rem))"}
    ;intent apply color-scheme of selected tab
    :class (get-in s/color-map [selected-tab :selected :bg])}
   (let [tab-id selected-tab
         color-map (get s/color-map selected-tab)
         local-tab-data (get-in tabs-data [selected-tab :local-tab-data])
         content-fn (get-in tabs-data [selected-tab :content-fn])
         below-fn (get-in tabs-data [selected-tab :below-fn])
         tab (rf/subscribe [::widgets/get-tab tab-id])]
     [:div.flex.flex-col.min-h-full
      ;[:div (str @tab)]
      [:div.flex.flex-col.flex-grow
       [:div.xp-4.overflow-y-auto
        {:class (get-in color-map [:selected :tab])}
        ;intent Draw indiviual content
        (when content-fn
          (content-fn {:selected-tab @tab
                       :color-map    color-map}))]]
      ;intent Draw common content below
      (when below-fn
        [:div.p-2 (below-fn {:selected-tab @tab
                             :color-map    color-map})])])])

(defonce a (r/atom false))
;(js/setInterval #(swap! a not) 2000)

(o/defstyled render :div
  :h-screen :top-0 :fixed :border-l-0 :xs:border-l
  ;:bg-red-500
  [:& {:pointer-events :none
       :z-index        200
       :max-width "20rem"
       :xoverflow-x     :hidden}]
  [:.shadows :bg-white {:box-shadow "var(--shadow-6)"}]
  [:.open ;:bg-white
   {
    :width                      "20rem"
    :display                    :block
    :pointer-events             :auto
    :overflow-x                 :hidden
    :transition-origin          "top left"
    :transition-duration        "200ms"
    :transition-timing-function "cubic-bezier(0.4, 0, 0.2, 1)"
    :transform                  "translateX(0%)"}]
  [:.closed :bg-gray-200
   {:pointer-events      :none
    :transition-origin   "top left"
    :transition-duration "200ms"
    :transition-property "transform"
    :transform           "translateX(-100%)"}]
  ([{:keys [toggle-menu-open get-menuopen-fn get-selected-tab menu-direction] :as accessors}]
   [:div
    {:class [(if (get-menuopen-fn) :shadows)
             (if (get-menuopen-fn) :open :closed) #_(concat s/sidebar-color)]}
    [sidebar.toolbar/toolbar (conj {:color-map s/color-map} accessors)]
    [tab-content-fn (get-selected-tab) tabs-data]]))

(defn takk-for-tilbakemelding! []
  (js/setTimeout
    (fn [] (modal/form-action {:icon  :heart
                               :flags #{:timeout :message :weak-dim}
                               :title "Takk for tilbakemeldingen!"}))
    2000))

#_(defn brygge-content []
    [:div.space-y-4.p-3.flex.flex-col
     {:style {:min-height "calc(100vh - 4rem)"}}
     #_(let [admin
             (fn [] (modal/form-action
                      {:flags   #{:weak-dim}
                       :title   "state"
                       :form-fn (fn []
                                  [:div
                                   [l/ppre-x (:re-statecharts.core/fsm-state @re-frame.db/app-db)]
                                   [bu/just-buttons [["Report" [:btn-free] #(do
                                                                              (send :e.hide)
                                                                              (tap> "Send report home")
                                                                              (takk-for-tilbakemelding!))]]]])}))

             regular #(modal/form-action {:title "app-db" :form-fn (fn [] [l/ppre-x @re-frame.db/app-db])})]

         (r/with-let [s (r/atom 1)]
           [:div (schpaa.components.tab/tab
                   (conj schpaa.components.tab/select-bar-config
                         {:item     ["w-1/2"]
                          :select   #(reset! s %)
                          :selected (deref s)})
                   [0 "Administrator" #(admin)]
                   [1 "Vanlig" #(regular)]
                   #_[2 "Gaus?" #(regular)])]))

     [:div.grow.flex.flex-col.gap-4
      (let [{:keys [fg- fg fg+ p he hd p+ p-]} (st/fbg' :config-panel)
            e "Plasser meny til venstre"
            e' "Undertekst som støtter overtekst"]
        (schpaa.components.views/modern-checkbox'
          {:set-details #(schpaa.state/change :app/menu-direction %)
           :get-details #(-> (schpaa.state/listen :app/menu-direction) deref)}
          (fn [checkbox]
            [:div.flex.items-center.justify-between.gap-4.w-full.px-2
             checkbox
             [:div.space-y-0.grow
              [:div {:class (concat fg p+)} e]
              [:div {:class (concat fg- p-)} e']]])))

      (let [{:keys [fg- fg fg+ p he hd p+ p-]} (st/fbg' :config-panel)
            e "Mørkt modus"]
        (schpaa.components.views/modern-checkbox'
          {:set-details #(schpaa.state/change :app/dark-mode %)
           :get-details #(-> @(schpaa.state/listen :app/dark-mode))}
          (fn [checkbox]
            [:div.flex.items-center.justify-between.gap-4.w-full.px-2
             checkbox
             [:div.space-y-0.grow
              [:div {:class (concat fg p+)} e]]])))]

     (let [user-auth (rf/subscribe [::db/user-auth])
           uid (some-> user-auth deref :uid)]
       [:div.flex.gap-2
        [bu/regular-button-small {:on-click #(db/database-push {:path  ["booking-posts" "articles"]
                                                                :value {:uid     uid
                                                                        :content "old"
                                                                        :date    (str (t/<< (t/now) (t/new-duration (rand-int 240) :hours)))}})}
         [:div [:div "Add"] [:div "old"]]]
        [bu/regular-button-small {:on-click #(db/database-push {:path  ["booking-posts" "articles"]
                                                                :value {:uid     uid
                                                                        :content "recent"
                                                                        :date    (str (t/>> (t/now) (t/new-duration (rand-int 3) :minutes)))}})}
         [:div [:div "Add"] [:div "+3"]]]])


     [:div.flex.flex-col.gap-8
      (let [{:keys [fg- fg fg+ p he hd p+ p-]} (st/fbg' :config-panel)
            e "Eksponer app-db"]
        (schpaa.components.views/modern-checkbox'
          {:set-details #(schpaa.state/change :app/expose-app-db %)
           :get-details #(-> @(schpaa.state/listen :app/expose-app-db))}
          (fn [checkbox]
            [:div.flex.items-center.justify-between.gap-4.w-full.px-2
             checkbox
             [:div.space-y-0.grow
              [:div {:class (concat fg p+)} e]
              [:div {:class (concat fg- p-)} "for feilsøking"]]])))
      (bu/regular-button {:on-click #(schpaa.modal.readymade/ok-cancel
                                       {:ok              (fn [] (rf/dispatch [:schpaa.state/restore-settings]))
                                        :button-captions {:ok "Greit" :cancel "Neida"}
                                        :flags           #{:timeout :forced :wide}
                                        :content         "Nullstill alt?"})} "Nullstill alt")
      #_[:button.btn.btn-free
         {:on-click #(modal/form-action
                       {:flags   #{:timeout :weak-dim}
                        :title   "Overskrift"
                        :icon    :circle-question
                        :form-fn (fn [] [:div.space-y-1.p-4
                                         [:p "Vi prøver oss på en lang melding som de færreste kommer til å lese"]
                                         [:p "I tillegg til å ha flere avsnitt garanterer du at ingen kommer til å lese dette."]])
                        :footer  "Lukkes automatisk etter 5 sekunder"})}
         "Nullstill alt"]]])

(o/defstyled padded-red :div
  :p-4
  {:overflow-y :hidden}
  [:.content sc/outlined :rounded {:overflow-x :hidden}]
  ([content]
   [:div.content content]))

(o/defstyled padded :div
  :p-2
  [:.content :space-y-2 :rounded :p-1 {:overflow-x :hidden}]
  ([& contents]
   [:div.content contents]))


(comment
  (defn modern-checkbox [st label]

    [:button {:on-click #(swap! st not)
              :class    (concat
                          (if @st [:bg-green-600] [:bg-gray-200])
                          [:relative
                           :inner-shadow
                           :bg-gray-300
                           :inline-flex :shrink-0
                           :focus:outline-none :focus:ring-2 :focus:ring-offset-2 :focus:ring-cyan-400
                           :rounded-full :border-2
                           :transition-colors :ease-in-out :duration-100
                           :h-7 :w-12])}
     [:span {:class (concat
                      (if @st [:translate-x-5] [:translate-x-0])
                      [:bg-white
                       :transition :duration-100
                       :inline-block :w-6 :h-6
                       :ease-in-out
                       :shadow :transform :ring-0
                       :rounded-full])}
      #_[:div.relative
         {:class [:ease-in-out :transition]}
         [:div.absolute.inset-0 {:class (concat (if @st [:opacity-0] [:opacity-100]) [:duration-100 :xtransition])}
          [:div.flex.items-center.justify-center (icon/adapt :cross-out 1)]]
         [:div.absolute.inset-0 {:class (concat (if @st [:opacity-100] [:opacity-0]) [:duration-100 :xtransition])}
          [:div.flex.items-center.justify-center (icon/adapt :checked 1)]]]]]
    [:div label]))

(defn brygge-content []
    (if-let [user @(rf/subscribe [::db/user-auth])]
      (let [db-values (db/on-value-reaction {:path ["jegkan-users" (:uid user)]})]
        (if-let [v @db-values]
          (r/with-let [st (r/atom (get v :anonymous))
                       username (r/atom (:display-name user))
                       alias (r/atom (get v :alias))]
            [padded
             
             (sc/col2
               (sc/col
                 (sc/field' [:img {:src (:photo-url user)}])
                 ;(sc/field (:display-name user))
                 (sc/field (:email user)))
               (sc/col
                 (sc/row (sc/flexed [sc/textinput {:value    @username
                                                   :on-blur  #(let [path ["jegkan-users" (:uid user)]]
                                                                (db/database-update {:path path :value {"display-name" %}}))} username]))
                 (sc/row [:div] (sc/checkbox {:on-change #(let [path ["jegkan-users" (:uid user)]]
                                                            (db/database-update {:path path :value {"anonymous" %}}))
                                              :reverse   true} st (sc/col-end
                                                                    [:div "Skjul min identitet"]
                                                                    [sc/small "Bare aliaset ditt blir synlig"])))
                 (sc/row (sc/flexed [sc/textinput {:disabled (not @st)
                                                   :value    @alias
                                                   :on-blur  #(let [path ["jegkan-users" (:uid user)]]
                                                                (db/database-update {:path path :value {"alias" %}}))} alias])))
               (sc/row
                 [:div] [sc/button {:on-click #(auth/sign-out)} "Logg ut"]))])
          [padded
           (sc/row
             [:div] [sc/button {:on-click #(let [path ["jegkan-users" (:uid user)]]
                                             (db/database-update {:path path :value {"registered" (str (t/now))}}))} "Init"])]))

      [padded-red [signin/login]]))
