import React from 'react';

const Nav = (props) => {

    const loggedOutNav = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Authentication Demo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                    className="nav-link"
                    onClick={() => props.displayForm('login')}>Login</a>
              </li>
              <li className="nav-item">
                <a
                    className="nav-link"
                    onClick={() => props.displayForm('signup')}>Signup</a>
              </li>
            </ul>
          </div>
        </nav>
    );

    const loggedInNav = (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand">Authentication Demo</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                    className="nav-link"
                    onClick={() => props.handleLogout()}>Logout</a>
              </li>
            </ul>
          </div>
        </nav>
    );

    return (
        <div>
            {props.loggedIn ? loggedInNav : loggedOutNav}
        </div>
    );
}

export { Nav }
