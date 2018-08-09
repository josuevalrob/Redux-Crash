import React, {Component} from 'react'
import PropsTypes from 'prop-types';
// connect your component with your redux store. provided by the proveder component.
import { connect } from 'react-redux';
// lets call an action to fetch the posts
import { fetchPosts } from '../actions/postActions'


// After refux we will not use this component to do the Fetch.
class Posts extends Component {
  // For now lets just put the content in our state.
  // 1) we need a constructor
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // This is gonna be an empty array by default
  //     posts: []
  //   }
  // }

  // componentWillMount() {
  //   // console.log(123);
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     // fetch return a promise, which is a result that we needs to maps to json
  //     .then (res => res.json())
  //     // and give us our data, and we can console.log that data.
  //     // .then (data => console.log(data));
  //     // lets fill our data.
  //     .then(data => this.setState({posts: data}));
  //     // this is not gonna show anything.
  // }
  // after redux
  componentWillMount() {
    this.props.fetchPosts();
  }

  componentWillReceiveProps(nextProps){
    // we can access to the new post property
    if (nextProps.newPost) { //if is actually there
      this.props.posts.unshift(nextProps.newPost);
    }
    // this.pros.post are all our posts.
    // unshift for add it into the beginning.
  }

  render () {
    //when ever you look into somthing it needs a key.
    // const postItems = this.state.posts.map(post => (
    const postItems = this.props.posts.map(post => (
      <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ));
    return (
      <div>
        <h1>Posts</h1>
        { postItems }
      </div>
    )
  }
}

Posts.propsTypes = {
  fetchPosts: PropsTypes.func.isRequired,
  posts: PropsTypes.array.isRequired,
  newPost: PropsTypes.object
}

//Maps to state to pros.
//We want our items from our posts.
const mapsStateToProps = state => ({
  //I am using post right here is cuz our reducer is called posts.
  posts: state.posts.items,
// lets call the new post.
  newPost: state.posts.item
});
// export default Posts
// we will map our state to our properties
export default connect(mapsStateToProps, { fetchPosts })(Posts);
// fetchPosts call the fetch request.
