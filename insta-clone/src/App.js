import React, { Component } from 'react';

import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      postData: []
    }
  }

  componentDidMount() {
    this.setState({
      postData: dummyData
    })
  }

  render() {
    return (
      <div className="App">
        <PostContainer
        postData = {this.state.postData}
        />
      </div>
    );
  }
}

export default App;
