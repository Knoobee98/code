import React from 'react';

import { Routes, Route } from 'react-router-dom';


import Register from './pages/register/registerPage';
import Navbar from './components/navbar/navbar';

class App extends React.Component {
  render(){
    return (
      <>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      </>
      
    )
  }
}

export default App;
