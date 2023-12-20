import { useState } from "react";
import { useMapEvents } from "react-leaflet";

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });
  return position === null ? null : (
    <div>
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    </div>
  );
}

export default LocationMarker;
