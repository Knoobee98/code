import './App.css';

import {Routes, Route} from 'react-router-dom';
import toast,{Toaster} from 'react-hot-toast'

import Navbar from './components/navbar/navbar';
import LandingPage from './pages/landingPage/landingPage';
import Register from './pages/register/register';
import Home from './pages/homepage/home';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    checkIsLogin();
  }, []);

  let checkIsLogin = async() =>{
    try{
      let getToken = localStorage.getItem('token');
      if(getToken){
        let response = await axios.get(`http://localhost:5000/users?id=${getToken}`);
        setUsername(response.data[0].username);
        setRedirect(true);
      }
    } catch(error){
      console.log(error);
    }
  }

  let onLogin = async(inputUsername, inputPassword) => {

        try{
            let response = await axios.get(`http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`);

            if(response.data.length === 0){
                toast.error('Username or password is incorrect');
            } else {
                toast.success('Login success');
                setUsername(response.data[0].username);
                localStorage.setItem('token', response.data[0].id);
                setTimeout(() => {
                  setRedirect(true)
                }, 2000)
                //setTimeout to 2000ms
            }
        } catch (error) {
            toast(error.message);
        }
    }
  
    let onLogout = () => {
      console.log('logout')
      localStorage.removeItem('token');
      setRedirect(false);
    }

  return (
    <div>
      <Navbar logout={{onLogout}}/>
      <Routes>
        <Route path="/" element={<LandingPage funcLogin={{onLogin}} isRedirect={{redirect}} />} />
        <Route path="/register" element={<Register isRedirect={{redirect}}/>} />
        <Route path="/home" element={<Home data={{username}} />} />
      </Routes>

    <Toaster />
    </div>
  );
}

export default App;
