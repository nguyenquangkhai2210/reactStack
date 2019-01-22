import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from "redux-thunk";
import { routerReducer } from 'react-router-redux';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const initialState = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

class Store {
  constructor() {
    if (!Store.instance) {
      Store.instance = this;
    }

    return Store.instance;
  }

  configureStore() {
    this.store = createStoreWithMiddleware(this.createReducer(), initialState);
    this.store.asyncReducers = {};

    return this.store;
  }

  createReducer = asyncReducers => {
    return combineReducers({
      ...asyncReducers,
      routing: routerReducer
    });
  };

  injectReducer = (name, asyncReducer) => {
    console.log(name, asyncReducer);
    this.store.asyncReducers[name] = asyncReducer;
    this.store.replaceReducer(this.createReducer(this.store.asyncReducers));
  };
}

export const store = new Store();