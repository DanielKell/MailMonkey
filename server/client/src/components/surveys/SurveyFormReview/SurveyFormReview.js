import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as actions from '../../../actions';
import './styles.css';

const SurveyReview = ({ onCancel, formValues, submitSurvey, history, auth }) => {
    return (
        <div>
            <div className="survey-form-header">
                    <i className="material-icons info-icon">info </i>
                    Please confirm your inputs 
            </div>
            <div>
                <div className="survey-review-form-box">
                    <label className="survey-review-form-label">Survey Title</label>
                    <div>{formValues.title}</div>
                </div>
                <div className="survey-review-form-box">
                    <label className="survey-review-form-label">Subject Line</label>
                    <div>{formValues.subject}</div>
                </div>
                <div className="survey-review-form-box">
                    <label className="survey-review-form-label">Email Body</label>
                    <div>{formValues.body}</div>
                </div>
                <div className="survey-review-form-box survey-review-form-last-box">
                    <label className="survey-review-form-label">Emails</label>
                    <div>{formValues.recipients}</div>
                </div>
            </div>
            <button 
                className="red white-text btn-flat" 
                onClick={onCancel}    
            >
                Back
            </button>
            {auth.credits ?
            <button
                onClick={() => submitSurvey(formValues, history)}
                className="teal lighten-1 btn-flat right white-text"
            >
                
                Send Survey
                <i className="material-icons right">email</i>
            </button>
            :
            <button
            className="teal lighten-1 btn-flat right white-text disabled"
            >
            
                Send Survey
                <i className="material-icons right">email</i>
            </button>
            }


        </div>
    )
}

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    }
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReview));