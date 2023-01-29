
import './App.css';
import {Route, Routes} from 'react-router-dom';
import {useRef} from 'react';

import Chatrooms from './pages/Chatrooms/Chatrooms'
import Login from './pages/LoginScreen/Login'

export default function App(){

  return(
    <>

    
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/chatrooms' element={<Chatrooms />} />
    </Routes>
    </>
  )
}
