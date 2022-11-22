import './stylesheet/styles.css';

import Navbar from './components/navbar';
import Jumbotron from './components/jumbotron';
import About from './components/about';
import Work from './components/work';
import Porto from './components/portfolio';
import Contact from './components/contact';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Work />
      <Porto />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
