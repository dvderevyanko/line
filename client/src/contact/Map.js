/* eslint-disable no-undef */
import React from 'react';
import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import {MarkerWithLabel} from "react-google-maps/lib/components/addons/MarkerWithLabel";
//https://tomchentw.github.io/react-google-maps/#withgooglemap
export const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={15}
    defaultCenter={{ lat: 52.466992, lng: 31.046841 }}
  >
  
  <MarkerWithLabel
      position={{ lat: 52.466992, lng: 31.046841 }}
      labelAnchor={new google.maps.Point(0, 0)}
      //labelStyle={{backgroundColor: "#ff0000", fontSize: "16px", padding: "16px", borderRadius: "50%", textAlign: "center", display: "inline-block"}}
        /*labelStyle = {{
          margin: "36px",
          width: "0px",
          height: "1px",
          border: "15px solid red",
          borderLeftColor: "transparent",
          borderRadius: "50%"}}*/
    >

      <div>Мы здесь!</div>
    </MarkerWithLabel>
  </GoogleMap>
);
