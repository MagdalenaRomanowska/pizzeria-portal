import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';  //dotyczy narzędzi developerskich dla Reduksa, ponieważ musimy zmienić sposób ich inicjowania w projekcie.
import tablesReducer from './tablesRedux';

const initialState = {  // define initial state and shallow-merge initial data
  tables: {
    data: {}, //data będzie zawierać tablicę stolików, które pobierzemy z API.
    loading: {  //loading zawiera informacje o wczytywaniu danych.
      active: false, //active mówi nam czy trwa wczytywanie.
      error: false, //error będzie zawierał ew. komunikat błędu.
    },
  },
};

const reducers = {  // define reducers
  tables: tablesReducer,
};

Object.keys(initialState).forEach(item => {  // add blank reducers for initial state properties without reducers
  if (typeof reducers[item] == 'undefined') {
    reducers[item] = (statePart = null) => statePart;
  }
});

const combinedReducers = combineReducers(reducers);

const store = createStore(  // create store. Stan całej aplikacji przetrzymywany jest w drzewie obiektów wewnątrz pojedynczego obiektu store.
  combinedReducers,  //Stan jest tylko do odczytu - jedynym sposobem na zmianę stanu jest wywołanie akcji, która zwraca obiekt opisujący co powinno się stać.
  initialState,
  composeWithDevTools(  //wcześniej, przed Thunkiem, bylo to: window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    applyMiddleware(thunk)  // Dzięki tej zmianie będą działać jednocześnie narzędzia developerskie dla Reduksa, jak i Thunk.
  )
);

export default store;
