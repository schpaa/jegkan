(ns nrpk.fsm-helpers
  (:require [re-frame.core :as rf] 
            [re-statecharts.core]))

(defn send [& event]
  (tap> ["SEND" event])
  (rf/dispatch (apply conj [:re-statecharts.core/transition :main-fsm] event)))