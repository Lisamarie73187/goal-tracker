import React, { Component } from 'react';
// import axios from 'axios'
import { connect } from 'react-redux'
import { addTask, getTask } from '../../ducks/reducer'



class DisplayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
                taskname: '',
                date: '',
                show: false,
                data: '',
                task: ''
        }

        this.submitTask = this.submitTask.bind(this)
    }
    handleChange(value){
        console.log(value)
        this.setState({
            taskname: value,
        })
    }
  
    componentDidMount(){
        console.log('componentDidMount', this.props.goalsid)
        this.props.getTask(this.props.goalsid)
    }

    submitTask(){
        this.props.addTask({taskname: this.state.taskname, 
            completed: false, 
            date: new Date(), 
            data: this.props.goalsid})
            .then(()=>{
                this.props.getTask(this.props.goalsid)
                .then(()=> {this.setState({
                    taskname: ''
                })})
            })
    }

    render() {
        
        return (
            <div style={layout}>
                {/* {!this.props.task && 
                    <div className="rapper" style={task}>
                        <div onClick={this.showList} style={button} className="titleText">Add Task +</div>
                    </div>} */}
                    {this.props.task &&
                        <div style={task} className="rapper">
                        <div className="titleText">
                        <div style={inputList}>
                            <input  style={tasksList} 
                                    placeholder="Add Task"
                                    value={this.state.value}
                                    onChange={(e) => this.handleChange(e.target.value)}/>
                            <button onClick={this.submitTask} 
                                    style={button}>Add
                            </button>
                        </div>
                        {this.props.tasks.map((e) => {
                            return (<div key={e.taskid}>
                                {e.taskname}
                                {e.completed}
                            </div>)
                        })}
                        </div>
                    </div>
                    }
            </div>
        )
    }
}

const layout = {
    height: '100vh'
}

const task = {
    width: '28vw'
}

const inputList = {
  
}

const tasksList = {
    width: '20vw',
    height: '30px',
    border: 'none',
    fontSize: '16pt',
    borderBottom: '1px solid #292839',
    display: 'inline',
    background: 'none',
    color: 'white',
    outline: 'none'
}

const button = {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    color: '#525063',
    fontSize: '15pt',
    paddingLeft: '6px',
    outline: 'none'
}

function mapStateToProps(state) {
    return {
        task: state.task,
        tasks: state.tasks
    }
}
const mapDispatchToProps = {
    addTask: addTask,
    getTask: getTask
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList)
