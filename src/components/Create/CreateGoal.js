import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGoal } from '../../ducks/reducer'
import { Link } from 'react-router-dom'


import Header from '../Header/Header';
import Footer from '../Home/Footer/Footer';


class CreateGoal extends Component {
    constructor() {
        super()
        this.state = {
            goalNameInput: '',
            goalDescInput: '',
            startDate: '',
            endDate: '',
        }
    }
    
    handleNameChange ( value ){
        console.log(value)
        this.setState({ goalName: value})
    }
    handleDescChange ( value ){
        console.log(value)
        this.setState({ goalDesc: value})
    }
    handleStartDateChange ( value ){
        console.log(value)
        this.setState({ startDate: value})
    }
    handleEndDateChange ( value ){
        console.log(value)
        this.setState({ endDate: value})
    }

    

    render() {
        return (
            <div className="homePage">
                <Header/>
                <div className="rapperLarge">
                    <div className="titleText">Create your Goal</div>
                    <p>Create a goal. You are able to create up to 10 goals. Once you create a goal <br/>
                    you can add tasks to it.</p>
                    <form className="formyForm">
                        <input 
                            className="inputs" 
                            type="text" 
                            value={this.state.value}
                            onChange={ (e) => this.handleNameChange(e.target.value)}
                            placeholder="Goal Title (20 character limit)"/>
                        <input 
                            className="inputs" 
                            type="text" 
                            value={this.state.value}
                            onChange={ (e) => this.handleDescChange(e.target.value)}
                            placeholder="Goal Description"/>
                        <input 
                            className="datess" 
                            type="text" 
                            value={this.state.value}
                            onChange={(e) => this.handleStartDateChange(e.target.value)}
                            placeholder="Start Date"/>
                        <input 
                            className="datess" 
                            type="text" 
                            value={this.state.value}
                            onChange={(e) => this.handleEndDateChange(e.target.value)}                            
                            placeholder="End Date"/>
                        <div>
                            <button type="reset"style={buttonLarger} className="buttonGoal">Reset</button>
                            <Link to="/home"><button onClick={() => this.props.addGoal({
                                goalName: this.state.goalName,
                                goalDesc: this.state.goalDesc,
                                stateDate: this.state.startDate,
                                endDate: this.state.endDate
                                })} style={buttonLarger} className="buttonGoal">Create Goal</button></Link>
                        </div>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}


const buttonLarger = {
    fontSize: '15pt',
    width: '150px'
}

function mapStateToProps(state) {
    return {
      user: state.user,
      goal: state.goal
    };
  };

  const mapDispathToProps = {
      addGoal: addGoal
  }


export default connect(mapStateToProps, mapDispathToProps)(CreateGoal)
