import React, { useEffect, useRef, useState } from "react";
import {
  ActionIcons,
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  HeaderContainer,
  IconContainer,
  IconText,
  Logo,
  LogoImg,
  LogoText,
  Nav,
  NavLink,
  SearchContainer,
  SearchInput,
  ShortcutKeyIcon,
  DarkTheme,
  LightTheme
  
 
} from "../../Style/Header.styled";
import {
  FaSearch,
  FaShoppingCart,
} from "react-icons/fa";
import { MdOutlineWallet } from "react-icons/md";
import { MdOutlineHandshake } from "react-icons/md";
import { LuPencilRuler } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { FaRegUserCircle } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { GoMoon } from "react-icons/go";
import { LuGraduationCap } from "react-icons/lu";
import { PiNewspaper } from "react-icons/pi";
import { MdOutlineContactSupport } from "react-icons/md";
import { SiOpensea } from "react-icons/si";
import { IoIosArrowForward } from "react-icons/io";
import { ThemeProvider } from "styled-components";
import Switch from "./Switch";

const Header = () => {
  const [theme, setTheme] = useState("light")
  const isDarkTheme = theme === "dark";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleTheme = () => {
    setTheme(isDarkTheme ? "light" : "dark");
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <HeaderContainer>
      <Logo>
        <LogoImg src="./images/opensea-logo.svg" alt="Logo" />
        <LogoText>OpenSea</LogoText>
      </Logo>
      <Nav style={{marginLeft: "-270px"}}>
        <NavLink href="#">Drops</NavLink>
        <NavLink href="#">Stats</NavLink>
        <NavLink href="#">Create</NavLink>
      </Nav>
      <SearchContainer>
        <FaSearch color="white" />
        <SearchInput type="text" placeholder="Search" />
        <ShortcutKeyIcon>/</ShortcutKeyIcon>
      </SearchContainer>
      <ActionIcons>
        <IconContainer>
          <MdOutlineWallet
            title="Login"
            style={{ padding: "10px", fontSize: "1rem" }}
          />
          <IconText
            style={{
              fontSize: "1rem",
              fontFamily: "sans-serif",
              paddingRight: "10px",
            }}
          >
            Login
          </IconText>
        </IconContainer>
        <IconContainer ref={dropdownRef} onClick={toggleDropdown}>
          <FaRegUserCircle
            title="Profile"
            style={{ padding: "10px 20px", fontSize: "1.1rem" }}
          />
          {isDropdownOpen && (
            <ThemeProvider theme={isDarkTheme ? DarkTheme : LightTheme}>
              
            <DropdownMenu>
              <DropdownContainer>
                <DropdownItem>
                  <CiUser title="user" style={{ paddingLeft: "20px" }} />
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    Profile
                  </IconText>
                </DropdownItem>
                <DropdownItem>
                  <IoEyeOutline title="list" style={{ paddingLeft: "20px" }} />
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    WatchList
                  </IconText>
                </DropdownItem>
              </DropdownContainer>
              <DropdownContainer>
                <DropdownItem>
                <MdOutlineHandshake title="holding hand" style={{ paddingLeft: "20px" }}/>
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    Deals
                  </IconText>
                </DropdownItem>
                <DropdownItem>
                <LuPencilRuler title="studio" style={{paddingLeft:"20px" }}/>
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    Studio
                  </IconText>
                </DropdownItem>
                <DropdownItem>
                  <SiOpensea  title="user" style={{ paddingLeft: "20px" }} />
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    OpenSea Pro
                  </IconText>
                </DropdownItem>
              </DropdownContainer>
              <DropdownContainer>
                <DropdownItem>
                  <IoSettingsOutline title="setting" style={{ paddingLeft: "20px" }} />
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    Settings
                  </IconText>
                </DropdownItem>
                <DropdownItem>
                  <CiGlobe title="user" style={{ paddingLeft: "20px" }} />
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    Language
                  </IconText>
                  <span style={{color: `${props => props.theme.color}`, paddingLeft: "60px", display: "flex", flexDirection: "row"}}>en <IoIosArrowForward /> </span>
                </DropdownItem>
                <DropdownItem>
                  <GoMoon title="night mode" style={{ paddingLeft: "20px" }} />
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    Night Mode
                  </IconText>
                   <Switch toggleTheme={toggleTheme} />
                </DropdownItem>
              </DropdownContainer>
              <DropdownContainer>
                <DropdownItem>
                  <LuGraduationCap title="learn" style={{ paddingLeft: "20px" }} />
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    Learn
                  </IconText>
                </DropdownItem>
                <DropdownItem>
                  <PiNewspaper title="help center" style={{ paddingLeft: "20px" }} />
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    Help center
                  </IconText>
                </DropdownItem>
                <DropdownItem>
                  <MdOutlineContactSupport title="support" style={{ paddingLeft: "20px" }} />
                  <IconText style={{ color: `${props => props.theme.color}`, padding: "4px 15px" }}>
                    Support
                  </IconText>
                </DropdownItem>
              </DropdownContainer>
            </DropdownMenu>
            </ThemeProvider>
          )}
        </IconContainer>
        <IconContainer>
          <FaShoppingCart
            title="Cart"
            style={{ padding: "10px 20px", fontSize: "1rem" }}
          />
        </IconContainer>
      </ActionIcons>
    </HeaderContainer>
  );
};

export default Header;
