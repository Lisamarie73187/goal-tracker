import React, { Component } from 'react'
import { Pie } from 'react-chartjs-2'
import axios from 'axios'
import _ from 'lodash'


class PieChart extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data2: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [
                    '#655fd7',
                    '#28c5ea',
                    '#c353f5'
                    ],
                    hoverBackgroundColor: [
                    '#655fd7',
                    '#28c5ea',
                    '#c353f5'
                    ],
                    borderColor: [
                    '#3f3e54',
                    '#3f3e54',
                    '#3f3e54',
                    '#3f3e54',
                    ]
                }]
        }
    }
}

componentDidMount() {
    this.formatChartData()
}

formatChartData(){
    axios.get(`api/goal/subtask`).then(response => {
        console.log(response.data)
        var goalNameArray = []
        var goalName = []
        response.data.map(e => {
            goalName.push(e.goalname)
        })
        console.log('goalnamearray',goalName)
        goalNameArray = _.uniq(goalName)
        console.log('unique', goalNameArray)
        goalNameArray.map(name => {
            this.state.data2.labels.push(name)
            var arr = []
            // console.log('labels', this.state.data1.labels)
            response.data.map(e => {
                if(e.goalname === name){
                    arr.push(e.completed)
                }
            })
            this.state.data2.datasets[0].data.push(arr.length)
            console.log('arr', arr)
            console.log('goalnamearray', goalNameArray)
        })
        this.setState({
            data2: this.state.data2
        })
    })
}


    render() {
        return (
            <div>
                <Pie data={this.state.data2} 
                width={600}
                height={400}/>
            </div>
        )
    }
}



export default PieChart
