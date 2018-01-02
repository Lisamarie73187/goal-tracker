import React, { Component } from 'react';

import axios from 'axios';

export class Goal extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        return axios.get(`http://localhost:3003/api/goal/${this.props.match.params.goalsid}`).then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        return (
            <div>
                {this.state.data.map((e)=>{
                 return (
                    <div key={e.goalsid}>
                    <div>{e.goal_name}</div>
                    <div>Start Date: {e.start_date} Goal Date: {e.end_date}</div>
                    </div>
                    )
                 })
                }
            </div>
        )
    }

}

export default Goal