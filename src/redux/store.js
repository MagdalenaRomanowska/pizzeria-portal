import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';  //dotyczy narzędzi developerskich dla Reduksa, ponieważ musimy zmienić sposób ich inicjowania w projekcie.

import tablesReducer from './tablesRedux';

// define initial state and shallow-merge initial data
const initialState = {
  tables: {
    data: {}, //data będzie zawierać tablicę stolików, które pobierzemy z API.
    loading: {  //loading zawiera informacje o wczytywaniu danych.
      active: false, //active mówi nam czy trwa wczytywanie.
      error: false, //error będzie zawierał ew. komunikat błędu.
    },
  },
};

// define reducers
const reducers = {
  tables: tablesReducer,
};

// add blank reducers for initial state properties without reducers
Object.keys(initialState).forEach(item => {
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

// create store
const store = createStore(
  combinedReducers,
  initialState,
  composeWithDevTools(  //wcześniej, przed Thunkiem, bylo to: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(thunk)  // Dzięki tej zmianie będą działać jednocześnie narzędzia developerskie dla Reduksa, jak i Thunk.
  )
);

export default store;
