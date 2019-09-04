import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { handleSaveQuestion } from "../../actions/shared";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import "./NewQuestion.css";


class NewQuestion extends Component {
    state = {
        firstQue: '',
        secondQue: '',
        loading: false,
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
        const { authedUser, saveQuestion } = this.props;
        this.setState({
            loading: true
        })
        saveQuestion(authedUser.id, this.state.firstQue, this.state.secondQue).then(() => {
                this.setState({
                    redirect: true
                })
            });
    }
    render() {
        if (this.state.redirect) {
            return <Redirect push to="/home" />;
        }
        const { loading, firstQue, secondQue} = this.state;
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
                            <Button disabled={firstQue === '' || secondQue === '' || loading} onClick={(event) => this.onSubmit(event)} variant="primary" type="submit">
                                {
                                    loading ? (
                                        <Fragment>
                                            <Spinner
                                                as="span"
                                                animation="border"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Submiting
                                        </Fragment>) : (
                                            "Submit"
                                        )

                                }
                            </Button>
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

const mapDispatchToProps = dispatch => {
    return {
        saveQuestion: (author, optionOneText, optionTwoText) => {
            return dispatch(handleSaveQuestion(
                {
                    author,
                    optionOneText,
                    optionTwoText
                },
                "/home"))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion) 