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
                        <div className="survey-body">
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
                            {survey.yes || survey.no ?
                                <PieChart
                                    data={[
                                        { value: survey.no, key: 1, color: '#cc3028' },
                                        { value: survey.yes, key: 2, color: '#13b230' },
                                    ]}
                                    animate={true}
                                />
                            :
                                <PieChart
                                data={[
                                    { value: 1, key: 1, color: 'teal' }
                                ]}
                                animate={true}
                            />
                                }
                            </div>

                        </div>
                    </div>
                </div>

            )
        })
    }

    renderDummySurvey() {
        return (
            <div className="card teal lighten-5">
                <div className="card-content">  
                    <p className="no-surveys">This is where your surveys will appear once you've sent one! Click the button below to send your first survey.</p>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.props.surveys.length ? 
                    this.renderSurveys()
                :
                    this.renderDummySurvey()
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { surveys: state.surveys }
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);

