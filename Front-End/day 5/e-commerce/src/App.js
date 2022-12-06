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
import DetailProduct from "./pages/detail/detailProduct";

import {
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import {auth} from './firebase';

let App = () => {
    const [username, setUsername] = useState("");
    const [redirect, setRedirect] = useState(false);
    // let navigate = useNavigate();
    useEffect(() => {
      checkIsLogin()
      checkTokenUid()
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

    let checkTokenUid = () => {
      if(localStorage.getItem('tokenUid')){
        onAuthStateChanged(auth, (userFromFirebase) => {
          console.log('running!');
          if(userFromFirebase){
            setUsername(userFromFirebase.email)
          }
        })
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

    let onLoginWithGoogle = async() => {
      let provider = new GoogleAuthProvider();
      try{
          let response = await signInWithPopup(auth, provider);
          toast.success("login success!");
          localStorage.setItem('tokenUid', response.user.uid);
          setUsername(response.user.email);
          setTimeout(() => {
            setRedirect(true)
          }, 2000)

          // setUsername(response.user);
          console.log(response);
      } catch(error){
          console.log(error.message);
      }
    }

    // onAuthStateChanged(auth, (userFromFIrebase) => {
    //   if(userFromFIrebase){
    //     setUsername(userFromFIrebase.email)
    //   }
    // });

    let onLogout = () => {
      toast.success("logout success!");
      localStorage.removeItem('token');
      localStorage.removeItem('tokenUid');
      signOut(auth);
      setUsername("");
      setRedirect(false);
      
    }
    
    return (
      <>
        <Navbar data={{username}} logout={{onLogout}}/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register isRedirect={{redirect}}/>} />
          <Route path="/login" element={<Login funclogin={{onLogin}} funcLogingoogle={{onLoginWithGoogle}} isRedirect={{redirect}} />} />
          <Route path="/menu" element={<Menu />} />
          <Route exact path="/product/:id" element={<DetailProduct />} />
        </Routes>
      </>
    );
  }

export default App;

//tugas
//1. buatlah halaman landing page
//2. buatlah halaman menu (mock up)
