"use client";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import { useState } from "react";
import L from "leaflet";
import { onLocationSelectProps } from "@/types";
import "leaflet/dist/leaflet.css";
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});
const defaultLocation: [number, number] = [-33.8688, 151.2093];
const MapComponent = ({
  onLocationSelect,
}: {
  onLocationSelect: onLocationSelectProps;
}) => {
  const [markerPosition, setMarkerPosition] =
    useState<[number, number]>(defaultLocation);
  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
        onLocationSelect(e.latlng.lat, e.latlng.lng);
      },
    });
    return markerPosition ? <Marker position={markerPosition} /> : null;
  };
  return (
    <>
      <MapContainer
        center={defaultLocation}
        zoom={13}
        className="w-[60vw] h-96 rounded-lg"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
    </>
  );
};

export default MapComponent;
