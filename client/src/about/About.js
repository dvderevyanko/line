import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
	
  render() {
    let aboutData = this.props.about;
    return (
      <div className="greyBackground">
        <div className="container">
          <div className="page-content-title">{aboutData.title} </div>
          <div dangerouslySetInnerHTML={{__html: aboutData.text1}} className="about"/>
          <img src={aboutData.image1} className="img-responsive"/>
          <div dangerouslySetInnerHTML={{__html: aboutData.text2}} className="about"/>
          <img src={aboutData.image2} className="img-responsive"/>
          <div dangerouslySetInnerHTML={{__html: aboutData.text3}} className="about"/>
          <img src={aboutData.image3} className="img-responsive"/>
          <div dangerouslySetInnerHTML={{__html: aboutData.text4}} className="about"/>
          <img src={aboutData.image4} className="img-responsive"/>
        </div>
      </div>
    );
  }
}

const mapToStateProps = state => {
  return {
    about: state.aboutState,
  }
}

export default connect(mapToStateProps/*, mapDispatchToProps*/)(About);