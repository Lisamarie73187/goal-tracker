import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import radium from 'radium'




const Nav = (props) => {
    return (  
        <div>
             <Link className="noDecor" to={props.linky}><h4 className="color">{props.tagz}</h4></Link>
        </div>)
}
 


// const color = {
//     color: 'white',
//     paddingRight: '20px',
//     fontFamily: "'Raleway','serif'",
// }


export default radium(Nav)