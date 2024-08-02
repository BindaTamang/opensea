import React from 'react'
import { ActionIcons, HeaderContainer, Logo, LogoImg, LogoText, Nav, NavLink, SearchContainer, SearchInput, ShortcutKeyIcon } from '../../Style/Header.styled'
import { FaSearch, FaUser, FaShoppingCart, FaSignInAlt } from 'react-icons/fa';

const Header = () => {
  return (
    <HeaderContainer>
    <Logo>
      <LogoImg src="./images/opensea-logo.svg" alt="Logo" />
      <LogoText>OpenSea</LogoText>
    </Logo>
    <Nav>
      <NavLink href="#">Drops</NavLink>
      <NavLink href="#">Stats</NavLink>
      <NavLink href="#">Create</NavLink>
    </Nav>
    <SearchContainer >
      <FaSearch color="white" />
      <SearchInput type="text" placeholder="Search" />
      <ShortcutKeyIcon>/</ShortcutKeyIcon>
    </SearchContainer>
    <ActionIcons>
      <FaSignInAlt title="Login" />
      <FaUser title="Profile" />
      <FaShoppingCart title="Cart" />
    </ActionIcons>
  </HeaderContainer>
  )
}

export default Header