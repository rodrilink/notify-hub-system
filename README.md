# Notify Hub System

Welcome to the **Notify Hub System**, a notification management platform that allows you to send messages to users across different channels (SMS, Email, Push Notifications) based on their subscriptions. This system is built with a Clojure backend and a React.js frontend powered by Vite.js.

## Features

- Submit notifications for different categories (Sports, Finance, Movies).
- Users are pre-populated with preferences for categories and channels.
- Simulate sending notifications via SMS, Email, or Push Notifications.
- View a log of sent notifications, including details and statuses.

## Installation

### Backend (Clojure)

1. Navigate to the `backend/` folder:

```bash
cd backend

lein run
```

### Frontend (React with Vite.js)

2. Navigate to the frontend/ folder:

```bash
cd frontend

pnpm install
pnpm dev
```

### Running Both Backend and Frontend

You can start both the backend and frontend concurrently by running the start.sh script:

```
./start.sh
```

This will start the backend (Clojure) and the frontend (React) simultaneously.

### Using the Application

- Message Submission: Go to the homepage, then click on `Get Started` , choose a category (Sports, Finance, Movies), and submit a notification message.
- View Logs: Click on the "View Logs" button to open a sidebar to see all the notification logs.

### Requirements

- Node.js for the frontend.
- Leiningen for the Clojure backend.

### Notes for Evaluators

If you're evaluating this project:

- Make sure to run the backend and frontend as described above.
- The project is designed to use a log file, so no setup for the database is required.
