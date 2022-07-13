import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';
import reportWebVitals from './reportWebVitals';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'

// instead of this:
// let [count, setCount] = useState(0)

// Reducer!
const count = (state = 0, action) => { // first argument is initial value you want state to have
  console.log('hey i am a reducer!', action);

  switch (action.type) {

    case 'INCREMENT':
      console.log('incrementing');
      return state + 1;

    case 'DECREMENT':
      console.log('decrementing');
      return state - 1;

    default:
      // if action.type is anything else, return the state
      return state
  }

  // return state
}

const elementList = (state = [], action ) => {
  switch (action.type) {
    case 'ADD_ELEMENT':
      console.log(`The element is ${action.payload}`);
      // create a new array 
      // which includes the values of the old array
      // AND the new value in action.payload
      return [...state, action.payload];
  }
  return state
}

// Store!
const storeInstance = createStore(
  combineReducers(
    {
      count,
      elementList
    }
  ),
  // tell redux we want to use the new logger
  applyMiddleware(
    logger
  )
);



// Provider lets redux and react talk to each other

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store = { storeInstance } >
    <App />
    </Provider >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
