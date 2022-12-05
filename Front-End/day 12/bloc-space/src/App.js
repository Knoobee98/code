import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'

import Navbar from './components/navbar/navbar';
import LandingPage from './pages/landingPage/landingPage';
import Register from './pages/register/register';
import Home from './pages/homepage/home';
import { useEffect, useState } from 'react';

function App() {
  const [keepLogin, setKeepLogin] = useState(false);

  let checkIsLogin = () => {
    let token = localStorage.getItem('token');

    if(token) setKeepLogin(true);
  }
  
  useEffect(() => {
    checkIsLogin();
  }, [])

  let onLogout = () => {
      console.log('logout')
      localStorage.removeItem('token');
    }

  return (
    <div>
      <Navbar funcSignOut={onLogout}/>
      <Routes>
        <Route path="/" element={<LandingPage keeplogin={keepLogin}/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home funcCheck={{checkIsLogin}} keeplogin={keepLogin} />} />
      </Routes>

    <Toaster />
    </div>
  );
}

export default App;
