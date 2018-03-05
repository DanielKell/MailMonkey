import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import SurveyForm from '../SurveyForm';
import SurveyFormReview from '../SurveyFormReview/SurveyFormReview';
import './styles.css';

class SurveyNew extends Component {

    state = { showFormReview: false }

    renderContent() {
        if (this.state.showFormReview) {
            return (
            <SurveyFormReview 
                onCancel={() => this.setState({ showFormReview: false })}
                auth={this.props.auth}
            />
            );
        }

        return (
            <div>
                <div className="survey-form-container">
                    <i className="material-icons info-icon">info </i>
                    Draft your survey here! Enter as many recipients as you'd like.
                </div>
                <SurveyForm onSurveySubmit={() => this.setState({showFormReview: true})}/>
        </div>
        )
    }

    render() {
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

SurveyNew = connect(
    mapStateToProps
)(SurveyNew);

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew)

// export default connect (mapStateToProps)(SurveyNew);