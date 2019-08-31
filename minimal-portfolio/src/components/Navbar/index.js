import React from 'react'
import styled from 'styled-components'

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
  grid-row-gap: 8px;
  align-items: center;
  span {
    width: 25px;
    height: 1px;
    background-color: #666;
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
    </BurgerMenu>
  </NavbarGroup>
)

export default Navbar