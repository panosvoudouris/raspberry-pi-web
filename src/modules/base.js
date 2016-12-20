import config from '../config';

class Base {
  constructor() {
    this.host = config.host;
  }

  get endpoint() {
    return `http://${this.host}:8080/${this.route}`;
  }

}

export default Base;
