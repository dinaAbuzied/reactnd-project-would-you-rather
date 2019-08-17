import React, { Component } from 'react';
import { connect } from "react-redux";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Question from "./Question";
import "./Home.css"


class Home extends Component {
    render() {
        const { answered, unanswered } = this.props;
        return (
            <div className="home">
                <div className="tabs-container">
                    <Tabs defaultActiveKey="unanswered" id="questions-tab">
                        <Tab eventKey="unanswered" title="Unanswered Questions">
                            {
                                unanswered.map((que) => (
                                    <Question key={que.id} que={que} />
                                ))
                            }
                        </Tab>
                        <Tab eventKey="answered" title="Answered Questions">
                            {
                                answered.map((que) => (
                                    <Question key={que.id} que={que} />
                                ))
                            }
                        </Tab>
                    </Tabs>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, authedUser }) => {
    const questionsArr = Object.keys(questions).map((question) => {
        return questions[question];
    })
    return {
        answered: questionsArr.filter((question) => {
            return question.optionOne.votes.includes(authedUser.id) ||
                question.optionTwo.votes.includes(authedUser.id);
        }).sort((a, b) => b.timestamp - a.timestamp),
        unanswered: questionsArr.filter((question) => {
            return !question.optionOne.votes.includes(authedUser.id) &&
                !question.optionTwo.votes.includes(authedUser.id);
        }).sort((a, b) => b.timestamp - a.timestamp)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //   signIn: (user) => dispatch(setAuthedUser(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)