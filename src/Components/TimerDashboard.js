import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import Helpers from '../helpers';

const helpers = new Helpers();

export default class TimerDashboard extends Component {
  handleCreateFormSubmit = timer => {
    this.createTimer(timer);
  };

  createTimer = timer => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };
  state = {
    timers: [
      {
        title: 'Practice squat',
        project: 'Gym Chores',
        id: 1,
        elapsed: 5456099,
        runningSince: Date.now(),
      },
      {
        title: 'Bake squash',
        project: 'Kitchen Chores',
        id: 2,
        elapsed: 1273998,
        runningSince: null,
      },
    ],
  };
  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList timers={this.state.timers} />
          <ToggleableTimerForm
            isOpen={true}
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}
