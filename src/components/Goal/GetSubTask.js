import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { getTask } from '../../ducks/reducer'


class GetSubTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subTasks: []
        }
    }

   
    componentDidMount(){
        // console.log('logged task cCDM')
        axios.get(`/api/subtask/${this.props.id}`).then( (res) => {
            console.log(res.data)
            this.setState({
                subTasks: res.data
            })
        })
    }

    render() {
        let subTaskData = this.state.subTasks.map( e => {
            return <div key={e.subtaskid}>
                <div>You have {this.subTasks.length} Tasks</div>
                <div>You have Completed {this.subTasks.completed.length} Tasks</div>
            </div>
        })

        return (
            <div>
                <h1>{subTaskData}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
      
        tasks: state.tasks,
        task: state.task
    }
}
const mapDispatchToProps = {
    getTask: getTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(GetSubTask)

