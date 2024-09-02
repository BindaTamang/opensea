import styled from "styled-components";

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); 
  gap: 16px;
  padding: 20px;
  flex: 1;
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    padding: 10px;
  }
  @media (max-width: 425px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    padding: 10px;
  }
`;

export const SalesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #198CFF;
  color: white;
  padding: 5px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  pointer-events: none;  
  transition: opacity 0.3s ease;
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 3px;
  }
  @media (max-width: 425px) {
    font-size: 0.9rem;
    padding: 3px;
  }
`;

export const CardLastSale = styled.p`
  font-size: 14px;
  color: #888;
  padding-left: 10px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 425px) {
    font-size: 12px;
  }
`;
export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;
  aspect-ratio: 1/0.5;
  
  /* &:hover {
    transform: translateY(5px);
    transform: scale(1.05);
  } */
    @media (max-width: 768px) {
    height: 150px;
  }
  @media (max-width: 425px) {
    height: 150px;
  }
`;

export const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1);
  }

  
  &:hover ${CardImage}{
    transform: translateY(5px);
    transform: scale(1.05);
  }

  &:hover ${SalesWrapper} {
    opacity: 1;
    pointer-events: auto;  
  }

  &:hover ${CardLastSale} {
    opacity: 0;
  }
`;



export const CardContent = styled.div`
  text-align: left;
  padding: 10px;
  @media (max-width: 768px) {
    padding: 8px;
  }
  @media (max-width: 425px) {
    padding: 8px;
  }
`;

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  padding-left: 5px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const CardPrice = styled.p`
  font-size: 16px;
  color: #333;
  padding-left: 10px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
  @media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const SalesText = styled.div`
  font-size: 16px;
  @media (max-width: 768px) {
    font-size: 14px;
  }@media (max-width: 425px) {
    font-size: 14px;
  }
`;

export const IconWrapper = styled.div`
  font-size: 24px;
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 425px) {
    font-size: 20px;
  }
`;
