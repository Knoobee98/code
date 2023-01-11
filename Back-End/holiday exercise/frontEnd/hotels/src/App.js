
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Explore from './components/explore/explore';
import Home from './components/home/homepage';
import Recommended from './components/recommended/recommended';
import Search from './pages/SearchResult/SearchResult';
import Details from './pages/HotelDetail/HotelDetail';


let App = () => {

  return(
    <>
      <Navbar />
      <Home />
      {/* search */}
      <Explore />
      <Recommended />
      <Routes>
        <Route path="/search" element={<Search />}/>
        <Route path="/hotels" element={<Details />}/>
      </Routes>
    </>
    
  )
}

export default App;
