import Banner from '@/Components/Banner/Banner';
import Brands from '@/Components/Brands/Brands';
import Products from '@/Components/Products/Products';
import ZetEffect from '@/Components/ZetEffect/ZetEffect';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Products></Products>
      <ZetEffect></ZetEffect>
    </div>
  );
};

export default HomePage;