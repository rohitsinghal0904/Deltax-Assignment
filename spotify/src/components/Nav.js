import React from 'react'
import {Link,useNavigate} from "react-router-dom";
import './Nav.css';

function Nav() {
  return (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add">Add Song</Link></li>
        </ul>
    </nav>
  )
}

export default Nav;