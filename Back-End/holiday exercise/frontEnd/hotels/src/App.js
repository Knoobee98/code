
import './App.css';

import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './pages/Homepage/Homepage';
import Search from './pages/SearchResult/SearchResult';
import Details from './pages/HotelDetail/HotelDetail';
import Footer from './components/footer/footer';


let App = () => {

  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/hotels" element={<Details />}/>
      </Routes>
      <Footer />
    </>
    
  )
}

export default App;
