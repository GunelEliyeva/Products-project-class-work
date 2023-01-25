import React from 'react';
import "./index.scss";
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div id='header'>
        <div><NavLink to={"/"}><h1>LOGO</h1></NavLink></div>
       <div>
       <nav>
            <ul>
                <li><NavLink to={"/"}>Home</NavLink></li>
                <li><NavLink to={"/home-pages"}>Add Products</NavLink></li>
                <li>About</li>

            </ul>
        </nav>
       </div>
    </div>
  )
}

export default Header