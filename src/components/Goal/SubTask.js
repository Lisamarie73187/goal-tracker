import React, { Component } from 'react'
import axios from 'axios'
import './Goal.css'


class SubTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
           completed: this.props.completed
        }
        this.deleteSubTask = this.deleteSubTask.bind(this)
    }

  

    toggle(){
        axios.put(`/api/subtask/${this.props.subtaskid}`,{completedDate: new Date().getDay()}).then(response => {
            this.props.getSubTasks()
        })
    }

    deleteSubTask(){
        axios.delete(`/api/subtask/${this.props.subtaskid}`).then(response => {
            this.props.getSubTasks()
        })
    }

    render() {
        return (
            <div>
                <div style={subTaskLayout}>
                    <div onClick={() => this.toggle()} className={ this.props.completed ? "checkBox true" : "checkBox" }></div>
                    <div style={textSize}>{this.props.name} </div>
                    <span style={cursor} onClick={this.deleteSubTask}>x</span>
                </div>
            </div>
        )
    }
}

const subTaskLayout = {
    display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'space-between',
    alignItems: 'center',
}

const textSize = {
    fontSize: '12pt',
    overflow: 'scroll',
    width: '200px'
}

const cursor = {
    cursor: 'pointer',
    color: '#565656',
}

export default SubTask
