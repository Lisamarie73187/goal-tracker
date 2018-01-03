import React, { Component } from 'react'

import Header from '../Header/Header';


class CreateGoal extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="homePage">
                <Header/>
                <div className="rapperLarge">
                    <div>Create your Goal</div>
                    <p>Create a goal. You are able to make 10 goals. Once you create a goal <br/>
                    you can add tasks to it.</p>
                    <form>
                        <input className="inputs" type="text" placeholder="Goal Title (20 Char limit)"/>
                        <input className="inputs" type="text" placeholder="Goal Description"/>
                        <input className="datess" type="text" placeholder="Start Date"/>
                        <input className="datess" type="text" placeholder="End Date"/>
                    </form>
                </div>
            </div>
        )
    }
}



export default CreateGoal
