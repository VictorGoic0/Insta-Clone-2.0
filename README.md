# Insta-Clone

## Dependencies Used

- React
- React Router
- React Loader Spinner
- Redux
- React Redux
- Redux Logger
- Redux Thunk
- Axios

## Running The Project

- **Deployment Link** https://victor-insta-clone.netlify.com/
  If you would like to run this project locally, `cd` into the repository and run `yarn`. This will install the needed dependencies. Next, run `yarn start`, which will initialize the application in `localhost:3000`.

## Restrictions

If you would like to make a request to the profiles endpoint, a valid **JSON web token** is required in your request headers.authorization. For posts and comments, making a **GET** request does not require a **JSON web token**, but **POST, DEL,** and **PUT** requests do.

## Description

This project is a React web application meant to imitate the functionality and UI of Instagram. The purpose of this project was to test out some of the things I have learned in Frontend and Backend development. The data being rendered is pulled in from an API deployed on `Heroku`. User registration, login, post and comment creation, deletion, fetching, or editing, are all handled there. This project was deployed on `Netlify`.

- The application is run using React, a library for building out User Interfaces.
- React Router is a React dependency for handling Client Side routing.
- React Loader Spinner is a React dependency for creating loader spinners.
- Redux is a state-management library, which is useful for managing state as an application grows.
- Redux Thunk was used for creating asynchronous redux action creators.
- Redux Logger was used for logging redux actions, which is useful for troubleshooting.
- Axios is a promise-based HTTP client. It was used to make all requests to my API.
