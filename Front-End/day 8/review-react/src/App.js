
import './App.css';

import {useState} from 'react';

function App() {
  const [angka, setAngka] = useState(0);

  let ubahAngka = () => {
    setAngka(angka + 1);
  }

  return (
      <div style={{margin: '100px'}}>
        <h1>react ubah angka</h1>
        <p>+</p>
        <p>{angka}</p>
        <button onClick={ubahAngka}>ubah angka</button>
        
      </div>
  );
}

export default App;
