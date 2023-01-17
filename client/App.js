import React, { useState, useEffect, useRef } from "react";
import Navbar from "./components/Navbar";
import HottestNews from "./components/News/HottestNews";
import * as api from './api';

function App() {
  const [windowWidth, setWindowWidth] = useState(Math.min(window.innerWidth - 40, 1190));
  
  const handleResize = () => {
    if (window.innerWidth <= 1230){
      setWindowWidth(window.innerWidth - 40);
    } else {
      setWindowWidth(1190);
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  },[]);
  
  return (
    <div className="app__container" style={{ width: `${windowWidth}px` }}>
      <Navbar />
      <HottestNews />
    </div>
  );
}

export default App;
