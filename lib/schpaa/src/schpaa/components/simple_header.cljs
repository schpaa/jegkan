(ns schpaa.components.simple-header
  (:require [re-frame.core :as rf]
            [kee-frame.core]
            [reagent.core :as r]
            [schpaa.state :as state]
            [schpaa.style :as s]
            [schpaa.icon :as icon]
            [schpaa.components.views :as views]
            [schpaa.style :as st]
            [schpaa.debug :as l]
            [styles.core :as sc :refer [centered-button]]
            [lambdaisland.ornament :as o]
            [db.core :as db]
            [tick.core :as t]))

(def header-id :header)

(defn icon-switch [menu-direction {:as icon-a} {:as icon-b}]
  [:div.relative.text-white.p-4
   [:div
    {:class (concat (:class icon-a))}
    [icon/touch (:icon icon-a)]]])

(defn left-icon [{:keys [user-auth navigate-to-user navigate-to-home current-page]}]
  (let [{:keys [bg- fg br]} (st/fbg' :master-header)
        frontpage? (or
                     (some #{(current-page)} [:r.new-booking :r.forsiden :r.booking-blog])
                     (some #{(current-page)} [:r.forsiden :r.kalender :r.annet]))]
    (if frontpage?
      [:div.flex.flex.flex-center
       {:on-click #(navigate-to-user)
        :class    (concat [:rounded-md :hover:bg-gray-200 :m-2]
                          br fg bg-)}
       [:div.relative
        [:div {:on-click #(navigate-to-user)}
         [icon/touch :circle-user]]
        (when-not (user-auth)
          [:div.absolute.inset-0.animate-slow-ping.text-alt
           {:on-click #(navigate-to-user)}
           [icon/touch :circle-filled]])]]

      [:div.flex.flex.flex-center
       {:on-click #(navigate-to-home)
        :class    (concat [:rounded-md :hover:bg-gray-200 :m-2]
                          br fg bg-)}
       [:div
        {:on-click #(navigate-to-home)}
        [icon/touch :house]]])))

(defn right-icon [{:keys [menu-direction get-menuopen-fn toggle-menu-open]}]
  (let [{:keys [bg- fg br]} (st/fbg' :master-header)]
    (when-not (get-menuopen-fn))
    [:div.w-16.h-16.flex.flex.flex-center
     {:class    (concat
                  [:rounded-md

                   :xgroup-hover:border-2
                   :m-2]
                  br bg- fg)
      :on-click #(do
                   (.stopPropagation %)
                   (toggle-menu-open))}
     (let [icon (-> @(rf/subscribe [:schpaa.components.widgets/get-tab]) st/color-map :icon)]
       [icon/touch (if (get-menuopen-fn)
                     nil
                     (or (keyword icon) :hamburger))])]))

(defn home-icon [current-page]
  (let [icon (if (or
                   (some #{(current-page)} [:r.new-booking :r.forsiden :r.booking-blog])
                   (some #{(current-page)} [:r.forsiden :r.kalender :r.annet]))
               :house
               :circle-user)]
    [:div {:class [:w-8 :h-8 :text-alt]} [icon/adapt icon 1.4]]))

(rf/reg-sub :app/name :-> :app/name)

(defn title [{:keys [current-page menu-direction current-page-title current-page-subtitle user-auth] :as m}]
  (let [{:keys [fg- fg fg+ p+ p- p]} (st/fbg' :master-header)
        sub-text (if (user-auth) (:display-name (user-auth)) "Registrer deg / Logg inn")
        app-name @(rf/subscribe [:app/name])
        title (current-page-title)
        [long-form short-form] (if (vector? title) title [title nil])
        sub-header (if (user-auth) (current-page-subtitle) "Velkommen")]
    [:div.flex.flex-center "header"]
    #_(if menu-direction
        [:div.flex.items-center.antialiased
         {:class [:justify-start :text-lg :antialiased :leading-snug :font-bold]}
         [:div.leading-none.whitespace-nowrap
          {:class (concat [:text-left] fg p-)}
          [:div.py-0.flex.items-center.divide-dotted.divide-x-2.divide-gray-400
           {:class (concat fg p+ [:leading-5])}
           [:span.pr-2 (home-icon current-page)]
           [:span.pl-2 sub-header " · " app-name]]
          [:div.leading-5 {:class (concat fg+ p-)} sub-text]]]

        [:div.flex.items-center.antialiased
         {:class [:justify-end :text-lg :antialiased :leading-snug :font-bold]}
         [:div.leading-none.whitespace-nowrap
          {:class (concat [:text-right] fg p-)}
          [:div.py-0.flex.items-center.divide-dotted.divide-x-2.divide-gray-400
           {:class (concat fg p+ [:leading-5])}
           [:span.pr-2 app-name " · " sub-header]
           [:span.pl-2 (home-icon current-page)]]
          [:div.leading-5 {:class (concat fg+ p-)} sub-text]]])))

#_(defn render [{:keys [menu-direction] :as m}]
    (let [{:keys [bg fg- fg fg+ hd p p- he]} (st/fbg' :master-header)]
      [:div.grid.w-full.group
       {:class bg
        :style {:grid-template-columns (if menu-direction "4rem 1fr 4rem" "4rem 1fr 4rem")
                :grid-auto-rows        "4rem"}}
       (into [:<>]
             (cond-> [[right-icon m]
                      [:div.self-center [title m]]
                      [left-icon m]]
               menu-direction reverse))]))

(o/defstyled icon :div
  :w-16 :h-16 :flex :justify-center :items-center           ;:text-white ;:dark:text-red-500
  ([i on-click]
   [:div {:on-click #(on-click)
          :class    [:w-8 :h-8 :text-blue-500]} [schpaa.icon/adapt i]]))

(o/defstyled centered :p
  {:display     :flex
   :align-items :center}
  ([arg]
   [:div arg]))

(o/defstyled header :div
  ;:w-full :h-16
  :sticky :top-0
  :z-10
  :bg-white
  
  {;:z-order         500
   :display         :flex
   :width           "100%"
   :justify-content :space-between}
  ([i1 title i2]
   [:<>
    i1
    [centered title]
    i2]))

(rf/reg-sub :app/id :<- [:kee-frame/route] (fn [r _]
                                             (-> r :path-params :id)))

#_(rf/reg-sub :app/title
              (fn []
                (let [a (rf/subscribe [:app/id])
                      b @(db/on-value-reaction {:path ["topics" "arne" a]})]
                  [a b]))

              #_(fn [i]
                  (tap> {:i i})
                  i
                  #_[(db/on-value-reaction {:path ["topics" "arne" (name i)]})])
              (fn [r _]
                (tap> {:r r})
                (l/ppre r ) #_(-> r :path-params :id)))

(o/defstyled title' :div
  :space-y-1
  :flex :flex-col
  sc/inter
  [:.description :text-center]
  [:.small :text-xs :text-gray-400]
  ([description]
   [:div.description description])
  ([description uid date]
   [:<>
    [:div.description description]
    [:div.small (str date) " --> " uid]]))

(defn render [{:keys [menu-direction] :as m}]
  (let [i @(rf/subscribe [:app/id])
        i (if (keyword? i) (name i) i)
        d (db/on-value-reaction {:path ["root" i]})
        front-page? (some-> (rf/subscribe [:kee-frame/route]) deref :data :name ((partial = :r.forsiden)))]
    [header
     (if ((:get-menuopen-fn m))
       [:div]
       [sc/centered-button {:on-click (:toggle-menu-open m)} false :hamburger])

     (if front-page?
       [title' "Forsiden"]
       (let [{:keys [description uid date]} @d]
         [title' description uid (some-> date t/instant t/date str)]))
     [sc/centered-button''
      {:on-click #(rf/dispatch [:app/navigate-to [:r.forsiden]])}
      front-page?
      :house]]))

(comment
  (do
    (o/as-garden)))