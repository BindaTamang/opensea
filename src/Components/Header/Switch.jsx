import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ToggleSwitchWrapper = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 25px;
`;
const ToggleSwitchContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 25px;
  margin: 0 0.5rem;
`;

const ToggleSwitchInput = styled.input`
  display: none;
`;

const ToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: ${props => (props.theme.isToggled ? '#2bc6ff' : '#b6b6b6')};
  border-radius: 25px;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: background-color 0.2s ease;

  &::before {
    position: absolute;
    content: "";
    left: 2px;
    top: 2px;
    width: 21px;
    height: 21px;
    background-color: ${props => (props.theme.isToggled ? '#fff' : '#333')};
    border-radius: 50%;
    transition: transform 0.3s ease, background-color 0.3s ease;
    transform: ${props => (props.theme.isToggled ? 'translateX(25px)' : 'translateX(0)')};
  }
`;

const Switch = ({ toggleTheme, isDarkTheme }) => {
  const [isToggled, setIsToggled] = useState(isDarkTheme);


  const onToggle = () => {
    setIsToggled(!isToggled);
    toggleTheme();
  };

  return (
    <ToggleSwitchWrapper>
        <ToggleSwitchContainer>
      <ToggleSwitchInput type="checkbox" isToggled={isToggled} onChange={onToggle} />
      <ToggleSwitchSlider className="switch"></ToggleSwitchSlider>
      </ToggleSwitchContainer>
    </ToggleSwitchWrapper>
  );
};

export default Switch;
