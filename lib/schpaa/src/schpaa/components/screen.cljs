(ns schpaa.components.screen
  (:require [re-frame.core :as rf]
            [schpaa.icon :as icon]
            [schpaa.components.header :as components.header]
            [schpaa.components.simple-header :as components.simple-header]
            [schpaa.components.sidebar :as components.sidebar]
            [schpaa.components.widgets :as widgets]
            [schpaa.debug :as l]
            [lambdaisland.ornament :as o]))

(o/defstyled overlay :div

  [:div.active :fixed :inset-0 :bg-black :opacity-60 {:transition-property "opacity"
                                                      :transition-duration "500ms"}]
  [:div.inactive :opacity-0 {:transition-duration "500ms"}]
  #_[:& :fixed :inset-0  {:transition-property "opacity"
                          :transition-duration "200ms"
                          :opacity 0.5}]

  #_[:.active  :fixed   :inset-0 :bg-black
     {:transition-property "opacity"
      :transition-duration "200ms"
      :opacity 52
      ;:z-index             100
      :pointer-events      :auto}]
  #_[:.inactive ; :fixed :inset-0
     {;:z-index             100
      :opacity 0
      ;:transition-duration "200ms"
      :pointer-events      :none}]
  ([{:keys [get-menuopen-fn]}]
   [:div {:class    (if (get-menuopen-fn) :active :inactive)
          :on-click #(rf/dispatch [:toggle-menu-open])}]))


#_(defn sample-overlay []
    [:div {:style {:top              50 :left 50 :right 0 :bottom 0
                   :position         :absolute
                   :background-color :#a804
                   :z-index          1}}])

(o/defstyled content :div
  [:.open {:transition-origin   "top left"
           :transition-duration "200ms"
           :transition-property "transform"
           :transform           "translateX(20rem)"}]
  [:.normal {:transition-origin   "top left"
             :transition-duration "200ms"
             :transition-property "transform"
             :transform           "translateX(0rem)"}]
  ([{:keys [get-menuopen-fn]} contents]
   [:div {:class (if (get-menuopen-fn) :open :normal)} contents]))

(defn render [{:keys [tabdata get-menuopen-fn menu-direction] :as m} web-content]
  (let [route (rf/subscribe [:kee-frame/route])]
    [:<>
     [content m
      (when-not (= (some-> @route :data :name) :r.page-not-found)
        [:<>
         [components.simple-header/render m]
         web-content])]
     [overlay m]
     [:div
      ;[l/ppre-x ">" @(rf/subscribe [::widgets/get-tab])]
      [components.sidebar/slidein-menu
       (conj m
             {:tabdata          tabdata
              :uid              (fn [] 123)
              :set-selected-tab (fn [e] (rf/dispatch [::widgets/set-tab e]))
              :get-selected-tab (fn [] @(rf/subscribe [::widgets/get-tab]))
              :current-tab      (fn [] 0)})]]]))
