import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { setPath } from "../../actions/path";
import { removeAuthedUser } from "../../actions/authedUser";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import "./AppNav.css"


class AppNav extends Component {
    render() {
        const { path, authedUser, changePath, signout } = this.props;
        return (
            <Navbar className="app-nav">
                <Nav variant="tabs">
                    <Nav.Item>
                        <Link onClick={() => changePath("/home")} className={path === "/home" ? "active nav-link" : "nav-link"} to="/home">Home</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link onClick={() => changePath("/newQuestions")} className={path === "/newQuestions" ? "active nav-link" : "nav-link"} to="/newQuestions">New Questions</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link onClick={() => changePath("/Leaderboard")} className={path === "/Leaderboard" ? "active nav-link" : "nav-link"} to="/Leaderboard">Leaderboard</Link>
                    </Nav.Item>
                </Nav>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        {"Hello, " + authedUser.name}
                    </Navbar.Text>
                    <div className="img-container">
                        <Image src={"assets/img/" + authedUser.avatarURL} roundedCircle />
                    </div>
                    <Nav.Item>
                        <Link onClick={() => signout()} className="nav-link" to="/login">Logout</Link>
                    </Nav.Item>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

const mapStateToProps = ({ authedUser, path }) => {
    return {
        authedUser,
        path
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changePath: (path) => dispatch(setPath(path)),
        signout: () => {
            dispatch(setPath("/home"));
            dispatch(removeAuthedUser());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppNav) 