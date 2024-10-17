(ns api.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [api.handlers :refer :all]))

(defroutes app-routes
  (POST "/api/v1/message" [] send-message)
  (GET "/api/v1/message/logs" [] get-logs)
  (GET "/api/v1/users" [] get-users)
  (OPTIONS "/api/v1/message" [] get-options)
  (OPTIONS "/api/v1/message/logs" [] get-options)
  (route/not-found "Page not found!"))
