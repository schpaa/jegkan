(ns schpaa.components.sidebar
  (:require [schpaa.style :as s]
            [schpaa.components.widgets :as widgets]
            [schpaa.components.sidebar-mock :as sidebar.mock]
            [re-frame.core :as rf]
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
            [tick.core :as t]
            [lambdaisland.ornament :as o]))


(declare brygge-content)

(def tabs-data
  {:list      {:local-tab-data sidebar.mock/content-tab-data
               :content-fn     sidebar.mock/content-content-fn
               :below-fn       (fn [_] [:div "Below"]) #_sidebar.mock/content-below-fn}
   :bar-chart {:local-tab-data sidebar.mock/barchart-panel-data
               :content-fn
               (fn [_]
                 [:div.p-4.bg-gray-100.dark:bg-gray-900
                  [:div.prose.dark:prose-invert.prose-lg.prose-stone.overflow-y-auto.antialiased.mx-auto
                   {:class [
                            :prose-h3:text-base
                            :prose-h3:font-bold
                            :prose-h3:uppercase
                            ;"prose-h3:text-alt"
                            ;"prose-h3:dark:text-orange-300/90"
                            :prose-p:leading-relaxed
                            :prose-p:font-normal
                            :prose-p:font-serif
                            ;"prose-p:text-black/50"
                            ;"prose-a:text-sky-400"
                            :prose-a:leading-snug
                            :prose-p:m-0
                            :prose-p:mb-2
                            :prose-p:p-0
                            ;:prose-strong:text-white
                            ;"prose-strong:bg-black/50"
                            :prose-strong:py-1
                            :prose-strong:px-2
                            :prose-strong:rounded

                            :prose-ul:list-decimal
                            :prose-ul:list-outside]}
                   #_{:class [:prose-h3:text-base
                              :prose-h3:font-bold
                              :prose-h3:uppercase
                              "prose-h3:text-orange-900/90"
                              "prose-h3:dark:text-orange-300/90"
                              :prose-p:leading-relaxed
                              :prose-p:font-normal
                              "prose-p:text-white/90"
                              "prose-a:text-white/50"
                              :prose-a:leading-snug
                              :prose-a:text-lg
                              :prose-p:m-0
                              :prose-p:mb-2
                              :prose-p:p-0
                              :prose-strong:text-white
                              "prose-strong:bg-black/50"
                              :prose-strong:py-1
                              :prose-strong:px-2
                              :prose-strong:rounded

                              :prose-ul:list-decimal
                              :prose-ul:list-outside]}
                   (markdown/md->html (inline "./retningslinjer.md"))]])

               #_(fn [_]
                   [:div.grid.gap-y-2x.-my-4x
                    {:style {:height             "calc(100vh - 4rem)"
                             :grid-template-rows "5rem 1fr 5rem"}}
                    [:div.rounded.p-2.-mx-2x.mx-3.mt-3
                     {:class "bg-black/20"}
                     "HEAD"]
                    [:div.overflow-y-scroll.px-4.py-16
                     (for [e (range 100)]
                       [:div e])]
                    [:div.rounded-t.p-2.mx-3
                     {:class "bg-black/20"}
                     "FOOTER"]]
                   #_[:div.flex.flex-col

                      [:div.flex.items-center.bg-pink-500.w-full.py-4.shrink-0
                       [:div.h-32.flex.items-center.w-full.px-4.mx-4
                        {:class "bg-black/20"} "content"]]

                      [:div.flex-grow-1.overflow-y-auto
                       (for [e (range 100)]
                         [:div e])]])
               :abelow-fn      (fn [_] [:div.bg-alt.h-32.flex-shrink-0 "Below"])}
   :cloud     {:local-tab-data sidebar.mock/brygge-panel-data
               :content-fn     (fn [e] [nrpk.database/cloud-content])
               :below-fn       (fn [_] [:div "Belows"])}
   :brygge    {:local-tab-data sidebar.mock/brygge-panel-data
               :content-fn     (fn [{:keys [selected-tab]}]
                                 (case selected-tab
                                   :a
                                   [:div.text-xl "Active -> " selected-tab
                                    (for [e (range 20)]
                                      [:div e])]
                                   (brygge-content)))

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
  {:pointer-events :none
   :z-index        200
   :overflow-x     :hidden}
  [:.open :bg-white :shadow-xl
   {:width          "20rem"
    :display :block
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
    {:class [(if (get-menuopen-fn) :open :closed) (concat s/sidebar-color)]}
    [sidebar.toolbar/toolbar (conj {:color-map s/color-map} accessors)]
    [tab-content-fn (get-selected-tab) tabs-data]]))

(defn takk-for-tilbakemelding! []
  (js/setTimeout
    (fn [] (modal/form-action {:icon  :heart
                               :flags #{:timeout :message :weak-dim}
                               :title "Takk for tilbakemeldingen!"}))
    2000))

(defn brygge-content []
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
