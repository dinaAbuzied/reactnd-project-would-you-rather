import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import "./User.css"

class User extends Component {
    render() {
        const { user } = this.props;
        return (
            <Card className="user">
                <div className="img-container">
                    <Image src={"assets/img/" + user.avatarURL} roundedCircle />
                </div>
                <div className="details">
                    <Card.Title>{user.name}</Card.Title>
                    <p>
                        Answered Questions
                    <span>{Object.keys(user.answers).length}</span>
                    </p>
                    <p>
                        Created Questions
                    <span>{user.questions.length}</span>
                    </p>
                </div>
                <Card className="score">
                    <Card.Header>
                        <Card.Subtitle className="align-center">Score</Card.Subtitle>
                    </Card.Header>
                    <Card.Body className="align-center">
                        {Object.keys(user.answers).length + user.questions.length}
                    </Card.Body>
                </Card>
            </Card>
        )
    }
}

export default User;