import { useState } from 'react';
import './App.css';
import Valitsija from './Valitsija';
import Vitsit from './Vitsit';

function App() {
  const [vitsit, setVitsit] = useState([]);
  

  return (
    <div className="päälaatikko">
      <h1 style={{ textAlign: 'center' }}>CN-Jokes</h1>

      <Valitsija vitsit={vitsit} setVitsit={setVitsit} />

      <Vitsit vitsit={vitsit}  />
    </div>
  );
}

export default App;
