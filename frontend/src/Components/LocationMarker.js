import React from 'react';
import {Marker, Popup, useMapEvents } from 'react-leaflet';
import markerIconPng from "leaflet/dist/images/marker-icon-2x.png"
import {Icon} from 'leaflet'

function LocationMarker({setNewLocation, newLocation}) {
    const map = useMapEvents({
      click(e) {
        setNewLocation({ latitude: e.latlng.lat, longitude: e.latlng.lng });
        map.flyTo(e.latlng, map.getZoom())
      }
    })
    return newLocation === null ? null : (
      <Marker position={[(newLocation.latitude >= -90  && newLocation.latitude <= 90 ) ? newLocation.latitude : 0 , 
                        (newLocation.longitude >= -180  && newLocation.longitude <= 180 ) ? newLocation.longitude : 0 ]}
                         icon={new Icon({iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41]})}>
        <Popup>Selected location</Popup>
      </Marker>
    )
  }

  export default LocationMarker