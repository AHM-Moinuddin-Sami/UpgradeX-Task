import Banner from '@/Components/Banner/Banner';
import Brands from '@/Components/Brands/Brands';
import Products from '@/Components/Products/Products';
import Steps from '@/Components/Steps/Steps';
import WhyUs from '@/Components/WhyUs/WhyUs';
import ZetEffect from '@/Components/ZetEffect/ZetEffect';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Brands></Brands>
      <Products></Products>
      <ZetEffect></ZetEffect>
      <WhyUs></WhyUs>
      <Steps></Steps>
    </div>
  );
};

export default HomePage;