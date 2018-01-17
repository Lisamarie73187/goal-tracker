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
                      <Task id={e.taskid} taskName={e.taskname}/>
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
}

// const cardsLayout = {
//     margin: '10px',
//     padding: '10px',
//     width: '250px',
//     color: 'white',
//     fontSize: '12pt',
//     background: '#3F3E54',
//     boxShadow: '7px 7px 5px rgba(0, 0, 0, 0.4)'
// }

// const text = {
//     fontSize: '14pt',
//     paddingBottom: '8px',
// }

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
    // padding: '3px 8px',
    background: 'none',
    borderBottom: '1px solid black',
    color: 'white',
    marginRight: '5px'
}


// const wrapper = {
//     padding: '13px 10px',
//     background: '#292839'
// }

const inputRapper = {
    padding: '10px 20px',
    background: '#3F3E54',
    boxShadow: '7px 7px 5px rgba(0, 0, 0, 0.4)'
}

// const cards = {
//     background: "#3F3E54",
//     padding: '30px',
//     marginLeft: '20px'
// }



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
