import React, { useState,} from "react";
import PostalCodeForm from "./components/PostalCodeForm";
import LocationInfo from "./components/LocationInfo";
import axios from "axios";
import './App.css'

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const fetchLocationData = async (postalCode) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(`https://api.zippopotam.us/in/${postalCode}`);
      const data = response.data;
      console.log(data);
      setLocationData({
        country: data.country,
        country_abbreviation: data["country abbreviation"],
        places: data.places,
      });
    } catch (error) {
      setError("Error fetching data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app">
      <h1>Zip Code Information App - LEAD School</h1>
      <PostalCodeForm onFormSubmit={fetchLocationData} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <LocationInfo locationData={locationData} />
    </div>
  );
};

export default App;  