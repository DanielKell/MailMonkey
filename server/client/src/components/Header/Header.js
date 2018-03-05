import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from '../StripePayments';
import logo from '../../images/logo.svg';
import './styles.css';

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return ;
            case false:
                return (
                    <li><a href="/auth/google">Login With Google </a></li>
                )
            default: 
                return [
                    <li key="1"><div className="payments-button"><Payments /></div></li>,
                    <li key="2" style={{ margin: '0 10px' }}>
                        Credits: {this.props.auth.credits}
                    </li>,
                    <li key="3"><a href="/api/logout">Logout</a></li>
                ];
        }
    }

    render() {
        return (
        <nav className="teal lighten-1 header-container">
            <div className="nav-wrapper">
            
                <Link 
                to={this.props.auth ? '/surveys' : '/'} 
                className="left brand-logo"
                >
                <img className="header-logo" src={logo} alt={'MailMonkey Logo'}/>
                <span className="header-title">MailMonkey</span>
                </Link>
                <ul id="nav-mobile" className="right">
                    {this.renderContent()}
                </ul>
            </div>
        </nav>
        );
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect (mapStateToProps)(Header);