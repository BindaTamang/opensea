import styled from "styled-components";

export const ImageSection = styled.div`
  position: relative;
  height: 300px;
  background-image: url("/images/collection-bg.png");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  color: white;
  padding-left: 30px;
  padding-bottom: 20px;
  font-family: sans-serif;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 15px;
    padding-bottom: 10px;
    height: 350px;
  }
`;

export const ImageContainer = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }
  @media screen and (max-width: 768px) {
    top: 40%;
    
  }
 

`;

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h2 {
    font-size: 1rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1rem;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  img {
    display: inline-block;
    width: 20px;
    height: 20px;
    padding-left: 5px;
    padding-top: 13px;
  }
  @media screen and (max-width: 768px){
    margin-top: 190px;
    h2{
      font-size: 1em;
      margin-bottom:10px;
    }
    p{
      font-size: 1em;
      margin-top: 5px;
      
    }
    img{
      width: 18px;
      height: 18px;
      padding-left:7px;
      padding-top: 9px;
    }
    
  }

  
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  div {
    text-align: center;
    margin: 10px;

    h3 {
      font-size: 1.2rem;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    margin-top: -13px;
    padding-bottom: 10px;
    div {
      text-align: start;
      h3 {
      font-size: 0.90em;
      margin-bottom: 0.25em;
    }

    p {
      font-size: 1em;
    }
    }
  }
`;

export const ParagraphContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  @media screen and (max-width: 768px) {
    width: 100%;
    
  } 
`;

export const Paragraph = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  flex: 1;
  padding-top: 10px;
  padding-left: 30px;
  font-size: 18px;
  font-weight: 500;
  //line-height: 1.5em;
  //letter-spacing: 1px;
  margin-bottom: 1.6em;
  width: 220px;

  @media screen and (max-width: 768px) {
    padding-left: 10px;
    font-size: 1em;
    font-family: sans-serif;
    width: 100%;
  }
`;

export const Iconpg = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 10px;
  padding-right: 30px;
  padding-top: 10px;
  font-size: 25px;

  @media screen and (max-width: 768px) {
   display: none;
  }
`;

export const HideOrShowButton = styled.button`
  background-color: #2ecc71;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #27ae60;
  }

  @media screen and (max-width: 768px) {
    padding: 4px 8px;
    font-size: 0.9rem;
  }
`;

export const PgDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 1rem;

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 1rem;

    span {
      font-size: 1rem;
    }

    p {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: row;
    padding-left: 20px;
    gap: 0.5rem;
  }
`;
