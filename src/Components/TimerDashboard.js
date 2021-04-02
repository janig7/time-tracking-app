import React, { Component } from 'react';
import EditableTimerList from './EditableTimerList';
import ToggleableTimerForm from './ToggleableTimerForm';
import Helpers from '../helpers';

const helpers = new Helpers();

export default class TimerDashboard extends Component {
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

  handleEditFormSubmit = attrs => {
    this.updateTimer(attrs);
  };
  handleCreateFormSubmit = timer => {
    this.createTimer(timer);
  };
  handleTrashClick = timerId => {
    this.deleteTimer(timerId);
  };
  deleteTimer = timerId => {
    this.setState({
      timers: this.state.timers.filter(t => t.id !== timerId),
    });
  };
  createTimer = timer => {
    const t = helpers.newTimer(timer);
    this.setState({
      timers: this.state.timers.concat(t),
    });
  };
  updateTimer = attrs => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timer.id === attrs.id) {
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project,
          });
        } else {
          return timer;
        }
      }),
    });
  };

  render() {
    return (
      <div className="ui three column centered grid">
        <div className="column">
          <EditableTimerList
            timers={this.state.timers}
            onFormSubmit={this.handleEditFormSubmit}
            onTrashClick={this.handleTrashClick}
          />
          <ToggleableTimerForm
            isOpen={true}
            onFormSubmit={this.handleCreateFormSubmit}
          />
        </div>
      </div>
    );
  }
}
