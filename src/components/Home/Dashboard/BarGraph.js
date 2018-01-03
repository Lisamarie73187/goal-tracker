import React, { Component } from 'react';
import {Bar} from 'react-chartjs-2'


class BarGraph extends Component {
    constructor(){
        super()
        this.state = {
           data1: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          
           datasets: [
            {
              label: 'Average Temperature in PHX',
              backgroundColor: ['#655fd7','#655fd7','#655fd7','#655fd7','#655fd7','#655fd7','#655fd7'],
              borderWidth: 1,
              hoverBackgroundColor: 'rgba(255,99,132,0.4)',
              hoverBorderColor: 'rgba(255,99,132,1)',
              data: [82, 89, 99, 105, 110, 125, 130]
            }
          ]
        }
    }

    
}
          
    render() {
        return (
            <div style={size}>
            <Bar data={this.state.data1} />
            </div>
        );
    }
}

const size = {
    width: '40vw',
    backgroundColor: '#3f3e54'
}


export default BarGraph;