import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

const CovidMap = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
      try {
        const response = await axios.get('https://disease.sh/v3/covid-19/countries');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries data:', error);
      }
    };

    fetchCountriesData();
  }, []);

  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '100vh', width: '100%' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {countries.map((country) => (
        <Marker key={country.countryInfo._id} position={[country.countryInfo.lat, country.countryInfo.long]}>
          <Popup>
            <div>
              <h2>{country.country}</h2>
              <p>Total Cases: {country.cases}</p>
              <p>Total Recovered: {country.recovered}</p>
              <p>Total Deaths: {country.deaths}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;
