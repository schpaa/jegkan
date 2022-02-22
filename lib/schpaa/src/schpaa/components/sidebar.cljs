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
            [girouette.core :refer [css]]
            [jegkan.sidebar]))


(declare brygge-content)

(def tabs-data
  {:list      {:local-tab-data sidebar.mock/content-tab-data
               :content-fn     sidebar.mock/content-content-fn
               :below-fn       (fn [_] [:div "Belosw"]) #_sidebar.mock/content-below-fn}
   :bar-chart {:local-tab-data sidebar.mock/barchart-panel-data
               :content-fn
               (fn [_]
                 (jegkan.sidebar/help)
                 #_[sc/markdown
                    (markdown/md->html (inline "./retningslinjer.md"))])


               :abelow-fn      (fn [_] [:div.bg-alt.h-32.flex-shrink-0 "Below"])}
   :cloud     {:local-tab-data sidebar.mock/brygge-panel-data
               :content-fn     (fn [e] [jegkan.sidebar/content])
               #_#_:below-fn (fn [_] [:div "Belows"])}
   :brygge    {:local-tab-data sidebar.mock/brygge-panel-data
               :content-fn     (fn [{:keys [selected-tab]}]
                                 #_(case selected-tab
                                     :a
                                     [:div.text-xl "Active -> " selected-tab
                                      (for [e (range 20)]
                                        [:div e])]
                                     [brygge-content])
                                 [jegkan.sidebar/user])

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

(o/defstyled slidein-menu :div#maint
  :text-black
  :pointer-events-none
  {:z-index 500}
  [:at-media {:min-width "14rem"
              :max-width "25rem"}
   {:transition-duration "200ms"
    :transition-property "width"}
   [:& :fixed :top-0 :left-0 :bottom-0 :w-full
    [:.closed :h-screen
     {:pointer-events      :none
      :transition-duration "200ms"
      :transition-timing-function "cubic-bezier(0.4, 0, 0.2, 1)"
      :transform           "translateX(-100%)"}]
    [:.open :h-screen
     {:background-color "var(--surface2)"
      :pointer-events      :auto
      :width               "100%"
      :transition-duration "200ms"
      :transition-property "transform,width"
      :transform           "translateX(0%)"}]]]
  [:at-media {:min-width "25rem"}
   {:transition-duration "200ms"
    :transition-property "width"}
   [:& :fixed :top-0 :left-0 :bottom-0  
    [:.closed :h-screen {:pointer-events      :none
                         :transition-duration "200ms"   
                         :width               "20rem"
                         :transform           "translateX(-100%)"}]
    [:.open :h-screen  {:background-color "var(--surface2)"
                        :box-shadow "var(--shadow-6)"
                        :transition-timing-function "cubic-bezier(0.4, 0, 0.2, 1)"
                        :transition-origin   "top right"
                        :pointer-events      :auto
                        :transition-property "transform,width"
                        :width               "20rem"
                        :transition-duration "200ms"
                        :transform           "translateX(0%)"}]]]

  [:.content  {:height "calc(100% - 4rem)"
               :overflow-y :auto}]
  ([{:keys [get-menuopen-fn tabdata get-selected-tab] :as m}]
   (let [open? (get-menuopen-fn)]
     [:div {:on-click #()
            :class    (if open? :open :closed)}
      [sc/toolbar sidebar.toolbar/tab-list (conj {:color-map s/color-map} m)]
      [:div.content ((:content (get tabdata (get-selected-tab))))]])))

(defn takk-for-tilbakemelding! []
  (js/setTimeout
    (fn [] (modal/form-action {:icon  :heart
                               :flags #{:timeout :message :weak-dim}
                               :title "Takk for tilbakemeldingen!"}))
    2000))

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


