
import './App.css';

import {Routes, Route} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';

import Register from './pages/register/register';

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
