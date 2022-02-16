(ns jegkan.appdata
  (:require [re-frame.core :refer [reg-sub]]
            [cljs.reader :refer [read-string]]
            [schpaa.state]))

(def routes
  [["/" {:name :r.forsiden :header "NRPK Booking" :subheader "Forsiden"}]
   ["/batlist" {:name :r.boatlist :header "Oversikt over båter" :subheader "Forsiden"}]
   ["/ny" {:name :r.new-booking :header "Ny booking" :subheader "Forsiden"}]
   ["/debug" {:name :r.debug :header "Feilsøking" :subheader "Baksiden"}]
   ["/turlogg" {:name :r.logg :header "Min logg" :subheader "Baksiden"}]
   ["/om-meg" {:name :r.user :header "Om meg" :subheader "Baksiden"}]

   ;;todo these?
   ["/init" {:name :r.init :header "Init" :subheader "Booking"}]
   ["/innhold" {:name :r.content :header "Innhold" :subheader "Booking"}]
   ["/siste" {:name :r.last-booking :header "Siste booking" :subheader "Booking"}]
   ["/baksiden" {:name :r.back :header "Baksiden" :subheader "Booking"}]
   ["/debug2" {:name :r.debug2 :header "Feilsøking2" :subheader "Booking"}]
   ["/blog" {:name :r.blog :header "Blogg" :subheader "Booking"}]
   ["/not-found" {:name :r.page-not-found :header ":r.page-not-found" :subheader ":r.page-not-found"}]])

;region initial-state

(def start-db
  {:version  "3.0.23"
   :app/name "booking"
   :tab      :cloud})

(defn initialize
      [db ls-key]
      (conj db
            (into (sorted-map)
                  (some->> (.getItem js/localStorage ls-key)
                           (read-string)))))

(def initial-db
  (initialize start-db schpaa.state/ls-key))

(def screen-breakpoints
  {:breakpoints [:mobile 768 :tablet 992 :small-monitor 1200 :large-monitor],
   :debounce-ms 166})

;endregion

;region firebase

(def jegkan-firebaseconfig
  {:apiKey            "AIzaSyD2iU_6-1pre0lbYERk8jDdzMgrs-3QVlY"
   :authDomain        "nrpk-vakt.firebaseapp.com"
   :databaseURL       "https://nrpk-vakt.firebaseio.com"
   :projectId         "nrpk-vakt"
   :storageBucket     "nrpk-vakt.appspot.com"
   :messagingSenderId "461903557643"
   :appId             "1:461903557643:web:bda0b1d927177d466c430e"
   :measurementId     "G-PGWW52G3KL"})

;endregion