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
  [:.active :fixed :bg-black-50 :inset-0 {:z-index             100
                                          :transition-duration "200ms"
                                          :pointer-events      :auto}]
  [:.inactive :fixed :inset-0 {:z-index             10
                               :transition-duration "200ms"
                               :pointer-events      :none}]
  ([{:keys [get-menuopen-fn]}]
   (let [active (get-menuopen-fn)]
     [:div #_{:x #(do
                    (tap> "clicked")
                    (when (get-menuopen-fn)
                      (rf/dispatch [:toggle-menu-open])))}
      [:div {:on-click #(rf/dispatch [:toggle-menu-open])
             :class    (if active :active :inactive)}]])))

(defn sample-overlay []
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
     [components.sidebar/render
      (conj m
            {:tabdata tabdata
             :uid              (fn [] 123)
             :set-selected-tab (fn [e] (rf/dispatch [::widgets/set-tab e]))
             :get-selected-tab (fn [] @(rf/subscribe [::widgets/get-tab]))
             :current-tab      (fn [] 0)})]]))
