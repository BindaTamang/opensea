import React from "react";
import {
  CardContainer,
  CardItem,
  Img,
  Item,
  TitleSection,
  List,
} from "../../Style/Card.styled";
import Slider from "react-slick";
import { Nav, NavLink } from "../../Style/Header.styled";

const PhotoCard = ({settings, bgColor}) => {
  // const [bgColor, setBgColor] = useState("linear-gradient(rgb(235, 66, 82), rgb(234, 94, 94))");

  // const colors = [
  //   "linear-gradient(rgb(235, 66, 82), rgb(234, 94, 94))",
  //   "linear-gradient(rgb(66, 82, 235), rgb(94, 94, 234))",
  //   "linear-gradient(rgb(82, 235, 66), rgb(94, 234, 94))",
  //   "linear-gradient(rgb(235, 82, 66), rgb(234, 94, 94))",
  //   "linear-gradient(rgb(66, 235, 82), rgb(94, 234, 94))",
  //   "linear-gradient(rgb(82, 66, 235), rgb(94, 94, 234))",
  //   "linear-gradient(rgb(235, 66, 235), rgb(234, 94, 234))",
  //   "linear-gradient(rgb(66, 235, 235), rgb(94, 234, 234))",
  // ];

  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 3,
  //   arrows: true,
  //   beforeChange: (current, next) => setBgColor(colors[next % colors.length]),
  // };

  const items = [
    {
      image: "./images/pic1.png",
      title: "Proscenium by remnynt",
      logo: "./images/check.png",
      name: "Floor",
      value: "0.73 ETH",
    },
    {
      image: "./images/pic3.png",
      title: "Valhalla",
      logo: "./images/check.png",
      name: "Floor",
      value: "0.08 ETH",
    },
    {
      image: "./images/pic2.png",
      title: "Astrographz",
      logo: "./images/check.png",
      name: "Floor",
      value: "0.22 ETH",
    },
    {
      image: "./images/pic1.png",
      title: "Proscenium by remnynt",
      name: "Floor",
      value: "0.73 ETH",
    },
    {
      image: "./images/pic4.png",
      title: "The Impossible Creatures",
      name: "Floor",
      value: "0.62 ETH",
    },
    {
      image: "./images/pic5.png",
      title: "Charles Peterson Grunge Years NFT...",
      name: "Floor",
      value: "0.25 ETH",
    },
    {
      image: "./images/pic6.png",
      title: "Getjide by Bart Simons",
      logo: "./images/check.png",
      name: "Floor",
      value: "0.09 ETH",
    },
    {
      image: "./images/pic7.png",
      title: "Netural Fed by Emi Kusano",
      logo: "./images/check.png",
      name: "Floor",
      value: "0.26 ETH",
    },
  ];

  return (
    <CardContainer
      style={{
        width: "100%",
        height: "330px",
        background: bgColor,
      }}
    >
      <Nav style={{paddingBottom: "20px", fontSize: "1.75rem"}}>
      <NavLink href="#">All</NavLink>
      <NavLink href="#">Art</NavLink>
      <NavLink href="#">Gaming</NavLink>
      <NavLink href="#">Memberships</NavLink>
      <NavLink href="#">PFPs</NavLink>
      <NavLink href="#">Photography</NavLink>
      <NavLink href="#">Music</NavLink>
    </Nav>
      {/* <List>
        <span>All</span>
        <span>Art</span>
        <span>Gaming</span>
        <span>Memberships</span>
        <span>PFPs</span>
        <span>Photography</span>
        <span>Music</span>
      </List> */}
      <Slider {...settings}>
        {items.map((item, i) => (
          <CardItem key={i} style={{ position: "relative" }}>
            <Img
              style={{ width: "100%", height: "320px", position: "relative" }}
            >
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  aspectRatio: "1/1",
                  objectFit: "cover",
                  filter: "brightness(80%)",
                }}
                src={item.image}
                alt={item.title}
              />
              <TitleSection
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "10px",
                  width: "calc(100% - 20px)",
                  padding: "5px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <span style={{ color: "#fff", fontWeight: "bold" }}>
                  {item.title}
                </span>
                {item.logo && (
                  <img
                    style={{
                      display: "inline-block",
                      width: "20px",
                      height: "20px",
                      paddingLeft: "2px",
                    }}
                    src={item.logo}
                    alt="logo"
                  />
                )}
              </TitleSection>
              <Item
                style={{
                  display: "flex",
                  flexDirection: "row",
                  position: "absolute",
                  bottom: "5px",
                  left: "10px",
                  width: "calc(100% - 20px)",
                  padding: "5px",
                }}
              >
                <span style={{ color: "#fff" }}>
                  {item.name}: {item.value}
                </span>
              </Item>
            </Img>
          </CardItem>
        ))}
      </Slider>
    </CardContainer>
  );
};

export default PhotoCard;
