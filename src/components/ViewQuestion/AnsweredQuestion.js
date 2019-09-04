import React, { Component } from 'react';
import { connect } from "react-redux";
import ProgressBar from 'react-bootstrap/ProgressBar';
import "./AnsweredQuestion.css";

class AnsweredQuestion extends Component {
    render() {
        const { text, selected, totalVoters, voters } = this.props;
        const per = Math.floor(voters / totalVoters * 100);
        return (
            <div className={selected ? 'selected answered-que' : 'answered-que'}>
                <label>Would you rather {text}</label>
                <ProgressBar now={per} label={`${per}%`} />
                <label className="voters">{voters} out of {totalVoters} votes</label>
            </div>
        )
    }
}

const mapStateToProps = ({ questions, authedUser }, ownProps) => {
    const que = questions[ownProps.id];
    return {
        authedUser,
        text: que[ownProps.option].text,
        selected: que[ownProps.option].votes.find(voter => {
            return voter === authedUser.id
        }),
        totalVoters: que.optionOne.votes.length + que.optionTwo.votes.length,
        voters: que[ownProps.option].votes.length
    }
}

export default connect(mapStateToProps)(AnsweredQuestion) 