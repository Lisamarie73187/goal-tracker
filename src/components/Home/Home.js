import React, { Component } from 'react';
import Header from '../Header/Header'
import Dashboard from '../Home/Dashboard/Dashboard';


class Home extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Dashboard/>
      </div>
    );
  }
}

export default Home;
