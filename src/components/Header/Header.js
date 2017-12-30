import React from 'react'
import Nav from './Nav';
import './Header.css';
import logo from '../../assests/logo.png'
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className="navBar">
            <Link to="/"><img style={image} src={logo} alt="logo"/></Link>
            <div className="nav">
                <Nav tagz="Home" linky="/home"/>
                <Nav tagz="About" linky="/Create"/>
                <Nav tagz="Create Goal" linky="/Create"/>
            </div>
        </div>
    )
}
 

export default Header;

const image = {
    float: 'left',
    height: '65px',
    margin: '0'
}