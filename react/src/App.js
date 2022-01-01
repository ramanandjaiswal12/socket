import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Main from './Component/main';
import Socket from './Component/socket';

import './App.css';

function App() {
  return (
    <Router>
      <div className='main'>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/socket-page" element={<Socket />} />

        </Routes>
      </div >
    </Router>



  );
}

export default App;
