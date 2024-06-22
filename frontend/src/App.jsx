import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//import components
import Navbar from './components/Navbar.jsx'

//import pages
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Main from './pages/Main.jsx'
import Support from './pages/Support.jsx'

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <div>
          <Routes>
            <Route 
              path="/" 
              element={<Home />}
            />
          </Routes>
          <Routes>
            <Route 
              path="/about" 
              element={<About />}
            />
            <Route 
              path="/support" 
              element={<Support />}
            />
          </Routes>
        </div>
        
      </BrowserRouter>

      
    </>
  )
}

export default App
