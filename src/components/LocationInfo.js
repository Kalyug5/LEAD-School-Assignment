import React from "react";
import './LocationInfo.css'

const LocationInfo = ({ locationData }) => {
  if (!locationData) return null;

  return (
    <div className="location-info">
      <h2>Location Information</h2>
      <p>Country: {locationData.country}</p>
      <p>Country abbreviation: {locationData.country_abbreviation}</p>
      <h3>Places:</h3>
      <ul>
        {locationData.places.map((place, index) => (
          <li key={index}>
            <p>Place Name: {place["place name"]}</p>
            <p>State: {place.state}</p>
            <p>State Abbreviation: {place["state abbreviation"]}</p>
            <p>Longitude: {place.longitude}</p>
            <p>Latitude: {place.latitude}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationInfo;
