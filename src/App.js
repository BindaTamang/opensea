import './App.css';
import Header from './Components/Header/Header';
import Noteablecollection from './Components/Card/Noteablecollection';
import PhotoCard from './Components/Card/PhotoCard';
import { useState } from 'react';

function App() {
  const [bgColor, setBgColor] = useState("linear-gradient(rgb(235, 66, 82), rgb(234, 94, 94))");

  const colors = [
    "linear-gradient(90deg, #bb8909 100%, #794b09 35%, #dfd499 100%);",
    "linear-gradient(rgb(66, 82, 235), rgb(94, 94, 234))",
    "linear-gradient(rgb(82, 235, 66), rgb(94, 234, 94))",
    "linear-gradient(rgb(235, 82, 66), rgb(234, 94, 94))",
    "linear-gradient(rgb(66, 235, 82), rgb(94, 234, 94))",
    "linear-gradient(rgb(82, 66, 235), rgb(94, 94, 234))",
    "linear-gradient(rgb(235, 66, 235), rgb(234, 94, 234))",
    "linear-gradient(rgb(66, 235, 235), rgb(94, 234, 234))",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    arrows: true,
    beforeChange: (current, next) => setBgColor(colors[next % colors.length]),
  };
  return (
    <div className="App">
      <div className='header-section'>
        <div className="background-wrapper" style={{ "--bg-color": bgColor }}></div>
        <div className="header-content">
          <Header />
          <PhotoCard settings={settings} />
        </div>
      </div>
      
      <Noteablecollection/>
    </div>
  );
}

export default App;
