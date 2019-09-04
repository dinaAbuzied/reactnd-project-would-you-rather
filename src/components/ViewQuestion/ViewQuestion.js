import React, { Component } from 'react';
import { connect } from "react-redux";
import NotFound from "../NotFound";
import Answered from "./Answered";
import UnAnswered from "./UnAnswered";
import "./ViewQuestion.css";

class ViewQuestion extends Component {
    render() {
        const { match, questions, authedUser } = this.props;
        const is_availabe = questions[match.params.question_id];
        const answered = authedUser.answers[match.params.question_id];
        console.log(match.params.question_id);
        return (
            is_availabe ? (
                <div className="view-question">
                    {
                        answered ? (
                            <Answered id={match.params.question_id}/>
                        ) : (
                                <UnAnswered id={match.params.question_id}/>
                            )
                    }
                </div>
            ) :
                (
                    <NotFound />
                )
        )
    }
}

const mapStateToProps = ({ questions, authedUser }) => {
    return {
        questions,
        authedUser
    }
}

export default connect(mapStateToProps)(ViewQuestion) 