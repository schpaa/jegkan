(ns jegkan.sidebar
  (:require [styles.core :as sc]
            [shadow.resource :refer [inline]]))

(defn help []
  [sc/markdown (schpaa.markdown/md->html (inline "./intro.md"))])