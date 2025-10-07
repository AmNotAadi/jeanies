import React from 'react';
import Hero from '../components/Hero';
import DesignSelector from '../components/DesignSelector';
import Craftsmanship from '../components/Craftsmanship';
import FabricGallery from '../components/FabricGallery';

const Home = () => {
  return (
    <div>
      <Hero />
      <DesignSelector />
      <Craftsmanship />
      <FabricGallery />
    </div>
  );
};

export default Home;
