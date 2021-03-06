import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addSubTask, getTask } from '../../ducks/reducer'
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
        this.deleteTask = this.deleteTask.bind(this)
    }
  

    componentDidMount(){
        this.getSubTasks()
    }

    handleSubTaskChange(value){
        this.setState({
            subTaskName: value,
        })
    }

    deleteTask(){
        axios.delete(`/api/task/${this.props.id}`).then(response => {
            this.props.getTask(this.props.goalsid)
        })
    }

    getSubTasks(){
        axios.get(`/api/ssubtask/${this.props.id}`).then( (res) => {
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
            taskid: this.props.id,
            goalsid: this.props.goalsid})
            .then(()=>{
              this.getSubTasks()
            })
            .then(() => {this.setState({
                subTaskName: ''
            })})
    }

    addTotaltoTable(){
        axios.post('/api/subtask/data').then( response => {

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
                            <div style={text}>{this.props.taskName} <span onClick={this.deleteTask} style={del}>x</span></div>
                            <div>{subTaskData}</div>
                            <div style={wrapper}>
                                <input  value={this.state.subTaskName}
                                        onChange={(e) => this.handleSubTaskChange(e.target.value)}
                                        placeholder="Add a Subtask"
                                        style={inputOne}/>
                                <button onClick={() => this.onSubmitSubTask()} style={button}>Add</button>
                    </div>
                </div>
            </div>
        )
    }
}

const text = {
    fontSize: '12pt',
    padding: '8px 20px',
    display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'space-between',
	alignItems: 'baseline',
    alignContent: 'stretch',
}

const del = {
    fontSize: '12pt',
    color: '#565656',
    cursor: 'pointer'
}

const wrapper = {
    padding: '13px 10px',
    background: '#333243',
    margin: '10px',
    boxsizing: 'border-box',
    overflow: 'scroll'

}

const cardsLayout = {
    margin: '10px',
    paddingTop: '8px',
    paddingBottom: '8px',
    width: '320px',
    color: 'white',
    fontSize: '12pt',
    background: '#3F3E54',
    boxShadow: '7px 7px 5px rgba(0, 0, 0, 0.4)',
    maxHeight: '800px',
    overflow: 'scroll'
}

const inputOne = {
    border: 'none',
    fontSize: '14pt',
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
    color: 'white',
}


const mapDispatchToProps = {
    addSubTask: addSubTask,
    getTask: getTask
}

export default connect(null, mapDispatchToProps)(Task)
