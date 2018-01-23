import React, { Component } from 'react';
import './landingpage.css';
import logo from './../../assests/logo.png';
import Auth0Lock from 'auth0-lock';
import axios from 'axios';
import { login } from '../../ducks/reducer';
import { connect } from 'react-redux';
import Radium, { StyleRoot } from 'radium'




class LandingPage extends Component {
    constructor() {
      super();
      this.lock = null;
      this.login = this.login.bind(this);
    }

    componentDidMount() {
        this.lock = new Auth0Lock(process.env.REACT_APP_AUTH0_CLIENT_ID, process.env.REACT_APP_AUTH0_DOMAIN);
        console.log('this.lock', this.lock);
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
                        <h1>The <span style={yellow}>Smart</span> Way to Track Your Goals</h1>
                        <button onClick={this.login} style={styling.buttons} className="startButton">Get Started</button>
                    </div>
                </div>
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
    '@media (max-width: 360px)': {
        fontSize: '12pt',
        // padding: '10px',
        top: '35%',
        
    }
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
        '@media (max-width: 360px)': {
            fontSize: '23pt',
            padding: '12px'
        }
    },
    logoStyle: {
        width: '100px',
        height: 'auto',
        '@media (max-width: 360px)': {
            width: '80px',
            height: 'auto',
        }
    },
    buttons: {
        '@media(max-width: 360px)': {
            padding: '5px 10px',
            fontSize: '15pt'
        }
    }
}

var yellow = {
    color:'#ff8c69'
}





const mapDispatchToProps = {
    login: login,
  };
  


  export default connect(null, mapDispatchToProps)(LandingPage);