import $ from 'jquery';

class InputSensor {
  constructor(service_type, route) {
    this.host = 'pi';
    this.service_type = service_type;
    this.route = route;

    console.log(`Starting ${this.service_type}`);

    $(`#${this.route} .refresh-button`).click(this.refresh.bind(this));
  }

  get endpoint() {
    return `http://${this.host}:8080/${this.route}`;
  }

  refresh() {
    $(`#${this.route}`).addClass('is-loading');
    fetch( this.endpoint, {
    	method: 'GET'
    }).then( (response) => {
      // A few assumptions here but hey...
      return response.json()
        .then((response) => {
          $(`#${this.route}`).removeClass('is-loading');
          console.log(`Response ${response.data} from ${this.endpoint}`);
          $(`#${this.route} h1`).text(parseInt(response.data));
        });
    }).catch( (err) => {
      $(`#${this.route}`).removeClass('is-loading');
    	console.log(`Error ${err} while trying to access ${this.endpoint}`);
      $(`#${this.route} h1`).text('...');
    });
  }
};

export default InputSensor;
