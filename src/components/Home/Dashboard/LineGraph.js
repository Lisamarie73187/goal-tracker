import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

import axios from 'axios';

class LineGraph extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            dataThree: {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug','Sept','Oct','Nov','Dec'],
                datasets: [
                  {
                    label: 'goalname',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#655fd7',
                    borderColor: '#655fd7',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#655fd7',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#655fd7',
                    pointHoverBorderColor: '#655fd7',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 1, 4, 9, 13, 18, 20, 22, 25, 26, 37, 38],
                  },
                ]
            },
        }
    }
    componentWillMount() {
        axios.get('/api/goals').then(res => {
            this.setState({
                data: res.data
            })
        })
    }
    
    render() {
        var dataGraph = this.state.data.map(e => {
            return {
                labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug','Sept','Oct','Nov','Dec'],
                datasets: [
                  {
                    label: e.goalname,
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#655fd7',
                    borderColor: '#655fd7',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#655fd7',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#655fd7',
                    pointHoverBorderColor: '#655fd7',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 1, 4, 9, 13, 18, 20, 22, 25, 26, 37, 38],
                  },
                ]
            }
        })
        return (
            <div className="size">
                <Line data={this.state.dataThree} />
            </div>
        );
    }
}



export default LineGraph;