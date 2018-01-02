import React from 'react'
import { Link } from 'react-router-dom';
import './landingpage.css';
import logo from './../../assests/logo.png';
// import Animation from './Animation';
import Radium, { StyleRoot } from 'radium';

const LandingPage = () => {
    return (
        <div>
        <StyleRoot>
            <div className="hero">
                <div style={styling.logoText}>
                    <img style={styling.logoStyle} src={logo} alt="logo"/> 
                    <div style={styling.alignText}>Goalsy</div>
                </div>
                <div style={styling.base}>
                    <h1>The <span style={yellow}>Smart</span> Way to Track Your Goals</h1>
                    <Link to="/home" className="noDecor">
                        <span className="startButton">Get Started</span>
                    </Link>
                </div>
            </div>
        </StyleRoot>
    </div>
    )
}
 

var styling = {
    base: {
    textAlign: 'center',
    position: 'absolute',
    top: '45%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'white',
    fontFamily: 'Raleway',
    fontSize: '2em'
    },
    logoText: {
        display: 'flex',
        flexDirection: 'row',
    },
    alignText: {
        padding: '20px',
        color: 'white',
        fontFamily: 'Raleway',
        fontSize: '35pt',
    },
    logoStyle: {
        height: '90px',
        width: '140px'
    }
}



var yellow = {
    color:'#ffd700'
}





export default Radium(LandingPage);
