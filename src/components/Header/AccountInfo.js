import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Radium, { StyleRoot } from 'radium'
// import axios from 'axios';
import { login } from '../../ducks/reducer';


class AccountInfo extends Component {
  componentDidMount() {
   this.props.login()
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <StyleRoot>
        <div style={layout}>
        {user && <div>
          <img src={user.pictureurl}  alt="profilepic" width="50px" style={picture}/>
          <div style={texty}>Welcome:  {user.name}</div>
        </div>}
        {!user && <p style={white}>You must login! <Link style={white}to="/">Log in</Link></p>}
        </div>
        </StyleRoot>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
};

const white = {
    color: 'white'
}
const layout = {
    float: 'left',
    paddingLeft: '30px',
    paddingTop: '10px',
    color: 'white',
    '@media (max-width: 40em)': {
      padding: '10px 3px',
    },
    '@media (max-width: 30em)': {
      display: 'none'
    }
}

const texty = {
    color: 'white',
    float: 'right',
    padding: '20px',
    '@media (max-width: 40em)': {
      padding: '20px 0px',
      paddingLeft: '0px'
    }
}
const picture = {
    borderRadius: '50%',
    '@media (max-width: 40em)': {
      display: 'none'
    }
}


const mapDispatchToProps = {
    login: login,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);