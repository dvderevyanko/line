import React, { Component } from 'react';
import { connect } from 'react-redux';
import {MapWithAMarker} from './common/Map'

class Contact extends Component {
  render() {
    let contactData = this.props.contact;
    return (
      <div className="greyBackground">
        <div className="container">
          <div className="page-content-title">{contactData.title} </div>
          <div className="contact-content">
            <div dangerouslySetInnerHTML={{__html: contactData.companyName}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.phones}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.address}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.schedule}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.email}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.social}}/>
            <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDM1ZUDXaHjt6NIkLXDRohRxOMbggyLe90&libraries=geometry,drawing,places"
                containerElement={<div style={{ height: `600px`, width: `600px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
          </div>  
        </div>  
      </div>
    );
  }
}

const mapToStateProps = state => {
  return {
    contact: state.contactState,
  }
}

export default connect(mapToStateProps/*, mapDispatchToProps*/)(Contact);