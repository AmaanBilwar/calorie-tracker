import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


//import pages
import Home from './pages/Home.jsx'


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route 
            path="/" 
            element={<Home />}
          />
          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
