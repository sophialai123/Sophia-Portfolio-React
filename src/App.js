import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (

    // Navigate different conponets
    <Router>
      {/* each page with have the Nav bar, put on top of Routes. element will link to different pages*/}
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </Router>



  );
}

export default App;

// <Routes>
// <Route path='/Home' element={<Home />}>Home</Route>
// <Route path='/About' element={<About />}>About</Route>
// <Route path='/Projects' element={<Projects />}>Projects</Route>
// <Route path='/Contact' element={<Contact />}>Contact</Route>
// </Routes>
