import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import axios from 'axios';
import './goalListings.css';
import { connect } from 'react-redux';
import { goals } from '../../../ducks/reducer'
import ProgressBar from './ProgressBar/ProgressBar';




class GoalListings extends Component {
   

    componentDidMount() {
        this.props.goals()
    }
   
    render() {
        return (
            <div className="why">
            {this.props.data.map((e)=>{
                 return (
                    <div key={e.goalsid}>
                        <div className="rapper" style={heighty0}>
                            <div className="titleText">{e.goalname}</div>
                            <div className="dates">Goal Date <br/>{e.enddate}</div>
                            <ProgressBar percent="70"/>
                            <div style={layoutButton}>
                            <Link className="noDecor" to={`/goal/${e.goalsid}`}><span className="buttonGoal">Go to Goal</span></Link>
                            </div>
                        </div>
                    </div>
                    )
                 })
                }
            </div>
        )
    }
}

const layoutButton = {
    marginTop: '40px'
}

var heighty0 = {
    height: '425px',
}

function mapStateToProps(state) {
    return {
      data: state.data
    };
  };

const mapDispatchToProps = {
    goals: goals,
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(GoalListings);

