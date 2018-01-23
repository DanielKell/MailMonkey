import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
        <nav>
            <div class="nav-wrapper">
            <a className="left brand-logo">MailMonkey</a>
            <ul id="nav-mobile" className="right">
                <li><a>Login with Google</a></li>
            </ul>
            </div>
        </nav>
        );
    }
}

export default Header