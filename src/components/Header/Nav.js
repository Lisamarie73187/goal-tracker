import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import radium from 'radium'




const Nav = (props) => {
    return (  
        <div style={psuedo}>
             <Link className="text"to={props.linky}><h4 className="text">{props.tagz}</h4></Link>
        </div>)
}
 



const psuedo = {
    ':hover': {
        backgroundColor: '#473567',
        borderBottomColor: '#fed734',
        borderBottomStyle: 'solid'
    }
}

export default radium(Nav)