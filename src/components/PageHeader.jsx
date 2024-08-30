import React from 'react';
import './PageHeader.css'; 

const PageHeader = ({ breadcrumb, title,  imageSrc }) => {
  return (
    <div
      className="page-heading header-text"
      style={{ backgroundImage: `url(${imageSrc})` }} 
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <span className="breadcrumb">
              <a href="#">Home</a> / {breadcrumb}
            </span>
            <h3>{title}</h3>
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
