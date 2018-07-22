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
              <h2 className="middle-header">Станция ООО «Линия Сервиса» ПРЕДЛАГАЕТ</h2>
              <p className="desc">УСЛУГИ ПО РЕМОНТУ ВСЕХ ВИДОВ ИНОМАРОК И МИКРОАВТОБУСОВ ПО ДОСТУПНЫМ ЦЕАМ !!! • Компьютерный развал-схождение • Компьютерная диагностика авто • Автоэлектрик • Диагностика и ремонт подвески • Замена амортизаторов • Ремонт двигателей • Замена ремней ГРМ • Замена радиатора печки • Замена сайлентблоков • Регулировка света фар • Диагностика и заправка кондиционеров • Замена масел и технических жидкостей • Ремонт системы охлаждения • Ремонт сцепления • Замена фильтров • Шиномонтажные работы • Ремонт микроавтобусов • Замена ремня генератора • Замена рулевой рейки • Иные виды ремонта</p>
            </div>
          </div>
        </div>
        <div className="greyBackground">
          <CardArticleContainer data={mainData.artCards}></CardArticleContainer>
          <img src='assets/opened.jpg' className="img-responsive"/>
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