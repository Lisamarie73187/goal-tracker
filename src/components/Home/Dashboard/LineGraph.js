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
                    label: 'Goal 1',
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
                  {
                    label: 'goal 2',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#c353f5',
                    borderColor: '#c353f5',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#c353f5',
                    pointBackgroundColor: '#c353f5',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#c353f5',
                    pointHoverBorderColor: '#c353f5',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 12, 13, 19, 20, 18, 20, 22, 29, 33, 37, 38],
                  },
                  {
                    label: 'goal 3',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: '#fd8c7a',
                    borderColor: '#fd8c7a',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: '#fd8c7a',
                    pointBackgroundColor: '#fd8c7a',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: '#fd8c7a',
                    pointHoverBorderColor: '#fd8c7a',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [0, 2, 3, 9, 10, 8, 10, 12, 15, 16, 17, 18],
                  }
                ]
              }
        }
    }
    componentWillMount() {
        return axios.get('http://localhost:3003/api/read').then(res => {
            console.log(res.data)
            this.setState ({
                data: res.data
            })
        })
    }
    
    render() {
       
        return (
            <div className="size">
                <Line data={this.state.dataThree} />
            </div>
        );
    }
}



export default LineGraph;