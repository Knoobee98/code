
import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import {useState} from 'react';

import Register from './pages/register/register';
import Verification from './pages/verification/verification';
import Login from './pages/login/login';
import Timeline from './pages/timeline/timeline';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/verification" element={<Verification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/timeline" element={<Timeline />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
