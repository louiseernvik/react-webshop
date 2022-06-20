import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components';

function Header() {
  return (
    <nav className='max-width'>
      <NavLink to="/" className='header'>Products</NavLink>
    </nav>
  )
}

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  border-bottom: 1px solid black;
  font-size: 20px;
  margin-left: 40px;
`

export default Header