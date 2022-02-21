(ns styles.core
  (:require [lambdaisland.ornament :as o]
            [schpaa.icon :as icon]
            ["react-qr-code" :default QRCode]
            [re-frame.core :as rf]
            [tick.core :as t]))

(declare toolbutton toolbutton')

(o/defstyled outlined :div
  {:outline "4px solid var(--red-5)"})

(declare small-icon)

(o/defstyled centered-button :div
  :h-16 :w-16  :text-black
  [:.selected :bg-gray-400]
  [:&  :flex :items-center :justify-center
   [:&:hover  {:background-color "red"}]
   [:.icon :w-8 :h-8]]
  #_[:.butt :w-full :h-full  {:display         :grid
                              :justify-content :center
                              :align-content   :center}

     [:&:hover :bg-blue-500 :text-white]]
  ([{:keys [on-click]} selected? icon]
   [:div.icon {:on-click #(on-click)
               :class    [(when selected? :selected) :buttx]}
    [small-icon icon]]))

(o/defstyled centered-button' :div
  :h-16 :w-16 :text-black
  [:.selected :p-4 :xtext-gray-900 :xbg-gray-300]
  [:.butt :p-4 :w-full :h-full {:display         :grid
                                :justify-content :center
                                :align-content   :center}

   [:&:hover :bg-black :text-white]]
  ([{:keys [on-click]} selected? icon]
   (let []
     [:div {:on-click #(on-click)
            :class    [(if selected? :selected :butt)]} (icon/touch icon)])))

(o/defstyled centered-button'' :div
  :h-16 :w-16 :text-white :bg-green-500
  [:.selected :p-4 :bg-gray-100 :text-green-500]
  [:.butt :p-4 :w-full :h-full {:display         :grid
                                :justify-content :center
                                :align-content   :center}

   [:&:hover :bg-green-500 :text-white]]
  ([{:keys [on-click]} selected? icon]
   (let []
     [:div {:on-click #(on-click)
            :class    [(if selected? :selected :butt)]} (icon/touch icon)])))

(o/defstyled small-icon :div
  :h-6 :w-6
  ([icon]
   (icon/adapt icon)))

(o/defstyled inter :div
  {:font-family           "Inter"
   :font-feature-settings "'cv10', 'salt', 'zero', 'tnum'"})

(o/defstyled instruction :p
  [:& inter]
  {:background-color "var(--yellow-1)"
   :min-height       :5rem
   :display          :flex
   :padding          :0.5rem
   :align-items      :center
   ;:font-weight 400
   :font-weight      "var(--font-weight-4)"
   :line-height      "var(--font-lineheight)"
   :font-size        "var(--font-size-2)"})

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
  :shadow-sm
  [:&
   {:min-width      "7rem"
    :padding-inline "var(--size-5)"
    :padding-block  "var(--size-3)"
    :border-radius  "var(--radius-blob-2)"
    :background     "var(--gray-3)"
    :color          "var(--gray-9)"
    :font-size      "var(--font-size-1)"
    :font-weight    "var(--font-weight-5)"}
   [:&:disabled :opacity-50]
   [:&:hover
    {:background "var(--gray-4)"}]])

(o/defstyled row :div
  :flex :justify-between {:width "100%"})

(o/defstyled row' :div
  :gap-1 :flex :justify-start {:width "100%"})

(o/defstyled field :div
  :bg-yellow-50 :flex :items-center :px-4 :rounded
  {:min-height "3rem"
   :box-shadow "var(--inner-shadow-2)"})

(o/defstyled image :div
  :bg-gray-100 :inline-flex :rounded :w-full

  [:img {:aspect-ratio "1 / 1"
         :object-fit   :cover
         ;:overflow     :hidden
         :xmin-height  "3rem"}]
  ([img]
   [:<>
    [:img {:src img}]]))

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
  ([{:keys [placeholder disabled value on-blur] :as opts} value']
   [:input
    {:type        "text"
     :disabled    disabled
     :placeholder placeholder
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
  :flex :flex-col :rounded :space-y-1 :w-full :items-end)

(o/defstyled col2 :div
  :flex :flex-col :rounded :space-y-4 :w-full
  ([& xs]
   [:<> xs]))

(o/defstyled small :div
  :text-xs :text-black-50)

(o/defstyled padded-red :div
  :p-2
  [:.content :space-y-2 :p-2 outlined :rounded {:overflow-x :hidden
                                                :overflow-y :hidden}]
  ([& content]
   [:div.content content]))

(o/defstyled padded :div
  [:& :p-2 :space-y-2 :rounded {:overflow-x :hidden}]
  ([& contents]
   [:<> contents]))

(o/defstyled qr-code :div
  :space-y-4 :flex :justify-center :flex-col :items-center
  :border-2 :border-gray-500 :p-4 :rounded-sm
  [:>a :w-full :px-4 {:overflow      :hidden
                      :text-overflow :ellipsis
                      :white-space   :nowrap}]
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

(o/defstyled fronticon :div
  [:.front-icon :flex :shrink-1 :items-center :h-full {:padding-inline   "var(--size-2)"
                                                       :background-color "var(--gray-3)"}
   [:&:hover {:background-color "var(--gray-5)"}]]
  ([icon {:keys [on-click] :as m}]
   [:div.front-icon
    {:on-click #(do
                  (on-click)
                  (.stopPropagation %))}
    [small-icon icon]]))

(o/defstyled listitem-content :div
  :select-none
  [:.padding :w-full {:padding-block  "var(--size-2)"
                      :padding-inline "var(--size-2)"}]
  [:& inter {:display        :flex
             :line-height    "var(--font-lineheight-3)"
             :flex-direction :column}]
  [:.selected {:background-color "var(--green-5)"}
   [:.top {:font-weight 600
           :color       "white"}]
   [:.bottom {:font-size "var(--font-size-0)"
              :color     "var(--green-1)"}]]
  [:.normal {:background-color "var(--gray-1)"}
   [:.bottom {:font-size "var(--font-size-0)"
              :color     "var(--gray-6)"}]
   [:&:hover {:background-color "var(--gray-3)"}]]
  ([top bottom {:keys [active? on-click with-before with-after] :as m}]
   [:div
    {:on-click on-click
     :class    (if active? :selected :normal)}
    [row'
     (when with-before with-before)
     [:div.padding [col
                    [:div.top top]
                    [:div.bottom bottom]]]
     (when with-after with-after)]]))

(o/defstyled list-list :div
  :space-y-px :bg-white
  [:&]
  [:.grid :p-2 :gap-x-4 {:display               "grid"
                         :grid-template-columns "1fr min-content"
                         :grid-auto-rows        "auto"
                         :align-items           :center}]
  [:.active :bg-green-500]
  [:.small {:font-size "var(--font-size-0)"}]
  ([active-item data]
   (into [:<>]
         (for [[k {:keys [description date]} :as e] data
               :let [k (if (keyword? k) (name k) k)
                     date (some-> date t/instant t/date str)]]
           [listitem-content description date
            {:with-before [fronticon :three-vertical-dots {:on-click #(js/alert "show more in a popup!")}]
             ;:with-after  [fronticon :circle {:on-click #(js/alert "hum")}]
             :on-click    #(rf/dispatch [:app/navigate-to [:r.topic {:id k}]])
             :active?     (= k active-item)}]))))


(o/defstyled toolbutton :div
  [:& :m-2
   [:&:hover {:border-radius  "var(--radius-blob-2)"
              :background     "var(--green-5)"}]
   [:.selected  {:border-radius  "var(--radius-blob-2)"
                 :background     "var(--gray-3)"}]
   [:.icon :p-2]]
  {:aspect-ratio "1 / 1"}
  ([color-map selected-tab-id on-click tab-id]
   (let [[selected' normal icon] ((juxt :selected :normal :icon) (get color-map tab-id))
         selected? (= tab-id selected-tab-id)]
     [:div
      ;{:class (flatten ((juxt :fg :bg) (if (= tab-id selected-tab-id) selected' normal)))}
      (let [selected? (= tab-id selected-tab-id)]
        [:div.icon {:on-click #(on-click tab-id)
                    :class (if selected? :selected)} (icon/touch icon)]
        #_[sc/centered-button' {:on-click #(on-click tab-id)} selected? icon])])))


(o/defstyled toolbutton' :div
  [:& :h-16 :text-black :w-16
   [:&:hover {;:border-radius  "var(--radius-blob-3)"
              :background     "var(--green-5)"}]
   [:.selected  {;:border-radius  "var(--radius-blob-3)"
                 :background     "var(--gray-3)"}]
   [:.icon :p-3]]
  {:aspect-ratio "1 / 1"}
  ([icon {:keys [on-click selected? item]}]
   [:div.icon {:on-click #(on-click item)
               :class    (if selected? :selected)} (icon/touch icon)]))