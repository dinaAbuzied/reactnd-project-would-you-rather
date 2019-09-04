import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import "./UnAnswered.css";

class UnAnswered extends Component {
    render() {
        const { user, que, authedUser, id } = this.props;
        return (
            <Card className="unanswered">
                <Card.Header>
                    <Card.Title>
                        {
                            user.name + " asks:"
                        }
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="img-container">
                        <Image src={"../assets/img/" + user.avatarURL} roundedCircle />
                    </div>
                    <div className="details">
                        <Card.Title>Would You Rather...</Card.Title>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = ({ users, questions, authedUser }, ownProps) => {
    return {
        que: questions[ownProps.id],
        user: users[questions[ownProps.id].author],
        authedUser
    }
}

export default connect(mapStateToProps)(UnAnswered) 