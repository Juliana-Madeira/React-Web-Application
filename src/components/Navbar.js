import React, { useState } from "react";
import { Nav, NavLink, Bars, NavMenu, Linky, SmallMenu } from "./NavbarElements";
import Spork from "../images/The-Spork-Logo.png";

const Navbar = () => {
  const [smallMenuOpen, setSmallMenuOpen] = useState(false);


  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/categories/Vegetarian" activeStyle>
            Vegetarian
          </NavLink>
          <NavLink to="/categories/Vegan" activeStyle>
            Vegan
          </NavLink>
          <NavLink to="/categories/Dessert" activeStyle>
            Dessert
          </NavLink>
        </NavMenu>
        <Linky to="/">
          <img src={Spork} alt="the-spork-logo" />
        </Linky>
        <NavMenu>
          <NavLink to="/categories/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/categories/ingredients" activeStyle>
            Ingredients
          </NavLink>
          <NavLink to="/categories/favorites" activeStyle>
            Favorites
          </NavLink>
        </NavMenu>
      <Bars onClick={() => {setSmallMenuOpen(!smallMenuOpen)}}/>
      <SmallMenu open={smallMenuOpen}>
      <NavLink to="/categories/Vegetarian" activeStyle>
            Vegetarian
          </NavLink>
          <NavLink to="/categories/Vegan" activeStyle>
            Vegan
          </NavLink>
          <NavLink to="/categories/Dessert" activeStyle>
            Dessert
          </NavLink>
          <NavLink to="/categories/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/categories/ingredients" activeStyle>
            Ingredients
          </NavLink>
          <NavLink to="/categories/favorites" activeStyle>
            Favorites
          </NavLink>
      </SmallMenu>    
      </Nav>
    </>
  );
};

export default Navbar;
