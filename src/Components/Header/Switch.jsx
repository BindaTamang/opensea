// Switch.js

import React from 'react';
import styled from 'styled-components';

const ToggleSwitchWrapper = styled.label`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 25px;
`;

const ToggleSwitchContainer = styled.div`
  box-sizing: border-box;
  width: 45px;
  height: 25px;
  margin: 0 0.5rem;
  border: 1px solid ${({ theme }) => (theme === 'light' ? '#e1e5e9' : '#555')};
  border-radius: 12px;
  background-color: ${({ theme }) => (theme === 'light' ? '#f0f4f7' : '#333')};
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
`;

const ToggleSwitchInput = styled.input`
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + label {
    background-color: ${({ theme }) => (theme === 'light' ? '#3a7bec' : '#5F7181')};
    &::before {
      left: calc(100% - 2px);
      transform: translateX(-100%);
      background-color: #2bc6ff;
    }
  }
`;

const ToggleSwitchSlider = styled.span`
  position: absolute;
  cursor: pointer;
  background-color: ${({ theme }) => (theme === 'light' ? '#2bc6ff' : '#b6b6b6')};
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
    background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};
    border-radius: 50%;
    transition: transform 0.3s ease, background-color 0.3s ease;
    transform: ${({ theme }) => (theme === 'light' ? 'translateX(0px)' : 'translateX(20px)')};
  }
  
`;

const Switch = ({ themeToggler, theme }) => {
  return (
    <ToggleSwitchWrapper>
      <ToggleSwitchContainer theme={theme} onClick={themeToggler}>
        <ToggleSwitchInput type="checkbox" />
        <ToggleSwitchSlider theme={theme} />
      </ToggleSwitchContainer>
    </ToggleSwitchWrapper>
  );
};

export default Switch;
