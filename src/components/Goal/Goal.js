import React, { Component } from 'react';
import axios from 'axios';
import radium from 'radium';
import './Goal.css';


import Header from '../Header/Header';
import Footer from '../Home/Footer/Footer';
import DisplayList from './DisplayList';


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
                            <div style={styleYo.primary}>
                                <div style={[styleYo.base, styleYo.name]}>{e.goalname}</div>
                                <div style={[styleYo.base, styleYo.desc]}>{e.description}</div>
                                <div style={[styleYo.base, styleYo.dates]}>Start Date: 
                                {e.startdate}<br/>
                                Goal Date: {e.enddate}</div>
                            </div>
                            <DisplayList/>
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

const styleYo = {
    primary: {
        backgroundColor: '#3F3E54',
        fontFamily: 'Raleway',
        padding: '15px',    
    },
    base: {
        padding: '6px',
    },
    name: {
        textAlign: 'left',
        fontSize: '20pt',
        color: 'white',
    },
    dates: {
        textAlign: 'right',
        color: 'white',
        position: 'absolute',
        top: '112px',
        right: '35px'
    },
    desc: {
        fontSize: '15pt',
        textAlign: 'left',
        color: '#292839',
    }
}


export default radium(Goal)