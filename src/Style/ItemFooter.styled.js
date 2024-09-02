import styled from "styled-components";
export const FooterContainer = styled.div`
position: fixed;
display: flex;
bottom: 0;
left: 0;
right: 0;
background-color: #ffffff;
width: 100%;
height: 60px;
border-top: 1px solid #f1f1f1;
box-sizing: border-box;
z-index: 10;
@media (max-width: 425px) {
    flex-direction: row;
    height: auto;
    padding: 10px 0;
  }
`
export const FooterToggleSwitch = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 425px) {
    display: none; 
  }
`;

export const FooterSwitchLabel = styled.label`
  font-size: 1.05rem;
  font-family: sans-serif;
  font-weight: 600;
  padding-left: 80px;
  padding-right: 10px;
  @media (max-width: 768px) {
    padding-left: 20px;
    padding-right: 5px;
  }
  @media (max-width: 425px) {
    display: none; 
  }
`;

export const FooterSwitchInput = styled.input.attrs({ type: 'checkbox' })`
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
  @media (max-width: 768px) {
    width: 30px;
    height: 15px;

    &::before {
      width: 12px;
      height: 12px;
    }
  }

  @media (max-width: 425px) {
    display: none; 
  }
`;
export const FooterIcon = styled.div`
  display: none;

  @media (max-width: 425px) {
    display: block; 
    font-size: 1.5rem;
    color: #4caf50;
  }
`;
export const FooterButton = styled.button`
border-radius: 20px;
background-color:#3388FF;
border: none;
width: 200px;
height: 45px;
margin-left: 80em;
span{
    font-size: 1rem;
    color: #fff;
    font-weight: 600;
}
@media screen and (max-width: 768px) {
  margin-left: 30em;
  
}

@media screen and (max-width: 425px) {
   margin-left: 30px;
  }
`