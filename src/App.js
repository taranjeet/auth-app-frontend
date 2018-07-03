import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, LoginForm, SignupForm } from './components'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
      displayedForm: '',
      username: ''
    };
    this.displayForm = this.displayForm.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.apiUrl = 'http://localhost:8003'
  }

  handleSignup(e, data) {
    e.preventDefault();
    fetch(`${this.apiUrl}/authdemo/users/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(json => {
      localStorage.setItem('token', json.token);
      this.setState({
        loggedIn: true,
        displayedForm: '',
        username: json.username
      })
    })
  }

  displayForm(form) {
    this.setState({
      displayedForm: form
    });
  }

  render() {

    let form;
    switch(this.state.displayedForm) {
      case 'login':
        form = <LoginForm />
        break;
      case 'signup':
        form = <SignupForm handleSignup={this.handleSignup}/>
        break;
      default:
        form=null;
    }


    return (
      <div>
        <h1>Authentication Demo</h1>
        <Nav
          loggedIn={this.state.loggedIn}
          displayForm={this.displayForm}
        />
        {form}
        <h4>
          {this.state.loggedIn ? `Welcome ${this.state.username}`: 'Please Login'}
        </h4>
      </div>
    );
  }
}

export default App;
