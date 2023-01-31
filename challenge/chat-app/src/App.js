import './App.css';
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import Home from './pages/home';

// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

//import socket
import io from 'socket.io-client';
const socket = io('http://localhost:2023');



function App() {
  const [user, setUser] = useState({
    username: null,
    roomname: null,
  })
  
  let navigate = useNavigate();

  let onJoin = (username, roomname) => {
    try {
      if(username && roomname){
        // setUser(username, roomname)
        socket.emit('join', {username, roomname})
        setUser(username, roomname)
        navigate('/home')
      }
    } catch (error) {
      
    }
  }
  return (
    <>
      <Routes>
        <Route path='/' element={<Login join={{onJoin}} />} />
        <Route path='/home' element={<Home io={{socket}} room={{roomname: user.roomname}} />} />
      </Routes>
    </>
  );
}

export default App;
