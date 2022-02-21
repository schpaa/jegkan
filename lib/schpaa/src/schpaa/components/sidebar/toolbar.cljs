(ns schpaa.components.sidebar.toolbar
  (:require [schpaa.style :as s]
            [re-frame.core :as rf]
            [schpaa.components.widgets :as widgets]
            [schpaa.icon :as icon]
            [styles.core :as sc :refer [centered-button]]
            [lambdaisland.ornament :as o]))

(def tab-list [:bar-chart :list :cloud :brygge])
