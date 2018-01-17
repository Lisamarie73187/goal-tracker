import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSubTask } from '../../ducks/reducer'
import axios from 'axios'

import SubTask from './SubTask'


class Task extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subTaskName: '',
            taskid: '',
            subTasks: []
        }
        this.onSubmitSubTask = this.onSubmitSubTask.bind(this)
        this.getSubTasks = this.getSubTasks.bind(this)
    }

    componentDidMount(){
        // console.log('logged task cCDM')
        axios.get(`/api/subtask/${this.props.id}`).then( (res) => {
            console.log(res.data)
            this.setState({
                subTasks: res.data
            })
        })
    }

    handleSubTaskChange(value){
        console.log(value)
        this.setState({
            subTaskName: value,
        })
    }

    getSubTasks(){
        axios.get(`/api/subtask/${this.props.id}`).then( (res) => {
            console.log(res.data)
            this.setState({
                subTasks: res.data
            })
        })
    }

    onSubmitSubTask(){
        this.props.addSubTask({
            subTaskName: this.state.subTaskName,
            completed: false,
            date: new Date(),
            taskid: this.props.id})
            .then(()=>{
              this.getSubTasks()
            })
    }

    render() {
        let subTaskData = this.state.subTasks.map( e => {
            return <div key={e.subtaskid} style={wrapper}>
            <SubTask getSubTasks={this.getSubTasks}
                    name={e.subtaskname} 
                    subtaskid={e.subtaskid} 
                    completed={e.completed}/>
                    </div>
        })
        return (
            <div>
                 <div style={cardsLayout}>
                            <div style= {text}>{this.props.taskName}</div>
                            <div> {subTaskData}</div>
                            <div style={wrapper}>
                                <input  value={this.state.subTaskName}
                                        onChange={(e) => this.handleSubTaskChange(e.target.value)}
                                        placeholder="Add More Tasks"
                                        style={inputOne}/>
                                <button onClick={this.onSubmitSubTask} style={button}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

const text = {
    fontSize: '14pt',
    paddingBottom: '8px',
    paddingLeft: '15px'
}

const wrapper = {
    padding: '13px 10px',
    background: '#292839',
    margin: '10px'
}

const cardsLayout = {
    margin: '10px',
    paddingTop: '8px',
    paddingBottom: '8px',
    width: '250px',
    color: 'white',
    fontSize: '12pt',
    background: '#3F3E54',
    boxShadow: '7px 7px 5px rgba(0, 0, 0, 0.4)'
}

const inputOne = {
    border: 'none',
    fontSize: '12pt',
    outline: 'none',
    // padding: '3px 8px',
    background: 'none',
    borderBottom: '1px solid black',
    color: 'white',
    marginRight: '5px'
}

const button = {
    border: 'none',
    outline: 'none',
    fontFamily: 'Raleway',
    cursor: 'pointer',
    background: 'none',
    color: 'white'
}


const mapDispatchToProps = {
    addSubTask: addSubTask,
}

export default connect(null, mapDispatchToProps)(Task)
