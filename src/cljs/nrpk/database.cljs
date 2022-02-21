(ns nrpk.database
  (:require
    [reagent.core :as r]
    [styles.core :as sc]
    ["react-qr-code" :default QRCode]
    [lambdaisland.ornament :as o]
    [db.core :as db]
    [tick.core :as t]
    [schpaa.debug :as l]
    [schpaa.icon :as icon]
    [re-frame.core :as rf]))

(def active-user "arne")

(o/defstyled flexed :div
  :flex :gap-4 :h-12 :items-stretch
  ([& xs]
   [:<> xs]))

(o/defstyled button :button
  [:>button
   :h-12 :rounded-sm :bg-gray-200 :shadow-sm :disabled:bg-gray-500-10 :disabled:text-black-10
   {:min-width      "7rem"
    :outline        "2px solid transparent"
    :border         :none
    :outline-offset "2px"}]
  ([disabled? on-click caption]
   [:button
    {:on-click on-click
     :disabled disabled?}
    caption]))

(defn produce-qr-code [path]
  (js/alert path))

(rf/reg-event-db :some/set-active-item (fn [db [_ e]]
                                         ;(tap> {:setting e})
                                         (assoc db :active-item e)))

(rf/reg-sub :some/get-active-item (fn [db]
                                    (:active-item db)))

(rf/reg-sub :some/get-active-item-key (fn [db]
                                        (let [k (first (:active-item db))]
                                          ;(tap> k)
                                          k)))

(rf/reg-sub :some/get-active-item-description
            :<- [:some/get-active-item]
            (fn [item _]
              (let [[k {:keys [description date]}] item]
                {:description description})))






