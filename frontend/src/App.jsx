import { useState } from 'react'
import Home from "./Components/Home"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"
import './App.css'

function App() {

  return (
    <>
    <nav>
      <Navbar />
    </nav>
    <Home />
    <Footer />
    </>
  )
}

export default App