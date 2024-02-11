import React from 'react';
import ReactDOM from 'react-dom';
// import ReactDOM from 'react-dom/client';
import { thunk } from 'redux-thunk';
import { Provider } from 'react-redux';

import reportWebVitals from './reportWebVitals';
import rootReducer from './store/reducers/rootReducer';
import { createStore, applyMiddleware, compose } from 'redux';

import './index.css';
import App from './App';

const store = createStore(rootReducer, {}, compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
));

// import { reduxFirestore, getFirestore, createFirestoreInstance } from "redux-firestore";
// import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
// import fbConfig from "./config/fbConfig";
// import firebase from "firebase/app";


// pass reducers directly into the store
// const store = createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
//     reactReduxFirebase(fbConfig), // redux binding for firebase
//     reduxFirestore(fbConfig) // redux bindings for firestore
//   )
// );

// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();