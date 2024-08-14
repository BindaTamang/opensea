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
export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  //margin-left: 30px;
  width: 200px;
  height: auto;
  //gap: 10px;
  box-sizing: border-box;
`;
export const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  //border-bottom: 1px solid;
  gap: 5px;
  padding-left: 17px;
  div {
    display: flex;
    //flex-direction: row;
    align-items: center;
    //justify-content: center;
    gap: 20px;
    font-family: sans-serif;
    font-size: 0.88rem;
    font-weight: 100;
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
export const SidebarIcon = styled.div`
padding-left: 80px;
`
