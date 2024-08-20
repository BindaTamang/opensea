import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CardContainer,
  CardItem,
  CustomSlider,
  DetailsRow,
  Img,
  Item,
  ItemDetail,
  TitleSection,
} from "../../Style/Card.styled";

const NoteableCollection = ({ settings }) => {
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 5,
  //   slidesToScroll: 3,
  //   arrows: true,
  // };

  const items = [
    {
      image: "./images/img2.png",
      title: "Nethers",
      floor: [
        { name: "Floor", value: "0.05 ETH" },
        { description: "Total volume", desValue: "78 ETH" },
      ],
    },
    {
      image: "./images/img3.png",
      title: "Parallel Avatars",
      logo: "./images/check.png",
      floor: [
        { name: "Floor", value: "0.36 ETH" },
        { description: "Total volume", desValue: "6,460 ETH" },
      ],
    },
    {
      image: "./images/img4.png",
      title: "Nobody",
      floor: [
        { name: "Floor", value: "0.07 ETH" },
        { description: "Total volume", desValue: "17K ETH" },
      ],
    },
    {
      image: "./images/img1.png",
      title: "Synthetic Dreams by Refik...",
      logo: "./images/check.png",
      floor: [
        { name: "Floors", value: "1.10 ETH" },
        { description: "Total volume", desValue: "2,287 ETH" },
      ],
    },
    {
      image: "./images/img6.png",
      title: "Metabolts",
      floor: [
        { name: "Floor", value: "0.03 ETH" },
        { description: "Total volume", desValue: "69 ETH" },
      ],
    },
    {
      image: "./images/img7.png",
      title: "World of Women",
      logo: "./images/check.png",
      floor: [
        { name: "Floor", value: "0.03 ETH" },
        { description: "Total volume", desValue: "69 ETH" },
      ],
    },
  ];

  return (
    <CardContainer>
      <h1>Noteable collections</h1>
      <CustomSlider {...settings}>
        {items.map((item, i) => (
          <CardItem key={i}>
            <Img>
              <img src={item.image} alt={item.title} />
            </Img>
            <TitleSection>
              <span>{item.title}</span>
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
            <DetailsRow>
              {item.floor.map((floorItem, j) => (
                <ItemDetail key={j}>
                  <Item>
                    <span style={{ paddingLeft: "15px" }}>
                      {floorItem.name}
                    </span>
                    <p style={{ paddingLeft: "15px" }}>{floorItem.value}</p>
                  </Item>
                  <Item>
                    <span style={{ paddingRight: "20px" }}>
                      {floorItem.description}
                    </span>{" "}
                    <p style={{ paddingRight: "25px" }}>{floorItem.desValue}</p>
                  </Item>
                </ItemDetail>
              ))}
            </DetailsRow>
          </CardItem>
        ))}
      </CustomSlider>
    </CardContainer>
  );
};

export default NoteableCollection;
