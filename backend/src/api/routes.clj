(ns api.routes
  (:require [compojure.core :refer :all]
            [compojure.route :as route]
            [api.handlers :refer :all]))

(defroutes app-routes
  (POST "/v1/message/notify" [] notify-request)
  (OPTIONS "/v1/message/notify" [] get-options)
  (OPTIONS "/v1/message/log" [] get-options)
  (GET "/v1/message/log" [] get-log-request)
  (GET "/v1/users" [] get-users-request)
  (route/not-found "Error, page not found!"))
