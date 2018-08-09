// Lets combine all of our refucers.
import { combineReducers } from 'redux';
import postReducer from './postReducers';

export default combineReducers({
  // past an object with the reducers.
  posts: postReducer
});
