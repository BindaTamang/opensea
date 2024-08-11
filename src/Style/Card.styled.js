import styled from "styled-components";
import Slider from "react-slick";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  
  
  h1 {
    font-family: sans-serif;
    text-align: left;
    padding-left: 10px;
    color: #333;
    font-size: 1.5em;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  transform: translate3d(0px, 0px, 0px);
`;

export const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(33.333% - 20px);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: white;
  padding: 0px;
  transition: transform 0.2s;
  &:hover {
    transform: translateY(-10px);
  }
`;

export const Img = styled.div`
  display: block;
  width: initial;
  height: initial;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
  aspect-ratio: 1/0.5;
  
  img {
    width: 100%;
    height: 100%;
    opacity: 1;
    inset: 0px;
    object-fit: cover;
  }
`;
export const CustomSlider = styled(Slider)`
.slick-list {
    padding-top: 15px;
    padding-right: 10px;
    
  }
  .slick-slide > div {
    margin: 0 10px;
  }
 
`
export const TitleSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: left;
  padding: 10px;
  margin-left: 8px;

  span {
    display: block;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #333;
  }
  i {
    width: 20px;
    height: 20px;
    display: flex;
    display: row;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #f4f0f0;
    background-color: #2394f0;
    border-radius: 50%;
  }
`;
// export const Icon = styled.i`
//   width: 20px;
//   height: 20px;
//   display: flex;
//   display: row;
//   align-items: center;
//   justify-content: center;
//   font-size: 15px;
//   color: #f4f0f0;
//   background-color: #2394f0;
//   border-radius: 50%;

// `;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  font-family: sans-serif;
  span {
    font-size: 1em;
    padding-left: 5px;
    padding-right: 28.79px;
  }
  p {
    font-size: 1em;
    margin-top: 1px;
    padding-left: 1px;
    font-weight: bold;
  }
`;

export const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: row;
`;
export const List = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 10px 10px 20px 10px;
  span {
    font-family: sans-serif;
    font-size: 16.5px;
    font-weight: bold;
    color: #fff;
    &:hover {
      position: relative;
      color: #000;
      background: #a09e9a;
      padding: 10px;
      border-radius: 10px;
    }
  }
`;
