
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          "particles": {
              "number": {
                  "value": 60,
                  "density": {
                      "enable": true,
                      "value_area": 1500
                  }
              },
              "line_linked": {
                  "enable": true,
                  "opacity": 0.15
              },
              "move": {
                  "direction": "right",
                  "speed": 0.5
              },
              "size": {
                  "value": 2
              },
              "opacity": {
                  "anim": {
                      "enable": true,
                      "speed": 2,
                      "opacity_min": 0.5
                  }
              }
          },
          "interactivity": {
              "events": {
                  "onclick": {
                      "enable": true,
                      "mode": "push"
                  }
              },
              "modes": {
                  "push": {
                      "particles_nb": 1
                  }
              }
          },
          "retina_detect": true
      }}
      />
    
      <Navbar />
      
      <Header />
      
      <AboutMe />
      
      <Education />
      
      <Services />

      <Portfolio />

      <ContactMe />

      <Footer />
    </>
  );
}

export default App;
