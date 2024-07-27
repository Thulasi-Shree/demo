import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LocationComponent = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [toastShown, setToastShown] = useState(false);
  const [distance, setDistance] = useState(null);

  const notifyError = (message) => toast.error(message);
  const notifySuccess = (message) => toast.success(message);

  const findMyCoordinates = async () => {
    try {
      if (navigator.geolocation) {
        const position = await new Promise((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const { latitude, longitude } = position.coords;
        setUserLocation({ latitude, longitude });
        const address = ` https://api.geoapify.com/v1/geocode/reverse?lat=${latitude}&lon=${longitude}&apiKey=70348c75b2aa4bd0b91fcba1f9e3a0dc`;
        const response = await axios.get(address);
        const { data } = response;

        console.log(data);
        notifySuccess('Location fetched successfully.');
        setToastShown(true);
        const distanceResponse = await axios.post('/api/calculate-distance', {
          latitude,
          longitude
        });
        const { distanceInKilometers } = distanceResponse.data;

        setDistance(distanceInKilometers);
      } else {
        notifyError('Geolocation is not supported by your browser');
      }
    } catch (error) {
      console.error('Error getting location:', error.message);
      notifyError(error.message);
    }
  };

  useEffect(() => {
    if (!toastShown) {
      findMyCoordinates();
    }
  }, [toastShown]);

  return (
    <div>
      {userLocation ? (
        <div>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
          {distance !== null && <p>Distance: {distance} kilometers</p>}
        </div>
      ) : (
        <p>Loading location...</p>
      )}
    </div>
  );
};

export default LocationComponent;
