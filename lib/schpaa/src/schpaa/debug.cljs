(ns schpaa.debug
  (:require [clojure.pprint :as p  #_#_:refer [with-out-str]]
            [lambdaisland.ornament :as o]
            [re-frame.core :as rf]
            [styles.core :as sc]))

(rf/reg-event-db :debug/in-debug-cancel (fn [db _]
                                          (assoc db :in-debug false)))

(rf/reg-sub :debug/in-debug? (fn [db] (:in-debug db false)))

(defn ppr [x]
  (p/with-pprint-dispatch
    p/code-dispatch
    (-> x p/pprint with-out-str)))

(defn ppre [& p]
  (if (seq p)
    [:pre.pre-wrap.text-xs.bg-black.text-yellow-300
     {:style {:white-space :pre-wrap}}
     (ppr (first p))]
    [:pre.text-xs.bg-blackblack.text-amber-300
     {:style {:white-space :pre-wrap}}
     (ppr p)]))

(defn ppre-x [& p]
  [:div {:class ["bg-black/90" :text-amber-300 :text-xs :p-1]}
   (if (seq p)
     (for [e p]
       [:pre {:style {:white-space :pre-wrap}}
        (with-out-str (p/pprint e))])
     [:div
      {:style {:white-space :pre-wrap}}
      (with-out-str (p/pprint p))])])

(o/defstyled mon :div
  :bg-black :text-amber-500 :text-xs :p-4 :w-full  :shadow
  sc/outlined
  {:z-index 1}

  ([& p]
   [:div 
    (if (seq p)
      (for [e p]
        [:div {:style {:white-space :pre-wrap}}
         (with-out-str (p/pprint e))])
      [:div
       {:style {:white-space :pre-wrap}}
       (with-out-str (p/pprint p))])]))