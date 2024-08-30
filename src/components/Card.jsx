import React from 'react';
import './Card.css';

const Card = ({ image, title, price, address, bedrooms, bathrooms, area, floor, parking }) => {
  return (
    <div className="inside-box">
      <div className="item-box">
        <a href="property-details.html">
          <img src={image} alt={title} />
        </a>
        <span className="category">{title}</span>
        <h6>{price}</h6>
        <h4>
          <a href="property-details.html">{address}</a>
        </h4>
        <ul>
          <li>Bedrooms: <span>{bedrooms}</span></li>
          <li>Bathrooms: <span>{bathrooms}</span></li>
          <li>Area: <span>{area}</span></li>
          <li>Floor: <span>{floor}</span></li>
          <li>Parking: <span>{parking}</span></li>
        </ul>
        <div className="main-button">
          <a href="property-details.html">Schedule a visit</a>
        </div>
      </div>
    </div>
  );
}

export default Card;
