FROM node:lts-alpine
WORKDIR /Users/justinlee/Documents/GitHub/wherebnb/wherebnb-bookings
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
EXPOSE 3002
RUN chown -R node /usr/src/app
CMD ["npm", "start"]
