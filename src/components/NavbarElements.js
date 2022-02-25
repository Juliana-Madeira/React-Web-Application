import { FaBars } from 'react-icons/fa';
import { Link as LinkLogo } from 'react-router-dom';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';



export const Nav = styled.nav`
  background: #f8f6ea;
  height: 250px;
  display: flex;
  justify-content: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
  align-items: flex-end;
  position: relative;
`;

export const NavLink = styled(Link)`
  color: rgba(43, 22, 12, 0.938);
  display: flex;
  text-align: center;
  align-items: center;
  text-decoration: none;
  padding: 1rem 1rem;
  height: 32px;
  cursor: pointer;
  flex-wrap: wrap;
  font-weight: bold;
  &.active {
    background-color: rgba(43, 22, 12, 0.938);
    color: white;
    border-radius: 20px;
    text-align: center;
    height: 32px;
    display: flex;
  align-items: center;
  align-content: center
  }
`;

export const Linky = styled(LinkLogo)`
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 10px;
  margin-left: 4px;

`;

export const Bars = styled(FaBars)`
  display: none;
  color: rgba(43, 22, 12, 0.938);
 
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    
  }
`;

export const SmallMenu = styled.div`
display: ${(props) => props.open ? 'flex' : 'none'};
flex-direction: column;
margin-top: 20px;
width: 250px;
height: auto;
position: absolute;
top: 40px;
right: 40px;
background-color: #f8f6ea;
@media screen and (min-width: 769px) {
    display: none;
      
  }
` 

export const NavMenu = styled.div`
  display: flex;
  align-items: center;

  font-size: 18px;
 
  @media screen and (max-width: 768px) {
    display: none;
  }

`;


