import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './ProgressBar.css'
import axios from 'axios'



class ProgressBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subTaskData: [],
            completed: {}
        }
    }

    componentDidMount(){
        this.getSubTaskData()
        this.getCompletedData()
    }

    getSubTaskData(){
        axios.get(`/api/subtask/${this.props.goalsid}`).then( res => {
            this.setState({
                subTaskData: res.data.length
            })
        })
    }

    getCompletedData(){
        axios.get(`/api/subtask/percent/${this.props.goalsid}`).then( res => {
            this.setState({
                completed: res.data.length
            })
        })
    }

  

    render() {
        return (
            <div>
                <CircularProgressbar percentage={this.state.subTaskData? Math.floor((this.state.completed/this.state.subTaskData) *100) : 0} initialAnimation="true" />
            </div>
        )
    }
}



export default ProgressBar
