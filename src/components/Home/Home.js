import React, { Component } from 'react';
import Header from '../Header/Header';
// import {Link} from 'react-router-dom';
import Dashboard from '../Home/Dashboard/Dashboard';
import GoalListings from '../Home/GoalListings/GoalListings';
import '../styles.css';
import Footer from './Footer/Footer';

import axios from 'axios';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        data: []
    }
}

  componentDidMount() {
    return axios.get('/api/goals').then(res => {
        console.log(res.data)
        this.setState ({
            data: res.data
        })
    })
}
  render() {
    return (
      <div> 
        <div className="homePage">
          <Header/>
          <Dashboard/>
          <div>
          <GoalListings/>
          </div>
          <Footer/>
        </div>
      </div>
    );
  }
}

// const fullPage = {
//   height: '100vh',
//   padding: '70px',
// }

// const innerPage = {
//   height: '90vh',
//   padding: '40px'
// } 

// const theButton = {
//   width: '20vw',
//   margin: 'auto',
//   textAlign: 'center'
// }

// const pic = {
//   backgroundColor: 'black',
//   height: '400px',
//   marginBottom: '50px'
// }



export default Home;
