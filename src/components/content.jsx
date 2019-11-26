import React, { Component } from "react";

class Content extends Component {
  state = {};
  renderStnk = () => {
    var jsx = this.props.stnk1.map((val, index) => {
      //this.props.stnk1== ini menunjuk ke stnk1 di App.js
      //(stnk1 ini tampungan dari stnk didalam objek state )
      return (
        <div key={index} className="col-md-4 px-5" style={{ border: "2px solid black" }}>
          <div>{val.nama}</div>
          <div>{val.kendaraan}</div>
          <div>{val.warna}</div>
        </div>
      );
    });
    // console.log(jsx);
    return jsx;
  };

  render() {
    return (
      <div className="row mx-5">
        {this.renderStnk()}
        <div className="d-flex">
          <button onClick={() => this.props.tambahangka(1)}>+</button>
          <button>-</button>
        </div>
      </div>
    );
  }
}

export default Content;
