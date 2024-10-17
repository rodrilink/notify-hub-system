(ns api.handlers
  (:require [api.notifications :refer [send-notification]]
            [api.util :refer [users-in-category]]
            [clojure.data.json :as json]))

(def users (clojure.edn/read-string (slurp "resources/users.edn")))

(defn send-message [req]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (let [data (json/read-str (slurp (:body req)))
               category (get data "category")
               message (get data "message")
               filtered-users (users-in-category users category)]
           (send-notification filtered-users category message)
           (json/write-str {:message "Success"}))})

(defn get-users [req]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/write-str {:users (:users users)})})


(defn get-logs [req]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (slurp "resources/notification-history.log")})

(defn get-options [req]
  {:status 200
   :headers {"Access-Control-Allow-Origin" "*"
             "Access-Control-Allow-Methods" "POST, GET, OPTIONS, PUT, DELETE"
             "Access-Control-Allow-Headers" "Content-Type, Authorization, X-Requested-With"
             "Access-Control-Allow-Credentials" "true"}})

