import $ from 'jquery';

class Matrix {
  constructor() {
    this.host = 'pi';
    this.route = 'show';

    console.log(`Starting 8x8 Matrix`);
    $("#matrix").click(this.updateMatrix.bind(this));
  }

  updateMatrix(event) {
    const col = event.target.cellIndex;
    const row = event.target.parentElement.rowIndex;
    console.log(row, col);
  }

  send() {
    // const headers = new Headers({
    //   'Content-Type': 'application/json'
    // });
    //
    // fetch( this.endpoint, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: headers,
    //   body: JSON.stringify({
    //
    //   })
    // }).then( (response) => {
    //   console.log(`Success sending ${message} & ${speed} to ${this.endpoint}`);
    // }).catch( (err) => {
    //   console.log(`Error ${err} while sending text to ${this.endpoint}`);
    // });
  }
};

export default Matrix;
