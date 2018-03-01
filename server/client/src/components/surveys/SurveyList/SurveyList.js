import React, { Component } from 'react';
import { connect } from 'react-redux';
import PieChart from 'react-minimal-pie-chart';

import { fetchSurveys } from '../../../actions';
import './styles.css';

class SurveyList extends Component {

    componentDidMount() {
        this.props.fetchSurveys();
    }

    renderSurveys() {
        return this.props.surveys.reverse().map(survey => {
            return (
                <div className="card teal lighten-5" key={survey._id}>
                    <div className="card-content">
                        <span className="card-title"> {survey.title}</span>
                        <div class="survey-body">
                            <p>
                                {survey.body}
                            </p>
                        </div>
                        <p className="right survey-send-date">
                            Survey sent on: {new Date(survey.dateSent).toLocaleDateString()}
                        </p>
                    </div>
                    <div className="card-action">
                        <p className="survey-responses">Survey Responses:</p>
                        <div className="data-container">
                            <div className="yes-and-no">
                                <p className="response"> Yes: {survey.yes}</p>
                                <p className="response"> No: {survey.no}</p>
                            </div>
                            <div className="piechart-container">
                                <PieChart
                                    data={[
                                        { value: survey.no, key: 1, color: '#C13C37' },
                                        { value: survey.yes, key: 2, color: '#00e600' },
                                    ]}
                                    animate={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            )
        })
    }

    render() {
        return (
            <div>
                {this.renderSurveys()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

