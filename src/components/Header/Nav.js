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
}





export default (Nav)