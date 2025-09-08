import React, { useState, useRef } from "react";
import Landing from "./Pages/Landing";
import NavbarPublic from "./smallComponents/NavbarPublic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DraggableSidebar from "./smallComponents/DraggableSidebar";
import Sidebar from "./smallComponents/Sidebar";
import TopTicker from "./smallComponents/TopTicker";
import RenderMenuBar from "./smallComponents/RenderMenuBar";

const App = () => {
 

  return (
    <div>
      <BrowserRouter>
        <TopTicker />
       <RenderMenuBar/>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
