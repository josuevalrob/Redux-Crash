import React, {Component} from 'react'

class Posts extends Component {

  // For now lets just put the content in our state.
  // 1) we need a constructor
  constructor(props) {
    super(props);
    this.state = {
      // This is gonna be an empty array by default
      posts: []
    }
  }

  componentWillMount() {
    // console.log(123);
    fetch('https://jsonplaceholder.typicode.com/posts')
      // fetch return a promise, which is a result that we needs to maps to json
      .then (res => res.json())
      // and give us our data, and we can console.log that data.
      // .then (data => console.log(data));
      // lets fill our data.
      .then(data => this.setState({posts: data}));
      // this is not gonna show anything.
  }

  render () {
    //when ever you look into somthing it needs a key.
    const postItems = this.state.posts.map(post => (
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
export default Posts
