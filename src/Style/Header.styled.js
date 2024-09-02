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
  position: fixed;
  z-index: 1000;
  width: 100%;

  @media (max-width: 768px) {
    background: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#ffffff" : "#141414") : "transparent"};
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
    padding: 5px;
    flex-direction: row;
    align-items: flex-start;
  }
  @media (max-width: 425px) {
    padding: 5px;
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  border-right: 1px solid ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    border-right: none;
    margin-bottom: 10px;
  }
  @media (max-width: 425px) {
    border-right: none;
    margin-bottom: 10px;
  }
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

  @media (max-width: 768px) {
    font-size: 15px;
    padding-right: 0;
  }
  @media (max-width: 425px) {
    font-size: 15px;
    padding-right: 0;
  }
`;

export const Nav = styled.nav`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const NavLink = styled.a`
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
  font-size: 1.2rem;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  &:hover > div {
    display: block;
    background: ${({ theme }) =>
      theme === "light" ? "rgba(0, 0, 0, 0.1)" : "rgba(0, 0, 0, 0.1)"};
  }

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
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
  @media screen and (max-width: 768px) {
    display: ${({ isIconVisible }) => (isIconVisible ? "flex" : "none")};
    background: none;
  }
  @media (max-width: 425px) {
    display: ${({ isIconVisible }) => (isIconVisible ? "flex" : "none")};
    background: none;
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

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
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

  @media (max-width: 768px) {
   display: none;

  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const ActionIcons = styled.div`
  display: flex;
  gap: 1rem;
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};

  @media (max-width: 768px) {
    display: none;
  }
  @media (max-width: 425px) {
    display: none;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#EBEBEB" : "#333333") : "#555555"};
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};
  border-radius: 10px;

  @media screen and (max-width: 768px) {
    > * {
      display: none; 
    }

    // Only specific classes
    .login-container,
    .menu-container {
      display: flex;
      flex-direction: row;
    }
  }
  @media (max-width: 425px) {
    > * {
      display: none; 
    }

    // Only specific classes
    .login-container,
    .menu-container {
      display: flex;
      flex-direction: row;
    }
  }
  
`;

export const IconText = styled.h3`
  font-size: 1rem;
  color: ${({ isScrolled, theme }) =>
    isScrolled ? (theme === "light" ? "#000000" : "#ffffff") : "#ffffff"};

  @media (max-width: 768px) {
    display: none;
  }
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

export const PageOverlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1;
  top: 0;
  left: 0;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

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
  transition: background 0.4s;
  border-radius: 34px;

  &::before {
    position: absolute;
    content: "";
    height: 14px;
    width: 14px;
    left: 3px;
    bottom: 3px;
    background: ${(props) => props.theme.colors.secondary};
    transition: transform 0.4s;
    border-radius: 50%;
  }

  &.checked {
    background: green;

    &::before {
      transform: translateX(15px);
    }
  }
`;

export const MenuDropdown = styled(DropdownMenu)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
  @media (max-width: 425px) {
    display: flex;
  }
`;
