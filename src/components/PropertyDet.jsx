// PropertyDet.jsx
import React from 'react';
import PageHeader from './PageHeader'; 

const PropertyDet = () => {
  return (
    <>
      <PageHeader 
        breadcrumb="Single Property"
        title="Property Details" 
        imageSrc="assets/images/page-heading-bg.jpg" 
      />
      {/* Additional content specific to the single property details can go here */}
    </>
  );
};

export default PropertyDet;
