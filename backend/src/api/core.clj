(ns api.core
  (:gen-class)
  (:require [ring.adapter.jetty :refer [run-jetty]]
            [ring.middleware.defaults :refer [wrap-defaults site-defaults]]
            [api.routes :refer [app-routes]]))

(defn wrap-cors [handler]
  (fn [req]
    (let [origin (get-in req [:headers "origin"])
          response (handler req)]
      (assoc-in (assoc-in (assoc-in response
                                    [:headers "Access-Control-Allow-Origin"] (or origin "*"))
                          [:headers "Access-Control-Allow-Methods"] "POST, GET, OPTIONS, PUT, DELETE")
                [:headers "Access-Control-Allow-Headers"] "Content-Type, Authorization, Accept, Origin"))))

(def app
  (-> app-routes
      (wrap-cors)
      (wrap-defaults (assoc-in site-defaults [:security :anti-forgery] false))))

(defn -main [& args]
  (let [port (Integer. (or (System/getenv "PORT") "8000"))]
    (println (str "Starting application on port " port))
    (run-jetty app {:port port :join? false})))

