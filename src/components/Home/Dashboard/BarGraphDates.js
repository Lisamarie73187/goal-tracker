import React, { Component } from 'react'
import axios from 'axios'
import {Bar} from 'react-chartjs-2'


class BarGraphDates extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data2: {
                labels: ['# of Completed Per Day of Week'],
                datasets: [
                    {   label: '?',
                        backgroundColor: ['#655fd7','#ef766a','#c353f5','#28c5ea','#655fd7','#655fd7','#655fd7'],
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: []
                    },
                    
                ],
            },
            completedTotals: [],
        }
    }

    componentDidMount(){
        this.getData()
    }

    getData(){
        axios.get('/api/goal/subtask').then(response => {
            var arr = []
            var completedTotals = []
            response.data.forEach(e => {
                if(e.completed){
                    arr.push(e.completeddate)
                }
            })
                var monday = []
                var tuesday = []
                var wed = []
                var thursday = []
                var friday = []
                var sat = []
                var sun = []
              
                for(var i=0; i< arr.length; i++){
                  if(arr[i] === '1'){
                   monday.push(1)
                  }if( arr[i]=== '2'){
                    tuesday.push(2)
                  }if(arr[i] === '3'){
                    wed.push(3)
                  }if(arr[i] === '4'){
                    thursday.push(4)
                  }if(arr[i] === '5'){
                    friday.push(5)
                  }if(arr[i]=== '6'){
                    sat.push(6)
                  }if(arr[i] === '0'){
                    sun.push(7)
                  }
                }
                completedTotals = [monday.length, tuesday.length, wed.length, thursday.length, friday.length, sat.length, sun.length]
                this.setState({data2: {
                    labels: ['Monday','Tuesday','Wednesday','Thursday', 'Friday', 'Sat', 'Sun'],
                     datasets: [
                      {
                        label: '# of Completed Tasks by Day of Week',
                        backgroundColor: ['#28c5ea','#c353f5','#655fd7','#ef766a','#655fd7','#655fd7','#655fd7'],
                        borderWidth: 1,
                        hoverBackgroundColor: this.state.hoverColor,
                        hoverBorderColor: this.state.hoverColor,
                        data: [...completedTotals]
                      }
                    ]
                  }})
            })
            
    }
        
    render() {
        return (
            <div>
            <div className="barGraphOne">
                <Bar 
                    data={this.state.data2} 
                    width={580}
                    height={400}
                    options={{
                        title: {
                            display: true,
                            text: 'Number of Tasks Completed By Day of the Week',
                            fontColor: 'white'
                        },
                        legend: {
                            display: false,
                        },
                         maintainAspectRatio: true,
                         scales:{
                            yAxes:[{
                                ticks:{
                                    beginAtZero:true,
                                    suggestedMin: 0,
                                    suggestedMax: 10,
                                },
                            }]
                        }
                    }}
                    />
                </div>
            </div>
        )
    }
}


export default BarGraphDates
