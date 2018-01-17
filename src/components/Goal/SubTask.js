import React, { Component } from 'react'
import axios from 'axios'
import './Goal.css'


class SubTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
           completed: this.props.completed
        }
    }

    toggle(){
        console.log('button?')
        console.log(this.props.completed)
        axios.put(`/api/subtask/${this.props.subtaskid}`).then(response => {
            this.props.getSubTasks()
        })
    }

    render() {
        return (
            <div>
                <div style={subTaskLayout}>
                    <div onClick={() => this.toggle()} className={ this.props.completed ? "checkBox true" : "checkBox" }></div>
                    <div style={textSize}>{this.props.name} </div>
                    <span style={cursor}>x</span>
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
	alignItems: 'baseline',
    alignContent: 'stretch',
}

const textSize = {
    fontSize: '13pt',
    paddingBottom: '3px',
    paddingLeft: '-3px',
}

const cursor = {
    cursor: 'pointer'
}

export default SubTask