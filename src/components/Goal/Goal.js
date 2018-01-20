import React, { Component } from 'react';
import axios from 'axios';
import radium from 'radium';
import './Goal.css';


import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import DisplayList from './DisplayList';
import Modal from "./Modal";
import Backdrop from "./Backdrop";



export class Goal extends Component {
    constructor() {
        super();

        this.state = {
            data: [],
            modalIsOpen: false,
            goalNameInput: '',
            goalDescInput: '',
            startDate: '',
            endDate: '',
        }

        this.deleteGoal = this.deleteGoal.bind(this)
    }

    componentDidMount() {
        return axios.get(`/api/goal/${this.props.match.params.goalsid}`).then(res => {
            this.setState({
                data: res.data
            })
        })
    }
    deleteGoal(){
        return axios.delete(`/api/goal/${this.props.match.params.goalsid}`).then(results=>{
            this.props.history.push('/home')
        }).catch(console.log)
    }

    handleNameChange ( value ){
        console.log(value)
        this.setState({ goalName: value})
    }
    handleDescChange ( value ){
        console.log(value)
        this.setState({ goalDesc: value})
    }
    handleStartDateChange ( value ){
        console.log(value)
        this.setState({ startDate: value})
    }
    handleEndDateChange ( value ){
        console.log(value)
        this.setState({ endDate: value})
        
    }

    showModal = () => {
        this.setState({modalIsOpen: true});
      }
    
      closeModal = () => {
        this.setState({modalIsOpen: false});
      }

    render() {
        const e = this.state.data
        return (
            <div className="homePage">
                    <div key={e.goalsid}>
                        <Header/>
                        <Modal goal={e.goalsid} show={this.state.modalIsOpen} closed={this.closeModal}/>
                        <Backdrop show={this.state.modalIsOpen} />
                        <div className="rapper">
                            <div style={styleYo.primary}>
                                <div style={[styleYo.base, styleYo.name]}>{e.goalname}</div>
                                <div style={[styleYo.base, styleYo.desc]}>{e.description}</div>
                                <div style={[styleYo.base, styleYo.dates]}>Start Date: 
                                {e.startdate}<br/>
                                Goal Date: {e.enddate}
                                <div style={buttonTwo}>
                                <button className="buttonGoal" style={button} onClick={this.deleteGoal}>Delete Goal</button>
                                <button onClick={this.showModal} style={button} className="buttonGoal">Edit</button>
                                </div>
                                </div>
                            </div>
                            <DisplayList goalsid={this.props.match.params.goalsid}/>
                        </div>
                        <Footer/>
                    </div>
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

const button = {
    border: 'none',
    padding: '5px 15px',
    margin: '5px',
    outline: 'none'
}

const buttonTwo = {
    textAlign: 'center',
    marginTop: '20px'
}


export default radium(Goal)