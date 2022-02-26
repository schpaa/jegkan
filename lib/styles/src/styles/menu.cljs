(ns styles.menu
  (:require [lambdaisland.ornament :as o]
            ["@heroicons/react/solid" :as solid]
            ["@heroicons/react/outline" :as outline]
            [headlessui-reagent.core :as ui]
            [styles.core :as sc]))

;region menu

(o/defstyled menu-item :div
             [:&:focus :outline-none]
             {:background "var(--surface2)"
              :color      "var(--text1)"}
             [:.icon-color {:color "var(--text1)"}]
             [:button.active-color {:background-color "var(--surface3)"}]
             ([icon label action]
              [:<> [ui/menu-item
                    (fn [{:keys [active]}]
                      [:button {:on-click #(action)
                                :class (into [:group :flex :rounded-md :items-center :w-full :px-2 :py-2 :text-sm]
                                             (if active [:active-color] [:xtext-gray-900]))}
                       [:> icon
                        {:class       [:h-5 :w-5 :mr-2 (if active :text-violet-100 :icon-color)]
                         :aria-hidden true}]
                       label])]]))

(o/defstyled menu-items :div
             [:& :absolute  :right-0 :overflow-visible :w-56 :mt-2
              :rounded-md :shadow-lg :ring-1 :ring-black :ring-opacity-5 :focus:outline-none]
             {:background "var(--surface2)"
              :color      "var(--text1)"}
             ([attr & c]
              [:<> [ui/menu-items attr c]]))

(defn menu-example []
  #_[:div.relativex.absolute.overflow-visible "START"
     [:div.bg-white.h-64.w-64.absolute.overflow-visible [:div "content"]]]
  [:div.relative.overflow-visible {:style {:z-index 21000}} ;.w-56.h-72.text-left.-debug
   [ui/menu {:as :div.relative.inline-block.text-left.overflow-visible}
    [ui/menu-button {:as :div :class [:w-32]}
     (fn [{:keys [open]}]
       [sc/button
        {:class [:w-full]}
        #_[:> solid/ChevronDownIcon
           {:class       "w-5 h-5 mr-2 -ml-1 text-green-200 hover:text-violet-100"
            :aria-hidden true}]
        (if open "Close" "Open")])]
    [ui/transition
     {;:show true
      :enter      "transition ease-out duration-100"
      :enter-from "opacity-0 scale-95"
      :enter-to   "opacity-100 scale-100"
      :leave      "transition ease-in duration-75"
      :leave-from "opacity-100 scale-100"
      :leave-to   "opacity-0 scale-95"}
     [menu-items                             
      [:div.p-1
       [menu-item solid/ClockIcon "Book nå"]
       [menu-item solid/PencilIcon "Rediger"]
       [menu-item solid/DuplicateIcon "Dupliser"]]
      [:div.p-1
       {:style {:background         "var(--surface2)"
                :color              "var(--text2)"
                :border-color       "var(--surface3)"
                :border-width       "1px"
                :border-right-width "0px"
                :border-left-width  "0px"}}
       [menu-item solid/ArchiveIcon "Arkiv"]
       [menu-item solid/DownloadIcon "Avbryt"]]
      [:div.p-1
       [menu-item solid/TrashIcon "Slett"]]]]]])

(defn menu-example-with-args [menu-data]

  [:div.relative.xoverflow-visible  
   [ui/menu {:as :div.relative.inline-block.text-left.overflow-visible}
    [ui/menu-button {:as :div :class []}
     (fn [{:keys [open]}]
       [sc/button
        {:class [:w-32]}
        ;(if open "Close" "Open")
        [:div [:> solid/PencilAltIcon {:class       [:h-5 :w-5 :mr-2 :icon-color]
                                       :aria-hidden true}]]])]
    [ui/transition
     {;:show false
      :enter      "transition ease-out duration-100"
      :enter-from "opacity-0 scale-95"
      :enter-to   "opacity-100 scale-100"
      :leave      "transition ease-in duration-75"
      :leave-from "opacity-100 scale-100"
      :leave-to   "opacity-0 scale-95"}
     [menu-items
      [:div.p-1
       (for [e menu-data]
         (if-let [[icon caption action] e]
           [menu-item icon caption action]
           [:hr {:style {:background         "var(--surface2)"
                         :color              "var(--text2)"
                         :border-top         "1px solid var(--surface3)"
                         :border-right-width "0px"
                         :border-left-width  "0px"}}]))]]]]])



      

