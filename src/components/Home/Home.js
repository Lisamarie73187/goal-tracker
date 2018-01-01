import React, { Component } from 'react';
import Header from '../Header/Header'
import Dashboard from '../Home/Dashboard/Dashboard';
import GoalListings from '../Home/GoalListings/GoalListings';
import '../Home/Home.css';


class Home extends Component {
  render() {
    return (
      <div className="homePage">
          <Header/>
          <Dashboard/>
          <div>
          <GoalListings/>
          </div>
      </div>
    );
  }
}



export default Home;
