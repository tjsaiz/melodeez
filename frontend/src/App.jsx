import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import {Route, Routes} from "react-router-dom";
import Admin from './pages/admin.jsx'
import Home from './pages/home.jsx'
import Edit from './pages/edit.jsx'
import Share from './pages/share.jsx'
function App() {

  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="/edit" element={<Edit/>}/>
            <Route path="/share" element={<Share/>}/>
        </Routes>
    </>
  )
}

export default App
