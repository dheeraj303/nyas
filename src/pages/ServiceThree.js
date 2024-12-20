import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FooterOne from '../components/FooterOne';
import NavBar from '../components/NavBar';
import ServiceAreaSeven from '../components/ServiceAreaSeven';
import PricingAreaOne from '../components/PricingAreaOne';
import ServiceAreaGroupThree from '../components/ServiceAreaGroupThree';

const ServiceThree = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={'Our Services'} />

      {/* ServiceAreaGroupThree */}
      <ServiceAreaGroupThree />

      {/* <ServiceAreaSeven /> */}
      {/* Pricing Area One */}
      {/* <PricingAreaOne /> */}

      {/* Footer One */}
      <FooterOne />
    </>
  );
};

export default ServiceThree;
