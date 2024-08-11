import React, { useEffect, useRef, useState } from "react";
import {
  CardHeader,
  ChainFilter,
  HeaderItem,
  ItemCard,
  ItemContainer,
  TimeFilter,
  LeftSideHeader,
  ToggleWrapper,
  Slider,
  TimeToggleWrapper,
  TimeSlider,
} from "../../Style/Table.styled";
import { IoIosArrowDown } from "react-icons/io";
import Trending from "./Trending";
import Top from "./Top";
import {
  DropdownContainer,
  DropdownItem,
  DropdownMenu,
  IconContainer,
  Text,
} from "../../Style/Header.styled";

const RankCollection = () => {
  const [selected, setSelected] = useState("trending");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timeFilter, setTimeFilter] = useState("1h");
  const dropdownRef = useRef(null);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleToggle = () => {
    setSelected(selected === "trending" ? "top" : "trending");
  };
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };
  const handleTimeToggle = (time) => {
    setTimeFilter(time);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const trendings = [
    {
      rank: 1,
      collections: [
        {
          image: "./images/courtyard.png",
          name: "Courtyard.io",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "15.75 MATIC",
      volume: "30 ETH",
    },
    {
      rank: 2,
      collections: [
        {
          image: "./images/producers.png",
          name: "Producers",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "0.01 ETH",
      volume: "20 ETH",
    },
    {
      rank: 3,
      collections: [
        {
          image: "./images/degods.png",
          name: "DeGods",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "1.58 ETH",
      volume: "106 ETH",
    },
    {
      rank: 4,
      collections: [
        {
          image: "./images/flufworld.png",
          name: "FLUF World",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "0.57 ETH",
      volume: "48 ETH",
    },
    {
      rank: 5,
      collections: [
        {
          image: "./images/goatgamming.png",
          name: "Goat Gamming - Genesis ...",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "0.13 ETH",
      volume: "7 ETH",
    },
    {
      rank: 6,
      collections: [
        {
          image: "./images/treeverse.png",
          name: "Treeverse Plots",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "0.24 ETH",
      volume: "13 ETH",
    },
    {
      rank: 7,
      collections: [
        {
          image: "./images/mutant.png",
          name: "Mutant Ape Yacht Club",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "1.56 ETH",
      volume: "84 ETH",
    },
    {
      rank: 8,
      collections: [
        {
          image: "./images/lilpudgys.png",
          name: "Lil Pudgys",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "0.77 ETH",
      volume: "35 ETH",
    },
    {
      rank: 9,
      collections: [
        {
          image: "./images/redacted.png",
          name: "Redacted Remilio Babies",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "1.22 ETH",
      volume: "55 ETH",
    },
    {
      rank: 10,
      collections: [
        {
          image: "./images/habbo.png",
          name: "Habbo Avatars",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "0.13 ETH",
      volume: "5 ETH",
    },
  ];
  const tops = [
    {
      rank: 1,
      collections: [
        {
          image: "./images/milady.png",
          name: "Milady Maker",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "4.09 ETH",
      volumes: [{ price: "112 ETH", value: "< 0.01%" }],
    },
    {
      rank: 2,
      collections: [
        {
          image: "./images/degods.png",
          name: "DeGods",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "1.58 ETH",
      volumes: [{ price: "100 ETH", value: "+50%" }],
    },
    {
      rank: 3,
      collections: [
        {
          image: "./images/boredape.png",
          name: "Bored Ape Yacht Club",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "10.25 ETH",
      volumes: [{ price: "98 ETH", value: "< 0.01%" }],
    },
    {
      rank: 4,
      collections: [
        {
          image: "./images/pudgy.png",
          name: "Pudgy Penguins",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "8.65 ETH",
      volumes: [{ price: "90 ETH", value: "+22%" }],
    },
    {
      rank: 5,
      collections: [
        {
          image: "./images/mutant.png",
          name: "Mutant Ape Yacht Club",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "1.56 ETH",
      volumes: [{ price: "68 ETH", value: "< 0.01%" }],
    },
    {
      rank: 6,
      collections: [
        {
          image: "./images/redacted.png",
          name: "Redacted Remilio Babies",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "1.20 ETH",
      volumes: [{ price: "60 ETH", value: "+16%" }],
    },
    {
      rank: 7,
      collections: [
        {
          image: "./images/cryptopunks.png",
          name: "CryptoPunks",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "-",
      volumes: [{ price: "51 ETH", value: "< 0.01%" }],
    },
    {
      rank: 8,
      collections: [
        {
          image: "./images/flufworld.png",
          name: "FLUF World",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "0.50 ETH",
      volumes: [{ price: "49 ETH", value: "+1,652%" }],
    },
    {
      rank: 9,
      collections: [
        {
          image: "./images/mocaverse.png",
          name: "Mocaverse",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "1.88 ETH",
      volumes: [{ price: "47 ETH", value: "+254%" }],
    },

    {
      rank: 10,
      collections: [
        {
          image: "./images/wrapped.png",
          name: "Wrapped Cryptopunks",
          icon: "./images/check.png",
        },
      ],
      floorPrice: "25.64 ETH",
      volumes: [{ price: "44 ETH", value: "< 0.01%" }],
    },
  ];
  return (
    <ItemContainer>
      <ItemCard>
        <CardHeader>
          <HeaderItem selected={selected} style={{ background: "none" }}>
            <ToggleWrapper onClick={handleToggle}>
              <Slider selected={selected} />
              <h3
                onClick={() => setSelected("trending")}
                style={{
                  cursor: "pointer",
                  borderBottom: selected === "trending" ? "trending" : "top",
                }}
              >
                Trending
              </h3>
              <h3
                onClick={() => setSelected("top")}
                style={{
                  cursor: "pointer",
                  borderBottom: selected === "top" ? "top" : "trending",
                }}
              >
                Top
              </h3>
            </ToggleWrapper>
          </HeaderItem>
          <LeftSideHeader>
            <TimeFilter selected={selected} style={{ background: "none" }}>
              <TimeToggleWrapper>
                <TimeSlider selected={timeFilter} />
                <p onClick={() => handleTimeToggle("1h")}>1h</p>
                <p onClick={() => handleTimeToggle("6h")}>6h</p>
                <p onClick={() => handleTimeToggle("24h")} style={{paddingRight: "6px"}}>24h</p>
                <p onClick={() => handleTimeToggle("7d")}>7d</p>
              </TimeToggleWrapper>
            </TimeFilter>

            <ChainFilter>
              <h3 style={{ paddingRight: "5px" }}>All chains</h3>
              <IconContainer ref={dropdownRef} onClick={toggleDropdown}>
                <IoIosArrowDown title="arrow" />
                {isDropdownOpen && (
                  <DropdownMenu
                    style={{ width: "150px", marginRight: "80px" }}
                  >
                    <DropdownContainer
                      style={{ padding: "10px", borderRadius: "10px", }}
                    >
                      <Text>All Chains</Text>
                      <Text>Arbitrum</Text>
                      <Text>Avalanche</Text>
                      <Text>Base</Text>
                      <Text>Blast</Text>
                      <Text>Ethereum</Text>
                      <Text>Klaytn</Text>
                      <Text>Optimism</Text>
                      <Text>Polygon</Text>
                      <Text>Sei</Text>
                      <Text>Solana</Text>
                      <Text>Zora</Text>
                    </DropdownContainer>
                  </DropdownMenu>
                )}
              </IconContainer>
            </ChainFilter>
            <HeaderItem
              style={{ cursor: "pointer", padding: "10px", width: "60px" }}
            >
              <p>View all</p>
            </HeaderItem>
          </LeftSideHeader>
        </CardHeader>
        {selected === "trending" && <Trending trendings={trendings} />}
        {selected === "top" && <Top tops={tops} />}
      </ItemCard>
    </ItemContainer>
  );
};

export default RankCollection;
