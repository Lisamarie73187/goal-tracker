import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { login } from '../../ducks/reducer';


class AccountInfo extends Component {
  componentDidMount() {
    axios.get('/user-data').then(response => {
      if (response.data.user) {
        this.props.login(response.data.user);
      }
    });
  }

  render() {
    const { user } = this.props;
    return (
      <div style={layout}>
        {user && <div>
          <img src={user.pictureUrl}  alt="profilepic" width="50px" style={picture}/>
          <div style={texty}>Welcome:  {user.name}</div>
        </div>}
        {!user && <p style={white}>You must login! <Link style={white}to="/">Log in</Link></p>}
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
    color: 'white'
}

const texty = {
    color: 'white',
    float: 'right',
    padding: '20px'
}
const picture = {
    borderRadius: '50%'
}
const mapDispatchToProps = {
    login: login,
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);