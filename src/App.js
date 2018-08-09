import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// the provider is the glue between react and redux
import {Provider} from 'react-redux';
import Posts from './components/Posts';
import PostForm from './components/PostForm'

// Cretate an store and apply middleware is part of readux.
// const store = createStore(() => [], {}, applyMiddleware());
// Lets create a separate file. and import the store here:
import store from './store';

class App extends Component {
  render() {
    // the provider takes the Store.
    // the store hold the whole state tree of your app.
    // we create the store using the function createStore(reducer, [preloadedState], [enhancer])
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <PostForm />
          <hr />
          <Posts />
        </div>
      </Provider>

    );
  }
}

export default App;
