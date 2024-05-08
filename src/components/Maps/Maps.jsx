// import { useEffect, useState } from "react";
// import "../Maps/maps.css";
// import {
//   MapContainer,
//   Marker,
//   Popup,
//   TileLayer,
//   useMap,
//   useMapEvents,
// } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// // import LocationMarker from "./LocationMarker";

// function Maps() {
//   const position = [51.505, -0.09];

//   const [location, setLocation] = useState([15.616133, -0.1902372]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     // Check if Geolocation is supported by the browser
//     if (!navigator.geolocation) {
//       setError("Geolocation is not supported by your browser");
//       return;
//     }

//     // Get the user's current location
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setLocation([latitude, longitude]);
//         // alert(latitude + " long: " + longitude);
//         console.log([latitude, longitude]);
//       },
//       (error) => {
//         setError(`Error getting location: ${error.message}`);
//       }
//     );
//   }, []);

//   return (
//     <div className="map">
//       <MapContainer
//         center={[5.616133, -0.102372]}
//         zoom={6}
//         scrollWheelZoom={true}
//         style={{ height: "100vh", width: "100wh" }}
//       >
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {/* <LocationMarker /> */}
//         <Marker position={location}>
//           <Popup>
//             A pretty CSS3 popup. <br /> Easily customizable.
//           </Popup>
//         </Marker>
//       </MapContainer>
//     </div>
//   );
// }

// export default Maps;

import GoogleMapReact from "google-map-react";
import { useEffect, useState } from "react";

const AnyReactComponent = ({ imageUrl }) => (
  <div style={{ width: "30px", height: "30px", overflow: "hidden" }}>
    <img
      src={imageUrl}
      alt="Marker"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
);

const Maps = () => {
  const defaultProps = {
    center: {
      lat: 5.6892131,
      lng: -0.2826359,
    },
    zoom: 11,
  };
  const markers = [
    {
      lat: 5.6892131,
      lng: -0.2826359,
      imageUrl: "../../../public/mapMarker.png",
    },
    {
      lat: 5.6892131,
      lng: -0.2826359,
      imageUrl: "../../../public/mapMarker.png",
    },
    // Add more markers as needed
  ];

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640); // Initial state

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);

    // Cleanup function to remove event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div style={{ height: isMobile ? "63vh" : "80vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAppvhOzgnhAFzjbZWSNrr2498HR34RMb8" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        {/* <ReactComponent lat={5.6892131} lng={-0.2826359} text={"My marker"} /> */}
        {/* <AnyReactComponent lat={5.6892131} lng={-0.2826359} text="My Marker" /> */}
        {markers.map((marker, index) => (
          <AnyReactComponent
            key={index}
            lat={marker.lat}
            lng={marker.lng}
            imageUrl={marker.imageUrl}
          />
        ))}
      </GoogleMapReact>
    </div>
  );
};

export default Maps;
