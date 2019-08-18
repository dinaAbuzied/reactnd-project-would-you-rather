import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { setPath } from "../../actions/path";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import "./NewQuestion.css"


class NewQuestion extends Component {
    state = {
        firstQue: '',
        secondQue: ''
    }
    addFirstQue = (value) => {
        this.setState({
            firstQue: value.trim()
        })
    }
    addSecondQue = (value) => {
        this.setState({
            secondQue: value.trim()
        })
    }
    render() {
        const { changePath } = this.props;
        return (
            <div className="new-question">
                <Card>
                    <Card.Header>
                        <Card.Title className="align-center">Create New Question</Card.Title>
                    </Card.Header>
                    <Card.Body>
                        <label>Complete the Question</label>
                        <Card.Subtitle>Would You Rather...</Card.Subtitle>
                        <Form>
                            <Form.Group controlId="questionsForm">
                                <Form.Control type="text" onChange={(event) => this.addFirstQue(event.target.value)} placeholder="Enter Option One Text Here" />
                                <Form.Text>OR</Form.Text>
                                <Form.Control type="text" onChange={(event) => this.addSecondQue(event.target.value)} placeholder="Enter Option Two Text Here" />
                            </Form.Group>
                        </Form>
                        <Link onClick={() => changePath("/home")} disabled={this.state.firstQue === '' || this.state.secondQue === ''} className="btn btn-primary" to='/home'>Submit</Link>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = ({ authedUser }) => {
    return {
        authedUser
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePath: (path) => dispatch(setPath(path))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion) 