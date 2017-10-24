This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).


# Adeptmind's Frontend Boilerplate

Includes:
 - React
 - Redux
 - Redux-Thunk
 - Boostrap
 - Ducks Folder Structure Pattern
 - Dotenv (see src/config/config.js and you need to create a `.env` file at root)


## Roadmap

### Add backend using express.js
 - Client can make calls to its own backend and avoid CORS issues
 - Better stability as control can be exerted on the entire project, instead of letting the actual services fail or hang
 - Backend will proxy to required resources, and endpoints will never fail, only return no results
 - Control data transformation to what the client needs instead of letting actual services have control