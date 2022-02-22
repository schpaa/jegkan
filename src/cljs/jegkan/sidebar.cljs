(ns jegkan.sidebar
  (:require [styles.core :as sc]
            [reagent.core :as r]
            [shadow.resource :refer [inline]]
            [db.core :as db]
            [db.auth :as auth]
            [db.signin :as signin]
            [tick.core :as t]
            [re-frame.core :as rf]
            [schpaa.modal.readymade :as readymade]
            [schpaa.debug :as l]))

(defn help []
  [sc/markdown (schpaa.markdown/md->html (inline "./intro.md"))])

(defn user []
  (if-let [user @(rf/subscribe [::db/user-auth])]
    (let [db-values (db/on-value-reaction {:path ["jegkan-users" (:uid user)]})]
      (if-let [v @db-values]
        (r/with-let [st (r/atom (get v :anonymous))
                     username (r/atom (get v :display-name))
                     alias (r/atom (get v :alias))]
          [sc/padded
           (sc/col2
             (sc/col
               (sc/image (:photo-url user))
               ;(sc/field (:display-name user))
               (sc/field (:email user)))
             (sc/col
               (sc/row (sc/flexed [sc/textinput {:placeholder "Navn"
                                                 :value       @username
                                                 :on-blur     #(let [path ["jegkan-users" (:uid user)]]
                                                                 (db/database-update {:path path :value {"display-name" %}}))} username]))
               (sc/row [:div] (sc/checkbox {:on-change #(let [path ["jegkan-users" (:uid user)]]
                                                          (db/database-update {:path path :value {"anonymous" %}}))
                                            :reverse   true} st (sc/col-end
                                                                  [:div "Skjul min identitet"]
                                                                  [sc/small "Bare aliaset ditt blir synlig"])))
               (sc/row (sc/flexed [sc/textinput {:placeholder "Alias"
                                                 :disabled    (not @st)
                                                 :value       @alias
                                                 :on-blur     #(let [path ["jegkan-users" (:uid user)]]
                                                                 (db/database-update {:path path :value {"alias" %}}))} alias])))
             (sc/row
               [:div] [sc/button {:on-click #(auth/sign-out)} "Logg ut"]))])
        [sc/padded
         (sc/row
           [:div] [sc/button {:on-click #(let [path ["jegkan-users" (:uid user)]]
                                           (db/database-update {:path path :value {"registered" (str (t/now))}}))} "Init"])]))

    [sc/padded-red [signin/login]]))

(defn content []
  (let [active-user (:uid @(rf/subscribe [::db/user-auth]))
        path ["topics" active-user]
        active-item (some-> (rf/subscribe [:kee-frame/route]) deref :path-params :id)]
    (r/with-let [value (r/atom "")]
      [sc/padded
       [sc/flexed
        [sc/textinput {:value @value} value]
        [sc/button {:disabled (empty? @value)
                    :on-click #(let [path ["root"]
                                     data {:uid         active-user
                                           :date        (str (t/now))
                                           :description @value}]
                                 (let [id (.-key (db/database-push
                                                   {:path  path
                                                    :value data}))]
                                   (db/database-update {:path  ["tapas" active-user id]
                                                        :value data})))}
         "Lag ny"]]
       (let [path ["tapas" active-user]
             data (db/on-value-reaction {:path path})]
         [sc/list-list active-item @data {:three-dot-click #(readymade/message {:title %
                                                                                :content "show more in a popup!"})}])
       (let [active-item (if (keyword? active-item) (name active-item) active-item)]
         (when active-item
           [sc/qr-code active-item]))])))

(def tabs-data
  {:list      {:icon    :compass
               :content (fn [] [:div "?"])}
   :bar-chart {:icon    :command
               :content help}
   :cloud     {:icon    :cloud
               :content content}
   :brygge    {:icon    :circle-user
               :content user}})

