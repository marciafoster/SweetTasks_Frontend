import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import background from "./assets/sweet_bg.jpeg";

import NavBar from "./Components/NavBar";
import Home from "./Components/Pages/Home.jsx";
import Show from "./Components/Pages/Show.jsx";
import Index from "./Components/Pages/Index.jsx";
import Edit from "./Components/Pages/Edit";
import New from "./Components/Pages/New";

function App() {
  return (
    <div style={{ backgroundImage: background }}>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tasks" element={<Index />} />
            <Route path="/tasks/new" element={<New />} />
            <Route path="tasks/:index" element={<Show />} />
            <Route path="/tasks/:index/edit" element={<Edit />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
