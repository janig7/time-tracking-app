import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import TimerDashboard from './Components/TimerDashboard';

ReactDOM.render(
  <React.StrictMode>
    <TimerDashboard />
  </React.StrictMode>,
  document.getElementById('root')
);
