import React, { Component } from 'react';
import { connect } from "react-redux";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import AnsweredQuestion from './AnsweredQuestion';

class Answered extends Component {
    render() {
        const { user, id } = this.props;
        return (
            <Card className="answered">
                <Card.Header>
                    <Card.Title>
                        {
                            "Asked by " + user.name
                        }
                    </Card.Title>
                </Card.Header>
                <Card.Body>
                    <div className="img-container">
                        <Image src={"../assets/img/" + user.avatarURL} roundedCircle />
                    </div>
                    <div className="details">
                        <Card.Title>Results</Card.Title>
                        <AnsweredQuestion
                            id={id}
                            option="optionOne" />
                        <AnsweredQuestion
                            id={id}
                            option="optionTwo" />
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = ({ users, questions }, ownProps) => {
    return {
        user: users[questions[ownProps.id].author]
    }
}

export default connect(mapStateToProps)(Answered) 