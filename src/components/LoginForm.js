import React, { Component } from 'react';


class LoginForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState(prevState => {
            const newState = { ...prevState };
            newState[name] = value;
            return newState;
        })
    }

    render() {
        return (
            <form>
                <h4>Log In </h4>
                <label>Username</label>
                <input
                    type='text'
                    name='username'
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <label>Password</label>
                <input
                    type='password'
                    name='password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input type='submit' value='Login' />
            </form>
        );
    }

}

export { LoginForm };
