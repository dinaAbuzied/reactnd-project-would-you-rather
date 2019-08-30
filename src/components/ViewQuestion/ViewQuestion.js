import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import NotFound from "../NotFound";
import "./ViewQuestion.css";

class ViewQuestion extends Component {
    render() {
        const { match ,users, questions, authedUser } = this.props;
        const is_availabe = questions[match.params.question_id];
        const answered = authedUser.answers[match.params.question_id];
        console.log(match.params.question_id);
        return (
            is_availabe ? (
            <div className="view-question">
                <Card>
                    <Card.Header>
                        <Card.Title>
                            {
                                answered ? (
                                    "Asked by " + users[questions[match.params.question_id].author].name
                                ) : (
                                    users[questions[match.params.question_id].author].name + " asks:"
                                )
                            }
                        </Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <label>Complete the Question</label>
                        <Card.Subtitle>Would You Rather...</Card.Subtitle>
                    </Card.Body>
                </Card>
            </div>
            ) :
            (
                // <NotFound/> 
                null
            )
        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }) => {
    return {
        users,
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(ViewQuestion) 