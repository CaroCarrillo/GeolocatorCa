import React, { useState, useEffect } from 'react';
import Map from './Components/Map';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [geolocations, setGeolocations] = useState([]);
  const [newLocation, setNewLocation] = useState({ latitude: 0, longitude: 0 });

  // function that validates the input of only numbers
  const isValidNumber = (e) => {
    const validNumber = /^[-]?\d*\.?\d+$/.test(e.key);
    if(!validNumber && e.key !== "Backspace" && e.key !== "ArrowRight" && e.key !== "ArrowLeft" && e.key !== "-"){
      e.preventDefault();
    }
    
  };

  // Take the value of the input and setNewCoordinates
  const onChangeCoordinatesInputs = (e) => {
    const inputCoordinateName = e.target.name;    
    setNewLocation({...newLocation,[inputCoordinateName]:e.target.value})
  }

  const handleAddLocation = async () => {
    try {
      await axios.post('http://localhost:5000/api/geolocations/AddGeolocations', newLocation);
      setNewLocation({ latitude: 0, longitude: 0 });
      fetchGeolocations();
    } catch (error) {
      alert('Error adding geolocation, invalid coordinates')
      console.error('Error adding geolocation:', error);
    }
  };

  const handleDeleteLocation = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/geolocations/DeleteGeolocations/${id}`);
      fetchGeolocations();
    } catch (error) {
      console.error('Error deleting geolocation:', error);
    }
  };

  const fetchGeolocations = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/geolocations/GetGeolocations');
      setGeolocations(response.data);
    } catch (error) {
      console.error('Error fetching geolocations:', error);
    }
  };

  useEffect(() => {
    fetchGeolocations();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">GeolocationCa App</h1>
      <Map setNewLocation={setNewLocation} newLocation={newLocation} geolocations={geolocations} onDeleteLocation={handleDeleteLocation} />
      <div className="mt-4">
        <h2>Add Location</h2>
        <div className="mb-3">
          <label className="me-2">Latitude:</label>
          <input name="latitude" type="text" value={newLocation.latitude} onKeyDown={isValidNumber} onChange={onChangeCoordinatesInputs}/>
        </div>
        <div className="mb-3">
          <label className="me-2">Longitude:</label>
          <input name="longitude" type="text" value={newLocation.longitude} onChange={onChangeCoordinatesInputs} />
        </div>
        <button className="btn btn-primary" onClick={handleAddLocation}>
          Add Location
        </button>
      </div>
    </div>
  );
}

export default App;
