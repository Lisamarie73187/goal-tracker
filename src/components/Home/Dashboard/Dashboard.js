import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { getGoals } from '../../../ducks/reducer'
import BarGraph from './BarGraph';
import BarGraphDates from './BarGraphDates';
import PieChart from './PieChart'


class Dashboard extends Component {
    constructor (){
        super()
        this.state = {
            numberOfSubTasks: 0,
            numberOfCompletedTasks: 0,

        }

        this.getSubtaskGoals = this.getSubtaskGoals.bind(this)
    }
    componentDidMount() {
        this.props.getGoals()
        this.getSubtaskGoals()
    }

    getSubtaskGoals(){
        axios.get(`/api/goal/subtask`).then( response => {
            var arr = []
            console.log('?',response.data)
            response.data.forEach(e => {
                if(e.completed){
                    arr.push(e.completed)
                }
                this.setState({
                    numberOfCompletedTasks: arr.length,
                    numberOfSubTasks: response.data.length
                })
                })
            })
        }
    
    

    render() {
       
        return (
            <div>
                <div className="wrappers">
                    <div className="firstRow">
                            <div className="boxerOne">
                            {this.props.data ? 
                                <div>
                                    <h1 className="textyText">Number of <br/> Goals </h1>
                                    <div className="numberGoals">{this.props.data.length}</div>
                                </div> : <div><ReactLoading type="bubbles" color="white" height='67' width='35' /></div>}
                            </div>
                            <div className="boxerTwo">
                            {this.state.numberOfCompletedTasks ? 
                                <div>
                                    <h1 className="textyText">Number of <br/>Tasks </h1>
                                    <div className="numberGoals">{this.state.numberOfSubTasks}</div>
                                </div>
                                : <div><ReactLoading type="bubbles" color="white" height='67' width='35' /></div>}
                            </div>
                            <div className="boxerThree">
                            {this.state.numberOfCompletedTasks ? 
                                <div>
                                    <h1 className="textyText">Number of <br/>Completed </h1>
                                    <div className="numberGoals">{this.state.numberOfCompletedTasks}</div>
                                </div> 
                                : <div>
                                <ReactLoading type="bubbles" color="white" height='67' width='35' />
                                </div>}
                            </div>
                            <div className="pie">
                            {this.state.numberOfCompletedTasks? 
                                <div>
                                    <div className="textyText">Number of Tasks per Goal</div>
                                    <PieChart/>
                                </div>
                                : <div style={centers}><ReactLoading type="spin" color="white" /></div>}
                                </div>
                            </div>
                            {this.state.numberOfCompletedTasks ? 
                    <div className="secondRow">
                        <div className="barGraph"><BarGraphDates/></div>
                            <div className="barGraph"><BarGraph/></div>
                    </div>
                        : <ReactLoading type="spin" color="white" />}
                </div>
            </div>
        )
    }
}

const centers = {
    padding: '80px 160px',
}

function mapStateToProps(state) {
    return {
        data: state.data,
    }
}

const mapDispatchToProps = {
    getGoals: getGoals
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
