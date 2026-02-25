#!/bin/bash

# Start the backend
cd backend
lein run &

# Start the frontend
cd ../frontend
pnpm dev