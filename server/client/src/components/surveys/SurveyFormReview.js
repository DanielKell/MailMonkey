import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

const SurveyReview = ({ onCancel, formValues, submitSurvey }) => {
    return (
        <div>
            <h5>Please confirm your inputs</h5>
            <div>
                <div>
                    <label>Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div>
                    <label>Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div>
                    <label>Email Body</label>
                    <div>{formValues.body}</div>
                </div>
                <div>
                    <label>Emails</label>
                    <div>{formValues.emails}</div>
                </div>
            </div>
            <button 
                className="red darken-3 white-text btn-flat" 
                onClick={onCancel}    
            >
                Back
            </button>
            <button
                onClick={() => submitSurvey(formValues)}
                className="green btn-flat right white-text"
            >
                Send Survey
                <i className="material-icons right">email</i>
            </button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(SurveyReview)