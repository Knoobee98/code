/* eslint-disable no-throw-literal */
import React, { useEffect, useState } from "react";

import "./supports/utilities.css";

import { Routes, Route} from "react-router-dom";
import toast from "react-hot-toast";
import axios from 'axios';

import Login from "./pages/loginPage/login";
import Register from "./pages/register/registerPage";
import Navbar from "./components/navbar/navbar";
import Homepage from "./pages/home/homepage";
import Menu from "./pages/menu/menu";

let App = () => {
    const [username, setUsername] = useState("");
    const [redirect, setRedirect] = useState(false);
    // let navigate = useNavigate();
    useEffect(() => {
      checkIsLogin()
    }, [])


    let checkIsLogin = async() => {
      try{
        let getTokenid = localStorage.getItem('token');
        if(getTokenid){
          let response = await axios.get(`http://localhost:5000/users?id=${getTokenid}`)
          setUsername(response.data[0].username)
          setRedirect(true);
        }
      } catch (error){

      }
    }

    let onLogin = async(inputUsername,inputPassword) => {

      try {
        let response = await axios.get(
          `http://localhost:5000/users?username=${inputUsername}&password=${inputPassword}`
        );

        if (response.data.length === 0) {
          throw { message: "username or password not found!" };
          //link to homepage
        } else {
          
          localStorage.setItem('token', `${response.data[0].id}`);;
          setUsername(response.data[0].username);
          toast.success("login success!");
          setTimeout(() => {
            setRedirect(true)
          }, 2000)
          // link to homepage
        }
      } catch (error) {
        toast(error.message);
      }
    };

    let onLogout = () => {
      localStorage.removeItem('token');
      setUsername("");
      setRedirect(false);
    }
    
    return (
      <>
        <Navbar data={{username}} logout={{onLogout}}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register isRedirect={{redirect}}/>} />
          <Route path="/login" element={<Login funclogin={{onLogin}} isRedirect={{redirect}} />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </>
    );
  }

export default App;

//tugas
//1. buatlah halaman landing page
//2. buatlah halaman menu (mock up)
