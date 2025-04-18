import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Works } from './components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      
      <div className="relative z-0 bg-primary">
      <ToastContainer position="top-center" autoClose={3000}/>
      <h1 style={{ color: 'white', textAlign: 'center' }}>Hello</h1>
      
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        {/* <Experience />
        <Tech /> */}
        <Works />
        <div className="relative z-0">
          <Contact />
          {/* <StarsCanvas /> */}
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
