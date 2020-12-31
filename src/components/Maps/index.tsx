import React, { ReactElement } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

interface Props {}
const containerStyle = {
  width: "800px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

export default function Maps({}: Props): ReactElement {
  return (
    <div>
      <LoadScript googleMapsApiKey="AIzaSyD6Ao1lDJkpPNJs0P_l8ukCzbN-Yc4n_sU">
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
          <></>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}
