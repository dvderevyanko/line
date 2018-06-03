import React, { Component } from 'react';
import { connect } from 'react-redux';

class About extends Component {
	
  render() {
    let aboutData = this.props.about;
    return (
      <div className="greyBackground">
        <div className="container">
          <div className="page-content-title">{aboutData.title} </div>
          <div dangerouslySetInnerHTML={{__html: aboutData.contentHeader}} className="about"/>
          <img src={aboutData.imageHeader} className="img-responsive"/>
          <div dangerouslySetInnerHTML={{__html: aboutData.contentBody}} className="about"/>
          <img src={aboutData.imageFooter} className="img-responsive"/>
          <div dangerouslySetInnerHTML={{__html: aboutData.contentFooter}} className="about"/>
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