import React, { Component } from 'react';
import CircularProgressbar from 'react-circular-progressbar';
import './ProgressBar.css'
import axios from 'axios'
// import { getSubTask } from '../../ducks/reducer'



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
            console.log(res.data)
            this.setState({
                subTaskData: res.data.length
            })
        })
    }

    getCompletedData(){
        axios.get(`/api/subtask/percent/${this.props.goalsid}`).then( res => {
            console.log('numberasdfasdf',res.data)
            this.setState({
                completed: res.data.length
            })
        })
    }

  

    render() {
        // var total = this.state.subTaskData.length
        console.log('total',this.state.subTaskData)
        console.log('completed', this.state.completed)
        return (
            <div>
                <CircularProgressbar percentage={Math.floor((this.state.completed/this.state.subTaskData) *100)} initialAnimation="true" />
            </div>
        )
    }
}



export default ProgressBar
