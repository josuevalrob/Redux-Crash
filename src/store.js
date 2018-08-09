// Here we will create our store.
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'; //
import rootReducer from './reducers' //index.js we dont need to specify.
// emtpy object
const initialState = {};
// array of middle ware.
const middleware = [thunk];
/* Create an store and apply applyMiddleware
rootReducer
initialState
applyMiddleware(...middleware)
*/
const store = createStore(
  rootReducer,
  initialState,
  compose(
  applyMiddleware(...middleware),
      // here we will implement redux dev tools
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// this is a boilerplate. You dont need to do all this like that!.

export default store;
