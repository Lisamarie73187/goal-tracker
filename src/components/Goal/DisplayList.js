import React, { Component } from 'react';
import Task from './Task'
import { connect } from 'react-redux'
import { addTask, getTask } from '../../ducks/reducer'



class DisplayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
                taskname: '',
                date: '',
                data: '',
                tasks: []
        }

        this.submitTask = this.submitTask.bind(this)
    }

    handleChange(value){
        console.log(value)
        this.setState({
            taskname: value
        })
    }
  
    componentDidMount(){
        this.props.getTask(this.props.goalsid)
    }


    submitTask(){
        this.props.addTask({
            taskname: this.state.taskname, 
            completed: false, 
            date: new Date(), 
            data: this.props.goalsid})
            .then(()=>{
                this.props.getTask(this.props.goalsid)
                .then(() => {this.setState({
                    taskname: ''
                })})
            })
    }


    render() {
        return (
            <div style={layout}>
                {this.props.tasks.map((e) => {
                    console.log('inside th map')
                    return (
                     <div key={e.taskid}> <Task taskName={e.taskname} id={e.taskid} goalsid={this.props.goalsid}/></div>
                    )
                })}
                 <div>
                    <div style={inputRapper}>
                        <input value={this.state.taskname}
                                style={inputOne}
                                placeholder="Add Task"
                                onChange={(e) => this.handleChange(e.target.value)}/>
                        <button style={button} onClick={this.submitTask}>Add</button>
                    </div>
                </div>
            </div>
        )}
}
    
const layout = {
    height: '100vh',
    textAlign: 'left',
    display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	alignItems: 'baseline',
    alignContent: 'stretch',
    overflow: 'scroll',   
    boxsizing: 'border-box'
}


const button = {
    border: 'none',
    outline: 'none',
    fontFamily: 'Raleway',
    cursor: 'pointer',
    background: 'none',
    color: 'white'
}

const inputOne = {
    border: 'none',
    fontSize: '12pt',
    outline: 'none',
    background: 'none',
    borderBottom: '1px solid black',
    color: 'white',
}


const inputRapper = {
    padding: '10px 10px',
    background: '#3F3E54',
    margin: '10px',
    width: '250px',
    display: 'flex',
	flexDirection: 'row',
	flexWrap: 'nowrap',
	justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '7px 7px 5px rgba(0, 0, 0, 0.4)'
}



function mapStateToProps(state) {
    return {
      
        tasks: state.tasks,
        task: state.task
    }
}
const mapDispatchToProps = {
    addTask: addTask,
    getTask: getTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList)
