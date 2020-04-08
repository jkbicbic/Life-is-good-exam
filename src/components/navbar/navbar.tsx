import React from 'react';
import './navbar.scss'
import { Link } from 'react-router-dom';
import Logo from '../../img/logo.png'

const NavBar = () =>{
  return(
    <nav id="top" className="navbar">
      <Link to={"/"}>
        <img className="navbar__logo" src={Logo} alt="logo"/>
      </Link>
    </nav>
  )
}

export default NavBar