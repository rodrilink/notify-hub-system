(ns api.core
  (:gen-class)
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [api.routes :refer [app-routes]]))

(defn wrap-cors [handler]
  (fn [req]
    (let [response (handler req)]
      (assoc-in (assoc-in response
                          [:headers "Access-Control-Allow-Origin"] "*")
                [:headers "Access-Control-Allow-Methods"] "POST, GET, OPTIONS, PUT, DELETE"))))



(def app
  (-> app-routes
      (wrap-cors)
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))))


(defn -main [& args]
  (println "Starting application on port 8000")
  (run-jetty app {:port 8000 :join? false}))
