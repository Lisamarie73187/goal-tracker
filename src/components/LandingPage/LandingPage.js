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
                    <Link to="/home" style={button.noDecor}>
                        <span style={[button.base, button.clicked]}>Get Started</span>
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

var button = {
    base: {
    backgroundColor: '#e3186f',
    padding: '20px',
    borderRadius: '72px',
    mozBorderRadius: '72px',
    webkitBorderRadius: '72px',
    color: 'white',
    border: 'none',
    fontSize: '16pt',
    fontFamily: 'Raleway',
    webkitBoxShadow: '12px 14px 43px -4px rgba(0,0,0,0.35)',
    mozBoxShadow: '12px 14px 43px -4px rgba(0,0,0,0.35)',
    boxShadow: '12px 14px 43px -4px rgba(0,0,0,0.35)',
    cursor: 'pointer',
    },
    primary: {
        ':hover': {
            backgroundColor: '#CB0057',
        },
    },
    clicked: {
        ':active': {
           fontSize: '20pt'
        }
    },

    noDecor: {
        textDecoration: 'none'
    }
    
}

var yellow = {
    color:'#fed734'
}





export default Radium(LandingPage);
