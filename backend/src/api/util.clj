(ns api.util)

(defn log-to-file [text]
  (let [root-path (str (System/getProperty "user.dir") "/resources/notification-history.log")]
    (spit (str root-path) (str text "\n") :append true)))


(defn log-notification-history [channel-type category notification-type id username message]
  (let [time (str (java.time.LocalDateTime/now))
        log-text (format "%s|%s|%s|%s|%s|%s|%s"
                         time channel-type category notification-type id username message)]
    (log-to-file log-text)))

(defn users-in-category [users category]
  (try
    (->> (:users users)
         (filter (fn [user]
                   (some #(= (:name %) category) (:subscriptions user)))))
    (catch Exception e
      (println e))))
