import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import NavBar from "./Components/NavBar"
import Home from "./Components/Pages/Home.jsx";
import Show from "./Components/Pages/Show.jsx";
import Index from "./Components/Pages/Show.jsx";



function App() {
    return (
        <div className="App"> 
        <Router>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/tasks" element={<Index />} />
                    <Route path="tasks/:index" element={<Show />} />
                </Routes>
            </main>
        </Router>

        </div>
    )
  
}

export default App
