import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import Episodes from './Components/Episodes/Episodes'; 
import Characters from './Components/Characters/Characters';
import Seasons from './Components/Seasons/Seasons';
import About from './Components/About/About';

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/characters" element={<Characters/>} />
        <Route path='/seasons' element={<Seasons/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </Router>
  );
};

export default App;