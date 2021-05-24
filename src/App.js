
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Education from "./components/Education";
import Portfolio from "./components/Portfolio";
// import Testimonials from "./components/Testimonials";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 1000
              }
            },
            color: {
              value: "#fffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#ffffff"
              }
            }
          }
        }}
      />
      <Navbar />

      <Header />

      <AboutMe />

      <Education />
      
      <Services />

      

      

      <Portfolio />

      {/* <Testimonials /> */}

      <ContactMe />

      <Footer />
    </>



  );
}



export default App;
