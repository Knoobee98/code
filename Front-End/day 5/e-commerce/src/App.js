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
import Cart from "./pages/carts/cart";
import Confirmation from "./pages/confirmation/confirmation";

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
        let token = localStorage.getItem('token')
        if(token){
          let response = await axios.post(`http://localhost:3002/users/keep-login`, {token})
          console.log(response)

          setUsername(response.data.data.username)
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
        let response = await axios.post(`http://localhost:3002/users/login`, {
          username: inputUsername,
          password: inputPassword
        })

        if (response.data.length === 0) {
          throw { message: "username or password not found!" };
          //link to homepage
        } else {
          console.log(response);
          localStorage.setItem('token', `${response.data.data.token}`);;
          setUsername(response.data.data.username);
          toast.success(response.data.message);
          setTimeout(() => {
            setRedirect(true)
          }, 2000)
          // link to homepage
        }
      } catch (error) {
        console.log(error)
        toast(error.response.data.message);
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
          <Route path="/cart" element={<Cart />} />
          <Route path="/confirmation/:id" element={<Confirmation />} />
        </Routes>
      </>
    );
  }

export default App;

//tugas
//1. buatlah halaman landing page
//2. buatlah halaman menu (mock up)
