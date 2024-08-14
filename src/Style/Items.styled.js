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
      width: 30px;
      height: 30px;
      background: #ebebeb;
      //border-radius: 10px;
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
  align-items: center;
`;

export const SwitchLabel = styled.label`
  font-size: 14px;
  margin-right: 8px;
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
