(ns api.notifications
  (:require [api.util :refer [print-and-save log-notification-history]]))

(defn send-notification [user-list category message]
  (doseq [user user-list]
    (let [username (:username user)
          phone (:phone_number user)
          email (:email user)
          id (:id user)]
      (doseq [notification (:notification user)]
        (let [notification-type (:type notification)]
          (cond
            (= notification-type "SMS") (do
                                          (print-and-save (format "Sending SMS to %s for user %s" phone username))
                                          (log-notification-history category "SMS" phone message))
            (= notification-type "EMAIL") (do
                                            (print-and-save (format "Sending EMAIL to %s for user %s" email username))
                                            (log-notification-history category "EMAIL" email message))
            (= notification-type "PUSH") (do
                                           (print-and-save (format "Sending PUSH to %s for user %s" id username))
                                           (log-notification-history category "PUSH" id message))))))))
