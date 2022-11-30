import React from 'react';

import './supports/utilities.css';

import { Routes, Route } from 'react-router-dom';

import Login from './pages/loginPage/login';
import Register from './pages/register/registerPage';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/home/homepage'

class App extends React.Component {
  render(){
    return (
      <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      </>
      
    )
  }
}

export default App;

//tugas
//1. buatlah halaman landing page
//2. buatlah halaman menu (mock up)
