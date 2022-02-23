(ns styles.utils
  (:require [lambdaisland.ornament :as o :refer [defstyled]]))

(defstyled grid5 :div
  {:width                 "100%"
   :display               :grid
   :grid-template-columns "repeat(5,minmax(min-content,1fr))"})

(defstyled grid5-with-gap :div
  [:& grid5]
  {:column-gap              "8px"})

(o/defstyled label :label
  {;:text-transform :uppercase
   :letter-spacing "0.025em"
   :font-size "var(--font-size-0)"
   :color "var(--label)"})