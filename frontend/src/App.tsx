import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './components/Landing'
import { Room } from './components/Room'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/room" element={<Room />} />
        <Route path="/contact" element={<h1>Contact</h1>} />
        <Route path="/services" element={<h1>Services</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
