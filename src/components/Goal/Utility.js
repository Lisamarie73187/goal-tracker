import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getSubTask } from '../../ducks/reducer'


class Utility extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        this.props.getSubTask(this.props.goalid).then(response => {
            this.setState({
                data: response.data
            })
        })
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
       subtasks: state.subtasks
    }
}

const mapDispatchToProps = {
    getSubTask: getSubTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Utility)


