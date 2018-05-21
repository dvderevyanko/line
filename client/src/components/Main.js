import React, { Component } from 'react';

import MainContent from './common/MainContent';
import { Carousel } from 'react-bootstrap';
import CardArticleContainer from './common/CardArticleContainer';
import CardNavigationContainer from './common/CardNavigationContainer';
import { connect } from 'react-redux';

class Main extends Component {
  render() {
    let mainData = this.props.main;
    return (
      <div>
        <div className="card-nav-section">
          <CardNavigationContainer data={mainData.cards}></CardNavigationContainer>
        </div>
        <div className="main-middle-section">
          <div className="container" >
            <div className="col-md-12">
              <h2 className="middle-header">Мы — Профессионалы высочайшего класса</h2>
              <p className="desc">Мы используем самые качественные материалы и работы осуществляются теми, кто являются профессионалами высочайшего класса.</p>
            </div>
          </div>
        </div>
        <div className="greyBackground">
          <CardArticleContainer></CardArticleContainer>
        </div>
      </div>

    );
  }
}

const mapToStateProps = state => {
  return {
    main: state.mainState,
  }
}

/*const mapDispatchToProps = dispatch => {
  return {
    onSetYear: newYear => {
      dispatch(setYear(newYear))
    },
    onRequest: newYear => {
      dispatch(getPhotos(newYear))
    }
  }
}*/

export default connect(mapToStateProps/*, mapDispatchToProps*/)(Main);