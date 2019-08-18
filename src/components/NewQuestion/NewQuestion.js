import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { handleSaveQuestion } from "../../actions/shared";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./NewQuestion.css"


class NewQuestion extends Component {
    state = {
        firstQue: '',
        secondQue: '',
        redirect: false
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
    onSubmit = (event) => {
        event.preventDefault();
        const { dispatch, authedUser } = this.props;
        dispatch(handleSaveQuestion(
            {
                author: authedUser.id,
                optionOneText: this.state.firstQue,
                optionTwoText: this.state.secondQue
            },
            "/home")).then(() => {
                this.setState({
                    redirect: true
                })
            });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/home" />;
        }
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
                            <Button disabled={this.state.firstQue === '' || this.state.secondQue === ''} onClick={(event) => this.onSubmit(event)} variant="primary" type="submit">Submit</Button>
                        </Form>
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

export default connect(mapStateToProps)(NewQuestion) 