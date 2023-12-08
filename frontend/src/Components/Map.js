// Map.js
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import LocationMarker from './LocationMarker';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import {Icon} from 'leaflet'
import 'leaflet/dist/leaflet.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Map = ({ newLocation, geolocations, onDeleteLocation, setNewLocation}) => {

  
  return (
    <MapContainer
      center={[0, 0]}
      zoom={1.9}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker setNewLocation={setNewLocation} newLocation={newLocation}/>
      {geolocations.map((location) => (
        <Marker key={location._id} position={[location.latitude, location.longitude]} icon={new Icon({iconUrl: markerIconPng, iconSize: [20, 36], iconAnchor: [7, 36]})}>
          <Popup>
            <strong>Location</strong>
            <br />
            Latitude: {location.latitude}, Longitude: {location.longitude}
            <br />
            <button className="btn btn-outline-danger btn-sm mt-2" onClick={() => onDeleteLocation(location._id)}>
              Delete
            </button>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
