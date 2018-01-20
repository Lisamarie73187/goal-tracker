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

        //    data1: {
        //     labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          
        //    datasets: [
        //     {
        //       label: 'Average Temperature in PHX',
        //       backgroundColor: ['#655fd7','#655fd7','#655fd7','#655fd7','#655fd7','#655fd7','#655fd7'],
        //       borderWidth: 1,
        //       hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        //       hoverBorderColor: 'rgba(255,99,132,1)',
        //       data: [82, 89, 99, 105, 110, 125, 130]
        //     }
        //   ]
        // }
    }

    this.getData = this.getData.bind(this)
}

componentDidMount(){
    this.getData()
}

getData(){
    return axios.get('/api/goal/subtask').then( response => {
        this.setState({
            data:response.data
        })
    }).then(() => {
        this.state.data.map((e,i) => {
            this.setState({
                goalName: [...this.state.goalName, e.goalname]
            })
            console.log(this.state.goalName)
        })
    }).then(() => {
        const unique =_.uniq(this.state.goalName)
        console.log('uniquearray',unique)
        this.setState({
            dataLabels: unique
        })
    }).then(()=> {
        var data1 = {labels: [],

            datasets: [
                {
                    label: 'Bar Graph Yo',
                    backgroundColor: ['#655fd7','#655fd7','#655fd7','#655fd7','#655fd7','#655fd7','#655fd7'],
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: []
                }
            ]
        }
        this.state.dataLabels.map((e,i) => {
            data1.labels.push(e)
            var arr = []
            var lengthy = ''
            this.state.data.map((s,i) =>{
                if(s.goalname === e){
                    arr.push(s.completed)
                }
            })
            lengthy = arr.length
            console.log('tes',lengthy)
            data1.datasets[0].data.push(lengthy)
        })
            this.setState({
                data1: data1
            })
        console.log(data1.datasets[0].data)
        }).then(()=>{
            
        })
}


          
    render() {
        return (
            <div>
            <HorizontalBar data={this.state.data1} />
            </div>
        );
    }
}

// const size = {
//     width: '40vw',
//     backgroundColor: '#3f3e54'
// }


export default BarGraph;