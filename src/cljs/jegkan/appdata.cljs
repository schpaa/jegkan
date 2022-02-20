(ns jegkan.appdata
  (:require [re-frame.core :refer [reg-sub]]
            [cljs.reader :refer [read-string]]
            [schpaa.state]))

(def routes
  [["/" {:name :r.forsiden}]
   ["/topic/:id" {:name :r.topic}]
   ["/not-found" {:name :r.not-found}]])


;region initial-state

(def start-db
  {:version  "3.0.23"
   :app/name "jeg-kan!"
   :menu-open? false
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