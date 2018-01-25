import React, { Component } from 'react';
import Task from './Task'
import { connect } from 'react-redux'
import { addTask, getTask } from '../../ducks/reducer'



class DisplayList extends Component {
    constructor(props) {
        super(props)
        this.state = {
                taskNameInput: '',
                date: '',
                data: '',
                tasks: []
        }

        this.submitTask = this.submitTask.bind(this)
    }

    handleChange(value){
        console.log(value)
        this.setState({
            taskNameInput: value
        })
    }
  
    
    componentDidMount(){
        this.props.getTask(this.props.goalsid)
        console.log('displaylist is mounting')
    }

    componentWillUnmount(){
        console.log("display List")
    }
  

    submitTask(){
        this.props.addTask({
            taskname: this.state.taskNameInput, 
            completed: false, 
            date: new Date(), 
            data: this.props.goalsid})
            .then(()=>{
                this.props.getTask(this.props.goalsid)
                .then(() => {this.setState({
                    taskNameInput: ''
                })})
            })
    }


    render() {
        console.log('displaylist is rendering')
        return (
            <div style={layout}>
                {this.props.tasks.map((e) => {
                    return (
                     <div key={e.taskid}> <Task taskName={e.taskname} id={e.taskid} goalsid={this.props.goalsid}/></div>
                    )
                })}
                 <div>
                    <div style={inputRapper}>
                        <input value={this.state.taskNameInput}
                                style={inputOne}
                                placeholder="Add Task"
                                onChange={(e) => this.handleChange(e.target.value)}/>
                        <button style={button} onClick={() => this.submitTask()}>Add</button>
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
    fontSize: '14pt',
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
        // task: state.task
    }
}
const mapDispatchToProps = {
    addTask: addTask,
    getTask: getTask,
}

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList)
