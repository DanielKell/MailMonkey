import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Header from '../Header/Header';
import Landing from '../Landing/Landing';
import Dashboard from '../Dashboard';
import SurveyNew from '../surveys/SurveyNew/SurveyNew';
import Footer from '../Footer/Footer';
import './styles.css';

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }

    render() {
        return (
            <div className="whole-page">
                <div className="container ">
                    <BrowserRouter>
                        <div>
                            <Header />
                            <Route exact path="/" component={Landing} />
                            <Route exact path="/surveys" component={Dashboard} />
                            <Route path="/surveys/new" component={SurveyNew} />
                            <Footer />
                        </div>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default connect(null, actions)(App);