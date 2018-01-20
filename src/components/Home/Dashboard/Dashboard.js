import React, { Component } from 'react';
import './Dashboard.css';
// import axios from 'axios';
import { connect } from 'react-redux';
import { getGoals } from '../../../ducks/reducer'
// import LineGraph from './LineGraph';
import BarGraph from './BarGraph';






class Dashboard extends Component {
    componentDidMount() {
        this.props.getGoals()
    }

    render() {
        return (
            <div>
                <div >
                    <div >
                        <div className="boxer"><h1 className="textyText">Number of Goals </h1>
                        <div className="numberGoals">{this.props.data.length}</div></div>
                        {/* <div className="boxer"><LineGraph/></div> */}
                    </div>
                    <div >
                        <div><BarGraph/></div>
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
