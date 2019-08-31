import React from "react"
import styled from 'styled-components'

const HeaderGroup = styled.div`
  position: absolute;
  top: 25%;
  width: 512px;
  
  h1 {
    font-size: 36px;
  }

  p {
    font-size: 13px;
    color: rgba(0,0,0, .5);
  }
`

const Header = () => (
  <header className="Header">
    <HeaderGroup>
      <h1>design like<br/> there's no tomorrow.</h1>
      <p>Dolor deserunt ipsum sint excepteur minim. Minim adipisicing nisi anim aliqua tempor anim.</p>
    </HeaderGroup>
  </header>
)

export default Header
