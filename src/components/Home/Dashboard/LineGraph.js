import React, { Component } from 'react';
import {Line} from 'react-chartjs-2';

import axios from 'axios';

class LineGraph extends Component {
    constructor(){
        super()

        this.state = {
            dataThree: {},
        }
    }
    componentWillMount() {
        return axios.get('/api/read').then(res => {
            console.log(res.data)
            this.setState ({
                dataThree: {
                    labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug','Sept','Oct','Nov','Dec'],
                    datasets: [
                      {
                        label: res.data[0].goalname,
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
                    //   {
                    //     label: res.data[1].goalname,
                    //     fill: false,
                    //     lineTension: 0.1,
                    //     backgroundColor: '#c353f5',
                    //     borderColor: '#c353f5',
                    //     borderCapStyle: 'butt',
                    //     borderDash: [],
                    //     borderDashOffset: 0.0,
                    //     borderJoinStyle: 'miter',
                    //     pointBorderColor: '#c353f5',
                    //     pointBackgroundColor: '#c353f5',
                    //     pointBorderWidth: 1,
                    //     pointHoverRadius: 5,
                    //     pointHoverBackgroundColor: '#c353f5',
                    //     pointHoverBorderColor: '#c353f5',
                    //     pointHoverBorderWidth: 2,
                    //     pointRadius: 1,
                    //     pointHitRadius: 10,
                    //     data: [0, 12, 13, 19, 20, 18, 20, 22, 29, 33, 37, 38],
                    //   }
                    ]
                  }
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