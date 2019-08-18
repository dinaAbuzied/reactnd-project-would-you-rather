import React, { Component } from 'react';
import { connect } from "react-redux";
import User from "./User";

class Leaderboard extends Component {
    render() {
        const { usersArr } = this.props;
        return (
            <div className="leaderboard">
                {
                    usersArr.map((user) => (
                        <User user={user} key={user.id} />
                    ))
                }
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return { 
        usersArr : Object.keys(users).map((user) => {
            return users[user];
        }).sort((a, b) => 
            (b.questions.length + Object.keys(b.answers).length) 
            - 
            (a.questions.length + Object.keys(a.answers).length)
        )
    }
}

export default connect(mapStateToProps)(Leaderboard)