import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Plan from './components/Plan';
import Review from './components/Review';
import Footer from './components/Footer';

function App() {
  return (
    <div className="">
      {/* <div className="bg-red-500 h-8 w-[1440px]"></div> */}
      <Navbar />
      <Hero />
      <About />
      <Plan />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
