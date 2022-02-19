import React from "react";
import { NavLink } from "react-router-dom";
import Spork from '../images/The-Spork-Logo.png';
import './Header.css'



const Header = () =>{
return(
    <div className="header">
        <div className="category-row">
    <NavLink className='category' to='/categories/Vegetarian'>
    <h4>Vegetarian</h4>
    </NavLink>
    <NavLink  className='category' to='/categories/Vegan'>
    <h4>Vegan</h4>
    </NavLink >
    <NavLink  className='category' to='/categories/Dessert'>
    <h4>Dessert</h4>
    </NavLink >
    </div>
    <NavLink  className='logo' to='/'>
    <img src={Spork} alt="the-spork-logo"/>
    </NavLink >
    <div className="category-row">
    <NavLink  className='category' to='/categories/about'>
    <h4>About</h4>
    </NavLink >
    <NavLink  className='category' to='/categories/ingredients'>
    <h4>Ingredients</h4>
    </NavLink >
    <NavLink  className='category' to='/categories/favorites'>
    <h4>My Favorites</h4>
    </NavLink >
    </div>
    
   
           
    </div>
)
}
export default Header;