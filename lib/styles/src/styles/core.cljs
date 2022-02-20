(ns styles.core
  (:require [lambdaisland.ornament :as o]
            [schpaa.icon :as icon]))


(o/defstyled outlined :div
  {:outline "4px solid rgba(255,0,0,0.8)"})

(o/defstyled centered-button :div
  :h-16 :w-16
  [:.selected :bg-gray-400]
  [:.butt :w-full :h-full :p-4 {:display         :grid
                                :justify-content :center
                                :align-content   :center
                                :color           :black}
   [:&:hover :bg-red-500 :text-white]]
  ([on-click selected? icon]
   (let []
     [:div {:on-click on-click
            :class    [(when selected? :selected) :butt]} (icon/touch icon)])))

(o/defstyled centered-button' :div
  :h-16 :w-16 :text-black
  [:.selected :p-4 :text-gray-200]
  [:.butt :p-4 :w-full :h-full {:display         :grid
                                :justify-content :center
                                :align-content   :center}

   [:&:hover :bg-red-500 :text-white]]
  ([on-click selected? icon]
   (let []
     [:div {:on-click on-click
            :class    [(if selected? :selected :butt)]} (icon/touch icon)])))

(o/defstyled small-icon :div
  :h-8 :w-8
  ([icon]
   (icon/adapt icon)))

(o/defstyled inter :div
  ;:text-white
  {:font-family           "Inter"
   :font-weight           400
   ;:font-size             "1rem"
   :font-feature-settings "'cv10', 'salt', 'zero', 'tnum'"})

(o/defstyled h1 :h1
  {:font-size      :200%
   :font-weight    200
   :font-family    "Inter"
   :letter-spacing :0.025rem
   :line-height    1.625})

(o/defstyled h2 :h2
  {:font-size      :125%
   :font-weight    700
   :font-family    "Inter"
   :letter-spacing :0.025rem
   :line-height    1.5})

(o/defstyled h3 :h3
  :mt-2
  {:font-size      :100%
   :font-weight    600
   :font-family    "Inter"
   :letter-spacing :0.025rem
   :line-height    1.25})

(o/defstyled p :p
  :text-gray-500
  :mb-2
  {:font-size      :100%
   :font-family    "Inter"
   :letter-spacing 0
   :line-height    1.5})

(o/defstyled markdown :div
  :p-4 :mx-auto
  {:max-width "32rem"}
  [:h1 h1]
  [:h2 h2]
  [:h3 h3]
  [:p p]
  ([content]
   [:div content]))

(o/defstyled button :button
  :h-12 :bg-gray-200 :shadow-sm :rounded-sm
  {:min-width "7rem"})

(o/defstyled row :div :flex :justify-between {:width "100%"})

(o/defstyled field :div
  :bg-yellow-50 :flex :items-center :px-4 :rounded
  {:min-height "3rem"
   :box-shadow "var(--inner-shadow-2)"})

(o/defstyled field' :div
  :bg-gray-100 :inline-flex :rounded :w-full
  {:aspect-ratio "1 / 1"
   :overflow     :hidden
   :min-height   "3rem"})

(o/defstyled checkbox :div
  :px-2 :h-12
  :select-none :flex :items-center :gap-4 :text-black
  [:.thumb :bg-white :transition :duration-100 :inline-block :w-6 :h-6 :ease-in-out :shadow :transform :rounded-full]
  [:.on {:transform "translateX(1.25rem)"}]
  [:.off {:transform "translateX(0)"}]
  [:.background-off :bg-gray-200]
  [:.background-on :bg-green-600]
  [:.cb :relative :h-7 :w-12 :rounded-full :xborder-2 :shrink-0 :xborder-gray-300]
  ;:focus:outline-none :focus:ring-2 :focus:ring-offset-2 :focus:ring-cyan-400

  [:button :relative :inline-flex :h-7 :w-12 :rounded-full :border-2 :transition-colors :ease-in-out :duration-100
   [:&:focus {:outline "2px solid rgba(0,0,0,0.5)"}]]
  ([st caption]
   (checkbox {} st caption))
  ([{:keys [on-change reversed] :as opts} st caption]
   (if reversed
     [:<>
      [:button.cb
       {:id       "id"
        :class    (if @st :background-on :background-off)
        :on-click #(swap! st not)}
       [:span {:class [:thumb (if @st :on :off)]}]]
      [:label {:for "id"} caption]]
     [:<>
      [:label {:for "id"} caption]
      [:button.cb
       {:id       "id"
        :class    (if @st :background-on :background-off)

        :on-click #(do
                     (swap! st not)
                     (on-change @st))}
       [:span {:class [:thumb (if @st :on :off)]}]]])))



(o/defstyled textinput :div
  :w-full
  [:input :bg-gray-100 :h-full :px-2 :rounded-sm :border-2 :border-gray-200
   {:width "100%"}
   [:&:focus {:outline "2px solid rgba(0,0,0,0.5)"}]
   [:&:disabled :opacity-50]]
  ([value]
   (textinput {} value))
  ([{:keys [disabled value on-blur] :as opts} value']
   [:input
    {:type        "text"
     :disabled disabled
     :placeholder "Alias"
     :value       value
     :on-change   #(reset! value' (-> % .-target .-value))
     :on-blur     #(some-> % .-target .-value on-blur)}]))


(o/defstyled flexed :div
  :flex :gap-4 :h-12 :items-stretch {:width :100%}
  ([& xs]
   [:<> xs]))

(o/defstyled col :div
  :flex :flex-col :rounded :space-y-2 :w-full)

(o/defstyled col-end :div
  :flex :flex-col :rounded :space-y-2 :w-full :items-end)

(o/defstyled col2 :div
  :flex :flex-col :rounded :space-y-4 :w-full
  ([& xs]
   [:<> xs]))

(o/defstyled small :div
  :text-xs :text-black-50)