// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: transparent; /* Transparent background */
  position: absolute; /* Position navbar on top */
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #c27730;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const StyledLink = styled(Link)`
  color: #f8f5f0;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 500;
  position: relative;
  padding: 0.5rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffd700;
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2px;
    background: #ffd700;
    transition: width 0.3s;
    margin-top: 0.3rem;
  }

  &:hover::after {
    width: 100%;
  }
`;

const Navbar = () => (
  <Nav>
    <Logo>Bahar</Logo>
    <NavLinks>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/menu">Menu</StyledLink>
      <StyledLink to="/gallery">Gallery</StyledLink>
      <StyledLink to="/aboutus">About Us</StyledLink>
      <StyledLink to="/contact">Contact</StyledLink>
    </NavLinks>
  </Nav>
);

export default Navbar;
