import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Content from "./components/content";
import Loading from "./components/loading";

class App extends Component {
  state = {
    stnk: null,
    loading: true,
    angka: 0
  };

  componentDidMount() {
    window.setTimeout(() => {
      this.setState({
        stnk: [
          { nama: "bobi", kendaraan: "ambulan", warna: "hotpink" },
          { nama: "dzaky", kendaraan: "mrt", warna: "orange kaya shopee" },
          { nama: "anya", kendaraan: "busway", warna: "ungu" }
        ],
        loading: false
      });
    }, 1000);
  }

  tambahAngkaonclick = a => {
    this.setState(prevstate => {
      return {
        angka: prevstate.angka + a
      };
    });
  };

  render() {
    const { loading, stnk } = this.state;
    if (loading) {
      return (
        <div>
          <center>
            <Loading />
          </center>
        </div>
      );
    }

    return (
      <div>
        <Header namauser={"Fakhran"} />
        <div>{this.state.angka}</div>
        <Content stnk1={stnk} tambahangka={this.tambahAngkaonclick} />
      </div>
    );
  }
}

export default App;
