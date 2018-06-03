import React, { Component } from 'react';
import { connect } from 'react-redux';
import ServiceMap from '../components/ServiceMap'

class Contact extends Component {
  render() {
    let contactData = this.props.contact;
    return (
      <div className="greyBackground">
        <div className="container">
          <div className="page-content-title">{contactData.title} </div>
          <div className="contact-content">
            <div dangerouslySetInnerHTML={{__html: contactData.companyName}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.unp}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.phones}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.address}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.schedule}}/>
            <div dangerouslySetInnerHTML={{__html: contactData.email}}/>
            <ServiceMap/>
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