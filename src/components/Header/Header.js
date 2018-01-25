import React from 'react'
import Nav from './Nav';
import './Header.css';
import logo from '../../assests/logo.png'
import AccountInfo from '../Header/AccountInfo'

const Header = (props) => {
    return (
        <div>
            <img className="image" src={logo} alt="logo"/>
            <AccountInfo/>
            <div className="nav">
                <Nav tagz="LogOut" linky="/"/>
                <Nav tagz="Home" linky="/home"/>
                <Nav tagz="Create Goal" linky="/Create"/>
            </div>
            
        </div>
    )
}
 

export default Header;


