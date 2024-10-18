(defproject notify-hub-system "0.1.0-SNAPSHOT"
  :description "A Clojure-based notification system API to send notifications through multiple channels (SMS, Email, Push)."
  :url "https://github.com/rodrilink/notify-hub-system"
  :license {:name "EPL-2.0 OR GPL-2.0-or-later WITH Classpath-exception-2.0"
            :url "https://www.eclipse.org/legal/epl-2.0/"}
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [compojure "1.7.1"]       ; Routing library 
                 [ring/ring-defaults "0.3.2"] ; Middleware defaults
                 [ring/ring-jetty-adapter "1.9.0"] ; Jetty adapter
                 [org.clojure/data.json "0.2.6"]] ; JSON support
  :main ^:skip-aot api.core           ; Keep the main class reference
  :aot [api.core]                     ; Add AOT compilation for the main namespace
  :repl-options {:init-ns api.core}
  :target-path "target/%s"            ; Ensure the JAR goes to the correct target directory
  :profiles {:uberjar {:aot :all}})   ; AOT compilation for the uberjar profile
