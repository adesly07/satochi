import React from 'react';
import './App.css';
import Hero from './Hero';
import Actions from './Actions';
import Dev from './Dev';
import Sta from './Sta';
import Footer from './Footer';
function App() {
  return (
    <div className='wrapper'>
      <Hero/>
      <Actions/>
      <Dev/>
      <Sta/>
      <Footer/>
    </div>
  );
}

export default App;
