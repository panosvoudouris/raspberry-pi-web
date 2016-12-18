import $ from 'jquery';

class Text {
  constructor() {
    this.host = 'pi';
    this.route = 'show';

    console.log(`Starting Text`);

    $("#display-text .send-button").click(this.send.bind(this));
  }

  get endpoint() {
    return `http://${this.host}:8080/${this.route}`;
  }

  send() {
    const message = $('#display-text-input').val();
    const speed = $('#display-speed-input').val();
    console.log(message, speed);

    const headers = new Headers({
  		'Content-Type': 'application/json'
    });

    fetch( this.endpoint, {
    	method: 'POST',
      mode: 'no-cors',
      headers: headers,
      body: JSON.stringify({
              message,
              speed
            })
    }).then( (response) => {
      console.log(`Success sending ${message} & ${speed} to ${this.endpoint}`);
    }).catch( (err) => {
      console.log(`Error ${err} while sending text to ${this.endpoint}`);
    });

  }
};

export default Text;
