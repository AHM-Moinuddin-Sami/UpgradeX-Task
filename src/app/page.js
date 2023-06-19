import Banner from '@/Components/Banner/Banner';
import Brands from '@/Components/Brands/Brands';
import Products from '@/Components/Products/Products';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Products></Products>
    </div>
  );
};

export default HomePage;