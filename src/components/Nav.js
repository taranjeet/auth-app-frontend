import React from 'react';

const Nav = (props) => {

    const loggedOutNav = (
        <ul>
            <li>Login</li>
            <li>Signup</li>
        </ul>

    );

    const loggedInNav = (
        <ul>
            <li>Logout</li>
        </ul>
    );

    return (
        <div>
            {props.loggedIn ? loggedInNav : loggedOutNav}
        </div>
    );
}

export { Nav }
