import React, {Component} from 'react';
import logo from 'assets/logo.svg';

import QrReader from "react-qr-reader";

const reader = {
    border: "100px solid rgba(0, 0, 0, 0.3)",
  };

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
      resolution: 300,
      result: "No result"
    };
    this.handleScan = this.handleScan.bind(this);
  }
  
  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  
  handleError(err) {
    alert(err);
  }
  
  render() {
    return (
      <div className="entry">
      <img src={logo} alt="logo" className="entry__logo"/>
        <h1 className="entry__title">Scan hacker's QR code!</h1>
          <QrReader
            delay={this.state.delay}
            resolution={this.state.resolution}
            onError={this.handleError}
            onScan={this.handleScan}
            //style={reader}
            className="entry__qrReader"
          />
          <h1 className="entry__qrReader__title">{this.state.result}</h1>
          <form>
            <input className="entry__email" placeholder="Or enter hacker email..."></input>
          </form>
      </div>
    );
  }
}

export default Entry;
