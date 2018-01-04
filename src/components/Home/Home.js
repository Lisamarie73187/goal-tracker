import React, { Component } from 'react';
import Header from '../Header/Header'
import Dashboard from '../Home/Dashboard/Dashboard';
import GoalListings from '../Home/GoalListings/GoalListings';
import '../styles.css';
import Footer from './Footer/Footer';


class Home extends Component {
  render() {
    return (
      <div className="homePage">
          <Header/>
          <Dashboard/>
          <div>
          <GoalListings/>
          </div>
          <Footer/>
      </div>
    );
  }
}



export default Home;
