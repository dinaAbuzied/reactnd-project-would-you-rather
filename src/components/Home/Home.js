import React, { Component } from 'react';
import { connect } from "react-redux";


class Home extends Component {
    render() {
        return (
           <div>
               Home!
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return {
        // usersArr: Object.keys(users).map((user) => {
        //     return users[user];
        // })
    }
}

const mapDispatchToProps = dispatch => {
    return {
    //   signIn: (user) => dispatch(setAuthedUser(user))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home) 