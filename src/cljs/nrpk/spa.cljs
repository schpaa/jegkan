(ns nrpk.spa
  (:require [re-frame.core :as rf]
            [re-statecharts.core :as rs]
            ["body-scroll-lock" :as body-scroll-lock]
            [schpaa.modal :as modal]
            [schpaa.components.screen :as components.screen]
            [nrpk.fsm-helpers :as state :refer [send]]
            [kee-frame.router :refer [make-route-component]]
            [styles.core :as sc]
            [jegkan.sidebar]
            [schpaa.debug :as l]
            [reagent.core :as r]))

(defn- forced-scroll-lock
  [locked? target]
  (let [body (.getElementById js/document (or target "body"))]
    (if locked?
      (.disableBodyScroll body-scroll-lock body)
      (do
        (.enableBodyScroll body-scroll-lock body)
        (.clearAllBodyScrollLocks body-scroll-lock)))))

(defonce a (r/atom false))
;(js/setInterval #(swap! a not) 2000)


(defn dispatch-main [web-content]
  (let [s (rf/subscribe [::rs/state-full :main-fsm])
        expose-app-db @(schpaa.state/listen :app/expose-app-db)
        get-menuopen-fn (rf/subscribe [:app/menu-open?])]
    [:div.h-full
     (when expose-app-db
       [l/ppre-x (dissoc @re-frame.db/app-db :kee-frame/route :re-statecharts.core/fsm-state)])
     [sc/overlay-with
      {:short-timeout (:modal-short-timeout @s)             ;;todo When showing a popup with short-timeout (< 2 seconds auto-closes), just bypass the click to dismiss
       :modal-dim     (:modal-dim @s)
       :modal?        (or @a
                          (:modal @s)
                          (:modal-forced @s))
       ;When forced, a click on the  background will noe dismiss the modal
       ;the user must click on a button in the modal to dismiss it
       :on-close      (when-not (or (:modal-dirty @s)
                                    (:modal-forced @s))
                        #(send :e.hide))}
      ;;content
      [modal/render
       {:show?     (or @a (:modal @s) (:modal-forced @s))
        :config-fn (:modal-config-fn @s)}]
      [components.screen/render
       {:tabdata               jegkan.sidebar/tabs-data
        :user-auth             (fn [] @(rf/subscribe [:db.core/user-auth]))
        :current-page          (fn [] @(rf/subscribe [:app/current-page]))
        :toggle-menu-open      (fn [] (rf/dispatch [:toggle-menu-open]))
        :navigate-to-home      (fn [] (rf/dispatch [:app/navigate-to @(rf/subscribe [:app/previous :active-front :r.forsiden])]))
        :navigate-to-user      (fn [] (rf/dispatch [:app/navigate-to @(rf/subscribe [:app/previous :active-back :r.user])]))
        :current-page-title    (fn [] @(rf/subscribe [:app/current-page-title]))
        :current-page-subtitle (fn [] @(rf/subscribe [:app/current-page-subtitle]))
        :get-menuopen-fn       (fn [] @(rf/subscribe [:app/menu-open?]))
        :menu-direction        @(schpaa.state/listen :app/menu-direction) #_@(rf/subscribe [:app/menu-direction])}
       web-content]]]))

#_(defn dispatch-main [content]
    [:div content])

(defn app-wrapper [route-table]
  (let [route-name (rf/subscribe [:route-name])
        route-entry (rf/subscribe [:kee-frame/route])
        user-screenmode (rf/subscribe [:app/user-screenmode])
        html (aget (.getElementsByTagName js/document "html") 0)
        body (aget (.getElementsByTagName js/document "body") 0)
        menu-open? (rf/subscribe [:app/menu-open?])
        s (rf/subscribe [::rs/state-full :main-fsm])]
    (.setAttribute html "class" (if (= :dark @user-screenmode) "dark" ""))
    (.setAttribute body
                   "style" "background-color: var(--surface1)"
                   "class" "font-sans bg-gray-600 dark:bg-gray-800 ") ;fixme "min-h-screen overflow-x-hidden"
    (forced-scroll-lock (or @menu-open?
                            (and (or (:modal @s)
                                     (:modal-forced @s))
                                 (not (:modal-short-timeout @s)))) "maint")
    [dispatch-main
     (when-let [page (get route-table @route-name)]
       (make-route-component page @route-entry))]))
