import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';
import Profile from './pages/profile/profile';

class App extends React.Component {
  render(){
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    )
  }
}

export default App;
