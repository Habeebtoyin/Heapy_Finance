import React from 'react';
// import { Routes, Route} from "react-router-dom";
// import Home from './Home';
import Stake from './Stake';
import './App.css';
import './Style.css';

function App() {
  return (
    <div className="App">
      <Stake />
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="stake" element={<Stake />} />
      </Routes> */}
    </div>
  );
}

export default App;
