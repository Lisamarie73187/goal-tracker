import React, { Component } from 'react';
import {HorizontalBar} from 'react-chartjs-2'
import axios from 'axios';
import { login } from '../ducks/reducer';
import { connect } from 'react-redux';


class BarGraph extends Component {
    constructor(){
        super()
        this.state = {
            data: [],
            categories: [],
            singleCategories: [],


           data1: {}
    }

}

componentDidMount() {
    axios.get('/user-data/').then(response => {
        if (response.data.user) {
            this.props.login(response.data.user);
        }
    });
    axios.get('/user-tests-results').then(response => {
        this.setState({
            data: response.data
        })
    }).then(() => {
        this.state.data.map((item, index) => {
            this.setState({
                categories: [...this.state.categories, item.category]
            })
        })
    }).then(() => {
        // console.log(this.state.categories)
        const myArray = this.state.categories
        const unique = myArray.filter((v, i, a) => a.indexOf(v) === i);
        this.setState({
            singleCategories: unique,
        })
    }).then(() => {
        // console.log(this.state.singleCategories)
        var data1 = {labels: [],

                        datasets: [
                        {
                        label: 'Avg Percent/Subject',
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 2,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [],
                        // options: {
                            // scales:{
                            //     yAxes:[{
                            //         ticks:{
                            //             min:100,
                            //             max:100,
                            //             reverse:true
                            //         },
                            //     }]
                            // }
                        // }
                        }
                        ]
                    };

        this.state.singleCategories.map((item, index) => {
            data1.labels.push(item)
            var arr = []
            var average = ''
            this.state.data.map((i, ind) => {
                if(i.category === item) {
                    arr.push(i.percent)
                }
            })
            // length = arr.length
            average = arr.reduce(( acc, cur ) => acc + cur, 0) / arr.length
            data1.datasets[0].data.push(average)
        })
        this.setState({
            data1: data1
        })
        }).then(() => {
            // console.log(this.state.data1)
        })
    }

          
    render() {
        return (
            <div>

                <HorizontalBar 
          data={this.state.data1} redraw
          //   width={450}
          height={360}
          options={{
            maintainAspectRatio: false,
            scales:{
                yAxes:[{
                    ticks:{
                        min:0,
                        max:100,
                    },
                }]
            }
          }}
        />

            </div>
        );
    }
}


const mapDispatchToProps = {
    login: login,


};

export default connect(null,  mapDispatchToProps )(BarGraph);