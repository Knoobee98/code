import './App.css';

import {Routes, Route} from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Login from './pages/login/login';
import Register from './pages/register/register';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

    </div>
  );
}

export default App;
