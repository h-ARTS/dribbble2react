import React from 'react'
import styled from 'styled-components'
import Menu from './Menu';

const NavbarGroup = styled.div`
  background: transparent;
  height: 100px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  `

const BurgerMenu = styled.div`
  display: grid;
  position: relative;
  grid-row-gap: 8px;
  align-items: center;
  padding: 10px;
  span {
    width: 25px;
    height: 1px;
    background-color: #666;
    transition: 0.4s cubic-bezier(0.03, 0.17, 0.07, 1.86);
  }
  &:hover {
    span {
      &:first-child {
        transform: rotate(45deg) translate(0px, 4px);
      }
      &:nth-child(2) {
        transform: rotate(-45deg) translate(2px, -7px);
      }
    }

    .Menu {
      opacity: 1;
    }
  }
`

const Logo = styled.div`
  img {
    max-width: 100%;
    height: 25px;
  }
`

const Navbar = () => (
  <NavbarGroup>
    <Logo>
      <img src={require("../../images/logo.png")} alt="Project Minimal"/>
    </Logo>
    <BurgerMenu>
      <span></span>
      <span></span>
      <Menu />
    </BurgerMenu>
  </NavbarGroup>
)

export default Navbar