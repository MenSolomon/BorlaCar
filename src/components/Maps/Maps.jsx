import { useState } from "react";
import "../Maps/maps.css";
import { MapContainer, TileLayer, useMap, useMapEvents } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import LocationMarker from "./LocationMarker";

function Maps() {


  return (
    <div className="map">
      <MapContainer center={[5.616133, -0.102372]} zoom={6} scrollWheelZoom={true}    style={{ height: '100vh', width: '100wh' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
   {/* <LocationMarker/> */}
      </MapContainer>
    </div>
  );
}




export default Maps;

