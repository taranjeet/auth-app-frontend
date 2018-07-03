import React from 'react';

const Nav = (props) => {

    const loggedOutNav = (
        <ul>
            <li onClick={() => props.displayForm('login')}>Login</li>
            <li onClick={() => props.displayForm('signup')}>Signup</li>
        </ul>

    );

    const loggedInNav = (
        <ul>
            <li onClick={() => props.handleLogout()}>Logout</li>
        </ul>
    );

    return (
        <div>
            {props.loggedIn ? loggedInNav : loggedOutNav}
        </div>
    );
}

export { Nav }
