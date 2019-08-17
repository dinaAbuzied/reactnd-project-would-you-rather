import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { setAuthedUser } from "../../actions/authedUser";
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import "./LoginDialog.css"


class LoginDialog extends Component {
    state = {
        selectedUser: null
    }
    selectUser = (user) => {
        this.setState({
            selectedUser: user
        })
    }
    render() {
        const { usersArr, path, signIn } = this.props;
        console.log(this.props);
        return (
            <Card className="login-dialog">
                <Card.Header>
                    <Card.Title className="align-center">Welcome to The Would You Rather App!</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted align-center">Please sign in to continue</Card.Subtitle>
                </Card.Header>
                <Card.Body>
                    <Dropdown>
                        <Dropdown.Toggle variant="" id="users-dropdown">
                            {this.state.selectedUser ?
                                <div>
                                    <div className="img-container">
                                        <Image src={"../../assets/img/" + this.state.selectedUser.avatarURL} roundedCircle />
                                    </div>
                                    {this.state.selectedUser.name}
                                </div> :
                                "Select User"}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            {
                                usersArr.map((user) => (
                                    <Dropdown.Item onSelect={() => this.selectUser(user)} key={user.id}>
                                        <div className="img-container">
                                            <Image src={"../../assets/img/" + user.avatarURL} roundedCircle />
                                        </div>
                                        {user.name}
                                    </Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                    <Link disabled={!this.state.selectedUser} className="btn btn-primary" onClick={() => signIn(this.state.selectedUser)} to={path}>Sign in</Link>
                </Card.Body>
            </Card>
        )
    }
}

const mapStateToProps = ({ users, path }) => {
    return {
        usersArr: Object.keys(users).map((user) => {
            return users[user];
        }),
        path
    }
}

const mapDispatchToProps = dispatch => {
    return {
      signIn: (user) => dispatch(setAuthedUser(user))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(LoginDialog) 