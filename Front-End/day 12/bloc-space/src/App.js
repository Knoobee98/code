import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast'

import Navbar from './components/navbar/navbar';
import LandingPage from './pages/landingPage/landingPage';
import Register from './pages/register/register';
import Home from './pages/homepage/home';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
      </Routes>

    <Toaster />
    </div>
  );
}

export default App;
