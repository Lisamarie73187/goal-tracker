import React from 'react'
import Nav from './Nav';
import './Header.css';
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom';
import AccountInfo from '../Header/AccountInfo'

const Header = (props) => {
    return (
        <div>
            <Link to="/"><img className="image" src={logo} alt="logo"/></Link>
            <AccountInfo/>
            <div className="nav">
                <Nav tagz="Home" linky="/home"/>
                <Nav tagz="Create Goal" linky="/Create"/>
            </div>
            
        </div>
    )
}
 

export default Header;


