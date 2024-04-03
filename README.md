# wherebnb-checkin

wherebnb-checkin is a complex microservice that orchestrates the update of checkedIn status in the booking DB, displays instructions on the wherebnb UI and sends emails to the host and guest 

## Getting Started
1. Clone the repository

2. (a) Build and run the Docker container:

    ```sh
    docker build -t wherebnb-reviews .
    docker run -p 3007:3007 wherebnb-reviews
    ```
2. (b) Run app on development server:

- connect to the cloud database
  ```sh
    npm run dev:remote 
  ```
- connect to the local database
  ```sh
    npm run dev 
  ```

- Synchronise cloud database with ORM
  ```sh
    npm run sync:remote
  ```
- Synchronise local database with ORM
  ```sh
    npm run sync
  ```