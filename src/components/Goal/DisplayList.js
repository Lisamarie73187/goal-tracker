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
                .then(() => {this.setState({
                    taskname: ''
                })})
            })
    }

    render() {
        return (
            <div style={layout}>
                {this.props.tasks.map((e) => {
                    return (
                        <div key={e.taskid} style={cardsLayout} className="rapper">
                            <div style= {text} className="titleText">{e.taskname}</div>
                            <div style={wrapper}>
                                <input placeholder="Add More Tasks"
                                        style={inputOne}/>
                                 <button style={button}>Add</button>
                            </div>
                        </div>
                    )
                })}
                 <div>
                    <div className="rapper" style={inputRapper}>
                        <input value={this.state.taskname}
                                style={input}
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
	alignContent: 'stretch'
}

const text = {
    fontSize: '15pt'
}

const button = {
    border: 'none',
    outline: 'none',
    fontFamily: 'Raleway',
    cursor: 'pointer',
    background: 'none',
    color: 'white'
}

const cardsLayout = {
    margin: '20px',
    width: '25vw',
    color: 'white',
    fontSize: '12pt'
    
}
const inputOne = {
    border: 'none',
    fontSize: '15pt',
    outline: 'none',
    padding: '3px 8px',
    background: 'none',
    borderBottom: '1px solid black',
    color: 'white',
    marginRight: '10px'
}
const input = {
    border: 'none',
    fontSize: '15pt',
    outline: 'none',
    padding: '3px 8px',
    background: '#3F3E54',
    borderBottom: '1px solid black',
    color: 'white',
    marginRight: '10px'

}

const wrapper = {
    padding: '18px 15px',
}

const inputRapper = {
    padding: '18px 15px',
    background: '#3F3E54'
}

const cards = {
    background: "#3F3E54",
    padding: '30px',
    marginLeft: '20px'
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
