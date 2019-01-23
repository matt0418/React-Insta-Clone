import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer'
import SearchBar from './components/SearchBar/SearchBar'
import Authenticate from '../src/Authentication/Authenticate'
import PostsPage from './components/PostContainer/PostsPage';
import Login from './components/Login/Login'


class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
    if (event.target.value === '') {
      this.setState({
        postData: dummyData
      })
    }
  }


  render() {
    return (
      <div>
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App)(Login)
