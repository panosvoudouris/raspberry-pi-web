/* eslint-disable */

import 'material-design-lite/material.min';
import './style.less';
import InputSensor from './modules/input-sensor';
import Matrix from './modules/matrix';
import Text from './modules/text';

// Startup
(() => {
  console.log('Starting up...');

  const inputSensors = [
    new InputSensor('Temperature', 'temperature'),
    new InputSensor('Pressure', 'pressure'),
    new InputSensor('Humidity', 'humidity'),
    new InputSensor('Orientation', 'orientation'),
  ];

  const outputs = [
    new Text(),
    new Matrix()
  ]


})();
