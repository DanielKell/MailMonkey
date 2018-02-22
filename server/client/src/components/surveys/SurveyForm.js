import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import SurveyField from './SurveyField';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import validateEmails from '../../utilities/validateEmails';

const FIELDS = [
    { label: 'Survey Title', name: 'title'},
    { label: 'Subject Line', name: 'subject'},
    { label: 'Email Body', name: 'body'},
    { label: 'Recipient List', name: 'emails'}
];

class SurveyForm extends Component {

    renderFields() {
        return _.map(FIELDS, ({label, name}) => {
            return (
            <Field key={name} component={SurveyField} type="text" label={label} name={name} /> 
            )}
        )}

    render() {
        return (
            <div>
                <form //arrow function called on submit
                onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button className="teal btn-flat right white-text" type="submit">
                        Next
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    // _.each(FIELDS, ({ name }) => {
    //     if(!values[name]) {
    //         errors[name] = 'You must provide a value'
    //     }
    // });

    if (!values.title) {
        errors.title = 'You must provide a title'; //connects to Field
    }
    if (!values.subject) {
        errors.subject = 'You must provide a subject'; //connects to Field
    }
    if (!values.body) {
        errors.body = 'You must provide a body to the email'; //connects to Field
    }

    errors.emails = validateEmails(values.emails || '');

    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount: false
})(SurveyForm);