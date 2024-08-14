import styled from "styled-components";
export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 16px;
  padding: 20px;
  flex: 1;
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  aspect-ratio: 1/0.5;
  &:hover {
    transform: translateY(5px);
    transform: scale(1.05);
  }
`;

export const CardContent = styled.div`
text-align: left;
padding: 10px;

  //padding: 10px;
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  padding-left: 5px;
`;

export const CardPrice = styled.p`
  font-size: 16px;
  color: #333;
  padding-left: 10px;
`;
export const CardLastSale = styled.p`
  font-size: 14px;
  color: #888;
 padding-left: 10px;
`;