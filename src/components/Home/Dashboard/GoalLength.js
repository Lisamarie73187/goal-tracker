import React, { Component } from 'react';
import axios from 'axios';


class GoalLength extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
  componentDidMount() {
        return axios.get('http://localhost:3003/api/read').then(res => {
            console.log(res.data)
            this.setState ({
                data: res.data
            })
        })
    }
    render() {
        return (
            <div style={wrap}>
                <h1 className="textyText" >Number of Goals <br/>{this.state.data.length}</h1>
            </div>
        )
    }
}

const wrap = {
    marginLeft: '30px'
}
export default GoalLength
