import React, { Component } from 'react';
import axios from 'axios';
import './Goal.css';

import Header from '../Header/Header';
import Footer from '../Home/Footer/Footer';


export class Goal extends Component {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    componentWillMount() {
        return axios.get(`http://localhost:3003/api/goal/${this.props.match.params.goalsid}`).then(res => {
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        return (
            <div className="homePage">
                {this.state.data.map((e)=>{
                 return (
                    <div key={e.goalsid}>
                    <Header/>
                    <div className="rapper">
                    <div className="titleText">{e.goal_name}</div>
                    <div style={dates}>Start Date: {e.start_date} Goal Date: {e.end_date}</div>
                    <div style={taskList}>Taskyo</div>
                    </div>
                    <Footer/>
                    </div>
                    )
                 })
                }
            </div>
        )
    }

}

const dates = {
    textAlign: 'center',
    fontFamily: 'Raleway',
    color: 'white',
    fontSize: '15pt',
    border: '2px solid #3F3E54',
    padding: '15px',
    margin: '15px'
}

const taskList = {
    height: '100vh'
}
export default Goal