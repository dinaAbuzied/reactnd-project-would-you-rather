import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { handleSaveQuestionAnswer } from '../../actions/shared';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import "./UnAnswered.css";

class UnAnswered extends Component {
    state = {
        selectedAns: null,
        loading: false
    }
    selectAns = (ans) => {
        this.setState({
            selectedAns: ans
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        const { authedUser, id, saveAnswer } = this.props;
        this.setState({
            loading: true
        });
        saveAnswer(authedUser.id, id, this.state.selectedAns);
    }
    render() {
        const { user, que } = this.props;
        const { loading } = this.state;
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
                        <Form>
                            <div>
                                <Form.Check
                                    type='radio'
                                    id='optionOne'
                                    name='vote'
                                    label={que.optionOne.text}
                                    onChange={() => { this.selectAns('optionOne') }}
                                />

                                <Form.Check
                                    type='radio'
                                    id='optionTwo'
                                    name='vote'
                                    label={que.optionTwo.text}
                                    onChange={() => { this.selectAns('optionTwo') }}
                                />
                            </div>
                        </Form>
                        <Button
                            disabled={!this.state.selectedAns || loading}
                            onClick={(event) => this.onSubmit(event)}
                            variant="primary"
                            type="submit">
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

const mapDispatchToProps = dispatch => {
    return {
        saveAnswer: (authedUser, qid, answer) => {
            return dispatch(handleSaveQuestionAnswer(
                authedUser,
                qid,
                answer))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UnAnswered) 