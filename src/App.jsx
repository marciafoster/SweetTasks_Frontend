import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react'

import NavBar from "./Components/NavBar"
import Home from "./Components/Pages/Home.jsx";




function App() {
    return (
        <div className="App"> 
        <Router>
            <NavBar />
            <main>
                <Routes>
                    <Route path="/" element={<Home/>} />
                </Routes>
            </main>
        </Router>

        </div>
    )
  
}

export default App
