import $ from 'jquery';

class InputSensor {
  get endpoint() {
    return `http://${this.host}/${this.route}`;
  }

  constructor(service_type, route) {
    this.host = 'pi';
    this.service_type = service_type;
    this.route = route;

    console.log(`Starting ${this.service_type}`);

    $(`#${this.route} .refresh-button`).click(this.refresh.bind(this))
  }

  refresh() {
    $(`#${this.route}`).addClass('is-loading');
    fetch( this.endpoint, {
    	method: 'get'
    }).then( (response) => {
      $(`#${this.route}`).removeClass('is-loading');
      console.log(`Response ${response} from ${this.endpoint}`);
    }).catch( (err) => {
      $(`#${this.route}`).removeClass('is-loading');
    	console.log(`Error ${err} while trying to access ${this.endpoint}`);
    });
  }
};

export default InputSensor;
