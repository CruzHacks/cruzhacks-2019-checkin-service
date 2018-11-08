import React, {Component} from 'react';
import logo from 'assets/logo.svg';

import QrReader from "react-qr-reader";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 300,
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
        <h1 className="entry__title">Scan hacker's QR code!</h1>
        <img src={logo} alt="logo" className="entry__logo"/>
          <QrReader
            delay={this.state.delay}
            onError={this.handleError}
            onScan={this.handleScan}
            className="entry__qrReader"
            
            
          />
          <h1 className="entry__qrReader__title">{this.state.result}</h1>
      </div>
    );
  }
}

export default Entry;
