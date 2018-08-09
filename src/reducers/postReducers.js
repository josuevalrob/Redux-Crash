// This will evaluate any action that are commited.
// such as fetching a post and  create a new post.
// For our action we create type, and they are basically constants.
import { FETCH_POSTS, NEW_POST } from '../actions/types';
// Our initialState will be an object.
const initialState = {
// This will represent the post that comming from our action.
// and our action is where we gonna put the fetch request.
  items:  [],
// Single post that we add and we get the response back
  item: {}
}
// this evaluate what type that we're dealing with.
export default function(state = initialState, action) {
  // the action needs to include a type. it has to have a type, and that is what it is evaluating.
  switch (action.type) {
    case FETCH_POSTS:
    console.log('reducer') // we know that the task gets call.
      // lets return the current state.
      return {
        ...state,
        items: action.payload //fill items with the data.
      }
    case NEW_POST:
      // With jsonplaceholder is a little different.
      return {
        ...state,
        item: action.payload //Single post
      }
    default:
      return state;
  }
}
