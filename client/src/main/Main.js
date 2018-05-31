import React, { Component } from 'react';

import { Carousel } from 'react-bootstrap';
import CardArticleContainer from '../components/CardArticleContainer';
import CardNavigationContainer from '../components/CardNavigationContainer';
import { connect } from 'react-redux';
import {loadNavArtCards} from "./actions"

class Main extends Component {
  
  componentWillMount() {
    this.props.onLoadCards();
  }
  render() {
    let mainData = this.props.main;
    return (
      <div>
        <div className="card-nav-section">
          <CardNavigationContainer data={mainData.navCards}></CardNavigationContainer>
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
          <CardArticleContainer data={mainData.artCards}></CardArticleContainer>
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

const mapDispatchToProps = dispatch => {
  return {
    onLoadCards: () => {
      dispatch(loadNavArtCards())
    }
  }
}

export default connect(mapToStateProps, mapDispatchToProps)(Main);