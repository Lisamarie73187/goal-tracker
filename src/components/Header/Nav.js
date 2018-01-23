import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import radium ,{ StyleRoot }from 'radium'




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
    '@media (max-width: 1024px)': {
        fontSize: '23pt',
    },
    '@media (max-width: 768px)': {
        fontSize: '20pt',
    }
}





export default (Nav)