import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { setPath } from "../../actions/path";
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import "./Question.css";


class Question extends Component {

    render() {
        const { que, user, changePath } = this.props;
        return (
            <Card className="question">
                <Card.Header>
                    <Card.Subtitle>{user.name + " asks:"}</Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <div className="img-container">
                        <Image src={"assets/img/" + user.avatarURL} roundedCircle />
                    </div>
                    <div className="details">
                        <Card.Subtitle>Would You Rather</Card.Subtitle>
                        <p>{"..." + que.optionOne.text + "..."}</p>
                        <Link onClick={() => changePath("/questions/:" + que.id)} to={"/questions/:" + que.id} className="btn btn-primary">
                            View Poll
                        </Link>
                    </div>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = ({ users }, ownProps) => {
    return {
        user: users[ownProps.que.author]
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePath: (path) => dispatch(setPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Question)