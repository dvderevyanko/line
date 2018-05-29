import React, { Component } from 'react';
import { connect } from 'react-redux';

class Partner extends Component {
  render() {
    let partnerData = this.props.partner;
    return (
      <div className="greyBackground">
        <div className="container">
          <div className="page-content-title">{partnerData.title} </div>
          <div dangerouslySetInnerHTML={{__html: partnerData.content}} className="about"/>
        </div>
      </div>
    );
  }
}

const mapToStateProps = state => {
  return {
    partner: state.partnerState,
  }
}

export default connect(mapToStateProps/*, mapDispatchToProps*/)(Partner);