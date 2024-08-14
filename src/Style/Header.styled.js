import styled from "styled-components";
export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#ffffff" : "#141414") : "transparent"};
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
  transition: background-color 0.3s ease, color 0.3s ease;
  backdrop-filter: blur(10px);
  border: none;
  padding: 0.5rem 1rem;
  backdrop-filter: blur(10px);
  position: fixed;
  z-index: 1000;
  width: 100%;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};
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
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
  padding-right: 20px;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
`;

export const NavLink = styled.a`
   color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
  font-size: 1.2rem;
  //font-weight: bold;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover > div {
    display: block;
    background: ${({ theme }) =>
      theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#EBEBEB" : "#333333") : "#555555"};
  padding: 0.5rem 1rem;
  border-radius: 5px;
  &:hover {
    background: ${({ isScrolled, theme }) =>
      isScrolled ? (theme === "light" ? "#D6D6D6" : "#444444") : "#555555"};
  }
`;
export const ShortcutKeyIcon = styled.div`
  margin-left: 0.5rem;
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
  background: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#DBDBDB" : "#555555") : "#A3A3A3"};
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-size: 0.8rem;
`;

export const SearchInput = styled.input`
  border: none;
  background: none;
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
  margin-left: 0.5rem;
  outline: none;

  &::placeholder {
    color: ${({ isScrolled, theme }) =>
      isScrolled ? (theme === "light" ? "#666666" : "#aaaaaa") : "#ffffff"};
    font-size: 1rem;
    font-family: sans-serif;
  }
`;

export const ActionIcons = styled.div`
  display: flex;
  gap: 1rem;
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
`;
export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#EBEBEB" : "#333333") : "#555555"};
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
  border-radius: 10px;
`;

export const IconText = styled.h3`
  font-size: 1rem;
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
`;
export const Text = styled.h3`
  font-size: 1rem;
  padding: 20px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const DropdownMenu = styled.div`
  position: absolute;
  width: 250px;
  height: auto;
  top: 65%;
  right: 10px;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.primary};
  color: black;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
export const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #e0e0e0;
  background-color: ${({ theme }) => theme.colors.background};
`;
export const DropdownItem = styled.div`
  display: flex;
  align-items: center;
  font-family: sans-serif;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    background: ${({ theme }) => theme.colors.lightGray};
  }
`;

// export const LightTheme = {
//   background: '#ffffff',
//   text: '#000000',
//   dropdownBackground: '#ffffff'
// };

// export const DarkTheme = {
//   background: '#333333',
//   text: '#ffffff',
//   dropdownBackground: '#333333'
// };
export const PageOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0px;
  left: 0;
  opacity: 0;
  pointer-events: none;

  &.visible {
    opacity: 1;
    pointer-events: auto;
    z-index: 1;
  }
`;
export const Toggle = styled.div`
  position: relative;
  width: 35px;
  height: 20px;
  cursor: pointer;
  background: ${(props) => props.theme.colors.primary};
  -webkit-transition: 0.4s;
  transition: 0ms.4s;
  border-radius: 34px;
  &::before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background: ${(props) => props.theme.colors.secondary};
    -webkit-transition: 0ms.4s;
    transition: 0ms.4s;
    border-radius: 50%;
  }
  &.checked {
    background: green;

    &:before {
      -webkit-transform: translateX(15px);
      -ms-transform: translateX(15px);
      transform: translateX(15px);
    }
  }
`;
