(ns styles.core
  (:require [lambdaisland.ornament :as o]
            [schpaa.icon :as icon]
            ["react-qr-code" :default QRCode]
            [re-frame.core :as rf]
            [tick.core :as t]
            [styles.utils :refer [grid5]]))

(declare toolbutton toolbutton')

(o/defstyled outlined :div
  {:outline "4px solid var(--red-5)"})

(declare small-icon)

(o/defstyled centered-button :div
  :h-16 :w-16 :text-black
  [:.selected :bg-gray-400]
  [:& :flex :items-center :justify-center
   [:&:hover {:background-color "red"}]
   [:.icon :w-8 :h-8]]
  #_[:.butt :w-full :h-full {:display         :grid
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
  {:color          "var(--text1)"
   :font-size      :200%
   :font-weight    200
   :font-family    "Inter"
   :letter-spacing :0.025rem
   :line-height    1.625})

(o/defstyled h2 :h2
  ;:mt-2
  {:color          "var(--text2)"
   :font-size      :125%
   :font-weight    700
   :font-family    "Inter"
   :letter-spacing :0.025rem
   :line-height    1.5})

(o/defstyled h3 :h3
  :mt-4
  {:color          "var(--text1)"
   :font-size      :100%
   :font-weight    800
   :font-family    "Inter"
   :letter-spacing :0.05rem
   :line-height    1.25})

(o/defstyled p :p
  :mb-2
  {:font-size      :100%
   :font-family    "Inter"
   :letter-spacing 0
   :line-height    1.5
   :color          "var(--text2)"})

(o/defstyled markdown :div
  :p-4 :mx-auto
  {:max-width "32rem"}
  [:h1 h1]
  [:h2 h2]
  [:h3 h3]
  [:p p]
  ([content]
   [:div content]))

(o/defstyled small-base-button :button
  :shadow-sm :focus:outline-none :button
  [:&
   {:display         :flex
    :justify-content :center
    :align-items     :center
    ;:flex            "1 1 0px"
    ;:min-width       "6rem"
    ;:min-height          "3rem"
    :font-size       "var(--font-size-1)"
    :font-weight     "var(--font-weight-5)"
    :padding-inline  "var(--size-3)"
    :padding-block   "var(--size-3)"
    :border-radius   "var(--radius-1)"}
   [:&:disabled :opacity-25]])

(o/defstyled base-button :button
  :shadow-sm :focus:outline-none :outline-none
  [:&
   {:display         :flex
    :justify-content :center
    :align-items     :center
    ;:flex            "1 1 0px"
    ;:min-width       "6rem"
    ;:min-height      "3rem"
    :font-size       "var(--font-size-1)"
    :font-weight     "var(--font-weight-5)"
    :padding-inline  "var(--size-3)"
    :padding-block   "var(--size-3)"
    :border-radius   "var(--radius-1)"}
   [:&:disabled :opacity-25]])

(o/defstyled base-buttonsquare :button
  [:&
   {:display         :flex
    :justify-content :center
    :align-items     :center
    :font-size       "var(--font-size-1)"
    :font-weight     "var(--font-weight-5)"
    ;:aspect-ratio    "1/1"                 
    :padding-inline  "var(--size-3)"
    :padding-block   "var(--size-3)"
    :border-radius   "var(--radius-1)"}
   [:&:disabled :opacity-25]                                                                    
   [:&:focus {
              :outline "none" #_"4px #00F2 solid"}]])

(o/defstyled base-tabsquare :button
  [:& :rounded-t-xl
   {:display         :flex
    :justify-content :center
    :align-items     :center
    :font-size       "var(--font-size-1)"
    :font-weight     "var(--font-weight-5)"
    ;:aspect-ratio    "1/1"
    :padding-inline  "var(--size-3)"
    :padding-block   "var(--size-3)"
    #_#_:border-radius   "var(--radius-1)"}
   [:&:disabled :opacity-25]
   [:&:hover {}]
   [:&:focus {:outline :none
              :box-shadow "var(--tw-ring-inset) 0 0 0 calc(4px + var(--tw-ring-offset-width)) var(--tw-ring-color);"}]])

(o/defstyled tabsquare :button
  :tab
  base-tabsquare)

(o/defstyled buttonsquare :button
  :button
  base-buttonsquare)

(o/defstyled buttonsquare-cta :button
  :button-cta
  base-buttonsquare)

(o/defstyled button-cta :button
  :button-cta
  base-button)

(o/defstyled button-danger :button
  :button-danger
  base-button)

(o/defstyled button :button
  :button  :outline-none :focus:outline-none
  base-button)

#_(o/defstyled button-danger :button
    :shadow-sm :focus:outline-none
    [:&
     {:min-width      "7rem"
      :padding-inline "var(--size-5)"
      :padding-block  "var(--size-3)"
      ;:border-radius  "var(--radius-blob-2)"
      :background     "var(--red-6)"
      :color          "var(--red-1)"
      :font-size      "var(--font-size-1)"
      :font-weight    "var(--font-weight-5)"}
     [:&:disabled :opacity-50]
     [:&:hover
      {:background "var(--surface2)"}]])

(o/defstyled row :div
  :flex :justify-between {:width "100%"})

(o/defstyled row-eq :div
  :flex :justify-between :flex-grow :gap-2 {:width "100%"})

(o/defstyled row' :div
  :flex :gap-1  :justify-start  {:width "100%"})

(o/defstyled row-end :div
  :gap-1 :flex :justify-end {:width "100%"})

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
  :w-full :h-fullx
  [:input :bg-gray-100 :h-12 :px-2 :rounded-sm :border-2 :border-gray-200
   {:width "100%"}
   [:&:focus {:outline "2px solid rgba(0,0,0,0.5)"}]
   [:&:disabled :opacity-50]]
  [:>.label {:font-size "var(--font-size-3)"
             :color "var(--text1)"} :py-1]
  ([value]
   (textinput {} value))
  ([{:keys [label placeholder disabled value on-blur] :as opts} value']
   [:div
    [:div.label label]
    [:input
     {:type        "text"
      :disabled    disabled
      :placeholder placeholder
      :value       value
      :on-change   #(reset! value' (-> % .-target .-value))
      :on-blur     #(some-> % .-target .-value on-blur)}]]))


(o/defstyled flexed :div
  :flex :gap-4 :h-12 :items-stretch {:width :100%}
  ([& xs]
   [:<> xs]))

(o/defstyled col :div
  :flex :flex-col :rounded :space-y-1 :w-full)

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
  #_([& contents]
     [:<> contents]))

(o/defstyled padded' :div
  [:& :p-2 :space-y-2 {:overflow-x :hidden}])

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
  :flex :items-center :h-auto :button
  {:padding-inline "var(--size-1)"})

(o/defstyled listitem-content :div
  :select-none :bg-white
  [:.padding :w-full {:padding-block  "var(--size-2)"
                      :padding-inline "var(--size-2)"}]
  [:& inter {:display        :flex
             :line-height    "var(--font-lineheight-3)"
             :flex-direction :column}]

  [:.selected {:background-color "var(--surface1)"}
   [:.top {:font-weight 600
           :color       "var(--text1)"}]
   [:.bottom {:font-size "var(--font-size-0)"
              :color     "var(--text2)"}]]

  [:.normal {:background-color "var(--surface1)"} 
   [:.top {:color "var(--text1)"
           :line-height "var(--font-lineheight-2)"}]
   [:.bottom {:font-size "var(--font-size-0)"
              :color     "var(--text2)"}]
   [:&:hover {:background-color "var(--surface1)"
              :color            "var(--text1)"}]]

  ([top bottom {:keys [active? on-click with-before with-after] :as m}]
   [:div
    {:on-click on-click
     :class    (if active? :selected :normal)}
    [:div {:style {:display :grid
                   :column-gap "1px"
                   :grid-template-columns "min-content 1fr min-content"
                   :background "var(--surface2)"}}
     (if with-before with-before [:div])
     [padded' {:style {:background "var(--surface3)"}} [col
                                                        [:div.top top]
                                                        [:div.bottom bottom]]]
     (if with-after with-after [:div])]]))

(o/defstyled list-list :div
  :space-y-px
  [:&]
  [:.grid :p-2 :gap-x-4 {:display               "grid"
                         :grid-template-columns "1fr min-content"
                         :grid-auto-rows        "auto"
                         :align-items           :center}]
  [:.active :bg-green-500]
  [:.small {:font-size "var(--font-size-0)"}]
  ([active-item data {:keys [three-dot-click]}]
   (into [:<>]
         (for [[k {:keys [description date]} :as e] data
               :let [k (if (keyword? k) (name k) k)
                     date (some-> date t/instant t/date str)]]
           [listitem-content description date
            {:with-before [fronticon {:on-click #(do
                                                   (three-dot-click k)
                                                   (.stopPropagation %))}
                           [small-icon :three-vertical-dots]]
             :on-click    #(rf/dispatch [:app/navigate-to [:r.topic {:id k}]])
             :active?     (= k active-item)}]))))

(o/defstyled toolbutton :div
  [:& :m-2
   [:&:hover {:border-radius "var(--radius-blob-2)"
              :background    "var(--green-5)"}]
   [:.selected {:border-radius "var(--radius-blob-2)"
                :background    "var(--gray-3)"}]
   [:.icon :p-2]]
  {:aspect-ratio "1 / 1"}
  ([color-map selected-tab-id on-click tab-id]
   (let [[selected' normal icon] ((juxt :selected :normal :icon) (get color-map tab-id))
         selected? (= tab-id selected-tab-id)]
     [:div
      ;{:class (flatten ((juxt :fg :bg) (if (= tab-id selected-tab-id) selected' normal)))}
      (let [selected? (= tab-id selected-tab-id)]
        [:div.icon {:on-click #(on-click tab-id)
                    :class    (if selected? :selected)} (icon/touch icon)]
        #_[sc/centered-button' {:on-click #(on-click tab-id)} selected? icon])])))

(o/defstyled toolbutton' :div
  ;{:color "var(--text1)"}
  [:& :h-16 :w-full
   [:&:hover {:background "var(--surface2)"}]
   [:.selected {:background-color "var(--surface2)"
                :color            "var(--text1)"}]
   [:.dim {:background-color "var(--surface2)"
           :color            "var(--text2)"}]
   [:.pro :flex :items-center :justify-center :h-16         ;:w-16
    [:.icon :w-8 :h-8
     [:.center :flex :items-center :justify-center]]]]
  ([icon {:keys [on-click selected? item dim?]}]
   [:div.pro {:on-click #(on-click item)
              :class    [(if selected? :selected) (if dim? :dim)]}
    [:div.icon (icon/touch icon)]]))

(o/defstyled toolbar :div
  [:& grid5 {:grid-gap              "0px"}]
  :h-16 :sticky :top-0 :w-full :pt-1
  {:display          :flex
   :background-color "var(--surface3)"}
  ([tab-list m]
   (let [{:keys [color-map get-selected-tab set-selected-tab toggle-menu-open]} m]
     (into [:<>] (concat              
                   [[tabsquare {:style {:background "none"}
                                :on-click #(toggle-menu-open)} [small-icon :cross-out]]]
                   (->> tab-list
                        (map (fn [e] [tabsquare
                                      {:item      e
                                       :on-click  #(do
                                                     ;(tap> [e set-selected-tab (get-selected-tab)])
                                                     (when set-selected-tab
                                                       (set-selected-tab e)))                       
                                       :style     (if (= e (get-selected-tab))
                                                    {:background "var(--surface2)"
                                                     :color "var(--brand)"} {:background "none"})
                                       :selected? (= e (get-selected-tab))}
                                      [small-icon (:icon (get color-map e))]]))))))

   #_[:<>
      [buttonsquare [small-icon :cross-out]]
      [buttonsquare [small-icon :command]]
      [buttonsquare [small-icon :compass]]
      [buttonsquare [small-icon :cloud]]
      [buttonsquare [small-icon :circle-user]]])

  #_([tab-list m]
     (let [{:keys [color-map get-selected-tab set-selected-tab toggle-menu-open]} m]
       (into [row] (concat
                     [[toolbutton' :cross-out {:dim?     true
                                               :on-click #(toggle-menu-open)}]]
                     (map (fn [e] [toolbutton' (:icon (get color-map e))
                                   {:item      e
                                    :on-click  #(do
                                                  (tap> %)
                                                  (set-selected-tab %))
                                    :selected? (= e (get-selected-tab))}]) tab-list))))))

(o/defstyled overlay-with :div
  ;{:z-index 600}
  [:.active :fixed :inset-0 :bg-black-25
   {:transition-duration "300ms"
    :opacity             100
    :pointer-events      :auto
    :z-index             500}]

  [:.inactive :fixed :inset-0 :bg-black-25
   {:transition-property "opacity, transform"
    :transition-duration "300ms"
    :opacity             0
    :pointer-events      :none
    :z-index             500}]
  #_[:>.content {:z-index 5000}]

  ([{:keys [modal? on-close] :as opts} & content]
   [:<>
    [:div {:class    (if modal? :active :inactive)
           :on-click #(do
                        (tap> :click)
                        (on-close))}]
    content]))

