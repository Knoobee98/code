import Home from './pages/home/home.jsx';
import Profile from './pages/profile/profile.jsx';
import Notfound from './pages/notfound/notfound.jsx';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
}

export default App;

//react fragment: <> </>