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

(o/defstyled textinput :div
  [:input :w-full :bg-gray-100 :h-full :px-2 :rounded-sm :border-2 :border-gray-200]
  ([value]
   [:input
    {:type      "text"
     :value     (-> value deref)
     :on-change #(let [v (-> % .-target .-value)]
                   (reset! value v))}]))

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
                                          (tap> k)
                                          k)))

(rf/reg-sub :some/get-active-item-description
            :<- [:some/get-active-item]
            (fn [item _]
              (let [[k {:keys [description date]}] item]
                {:description description})))

(o/defstyled list-list :div
  [:.all :bg-bleu-100 :space-y-px]
  [:.listitem :bg-bleu-400 :text-white
   [:&:hover :bg-white :text-black]]
  [:.grid :p-2 :gap-x-4 {:display               "grid"
                         :grid-template-columns "1fr min-content"
                         :grid-auto-rows        "auto"
                         :align-items           :center}]
  [:.active :bg-green-500]
  [:.small :text-xs]
  ([active-item data]
   #_(for [[_ e] @data
           :let [{:keys [description date]} e]]
       [button false #() [flexed description [sc/small-icon :qr-code]]])
   [:div.all (doall (for [[k {:keys [description date]} :as e] data]
                      [:div.listitem.grid
                       {:class (if (= k active-item) :active)
                        :on-click #(rf/dispatch [:some/set-active-item e])}
                       [:div description]
                       ;[textinput value]
                       [button false #(produce-qr-code {:path [k]}) [sc/small-icon :qr-code]]
                       [:div.small (str (t/date (t/instant date)))]]))]))

(o/defstyled cloud-content :div
  :p-4 :space-y-4
  sc/outlined
  ([]
   (let [path ["topics" active-user]
         active-item @(rf/subscribe [:some/get-active-item-key])]
     (r/with-let [value (r/atom "")]
       [:<>
        [:div "Content"]
        [l/ppre @(rf/subscribe [:some/get-active-item-key])]
        [flexed
         [textinput value]
         [button (empty? @value) #(do (db/database-push
                                        {:path  path
                                         :value {:date        (str (t/now))
                                                 :description @value}})) "Lag ny"]]
        (let [data (db/on-value-reaction {:path path})]
          [list-list active-item @data])
        (let [path (str (.-host js/window.location) "/root/" (if (keyword? active-item)
                                                               (name active-item)
                                                               active-item))]
          [:<>
           [:div path]
           [:> QRCode {:title "Whatever"
                       :size  256
                       :level "Q"
                       :value path}]])]))))

