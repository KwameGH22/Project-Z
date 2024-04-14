import React from 'react';
import Hero from '../Hero/Hero';
import ZX9 from '../ZX9/ZX9';
import AudioCard from '../AudioCard/AudioCard';
import ZX7 from '../ZX7/ZX7';
import YX1 from '../YX1/YX1';
import Tagline from '../tagline/Tagline';

const Home = () => {
  return (
    <div>
      <Hero/>
      <AudioCard/>
      <ZX9/>
      <ZX7/>
      <YX1/>
      <Tagline/>
    </div>
  )
}

export default Home
