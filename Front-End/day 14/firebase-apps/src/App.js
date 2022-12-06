// import './App.css';

// import {Suspense, lazy} from 'react';
// import {Routes, Route} from 'react-router-dom';

// const Home = lazy(() => import('./pages/home'));
// const Profile = lazy(() => import('./pages/profile'));
import {
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from 'firebase/auth';
import {auth} from './firebase';
import {useRef, useState} from 'react';

const provider = new GoogleAuthProvider();


function App() {
    const email = useRef();
    const password = useRef();
    const [data, setData] = useState('')

    let onRegister = async() => {
      try{
        let inputEmail = email.current.value;
        let inputPassword = password.current.value;
        let response = await createUserWithEmailAndPassword(
          auth,
          inputEmail,
          inputPassword
        )
        console.log(response);
      }
      catch(error) {
        console.log(error);
      }
    }

    let onLogin = async() => {
      try{
        let inputEmail = email.current.value;
        let inputPassword = password.current.value;
        let response = await signInWithEmailAndPassword(
          auth,
          inputEmail,
          inputPassword
        )
        console.log(response);
      } catch(error){
        console.log(error.message)
      }
    }

    let onLoginWithGoogle = async() => {
      try{
        let response = await signInWithPopup(
          auth, provider
        )
        setData(response.user.email)
        console.log(response);
      } catch(error){
        console.log(error.message)
      }
    }

    onAuthStateChanged(auth, (userFromFIrebase) => {
      if(userFromFIrebase){
        setData(userFromFIrebase.email)
      }
    });

  return (
    // <Suspense fallback={<h1>Loading...</h1>}>
    //   <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/profile" element={<Profile />} />
    //   </Routes>
    // </Suspense>
    <>
    <h1>{data}</h1>
    <input ref={email} type='text' placeholder='Enter your email'/>
    <input ref={password} type='password' placeholder='Enter your password'/>
    {/* <button onClick={onRegister}>submit</button> */}
    <button onClick={onLogin}>login</button>
    <button onClick={onLoginWithGoogle}>sign in with google</button>
    <button onClick={() => signOut(auth)}>logout</button>
    </>
    
  );
}

export default App;
