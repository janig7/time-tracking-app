import React, { Component } from 'react';

export default class Timer extends Component {
  render() {
    return (
      <div className="ui centered card">
        <div className="cntent">
          <div className="header">{this.props.title}</div>
          <div className="meta">{this.props.project}</div>
          <div className="center aligned description">
            <h2>DESCRIPTION</h2>
          </div>
          <div className="extra content">
            <span className="right floated edit icon">
              <i className="edit icon"></i>
            </span>
            <span className="right floated trash icon">
              <i className="trash icon"></i>
            </span>
          </div>
        </div>
        <div className="ui bottom attached blue basic button">Start</div>
      </div>
    );
  }
}
