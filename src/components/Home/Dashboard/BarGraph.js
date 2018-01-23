import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2'
import axios from 'axios'
import _ from 'lodash';


class BarGraph extends Component {
    constructor(){
        super()
        this.state = {
            data1: {
                    labels: [],
                    datasets: [
                            {   
                                backgroundColor: ['#655fd7','#ef766a','#c353f5','#28c5ea',"#4a4acc",'#a246d3','f75652'],
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
        console.log(response.data)
        var goalNameArray = []
        var goalName = []
        // var arr = []
        response.data.map(e => {
            goalName.push(e.goalname)
        })
        console.log('goalnamearray',goalName)
        // var goalNameArray = []
        goalNameArray = _.uniq(goalName)
        console.log('unique', goalNameArray)
        goalNameArray.map(name => {
            this.state.data1.labels.push(name)
            var arr = []
            console.log('labels', this.state.data1.labels)
            response.data.map(e => {
                if(e.goalname === name){
                    if(e.completed === true){
                        arr.push(e.completed)
                    }
                }
            })
            this.state.data1.datasets[0].data.push(arr.length)
            console.log('arr', arr)
            console.log('goalnamearray', goalNameArray)
        })
        this.setState({
            data1: this.state.data1
        })
        
    })
}

        render() {
        return (
            <div className="barGraph">
            <HorizontalBar 
                data={this.state.data1} redraw
                width={500}
                height={260}
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
        );
    }
}

// const size = {
//     width: '40vw',
//     backgroundColor: '#3f3e54'
// }


export default BarGraph;