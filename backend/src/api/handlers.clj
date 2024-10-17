(ns api.handlers
  (:require [api.notifications :refer [send-notification]]
            [api.util :refer [filter-users print-and-save]]
            [clojure.data.json :as json]))

(def users (clojure.edn/read-string (slurp "resources/users.edn")))

(defn notify-request [req]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (let [data (json/read-str (slurp (:body req)))
               category (get data "category")
               message (get data "message")
               filtered-users (filter-users users category)]
           (send-notification filtered-users category message)
           (json/write-str {:message "Notify Success"}))})

(defn get-users-request [req]
  {:status 200
   :headers {"Content-Type" "application/json"}
   :body (json/write-str {:users (:users users)})})


(defn get-log-request [req]
  {:status 200
   :headers {"Content-Type" "text/plain"}
   :body (slurp "resources/notification-history.log")})

(defn get-options [req]
  {:status 200
   :headers {"Access-Control-Allow-Origin" "*"}})
