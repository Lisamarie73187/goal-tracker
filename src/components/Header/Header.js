import React, {Component} from 'react'
import Nav from './Nav';
import './Header.css';
import logo from '../../assests/logo.png'
import AccountInfo from '../Header/AccountInfo'
import menu from '../../assests/menu.png'
import Menu from './Menu'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menu: false
        }

        this.openMenu = this.openMenu.bind(this)
    }

    openMenu(){
        this.setState({
            menu: !this.state.menu
        })
    }

    render() {
        return (
            <div>
                <div>
                    <img className="image" src={logo} alt="logo"/>
                    <AccountInfo/>
                    <div className="nav">
                        <Nav tagz="LogOut" linky="/"/>
                        <Nav tagz="Home" linky="/home"/>
                        <Nav tagz="Create Goal" linky="/Create"/>
                    </div>
                        <div onClick={this.openMenu} className="menButton">
                        <img src={menu} alt="menubars" width="60px" height="60px"/>
                        <div>{this.state.menu ? <Menu/>:null}</div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Header;


