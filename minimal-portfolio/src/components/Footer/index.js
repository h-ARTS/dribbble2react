import React from 'react'
import styled from 'styled-components'

import '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faTwitter, faDribbble } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const FooterGroup = styled.footer`
  margin: 25px 0 50px;
`

const SocialButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 15px;
  margin-left: 30px;
  a {
    color: #cdcdcd;
    text-decoration: none;
    transition: 0.7s cubic-bezier(0.2, 0.8, 0.2, 1);

    &:hover {
      color: #000;
    }
  }
`

const Left = styled.div`
  float: left;
  p {
    font-family: 'Wes FY', sans-serif;
  }
  `

const Right = styled.div`
  float: right;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-family: 'Wes FY', sans-serif;
  }
`

const Clearfix = styled.div`
  clear: both
`

const Footer = () => {
  return (
    <FooterGroup>
      <Left>
        <p>made for project365.design</p>
      </Left>
      <Right>
        <p>we're social.</p>
        <SocialButtons>
          <a href="https://facebook.com" alt="Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://twitter.com" alt="Twitter">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href="https://dribbble.com" alt="Dribbble">
            <FontAwesomeIcon icon={faDribbble} />
          </a>
        </SocialButtons>
      </Right>
      <Clearfix />
    </FooterGroup>
  )
}

export default Footer
