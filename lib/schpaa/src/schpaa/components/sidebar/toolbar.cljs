(ns schpaa.components.sidebar.toolbar
  (:require [schpaa.style :as s]
            [re-frame.core :as rf]
            [schpaa.components.widgets :as widgets]
            [schpaa.icon :as icon]
            [styles.core :as sc :refer [centered-button]]
            [lambdaisland.ornament :as o]))

(def tab-list [:bar-chart :list :cloud :brygge])

(o/defstyled button :div
  {:aspect-ratio "1 / 1"}
  ([color-map selected-tab-id on-click tab-id]
   (let [[selected' normal icon] ((juxt :selected :normal :icon) (get color-map tab-id))]
     [:div
      {:class (flatten ((juxt :fg :bg) (if (= tab-id selected-tab-id) selected' normal)))}
      (let [selected? (= tab-id selected-tab-id)]
        [centered-button #(on-click tab-id) selected? icon])])))

(o/defstyled toolbar :div
  :h-16 :gap-px :sticky :top-0 :bg-white
  {:display  :flex
   :xoutline "solid 4px rgba(255,0,0,0.5)"}
  ([m]
   (let [{:keys [color-map get-selected-tab set-selected-tab toggle-menu-open]} m
         button' (partial button color-map (get-selected-tab) #(set-selected-tab %))]
     (into [:<>] (concat
                   [[centered-button #(toggle-menu-open) false :cross-out]]
                   (map button' tab-list))))))


