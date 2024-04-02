FROM node:lts-alpine AS build
ARG USE_DB=REMOTE
ARG SYNC_DB=False
ARG NODE_PORT
ARG FRONTEND_URL
ARG ACCOMS_URL
ARG BOOKINGS_URL
ARG ACCOUNTS_URL
ARG PROCESS_BOOKING_URL
ARG PAYMENTS_URL
ARG NOTIFICATIONS_URL
ARG REVIEWS_URL
ARG CHECKIN_URL

WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .

# EXPOSE 3008
CMD ["node", "src/index.js"]
