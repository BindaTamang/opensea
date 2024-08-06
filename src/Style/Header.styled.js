import styled from "styled-components";
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  position: relative; 
  z-index: 1; 
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid #fff;
`;

export const LogoImg = styled.img`
  width: 30px;
  height: 30px;
  background-color: #57b9ff;
  border-radius: 50%;
  margin-right: 10px;
`;

export const LogoText = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  padding-right: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
  color: white;
  font-size: 1rem;
  font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 5px;
`;
export const ShortcutKeyIcon = styled.div`
  margin-left: 0.5rem;
  color: white;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.8rem;
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  color: white;
  margin-left: 0.5rem;
  outline: none;

  &::placeholder {
    color: white;
  }
`;

export const ActionIcons = styled.div`
  display: flex;
  gap: 1rem;
  color: white;
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
`;

export const IconText = styled.h3`
  font-size: 1rem;
  color: white;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 250px;
  height: auto;
  top: 65%;
  right: 10px;
  background: ${props => props.theme.background};
  color: ${props => props.theme.color};
  color: black;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 10000;
`;
export const DropdownContainer = styled.div`
display: flex;
flex-direction: column;
border-bottom: 1px solid #e0e0e0;
background-color: ${props => props.theme.background};
`
export const DropdownItem = styled.a`
   display: flex;
  align-items: center;
  font-family: sans-serif;
  color: ${props => props.theme.color};

  &:hover {
    background: #f0f0f0;
  }
`;

export const LightTheme = {
  background: '#ffffff',
  color: '#000000'
};

export const DarkTheme = {
  background: '#333333',
  color: '#ffffff'
};