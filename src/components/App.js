import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
import { handleInitData } from "../actions/shared";
import Login from './Login/Login';
import Home from "./Home/Home";
import AppNav from "./AppNav/AppNav";

class App extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch(handleInitData(location.pathname === "/login" ? "/home" : location.pathname));
    console.log(this.props);
  }
  render() {
    const { authedUser } = this.props
    return (
      <div className="App">
        {
          !authedUser ? (
            <Redirect to="/login" />
          ) :
            <AppNav />
        }
        <Route exact path="/login" render={() => (
          <Login />
        )} />
        <Route exact path="/home" render={() => (
          <Home />
        )} />
      </div>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(App));
