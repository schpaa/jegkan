(ns jegkan.spa)

(goog-define version "!")

(defn front []
  [:div.p-4.text-white "FRONT " version])
  ; (let [{:keys [bg fg- fg+ hd p p- he]} (st/fbg' 0)
  ;        user-auth (rf/subscribe [::db/user-auth])]
  ;
  ;    (if @user-auth
  ;      [:div
  ;       [render-front-tabbar (:uid @user-auth)]
  ;
  ;       [k/case-route (comp :name :data)
  ;        :r.booking-blog
  ;        #_[eykt.content.rapport-side/rapport-side {:source-path ["booking-posts" "articles"]}]
  ;        [err-boundary
  ;         [content.booking-blog/booking-blog
  ;          {:fsm {}
  ;           :uid (:uid @user-auth)
  ;           :path ["booking-posts" "articles"]}]]
  ;
  ;        ;:r.blog
  ;        ;[(get-in schpaa.components.sidebar/tabs-data [:bar-chart :content-fn])]
  ;
  ;        :r.new-booking
  ;        (if-not @user-auth
  ;          [views/rounded-view {}
  ;           [:div.p-4.space-y-4
  ;            [:h2 "Er du ny her?"]
  ;            [:a {:href (k/path-for [:r.user])} "Logg inn først"]]]
  ;          [content.new-booking/new-booking @user-auth])
  ;
  ;        :r.forsiden
  ;        [content.overview/overview]]]
  ;
  ;      [welcome])))

(def route-table
  {:r.forsiden       front
   :r.new-booking    front
   :r.booking-blog   front
   ;:r.debug2         front
   ;:r.blog           front
   :r.user           front
   :r.logg           front
   :r.debug          front
   :r.page-not-found (fn [r] [:div "?"])})

