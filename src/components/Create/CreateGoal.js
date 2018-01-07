import React, { Component } from 'react'
import axios from 'axios'


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
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handleDescChange=this.handleDescChange.bind(this)
        this.handleStartDateChange=this.handleStartDateChange.bind(this)
        this.handleEndDateChange=this.handleEndDateChange.bind(this)
        this.addNewGoal=this.addNewGoal.bind(this)
        
    }
    addNewGoal(){
        console.log('button working?')
        axios.post('http://localhost:3003/api/goal/add', {
            goalName: this.state.goalName, 
            goalDesc: this.state.goalDesc, 
            startDate: this.state.startDate, 
            endDate: this.state.endDate
        })
         .then(res => {
            this.props.history.push('/Home');
        }).catch(err => console.error(err))
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
                    <form className="formyForm" onSubmit={this.addNewGoal}>
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
                            <button type="submit" style={buttonLarger} className="buttonGoal">Create Goal</button>
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
export default CreateGoal
