(ns jegkan.spa
  (:require
    [shadow.resource :refer [inline]]
    [lambdaisland.ornament :as o]
    [garden.units :as u]
    [styles.core :as sc]
    [garden.core]
    [garden.core :refer [css]]
    [schpaa.markdown]
    [garden.stylesheet :refer [at-font-face]]
    [reagent.core :as r]
    [tick.core :as t]
    [db.core :as db]
    [db.auth :as auth]
    [schpaa.debug :as l]
    [re-frame.core :as rf]
    [schpaa.icon :as icon]))

(goog-define versionz "!")
(goog-define dummy "!")

(o/defstyled oclass :div
  {:color                      "red"
   :outline                    "dashed 1px black"
   :transition-duration        "500ms"
   :transition-timing-function "cubic-bezier(0.4, 0, 0.2, 1)"
   :transform                  "translateX(0%)"})

(o/defstyled samplesz :div
  :select-none
  :bg-bleu-100
  :text-bleu-900
  :h-full
  :p-2
  {:display        :grid
   :flex-direction :column
   ;:flex-grow 1
   ;:flex-shrink 1
   :min-height     "calc(100vh - 4rem)"}
  ([arg]
   [:div arg]))

(o/defstyled footer :div
  {:flex       1
   :margin-top :auto}
  ([arg]
   [:div arg]))

(o/defstyled past-day :div
  :select-none
  :bg-bleu-500
  :text-bleu-100

  [:div :h-16 {:place-items         :center
               :display             :grid
               :transition-duration "200ms"}
   #_[:&:hover :bg-bleu-500 {:transition-duration "200ms"}]]
  ([a]
   [:div #_{:on-click #()
            :class    :item} (t/day-of-month a)]))

;(def active-item "-MwGxRMAnFYGhmbO6rf8")

(def active-user "PeterGASRi0")

(o/defstyled day :div
  :select-none
  :bg-black

  [:.day :absolute :top-px :right-px :text-xs]
  [:.freq :absolute :bottom-px :left-px :text-xs]
  [:.weekend :bg-red-500-50]
  [:.preferred :bg-green-500-50]
  [:.container :h-16 {:position "relative"}
   [:.presence
    :inset-2
    :rounded
    {:position      "absolute"
     :justify-items :center
     :align-items   :center
     :display       "grid"}
    [:&:hover :bg-bleu-500 {:transition-duration "200ms"}]]]

  ([m]
   (let [active-user (:uid @(rf/subscribe [::db/user-auth]))
         a (some-> (rf/subscribe [:kee-frame/route]) deref :path-params :id)
         active-item (if (keyword? a) (name a) a)
         {:keys [freq a]} m
         preferred? (pos? freq)
         c (db/on-value-reaction {:path ["root" active-item "slots" (str (t/date a))]})
         weekend? (some #{(t/int (t/day-of-week a))} #{6 7})]
     [:div.container
      {:class    [:item
                  (if weekend? :weekend)
                  (if preferred? :preferred)]

       :on-click #(let [path ["root" active-item "slots" (str (t/date a))]
                        [k v] (get @c active-user)]
                    (if (get @c (keyword active-user))
                      (db/database-update {:path  path
                                           :value {active-user nil}})
                      (db/database-update {:path  path
                                           :value {active-user (str (t/time))}})))}
      [:div {:style {:background (if freq :red :blue)}}
       [:div.day [sc/inter (t/day-of-month a)]]
       (when (pos? (count @c))
         [:<>
          [:div.freq (count @c)]
          (if (get @c (keyword active-user))
            [:div
             {:class :presence}
             [sc/small-icon :checked]])])]])))

(o/defstyled calendar :div
  :bg-bleu-200 :w-full :text-white :p-2
  [:.grid :gap-px
   {:display               :grid
    :grid-template-columns "repeat(7,1fr)"}
   :.content {:max-width "32rem"
              :margin    :auto}]
  ([m]
   (let [{:keys [from to result]} m]
     [:div.grid
      (for [e (reverse (range 1 (t/int (t/day-of-week from))))]
        [past-day (t/<< from (t/new-period e :days))])

      (for [e (range 60)]
        (let [date (t/>> from (t/new-period e :days))]
          [day {:freq (get result (str (t/date date)))
                :a    date}]))])))

(o/defstyled date-list :div
  [:.all :bg-bleu-100 :space-y-px]
  [:.listitem :bg-bleu-400 :text-white
   [:&:hover :bg-white :text-black]]
  [:.grid :p-2 {:display               "grid"
                :grid-template-columns "1fr min-content"
                :align-items           :center
                :grid-auto-rows        "2rem"}]
  ([data]
   [:div.all (for [[date freq] data]
               [:div.listitem.grid
                [:div date]
                [:div freq]])]))

(o/defstyled user-list :div
  :py-px :select-none :bg-gray-200
  [:.all :bg-white :space-y-px]
  [:.listitem :bg-pink-500 :text-black :h-12 {:display :grid
                                              :place-items :center}
   [:&:hover :bg-pink-500-80 :text-black]]
  [:.clamp :px-2 {"-webkit-box-orient" "vertical"
                  "-webkit-line-clamp" 2
                  :overflow :hidden
                  :line-clamp 2
                  :display     "-webkit-box"}]
  [:.grid :gap-px {:display               "grid"
                   :grid-template-columns "repeat(auto-fill,minmax(10rem,1fr))"
                   :align-items           :center
                   :grid-auto-rows        "auto"}]
  ([data]
   [:div.grid
    (for [uid data]
      [:div.listitem>div.clamp uid])]))


(o/defstyled not-found :div
  ([r]
   [:div "not found"]))

(o/defstyled listitem :a
  :flex :flex-col
  [:& :justify-center :h-16 :bg-gray-100
   [:&:hover :bg-gray-200]

   [:>.owner  :justify-center :h-16 :bg-blue-300 :p-4
    [:.small :text-xs :text-blue-600]
    [:&:hover :bg-blue-400]]

   [:.listitem :px-4 :space-y-1 :text-base {}
    [:.small :text-xs :text-gray-400]]]
  ([{:keys [owner?]} description link date uid]
   [:a {:class (if owner? :owner :listitem)
        :href  link}
    [:div description]
    [:div.small (str date)]]))


(o/defstyled front :div
  :space-y-px
  ([r]
   (let [active-user (:uid @(rf/subscribe [::db/user-auth]))
         path ["root"]
         data (some-> (db/on-value-reaction {:path path}) deref)]
     [:<>
      ;[sc/markdown (schpaa.markdown/md->html (inline "./intro.md"))]
      (for [[k {:keys [date description uid]}] data]
        [listitem {:owner? (= uid active-user)}
         description
         (kee-frame.core/path-for [:r.topic {:id k}])
         (t/date (t/instant date))
         uid])])))


;(comment
;  #_(let [a (-> r :path-params :id)
;          active-item (if (keyword? a) (name a) a)
;          data @(db/on-value-reaction {:path ["root" active-item]})
;          result (into {} (take 5 (sort-by second > (reduce (fn [a [k v]] (assoc a (name k) (count v))) {} data))))]
;      [:div
;       [:div "WHY IS THIS USEFUL NOW?"]
;       #_#_[calendar
;            {:result result
;             :from   (t/now)
;             :to     (t/>> (t/now) (t/new-period 60 :days))
;             [date-list (sort-by second > (sort-by first < result))
;             #_[sc/centered-button #(db/database-push {:path ["root"] :value {:item "ugh"}}) false :circle-plus]]}]]))

(defn topic [r]
  ;todo what about nonexistent topics?
  (let [active-item (-> r :path-params :id)
        active-item (if (keyword? active-item) (name active-item) active-item)]
    [:<>
     ;[l/ppre (get @(db/on-value-reaction {:path ["root" active-item]}) :slots)]
     (if-let [data @(db/on-value-reaction {:path ["root" active-item]})]
       (let [result (into {} (take 5 (sort-by second > (reduce (fn [a [k v]] (assoc a (name k) (count v))) {} (get data :slots)))))]
         [:div
          [calendar
           {:result result
            :from   (t/now)
            :to     (t/>> (t/now) (t/new-period 60 :days))}]
          [date-list (sort-by second > (sort-by first < result))]
          #_[sc/centered-button #(db/database-push {:path ["root"] :value {:item "ugh"}}) false :circle-plus]])
       [:div "nope " active-item])
     (let [users @(db/on-value-reaction {:path ["jegkan-users"]})
           data (into #{} (reduce (fn [a e] (flatten (conj a (keys (val e))))) [] @(db/on-value-reaction {:path ["root" active-item "slots"]})))]
       [user-list (map (fn [e] (let [u (get users e)] (cond (:anonymous u) (:alias u "?") :else (:display-name u "?")))) data)])]))

; (let [{:keys [bg fg- fg+ hd p p- he]} (st/fbg' 0)
;        user-auth (rf/subscribe [::db/user-auth])]
;
;    (if @user-auth
;      [:div
;       [render-front-tabbar (:uid @user-auth)]
;
;       [k/case-route (comp :name :data)
;        :r.booking-blog
;        #_[eykt.content.rapport-side/rapport-side {:source-path [" booking-posts " " articles "]}]
;        [err-boundary
;         [content.booking-blog/booking-blog
;          {:fsm {}
;           :uid (:uid @user-auth)
;           :path [" booking-posts " " articles "]}]]
;
;        ;:r.blog
;        ;[(get-in schpaa.components.sidebar/tabs-data [:bar-chart :content-fn])]
;
;        :r.new-booking
;        (if-not @user-auth
;          [views/rounded-view {}
;           [:div.p-4.space-y-4
;            [:h2 " Er du ny her? "]
;            [:a {:href (k/path-for [:r.user])} " Logg inn først "]]]
;          [content.new-booking/new-booking @user-auth])
;
;        :r.forsiden
;        [content.overview/overview]]]
;
;      [welcome])))

(def route-table
  {:r.topic     topic
   :r.forsiden  front
   :r.not-found not-found})
