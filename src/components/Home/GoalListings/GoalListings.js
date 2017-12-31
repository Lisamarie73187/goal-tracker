import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './goalListings.css';

const dataGoals = [ 
    {
    id: 1,
    goalTitle: 'Run a Marathon',
    goalDescription: 'train to run a full marathon',
    startDate: '1/1/2018',
    goalDate: '7/1/2018',
    tasks: []
    },
    {
    id: 2,
    goalTitle: 'Example two',
    goalDescription: 'lorem impsom',
    startDate: '1/1/2018',
    goalDate: '7/1/2018',
    tasks: []
    },
    {
    id: 3,
    goalTitle: 'example three',
    goalDescription: 'blah blah blah yada yada',
    startDate: '1/1/2018',
    goalDate: '7/1/2018',
    tasks: []
        },
        {
            id: 4,
            goalTitle: 'example three',
            goalDescription: 'blah blah blah yada yada',
            startDate: '1/1/2018',
            goalDate: '7/1/2018',
            tasks: []
                },
    ]


class GoalListings extends Component {
    constructor() {
        super()
        this.state = {
            data: dataGoals
        }
    }
//    componentDidMount(){
//     setTimeout(() => {
//         this.setState({
//           data: dataGoals
//         })
//       }, 1000)
//     }

    render() {
        return (
            <div className="why">
            {this.state.data.map((e)=>{
                 return (
                    <Link to={`/${e.id}`} key={e.id}>
                        <div>
                        <div className="rapper">
                        <div className="titleText">{e.goalTitle}</div>
                        <div className="dates"><div>Start Date: {e.startDate} - Goal Date: {e.goalDate}</div></div>
                        </div>
                        </div>
                    </Link>
                    )
                 })
                }
            </div>
        )
    }
}


export default GoalListings
