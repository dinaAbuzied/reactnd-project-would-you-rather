import React, { Component } from 'react';
import NotFound404 from "../assets/img/404.svg";

class NotFound extends Component {
  render() {
    return (
      <div className="not-found">
        <img src={NotFound404} alt="Page Not Found" />
      </div>
    )
  }
}

export default NotFound;
