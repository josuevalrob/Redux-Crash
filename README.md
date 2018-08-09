An example from
https://www.youtube.com/watch?v=93p3LxR9xfM

There is a problem after create a new post. 

particulary with this: 
```
  componentWillReciveProps(nextProps){
    if (nextProps.newPost) { //if is actually there
      this.props.posts.unshift(nextProps.newPost);
    }
  }
```
But CWRP is deprecated. 

The solution is 
getDerivedStateFromProps()
But it doesnt work in the exactly same way. 
