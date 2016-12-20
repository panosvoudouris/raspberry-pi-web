import $ from 'jquery';
import Base from './base';

class InputSensor extends Base {
  constructor(serviceType, route) {
    super();
    this.serviceType = serviceType;
    this.route = route;

    console.log(`Starting ${this.serviceType}`);

    $(`#${this.route} .refresh-button`).click(this.refresh.bind(this));
  }

  refresh() {
    $(`#${this.route}`).addClass('is-loading');
    /* eslint-disable */
    fetch(this.endpoint, {
      method: 'GET'
    }).then((response) => {
      /* eslint-enable */
      // A few assumptions here but hey...
      return response.json()
        .then((jsonResponse) => {
          $(`#${this.route}`).removeClass('is-loading');
          console.log(`Response ${jsonResponse.data} from ${this.endpoint}`);
          $(`#${this.route} h1`).text(parseInt(jsonResponse.data, 10));
        });
    }).catch((err) => {
      $(`#${this.route}`).removeClass('is-loading');
      console.log(`Error ${err} while trying to access ${this.endpoint}`);
      $(`#${this.route} h1`).text('...');
    });
  }
}

export default InputSensor;
