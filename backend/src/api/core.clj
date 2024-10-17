(ns api.core
  (:gen-class)
  (:require [org.httpkit.server :as server]
            [ring.middleware.defaults :refer :all]
            [api.routes :refer [app-routes]]))

(defn -main [& args]
  (println "Starting application on port 8000")
  (server/run-server (wrap-defaults #'app-routes (assoc-in site-defaults [:security :anti-forgery] false)) {:port 8000}))
