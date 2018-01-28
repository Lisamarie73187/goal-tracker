import React, { Component } from 'react';
import './landingpage.css';
import logo from './../../assests/logo.png';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import { login } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { StyleRoot } from 'radium'




class LandingPage extends Component {
    constructor() {
      super();
      this.lock = null;
      this.login = this.login.bind(this);
    }

    componentDidMount() {
        this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
        this.lock.on('authenticated', authResult => {
          this.lock.getUserInfo(authResult.accessToken, (error, user) => {
            axios.post('/login', { userId: user.sub }).then(response => {
              this.props.login(response.data.user);
              this.props.history.push('/home');
            })
          })
        })
      }

    login() {
        this.lock.show();
    }

    render() {
        return (
            <div>
                <StyleRoot>
                    <div className="hero">
                        <div style={styling.logoText}>
                        <div><img style={styling.logoStyle} src={logo} alt="logo"/> </div>
                        <div style={styling.alignText}>Goalsy</div>
                        </div>
                        <div style={styling.base}>
                        <h1>The <span className="pulse">Smart</span> Way to Track Your Goals</h1>
                        <div className="buttonPulse">
                        <button onClick={this.login} style={styling.buttons} className="startButton">Get Started</button>
                        </div>
                    </div>
                </div>
                    <div style={demo}>To log in as a guest please use: email: example@example.com password: demo </div>
        </StyleRoot>
        </div>
        )
    }
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
    fontSize: '2em',
    '@media (max-width: 730px)': {
        fontSize: '1.6em'
    },
    '@media (max-width: 527px)': {
        fontSize: '1.3em'
        },
    },
    logoText: {
        display: 'flex',
        flexDirection: 'row',
       
    },
    alignText: {
        padding: '8px',
        color: 'white',
        fontFamily: 'Fredoka One',
        letterSpacing: '2pt',
        fontSize: '35pt',
        '@media (max-width: 527px)': {
            fontSize: '20pt'
        }
    },
    logoStyle: {
        width: '100px',
        height: 'auto',
    },
}
 const demo = {
    fontSize: '12pt',
    backgroundColor: '#292839',
    textAlign: 'center',
    color: 'white',
    padding: '20px'
 }





const mapDispatchToProps = {
    login: login,
  };
  


  export default connect(null, mapDispatchToProps)(LandingPage);