import React, { Component } from 'react';
import Helpers from '../helpers';
import TimerActionButton from './TimerActionButton';

const helper = new Helpers();
export default class Timer extends Component {
  componentDidMount() {
    this.forceUpdateInterval = setInterval(() => this.forceUpdate(), 50);
  }
  componentWillUnmount() {
    clearInterval(this.forceUpdateInterval);
  }
  handleTrashClick = () => {
    this.props.onTrashClick(this.props.id);
  };
  handleStartClick = () => {
    this.props.onStartClick(this.props.id);
  };
  handleStopClick = () => {
    this.props.onStopClick(this.props.id);
  };
  render() {
    const elapsedString = helper.renderElapsedString(
      this.props.elapsed,
      this.props.runningSince
    );
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
        <TimerActionButton
          timerIsRunning={!!this.props.runningSince}
          onStartClick={this.handleStartClick}
          onStopClick={this.handleStopClick}
        />
      </div>
    );
  }
}
