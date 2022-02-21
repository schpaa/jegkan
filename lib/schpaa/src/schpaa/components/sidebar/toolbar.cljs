(ns schpaa.components.sidebar.toolbar
  (:require [schpaa.style :as s]
            [re-frame.core :as rf]
            [schpaa.components.widgets :as widgets]
            [schpaa.icon :as icon]
            [styles.core :as sc :refer [centered-button]]
            [lambdaisland.ornament :as o]))

(def tab-list [:bar-chart :list :cloud :brygge])



(o/defstyled toolbar :div
  :h-16 :sticky :top-0 :w-full
  {:display  :flex
   :background-color "white"}
  ([m]
   (let [{:keys [color-map get-selected-tab set-selected-tab toggle-menu-open]} m]
     (into [:<>] (concat
                   [[sc/toolbutton' :cross-out {:on-click #(toggle-menu-open)}]]
                   (map (fn [e] [sc/toolbutton' (:icon (get color-map e))
                                 {:item      e
                                  :on-click  #(do
                                                (tap> %)
                                                (set-selected-tab %))
                                  :selected? (= e (get-selected-tab))}]) tab-list))))))


