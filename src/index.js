import './style.less';
import 'material-design-lite/material.min.js';
import InputSensor from './modules/input-sensor';
import Matrix from './modules/matrix';

// Startup
(() => {
  console.log('Starting up...');

  const inputSensors = [
    new InputSensor('Temperature', 'temperature'),
    new InputSensor('Pressure', 'pressure'),
    new InputSensor('Humidity', 'humidity'),
    new InputSensor('Orientation', 'orientation'),
  ];
})();
