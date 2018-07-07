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
            <form onSubmit={e => this.props.handleLogin(e, this.state)}>
                <h4>Log In </h4>
                <div className="form-group">
                <label for="username">Username</label>
                <input
                    type='text'
                    name='username'
                    className="form-control"
                    placeholder="Enter username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                </div>
                <div className="form-group">
                <label for="password">Password</label>
                <input
                    type='password'
                    name='password'
                    className="form-control"
                    placeholder="Enter password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                </div>
                <button type='submit' className="btn btn-primary">Login</button>
            </form>
        );
    }

}

export { LoginForm };
