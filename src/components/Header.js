import React from "react";
import { Link } from "react-router-dom";
import Spork from '../images/The-Spork-Logo.png';
import './Header.css'



const Header = () =>{
return(
    <div className="header">
    <Link className='logo' to='/'>
    <img src={Spork} alt="the-spork-logo"/>
    </Link>
           
    </div>
)
}
export default Header;