import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Overview from './Components/Overview/Overview';
import Partners from './Components/Patners/Patners';
import Services from './Components/Services/Services';
import Animation from './Components/Animation/Animation';
import Testimonials from './Components/Testimonials/Testimonials';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div id="home">
                <Home />
              </div>
              <div id="partners">
                <Partners />
              </div>
              <div id="overview">
                <Overview />
              </div>
              <div id="services">
                <Services />
              </div>
              <div id="animation">
                <Animation />
              </div>
              <div id="testimonials">
                <Testimonials />
              </div>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
