import React, { Component } from 'react';

import { Link, Route } from 'react-router-dom';
import routesConfig from './routesConfig';

import './App.css';
import Logo from './imgnav.png'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="container_nav">
          <img src={Logo} className="logo" alt="logo"/> 
          <div className="nav_links">
            <Link to="/">Home</Link>
            <Link to="/phrases">Phrases</Link>
          </div>
        </div>
        {routesConfig.map((value, key) => {
          return <Route
            key={key}
            path={value.path}
            component={value.component}
            exact={value.exact}
          />
        })}
      </div>
    );
  }
}

export default App;
