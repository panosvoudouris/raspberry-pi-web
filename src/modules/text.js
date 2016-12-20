import $ from 'jquery';
import Base from './base';

class Text extends Base {
  constructor() {
    super();
    this.route = 'show';

    console.log('Starting Text');

    $('#display-text .send-button').click(this.send.bind(this));
  }

  send() {
    const message = $('#display-text-input').val();
    const speed = $('#display-speed-input').val();
    console.log(message, speed);

    /* eslint-disable */
    const headers = new Headers({
  		'Content-Type': 'application/json'
    });

    fetch(this.endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers,
      body: JSON.stringify({
        message,
        speed,
      }),
    }).then((response) => {
      console.log(`Success sending ${message} & ${speed} to ${this.endpoint}`);
    }).catch((err) => {
      console.log(`Error ${err} while sending text to ${this.endpoint}`);
    });
  }
  /* eslint-enable */
}

export default Text;
