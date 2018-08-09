import React, {Component} from 'react';
import PropsTypes from 'prop-types';
import  { connect } from 'react-redux';
// import our action which create Posts
import {createPost} from '../actions/postActions'

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({[e.target.name]: e.target.value });
  }

  onSubmit(e){
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    // fetch('https://jsonplaceholder.typicode.com/posts', {
    //   method: 'POST',
    //   headers: {
    //     'content-type':'application/json'
    //   },
    //   body: JSON.stringify(post)
    // })
    // .then(res => res.json())
    // .then(data => console.log(data));

    // Call action!
    // we will replace the fetch cuz our fetch is in the action.
    this.props.createPost(post);

  }

  render () {
    return (
      <div>
        <h1>Add Posts</h1>
        <form onSubmit = {this.onSubmit}>
          <div>
            <label>Title: </label><br/>
            <input type="text" name="title" onChange={this.onChange} value={this.state.title}/>
          </div>
          <br/>
          <div>
            <label>Body: </label><br/>
            <textarea name="body" onChange={this.onChange} value={this.state.body}/>
          </div>
          <br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}
// export default PostForm
PostForm.propsTypes = {
  createPost: PropsTypes.func.isRequired
}; //go to post action to see if it is called. 

export default connect(null, {createPost})(PostForm)
