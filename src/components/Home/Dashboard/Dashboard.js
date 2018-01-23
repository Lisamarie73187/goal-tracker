import React, { Component } from 'react';
import './Dashboard.css';
import axios from 'axios';
import { connect } from 'react-redux';
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
        this.props.getGoals(),
        this.getSubtaskGoals()
    }

    getSubtaskGoals(){
        axios.get(`/api/goal/subtask`).then( response => {
            var arr = []
            console.log('?',response.data)
            response.data.map(e => {
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
                        <div>
                            <div className="boxerOne">
                                <h1 className="textyText">Number of <br/> Goals </h1>
                                <div className="numberGoals">{this.props.data.length}</div>
                            </div>
                        </div>
                        <div>
                            <div className="boxerTwo">
                                <h1 className="textyText">Number of <br/>Tasks </h1>
                                <div className="numberGoals">{this.state.numberOfSubTasks}</div>
                            </div>
                        </div>
                        <div>
                            <div className="boxerThree">
                                <h1 className="textyText">Number of Completed </h1>
                                <div className="numberGoals">{this.state.numberOfCompletedTasks}</div>
                            </div>
                        </div>
                        <div className="pie">
                            <div className="textyText">Number of Tasks per Goal</div>
                            <PieChart/>
                        </div>
                    </div>
                    <div className="secondRow">
                        <div className="barGraph"><BarGraphDates/></div>
                            <div className="barGraph"><BarGraph/></div>
                    </div>
                </div>
            </div>
        )
    }
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
