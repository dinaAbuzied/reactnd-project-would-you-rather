import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import { Route, Redirect, Switch } from 'react-router-dom';
import { withRouter } from "react-router";
import { handleInitData } from "../actions/shared";
import Login from './Login/Login';
import Home from "./Home/Home";
import Leaderboard from "./Leaderboard/Leaderboard";
import AppNav from "./AppNav/AppNav";
import ViewQuestion from "./ViewQuestion/ViewQuestion";
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
      <Fragment>
        {
          !authedUser ?
            <Fragment>
              <Redirect to="/login" />
              <Route path="/login" exact component={Login} />
            </Fragment>
            :
            <Fragment>
              <AppNav />
              {/* TODO: remove AppNav from 404 page */}
              <Switch>
                <Route path="/home" exact component={Home} />
                <Route path="/leaderboard" exact component={Leaderboard} />
                <Route path="/add" exact component={NewQuestion} />
                <Route path="/questions/:question_id" exact component={ViewQuestion} />
                <Route path="/login" exact component={Login} />
                <Route component={NotFound} />
              </Switch>
            </Fragment>
        }
      </Fragment>
    )
  }
}

const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(App));
