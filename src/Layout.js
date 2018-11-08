import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HttpsRedirect from 'react-https-redirect';

import Entry from 'components/Entry';

import 'styles/css/normalize.css';
import 'styles/sass/base.css';


class Layout extends Component {
  render() {
    return (
 
        <div className="layout">
          <Router>
            <Switch>
              <Route path="/" component={Entry}/>
            </Switch>
          </Router>
        </div>

    );
  }
}

export default Layout;
