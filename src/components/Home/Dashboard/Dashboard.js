import React, { Component } from 'react';
import './Dashboard.css';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getGoals } from '../../../ducks/reducer'
// import LineGraph from './LineGraph';
import BarGraph from './BarGraph';
import BarGraphDates from './BarGraphDates';



class Dashboard extends Component {
    componentDidMount() {
        this.props.getGoals()
    }

    render() {
        return (
            <div>
                <div className="wrappers">
                    <div className="firstRow">
                        <div className="boxer">
                            <h1 className="textyText">Number of <br/> Goals </h1>
                            <div className="numberGoals">{this.props.data.length}</div>
                        </div>
                        <div className="boxer">
                            <h1 className="textyText">Number of <br/>Tasks </h1>
                            <div className="numberGoals">{this.props.data.length}</div>
                        </div>
                        <div className="boxer">
                            <h1 className="textyText">Number of Completed </h1>
                            <div className="numberGoals">{this.props.data.length}</div>
                        </div>
                        <div className="boxer">
                            <h1 className="textyText">Number of Completed </h1>
                            <div className="numberGoals">{this.props.data.length}</div>
                        </div>
                    </div>
                    <div className="secondRow">
                        <div className="barGraph"><BarGraph/></div>
                        <div className="barGraph"><BarGraphDates/></div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.data
    }
}

const mapDispatchToProps = {
    getGoals: getGoals
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
