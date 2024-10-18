# Use the official Clojure image for the backend
FROM clojure:openjdk-11-lein AS backend

# Copy the backend directory to the container
COPY backend /app/backend

# Set the working directory to /app/backend
WORKDIR /app/backend

# Install dependencies and build the uberjar
RUN lein deps
RUN lein uberjar

# Final stage for the backend
FROM openjdk:11-jre-slim

# Install Tini for process management
RUN apt-get update && apt-get install -y tini

# Set the working directory to /app
WORKDIR /app

# Copy the backend JAR and resources
COPY --from=backend /app/backend/target/uberjar/notify-hub-system-0.1.0-SNAPSHOT-standalone.jar /app/
COPY --from=backend /app/backend/resources /app/resources

# Expose the backend port
EXPOSE 8000

# Run the backend service
ENTRYPOINT ["/usr/bin/tini", "--"]
CMD ["java", "-jar", "notify-hub-system-0.1.0-SNAPSHOT-standalone.jar"]
