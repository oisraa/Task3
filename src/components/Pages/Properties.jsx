import React from 'react';
import './Properties.css';
import { data } from '../data';
import Card from '../Card';
import PropertiesContainer from '../PropertiesContainer'
const Properties = () => {
  return (
    <>
    <PropertiesContainer/>
      <div className="section-properties">
        <div className="properties">
          <ul className="properties-filter">
            <li>
              <a className="is_active" href="#!" data-filter="*">Show All</a>
            </li>
            <li>
              <a href="#!" data-filter=".adv">Apartment</a>
            </li>
            <li>
              <a href="#!" data-filter=".str">Villa House</a>
            </li>
            <li>
              <a href="#!" data-filter=".rac">Penthouse</a>
            </li>
          </ul>
        </div>

        {/* Parent Container for Cards */}
        <div className="properties-box">
          {data.map((element, index) => (
            <Card
              key={index}
              image={element.image}
              title={element.title}
              price={element.price}  
              address={element.address}
              bedrooms={element.bedrooms}
              bathrooms={element.bathrooms}
              area={element.area}
              floor={element.floor}
              parking={element.parking}
            />
          ))}
        </div>
        {/* Pagination Buttons (Shape Only) */}
        <div className="row">
  <div className="col-lg-12">
    <ul className="pagination">
      <li>
        <a href="#">1</a>
      </li>
      <li>
        <a className="is_active" href="#">
          2
        </a>
      </li>
      <li>
        <a href="#">3</a>
      </li>
      <li>
        <a href="#">&gt;&gt;</a>
      </li>
    </ul>
  </div>
</div>

      </div>
    </>
  );
};

export default Properties;
