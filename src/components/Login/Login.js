import React, { Component } from 'react';
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import { handleRecieveUsers } from "../../actions/users";
import LoginDialog from "./LoginDialog"

class Login extends Component {
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(handleRecieveUsers());
    }
    render() {
        const { loading } = this.props;
        return (
            <div>
                <LoadingBar />
                {loading === true
                    ? null
                    : <LoginDialog />}
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return { 
        loading: Object.entries(users).length === 0 && users.constructor === Object
    }
}

export default connect(mapStateToProps)(Login) 