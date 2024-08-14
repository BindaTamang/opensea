import React from "react";
import { Card, CardContent, CardGrid, CardImage, CardLastSale, CardPrice, CardTitle } from "../../Style/ItemCard.styled";

const ItemCard = () => {
  const cards = [
    {
      id: 1,
      title: "Polaris - Polaris 18",
      price: "0.2 ETH",
      lastSale: "0.08 WETH",
      imageUrl: "/images/1.png",
    },
    {
        id: 2,
        title: "Polaris - Polaris 23",
        price: "0.33 ETH",
        //lastSale: "0.08 WETH",
        imageUrl: "/images/2.png",
      },
      {
        id: 3,
        title: "Polaris - Polaris 2",
        //price: "0.2 ETH",
        lastSale: "0.3 ETH",
        imageUrl: "/images/3.png",
      },
      {
        id: 4,
        title: "Polaris - Polaris 1",
        //price: "0.2 ETH",
        lastSale: "0.33 ETH",
        imageUrl: "/images/4.png",
      },
      {
        id: 5,
        title: "Polaris - Polaris 10",
        //price: "0.2 ETH",
        lastSale: "0.3 ETH",
        imageUrl: "/images/5.png",
      },
      {
        id: 6,
        title: "Polaris - Polaris 11",
        //price: "0.2 ETH",
        //lastSale: "0.08 WETH",
        imageUrl: "/images/6.png",
      },
      {
        id: 7,
        title: "Polaris - Polaris 12",
        //price: "0.2 ETH",
        lastSale: "0.4 ETH",
        imageUrl: "/images/7.png",
      },
      {
        id: 8,
        title: "Polaris - Polaris 13",
        //price: "0.2 ETH",
        //lastSale: "0.08 WETH",
        imageUrl: "/images/8.png",
      },
      {
        id: 9,
        title: "Polaris - Polaris 14",
        //price: "0.2 ETH",
        //lastSale: "0.08 WETH",
        imageUrl: "/images/9.png",
      },
      {
        id: 10,
        title: "Polaris - Polaris 15",
        //price: "0.2 ETH",
        //lastSale: "0.08 WETH",
        imageUrl: "/images/10.png",
      },
      {
        id: 11,
        title: "Polaris - Polaris 16",
        //price: "0.2 ETH",
       // lastSale: "0.08 WETH",
        imageUrl: "/images/11.png",
      },
      {
        id: 12,
        title: "Polaris - Polaris 17",
        //price: "0.2 ETH",
        //lastSale: "0.08 WETH",
        imageUrl: "/images/12.png",
      },
  ];
  return (
    <CardGrid>
        {cards.map((card, id) => (
            <Card key={id}>
                <CardImage src={card.imageUrl} alt={card.title}/>
                <CardContent>
                    <CardTitle>{card.title}</CardTitle>
                    {/* <CardPrice>{card.price}</CardPrice>
                    <CardLastSale>Last sale: {card.lastSale}</CardLastSale> */}
                     {card.price && <CardPrice>{card.price}</CardPrice>}
                     {card.lastSale && <CardLastSale>Last sale: {card.lastSale}</CardLastSale>}
                </CardContent>
            </Card>
        ))}
    </CardGrid>
  )
};

export default ItemCard;
