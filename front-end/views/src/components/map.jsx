import React from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import "bootstrap/dist/css/bootstrap.min.css";

const Map = (props) => {
  const mapContainerStyle = {
    height: "200px",
    width: "100%",
  };

  const center = {
    lat: props.lat,
    lng: props.lng,
  };

  const zoom = 16;

  const mapOptions = {
    disableDefaultUI: false,
    zoomControl: true,
  };

  const locations = [
    { lat: props.lat, lng: props.lng, name: "Agence principale" },
  ];

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={mapOptions}
      >
        {locations.map((location) => (
          <Marker
            key={location.name}
            position={{ lat: location.lat, lng: location.lng }}
            label={location.name}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Map;
