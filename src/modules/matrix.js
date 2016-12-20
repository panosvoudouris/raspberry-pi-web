import $ from 'jquery';
import Base from './base';

const e = [0, 0, 0];
const active = [255, 255, 255];

class Matrix extends Base {
  constructor() {
    super();
    this.route = 'matrix';
    this.autoUpdate = false;

    this.matrix = [
      e, e, e, e, e, e, e, e,
      e, e, e, e, e, e, e, e,
      e, e, e, e, e, e, e, e,
      e, e, e, e, e, e, e, e,
      e, e, e, e, e, e, e, e,
      e, e, e, e, e, e, e, e,
      e, e, e, e, e, e, e, e,
      e, e, e, e, e, e, e, e,
    ];

    console.log('Starting 8x8 Matrix');
    $('#matrix-display').click(this.updateMatrix.bind(this));
    $('#matrix-update').change(this.autoUpdateToggle.bind(this));
  }

  autoUpdateToggle() {
    this.autoUpdate = $('#matrix-update:checked').length > 0;
    if (this.autoUpdate) {
      this.send();
    }
  }

  updateMatrix(event) {
    const col = event.target.cellIndex;
    const row = event.target.parentElement.rowIndex;

    if ($(event.target).hasClass('active')) {
      $(event.target).removeClass('active');
      this.matrix[(row * 8) + col] = e;
    } else {
      $(event.target).addClass('active');
      this.matrix[(row * 8) + col] = active;
    }

    if (this.autoUpdate) {
      this.send();
    }
  }

  send() {
    const matrix = this.matrix;
    /* eslint-disable */
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    fetch( this.endpoint, {
      method: 'POST',
      mode: 'no-cors',
      headers,
      body: JSON.stringify({ matrix }),
    }).then((response) => {
      console.log(`Success sending ${matrix} to ${this.endpoint}`);
    }).catch((err) => {
      console.log(`Error ${err} while sending ${matrix} to ${this.endpoint}`);
    });
    /* eslint-enable */
  }
}

export default Matrix;
