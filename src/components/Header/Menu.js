import React, { Component } from 'react'
import Nav from './Nav'


class Menu extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="menu">
                    <Nav tagz="LogOut" linky="/"/>
                    <Nav tagz="Home" linky="/home"/>
                    <Nav tagz="Create Goal" linky="/Create"/>
                </div>
            </div>
        )
    }
}


export default Menu
