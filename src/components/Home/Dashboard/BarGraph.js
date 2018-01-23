import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2'
import axios from 'axios'
import _ from 'lodash';


class BarGraph extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            goalName: [],
            dataLabels: [],
            data1: {}
        }

    this.getData = this.getData.bind(this)
}

componentDidMount(){
    this.getData()
}

getData(){
    return axios.get('/api/goal/subtask').then( response => {
        console.log('response.data',response.data)
        this.setState({
            data:response.data
        })
    }).then(() => {
        this.state.data.map((e,i) => {
            this.setState({
                goalName: [...this.state.goalName, e.goalname]
            })
            console.log('goalName', this.state.goalName)
        })
    }).then(() => {
        const unique =_.uniq(this.state.goalName)
        this.setState({
            dataLabels: unique
        })
        console.log('datalabels', this.state.dataLabels)
    }).then(()=> {
        var data1 = {
            labels: [],
            datasets: [
                {   label: '# of Tasks',
                    backgroundColor: ['#655fd7','#ef766a','#c353f5','#28c5ea','#655fd7','#655fd7','#655fd7'],
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: []
                },
                
            ],
        }

        this.state.dataLabels.map((e,i) => {
            data1.labels.push(e)
            var arr = []
            var lengthy = ''
            this.state.data.map((s,i) =>{
                if(s.goalname === e){
                    arr.push(s.completed)
                }
                console.log('arr', arr)
            })
            lengthy = arr.length
            data1.datasets[0].data.push(lengthy)
        })
            this.setState({
                data1: data1
            })
            console.log('length', this.state.data1)
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