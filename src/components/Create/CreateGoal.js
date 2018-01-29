import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addGoal } from '../../ducks/reducer'
// import { Link } from 'react-router-dom'
import {StyleRoot} from 'radium'


import Header from '../Header/Header';



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
        this.setState({ goalName: value})
    }
    handleDescChange ( value ){
        this.setState({ goalDesc: value})
    }
    handleStartDateChange ( value ){
        this.setState({ startDate: value})
    }
    handleEndDateChange ( value ){
        this.setState({ endDate: value})
    }

    submitGoal(){
        this.props.addGoal({
            goalName: this.state.goalName,
            goalDesc: this.state.goalDesc,
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }).then( () => {
            this.props.history.push('/home')
        })
    }
    

    render() {
        return (
            <div>
                <StyleRoot>
                <div className="homePage">
                <Header/>
                <div className="rapperLarge">
                    <div className="titleText">Create your Goal</div>
                    <p style={paragraph}>Create a goal. You are able to create up to 10 goals. Once you create a goal <br/>
                    you can add tasks.</p>
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
                            placeholder="Goal Description(optional)"/>
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
                            <button onClick={() => this.submitGoal()} style={buttonLarger} className="buttonGoal">Create Goal</button>
                        </div>
                    </form>
                </div>
            </div>
            </StyleRoot>
            </div>
        )
    }
}


const buttonLarger = {
    fontSize: '15pt',
    width: '150px',
    '@media (max-width: 453px)': {
        width: '100px',
        fontSize: '10pt'
    }
}

const paragraph = {
    color: 'white'
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
