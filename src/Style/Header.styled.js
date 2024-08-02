import styled from "styled-components";

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
background: rgba(0, 0, 0, 0.5); 
left: 0;
top: 10px;
bottom: 10px;
color: white;
`;

export const Logo = styled.div`
display: flex;
align-items: center;
padding-left: 20px;
`;

export const LogoImg = styled.img`
width: 30px;
height: 30px;
background-color: #57B9FF;
border-radius: 50%;
margin-right: 10px;
`;

export const LogoText = styled.h1`
font-size: 24px;
font-weight: bold;
`;

export const Nav = styled.nav`
margin-left: 10px;
display: flex;
gap: 20px;
`;

export const NavLink = styled.a`
color: white;
text-decoration: none;
font-weight: bold;
font-size: 16px;
`;

export const SearchContainer = styled.div`
display: flex;
align-items: center;
background: rgba(255, 255, 255, 0.2);
border-radius: 5px;
padding: 5px 10px;
`;
export const ShortcutKeyIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  font-size: 16px;
  color: #fff;
  margin-left: 10px;
`;

export const SearchInput = styled.input`
background: transparent;
border: none;
color: white;
margin-left: 10px;
&:focus {
  outline: none;
}
`;
export const ActionIcons = styled.div`
display: flex;
gap: 15px;
`;