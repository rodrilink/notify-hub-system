(ns api.util)

(defn log-to-file [filename text]
  (spit (str "resources/" filename) (str text "\n") :append true))

(defn print-and-save [text]
  (log-to-file "notification-history" text))

(defn log-notification-history [category notification-type user-detail message]
  (let [time (str (java.time.LocalDateTime/now))
        log-text (format "%s - %s - Sending %s to %s for user %s, message: %s"
                         time category notification-type user-detail (:username user-detail) message)]
    (log-to-file "notification-history.log" log-text)))

(defn filter-users [users-data category]
  (try
  (->> (:users users-data) 
         (filter (fn [user]
                   (some #{category} (:categories user)))))
    (catch Exception e
      (println e))))
