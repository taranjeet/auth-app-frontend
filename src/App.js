import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav } from './components'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false
    };
  }

  render() {
    return (
      <div>
        <h1>Authentication Demo</h1>
        <Nav loggedIn={this.state.loggedIn}/>
      </div>
    );
  }
}

export default App;
