import './App.css';
import { MdOutlineLogin } from 'react-icons/md'
import { Route, Router, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
