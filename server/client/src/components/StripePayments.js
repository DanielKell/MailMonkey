import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component {
    render() {

        return (
            <StripeCheckout 
                name="MailMonkey"
                description="Receive 5 Email Credits for $5"
                amount={500} //in cents
                token={token => this.props.handleToken(token)} 
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <button className="btn">
                    Add Credits
                </button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions)(Payments);