import React from 'react';
import Navbar from './components/Navbar';
import './asset/css/normalize.css';
import './asset/css/style.css';

import Projects from './components/projects/Projects';
import About from './components/about/About';
import Contact from './components/contact/Contact'
import {Routes,Route} from "react-router-dom";
import Home from './components/home/Home';
import Error from './components/Error';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
