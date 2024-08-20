import React, { useEffect, useRef, useState } from "react";
import {
  ItemContainer,
  ItemHeader,
  ItemSearch,
  ItemSearchInput,
  SearchbarContainer,
  Div,
  Body,
  ItemBody,
  DropDownItemContainer,
  DropDownItemMenu,
} from "../../Style/Items.styled";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdGridOn } from "react-icons/md";
import { BsGrid1X2 } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";
import { RiLayoutGridLine } from "react-icons/ri";
import ItemCard from "./ItemCard";
import ItemSidebar from "./ItemSidebar";
import { PageOverlay, Text } from "../../Style/Header.styled";

const Items = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const [isdropDownOpen, setIsdropDownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  const toggleDropdown = () => {
    setIsdropDownOpen(!isdropDownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsdropDownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <ItemContainer>
      <ItemHeader style={{ background: "none", color: "#A3A3A3", gap: "1rem" }}>
        <h3>Item</h3>
        <h3>Offers</h3>
        <h3>Analytics</h3>
        <h3>Activity</h3>
      </ItemHeader>
      <SearchbarContainer>
        <div>
          <img
            src="/images/menu.svg"
            alt="icon"
            onClick={toggleSidebar}
            style={{ cursor: "pointer" }}
          />

          <span>Live</span>
          <p>42 results</p>
        </div>
        <ItemSearch>
          <FaSearch />
          <ItemSearchInput type="text" placeholder="Search by name or trait" />
        </ItemSearch>
        <Div>
          <span>Price low to high</span>
          {isdropDownOpen ? (
            <IoIosArrowUp onClick={toggleDropdown} />
          ) : (
            <IoIosArrowDown ref={dropdownRef} onClick={toggleDropdown} />
          )}
          {isdropDownOpen && (
            <DropDownItemMenu>
              <DropDownItemContainer>
                <Text>Price low to high</Text>

                <Text>Price high to low</Text>

                <Text>Recently listed</Text>

                <Text>Best offer</Text>

                <Text>Highest last sale</Text>

                <Text>Recently sold</Text>

                <Text>Recently created</Text>

                <Text>Most viewed</Text>

                <Text>Oldest</Text>

                <Text>Most Favorited</Text>

                <Text>Ending soon</Text>

                <Text>Recently received</Text>
              </DropDownItemContainer>
            </DropDownItemMenu>
          )}
          <PageOverlay
            onClick={() => setIsdropDownOpen(false)}
            className={isdropDownOpen ? "visible" : null}
          />
        </Div>
        <Div style={{ width: "180px" }}>
          <TfiMenuAlt style={{ paddingLeft: "5px", marginRight: "10px" }} />
          <MdGridOn style={{ marginRight: "10px" }} />
          <RiLayoutGridLine style={{ marginRight: "10px" }} />
          <BsGrid1X2 />
        </Div>
      </SearchbarContainer>
      <ItemBody>
        {isSidebarVisible && <ItemSidebar />}
        <Body style={{ width: isSidebarVisible ? "80%" : "100%" }}>
          <ItemCard />
        </Body>
      </ItemBody>
    </ItemContainer>
  );
};

export default Items;
