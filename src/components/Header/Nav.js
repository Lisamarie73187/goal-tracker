import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';




const Nav = (props) => {
    return (  
        <div>
             <Link className="text"to={props.linky}><h4 className="text">{props.tagz}</h4></Link>
        </div>)
}
 

export default Nav

