import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Nav, LoginForm, SignupForm } from './components'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: localStorage.getItem('token') ? true: false,
      displayedForm: '',
      username: ''
    };
    this.displayForm = this.displayForm.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.apiUrl = 'http://localhost:8003'
  }

  componentDidMount() {
    if(this.state.loggedIn) {
      fetch(`${this.apiUrl}/authdemo/current_user/`, {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
      .then(res => res.json())
      .then(json => {
        this.setState({
          username: json.username
        });
      });
    }
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

  handleLogin(e, data) {
    e.preventDefault();
    fetch(`${this.apiUrl}/token-auth/`, {
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
        username: json.user.username
      })
    })
  }

  handleLogout(){
    localStorage.removeItem('token');
    this.setState({
      loggedIn: false,
      username: ''
    });
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
        form = <LoginForm handleLogin={this.handleLogin}/>
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
          handleLogout={this.handleLogout}
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
