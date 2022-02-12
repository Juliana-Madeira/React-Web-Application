import React from "react";
import { Link } from "react-router-dom";
import Spork from '../images/The-Spork-Logo.png';
import './Header.css'



const Header = () =>{
return(
    <div className="header">
        <div className="category-row">
    <Link className='category' to='/categories/Vegetarian'>
    <h4>Vegetarian</h4>
    </Link>
    <Link className='category' to='/categories/Vegan'>
    <h4>Vegan</h4>
    </Link>
    <Link className='category' to='/categories/Dessert'>
    <h4>Dessert</h4>
    </Link>
    </div>
    <Link className='logo' to='/'>
    <img src={Spork} alt="the-spork-logo"/>
    </Link>
    <div className="category-row">
    <Link className='category' to='/categories/about'>
    <h4>About</h4>
    </Link>
    <Link className='category' to='/categories/ingridients'>
    <h4>Ingridients</h4>
    </Link>
    <Link className='category' to='/categories/Favorits'>
    <h4>Favorits</h4>
    </Link>
    </div>
    
   
           
    </div>
)
}
export default Header;