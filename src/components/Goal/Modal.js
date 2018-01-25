import React, { Component } from 'react'
import "./Modal.css";
import axios from 'axios'
import {StyleRoot} from 'radium'


class Modal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            goalNameInput: '',
            goalDescInput: '',
            startDate: '',
            endDate: '',
        }
      
        this.editGoal=this.editGoal.bind(this)
    }

    editGoal(){
        return axios.put(`/api/goal/${this.props.goal}`, {
            goalName: this.state.goalName, 
            goalDesc: this.state.goalDesc, 
            startDate: this.state.startDate, 
            endDate: this.state.endDate})
            .then(res=>{
                this.props.closed()
        }).catch(console.log)
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
            <div>
                <StyleRoot>
                <div className={this.props.show ? "ModalOpen" : "ModalClosed"}>
                    <div className="titleText">Edit</div>
                <form className="formyForm" >
                        <input 
                            className="inputs" 
                            type="text" 
                            value={this.state.value}
                            onChange={ (e) => this.handleNameChange(e.target.value)}
                            placeholder={"Goal Title (20 character limit)"}/>
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
                            <button onClick={this.props.closed} style={buttonLarger} className="buttonGoal">Cancel</button>
                            <button onClick={this.editGoal} type="submit" style={buttonLarger} className="buttonGoal">Edit</button>
                        </div>
                    </form>
                </div>
                </StyleRoot>
            </div>
        )
    }
}

const buttonLarger = {
    fontSize: '15pt',
    width: '150px',
    '@media (max-width: 800px)': {
        width: '100px',
        fontSize: '10pt'
    }
}

export default Modal

