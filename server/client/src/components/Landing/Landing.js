import React from 'react';

import './styles.css';
import logo from '../../images/logo.svg'

const Landing = () => {
    return (
        <div className="parent-container">
            <h1 className="front-page-title">
                MailMonkey
            </h1>
            <img className="landing-logo" src={logo} />
            <h2 className="landing-summary">
            Welcome to MailMonkey! A simple-to-use application to collect feedback from your users.
            </h2>
            <div className="row">
                <div className="col s12 m4">
                    <div className="card teal lighten-1">
                        <div className="card-content white-text">
                        <span className="card-title">Draft Your Survey</span>
                        <i className="material-icons">drafts</i>
                        <p>Create a survey quick and easily, then select who you want to send it to!</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card teal lighten-1">
                        <div className="card-content white-text">
                        <span className="card-title">Collect Responses</span>
                        <i className="material-icons">pie_chart</i>
                        <p>View each survey's results on your dashboard.</p>
                        </div>
                    </div>
                </div>
                <div className="col s12 m4">
                    <div className="card teal lighten-1">
                        <div className="card-content white-text">
                        <span className="card-title">Pay Per Survey</span>
                        <i className="material-icons">attach_money</i>
                        <p>One Credit lets you send one survey. Securely purchase credits using Stripe. </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;