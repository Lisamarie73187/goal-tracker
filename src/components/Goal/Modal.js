import React, { Component } from 'react'
import "./Modal.css";
import axios from 'axios'


class Modal extends Component {
    constructor(props) {
        super(props)
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
        this.editGoal=this.editGoal.bind(this)
    }
    // componentDidMount() {
    //     return axios.get(`http://localhost:3003/api/goal/${goalsid}`).then(res => {
    //         this.setState({
    //             data: res.data
    //         })
    //     })
    // }

    editGoal(){
        console.log('button working?')
        axios.put(`http://localhost:3003/api/goal/${this.props.goal}`, {
            goalName: this.state.goalName, 
            goalDesc: this.state.goalDesc, 
            startDate: this.state.startDate, 
            endDate: this.state.endDate})
            .then(res=>{
            // this.props.history.push(`/goal/${this.props.match.params.goalsid}`)
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
        const cssClasses = [
            "Modal",
            this.props.show ? "ModalOpen" : "ModalClosed"
          ];
        
        return (
            <div>
                <div className={cssClasses.join(' ')}>
                    <div className="titleText" >Edit</div>
                <form className="formyForm" >
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
                            <button onClick={this.props.closed} style={buttonLarger} className="buttonGoal">Cancel</button>
                            <button onClick={this.editGoal} type="submit" style={buttonLarger} className="buttonGoal">Edit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

const buttonLarger = {
    fontSize: '15pt',
    width: '150px'
}

export default Modal

