// We will have to change the path of the components in the future
import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Details
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route
            path="/"
            element={
              <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
                <Details />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                </div>
                <About />
                <Tech />
                <Experience />
              </>
            }
          />
          <Route
            path="/works"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                </div>
                <Works />
              </>
            }
          />
          <Route
            path="/feedback"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                </div>
                <Feedbacks />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                  <Navbar />
                </div>
                <div className="relative z-0">
                  <Contact />
                  <StarsCanvas />
                </div>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
