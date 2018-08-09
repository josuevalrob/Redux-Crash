import { FETCH_POSTS, NEW_POST } from './types';
// each action will be a function that we need to export
// export function fetchPosts(){  // ES5
export const fetchPosts = () => dispach => { //ES6
  console.log('fetching')

  // the thunk middleware allow us to actuali use the
  // dispatch function directly so we can make a asynchronous request
  // return function (dispatch) { //ES5
    // Is a kind of a resolver of a promise.
    // The type or the payload.
    // here we will create our fetch
      fetch('https://jsonplaceholder.typicode.com/posts')
      // fetch return a promise, which is a result that we needs to maps to json
      .then (res => res.json())
      // we need to dispach the data to the
      .then(posts => dispach({
        type: FETCH_POSTS,
        // here is where the data is comming in. posts
        payload: posts
      }))
  // }
};
// With this we're going to be dispatching fetch post to the reducer so...

// Create Post
export const createPost = (postData) => dispach => {
  // This will take the post data, cuz we are submitting a post.
  // based from our postform component
  fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type':'application/json'
      },
      body: JSON.stringify(postData)
    })
    .then(res => res.json())
    // data will be the single post.
    // We need to dispatch
    .then(post => dispach({
      type: NEW_POST,
      payload: post
    }));
};
