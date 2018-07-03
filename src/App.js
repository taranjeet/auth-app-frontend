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
    };
    this.displayForm = this.displayForm.bind(this);
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
        form = <SignupForm />
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
      </div>
    );
  }
}

export default App;
