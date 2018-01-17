import React, { Component } from 'react';
import Header from '../Header/Header';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Dashboard from '../Home/Dashboard/Dashboard';
import GoalCards from '../Home/GoalCards/GoalCards';
import '../styles.css';
import Footer from '../Footer/Footer';




class Home extends Component {
  

  render() {
    return (
      <div> 
        <div className="homePage">
          {!this.props.user && 
            <div>
              <Header/>
              <div style={uhoh} className="rapper">
                <div className="goalTitle">
                  uh oh... You must <Link className="textyText" to="/">log in</Link>
                </div>
                  <div><img src="https://s3-us-west-1.amazonaws.com/goalsytracker/giphy_2.gif" alt="dancing banana"/></div>
              </div>
            </div>}
            {this.props.user &&
              <div>
                <Header/>
                <Dashboard/>
                <div>
                  <GoalCards/>
                </div>
                  <Footer/>
              </div>
            }
        </div>
      </div>
    );
  }
}

const uhoh = {
  height: '100vh',
  padding: '30px'
}
function mapStateToProps(state) {
  return {
    user: state.user
  }
}


export default connect(mapStateToProps)(Home)
