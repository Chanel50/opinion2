import React from 'react';
import Slideshow from '../components/Slideshow';
import Stat from '../components/Stat';
import Card from '../components/Card';
import Clique from '../components/Clique';

const Homepage = () => {
  return (
    <>
      <Slideshow />
      <br />
      <Card />
      <br />
      <Clique />
      <br />
      <Stat />
      
    </>
  );
};

export default Homepage;

