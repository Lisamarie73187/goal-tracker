import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { StyleRoot }from 'radium'




const Nav = (props) => {
    return (  
        <div>
            <StyleRoot>
             <Link className="noDecor" to={props.linky}><h4 style={color}>{props.tagz}</h4></Link>
             </StyleRoot>
        </div>)
}
 
const color = {
    color: 'white',
    paddingRight: '20px',
    fontFamily: 'Raleway serif',
    '@media (max-width: 610px)': {
        fontSize: '15pt',
        padding: '10px'
    },
    '@media (max-width: 507px)': {
        fontSize: '12pt',
        padding: '6px'
    }
}





export default Nav