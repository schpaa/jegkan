(ns styles.core
  (:require [lambdaisland.ornament :as o]
            [schpaa.icon :as icon]))

(o/defstyled outlined :div
  {:outline "4px solid rgba(255,0,0,0.8)"})

(o/defstyled centered-button :div
  :h-16 :w-16
  [:.selected :bg-gray-400]
  [:.butt :w-full :h-full :p-4 {:display         :grid
                                :justify-content :center
                                :align-content   :center
                                :color           :black}
   [:&:hover :bg-red-500 :text-white]]
  ([on-click selected? icon]           
   (let []
     [:div {:on-click on-click
            :class    [(when selected? :selected) :butt]} (icon/touch icon)])))

(o/defstyled centered-button' :div
  :h-16 :w-16 :text-black
  [:.selected :p-4 :text-gray-200]
  [:.butt :p-4 :w-full :h-full  {:display         :grid
                                 :justify-content :center
                                 :align-content   :center}

   [:&:hover :bg-red-500 :text-white]]
  ([on-click selected? icon]
   (let []
     [:div {:on-click on-click
            :class    [(if selected? :selected :butt)]} (icon/touch icon)])))

(o/defstyled small-icon :div
  :h-8 :w-8
  ([icon]
   (icon/adapt icon)))

(o/defstyled inter :div
  ;:text-white
  {:font-family           "Inter"
   :font-weight           400
   ;:font-size             "1rem"
   :font-feature-settings "'cv10', 'salt', 'zero', 'tnum'"})