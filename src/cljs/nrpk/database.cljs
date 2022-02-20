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
   [:div.all (doall (for [[k {:keys [description date]} :as e] data
                          :let [k (if (keyword? k) (name k) k)]]
                      [:div.listitem.grid
                       {:class    (if (= k active-item) :active)
                        :on-click #(rf/dispatch [:app/navigate-to [:r.topic {:id k}]])}
                       [:div description]
                       [:div]
                       ;[button false #(produce-qr-code {:path [k]}) [sc/small-icon :qr-code]]
                       [:div.small (str (t/date (t/instant date)))]]))]))

(o/defstyled qr-code :div
  :space-y-4 :flex :justify-center :flex-col :items-center
  :border-2 :border-gray-500 :p-4 :rounded-sm
  [:>a :w-full :px-4 {:overflow :hidden
                      :text-overflow :ellipsis
                      :white-space :nowrap}]
  ([active-item]
   (let [addr (kee-frame.core/path-for [:r.topic {:id active-item}])
         path (str (.-protocol js/window.location) "//" (.-host js/window.location) addr)]
     [:<>
      [:> QRCode {:title "Whatever"
                  :size  256
                  :level "Q"
                  :value path}]

      ;[:div addr]
      ;[:div (.-host js/window.location)]
      ;[:div (.-protocol js/window.location)]
      [:a {:href path} path]])))

(o/defstyled cloud-content :div
  :p-4 :space-y-4
  ([]
   (let [active-user (:uid @(rf/subscribe [::db/user-auth]))
         path ["topics" active-user]
         active-item (some-> (rf/subscribe [:kee-frame/route]) deref :path-params :id)]
     (r/with-let [value (r/atom "")]
       [:<>
        ;[:div "Content"]
        ;[l/ppre active-item]
        [flexed
         [sc/textinput {:value @value} value]
         [button (empty? @value) #(let [path ["root"]
                                        data {:uid         active-user
                                              :date        (str (t/now))
                                              :description @value}]
                                    (let [id (.-key (db/database-push
                                                      {:path  path
                                                       :value data}))]
                                      (db/database-update {:path ["tapas" active-user id]
                                                           :value data})))
          "Lag ny"]]
        (let [path ["tapas" active-user]
              data (db/on-value-reaction {:path path})]
          [list-list active-item @data])
        (let [active-item (if (keyword? active-item) (name active-item) active-item)]
          (when active-item
            [qr-code active-item]))]))))
