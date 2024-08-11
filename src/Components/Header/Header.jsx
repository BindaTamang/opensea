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
  Text,
  SearchContainer,
  SearchInput,
  ShortcutKeyIcon,
  PageOverlay,
} from "../../Style/Header.styled";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
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
import Switch from "./Switch";

const Header = ({ theme, toggleTheme }) => {
  const isDarkTheme = theme === "dark";
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const profileDropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      profileDropdownRef.current &&
      !profileDropdownRef.current.contains(event.target)
    ) {
      setIsDropdownOpen(false);
      setIsProfileDropdownOpen(false);
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
      <Nav style={{ marginLeft: "-270px" }}>
        <NavLink
          href="#"
          onMouseEnter={toggleDropdown}
          onMouseLeave={() => setIsDropdownOpen(false)}
          ref={dropdownRef}
        >
          Drops
          {isDropdownOpen && (
            <DropdownMenu style={{background: "#ffffff", left: "30px", margin: "10px" }}>
              <DropdownContainer style={{background: "#ffffff",  border: "none"}} >
                <DropdownItem style={{ display: "flex", flexDirection: "column", padding: "5px", alignItems:"flex-start"}}>
                  <span style={{color: "#111111", fontFamily: "sans-serif", paddingBottom: "10px"}}>Featured</span>
                  <span style={{color: "#111111", fontFamily: "sans-serif"}}>Learn More</span>
                </DropdownItem>
              </DropdownContainer>
            </DropdownMenu>
          )}
        </NavLink>
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
        <IconContainer ref={profileDropdownRef} onClick={toggleProfileDropdown}>
          <FaRegUserCircle
            title="Profile"
            style={{ padding: "10px 20px", fontSize: "1.1rem" }}
          />
          {isProfileDropdownOpen && (
            <DropdownMenu>
              <DropdownContainer>
                <DropdownItem>
                  <CiUser title="user" style={{ paddingLeft: "20px" }} />
                  <Text style={{ padding: "4px 15px" }}>Profile</Text>
                </DropdownItem>
                <DropdownItem>
                  <IoEyeOutline title="list" style={{ paddingLeft: "20px" }} />
                  <Text style={{ padding: "4px 15px" }}>WatchList</Text>
                </DropdownItem>
              </DropdownContainer>
              <DropdownContainer>
                <DropdownItem>
                  <MdOutlineHandshake
                    title="holding hand"
                    style={{ paddingLeft: "20px" }}
                  />
                  <Text style={{ padding: "4px 15px" }}>Deals</Text>
                </DropdownItem>
                <DropdownItem>
                  <LuPencilRuler
                    title="studio"
                    style={{ paddingLeft: "20px" }}
                  />
                  <Text style={{ padding: "4px 15px" }}>Studio</Text>
                </DropdownItem>
                <DropdownItem>
                  <SiOpensea title="user" style={{ paddingLeft: "20px" }} />
                  <Text style={{ padding: "4px 15px" }}>OpenSea Pro</Text>
                </DropdownItem>
              </DropdownContainer>
              <DropdownContainer>
                <DropdownItem>
                  <IoSettingsOutline
                    title="setting"
                    style={{ paddingLeft: "20px" }}
                  />
                  <Text style={{ padding: "4px 15px" }}>Settings</Text>
                </DropdownItem>
                <DropdownItem>
                  <CiGlobe title="user" style={{ paddingLeft: "20px" }} />
                  <Text style={{ padding: "4px 15px" }}>Language</Text>
                  <span
                    style={{
                      paddingLeft: "60px",
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    en <IoIosArrowForward />{" "}
                  </span>
                </DropdownItem>
                <DropdownItem>
                  <GoMoon title="night mode" style={{ paddingLeft: "20px" }} />
                  <Text style={{ padding: "4px 15px" }}>Night Mode</Text>
                  <Switch toggleTheme={toggleTheme} />
                </DropdownItem>
              </DropdownContainer>
              <DropdownContainer>
                <DropdownItem>
                  <LuGraduationCap
                    title="learn"
                    style={{ paddingLeft: "20px" }}
                  />
                  <Text style={{ padding: "4px 15px" }}>Learn</Text>
                </DropdownItem>
                <DropdownItem>
                  <PiNewspaper
                    title="help center"
                    style={{ paddingLeft: "20px" }}
                  />
                  <Text style={{ padding: "4px 15px" }}>Help center</Text>
                </DropdownItem>
                <DropdownItem>
                  <MdOutlineContactSupport
                    title="support"
                    style={{ paddingLeft: "20px" }}
                  />
                  <Text style={{ padding: "4px 15px" }}>Support</Text>
                </DropdownItem>
              </DropdownContainer>
            </DropdownMenu>
          )}
          <PageOverlay
            onClick={() => setIsProfileDropdownOpen(false)}
            className={isProfileDropdownOpen ? "visible" : null}
          />
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
