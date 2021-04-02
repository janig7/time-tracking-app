import React, { Component } from 'react';
import Helpers from '../helpers';

const helper = new Helpers();
export default class Timer extends Component {
  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };
  render() {
    const elapsedString = helper.renderElapsedString(this.props.elapsed);
    return (
      <div className="ui centered card">
        <div className="cntent">
          <div className="header">{this.props.title}</div>
          <div className="meta">{this.props.project}</div>
          <div className="center aligned description">
            <h2>{elapsedString}</h2>
          </div>
          <div className="extra content">
            <span
              className="right floated edit icon"
              onClick={this.props.onEditClick}
            >
              <i className="edit icon"></i>
            </span>
            <span className="right floated trash icon">
              <i className="trash icon" onClick={this.handleTrashClick}></i>
            </span>
          </div>
        </div>
        <div className="ui bottom attached blue basic button">Start</div>
      </div>
    );
  }
}
