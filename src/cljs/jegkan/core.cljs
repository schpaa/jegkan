(ns jegkan.core
  (:require
    [re-frame.core :as rf]
    [kee-frame.core :as k]
    ;; passively registers the fsm
    [re-statecharts.core :as rs]
    [jegkan.appdata :as app-data]
    [jegkan.spa :as spa]
    ;[booking.fsm-model]))
    [schpaa.darkmode]
    [db.core :as db]
    [nrpk.core]
    [nrpk.spa]))

(defn kee-start []
      (k/start! {:routes         app-data/routes,
                 :initial-db     app-data/initial-db,
                 :screen         app-data/screen-breakpoints
                 :root-component [nrpk.spa/app-wrapper spa/route-table] 
                 :not-found      "/not-found",
                 :hash-routing?  false}))

(defn ^:dev/after-load reload! []
      (js/console.log "loaded!")
      (rf/clear-subscription-cache!)
      (kee-start)
      (rf/dispatch [:app/setup-handlers]))

(defn init! []
      (db/init! {:config app-data/jegkan-firebaseconfig})
      (reload!)
      (rf/dispatch [::rs/transition :main :e.restart]))
