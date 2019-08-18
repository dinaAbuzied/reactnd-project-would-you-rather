import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import { handleInitData } from "../actions/shared";
import Login from './Login/Login';
import Home from "./Home/Home";
import Leaderboard from "./Leaderboard/Leaderboard";
import AppNav from "./AppNav/AppNav";
import NotFound from "./NotFound";
import NewQuestion from "./NewQuestion/NewQuestion";

class App extends Component {
  componentDidMount() {
    const { dispatch, location } = this.props;
    dispatch(handleInitData(location.pathname));
  }
  render() {
    const { authedUser } = this.props
    return (
      <div className="App">
        {
          !authedUser ?
            <Redirect to="/login" />
          :
            <AppNav />
        }
        {/* TODO: remove AppNav from 404 page */}
        <Switch>
          <Route path="/home" exact component={Home} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/add" exact component={NewQuestion} />
          <Route path="/login" exact component={Login} />
          <Route component={NotFound} />
        </Switch>
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
