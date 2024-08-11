import React, { useState } from 'react';
import Header from './Components/Header/Header';
import Noteablecollection from './Components/Card/Noteablecollection';
import PhotoCard from './Components/Card/PhotoCard';
import './App.css';
import { darkTheeme, lightTheme } from './Components/shared/theme';
import { ThemeProvider } from 'styled-components';
import RankCollection from './Components/Table/Rank&Collection';

function App() {
  const [theme, setTheme] = useState("dark");
  const [toggleBar, setTogglebar] = useState(false)
  const setMode = (mode) => {
    window.localStorage.setItem("theme", mode)
    setTheme(mode);
  }
  const toggleTheme = () => {
    theme === "light" ? setMode("dark") : setMode("light");
  }
  const themeMode = theme === "light" ? lightTheme : darkTheeme;
  
  const [bgColor, setBgColor] = useState('linear-gradient(to bottom, #454545, transparent 50%)');
  
  const colors = [
    'linear-gradient(180deg, #141414, #141414, #141414, transparent 70%)',
    'linear-gradient(to bottom, #111111, #317c4a, transparent 70%)',
    'linear-gradient(200deg, #e4ab30, #dac79d, #e49f74 transparent 50%)',
    'linear-gradient(190deg, #020024 0%, #090979 35%, #00d4ff 100%, transparent 100%)',
    'linear-gradient(to bottom, #111111, #317c4a, transparent 100%)'
  ];
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    beforeChange: (current, next) => setBgColor(colors[next % colors.length])
  };
  
  
  
  return (
    <ThemeProvider theme={themeMode}>
    <div className="App">
      <div className='header-section'>
        <div className="background-wrapper" style={{ "--bg-color": bgColor }}></div>
        <div className="header-content">
          <Header theme={theme} toggleTheme={toggleTheme} />
        <PhotoCard settings={settings} />
          <RankCollection/>
      <Noteablecollection settings={settings}/>
      </div>
      </div>
      
    </div>
    </ThemeProvider>
  );
}

export default App;
