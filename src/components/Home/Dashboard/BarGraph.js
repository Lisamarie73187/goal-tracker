import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2'
import axios from 'axios'
import _ from 'lodash';
import './Dashboard.css'


class BarGraph extends Component {
    constructor(){
        super()
        this.state = {
            data1: {
                    labels: [],
                    datasets: [
                            {   
                                backgroundColor: ["#4a4acc",'#c353f5','#655fd7','#ef766a','#c353f5','#28c5ea',"#4a4acc",'#a246d3','f75652'],
                                borderWidth: 1,
                                hoverBackgroundColor: ['#4a4acc', '#f75652', '#09b4c6', '#09b4c6', '#4a4acc', '#c353f5',"#655fd7",'#ef766a'],
                                barThickness: 1,
                                hoverBorderColor: 'rgba(255,99,132,1)',
                                data: []
                            },    
                            ],
                        }

        }
}

componentDidMount(){
    this.getTheData()
}


    



getTheData(){
    axios.get(`api/goal/subtask`).then(response => {
        var goalNameArray = []
        var goalName = []
        response.data.forEach(e => {
            goalName.push(e.goalname)
        })
        goalNameArray = _.uniq(goalName)
        goalNameArray.forEach(name => {
            this.state.data1.labels.push(name)
            var arr = []
            response.data.forEach(e => {
                if(e.goalname === name){
                    if(e.completed === true){
                        arr.push(e.completed)
                    }
                }
            })
            this.state.data1.datasets[0].data.push(arr.length)
        })
        this.setState({
            data1: this.state.data1
        })
        
    })
}

        render() {
        return (
            <div>
            <div className="barGraphOne">
            <HorizontalBar 
                data={this.state.data1} redraw
                width={480}
                height={270}
                options={{
                    title: {
                        display: true,
                        text: 'Number of Tasks Completed by Goal',
                        fontColor: 'white'
                    },
                    legend: {
                        display: false
                    },
                    maintainAspectRatio: true,
                    scales:{
                        xAxes:[{
                            ticks:{
                                beginAtZero:true,
                                suggestedMin: 0,
                                suggestedMax: 10,
                            },
                        }]
                    }
                }}/>
                </div>
            </div>
        );
    }
}



export default BarGraph;