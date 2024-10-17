(ns api.notifications
  (:require [api.util :refer [log-notification-history]]))

(defn send-notification [users category message]
  (doseq [user users]
    (let [phone (:phone user)
          email (:email user)
          id (:id user)
          username (:username user)]
      ;; Iterate over the user's channels (SMS, EMAIL, PUSH)
      (doseq [channel (:channels user)]
        (let [channel-type (:name channel)]
          (cond
            (= channel-type "SMS") (log-notification-history category channel-type phone id username message)
            (= channel-type "EMAIL") (log-notification-history category channel-type email id username message)
            (= channel-type "PUSH") (log-notification-history category channel-type id id username message)))))))



