import React, { Component } from 'react'
import './CreateGoal.css';

import Header from '../Header/Header';
import Footer from '../Home/Footer/Footer';


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
                    <div className="titleText">Create your Goal</div>
                    <p>Create a goal. You are able to make 10 goals. Once you create a goal <br/>
                    you can add tasks to it.</p>
                    <form>
                        <input className="inputs" type="text" placeholder="Goal Title (20 Char limit)"/>
                        <input className="inputs" type="text" placeholder="Goal Description"/>
                        <input className="datess" type="text" placeholder="Start Date"/>
                        <input className="datess" type="text" placeholder="End Date"/>
                    </form>
                </div>
                <Footer/>
            </div>
        )
    }
}



export default CreateGoal
