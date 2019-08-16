import React, { Component } from 'react';
import { connect } from "react-redux";

class LoginDialog extends Component {
    render() {
        return (
            <div className="login-dialog">
                <header>
                    <h1>Welcome to The Would You Rather App!</h1>
                    <h2>Please sign in to continue</h2>
                </header>
                <main>
                    <h3>Sgin in</h3>
                </main>
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return { users }
}

export default connect(mapStateToProps)(LoginDialog) 