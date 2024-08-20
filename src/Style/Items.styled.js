import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  //background: red;
`;
export const ItemHeader = styled.div`
  display: flex;
  align-items: center;
  //background: #e6e4e3;
  padding: 5px 30px 0;

  h3 {
    // margin: 0 15px;
    font-size: 1rem;
    font-family: sans-serif;
    color: #141414;
    padding: 5px;

    &:hover {
      background: #d1d1d1;
      border-radius: 10px;
    }
  }

  p {
    margin: 0;
    font-size: 1rem;
  }
`;
export const SearchbarContainer = styled.div`
  display: flex;
  margin: 0 30px 5px;
  /* justify-content: space-between;
align-items: center; */
  gap: 1rem;
  border-top: 1px solid #d1d1d1;
  padding-top: 15px;

  div {
    img {
      width: 35px;
      height: 35px;
      background: #ebebeb;
      border-radius: 5px;
      margin-top: 10px;
    }
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    span {
      font-size: 1rem;
      font-family: sans-serif;
    }
    p {
      font-size: 1rem;
      font-family: sans-serif;
    }
  }
  @media screen and (max-width: 768px) {
    div{
      img{
        width: 40px;
        height: 40px;
        margin-top: 5px;
        margin-bottom: 15px;
      }
      span, p{
        display: none;
      }
    }
    
  }
`;
export const ItemSearch = styled.div`
  display: flex;
  align-items: center;
  background: #ebebeb;
  color: #141414;
  margin-left: 30px;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 10px;
  width: 48.5rem;
  height: 2rem;
  &:hover {
    background: #d6d6d6;
  }
  @media screen and (max-width: 768px) {
    margin-left: 6px;
    width: 50rem;
    height: 1.75rem;
    
  }
`;
export const ItemShortcutKeyIcon = styled.div`
  margin-left: 0.5rem;
  color: #141414;
  background: #dbdbdb;
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
`;

export const ItemSearchInput = styled.input`
  border: none;
  background: none;
  color: #141414;
  outline: none;
  flex: 1;
  font-size: 1rem;
  font-family: sans-serif;

  &::placeholder {
    color: #141414;
    text-align: left;
  }
`;
export const Div = styled.div`
  width: 200px;
  height: 1.75rem;
  display: flex;
  align-items: center;
  gap: 5px;
  background: #f0f0f0;
  color: #141414;
  padding: 10px;
  font-size: 1rem;
  font-family: sans-serif;
  border: 1px solid #cccccc;
  border-radius: 10px;
  &:hover {
    border: #141414;
  }
`;

export const Body = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
`;
export const ItemBody = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #d1d1d1;
  //margin: 0 30px  0;
`;
export const SidebarConatainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  //margin-left: 30px;
  width: 300px;
  height: auto;
 background-color: #f9f9f9;
 border-right: 1px solid #e5e5e5;
 @media screen and (max-width: 768px) {
  display:  ${({ isSidebarVisible }) => (isSidebarVisible ? "block" : "none")};
  
 }
`;
export const Section = styled.div`
display: grid;
  grid-template-columns: 1fr auto;
  //align-items: center;
  padding: 15px 15px; 
  width: 90%;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0; 
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 2fr auto;
    
  }
`;

export const SectionTitle = styled.div`
  font-weight: bold;
  text-align: left;
  z-index: 1;
  cursor: pointer;
`;
export const SectionIcon = styled.div`
text-align: right;
`

export const SectionContent = styled.div`
padding-top: 10px;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  padding: 8px 16px;
  margin-bottom: 10px;
  border-radius: 20px;
  background-color: ${props => props.active ? '#000' : '#f0f0f0'};
  color: ${props => props.active ? '#fff' : '#000'};
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? '#333' : '#ddd'};
  }
`;

export const ToggleSwitch = styled.div`
  display: flex;
  padding-top: 20px;
  text-align: center;
  justify-content: space-between;
  width: 100%;
  
`;
export const SwitchContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: auto;
  padding-left: 15px;
`;

export const SwitchLabel = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  
`;

export const SwitchDescription = styled.small`
  font-size: 12px;
  color: #666;
  line-height: 1.4;
  margin-top: 5px;
  text-align: left;
  max-width: 130px; 
  word-wrap: break-word;
  white-space: normal;
`;

export const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  position: relative;
  width: 40px;
  height: 20px;
  appearance: none;
  background-color: #ccc;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:checked {
    background-color: #4caf50;
  }

  &:before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #fff;
    transition: transform 0.3s ease-in-out;
    transform: ${props => props.checked ? 'translateX(20px)' : 'translateX(0)'};
  }
`;
export const GridSection = styled.div`
display: grid;
padding: 10px;
width: 97%;
`
export const ButtonSectionContent = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
padding: 10px;
`
export const PriceButton = styled(Button)`
display: flex;
justify-content: space-between;
border: none;
border-radius: 10px;
max-height: 50px;
padding: 5px 10px;
h3{
  font-size: 1.2em;
  font-family: sans-serif;
  font-weight: 600;
}

`
export const MinMaxConatiner = styled.div`
display: flex;
align-items: center;
//justify-content: space-between;
gap:1rem;
`
export const MaxMinButton = styled(Button)`
width: 100px;
height: 50px;
font-size: 1em;

`
export const ApplyButton = styled(Button)`
text-align: center;
font-size: 1rem;
font-weight: 600;
background: #3388FF;
color: #fff;
`
export const CurrencySearch = styled(ItemSearch)`
 display: flex;
  align-items: center;
  background-color: #f5f5f5;
  padding: 5px 10px;
  margin-left: 3px;
  border-radius: 10px;
  width: 90%;
border: 1px solid #E6E6E6;

`

export const CurrencySearchInput = styled(ItemSearchInput)`
border: none;
  outline: none;
  background: none;
  padding-left: 10px;
  width: 100%;
  font-size: 14px;
  color: #333;
  
  &::placeholder {
    color: #999;
  }
`
export const CheckboxWrapper = styled.label`
display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;

`
export const InputCheckbox = styled.input.attrs({type: "checkbox"})`
appearance: none;
  width: 25px;
  height: 25px;
  border: 2px solid #E6E6E6;
  border-radius: 5px;
  position: relative;
  margin-right: 10px;
  cursor: pointer;

  &:checked {
    background-color: #3388FF;
  }

  &:checked::before {
    content: '✔';
    position: absolute;
    top: 2px;
    left: 4px;
    bottom: 3px;
    text-align: center;
    color: white;
    font-size: 14px;
  }
`
export const CheckboxDetail = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`
export const DropDownItemMenu = styled.div`
display: flex;
  position: absolute;
  width: 250px; 
  height: auto;
  max-height: 50rem; 
  overflow-y: auto; 
  top: 100%; 
  right: 30; 
  background: #fff;
  color: #141414;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  white-space: nowrap; 
`;

export const DropDownItemContainer = styled.div`
 display: flex;
 flex-direction: column;
  padding: 10px;
`;

// export const DropDownItem = styled.div`
//  display: grid;
//   padding: 8px;
//   font-family: sans-serif;
//   color: #141414;
//   cursor: pointer;

//   &:hover {
//     background: lightblue;
//   }
// `;
