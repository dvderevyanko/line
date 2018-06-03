import React, { Component } from 'react';
import {MapWithAMarker} from './Map'

class ServiceMap extends Component {
  render() {
    return (
         <MapWithAMarker 
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDM1ZUDXaHjt6NIkLXDRohRxOMbggyLe90&libraries=geometry,drawing,places"
                containerElement={<div className="google-map" />}
                mapElement={<div style={{ height: `100%` }} />}
            />
    );
  }
}
export default ServiceMap;