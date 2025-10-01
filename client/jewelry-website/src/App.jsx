import React, { useState, useRef } from "react";
import Landing from "./Pages/Landing";
import NavbarPublic from "./smallComponents/NavbarPublic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DraggableSidebar from "./smallComponents/DraggableSidebar";
import Sidebar from "./smallComponents/Sidebar";
import TopTicker from "./smallComponents/TopTicker";
import RenderMenuBar from "./smallComponents/RenderMenuBar";
<<<<<<< Updated upstream
import TodosPage from './Pages/TodosPage'
=======
import TodosPage from "./Pages/TodosPage";

>>>>>>> Stashed changes
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <TopTicker />
        <RenderMenuBar />
        <Routes>
          <Route path="/" element={<Landing />} />
<<<<<<< Updated upstream
          <Route path="/todos" element={<TodosPage />} />
=======
          <Route path="/todos" element={< TodosPage />} />
>>>>>>> Stashed changes
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
