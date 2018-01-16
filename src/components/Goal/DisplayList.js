import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { addTask } from '../../ducks/reducer'



class DisplayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
                task: '',
                date: ''
        }
    }
    handleChange(value){
        console.log(value)
        this.setState({
            task: value
        })
    }

    render() {
        return (
            <div style={layout}>
                <div style={task} className="rapper">
                    <div className="titleText">{this.state.taskTitle}</div>
                    <div style={inputList}>
                        <input className="inputs" 
                                style={tasksList} 
                                placeholder="Add Task"
                                value={this.state.value}
                                onChange={(e) => this.handleChange(e.target.value)}/>
                        <button onClick={() => this.props.addTask({task: this.state.task, completed: false, date: new Date()})} style={button} className="buttonGoal">Add</button>
                    </div>
                    {this.props.task}
                </div>
            </div>
        )
    }
}

const layout = {
    height: '100vh'
}

const task = {
    width: '30vw'
}

const inputList = {
    fontSize: '15pt',
    padding: '20px'
}

const tasksList = {
    width: '20vw',
    height: '30px',
    display: 'inline'
}

const button = {
    padding: '5px 15px'
}

function mapStateToProps(state) {
    return {
        task: state.task
    }
}
const mapDispatchToProps = {
    addTask: addTask
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList)
